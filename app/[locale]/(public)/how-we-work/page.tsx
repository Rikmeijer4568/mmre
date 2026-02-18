import { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ServiceSteps } from '@/components/sections/ServiceSteps'
import { ServiceCTA } from '@/components/sections/ServiceCTA'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'How We Work - Our Process | MMRE',
  description:
    'See how MMRE works from first contact to key handover. Our transparent process covers intake, search, viewings, negotiation, contract review, and handover.',
}

export default async function HowWeWorkPage() {
  const t = await getTranslations('howWeWork')
  const tCommon = await getTranslations('common')

  const homeSearchSteps = [
    {
      title: t('steps.firstContact.title'),
      description: t('steps.firstContact.description'),
      details: [
        t('steps.firstContact.detail1'),
        t('steps.firstContact.detail2'),
        t('steps.firstContact.detail3'),
      ],
    },
    {
      title: t('steps.intake.title'),
      description: t('steps.intake.description'),
      details: [
        t('steps.intake.detail1'),
        t('steps.intake.detail2'),
        t('steps.intake.detail3'),
        t('steps.intake.detail4'),
      ],
    },
    {
      title: t('steps.briefing.title'),
      description: t('steps.briefing.description'),
      details: [
        t('steps.briefing.detail1'),
        t('steps.briefing.detail2'),
        t('steps.briefing.detail3'),
        t('steps.briefing.detail4'),
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
      <section className="relative bg-accent text-white py-20 lg:py-28 overflow-hidden">
        {/* Bottom gradient transition to white */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white">{t('title')}</h1>
            <p className="mt-6 text-xl text-white/90">{t('heroSubtitle')}</p>
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

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('servicesTitle')}</h2>
            <p className="mt-4 text-lg text-gray-600">{t('servicesSubtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 border-2 border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('homeFindingTitle')}</h3>
              <p className="text-gray-600 text-sm mb-4">{t('homeFindingDesc')}</p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/services/home-finding">
                  {tCommon('learnMore')} <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
            <div className="bg-white rounded-xl p-8 border-2 border-accent">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('fullRelocationTitle')}</h3>
              <p className="text-gray-600 text-sm mb-4">{t('fullRelocationDesc')}</p>
              <Button size="sm" asChild>
                <Link href="/services/relocation">
                  {tCommon('learnMore')} <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ServiceSteps
        title={t('stepsTitle')}
        subtitle={t('stepsSubtitle')}
        steps={homeSearchSteps}
        variant="vertical"
      />

      <ServiceCTA
        title={t('ctaTitle')}
        description={t('ctaDescription')}
        whatsappTemplate="homeFinding"
        whatsappLabel={t('ctaWhatsapp')}
        primaryLabel={t('ctaPrimary')}
        primaryHref="/pricing"
      />
    </>
  )
}
