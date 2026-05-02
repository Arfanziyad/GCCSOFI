'use client';

import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { motion } from 'framer-motion';

export default function ProductsPage({ params }: { params: { locale: string } }) {
  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[400px] mt-20 bg-gradient-to-r from-primary-blue to-blue-600">
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Architectural Products
            </h1>
            <p className="text-xl text-white/90">
              Washroom cubicles, Alifu cubicles, IPS panels, lockers, glass partitions, movable partitions, and raised floor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                locale={params.locale}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
