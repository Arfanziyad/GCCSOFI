'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const params = useParams();
  const locale = params?.locale || 'en';

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-blue to-blue-600 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-white"
      >
        <h1 className="text-9xl font-bold mb-4">404</h1>
        <h2 className="text-4xl font-bold mb-6">Page Not Found</h2>
        <p className="text-xl mb-8 text-white/90">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center space-x-2 bg-white text-primary-blue px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            <Home size={20} />
            <span>Go Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center space-x-2 bg-primary-red text-white px-8 py-4 rounded-md font-semibold hover:bg-red-700 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
