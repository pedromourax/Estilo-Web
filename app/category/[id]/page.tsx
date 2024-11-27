import { CategoryHeader } from '@/components/category/category-header';
import { CategoryFilters } from '@/components/category/category-filters';
import { ProductGrid } from '@/components/category/product-grid';
import { getProductsByCategory } from '@/lib/products';

export function generateStaticParams() {
  return [
    { id: 'womens' },
    { id: 'mens' },
    { id: 'kids' },
  ];
}

export default function CategoryPage({ params }: { params: { id: string } }) {
  const products = getProductsByCategory(params.id);

  return (
    <div className="min-h-screen bg-background">
      <CategoryHeader categoryId={params.id} />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <CategoryFilters categoryId={params.id} />
          <div className="lg:col-span-3">
            <ProductGrid products={products} />
          </div>
        </div>
      </div>
    </div>
  );
}