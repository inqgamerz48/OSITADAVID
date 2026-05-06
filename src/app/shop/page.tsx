import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export default function ShopPage() {
  return (
    <div className="w-full h-full flex flex-col gap-12">
      <div className="w-full flex justify-between items-end border-b border-white/10 pb-4">
        <h1 className="text-3xl md:text-4xl tracking-widest uppercase font-light">Shop</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
}
