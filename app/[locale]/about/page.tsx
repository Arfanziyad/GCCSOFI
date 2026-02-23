'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContactSidebar from '@/components/FloatingContactSidebar';
import { motion } from 'framer-motion';
import { Target, Award, Users, Globe } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage({ params }: { params: { locale: string } }) {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To deliver innovative, high-quality construction and interior solutions that exceed client expectations across the GCC region.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality, craftsmanship, and professionalism in every project we undertake.',
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Our clients success is our success. We build lasting relationships through exceptional service and results.',
    },
    {
      icon: Globe,
      title: 'Regional Expertise',
      description: 'With extensive experience across the Gulf region, we understand local requirements and international standards.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '15+', label: 'Years Experience' },
    { number: '6', label: 'GCC Countries' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <main className="min-h-screen">
      <Navbar locale={params.locale} />
      
      {/* Hero Section */}
      <section className="relative h-[500px] mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop)' }}
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
              About GCCSOFI
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Leading the way in construction and interior solutions across the Gulf region since 2008
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-primary-blue mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                GCCSOFI (Gulf Solidarity) is a premier provider of construction and interior solutions, 
                specializing in operable walls, moving glass walls, HPL washroom cubicles, pivot doors, 
                hydraulic doors, terrace solutions, and office partitions.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                With over 15 years of experience, we have successfully completed hundreds of projects 
                across the GCC region, serving commercial, hospitality, educational, and residential sectors.
              </p>
              <p className="text-gray-600 text-lg">
                Our commitment to quality, innovation, and customer satisfaction has established us as a 
                trusted partner for leading developers, architects, and contractors throughout the Gulf.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-lg overflow-hidden shadow-xl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop)' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary-blue to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary-blue text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-primary-blue mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can help bring your project to life
            </p>
            <Link
              href={`/${params.locale}/contact`}
              className="inline-block bg-primary-red text-white px-8 py-4 rounded-md font-semibold hover:bg-red-700 transition-colors"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer locale={params.locale} />
      <FloatingContactSidebar />
    </main>
  );
}
