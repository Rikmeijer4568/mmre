'use client'

import { useState, useEffect } from 'react'
import { Link, usePathname } from '@/i18n/navigation'
import Image from 'next/image'
import { X, ChevronDown, MessageCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { getWhatsAppLink } from '@/lib/whatsapp'
import { huurNav, rentOutNav, learnNav, type NavItem } from '@/lib/navigation'
import { LanguageSwitcher } from './LanguageSwitcher'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

function Accordion({
  label,
  items,
  onClose,
}: {
  label: string
  items: NavItem[]
  onClose: () => void
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="border-b border-gray-100">
      <button
        type="button"
        className="flex items-center justify-between w-full py-3 text-base font-medium text-gray-900"
        onClick={() => setExpanded(!expanded)}
      >
        {label}
        <ChevronDown
          className={`h-5 w-5 text-gray-400 transition-transform ${
            expanded ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          expanded ? 'max-h-96 pb-3' : 'max-h-0'
        }`}
      >
        <div className="space-y-1 pl-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
              onClick={onClose}
            >
              {item.icon && <item.icon className="h-4 w-4 text-accent flex-shrink-0" />}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()
  const t = useTranslations('nav')
  const tCommon = useTranslations('common')

  // Close on route change
  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="lg:hidden fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/20" onClick={onClose} />

      {/* Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl overflow-y-auto">
        <div className="px-6 py-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <Link href="/" className="-m-1.5 p-1.5" onClick={onClose}>
              <Image
                src="/images/Logo/Meijer Münninghoff Real Estate.svg"
                alt="Meijer & Münninghoff Real Estate"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={onClose}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Navigation */}
          <div className="space-y-0">
            <Accordion label={t('rentIn')} items={huurNav} onClose={onClose} />
            <Accordion label={t('rentOut')} items={rentOutNav} onClose={onClose} />
            <Accordion label={t('learn')} items={learnNav} onClose={onClose} />

            {/* Direct links */}
            <div className="pt-3 space-y-1">
              <Link
                href="/neighborhoods"
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-gray-900 hover:bg-gray-50"
                onClick={onClose}
              >
                {t('neighborhoods')}
              </Link>
              <Link
                href="/about"
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-gray-900 hover:bg-gray-50"
                onClick={onClose}
              >
                {t('about')}
              </Link>
              <Link
                href="/contact"
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-gray-900 hover:bg-gray-50"
                onClick={onClose}
              >
                {t('contact')}
              </Link>
            </div>
          </div>

          {/* Language Switcher */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex justify-center">
              <LanguageSwitcher />
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <Button variant="whatsapp" className="w-full" asChild>
              <a href={getWhatsAppLink('general')} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                {tCommon('whatsappUs')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
