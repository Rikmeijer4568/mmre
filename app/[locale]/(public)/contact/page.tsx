import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { ContactForm } from '@/components/forms/ContactForm'
import { getWhatsAppLink } from '@/lib/whatsapp'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Contact Us | MMRE',
  description: 'Get in touch with MMRE. Contact us via WhatsApp, email, or our contact form. We typically respond within 15 minutes.',
}

export default async function ContactPage() {
  const t = await getTranslations('contact')

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">{t('title')}</h1>
          <p className="mt-4 text-lg text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 mb-12 lg:mb-0">
            <div className="space-y-6">
              {/* WhatsApp - Highlighted */}
              <Card className="border-2 border-whatsapp bg-whatsapp/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-whatsapp rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{t('whatsappFastest')}</h3>
                      <a
                        href={getWhatsAppLink('general')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-whatsapp hover:underline font-medium"
                      >
                        +31 6 12345678
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        {t('averageResponse')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-highlight rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{t('email')}</h3>
                      <a
                        href="mailto:info@mmre.nl"
                        className="text-accent hover:underline"
                      >
                        info@mmre.nl
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        {t('emailResponse')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-highlight rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{t('office')}</h3>
                      <p className="text-gray-600">
                        Amsterdam, Netherlands
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {t('byAppointment')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hours */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-highlight rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{t('hours')}</h3>
                      <p className="text-gray-600">{t('mondayFriday')}: 9:00 - 18:00</p>
                      <p className="text-gray-600">{t('saturday')}: 10:00 - 15:00</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {t('whatsappAvailable')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('sendMessage')}</h2>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
