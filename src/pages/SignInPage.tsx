import { useState } from 'react';
import { Brain, ArrowLeft, Eye, EyeOff, Loader2, LogIn, Sparkles } from 'lucide-react';
import { DEMO_CREDENTIALS, useAuth } from '../context/AuthContext';

interface SignInPageProps {
  onNavigate: (page: 'landing' | 'signup') => void;
  onSuccess: () => void;
}

export default function SignInPage({ onNavigate, onSuccess }: SignInPageProps) {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }
    if (!password) {
      setError('Please enter your password');
      return;
    }

    setIsLoading(true);
    setError('');

    const result = await signIn(email, password);

    setIsLoading(false);

    if (result.success) {
      onSuccess();
    } else {
      setError(result.error || 'Invalid credentials. Please try again.');
    }
  };

  const handleDemoLogin = async () => {
    setEmail(DEMO_CREDENTIALS.email);
    setPassword(DEMO_CREDENTIALS.password);
    setError('');
    setIsLoading(true);

    const result = await signIn(DEMO_CREDENTIALS.email, DEMO_CREDENTIALS.password);
    setIsLoading(false);

    if (result.success) {
      onSuccess();
    } else {
      setError(result.error || 'Unable to start the demo. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-indigo-600/20" />
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
              <Brain size={22} className="text-white" />
            </div>
            <span className="font-bold text-xl text-white">ProductionOS</span>
          </div>
        </div>

        <div className="relative">
          <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
            Welcome back to your AI Command Center
          </h1>
          <p className="text-violet-200 text-lg mb-8">
            Sign in to access your operational intelligence dashboard and AI-powered insights.
          </p>
          
          {/* Live Stats Preview */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={18} className="text-violet-300" />
              <span className="text-white font-medium">Live System Status</span>
              <span className="ml-auto flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-300 text-sm">All systems operational</span>
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Active Users', value: '2,847' },
                { label: 'Alerts Processed', value: '12.4K' },
                { label: 'AI Uptime', value: '99.99%' },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-violet-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative text-violet-300 text-sm">
          © 2026 ProductionOS. All rights reserved.
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
              <Brain size={22} className="text-white" />
            </div>
            <span className="font-bold text-xl text-white">ProductionOS</span>
          </div>

          {/* Back Button */}
          <button
            onClick={() => onNavigate('landing')}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            <span className="text-sm">Back to home</span>
          </button>

          {/* Form Card */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Sign in to your account</h2>
              <p className="text-slate-500">Enter your credentials to access your dashboard</p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(''); }}
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-sm font-medium text-slate-700">Password</label>
                  <button type="button" className="text-sm text-violet-600 hover:underline">
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setError(''); }}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-violet-600 focus:ring-violet-500"
                />
                <label htmlFor="remember" className="text-sm text-slate-600">
                  Remember me for 30 days
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-violet-600 text-white font-semibold rounded-xl hover:bg-violet-700 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    <LogIn size={18} />
                    Sign In
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center gap-4">
              <div className="flex-1 h-px bg-slate-200" />
              <span className="text-sm text-slate-400">or continue with</span>
              <div className="flex-1 h-px bg-slate-200" />
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-sm font-medium text-slate-700">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
                </svg>
                <span className="text-sm font-medium text-slate-700">Apple</span>
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-slate-600">
                Don't have an account?{' '}
                <button
                  onClick={() => onNavigate('signup')}
                  className="text-violet-600 font-medium hover:underline"
                >
                  Sign up for free
                </button>
              </p>
            </div>
          </div>

          {/* Demo Credentials */}
          <div className="mt-6 bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-violet-400" />
                <span className="text-sm font-medium text-white">Demo Account</span>
              </div>
              <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                Ready
              </span>
            </div>
            <div className="mb-3 space-y-1 rounded-lg bg-slate-950/40 p-3 font-mono text-xs text-slate-300">
              <p>Email: {DEMO_CREDENTIALS.email}</p>
              <p>Password: {DEMO_CREDENTIALS.password}</p>
            </div>
            <button
              type="button"
              onClick={handleDemoLogin}
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-violet-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? <Loader2 size={16} className="animate-spin" /> : <LogIn size={16} />}
              Login as Demo User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
