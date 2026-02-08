import { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import {
  CheckCircle,
  Leaf,
  TrendingUp,
  Calculator,
  Euro,
  Home,
  Lightbulb,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ServiceHero } from '@/components/sections/ServiceHero'
import { ServiceCTA } from '@/components/sections/ServiceCTA'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Sustainability Advice for Landlords | MMRE',
  description:
    'Practical sustainability advice focused on rentals: which measures yield WWS points, what is profitable, and how to improve your rentability.',
}

export default async function SustainabilityPage() {
  const t = await getTranslations('rentOutServices.sustainability')
  const tNav = await getTranslations('nav')
  const tCommon = await getTranslations('common')

  const benefits = [
    {
      icon: Calculator,
      title: t('maximizeWWS'),
      description: t('maximizeWWSDesc'),
    },
    {
      icon: Euro,
      title: t('costVsReturn'),
      description: t('costVsReturnDesc'),
    },
    {
      icon: TrendingUp,
      title: t('betterRentabilityTitle'),
      description: t('betterRentabilityDesc'),
    },
    {
      icon: Home,
      title: t('futureProof'),
      description: t('futureProofDesc'),
    },
  ]

  const measures = [
    { name: t('roofInsulation'), impact: t('high'), wwsImpact: '++', roi: t('medium') },
    { name: t('facadeInsulation'), impact: t('high'), wwsImpact: '++', roi: t('low') + '-' + t('medium') },
    { name: t('floorInsulation'), impact: t('medium'), wwsImpact: '+', roi: t('high') },
    { name: t('hrGlazing'), impact: t('medium'), wwsImpact: '+', roi: t('medium') },
    { name: t('hrBoiler'), impact: t('medium'), wwsImpact: '+', roi: t('high') },
    { name: t('heatPump'), impact: t('veryHigh'), wwsImpact: '+++', roi: t('low') },
    { name: t('solarPanels'), impact: t('high'), wwsImpact: '++', roi: t('high') },
    { name: t('mechanicalVentilation'), impact: t('low'), wwsImpact: '+', roi: t('medium') },
  ]

  return (
    <>
      <ServiceHero
        title={t('title')}
        subtitle={t('subtitle')}
        breadcrumbs={[
          { label: tNav('rentOut'), href: '/rent-out' },
          { label: tNav('sustainability'), href: '/rent-out/services/sustainability' },
        ]}
        ctaLabel={tCommon('requestQuote')}
        ctaHref="/contact"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{t('whySustainability')}</h2>
              <div className="mt-6 space-y-4 text-gray-600">
                <p>{t('whySustainabilityText')}</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Leaf className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{t('higherWWS')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Leaf className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{t('betterRentability')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Leaf className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{t('lowerEnergyCosts')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Leaf className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{t('futureRegulations')}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="bg-highlight rounded-xl p-8">
                <Lightbulb className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">{t('ourAdviceDifferent')}</h3>
                <p className="mt-4 text-gray-600">{t('ourAdviceDifferentText')}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    {t('whichMeasures')}
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    {t('whatProfitable')}
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    {t('subsidies')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('measuresInPerspective')}</h2>
            <p className="mt-4 text-lg text-gray-600">{t('measuresInPerspectiveText')}</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full max-w-3xl mx-auto bg-white rounded-xl overflow-hidden">
              <thead className="bg-accent text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">{t('measure')}</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">{t('energyImpact')}</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">{t('wwsPoints')}</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">{t('roi')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {measures.map((measure, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{measure.name}</td>
                    <td className="px-6 py-4 text-sm text-center text-gray-600">{measure.impact}</td>
                    <td className="px-6 py-4 text-sm text-center text-accent font-medium">
                      {measure.wwsImpact}
                    </td>
                    <td className="px-6 py-4 text-sm text-center text-gray-600">{measure.roi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">{t('actualImpact')}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('whatDelivers')}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-gray-100 text-center"
              >
                <div className="w-12 h-12 bg-highlight rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/rent-out/services/rental-compliance">
                {t('combineWithCompliance')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <ServiceCTA
        title={t('needAdvice')}
        description={t('needAdviceText')}
        whatsappTemplate="verduurzaming"
        whatsappLabel={tCommon('requestQuote')}
        primaryLabel={tNav('rentOut')}
        primaryHref="/rent-out"
      />
    </>
  )
}
