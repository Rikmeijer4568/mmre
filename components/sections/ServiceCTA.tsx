import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getWhatsAppLink, WhatsAppTemplate } from '@/lib/whatsapp'

interface ServiceCTAProps {
  title?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  whatsappTemplate?: WhatsAppTemplate
  whatsappLabel?: string
}

export function ServiceCTA({
  title = 'Ready to Get Started?',
  description = 'Contact us today and let us help you with your move to the Netherlands.',
  primaryLabel,
  primaryHref,
  whatsappTemplate = 'general',
  whatsappLabel = 'Chat on WhatsApp',
}: ServiceCTAProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-accent text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-200 max-w-2xl mx-auto">{description}</p>
        <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button size="lg" variant="whatsapp" asChild>
            <a href={getWhatsAppLink(whatsappTemplate)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              {whatsappLabel}
            </a>
          </Button>
          {primaryLabel && primaryHref && (
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <Link href={primaryHref}>{primaryLabel}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
