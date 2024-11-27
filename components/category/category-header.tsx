'use client';

import { motion } from 'framer-motion';

const categoryInfo = {
  womens: {
    title: 'Roupas Femininas',
    description: 'Descubra as últimas tendências em moda feminina',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&auto=format&fit=crop&q=60',
  },
  mens: {
    title: 'Roupas Masculinas',
    description: 'Estilo e conforto para o homem moderno',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&auto=format&fit=crop&q=60',
  },
  kids: {
    title: 'Roupas Infantis',
    description: 'Roupas divertidas e confortáveis para as crianças',
    image: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=1200&auto=format&fit=crop&q=60',
  },
};

interface CategoryHeaderProps {
  categoryId: string;
}

export function CategoryHeader({ categoryId }: CategoryHeaderProps) {
  const info = categoryInfo[categoryId as keyof typeof categoryInfo];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative h-[300px] overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={info.image}
          alt={info.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          {info.title}
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-200"
        >
          {info.description}
        </motion.p>
      </div>
    </motion.div>
  );
}