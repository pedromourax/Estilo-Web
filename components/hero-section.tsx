"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

const categories = [
  {
    id: "womens",
    title: "Roupas Femininas",
    description: "Descubra as últimas tendências em moda feminina",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=60",
    color: "bg-pink-50",
  },
  {
    id: "mens",
    title: "Roupas Masculinas",
    description: "Estilo e conforto para o homem moderno",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&auto=format&fit=crop&q=60",
    color: "bg-blue-50",
  },
  {
    id: "kids",
    title: "Roupas Infantis",
    description: "Roupas divertidas e confortáveis para as crianças",
    image:
      "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=800&auto=format&fit=crop&q=60",
    color: "bg-yellow-50",
  },
];

export function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Descubra Seu Estilo
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-4">
              Explore nossa coleção exclusiva de roupas para toda a família
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/category/${category.id}`}>
                <div
                  className={`group relative overflow-hidden rounded-lg ${category.color} hover:shadow-xl transition-all duration-300`}
                >
                  <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-20 transition-opacity" />
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      {category.title}
                      <ShoppingBag className="w-5 h-5" />
                    </h3>
                    <p className="mt-2 text-gray-600">{category.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
