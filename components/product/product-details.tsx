'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { useStore } from '@/lib/store';
import { ShoppingCart, Heart } from 'lucide-react';

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [isWishlist, setIsWishlist] = useState(false);
  const addToCart = useStore((state) => state.addToCart);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative aspect-square rounded-lg overflow-hidden"
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-6"
      >
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-semibold mt-2">R$ {product.price.toFixed(2)}</p>
        </div>

        <p className="text-gray-600">{product.description}</p>

        <div className="space-y-4">
          <div className="flex gap-4">
            <Button
              size="lg"
              className="flex-1"
              onClick={() => addToCart(product)}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Adicionar ao Carrinho
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setIsWishlist(!isWishlist)}
            >
              <Heart
                className={`h-5 w-5 ${isWishlist ? 'fill-current' : ''}`}
              />
            </Button>
          </div>
        </div>

        <div className="border-t pt-6 space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Detalhes do Produto</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Material de alta qualidade</li>
              <li>• Fabricado no Brasil</li>
              <li>• Garantia contra defeitos</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Entrega e Devolução</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Frete grátis para todo o Brasil</li>
              <li>• Entrega em até 7 dias úteis</li>
              <li>• 30 dias para devolução gratuita</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}