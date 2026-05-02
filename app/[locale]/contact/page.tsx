'use client';

import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage({ params }: { params: { locale: string } }) {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phones',
      details: ['+966 59 486 7690', '+966 55 781 0477', '+966 54 470 3587', '+966 59 679 8083'],
    },
    {
      icon: Mail,
      title: 'Emails',
      details: ['sales@gulfsolidarity.net', 'info@gulfsolidarity.net', 'farooq@gulfsolidarity.net', 'ziyad@gulfsolidarity.net'],
    },
    {
      icon: MapPin,
      title: 'Dammam',
      details: ['8240, 9th Street, Al Souq District'],
    },
    {
      icon: Clock,
      title: 'Yanbu',
      details: ['King Abdulaziz Rd'],
    },
  ];

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
              Contact Us
            </h1>
            <p className="text-xl text-white/90">
              Reach Gulf Solidarity Contracting Co. for product and service inquiries in KSA.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary-blue text-white p-4 rounded-full">
                    <info.icon size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm mb-1">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
      
    </main>
  );
}
