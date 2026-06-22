import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import { useShop } from '../context/ShopContext';

export default function Shop() {
  const { filteredProducts, currentCategory, searchQuery } = useShop();

  return (
    <div className="min-h-screen bg-rose-50/50 flex flex-col font-sans">
      <Header />
      
      <main className="flex-1 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col min-h-0">
        <div className="flex flex-col lg:flex-row gap-4 h-full">
          <Sidebar />
          
          <section className="flex-1 flex flex-col gap-4 bg-white rounded-3xl p-6 border border-rose-100 shadow-sm min-h-[500px]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between shrink-0 gap-4">
              <div>
                <h2 className="text-2xl font-serif text-stone-900 tracking-tight">
                  {searchQuery ? `Search Results` : currentCategory === 'All' ? 'Curated Collections' : currentCategory}
                </h2>
                <p className="text-sm text-stone-500">
                  {searchQuery ? `Found ${filteredProducts.length} items for "${searchQuery}"` : 'Latest items added by our admin team'}
                </p>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full bg-rose-50 text-[10px] font-bold text-rose-600 uppercase border border-rose-100">All Fits</span>
                <span className="px-3 py-1 rounded-full bg-stone-50 text-[10px] font-bold text-stone-400 uppercase">New Arrival</span>
                <span className="px-3 py-1 rounded-full bg-stone-50 text-[10px] font-bold text-stone-400 uppercase">Sale</span>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="flex-1 bg-rose-50/50 rounded-2xl p-12 flex flex-col items-center justify-center border border-rose-100">
                <p className="text-stone-500 mb-4 font-semibold uppercase text-sm">No products found matching your criteria.</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="bg-rose-400 text-white px-6 py-2 rounded font-bold uppercase tracking-widest text-xs hover:bg-rose-500 transition-colors shadow-sm"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-2">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Bottom Bar Info */}
      <footer className="h-8 bg-white border-t border-rose-100 px-6 flex items-center justify-between text-[10px] font-bold text-stone-400 uppercase tracking-widest shrink-0 mt-auto">
        <div>Live Inventory Feed Active</div>
        <div className="hidden sm:flex gap-4">
          <span>Session: guest_01</span>
          <span>Server: East_B2</span>
        </div>
      </footer>
    </div>
  );
}
