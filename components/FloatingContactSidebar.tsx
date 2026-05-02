'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Phone, Mail, MessageCircle, ChevronRight, ChevronLeft } from 'lucide-react';

export default function FloatingContactSidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  const contacts = [
    {
      icon: Linkedin,
      label: 'Website',
      href: 'http://www.gulfsolidarity.net',
      color: 'hover:bg-blue-600',
    },
    {
      icon: Phone,
      label: 'Phone',
      href: 'tel:+966594867690',
      color: 'hover:bg-green-600',
    },
    {
      icon: MessageCircle,
      label: 'Phone 2',
      href: 'tel:+966557810477',
      color: 'hover:bg-green-500',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:info@gulfsolidarity.net',
      color: 'hover:bg-red-600',
    },
  ];

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40">
      <div className="flex items-center">
        <AnimatePresence mode="wait">
          {isExpanded && (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white shadow-lg rounded-r-lg overflow-hidden"
            >
              <div className="flex flex-col">
                {contacts.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 px-4 py-4 bg-primary-blue text-white transition-colors ${contact.color} border-b border-white/10 last:border-0`}
                    title={contact.label}
                  >
                    <contact.icon size={20} />
                    <span className="text-sm font-medium whitespace-nowrap">
                      {contact.label}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-primary-red text-white p-3 rounded-r-lg shadow-lg hover:bg-red-700 transition-colors"
          aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          {isExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>
    </div>
  );
}
