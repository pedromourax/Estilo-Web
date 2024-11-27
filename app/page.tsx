import { ProductCard } from "@/components/ui/product-card";
import { products } from "@/lib/products";
import { Cart } from "@/components/cart";
import { HeroSection } from "@/components/hero-section";
import { AudioLines } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background ">
      <header className="border-b ">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl flex items-center gap-2 font-bold">
            Estilo Web <AudioLines color="gray" />
          </h1>
          <Cart />
        </div>
      </header>
      <HeroSection />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-8">Produtos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
