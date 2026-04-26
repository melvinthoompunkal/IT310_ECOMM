"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getProductById, getRelatedProducts } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

export default function ProductDetailPage() {
  const params = useParams();
  const product = getProductById(params.id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-slate-900">
          Product not found
        </h1>
        <Link href="/shop" className="text-blue-600 text-sm mt-4 inline-block">
          ← Back to Shop
        </Link>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, 3);

  const handleAdd = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-slate-600 transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-slate-600 transition-colors">
          Shop
        </Link>
        <span>/</span>
        <span className="text-slate-700 font-medium">{product.name}</span>
      </nav>

      {/* Product */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Image Slider */}
        <div className="aspect-square relative rounded-2xl overflow-hidden bg-slate-100 group border border-slate-100">
          <img 
            src={product.images && product.images.length > 0 ? product.images[currentImageIndex] : product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-opacity duration-300"
          />
          {product.images && product.images.length > 1 && (
            <>
              <button 
                onClick={() => setCurrentImageIndex(prev => (prev === 0 ? product.images.length - 1 : prev - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 w-10 h-10 flex items-center justify-center rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-30"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button 
                onClick={() => setCurrentImageIndex(prev => (prev === product.images.length - 1 ? 0 : prev + 1))}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 w-10 h-10 flex items-center justify-center rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-30"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {product.images.map((_, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-slate-800' : 'bg-slate-300'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit mb-4">
            {product.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {product.name}
          </h1>
          <p className="mt-4 text-slate-500 leading-relaxed text-lg">
            {product.description}
          </p>
          <p className="mt-6 text-3xl font-bold text-slate-900">
            ${product.price.toFixed(2)}
          </p>

          {/* Quantity */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-sm font-medium text-slate-700">Qty</span>
            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                disabled={quantity <= 1}
                className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                id="qty-decrease"
              >
                −
              </button>
              <span className="w-12 h-10 flex items-center justify-center text-sm font-semibold text-slate-900 border-x border-gray-200">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.min(99, q + 1))}
                disabled={quantity >= 99}
                className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                id="qty-increase"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            type="button"
            onClick={handleAdd}
            id="add-to-cart-detail"
            className={`mt-6 w-full sm:w-auto px-10 py-3.5 font-semibold rounded-xl active:scale-95 transition-all duration-200 ${
              added
                ? "bg-green-600 text-white"
                : "bg-slate-900 text-white hover:bg-blue-600 shadow-lg shadow-slate-900/10"
            }`}
          >
            {added ? "✓ Added to Cart" : "Add to Cart"}
          </button>

          {/* Extra details */}
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-gray-100 pt-8">
            {[
              { icon: "🚚", label: "Free Shipping", sub: "Over $75" },
              { icon: "🔄", label: "30-Day Returns", sub: "Easy process" },
              { icon: "🛡️", label: "2-Year Warranty", sub: "Full coverage" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <span className="text-xl">{item.icon}</span>
                <p className="text-xs font-semibold text-slate-900 mt-1">
                  {item.label}
                </p>
                <p className="text-[10px] text-slate-400">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-20 pt-12 border-t border-gray-100">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-8">
          You might also like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
