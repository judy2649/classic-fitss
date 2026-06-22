import React from 'react';
import { useShop } from '../context/ShopContext';
import { Tag } from 'lucide-react';

import { X } from 'lucide-react';

export default function Sidebar() {
  const { categories, currentCategory, setCurrentCategory, isMobileMenuOpen, setIsMobileMenuOpen } = useShop();

  return (
    <>
      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-stone-900/50 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      {/* Sidebar Content */}
      <aside className={`
        fixed lg:sticky lg:top-[6.5rem] left-0 top-0 h-full lg:h-[calc(100vh-9rem)]
        w-72 lg:w-64 shrink-0 flex flex-col gap-4 z-50 lg:z-0
        bg-rose-50/95 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none
        p-4 lg:p-0
        transition-transform duration-300 ease-in-out border-r border-rose-200 lg:border-none
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center justify-between lg:hidden mb-2">
          <span className="font-serif font-bold text-xl text-stone-800">Menu</span>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-stone-500 hover:text-rose-500 transition-colors bg-white rounded-full border border-rose-100"
          >
            <X size={20} />
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-rose-100 p-4 overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-stone-800 uppercase tracking-wide border-l-4 border-rose-400 pl-3">
              Filters
            </h3>
          </div>
          <ul className="space-y-1 mt-2">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => {
                    setCurrentCategory(category);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center transition-colors font-semibold ${
                    currentCategory === category 
                    ? 'bg-rose-50 text-rose-800' 
                    : 'text-stone-600 hover:bg-stone-50 hover:text-rose-500'
                  }`}
                >
                <Tag size={14} className="mr-2 opacity-60" />
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-rose-50 rounded-xl shadow-sm border border-rose-200 p-5 text-stone-900 flex flex-col gap-2 bg-gradient-to-br from-rose-50 to-pink-100">
        <h4 className="text-sm font-bold text-rose-600 uppercase flex items-center gap-2">
          New Arrivals
        </h4>
        <p className="text-xs text-stone-600">Exclusive premium collection is out now.</p>
        <button className="bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold px-4 py-2 mt-2 rounded uppercase tracking-widest transition-colors w-full shadow-sm">
          Shop Trending
        </button>
      </div>
    </aside>
    </>
  );
}
