'use client';

import { motion } from 'framer-motion';
import { FileText, Presentation, Download } from 'lucide-react';

export default function BrochureDownloads() {
  const brochures = [
    {
      title: 'Website',
      description: 'Visit our website for company, product, and contact information',
      format: 'PDF',
      size: 'Online',
      icon: FileText,
      file: 'http://www.gulfsolidarity.net',
    },
    {
      title: 'Contact Emails',
      description: 'Reach sales or general inquiries through our listed email addresses',
      format: 'INFO',
      size: '4 Emails',
      icon: Presentation,
      file: 'mailto:sales@gulfsolidarity.net',
    },
  ];

  const handleDownload = (file: string, title: string) => {
    window.open(file, '_blank', 'noopener,noreferrer');
    alert(`${title} opened successfully.`);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">
            Resources
          </h2>
          <p className="text-gray-600 text-lg">
            Access the official website and key contact channels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {brochures.map((brochure, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-gradient-to-br from-primary-blue to-blue-600 rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div className="p-8 text-white">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <brochure.icon size={32} />
                  </div>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                    {brochure.format}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-2">{brochure.title}</h3>
                <p className="text-white/90 mb-4">{brochure.description}</p>
                <p className="text-white/70 text-sm mb-6">Size: {brochure.size}</p>

                <button
                  onClick={() => handleDownload(brochure.file, brochure.title)}
                  className="w-full bg-white text-primary-blue py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 group"
                >
                  <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                  <span>Open {brochure.format}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
