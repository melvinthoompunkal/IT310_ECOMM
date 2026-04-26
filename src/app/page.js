import Link from "next/link";
import { getFeaturedProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl animate-fade-in-up">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-6">
              For Digital Nomads
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Your Office,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Anywhere.
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-lg">
              Premium portable workstation accessories designed for remote
              workers who refuse to compromise on productivity or style.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/shop"
                id="shop-now-cta"
                className="px-8 py-3.5 bg-slate-900 text-white font-semibold rounded-xl hover:bg-blue-600 active:scale-95 transition-all duration-200 shadow-lg shadow-slate-900/10"
              >
                Shop Now
              </Link>
              <Link
                href="/about"
                className="px-8 py-3.5 text-slate-700 font-semibold rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-slate-50 transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Decorative grid dots */}
          <div className="absolute top-10 right-10 w-64 h-64 opacity-[0.03]">
            <div className="grid grid-cols-8 gap-3">
              {Array.from({ length: 64 }).map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-slate-900 rounded-full"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features bar */}
      <section className="border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🚚", text: "Free shipping over $75" },
              { icon: "🔄", text: "30-day returns" },
              { icon: "🛡️", text: "2-year warranty" },
              { icon: "🌍", text: "Ships worldwide" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-xs font-medium text-slate-600">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Featured Products
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Curated essentials for your mobile workstation
              </p>
            </div>
            <Link
              href="/shop"
              className="hidden sm:inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700 items-center gap-1 transition-colors"
            >
              View All
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-10 text-center sm:hidden">
            <Link
              href="/shop"
              className="inline-flex text-sm font-semibold text-blue-600 items-center gap-1"
            >
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Ready to upgrade your setup?
          </h2>
          <p className="mt-3 text-slate-400 max-w-md mx-auto">
            Join thousands of remote workers who have leveled up their portable
            workstation with Nomad Gear.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-block px-8 py-3.5 bg-white text-slate-900 font-semibold rounded-xl hover:bg-blue-50 active:scale-95 transition-all duration-200"
          >
            Browse All Products
          </Link>
        </div>
      </section>
    </>
  );
}
