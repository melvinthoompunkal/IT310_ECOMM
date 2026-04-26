import { getAllProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Shop All Products — Nomad Gear",
  description:
    "Browse our full collection of portable workstation accessories. Laptop stands, monitors, keyboards, and more for digital nomads.",
};

export default function ShopPage() {
  const products = getAllProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          All Products
        </h1>
        <p className="mt-2 text-slate-500">
          {products.length} products — everything you need for your mobile office
        </p>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
