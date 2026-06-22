import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import Header from '../components/Header';

export default function Admin() {
  const { products, addProduct, deleteProduct } = useShop();

  // Form State
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price || !image || !category) return;

    addProduct({
      name,
      price: Number(price),
      originalPrice: originalPrice ? Number(originalPrice) : undefined,
      image,
      category,
      description,
      rating: 5,
      reviews: 0
    });

    // Reset
    setName('');
    setPrice('');
    setOriginalPrice('');
    setImage('');
    setCategory('');
    setDescription('');
  };

  return (
    <div className="min-h-screen bg-rose-50/50 flex flex-col font-sans">
      <Header />
      
      <main className="flex-1 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col min-h-0">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="text-stone-500 text-xs font-bold uppercase tracking-wider hover:text-rose-500 transition-colors">
            ← Return to Storefront
          </Link>
          <span className="bg-rose-50 text-rose-600 border border-rose-100 text-[10px] px-2 py-0.5 rounded font-bold uppercase transition-colors">Management Suite</span>
        </div>

        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-stone-800 uppercase tracking-wide border-l-4 border-rose-400 pl-3">Admin Control</h2>
          </div>

          {/* Admin Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
            
            {/* Left side: Stats & Form */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3">
                {/* Stat Card 1 */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-rose-100 flex flex-col justify-between">
                  <p className="text-stone-500 text-xs font-semibold uppercase">Total Inventory</p>
                  <h3 className="text-2xl font-bold text-stone-900">{products.length} Items</h3>
                  <div className="text-emerald-600 text-[10px] font-bold">Active Catalog</div>
                </div>
                
                {/* Stat Card 2 */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-rose-100 flex flex-col justify-between">
                  <p className="text-stone-500 text-xs font-semibold uppercase">Pending Orders</p>
                  <h3 className="text-2xl font-bold text-stone-900 underline decoration-rose-400">24</h3>
                  <div className="text-stone-400 text-[10px] font-bold uppercase">Action Required</div>
                </div>
              </div>

              {/* Add Item Form (Large Bento Cell) */}
              <div className="bg-gradient-to-br from-rose-50 to-pink-100 text-stone-900 border border-rose-200 p-6 rounded-2xl shadow-sm flex flex-col gap-4">
                <h4 className="text-sm font-bold text-rose-600 uppercase flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                  List New Apparel
                </h4>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 flex flex-col gap-1">
                      <label className="text-[10px] text-stone-500 uppercase font-bold">Product Name</label>
                      <input type="text" required value={name} onChange={e => setName(e.target.value)} className="bg-white border border-rose-200 rounded p-2 text-sm focus:outline-none focus:border-rose-400 text-stone-800 shadow-sm" placeholder="e.g. Linen Blazer" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] text-stone-500 uppercase font-bold">Price <span className="lowercase font-normal text-stone-400">(KSH)</span></label>
                      <input type="number" required min="0" value={price} onChange={e => setPrice(e.target.value)} className="bg-white border border-rose-200 rounded p-2 text-sm focus:outline-none focus:border-rose-400 text-stone-800 shadow-sm" placeholder="0" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] text-stone-500 uppercase font-bold">Original Price</label>
                      <input type="number" min="0" value={originalPrice} onChange={e => setOriginalPrice(e.target.value)} className="bg-white border border-rose-200 rounded p-2 text-sm focus:outline-none focus:border-rose-400 text-stone-800 shadow-sm" placeholder="0" />
                    </div>
                    <div className="col-span-2 flex flex-col gap-1">
                      <label className="text-[10px] text-stone-500 uppercase font-bold">Category</label>
                      <input type="text" required value={category} onChange={e => setCategory(e.target.value)} className="bg-white border border-rose-200 rounded p-2 text-sm focus:outline-none focus:border-rose-400 text-stone-800 shadow-sm" placeholder="e.g. Dresses" />
                    </div>
                    <div className="col-span-2 flex flex-col gap-1">
                      <label className="text-[10px] text-stone-500 uppercase font-bold">Image URL</label>
                      <input type="url" required value={image} onChange={e => setImage(e.target.value)} className="bg-white border border-rose-200 rounded p-2 text-sm focus:outline-none focus:border-rose-400 text-stone-800 shadow-sm" placeholder="https://..." />
                    </div>
                    <div className="col-span-2 flex flex-col gap-1">
                      <label className="text-[10px] text-stone-500 uppercase font-bold">Description</label>
                      <textarea value={description} onChange={e => setDescription(e.target.value)} rows={2} className="bg-white border border-rose-200 rounded p-2 text-sm focus:outline-none focus:border-rose-400 text-stone-800 shadow-sm" placeholder="A short description..."></textarea>
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-rose-500 hover:bg-rose-600 shadow-sm text-white font-bold py-3 rounded-lg uppercase tracking-widest text-xs transition-colors mt-2">
                    Push to Inventory
                  </button>
                </form>
              </div>
            </div>

            {/* Right side: Inventory List */}
            <div className="lg:col-span-8 bg-white rounded-3xl border border-rose-100 p-6 shadow-sm flex flex-col lg:h-full min-h-[500px]">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-serif text-stone-900 tracking-tight">Inventory Logs</h2>
                  <p className="text-sm text-stone-500">Manage existing catalogue</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-rose-50 text-[10px] font-bold text-rose-600 uppercase border border-rose-100">{products.length} Items</span>
                </div>
              </div>

              <div className="flex-1 overflow-x-auto bg-rose-50/50 rounded-2xl border border-rose-50 p-2">
                <table className="w-full text-left text-sm text-stone-600 border-collapse">
                  <thead className="text-[10px] font-bold text-stone-400 uppercase tracking-widest border-b border-rose-100">
                    <tr>
                      <th className="px-4 py-3">Product</th>
                      <th className="px-4 py-3">Category</th>
                      <th className="px-4 py-3">Price</th>
                      <th className="px-4 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-rose-50">
                    {products.map(product => (
                      <tr key={product.id} className="hover:bg-white transition-colors group">
                        <td className="px-4 py-3 flex items-center gap-3">
                          <div className="h-10 w-10 shrink-0 rounded-lg bg-rose-100 flex items-center justify-center overflow-hidden border border-rose-200">
                            {product.image ? (
                              <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                            ) : (
                              <span className="text-[10px] font-bold text-rose-400">IMG</span>
                            )}
                          </div>
                          <div>
                            <div className="font-bold text-stone-900 line-clamp-1">{product.name}</div>
                            <div className="text-[10px] text-stone-500 font-semibold uppercase tracking-wider">SKU: CF-{product.id.slice(0,4)}</div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className="inline-block px-2 py-1 bg-rose-50 text-rose-600 text-[10px] font-bold rounded uppercase">
                            {product.category}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="font-bold text-rose-500 font-serif">KSh {product.price.toLocaleString()}</div>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button 
                            onClick={() => deleteProduct(product.id)}
                            className="text-stone-400 hover:text-rose-500 bg-white border border-rose-100 hover:border-rose-300 hover:bg-rose-50 p-2 rounded-lg transition-colors shadow-sm"
                            title="Delete Product"
                          >
                           <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                    
                    {products.length === 0 && (
                      <tr>
                         <td colSpan={4} className="px-4 py-12 text-center text-stone-500 font-semibold uppercase text-xs">
                            No products in inventory.
                         </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>
      </main>
      
      {/* Bottom Bar Info */}
      <footer className="h-8 bg-white border-t border-rose-100 px-6 flex items-center justify-between text-[10px] font-bold text-stone-400 uppercase tracking-widest shrink-0 mt-auto">
        <div>Live Inventory Feed Active</div>
        <div className="hidden sm:flex gap-4">
          <span>Session: admin_11</span>
          <span>Server: East_B2</span>
        </div>
      </footer>
    </div>
  );
}
