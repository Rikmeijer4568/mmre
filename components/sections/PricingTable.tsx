import Link from 'next/link'
import { Check, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getWhatsAppLink, WhatsAppTemplate } from '@/lib/whatsapp'

interface PricingPackage {
  name: string
  price: string
  priceNote?: string
  description: string
  features: string[]
  highlighted?: boolean
  whatsappTemplate: WhatsAppTemplate
  ctaLabel?: string
}

interface PricingTableProps {
  title?: string
  subtitle?: string
  packages: PricingPackage[]
}

export function PricingTable({
  title = 'Our Packages',
  subtitle,
  packages,
}: PricingTableProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          {subtitle && <p className="mt-4 text-lg text-gray-600">{subtitle}</p>}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 border-2 ${
                pkg.highlighted
                  ? 'border-accent bg-highlight/30 relative'
                  : 'border-gray-100 bg-white'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-white text-xs font-medium rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold text-gray-900">{pkg.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{pkg.description}</p>
              <div className="mt-6 mb-6">
                <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                {pkg.priceNote && (
                  <span className="text-sm text-gray-500 ml-1">{pkg.priceNote}</span>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="w-full"
                variant={pkg.highlighted ? 'default' : 'outline'}
                asChild
              >
                <a href={getWhatsAppLink(pkg.whatsappTemplate)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  {pkg.ctaLabel || 'Get Started'}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
