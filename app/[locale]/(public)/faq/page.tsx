import { Metadata } from 'next'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'
import { getWhatsAppLink } from '@/lib/whatsapp'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions | MMRE',
  description: 'Find answers to common questions about renting in Amsterdam, our services for tenants and landlords, and how MMRE can help you.',
}

export default async function FAQPage() {
  const t = await getTranslations('faq')
  const tCommon = await getTranslations('common')

  const generalFAQs = [
    {
      question: t('general.q1'),
      answer: t('general.a1'),
    },
    {
      question: t('general.q2'),
      answer: t('general.a2'),
    },
    {
      question: t('general.q3'),
      answer: t('general.a3'),
    },
  ]

  const tenantFAQs = [
    {
      question: t('tenants.q1'),
      answer: t('tenants.a1'),
    },
    {
      question: t('tenants.q2'),
      answer: t('tenants.a2'),
    },
    {
      question: t('tenants.q3'),
      answer: t('tenants.a3'),
    },
    {
      question: t('tenants.q4'),
      answer: t('tenants.a4'),
    },
  ]

  const landlordFAQs = [
    {
      question: t('landlords.q1'),
      answer: t('landlords.a1'),
    },
    {
      question: t('landlords.q2'),
      answer: t('landlords.a2'),
    },
    {
      question: t('landlords.q3'),
      answer: t('landlords.a3'),
    },
    {
      question: t('landlords.q4'),
      answer: t('landlords.a4'),
    },
  ]

  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">{t('title')}</h1>
          <p className="mt-4 text-lg text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        {/* General */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('generalTitle')}</h2>
          <FAQAccordion faqs={generalFAQs} />
        </div>

        {/* For Tenants */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('tenantsTitle')}</h2>
          <FAQAccordion faqs={tenantFAQs} />
        </div>

        {/* For Landlords */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('landlordsTitle')}</h2>
          <FAQAccordion faqs={landlordFAQs} />
        </div>

        {/* CTA */}
        <div className="text-center mt-16 p-8 bg-gray-50 rounded-2xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {t('stillQuestions')}
          </h3>
          <p className="text-gray-600 mb-6">
            {t('contactUs')}
          </p>
          <Button variant="whatsapp" size="lg" asChild>
            <a href={getWhatsAppLink('general')} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              {tCommon('whatsappUs')}
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
