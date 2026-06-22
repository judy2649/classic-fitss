import React from 'react';
import { useShop } from '../context/ShopContext';
import { Tag } from 'lucide-react';

export default function Sidebar() {
  const { categories, currentCategory, setCurrentCategory } = useShop();

  return (
    <aside className="w-full lg:w-64 shrink-0 flex flex-col gap-4">
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
                onClick={() => setCurrentCategory(category)}
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
  );
}
