'use client';

import Link from 'next/link';
import { Product } from '@/lib/types';
import { motion } from 'framer-motion';
import { Button } from './button';
import { useStore } from '@/lib/store';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addToCart = useStore((state) => state.addToCart);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-card rounded-lg overflow-hidden border shadow-sm"
    >
      <Link href={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">R$ {product.price.toFixed(2)}</span>
          <Button
            size="sm"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}