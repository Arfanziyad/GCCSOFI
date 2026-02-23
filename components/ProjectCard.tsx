import { motion } from 'framer-motion';
import Link from 'next/link';
import { Project } from '@/types';
import { MapPin, Calendar } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  locale: string;
  index: number;
}

export default function ProjectCard({ project, locale, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link href={`/${locale}/projects/${project.slug}`}>
        <div className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
          {/* Image */}
          <div className="relative h-64 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            {/* Category Badge */}
            <div className="absolute top-4 right-4">
              <span className="bg-primary-red text-white px-3 py-1 rounded-full text-sm font-medium">
                {project.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-blue transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-2">
              {project.description}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <MapPin size={16} />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar size={16} />
                <span>{project.year}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
