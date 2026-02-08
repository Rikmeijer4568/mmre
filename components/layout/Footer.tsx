'use client'

import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react'
import { NewsletterForm } from '@/components/forms/NewsletterForm'
import { footerNav } from '@/lib/navigation'

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/images/Logo/Meijer Münninghoff Real Estate.svg"
                alt="Meijer & Münninghoff Real Estate"
                width={160}
                height={45}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-gray-400 text-sm max-w-md">
              Meijer & Münninghoff Real Estate - Your trusted partner for home finding and relocation services in Amsterdam.
            </p>
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-white mb-3">Subscribe to our newsletter</h3>
              <NewsletterForm />
            </div>
          </div>

          {/* Dynamic columns from navigation.ts */}
          {footerNav.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm font-semibold text-white mb-4">{group.label}</h3>
              <ul className="space-y-3">
                {group.items.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact & Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="mailto:info@mmre.nl"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@mmre.nl
              </a>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{link.name}</span>
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Meijer & Münninghoff Real Estate. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
