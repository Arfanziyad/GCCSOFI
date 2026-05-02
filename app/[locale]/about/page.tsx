'use client';

import { motion } from 'framer-motion';
import { Target, Award, Users, Globe } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage({ params }: { params: { locale: string } }) {
  const values = [
    {
      icon: Target,
      title: 'Quality',
      description: 'We deliver exceptional quality backed by ISO standards and rigorous inspection procedures.',
    },
    {
      icon: Award,
      title: 'Customer Satisfaction',
      description: 'We tailor our services to client needs with customized support and immediate response.',
    },
    {
      icon: Users,
      title: 'Integrity',
      description: 'We provide reliable construction support, labor supply, and specialized engineering services.',
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'We maintain a safety-focused work culture with environmental protection as a core consideration.',
    },
  ];

  const stats = [
    { number: '24', label: 'Years of Service in KSA' },
    { number: '2000', label: 'Established' },
    { number: 'Saudi', label: 'Ownership' },
    { number: '3', label: 'Workforce Groups' },
  ];

  return (
    <main className="min-h-screen">
      
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
              About Gulf Solidarity
            </h1>
            <p className="text-xl text-white/90 mb-8">
              A wholly Saudi-owned organization with 24 years of service in KSA.
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
                Gulf Solidarity Contracting Co. is a wholly Saudi-owned organization established in 2000 as Misfer Al Khurby General Contracting Company.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Our business areas include architectural products, fire and safety, electrical, manpower supply, equipment supply, transportation, and trading.
              </p>
              <p className="text-gray-600 text-lg">
                Our workforce includes engineers, technicians, and skilled labor, supported by a specialized engineering department, reliable construction and labor supply, and short-term and long-term manpower services under the leadership of CEO Misfer Bin Ali Al-Kurbi.
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
              The core values of our architectural products division
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
              Need More Information?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact our team for product, manpower, equipment, fire and safety, electrical, transportation, or trading inquiries.
            </p>
            <Link
              href={`/${params.locale}/contact`}
              className="inline-block bg-primary-red text-white px-8 py-4 rounded-md font-semibold hover:bg-red-700 transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
