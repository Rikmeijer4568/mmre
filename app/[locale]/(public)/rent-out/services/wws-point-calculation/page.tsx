import { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import { ArrowRight, AlertTriangle, CheckCircle, Users, Building2, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ServiceHero } from '@/components/sections/ServiceHero'
import { ServiceSteps } from '@/components/sections/ServiceSteps'
import { ServiceCTA } from '@/components/sections/ServiceCTA'
import { TargetAudience } from '@/components/sections/TargetAudience'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'WWS Point Calculation - Housing Valuation System | MMRE',
  description:
    'Professional WWS point calculation for landlords. Determine the maximum allowed rent and avoid risks at the Rent Tribunal.',
}

export default async function WWSPointCalculationPage() {
  const t = await getTranslations('rentOutServices.wws')
  const tNav = await getTranslations('nav')
  const tCommon = await getTranslations('common')

  const audienceSegments = [
    {
      icon: Users,
      title: t('privateLandlords'),
      description: t('privateLandlordsDesc'),
    },
    {
      icon: Building2,
      title: t('propertyInvestors'),
      description: t('propertyInvestorsDesc'),
    },
    {
      icon: TrendingUp,
      title: t('propertyManagers'),
      description: t('propertyManagersDesc'),
    },
  ]

  const steps = [
    {
      title: t('step1Title'),
      description: t('step1Desc'),
      details: [
        'Verification of surface areas (NEN 2580)',
        'Inventory of facilities and quality',
        'Assessment of energy label',
        'Photo documentation',
      ],
    },
    {
      title: t('step2Title'),
      description: t('step2Desc'),
      details: [
        'Calculation of surface area points',
        'Energy label points',
        'Points for facilities and quality',
        'Any deduction points',
      ],
    },
    {
      title: t('step3Title'),
      description: t('step3Desc'),
      details: [
        'Official WWS documentation',
        'Maximum rent price calculation',
        'Advice for point improvement if desired',
        'Suitable for Rent Tribunal assessment',
      ],
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
          { label: tNav('wwsPointCalculation'), href: '/rent-out/services/wws-point-calculation' },
        ]}
        ctaLabel={tCommon('requestQuote')}
        ctaHref="/contact"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{t('whatIs')}</h2>
              <div className="mt-6 space-y-4 text-gray-600">
                <p>{t('whatIsText1')}</p>
                <p>{t('whatIsText2')}</p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('risksOfErrors')}</h3>
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

      <TargetAudience
        title={t('forWhom')}
        subtitle=""
        segments={audienceSegments}
      />

      <ServiceSteps
        title={t('ourProcess')}
        subtitle={t('ourProcessSubtitle')}
        steps={steps}
        variant="vertical"
      />

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900">{t('whatWeDeliver')}</h2>
            <p className="mt-4 text-lg text-gray-600">{t('whatWeDeliverText')}</p>
            <ul className="mt-10 grid sm:grid-cols-2 gap-4 text-left">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button asChild>
                <Link href="/rent-out/services/rental-compliance">
                  {t('viewCompletePackage')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ServiceCTA
        title={t('needWWS')}
        description={t('needWWSText')}
        whatsappTemplate="wws"
        whatsappLabel={tCommon('requestQuote')}
        primaryLabel={tNav('rentalCompliance')}
        primaryHref="/rent-out/services/rental-compliance"
      />
    </>
  )
}
