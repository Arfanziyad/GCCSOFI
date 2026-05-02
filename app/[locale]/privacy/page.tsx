'use client';

import { motion } from 'framer-motion';

export default function PrivacyPage({ params }: { params: { locale: string } }) {
  return (
    <main className="min-h-screen">
      
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-primary-blue mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                <strong>Last updated:</strong> February 8, 2026
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Introduction</h2>
              <p className="mb-6">
                GCCSOFI (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting 
                your personal data. This privacy policy explains how we collect, use, and safeguard 
                your information when you visit our website.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Information We Collect</h2>
              <p className="mb-6">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Fill out contact forms</li>
                <li>Request quotes or information</li>
                <li>Subscribe to our newsletter</li>
                <li>Communicate with us via email or phone</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">How We Use Your Information</h2>
              <p className="mb-6">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Respond to your inquiries and requests</li>
                <li>Provide quotes and project information</li>
                <li>Improve our services and website</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Data Security</h2>
              <p className="mb-6">
                We implement appropriate technical and organizational measures to protect your 
                personal data against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Contact Us</h2>
              <p className="mb-6">
                If you have questions about this Privacy Policy, please contact us at:
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
