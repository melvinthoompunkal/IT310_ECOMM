"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <Link href={`/product/${product.id}`} className="group block">
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1">
        {/* Image placeholder */}
        <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="absolute top-3 right-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-slate-600 px-2.5 py-1 rounded-full">
              {product.category}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-lg font-bold text-slate-900">
              ${product.price.toFixed(2)}
            </span>
            <button
              type="button"
              onClick={handleAddToCart}
              id={`add-to-cart-${product.id}`}
              className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-blue-600 active:scale-95 transition-all duration-200"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
