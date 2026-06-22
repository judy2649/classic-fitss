import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const isNew = Date.now() - parseInt(product.id || '0') < 86400000;

  return (
    <div className="group flex flex-col relative w-full">
      <div className={`absolute top-3 left-3 text-white text-[9px] font-black px-2 py-1 rounded-md uppercase z-10 shadow-sm ${isNew ? 'bg-rose-500' : 'bg-stone-800'}`}>
        {isNew ? 'New In' : product.category}
      </div>
      <div className={`w-full rounded-2xl mb-3 relative overflow-hidden aspect-[4/5] ${isNew ? 'bg-rose-50' : 'bg-stone-100'}`}>
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : null}
      </div>
      <div className="flex flex-col px-1">
        <h3 className="font-medium text-stone-800 leading-snug line-clamp-1 text-sm sm:text-base">{product.name}</h3>
        <div className="flex justify-between items-center mt-1">
          <div className="font-bold text-stone-900 text-sm">
            UGX {product.price.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
