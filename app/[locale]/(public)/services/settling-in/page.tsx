import { Metadata } from 'next'
import { ServiceHero } from '@/components/sections/ServiceHero'
import { ServiceSteps } from '@/components/sections/ServiceSteps'
import { ServiceCTA } from '@/components/sections/ServiceCTA'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Settling-in Services Netherlands - Registration & Admin | MMRE',
  description:
    'Need help with municipality registration, BSN, bank account, and health insurance in the Netherlands? Our settling-in service handles all essential admin for newcomers.',
}

export default async function SettlingInPage() {
  const t = await getTranslations('services.settlingIn')
  const tCommon = await getTranslations('common')

  const steps = [
    {
      title: t('steps.municipality.title'),
      description: t('steps.municipality.description'),
      details: [
        t('steps.municipality.detail1'),
        t('steps.municipality.detail2'),
        t('steps.municipality.detail3'),
        t('steps.municipality.detail4'),
      ],
    },
    {
      title: t('steps.bsn.title'),
      description: t('steps.bsn.description'),
      details: [
        t('steps.bsn.detail1'),
        t('steps.bsn.detail2'),
        t('steps.bsn.detail3'),
      ],
    },
    {
      title: t('steps.bank.title'),
      description: t('steps.bank.description'),
      details: [
        t('steps.bank.detail1'),
        t('steps.bank.detail2'),
        t('steps.bank.detail3'),
        t('steps.bank.detail4'),
      ],
    },
    {
      title: t('steps.health.title'),
      description: t('steps.health.description'),
      details: [
        t('steps.health.detail1'),
        t('steps.health.detail2'),
        t('steps.health.detail3'),
        t('steps.health.detail4'),
      ],
    },
    {
      title: t('steps.utilities.title'),
      description: t('steps.utilities.description'),
      details: [
        t('steps.utilities.detail1'),
        t('steps.utilities.detail2'),
        t('steps.utilities.detail3'),
        t('steps.utilities.detail4'),
      ],
    },
    {
      title: t('steps.additional.title'),
      description: t('steps.additional.description'),
      details: [
        t('steps.additional.detail1'),
        t('steps.additional.detail2'),
        t('steps.additional.detail3'),
        t('steps.additional.detail4'),
      ],
    },
  ]

  return (
    <>
      <ServiceHero
        title={t('title')}
        subtitle={t('subtitle')}
        breadcrumbs={[
          { label: 'Services', href: '/services/relocation' },
          { label: t('breadcrumb'), href: '/services/settling-in' },
        ]}
        ctaLabel={tCommon('getStarted')}
        ctaHref="/contact"
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900">{t('intro.title')}</h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {t('intro.text1')}
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              {t('intro.text2')}
            </p>
          </div>
        </div>
      </section>
      <ServiceSteps
        title={t('stepsTitle')}
        subtitle={t('stepsSubtitle')}
        steps={steps}
        variant="vertical"
      />
      <ServiceCTA
        title={t('ctaTitle')}
        description={t('ctaDescription')}
        whatsappTemplate="relocation"
        whatsappLabel={t('cta.getHelp')}
        primaryLabel={t('cta.backToRelocation')}
        primaryHref="/services/relocation"
      />
    </>
  )
}
