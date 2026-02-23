'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Project } from '@/types';
import { MapPin, Calendar, Tag, ArrowRight } from 'lucide-react';

interface ProjectPageContentProps {
  project: Project;
  locale: string;
}

export default function ProjectPageContent({ project, locale }: ProjectPageContentProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center space-x-3 mb-4">
              <span className="bg-primary-red text-white px-4 py-1 rounded-full text-sm font-medium">
                {project.category}
              </span>
              <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium">
                {project.year}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {project.title}
            </h1>
            <div className="flex items-center space-x-2 text-white/90 mb-6">
              <MapPin size={20} />
              <span className="text-xl">{project.location}</span>
            </div>
            <p className="text-xl text-white/90">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <MapPin className="text-primary-blue mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">{project.location}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <Calendar className="text-primary-blue mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Completion Year</h3>
              <p className="text-gray-600">{project.year}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <Tag className="text-primary-blue mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Category</h3>
              <p className="text-gray-600">{project.category}</p>
            </motion.div>
          </div>

          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-blue mb-8">Project Gallery</h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-96 lg:h-[600px] rounded-lg overflow-hidden shadow-xl"
            >
              <div
                className="w-full h-full bg-cover bg-center transition-all duration-500"
                style={{ backgroundImage: `url(${project.gallery[selectedImage]})` }}
              />
            </motion.div>

            {/* Thumbnails */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.gallery.map((image, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onClick={() => setSelectedImage(index)}
                  className={`h-32 rounded-lg overflow-hidden border-4 transition-all ${
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
              Want a Similar Project?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let&apos;s discuss how we can bring your vision to life
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center space-x-2 bg-primary-red text-white px-8 py-4 rounded-md font-semibold hover:bg-red-700 transition-colors"
              >
                <span>Contact Us</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                href={`/${locale}/projects`}
                className="inline-flex items-center space-x-2 bg-white text-primary-blue px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                <span>View All Projects</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
