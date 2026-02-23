'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContactSidebar from '@/components/FloatingContactSidebar';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage({ params }: { params: { locale: string } }) {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+971 50 123 4567', '+971 4 123 4567'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@gccsofi.com', 'sales@gccsofi.com'],
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Dubai, United Arab Emirates'],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Sunday - Thursday: 8:00 AM - 6:00 PM', 'Friday - Saturday: Closed'],
    },
  ];

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
              Contact Us
            </h1>
            <p className="text-xl text-white/90">
              Get in touch with our team for any inquiries or project consultations
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
      
      <Footer locale={params.locale} />
      <FloatingContactSidebar />
    </main>
  );
}
