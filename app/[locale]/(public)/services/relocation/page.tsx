import { Metadata } from 'next'
import {
  FileText,
  Home,
  ClipboardList,
  HeartHandshake,
  Users,
  LifeBuoy,
} from 'lucide-react'
import { ServiceHero } from '@/components/sections/ServiceHero'
import { ServiceSteps } from '@/components/sections/ServiceSteps'
import { ServiceCTA } from '@/components/sections/ServiceCTA'
import { DomainCards } from '@/components/sections/DomainCards'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Relocation Services Netherlands - Complete Support | MMRE',
  description:
    'Relocating to the Netherlands? MMRE provides end-to-end relocation support including immigration, housing, settling-in, and family integration services.',
}

export default async function RelocationPage() {
  const t = await getTranslations('services.relocation')
  const tCommon = await getTranslations('common')

  const domains = [
    {
      icon: FileText,
      title: t('domains.immigration.title'),
      description: t('domains.immigration.description'),
      href: '/services/immigration',
    },
    {
      icon: Home,
      title: t('domains.housing.title'),
      description: t('domains.housing.description'),
      href: '/services/home-finding',
    },
    {
      icon: ClipboardList,
      title: t('domains.settlingIn.title'),
      description: t('domains.settlingIn.description'),
      href: '/services/settling-in',
    },
    {
      icon: HeartHandshake,
      title: t('domains.practicalSupport.title'),
      description: t('domains.practicalSupport.description'),
    },
    {
      icon: Users,
      title: t('domains.familyIntegration.title'),
      description: t('domains.familyIntegration.description'),
      href: '/services/family-integration',
    },
    {
      icon: LifeBuoy,
      title: t('domains.ongoingSupport.title'),
      description: t('domains.ongoingSupport.description'),
    },
  ]

  const processSteps = [
    {
      title: t('steps.consultation.title'),
      description: t('steps.consultation.description'),
      details: [
        t('steps.consultation.detail1'),
        t('steps.consultation.detail2'),
        t('steps.consultation.detail3'),
        t('steps.consultation.detail4'),
      ],
    },
    {
      title: t('steps.immigration.title'),
      description: t('steps.immigration.description'),
      details: [
        t('steps.immigration.detail1'),
        t('steps.immigration.detail2'),
        t('steps.immigration.detail3'),
        t('steps.immigration.detail4'),
      ],
    },
    {
      title: t('steps.housing.title'),
      description: t('steps.housing.description'),
      details: [
        t('steps.housing.detail1'),
        t('steps.housing.detail2'),
        t('steps.housing.detail3'),
        t('steps.housing.detail4'),
      ],
    },
    {
      title: t('steps.settlingIn.title'),
      description: t('steps.settlingIn.description'),
      details: [
        t('steps.settlingIn.detail1'),
        t('steps.settlingIn.detail2'),
        t('steps.settlingIn.detail3'),
        t('steps.settlingIn.detail4'),
      ],
    },
    {
      title: t('steps.familyIntegration.title'),
      description: t('steps.familyIntegration.description'),
      details: [
        t('steps.familyIntegration.detail1'),
        t('steps.familyIntegration.detail2'),
        t('steps.familyIntegration.detail3'),
        t('steps.familyIntegration.detail4'),
      ],
    },
    {
      title: t('steps.aftercare.title'),
      description: t('steps.aftercare.description'),
      details: [
        t('steps.aftercare.detail1'),
        t('steps.aftercare.detail2'),
        t('steps.aftercare.detail3'),
        t('steps.aftercare.detail4'),
      ],
    },
  ]

  return (
    <>
      <ServiceHero
        title={t('title')}
        subtitle={t('subtitle')}
        breadcrumbs={[{ label: 'Services', href: '/services/relocation' }]}
        ctaLabel={tCommon('getStarted')}
        ctaHref="/contact"
        secondaryCtaLabel={t('cta.viewPricing')}
        secondaryCtaHref="/pricing"
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900">{t('whatIs.title')}</h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {t('whatIs.text1')}
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              {t('whatIs.text2')}
            </p>
          </div>
        </div>
      </section>
      <DomainCards
        title={t('domainsTitle')}
        subtitle={t('domainsSubtitle')}
        domains={domains}
      />
      <ServiceSteps
        title={t('stepsTitle')}
        subtitle={t('stepsSubtitle')}
        steps={processSteps}
        variant="vertical"
      />
      <ServiceCTA
        title={t('ctaTitle')}
        description={t('ctaDescription')}
        whatsappTemplate="relocation"
        whatsappLabel={t('cta.discuss')}
        primaryLabel={t('cta.viewPricing')}
        primaryHref="/pricing"
      />
    </>
  )
}
