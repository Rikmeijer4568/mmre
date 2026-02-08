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

export interface NavGroup {
  label: string
  items: NavItem[]
}

// Mega menu: Huur panel (for tenants)
export const huurNav: NavItem[] = [
  {
    name: 'Home Finding',
    href: '/services/home-finding',
    description: 'Personal guidance for rentals in Amsterdam',
    icon: Home,
  },
  {
    name: 'Relocation',
    href: '/services/relocation',
    description: 'Complete relocation support from A to Z',
    icon: Globe,
  },
  {
    name: 'Settling-in',
    href: '/services/settling-in',
    description: 'Registration & admin setup in the Netherlands',
    icon: ClipboardList,
  },
  {
    name: 'Immigration Support',
    href: '/services/immigration',
    description: 'Permits & legal guidance for your move',
    icon: FileText,
  },
  {
    name: 'Family & Integration',
    href: '/services/family-integration',
    description: 'Schools, childcare & cultural integration',
    icon: Users,
  },
  {
    name: 'Corporate Relocation',
    href: '/services/corporate',
    description: 'Relocation solutions for companies',
    icon: Building2,
  },
]

// Mega menu: Learn panel
export const learnNav: NavItem[] = [
  {
    name: 'What is Relocation?',
    href: '/what-is-relocation',
    description: 'Understanding relocation services explained',
    icon: BookOpen,
  },
  {
    name: 'What is Home Finding?',
    href: '/what-is-home-finding',
    description: 'Learn about aanhuur and rental agents',
    icon: Search,
  },
  {
    name: 'How We Work',
    href: '/how-we-work',
    description: 'Our process from first contact to keys',
    icon: Route,
  },
  {
    name: 'Pricing',
    href: '/pricing',
    description: 'Transparent packages and pricing',
    icon: CreditCard,
  },
]

// Rent Out services for landlords (used in footer)
export const rentOutServicesNav: NavItem[] = [
  {
    name: 'WWS Point Calculation',
    href: '/rent-out/services/wws-point-calculation',
    description: 'Official point calculation for maximum rent',
    icon: Calculator,
  },
  {
    name: 'Energy Label',
    href: '/rent-out/services/energy-label',
    description: 'Mandatory energy label for rental properties',
    icon: Zap,
  },
  {
    name: 'NEN 2580 Measurement',
    href: '/rent-out/services/nen-2580',
    description: 'Official living area measurement',
    icon: Ruler,
  },
  {
    name: 'Rental Compliance',
    href: '/rent-out/services/rental-compliance',
    description: 'Complete package: NEN 2580 + Energy Label + WWS',
    icon: ShieldCheck,
  },
  {
    name: 'Sustainability Advice',
    href: '/rent-out/services/sustainability',
    description: 'Optimize WWS score and rentability',
    icon: Leaf,
  },
]

// Mega menu: Rent Out panel (for landlords)
export const rentOutNav: NavItem[] = [
  {
    name: 'Rental Service',
    href: '/rent-out',
    description: 'Full-service approach to renting out your property',
    icon: Home,
  },
  {
    name: 'WWS Point Calculation',
    href: '/rent-out/services/wws-point-calculation',
    description: 'Official point calculation for maximum rent',
    icon: Calculator,
  },
  {
    name: 'Energy Label',
    href: '/rent-out/services/energy-label',
    description: 'Mandatory energy label for rental properties',
    icon: Zap,
  },
  {
    name: 'NEN 2580 Measurement',
    href: '/rent-out/services/nen-2580',
    description: 'Official living area measurement',
    icon: Ruler,
  },
  {
    name: 'Rental Compliance',
    href: '/rent-out/services/rental-compliance',
    description: 'Complete package: NEN 2580 + Energy Label + WWS',
    icon: ShieldCheck,
  },
  {
    name: 'Sustainability Advice',
    href: '/rent-out/services/sustainability',
    description: 'Optimize WWS score and rentability',
    icon: Leaf,
  },
]

// Direct navigation links (not inside dropdowns)
export const directNav: NavItem[] = [
  { name: 'Neighborhoods', href: '/neighborhoods' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
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
