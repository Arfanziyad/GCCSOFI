'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  locale: string;
  index: number;
}

export default function ProductCard({ product, locale, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link href={`/${locale}/products/${product.slug}`}>
        <div className="group relative h-80 rounded-lg overflow-hidden shadow-lg cursor-pointer">
          {/* Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${product.image})` }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-end p-6">
            <div>
              <h3 className="text-white text-xl font-bold mb-2 group-hover:text-primary-red transition-colors">
                {product.title}
              </h3>
              <p className="text-white/80 text-sm line-clamp-2">
                {product.description}
              </p>
            </div>
          </div>

          {/* Hover Effect Border */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-red transition-all duration-300 rounded-lg" />
        </div>
      </Link>
    </motion.div>
  );
}
