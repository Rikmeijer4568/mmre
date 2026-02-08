import { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import { ArrowRight, AlertTriangle, CheckCircle, Ruler, FileText, Calculator } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ServiceHero } from '@/components/sections/ServiceHero'
import { ServiceSteps } from '@/components/sections/ServiceSteps'
import { ServiceCTA } from '@/components/sections/ServiceCTA'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'NEN 2580 Measurement - Official Living Area | MMRE',
  description:
    'Professional NEN 2580 measurement for the official living area of your property. Basis for energy label, WWS point calculation, and rental contract.',
}

export default async function NEN2580Page() {
  const t = await getTranslations('rentOutServices.nen2580')
  const tNav = await getTranslations('nav')
  const tCommon = await getTranslations('common')

  const steps = [
    {
      title: t('step1Title'),
      description: t('step1Desc'),
      details: [
        'Measurement of all rooms',
        'Determination of usable floor area (GBO)',
        'Correct application of measurement rules',
        'Including auxiliary spaces and storage',
      ],
    },
    {
      title: t('step2Title'),
      description: t('step2Desc'),
      details: [
        'Scale-accurate floor plan',
        'Specification per room',
        'Total usable floor area',
        'Suitable for official use',
      ],
    },
    {
      title: t('step3Title'),
      description: t('step3Desc'),
      details: [
        'Official NEN 2580 report',
        'Floor plan in PDF format',
        'Suitable for energy label application',
        'Usable for WWS point calculation',
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
          { label: tNav('nen2580'), href: '/rent-out/services/nen-2580' },
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
                <p>{t('thisAreaLeading')}</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>{t('energyLabelInput')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>{t('wwsPoints')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>{t('rentalContract')}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 space-y-6">
              <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('consequencesIncorrect')}</h3>
                    <ul className="mt-3 space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 flex-shrink-0" />
                        {t('consequence1')}
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 flex-shrink-0" />
                        {t('consequence2')}
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 flex-shrink-0" />
                        {t('consequence3')}
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 flex-shrink-0" />
                        {t('consequence4')}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-highlight rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Ruler className="h-5 w-5 text-accent" />
                  {t('foundation')}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{t('foundationText')}</p>
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
            <h2 className="text-3xl font-bold text-gray-900">{t('whyNEN')}</h2>
            <p className="mt-4 text-lg text-gray-600">{t('whyNENText')}</p>
            <div className="mt-10 grid sm:grid-cols-3 gap-6 text-left">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <FileText className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-semibold text-gray-900">{t('officiallyRecognized')}</h3>
                <p className="mt-2 text-sm text-gray-600">{t('officiallyRecognizedDesc')}</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <Calculator className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-semibold text-gray-900">{t('basisForWWS')}</h3>
                <p className="mt-2 text-sm text-gray-600">{t('basisForWWSDesc')}</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <CheckCircle className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-semibold text-gray-900">{t('preventsDisputes')}</h3>
                <p className="mt-2 text-sm text-gray-600">{t('preventsDisputesDesc')}</p>
              </div>
            </div>
            <div className="mt-10">
              <Button asChild>
                <Link href="/rent-out/services/rental-compliance">
                  {t('combineWithEnergyWWS')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ServiceCTA
        title={t('needNEN2580')}
        description={t('needNEN2580Text')}
        whatsappTemplate="nen2580"
        whatsappLabel={tCommon('requestQuote')}
        primaryLabel={tNav('rentalCompliance')}
        primaryHref="/rent-out/services/rental-compliance"
      />
    </>
  )
}
