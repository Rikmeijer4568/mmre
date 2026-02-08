import { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import {
  CheckCircle,
  Ruler,
  Zap,
  Calculator,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  Users,
  Building2,
  TrendingUp,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ServiceHero } from '@/components/sections/ServiceHero'
import { ServiceCTA } from '@/components/sections/ServiceCTA'
import { TargetAudience } from '@/components/sections/TargetAudience'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Rental Compliance Service - NEN 2580 + Energy Label + WWS | MMRE',
  description:
    'Complete rental compliance in one package: NEN 2580 measurement, Energy Label, and WWS point calculation. Everything you need as a landlord.',
}

export default async function RentalCompliancePage() {
  const t = await getTranslations('rentOutServices.rentalCompliance')
  const tNav = await getTranslations('nav')
  const tCommon = await getTranslations('common')

  const audienceSegments = [
    {
      icon: Users,
      title: t('avoidRisks'),
      description: t('avoidRisksDesc'),
    },
    {
      icon: TrendingUp,
      title: t('optimize'),
      description: t('optimizeDesc'),
    },
    {
      icon: Building2,
      title: t('portfolio'),
      description: t('portfolioDesc'),
    },
  ]

  const packageItems = [
    {
      icon: Ruler,
      title: t('nen2580Title'),
      description: t('nen2580Desc'),
      href: '/rent-out/services/nen-2580',
    },
    {
      icon: Zap,
      title: t('energyLabelTitle'),
      description: t('energyLabelDesc'),
      href: '/rent-out/services/energy-label',
    },
    {
      icon: Calculator,
      title: t('wwsTitle'),
      description: t('wwsDesc'),
      href: '/rent-out/services/wws-point-calculation',
    },
  ]

  const benefits = [
    t('benefit1'),
    t('benefit2'),
    t('benefit3'),
    t('benefit4'),
    t('benefit5'),
    t('benefit6'),
  ]

  const risks = [t('risk1'), t('risk2'), t('risk3'), t('risk4')]

  return (
    <>
      <ServiceHero
        title={t('title')}
        subtitle={t('subtitle')}
        breadcrumbs={[
          { label: tNav('rentOut'), href: '/rent-out' },
          { label: tNav('rentalCompliance'), href: '/rent-out/services/rental-compliance' },
        ]}
        ctaLabel={tCommon('requestQuote')}
        ctaHref="/contact"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{t('whyBundle')}</h2>
              <div className="mt-6 space-y-4 text-gray-600">
                <p>{t('whyBundleText')}</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{t('nen2580Provides')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{t('energyLabelInput')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{t('wwsDetermines')}</span>
                  </li>
                </ul>
                <p>{t('bundleAdvantage')}</p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('risksOfSeparate')}</h3>
                    <ul className="mt-3 space-y-2 text-sm text-gray-600">
                      {risks.map((risk, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 flex-shrink-0" />
                          {risk}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('whatsIncluded')}</h2>
            <p className="mt-4 text-lg text-gray-600">{t('whatsIncludedSubtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {packageItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-accent/30 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-highlight rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                <div className="mt-4 text-accent text-sm font-medium flex items-center">
                  {tCommon('moreInfo')}
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TargetAudience
        title={t('forWhom')}
        subtitle={t('forWhomSubtitle')}
        segments={audienceSegments}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-highlight rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="h-8 w-8 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">{t('completeCertainty')}</h2>
            <p className="mt-4 text-lg text-gray-600">{t('completeCertaintyText')}</p>
            <ul className="mt-10 grid sm:grid-cols-2 gap-4 text-left">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ServiceCTA
        title={t('interestedComplete')}
        description={t('interestedCompleteText')}
        whatsappTemplate="verhuurCompliance"
        whatsappLabel={tCommon('requestQuote')}
        primaryLabel={tNav('rentOut')}
        primaryHref="/rent-out"
      />
    </>
  )
}
