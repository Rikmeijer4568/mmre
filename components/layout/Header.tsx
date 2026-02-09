'use client'

import { useState, useCallback, useRef } from 'react'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { Menu, ChevronDown, MessageCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { getWhatsAppLink } from '@/lib/whatsapp'
import { huurNav, rentOutNav, learnNav, directNav } from '@/lib/navigation'
import { MegaMenu } from './MegaMenu'
import { MobileMenu } from './MobileMenu'
import { LanguageSwitcher } from './LanguageSwitcher'

type MenuPanel = 'rentIn' | 'rentOut' | 'learn' | null

export function Header() {
  const t = useTranslations('nav')
  const tCommon = useTranslations('common')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activePanel, setActivePanel] = useState<MenuPanel>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const closePanel = useCallback(() => {
    setActivePanel(null)
  }, [])

  function handleMouseEnter(panel: MenuPanel) {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current)
      leaveTimeoutRef.current = null
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActivePanel(panel)
    }, 150)
  }

  function handleMouseLeave() {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
    leaveTimeoutRef.current = setTimeout(() => {
      setActivePanel(null)
    }, 200)
  }

  function handlePanelMouseEnter() {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current)
      leaveTimeoutRef.current = null
    }
  }

  function handleTriggerClick(panel: MenuPanel) {
    setActivePanel((prev) => (prev === panel ? null : panel))
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image
                src="/images/Logo/Meijer Münninghoff Real Estate.svg"
                alt="Meijer & Münninghoff Real Estate"
                width={180}
                height={50}
                className="h-10 sm:h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-6">
            {/* Rent In dropdown trigger */}
            <div
              onMouseEnter={() => handleMouseEnter('rentIn')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  activePanel === 'rentIn' ? 'text-accent' : 'text-gray-700 hover:text-accent-light'
                }`}
                onClick={() => handleTriggerClick('rentIn')}
              >
                {t('rentIn')}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    activePanel === 'rentIn' ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>

            {/* Rent Out dropdown trigger */}
            <div
              onMouseEnter={() => handleMouseEnter('rentOut')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  activePanel === 'rentOut' ? 'text-accent' : 'text-gray-700 hover:text-accent-light'
                }`}
                onClick={() => handleTriggerClick('rentOut')}
              >
                {t('rentOut')}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    activePanel === 'rentOut' ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>

            {/* Learn dropdown trigger */}
            <div
              onMouseEnter={() => handleMouseEnter('learn')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  activePanel === 'learn' ? 'text-accent' : 'text-gray-700 hover:text-accent-light'
                }`}
                onClick={() => handleTriggerClick('learn')}
              >
                {t('learn')}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    activePanel === 'learn' ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>

            {/* Direct links */}
            <Link
              href="/neighborhoods"
              className="text-sm font-medium text-gray-700 hover:text-accent-light transition-colors"
            >
              {t('neighborhoods')}
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 hover:text-accent-light transition-colors"
            >
              {t('about')}
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 hover:text-accent-light transition-colors"
            >
              {t('contact')}
            </Link>
          </div>

          {/* Desktop CTA with Language Switcher */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
            <LanguageSwitcher />
            <Button variant="whatsapp" size="sm" asChild>
              <a href={getWhatsAppLink('general')} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                {tCommon('whatsappUs')}
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mega menu panels */}
      <div
        onMouseEnter={handlePanelMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <MegaMenu
          items={huurNav}
          isOpen={activePanel === 'rentIn'}
          onClose={closePanel}
        />
        <MegaMenu
          items={rentOutNav}
          isOpen={activePanel === 'rentOut'}
          onClose={closePanel}
        />
        <MegaMenu
          items={learnNav}
          isOpen={activePanel === 'learn'}
          onClose={closePanel}
        />
      </div>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  )
}
