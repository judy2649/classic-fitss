import React from 'react';
import { ShoppingCart, Search, User, Menu, Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

export default function Header() {
  const { searchQuery, setSearchQuery } = useShop();
  const navigate = useNavigate();

  return (
    <header className="h-16 bg-white flex items-center justify-between px-8 shrink-0 shadow-sm border-b border-rose-100 z-10 sticky top-0">
      <div className="flex items-center gap-4 shrink-0">
        <button className="lg:hidden text-stone-500 hover:text-rose-500 transition-colors">
          <Menu size={24} />
        </button>
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded flex items-center justify-center text-rose-500 font-serif font-bold text-xl relative overflow-hidden bg-rose-50 border border-rose-100 shadow-sm">
            <svg viewBox="0 0 100 100" className="w-8 h-8 drop-shadow-sm text-rose-400" fill="currentColor">
              <path d="M45,25 Q35,25 35,50 Q35,75 55,75 Q65,75 70,65 L65,60 Q60,68 50,68 Q41,68 41,50 Q41,32 50,32 L45,25 Z"/>
              <path d="M50,15 L55,10 L60,15 L62,13 L55,6 L48,13 L50,15 Z"/>
              <path d="M55,30 L75,30 L75,35 L60,35 L60,45 L70,45 L70,50 L60,50 L60,80 L55,80 L55,30 Z"/>
              <path d="M57,38 Q65,60 50,85 Q75,80 72,50 Q65,40 57,38 Z" fill="url(#rose-grad)" opacity="0.8"/>
              <defs>
                <linearGradient id="rose-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#f43f5e', stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#fda4af', stopOpacity:1}} />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-stone-800 font-serif text-2xl tracking-tight leading-none">Classy <span className="text-rose-500 italic">Fits</span></span>
            <span className="text-[8px] text-stone-400 tracking-[0.2em] uppercase font-bold mt-0.5">Confident. Stylish. You.</span>
          </div>
        </Link>
      </div>

      <div className="flex-1 max-w-2xl hidden sm:flex justify-end px-6">
        <div className="relative w-72 group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-stone-400 group-focus-within:text-rose-400 transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search elegant finds..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-rose-50/50 text-stone-800 text-sm py-1.5 pl-9 pr-4 rounded border border-rose-200 focus:outline-none focus:ring-1 focus:ring-rose-400 focus:bg-white transition-all shadow-sm"
            onKeyDown={(e) => {
              if (e.key === 'Enter') navigate('/');
            }}
          />
        </div>
      </div>

      <div className="flex items-center gap-6 shrink-0 text-stone-500">
        <Link to="/admin" className="flex items-center gap-2 hover:text-rose-500 transition-colors group">
          <div className="w-8 h-8 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center group-hover:border-rose-300 transition-colors shadow-sm">
            <User size={16} className="text-rose-600" />
          </div>
          <span className="hidden md:inline font-medium text-[10px] uppercase tracking-widest text-stone-600">Admin</span>
        </Link>
        <div className="flex items-center gap-2 hover:text-rose-500 transition-colors cursor-pointer hidden md:flex group">
          <Heart size={20} className="group-hover:fill-rose-50" />
        </div>
        <div className="flex items-center gap-2 hover:text-rose-500 transition-colors cursor-pointer group">
          <div className="relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-sm">
              0
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="absolute top-16 left-0 w-full bg-white p-3 sm:hidden border-b border-rose-100 shadow-sm z-20">
        <div className="relative w-full flex">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-stone-400" />
          </div>
          <input
            type="text"
            placeholder="Search inventory..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-9 pr-3 py-2 border border-rose-200 rounded leading-5 bg-rose-50 text-stone-800 placeholder-stone-500 focus:outline-none focus:border-rose-400 focus:bg-white text-sm"
          />
        </div>
      </div>
    </header>
  );
}
