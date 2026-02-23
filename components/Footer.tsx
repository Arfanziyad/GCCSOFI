import Link from 'next/link';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">GCCSOFI</h3>
            <p className="text-gray-400 text-sm mb-4">
              Gulf Solidarity - Leading provider of premium construction and interior solutions across the GCC region.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/gccsofi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:info@gccsofi.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+971501234567"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products`} className="text-gray-400 hover:text-white transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/projects`} className="text-gray-400 hover:text-white transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/products/operable-walls-moving-glass-walls`} className="text-gray-400 hover:text-white transition-colors text-sm">
                  Operable Walls
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products/hpl-washroom-cubicles`} className="text-gray-400 hover:text-white transition-colors text-sm">
                  HPL Cubicles
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products/pivot-doors`} className="text-gray-400 hover:text-white transition-colors text-sm">
                  Pivot Doors
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products/hydraulic-doors`} className="text-gray-400 hover:text-white transition-colors text-sm">
                  Hydraulic Doors
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products/office-partitions`} className="text-gray-400 hover:text-white transition-colors text-sm">
                  Office Partitions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-gray-400">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-gray-400">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span>+971 50 123 4567</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-gray-400">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <span>info@gccsofi.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {currentYear} GCCSOFI - Gulf Solidarity. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href={`/${locale}/privacy`} className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href={`/${locale}/terms`} className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
