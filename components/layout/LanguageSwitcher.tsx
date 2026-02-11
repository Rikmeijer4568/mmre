'use client'

import { usePathname, useRouter } from '@/i18n/navigation'
import { useLocale } from 'next-intl'
import { locales, type Locale } from '@/i18n/config'
import { useParams } from 'next/navigation'

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const params = useParams()
  const currentLocale = useLocale() as Locale

  const handleLocaleChange = (locale: Locale) => {
    router.replace(
      // @ts-expect-error -- TypeScript doesn't have access to the dynamic segment value at compile time
      { pathname, params },
      { locale }
    )
  }

  return (
    <div className="flex items-center gap-1 text-sm">
      {locales.map((locale, index) => (
        <span key={locale} className="flex items-center">
          {index > 0 && <span className="text-stone-400 mx-1">|</span>}
          <button
            onClick={() => handleLocaleChange(locale)}
            className={`uppercase transition-colors ${
              locale === currentLocale
                ? 'text-accent font-semibold'
                : 'text-stone-600 hover:text-accent'
            }`}
          >
            {locale}
          </button>
        </span>
      ))}
    </div>
  )
}
