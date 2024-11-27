import { notFound } from 'next/navigation';
import { products } from '@/lib/products';
import { ProductDetails } from '@/components/product/product-details';
import { ProductRecommendations } from '@/components/product/product-recommendations';

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <ProductDetails product={product} />
        <ProductRecommendations 
          currentProductId={product.id}
          category={product.category}
          subCategory={product.subCategory}
        />
      </div>
    </div>
  );
}