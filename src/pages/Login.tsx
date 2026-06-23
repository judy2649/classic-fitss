import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

export default function Login() {
  const { login } = useShop();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (email !== 'classyfits651@gmail.com') {
      setError('Invalid admin credentials. Please provide the correct email.');
      return;
    }

    login('admin');
    navigate('/admin');
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center bg-stone-50 p-4">
      <div className="bg-white p-8 rounded-lg border border-rose-100 shadow-sm max-w-md w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-serif text-stone-800">Classy Fits</h2>
          <p className="text-stone-500 text-sm mt-2">Admin Portal Access</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="text-xs text-stone-500 uppercase font-bold tracking-wider mb-2 block">
              Admin Access Token (Email)
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Admin Email Address"
              className="w-full border border-stone-200 rounded px-4 py-3 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent text-sm"
              required
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm bg-red-50 p-3 rounded">
              {error}
            </div>
          )}
          
          <button
            type="submit"
            className="w-full bg-rose-500 text-white font-medium py-3 px-4 rounded hover:bg-rose-600 transition-colors shadow-sm uppercase tracking-wider text-xs font-bold"
          >
            Access Admin Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}
