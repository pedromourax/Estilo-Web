'use client';

import { motion } from 'framer-motion';
import { ProductCard } from '@/components/ui/product-card';
import { products } from '@/lib/products';

interface ProductRecommendationsProps {
  currentProductId: string;
  category: string;
  subCategory: string;
}

export function ProductRecommendations({
  currentProductId,
  category,
  subCategory,
}: ProductRecommendationsProps) {
  const recommendations = products
    .filter(
      (product) =>
        product.id !== currentProductId &&
        product.category === category &&
        product.subCategory === subCategory
    )
    .slice(0, 4);

  if (recommendations.length === 0) return null;

  return (
    <div className="mt-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold mb-8"
      >
        Produtos Relacionados
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendations.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}