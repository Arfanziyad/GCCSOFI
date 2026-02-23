'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Product } from '@/types';
import { Check, ArrowRight, Phone } from 'lucide-react';

interface ProductPageContentProps {
  product: Product;
  locale: string;
}

export default function ProductPageContent({ product, locale }: ProductPageContentProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${product.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {product.title}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {product.description}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center space-x-2 bg-primary-red text-white px-8 py-4 rounded-md font-semibold hover:bg-red-700 transition-colors"
            >
              <span>Request Quote</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-primary-blue mb-4">Key Features</h2>
            <p className="text-gray-600 text-lg">
              Discover what makes our {product.title.toLowerCase()} exceptional
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start space-x-3 p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 bg-primary-blue text-white p-2 rounded-full">
                  <Check size={20} />
                </div>
                <p className="text-gray-800">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-blue mb-4">Gallery</h2>
            <p className="text-gray-600 text-lg">
              View our {product.title.toLowerCase()} in action
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <div
                className="w-full h-full bg-cover bg-center transition-all duration-500"
                style={{ backgroundImage: `url(${product.gallery[selectedImage]})` }}
              />
            </motion.div>

            {/* Thumbnails */}
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
              {product.gallery.map((image, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onClick={() => setSelectedImage(index)}
                  className={`h-24 rounded-lg overflow-hidden border-4 transition-all ${
                    selectedImage === index
                      ? 'border-primary-red'
                      : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-blue mb-4">Technical Specifications</h2>
            <p className="text-gray-600 text-lg">
              Detailed specifications for {product.title.toLowerCase()}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gray-50 rounded-lg overflow-hidden shadow-lg"
          >
            <div className="divide-y divide-gray-200">
              {product.specs.map((spec, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 hover:bg-white transition-colors"
                >
                  <div className="font-semibold text-gray-900">{spec.label}</div>
                  <div className="text-gray-600">{spec.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-blue to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today for a free consultation and quote
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center space-x-2 bg-primary-red text-white px-8 py-4 rounded-md font-semibold hover:bg-red-700 transition-colors"
              >
                <span>Request Quote</span>
                <ArrowRight size={20} />
              </Link>
              <a
                href="tel:+971501234567"
                className="inline-flex items-center space-x-2 bg-white text-primary-blue px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone size={20} />
                <span>Call Us Now</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
