'use client';

import { motion } from 'framer-motion';
import { ProductCard } from '@/components/ui/product-card';
import type { Product } from '@/lib/types';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
      {products.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-lg text-gray-500">Nenhum produto encontrado.</p>
        </div>
      )}
    </div>
  );
}