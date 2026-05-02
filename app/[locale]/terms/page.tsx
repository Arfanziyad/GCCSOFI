'use client';

import { motion } from 'framer-motion';

export default function TermsPage({ params }: { params: { locale: string } }) {
  return (
    <main className="min-h-screen">
      
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-primary-blue mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                <strong>Last updated:</strong> February 8, 2026
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Agreement to Terms</h2>
              <p className="mb-6">
                By accessing our website, you agree to be bound by these Terms of Service and 
                agree that you are responsible for compliance with any applicable local laws.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Use License</h2>
              <p className="mb-6">
                Permission is granted to temporarily access the materials (information or software) 
                on GCCSOFI&apos;s website for personal, non-commercial transitory viewing only.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Disclaimer</h2>
              <p className="mb-6">
                The materials on GCCSOFI&apos;s website are provided on an &apos;as is&apos; basis. GCCSOFI makes 
                no warranties, expressed or implied, and hereby disclaims and negates all other 
                warranties including, without limitation, implied warranties or conditions of 
                merchantability, fitness for a particular purpose, or non-infringement of intellectual 
                property or other violation of rights.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Limitations</h2>
              <p className="mb-6">
                In no event shall GCCSOFI or its suppliers be liable for any damages (including, 
                without limitation, damages for loss of data or profit, or due to business interruption) 
                arising out of the use or inability to use the materials on GCCSOFI&apos;s website.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Modifications</h2>
              <p className="mb-6">
                GCCSOFI may revise these terms of service for its website at any time without notice. 
                By using this website, you are agreeing to be bound by the then current version of 
                these terms of service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Contact Information</h2>
              <p className="mb-6">
                For questions regarding these Terms of Service, please contact:
                <br />
                Email: info@gccsofi.com
                <br />
                Phone: +971 50 123 4567
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
