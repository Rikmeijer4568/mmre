import { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PricingTable } from '@/components/sections/PricingTable'
import { ServiceCTA } from '@/components/sections/ServiceCTA'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Pricing - Home Finding & Relocation Packages | MMRE',
  description:
    'Transparent pricing for MMRE home finding and relocation services. Choose from Home Finding, Relocation Essentials, or Full Relocation packages.',
}

export default async function PricingPage() {
  const t = await getTranslations('pricing')
  const tCommon = await getTranslations('common')

  const packages = [
    {
      name: t('packages.homeFinding.name'),
      price: '€1,895',
      priceNote: t('oneTimeFee'),
      description: t('packages.homeFinding.description'),
      features: [
        t('packages.homeFinding.feature1'),
        t('packages.homeFinding.feature2'),
        t('packages.homeFinding.feature3'),
        t('packages.homeFinding.feature4'),
        t('packages.homeFinding.feature5'),
        t('packages.homeFinding.feature6'),
        t('packages.homeFinding.feature7'),
      ],
      whatsappTemplate: 'homeFinding' as const,
      ctaLabel: t('packages.homeFinding.cta'),
    },
    {
      name: t('packages.relocationEssentials.name'),
      price: '€2,895',
      priceNote: t('oneTimeFee'),
      description: t('packages.relocationEssentials.description'),
      highlighted: true,
      features: [
        t('packages.relocationEssentials.feature1'),
        t('packages.relocationEssentials.feature2'),
        t('packages.relocationEssentials.feature3'),
        t('packages.relocationEssentials.feature4'),
        t('packages.relocationEssentials.feature5'),
        t('packages.relocationEssentials.feature6'),
        t('packages.relocationEssentials.feature7'),
      ],
      whatsappTemplate: 'relocation' as const,
      ctaLabel: tCommon('getStarted'),
    },
    {
      name: t('packages.fullRelocation.name'),
      price: '€4,495',
      priceNote: t('oneTimeFee'),
      description: t('packages.fullRelocation.description'),
      features: [
        t('packages.fullRelocation.feature1'),
        t('packages.fullRelocation.feature2'),
        t('packages.fullRelocation.feature3'),
        t('packages.fullRelocation.feature4'),
        t('packages.fullRelocation.feature5'),
        t('packages.fullRelocation.feature6'),
        t('packages.fullRelocation.feature7'),
      ],
      whatsappTemplate: 'relocation' as const,
      ctaLabel: t('packages.fullRelocation.cta'),
    },
  ]

  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
  ]

  return (
    <>
      <section className="relative bg-accent text-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">{t('title')}</h1>
            <p className="mt-6 text-xl text-gray-200">{t('heroSubtitle')}</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900">{t('introTitle')}</h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">{t('introText1')}</p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">{t('introText2')}</p>
          </div>
        </div>
      </section>

      <PricingTable
        title={t('choosePackage')}
        subtitle={t('packagesSubtitle')}
        packages={packages}
      />

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900">{t('corporateTitle')}</h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">{t('corporateText')}</p>
            <div className="mt-8">
              <Button asChild>
                <Link href="/services/corporate">
                  {t('corporateCta')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{t('faqTitle')}</h2>
            <div className="space-y-8">
              {faqs.map((faq, idx) => (
                <div key={idx}>
                  <h3 className="text-lg font-semibold text-gray-900">{faq.q}</h3>
                  <p className="mt-2 text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceCTA
        title={t('ctaTitle')}
        description={t('ctaDescription')}
        whatsappTemplate="general"
        whatsappLabel={t('ctaWhatsapp')}
        primaryLabel={t('ctaPrimary')}
        primaryHref="/how-we-work"
      />
    </>
  )
}
