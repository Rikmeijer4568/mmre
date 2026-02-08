import { Metadata } from 'next'
import { Briefcase, Globe, Lightbulb, Clock, Building2, Users } from 'lucide-react'
import { ServiceHero } from '@/components/sections/ServiceHero'
import { ServiceSteps } from '@/components/sections/ServiceSteps'
import { ServiceCTA } from '@/components/sections/ServiceCTA'
import { TargetAudience } from '@/components/sections/TargetAudience'
import { GoogleReviews } from '@/components/sections/GoogleReviews'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Home Finding in Amsterdam - Rental Search Service | MMRE',
  description:
    'Looking for a rental home in Amsterdam? Our home finding service provides personal guidance from intake to key handover. For expats, internationals, and busy professionals.',
}

export default async function HomeFindinPage() {
  const t = await getTranslations('services.homeFinding')
  const tCommon = await getTranslations('common')

  const audienceSegments = [
    {
      icon: Globe,
      title: t('audience.expats.title'),
      description: t('audience.expats.description'),
    },
    {
      icon: Briefcase,
      title: t('audience.workers.title'),
      description: t('audience.workers.description'),
    },
    {
      icon: Lightbulb,
      title: t('audience.entrepreneurs.title'),
      description: t('audience.entrepreneurs.description'),
    },
    {
      icon: Clock,
      title: t('audience.professionals.title'),
      description: t('audience.professionals.description'),
    },
    {
      icon: Building2,
      title: t('audience.companies.title'),
      description: t('audience.companies.description'),
    },
    {
      icon: Users,
      title: t('audience.families.title'),
      description: t('audience.families.description'),
    },
  ]

  const steps = [
    {
      title: t('steps.intake.title'),
      description: t('steps.intake.description'),
      details: [
        t('steps.intake.detail1'),
        t('steps.intake.detail2'),
        t('steps.intake.detail3'),
        t('steps.intake.detail4'),
        t('steps.intake.detail5'),
        t('steps.intake.detail6'),
      ],
    },
    {
      title: t('steps.strategy.title'),
      description: t('steps.strategy.description'),
      details: [
        t('steps.strategy.detail1'),
        t('steps.strategy.detail2'),
        t('steps.strategy.detail3'),
        t('steps.strategy.detail4'),
      ],
    },
    {
      title: t('steps.search.title'),
      description: t('steps.search.description'),
      details: [
        t('steps.search.detail1'),
        t('steps.search.detail2'),
        t('steps.search.detail3'),
        t('steps.search.detail4'),
      ],
    },
    {
      title: t('steps.viewings.title'),
      description: t('steps.viewings.description'),
      details: [
        t('steps.viewings.detail1'),
        t('steps.viewings.detail2'),
        t('steps.viewings.detail3'),
        t('steps.viewings.detail4'),
      ],
    },
    {
      title: t('steps.negotiation.title'),
      description: t('steps.negotiation.description'),
      details: [
        t('steps.negotiation.detail1'),
        t('steps.negotiation.detail2'),
        t('steps.negotiation.detail3'),
        t('steps.negotiation.detail4'),
      ],
    },
    {
      title: t('steps.contract.title'),
      description: t('steps.contract.description'),
      details: [
        t('steps.contract.detail1'),
        t('steps.contract.detail2'),
        t('steps.contract.detail3'),
        t('steps.contract.detail4'),
      ],
    },
    {
      title: t('steps.handover.title'),
      description: t('steps.handover.description'),
      details: [
        t('steps.handover.detail1'),
        t('steps.handover.detail2'),
        t('steps.handover.detail3'),
        t('steps.handover.detail4'),
      ],
    },
  ]

  return (
    <>
      <ServiceHero
        title={t('title')}
        subtitle={t('subtitle')}
        breadcrumbs={[{ label: 'Services', href: '/services/relocation' }]}
        ctaLabel={t('cta.startSearch')}
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
      <GoogleReviews />
      <ServiceCTA
        title={t('ctaTitle')}
        description={t('ctaDescription')}
        whatsappTemplate="homeFinding"
        whatsappLabel={tCommon('whatsappUs')}
        primaryLabel={t('cta.viewPricing')}
        primaryHref="/pricing"
      />
    </>
  )
}
