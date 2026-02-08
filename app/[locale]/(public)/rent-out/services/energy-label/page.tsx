import { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import { ArrowRight, AlertTriangle, CheckCircle, Zap, TrendingUp, Calculator } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ServiceHero } from '@/components/sections/ServiceHero'
import { ServiceSteps } from '@/components/sections/ServiceSteps'
import { ServiceCTA } from '@/components/sections/ServiceCTA'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Energy Label for Rental Properties - Mandatory for Rentals | MMRE',
  description:
    'Apply for an energy label for your rental property. Mandatory for rentals and decisive for your WWS points and maximum rent.',
}

export default async function EnergyLabelPage() {
  const t = await getTranslations('rentOutServices.energyLabel')
  const tNav = await getTranslations('nav')
  const tCommon = await getTranslations('common')

  const steps = [
    {
      title: t('step1Title'),
      description: t('step1Desc'),
      details: [
        'Inspection of insulation (roof, facade, floor, glazing)',
        'Check of heating installation',
        'Assessment of ventilation and hot water supply',
        'Any solar panels and other sustainable installations',
      ],
    },
    {
      title: t('step2Title'),
      description: t('step2Desc'),
      details: [
        'Energy performance calculation according to NTA 8800',
        'Registration in the national EP-Online register',
        'Label is valid for 10 years',
      ],
    },
    {
      title: t('step3Title'),
      description: t('step3Desc'),
      details: [
        'Official energy label certificate',
        'Explanation of WWS points impact',
        'Improvement advice if desired',
        'Can be combined with WWS point calculation',
      ],
    },
  ]

  return (
    <>
      <ServiceHero
        title={t('title')}
        subtitle={t('subtitle')}
        breadcrumbs={[
          { label: tNav('rentOut'), href: '/rent-out' },
          { label: tNav('energyLabel'), href: '/rent-out/services/energy-label' },
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
              <div className="mt-8 p-6 bg-highlight rounded-xl">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  {t('wwsImpact')}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{t('wwsImpactText')}</p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 space-y-6">
              <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('mandatoryTitle')}</h3>
                    <ul className="mt-3 space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 flex-shrink-0" />
                        {t('mandatory1')}
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 flex-shrink-0" />
                        {t('mandatory2')}
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 flex-shrink-0" />
                        {t('mandatory3')}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-accent" />
                  {t('whatDetermines')}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                    {t('insulation')}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                    {t('heating')}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                    {t('ventilation')}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                    {t('solarPanels')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceSteps
        title={t('theProcess')}
        subtitle={t('theProcessSubtitle')}
        steps={steps}
        variant="vertical"
      />

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900">{t('moreThanLabel')}</h2>
            <p className="mt-4 text-lg text-gray-600">{t('moreThanLabelText')}</p>
            <div className="mt-10 grid sm:grid-cols-3 gap-6 text-left">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <Zap className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-semibold text-gray-900">{t('wwsImpactTitle')}</h3>
                <p className="mt-2 text-sm text-gray-600">{t('wwsImpactDesc')}</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <TrendingUp className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-semibold text-gray-900">{t('improvementPotential')}</h3>
                <p className="mt-2 text-sm text-gray-600">{t('improvementPotentialDesc')}</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <CheckCircle className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-semibold text-gray-900">{t('compliantRental')}</h3>
                <p className="mt-2 text-sm text-gray-600">{t('compliantRentalDesc')}</p>
              </div>
            </div>
            <div className="mt-10">
              <Button asChild>
                <Link href="/rent-out/services/rental-compliance">
                  {tCommon('learnMore')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ServiceCTA
        title={t('needEnergyLabel')}
        description={t('needEnergyLabelText')}
        whatsappTemplate="energielabel"
        whatsappLabel={tCommon('requestQuote')}
        primaryLabel={tNav('rentalCompliance')}
        primaryHref="/rent-out/services/rental-compliance"
      />
    </>
  )
}
