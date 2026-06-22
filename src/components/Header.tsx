import React from 'react';
import { ShoppingCart, Search, User, Menu, Heart, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import logoUrl from '../assets/images/classy_fits_rose_logo_1782158814631.jpg';

export default function Header() {
  const { searchQuery, setSearchQuery, isMobileMenuOpen, setIsMobileMenuOpen, userRole, logout } = useShop();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="h-20 bg-white flex items-center justify-between px-8 shrink-0 shadow-sm border-b border-rose-100 z-10 sticky top-0">
      <div className="flex items-center gap-4 shrink-0">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-stone-500 hover:text-rose-500 transition-colors"
        >
          <Menu size={24} />
        </button>
        <Link to="/" className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full flex items-center justify-center text-rose-500 font-serif font-bold text-xl relative overflow-hidden bg-rose-50 border border-rose-100 shadow-sm">
            <img src={logoUrl} alt="Classy Fits Logo" className="w-full h-full object-cover" />
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

      <div className="flex items-center gap-5 shrink-0 text-stone-500">
        {userRole ? (
          <>
            {userRole === 'admin' ? (
              <Link to="/admin" className="flex items-center gap-2 hover:text-rose-500 transition-colors group">
                <div className="w-8 h-8 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center group-hover:border-rose-300 transition-colors shadow-sm">
                  <User size={16} className="text-rose-600" />
                </div>
                <span className="hidden md:inline font-medium text-[10px] uppercase tracking-widest text-stone-600">Admin</span>
              </Link>
            ) : (
              <div className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center shadow-sm">
                  <User size={16} className="text-stone-600" />
                </div>
                <span className="hidden md:inline font-medium text-[10px] uppercase tracking-widest text-stone-600">User</span>
              </div>
            )}
            
            <button onClick={handleLogout} className="flex items-center gap-2 hover:text-rose-500 transition-colors group">
              <LogOut size={18} />
              <span className="hidden md:inline font-medium text-[10px] uppercase tracking-widest text-stone-600 group-hover:text-rose-500">Log Out</span>
            </button>
            <div className="flex items-center gap-2 hover:text-rose-500 transition-colors cursor-pointer group">
              <div className="relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-sm">
                  0
                </span>
              </div>
            </div>
          </>
        ) : (
          <Link to="/login" className="flex items-center gap-2 bg-rose-500 text-white px-4 py-2 rounded text-xs font-semibold hover:bg-rose-600 transition-colors shadow-sm">
            Login
          </Link>
        )}
      </div>

      {/* Mobile Search */}
      <div className="absolute top-20 left-0 w-full bg-white p-3 sm:hidden border-b border-rose-100 shadow-sm z-20">
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
