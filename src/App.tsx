import { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import Dashboard from './pages/Dashboard';
import { Loader2, Brain } from 'lucide-react';

type Page = 'landing' | 'signin' | 'signup' | 'dashboard';

function AppContent() {
  const { isAuthenticated, isLoading, signOut } = useAuth();
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  // Redirect to dashboard if authenticated
  useEffect(() => {
    if (isAuthenticated && currentPage !== 'dashboard') {
      setCurrentPage('dashboard');
    }
  }, [isAuthenticated, currentPage]);

  // Handle sign out
  const handleSignOut = () => {
    signOut();
    setCurrentPage('landing');
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mb-4 animate-pulse">
            <Brain size={32} className="text-white" />
          </div>
          <div className="flex items-center justify-center gap-2 text-white">
            <Loader2 size={20} className="animate-spin" />
            <span>Loading ProductionOS...</span>
          </div>
        </div>
      </div>
    );
  }

  // If authenticated, show dashboard
  if (isAuthenticated) {
    return <Dashboard onSignOut={handleSignOut} />;
  }

  // Otherwise show public pages
  switch (currentPage) {
    case 'signin':
      return (
        <SignInPage
          onNavigate={(page) => setCurrentPage(page)}
          onSuccess={() => setCurrentPage('dashboard')}
        />
      );
    case 'signup':
      return (
        <SignUpPage
          onNavigate={(page) => setCurrentPage(page)}
          onSuccess={() => setCurrentPage('dashboard')}
        />
      );
    case 'dashboard':
      // If not authenticated but trying to access dashboard, redirect to signin
      return (
        <SignInPage
          onNavigate={(page) => setCurrentPage(page)}
          onSuccess={() => setCurrentPage('dashboard')}
        />
      );
    default:
      return (
        <LandingPage onNavigate={(page) => setCurrentPage(page)} />
      );
  }
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
