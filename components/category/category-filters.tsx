'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState } from 'react';

const subcategories = {
  womens: [
    { id: 'basics', name: 'Básicos e Essenciais' },
    { id: 'casual', name: 'Casual e Moda' },
    { id: 'winter', name: 'Inverno' },
  ],
  mens: [
    { id: 'basics', name: 'Básicos e Essenciais' },
    { id: 'casual', name: 'Casual e Moda' },
    { id: 'winter', name: 'Inverno' },
  ],
  kids: [
    { id: 'sets', name: 'Conjuntos' },
    { id: 'dresses', name: 'Vestidos' },
    { id: 'sleepwear', name: 'Pijamas' },
    { id: 'themed', name: 'Roupas Temáticas' },
  ],
};

interface CategoryFiltersProps {
  categoryId: string;
}

export function CategoryFilters({ categoryId }: CategoryFiltersProps) {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const currentSubcategories = subcategories[categoryId as keyof typeof subcategories] || [];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-4"
    >
      <h2 className="text-lg font-semibold">Categorias</h2>
      <div className="space-y-2">
        <Button
          variant={selectedSubcategory === null ? "default" : "outline"}
          className="w-full justify-start"
          onClick={() => setSelectedSubcategory(null)}
        >
          Todos os Produtos
        </Button>
        {currentSubcategories.map((subcategory) => (
          <Button
            key={subcategory.id}
            variant={selectedSubcategory === subcategory.id ? "default" : "outline"}
            className="w-full justify-start"
            onClick={() => setSelectedSubcategory(subcategory.id)}
          >
            {subcategory.name}
          </Button>
        ))}
      </div>
    </motion.div>
  );
}