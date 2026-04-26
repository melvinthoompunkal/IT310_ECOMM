"use client";

import { Elements } from "@stripe/react-stripe-js";
import stripePromise from "@/lib/stripe";
import { useCart } from "@/context/CartContext";
import CheckoutForm from "@/components/CheckoutForm";
import Link from "next/link";

export default function CheckoutPage() {
  const { cartItems, cartTotal, hydrated } = useCart();

  if (!hydrated) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-slate-100 rounded w-48 mx-auto mb-4" />
          <div className="h-4 bg-slate-50 rounded w-64 mx-auto" />
        </div>
      </div>
    );
  }

  const shipping = 9.99;
  const total = cartTotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-slate-900">
          No items to check out
        </h1>
        <p className="text-slate-500 mt-2">Add some items to your cart first.</p>
        <Link
          href="/shop"
          className="mt-6 inline-block px-8 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all duration-200"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-8">
        Checkout
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Form */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8">
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-2">
          <div className="bg-slate-50 rounded-2xl p-6 sticky top-24">
            <h2 className="text-lg font-bold text-slate-900 mb-4">
              Order Summary
            </h2>

            {/* Items */}
            <div className="space-y-3 mb-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-white rounded-lg border border-gray-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-slate-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-slate-700 font-medium line-clamp-1 text-xs">
                        {item.name}
                      </p>
                      <p className="text-slate-400 text-[10px]">
                        Qty: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <span className="font-medium text-slate-900 text-xs">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-3 space-y-2 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-medium text-slate-900">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Shipping</span>
                <span className="font-medium text-slate-900">
                  ${shipping.toFixed(2)}
                </span>
              </div>
              <div className="border-t border-gray-200 pt-2 flex justify-between">
                <span className="font-bold text-slate-900">Total</span>
                <span className="font-bold text-slate-900 text-lg">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
