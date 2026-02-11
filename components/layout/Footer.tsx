'use client'

import { Link } from '@/i18n/navigation'
import NextLink from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { NewsletterForm } from '@/components/forms/NewsletterForm'
import { footerNav } from '@/lib/navigation'

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
]

export function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950" />

      {/* Decorative accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 sm:gap-12 lg:gap-8">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block transition-opacity duration-200 hover:opacity-80">
              <Image
                src="/images/Logo/Meijer Münninghoff Real Estate.svg"
                alt="Meijer & Münninghoff Real Estate"
                width={180}
                height={50}
                className="h-11 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-6 text-gray-400 text-sm leading-relaxed max-w-md">
              Meijer & Münninghoff Real Estate - Your trusted partner for home finding and relocation services in Amsterdam.
            </p>

            {/* Contact info */}
            <div className="mt-6 space-y-3">
              <a
                href="mailto:info@mmre.nl"
                className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors duration-200 group"
              >
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors duration-200">
                  <Mail className="h-4 w-4" />
                </div>
                info@mmre.nl
              </a>
              <a
                href="tel:+31202101694"
                className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors duration-200 group"
              >
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors duration-200">
                  <Phone className="h-4 w-4" />
                </div>
                +31 20 210 1694
              </a>
            </div>

            {/* Newsletter */}
            <div className="mt-8 p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50">
              <h3 className="text-sm font-semibold text-white mb-3">Subscribe to our newsletter</h3>
              <p className="text-gray-400 text-xs mb-4">Get the latest updates on Amsterdam real estate.</p>
              <NewsletterForm />
            </div>
          </div>

          {/* Dynamic columns from navigation.ts */}
          {footerNav.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm font-semibold text-white mb-5 tracking-wide">{group.label}</h3>
              <ul className="space-y-3.5">
                {group.items.map((link) => (
                  <li key={link.name}>
                    <NextLink
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-all duration-200
                               hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="p-2.5 bg-gray-800 rounded-xl text-gray-400 hover:text-white hover:bg-gray-700
                           transition-all duration-200 hover:-translate-y-0.5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{link.name}</span>
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Copyright & Legal links */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <span className="text-gray-600">·</span>
                <Link href="/terms" className="hover:text-white transition-colors duration-200">
                  Terms & Conditions
                </Link>
              </div>
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} MMRE. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
