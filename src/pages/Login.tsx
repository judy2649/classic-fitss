import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useShop, UserRole } from '../context/ShopContext';

export default function Login() {
  const { login } = useShop();
  const navigate = useNavigate();
  const location = useLocation();
  const [role, setRole] = useState<UserRole>('user');
  
  const from = location.state?.from?.pathname || '/';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(role);
    if (role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center bg-stone-50 p-4">
      <div className="bg-white p-8 rounded-lg border border-rose-100 shadow-sm max-w-md w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-serif text-stone-800">Welcome to Classy Fits</h2>
          <p className="text-stone-500 text-sm mt-2">Sign in to continue</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="text-xs text-stone-500 uppercase font-bold tracking-wider mb-2 block">
              Login As
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setRole('user')}
                className={`py-3 rounded border text-sm font-medium transition-colors ${
                  role === 'user' 
                    ? 'border-rose-500 bg-rose-50 text-rose-700' 
                    : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                }`}
              >
                User
              </button>
              <button
                type="button"
                onClick={() => setRole('admin')}
                className={`py-3 rounded border text-sm font-medium transition-colors ${
                  role === 'admin' 
                    ? 'border-rose-500 bg-rose-50 text-rose-700' 
                    : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                }`}
              >
                Admin
              </button>
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-rose-500 text-white font-medium py-3 px-4 rounded hover:bg-rose-600 transition-colors shadow-sm"
          >
            Sign In as {role === 'admin' ? 'Admin' : 'User'}
          </button>
        </form>
      </div>
    </div>
  );
}
