import {
  Home,
  Globe,
  ClipboardList,
  FileText,
  Users,
  Building2,
  BookOpen,
  Search,
  Route,
  CreditCard,
  Calculator,
  Zap,
  Ruler,
  ShieldCheck,
  Leaf,
  type LucideIcon,
} from 'lucide-react'

export interface NavItem {
  name: string
  href: string
  description?: string
  icon?: LucideIcon
}

export interface NavConfig {
  nameKey: string
  descKey: string
  href: string
  icon?: LucideIcon
}

export interface NavGroup {
  label: string
  items: NavItem[]
}

// Mega menu configs — names/descriptions resolved via useTranslations in components
export const huurNavConfig: NavConfig[] = [
  { nameKey: 'homeFinding',       descKey: 'homeFinding',       href: '/services/home-finding',                        icon: Home },
  { nameKey: 'relocation',        descKey: 'relocation',        href: '/services/relocation',                          icon: Globe },
  { nameKey: 'settlingIn',        descKey: 'settlingIn',        href: '/services/settling-in',                         icon: ClipboardList },
  { nameKey: 'immigration',       descKey: 'immigration',       href: '/services/immigration',                         icon: FileText },
  { nameKey: 'familyIntegration', descKey: 'familyIntegration', href: '/services/family-integration',                  icon: Users },
  { nameKey: 'corporate',         descKey: 'corporate',         href: '/services/corporate',                           icon: Building2 },
]

export const rentOutNavConfig: NavConfig[] = [
  { nameKey: 'rentalService',        descKey: 'rentalService',        href: '/rent-out',                                        icon: Home },
  { nameKey: 'wwsPointCalculation',  descKey: 'wwsPointCalculation',  href: '/rent-out/services/wws-point-calculation',          icon: Calculator },
  { nameKey: 'energyLabel',          descKey: 'energyLabel',          href: '/rent-out/services/energy-label',                  icon: Zap },
  { nameKey: 'nen2580',              descKey: 'nen2580',              href: '/rent-out/services/nen-2580',                      icon: Ruler },
  { nameKey: 'rentalCompliance',     descKey: 'rentalCompliance',     href: '/rent-out/services/rental-compliance',             icon: ShieldCheck },
  { nameKey: 'sustainability',       descKey: 'sustainability',       href: '/rent-out/services/sustainability',                icon: Leaf },
]

export const learnNavConfig: NavConfig[] = [
  { nameKey: 'whatIsRelocation',  descKey: 'whatIsRelocation',  href: '/what-is-relocation',   icon: BookOpen },
  { nameKey: 'whatIsHomeFinding', descKey: 'whatIsHomeFinding', href: '/what-is-home-finding',  icon: Search },
  { nameKey: 'howWeWork',         descKey: 'howWeWork',         href: '/how-we-work',           icon: Route },
  { nameKey: 'pricing',           descKey: 'pricing',           href: '/pricing',               icon: CreditCard },
]

// Footer link columns
export const footerNav: NavGroup[] = [
  {
    label: 'Tenants',
    items: [
      { name: 'Home Finding', href: '/services/home-finding' },
      { name: 'Relocation', href: '/services/relocation' },
      { name: 'Settling-in', href: '/services/settling-in' },
      { name: 'Immigration Support', href: '/services/immigration' },
      { name: 'Corporate Relocation', href: '/services/corporate' },
    ],
  },
  {
    label: 'Landlords',
    items: [
      { name: 'Rent Out', href: '/rent-out' },
      { name: 'WWS Point Calculation', href: '/rent-out/services/wws-point-calculation' },
      { name: 'Energy Label', href: '/rent-out/services/energy-label' },
      { name: 'NEN 2580 Measurement', href: '/rent-out/services/nen-2580' },
      { name: 'Rental Compliance', href: '/rent-out/services/rental-compliance' },
    ],
  },
  {
    label: 'Learn',
    items: [
      { name: 'What is Relocation?', href: '/what-is-relocation' },
      { name: 'What is Home Finding?', href: '/what-is-home-finding' },
      { name: 'How We Work', href: '/how-we-work' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Neighborhoods', href: '/neighborhoods' },
    ],
  },
  {
    label: 'Company',
    items: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms & Conditions', href: '/terms' },
    ],
  },
]
