import { Metadata } from 'next'
import { FileText, Shield, Briefcase, Calculator, UserCheck, Globe } from 'lucide-react'
import { ServiceHero } from '@/components/sections/ServiceHero'
import { ServiceSteps } from '@/components/sections/ServiceSteps'
import { ServiceCTA } from '@/components/sections/ServiceCTA'
import { TargetAudience } from '@/components/sections/TargetAudience'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Immigration Support Netherlands - Permits & Legal | MMRE',
  description:
    'Need a residence permit, work permit, or 30% ruling in the Netherlands? MMRE provides immigration guidance for expats and highly skilled migrants.',
}

export default async function ImmigrationPage() {
  const t = await getTranslations('services.immigration')
  const tCommon = await getTranslations('common')

  const audienceSegments = [
    {
      icon: Briefcase,
      title: t('audience.highlySkilled.title'),
      description: t('audience.highlySkilled.description'),
    },
    {
      icon: Globe,
      title: t('audience.international.title'),
      description: t('audience.international.description'),
    },
    {
      icon: Calculator,
      title: t('audience.thirtyPercent.title'),
      description: t('audience.thirtyPercent.description'),
    },
    {
      icon: UserCheck,
      title: t('audience.family.title'),
      description: t('audience.family.description'),
    },
    {
      icon: Shield,
      title: t('audience.eu.title'),
      description: t('audience.eu.description'),
    },
    {
      icon: FileText,
      title: t('audience.entrepreneurs.title'),
      description: t('audience.entrepreneurs.description'),
    },
  ]

  const steps = [
    {
      title: t('steps.eligibility.title'),
      description: t('steps.eligibility.description'),
      details: [
        t('steps.eligibility.detail1'),
        t('steps.eligibility.detail2'),
        t('steps.eligibility.detail3'),
        t('steps.eligibility.detail4'),
      ],
    },
    {
      title: t('steps.documents.title'),
      description: t('steps.documents.description'),
      details: [
        t('steps.documents.detail1'),
        t('steps.documents.detail2'),
        t('steps.documents.detail3'),
        t('steps.documents.detail4'),
      ],
    },
    {
      title: t('steps.permit.title'),
      description: t('steps.permit.description'),
      details: [
        t('steps.permit.detail1'),
        t('steps.permit.detail2'),
        t('steps.permit.detail3'),
        t('steps.permit.detail4'),
      ],
    },
    {
      title: t('steps.thirtyPercent.title'),
      description: t('steps.thirtyPercent.description'),
      details: [
        t('steps.thirtyPercent.detail1'),
        t('steps.thirtyPercent.detail2'),
        t('steps.thirtyPercent.detail3'),
        t('steps.thirtyPercent.detail4'),
      ],
    },
    {
      title: t('steps.registration.title'),
      description: t('steps.registration.description'),
      details: [
        t('steps.registration.detail1'),
        t('steps.registration.detail2'),
        t('steps.registration.detail3'),
        t('steps.registration.detail4'),
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
          { label: t('breadcrumb'), href: '/services/immigration' },
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
      <TargetAudience
        title={t('audienceTitle')}
        subtitle={t('audienceSubtitle')}
        segments={audienceSegments}
      />
      <ServiceSteps
        title={t('stepsTitle')}
        subtitle={t('stepsSubtitle')}
        steps={steps}
        variant="vertical"
      />
      <ServiceCTA
        title={t('ctaTitle')}
        description={t('ctaDescription')}
        whatsappTemplate="immigration"
        whatsappLabel={t('cta.discuss')}
        primaryLabel={t('cta.backToRelocation')}
        primaryHref="/services/relocation"
      />
    </>
  )
}
