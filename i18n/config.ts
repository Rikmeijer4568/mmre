export const locales = ['en', 'es', 'nl'] as const
export const defaultLocale = 'en' as const

export type Locale = (typeof locales)[number]

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  nl: 'Nederlands',
}
