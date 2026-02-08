'use client'

import { useEffect, useRef, useCallback } from 'react'
import { Link, usePathname } from '@/i18n/navigation'
import { type NavItem } from '@/lib/navigation'

interface MegaMenuProps {
  items: NavItem[]
  isOpen: boolean
  onClose: () => void
}

export function MegaMenu({ items, isOpen, onClose }: MegaMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Close on route change
  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  return (
    <div
      ref={panelRef}
      className={`absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg transition-all duration-200 ${
        isOpen
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 gap-6">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-start gap-4 rounded-lg p-3 -m-3 hover:bg-gray-50 transition-colors group"
              onClick={onClose}
            >
              {item.icon && (
                <div className="w-10 h-10 bg-highlight rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 transition-colors">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
              )}
              <div>
                <p className="font-medium text-gray-900 group-hover:text-accent transition-colors">
                  {item.name}
                </p>
                {item.description && (
                  <p className="mt-0.5 text-sm text-gray-500">{item.description}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
