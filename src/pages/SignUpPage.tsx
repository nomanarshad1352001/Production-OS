import { useState } from 'react';
import { Brain, ArrowLeft, Eye, EyeOff, CheckCircle, Loader2, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface SignUpPageProps {
  onNavigate: (page: 'landing' | 'signin') => void;
  onSuccess: () => void;
}

export default function SignUpPage({ onNavigate, onSuccess }: SignUpPageProps) {
  const { signUp } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    role: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Please enter your full name');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Please enter your email address');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    if (!formData.company.trim()) {
      setError('Please enter your company name');
      return false;
    }
    if (!formData.role) {
      setError('Please select your role');
      return false;
    }
    if (!agreedToTerms) {
      setError('Please agree to the Terms of Service and Privacy Policy');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    setError('');

    const result = await signUp({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      company: formData.company,
      role: formData.role,
    });

    setIsLoading(false);

    if (result.success) {
      onSuccess();
    } else {
      setError(result.error || 'Something went wrong. Please try again.');
    }
  };

  const passwordStrength = () => {
    const pwd = formData.password;
    if (pwd.length === 0) return { text: '', color: '', width: '0%' };
    if (pwd.length < 6) return { text: 'Too short', color: 'bg-red-500', width: '25%' };
    if (pwd.length < 8) return { text: 'Weak', color: 'bg-orange-500', width: '50%' };
    if (pwd.length < 12 && /[A-Z]/.test(pwd) && /[0-9]/.test(pwd)) return { text: 'Good', color: 'bg-yellow-500', width: '75%' };
    if (pwd.length >= 12 && /[A-Z]/.test(pwd) && /[0-9]/.test(pwd) && /[^A-Za-z0-9]/.test(pwd)) return { text: 'Strong', color: 'bg-emerald-500', width: '100%' };
    return { text: 'Moderate', color: 'bg-yellow-500', width: '60%' };
  };

  const strength = passwordStrength();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-indigo-600/20" />
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        
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
            Start operating smarter with AI-powered intelligence
          </h1>
          <p className="text-violet-200 text-lg mb-8">
            Create your workspace and explore how connected operational intelligence can support every team.
          </p>
          <div className="space-y-4">
            {[
              'AI operational alerts that catch problems before they escalate',
              'Automated executive summaries delivered daily',
              'Intelligent recommendations across all departments',
              'Real-time monitoring of production, shipping, and quality',
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-violet-100">
                <CheckCircle size={18} className="text-emerald-400 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
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
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Create your account</h2>
              <p className="text-slate-500">Start your 14-day free trial. No credit card required.</p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Work Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Acme Fashion Co."
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Your Role</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all bg-white"
                >
                  <option value="">Select your role</option>
                  <option value="executive">Executive / C-Level</option>
                  <option value="operations">Operations Manager</option>
                  <option value="production">Production Manager</option>
                  <option value="buying">Buying / Merchandising</option>
                  <option value="logistics">Logistics / Supply Chain</option>
                  <option value="quality">Quality Control</option>
                  <option value="customer_service">Customer Service</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
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
                {formData.password && (
                  <div className="mt-2">
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full ${strength.color} transition-all`} style={{ width: strength.width }} />
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Password strength: {strength.text}</p>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Confirm Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                />
                {formData.confirmPassword && formData.password === formData.confirmPassword && (
                  <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
                    <CheckCircle size={12} /> Passwords match
                  </p>
                )}
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-slate-300 text-violet-600 focus:ring-violet-500"
                />
                <label htmlFor="terms" className="text-sm text-slate-600">
                  I agree to the <a href="#" className="text-violet-600 hover:underline">Terms of Service</a> and{' '}
                  <a href="#" className="text-violet-600 hover:underline">Privacy Policy</a>
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
                    Creating account...
                  </>
                ) : (
                  <>
                    <Sparkles size={18} />
                    Create Account
                  </>
                )}
              </button>
            </form>

            {/* Sign In Link */}
            <div className="mt-6 text-center">
              <p className="text-slate-600">
                Already have an account?{' '}
                <button
                  onClick={() => onNavigate('signin')}
                  className="text-violet-600 font-medium hover:underline"
                >
                  Sign in
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
