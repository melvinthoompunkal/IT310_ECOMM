"use client";

import { useCart } from "@/context/CartContext";

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-4 py-5 border-b border-gray-100 last:border-0">
      {/* Image placeholder */}
      <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-50 rounded-xl flex-shrink-0 flex items-center justify-center">
        <svg
          className="w-8 h-8 text-slate-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={0.75}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold text-slate-900 truncate">
          {item.name}
        </h3>
        <p className="text-sm text-slate-500 mt-0.5">
          ${item.price.toFixed(2)}
        </p>

        {/* Quantity controls */}
        <div className="flex items-center gap-2 mt-2">
          <button
            type="button"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
            className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm"
            id={`qty-dec-${item.id}`}
          >
            −
          </button>
          <span className="text-sm font-medium text-slate-900 w-6 text-center">
            {item.quantity}
          </span>
          <button
            type="button"
            onClick={() => updateQuantity(item.id, Math.min(99, item.quantity + 1))}
            disabled={item.quantity >= 99}
            className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm"
            id={`qty-inc-${item.id}`}
          >
            +
          </button>
        </div>
      </div>

      {/* Line total & remove */}
      <div className="text-right flex-shrink-0">
        <p className="text-sm font-bold text-slate-900">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        <button
          type="button"
          onClick={() => removeFromCart(item.id)}
          className="text-xs text-red-500 hover:text-red-700 mt-1 transition-colors"
          id={`remove-${item.id}`}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
