'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContactSidebar from '@/components/FloatingContactSidebar';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';

export default function ProjectsPage({ params }: { params: { locale: string } }) {
  return (
    <main className="min-h-screen">
      <Navbar locale={params.locale} />
      
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
              Our Projects
            </h1>
            <p className="text-xl text-white/90">
              Explore our portfolio of successful installations across the GCC region
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                locale={params.locale}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer locale={params.locale} />
      <FloatingContactSidebar />
    </main>
  );
}
