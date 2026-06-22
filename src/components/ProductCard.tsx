import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const isNew = Date.now() - parseInt(product.id || '0') < 86400000;

  return (
    <div className={`group rounded-2xl p-4 border flex flex-col relative ${isNew ? 'bg-rose-50 border-rose-200' : 'bg-white border-rose-100'} shadow-sm`}>
      <div className={`absolute top-6 left-6 text-white text-[9px] font-black px-2 py-1 rounded uppercase z-10 shadow-sm ${isNew ? 'bg-rose-500' : 'bg-stone-800'}`}>
        {isNew ? 'New In' : product.category}
      </div>
      <div className={`flex-1 rounded-xl mb-4 relative overflow-hidden aspect-[3/4] ${isNew ? 'bg-rose-100' : 'bg-stone-100'}`}>
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : null}
      </div>
      <div className="flex justify-between items-end gap-2">
        <div className="flex-1">
          <h3 className="font-bold text-stone-900 leading-tight mb-1 line-clamp-2">{product.name}</h3>
          <p className={`text-[10px] font-semibold uppercase tracking-wider ${isNew ? 'text-rose-600' : 'text-stone-500'}`}>
            SKU: CF-{(product.id || '0000').slice(0, 4).padStart(4, '0')}
          </p>
        </div>
        <div className="text-xl font-bold text-rose-500 font-serif whitespace-nowrap">
          KSh {product.price.toLocaleString()}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
