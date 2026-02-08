'use client'

import { usePathname } from '@/i18n/navigation'
import { useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { locales, type Locale } from '@/i18n/config'

export function LanguageSwitcher() {
  const pathname = usePathname()
  const currentLocale = useLocale() as Locale

  return (
    <div className="flex items-center gap-1 text-sm">
      {locales.map((locale, index) => (
        <span key={locale} className="flex items-center">
          {index > 0 && <span className="text-stone-400 mx-1">|</span>}
          <Link
            href={pathname}
            locale={locale}
            className={`uppercase transition-colors ${
              locale === currentLocale
                ? 'text-accent font-semibold'
                : 'text-stone-600 hover:text-accent'
            }`}
          >
            {locale}
          </Link>
        </span>
      ))}
    </div>
  )
}
