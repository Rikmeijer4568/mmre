import { defineRouting } from 'next-intl/routing'
import { locales, defaultLocale } from './config'

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: 'always',
  pathnames: {
    // Home
    '/': '/',

    // Offerings (locale-specific slugs)
    '/offerings': {
      en: '/offerings',
      nl: '/aanbod',
      es: '/oferta'
    },
    '/offerings/[slug]': {
      en: '/offerings/[slug]',
      nl: '/aanbod/[slug]',
      es: '/oferta/[slug]'
    },

    // Management
    '/management': {
      en: '/management',
      nl: '/beheer',
      es: '/gestion'
    },

    // Static pages
    '/about': '/about',
    '/contact': '/contact',
    '/faq': '/faq',
    '/pricing': {
      en: '/pricing',
      nl: '/tarieven',
      es: '/precios'
    },
    '/privacy': '/privacy',
    '/terms': '/terms',
    '/how-we-work': '/how-we-work',
    '/what-is-relocation': '/what-is-relocation',
    '/what-is-home-finding': '/what-is-home-finding',

    // Neighborhoods
    '/neighborhoods': '/neighborhoods',
    '/neighborhoods/[slug]': '/neighborhoods/[slug]',

    // Services (for tenants)
    '/services/home-finding': '/services/home-finding',
    '/services/relocation': '/services/relocation',
    '/services/settling-in': '/services/settling-in',
    '/services/immigration': '/services/immigration',
    '/services/family-integration': '/services/family-integration',
    '/services/corporate': '/services/corporate',

    // Rent-in
    '/rent-in': '/rent-in',

    // Rent-out (for landlords)
    '/rent-out': '/rent-out',
    '/rent-out/services/wws-point-calculation': '/rent-out/services/wws-point-calculation',
    '/rent-out/services/energy-label': '/rent-out/services/energy-label',
    '/rent-out/services/nen-2580': '/rent-out/services/nen-2580',
    '/rent-out/services/rental-compliance': '/rent-out/services/rental-compliance',
    '/rent-out/services/sustainability': '/rent-out/services/sustainability',
  }
})
