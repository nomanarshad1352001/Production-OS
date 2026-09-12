import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  company: string;
  role: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signUp: (data: SignUpData) => Promise<{ success: boolean; error?: string }>;
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signOut: () => void;
}

interface SignUpData {
  name: string;
  email: string;
  password: string;
  company: string;
  role: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USERS_STORAGE_KEY = 'productionos_users';
const CURRENT_USER_KEY = 'productionos_current_user';

export const DEMO_CREDENTIALS = {
  email: 'demo@productionos.ai',
  password: 'Demo123!',
} as const;

const DEMO_USER: User = {
  id: 'user_demo',
  name: 'Alex Morgan',
  email: DEMO_CREDENTIALS.email,
  company: 'Northstar Fashion',
  role: 'operations',
  createdAt: '2025-01-01T00:00:00.000Z',
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const storedUser = localStorage.getItem(CURRENT_USER_KEY);
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem(CURRENT_USER_KEY);
      }
    }
    setIsLoading(false);
  }, []);

  const getUsers = (): Record<string, { user: User; password: string }> => {
    const stored = localStorage.getItem(USERS_STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return {};
      }
    }
    return {};
  };

  const saveUsers = (users: Record<string, { user: User; password: string }>) => {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  };

  const signUp = async (data: SignUpData): Promise<{ success: boolean; error?: string }> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const users = getUsers();

    // Check if email already exists
    if (data.email.toLowerCase() === DEMO_CREDENTIALS.email || users[data.email]) {
      return { success: false, error: 'An account with this email already exists' };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return { success: false, error: 'Please enter a valid email address' };
    }

    // Validate password strength
    if (data.password.length < 6) {
      return { success: false, error: 'Password must be at least 6 characters' };
    }

    // Create new user
    const newUser: User = {
      id: `user_${Date.now()}`,
      name: data.name,
      email: data.email,
      company: data.company,
      role: data.role,
      createdAt: new Date().toISOString(),
    };

    // Save user
    users[data.email] = { user: newUser, password: data.password };
    saveUsers(users);

    // Set current user
    setUser(newUser);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));

    return { success: true };
  };

  const signIn = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Built-in account for product demonstrations and dashboard previews.
    if (email.trim().toLowerCase() === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password) {
      setUser(DEMO_USER);
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(DEMO_USER));
      return { success: true };
    }

    const users = getUsers();
    const userRecord = users[email];

    if (!userRecord) {
      return { success: false, error: 'No account found with this email address' };
    }

    if (userRecord.password !== password) {
      return { success: false, error: 'Incorrect password. Please try again.' };
    }

    // Set current user
    setUser(userRecord.user);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userRecord.user));

    return { success: true };
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem(CURRENT_USER_KEY);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      isLoading,
      signUp,
      signIn,
      signOut,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
