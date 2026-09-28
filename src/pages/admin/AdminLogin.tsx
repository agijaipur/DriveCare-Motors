import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail } from 'lucide-react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate auth
    setTimeout(() => {
      setLoading(false);
      navigate('/admin/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-brand-soft flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <h1 className="text-3xl font-bold tracking-tight text-brand-black">
          DriveCare <span className="text-brand-accent">Motors</span>
        </h1>
        <h2 className="mt-6 text-xl font-bold tracking-tight text-brand-gray-dark">
          Sign in to your admin account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl shadow-brand-black/5 sm:rounded-2xl sm:px-10 border border-brand-gray/50">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium leading-6 text-brand-black">
                Email address
              </label>
              <div className="mt-2 relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gray-dark" size={20} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-3 pl-10 text-brand-black shadow-sm ring-1 ring-inset ring-brand-gray placeholder:text-brand-gray-dark focus:ring-2 focus:ring-inset focus:ring-brand-accent sm:text-sm sm:leading-6"
                  placeholder="admin@drivecare.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-brand-black">
                Password
              </label>
              <div className="mt-2 relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gray-dark" size={20} />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-3 pl-10 text-brand-black shadow-sm ring-1 ring-inset ring-brand-gray placeholder:text-brand-gray-dark focus:ring-2 focus:ring-inset focus:ring-brand-accent sm:text-sm sm:leading-6"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="flex w-full justify-center rounded-md bg-brand-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-near-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-black transition-colors"
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
