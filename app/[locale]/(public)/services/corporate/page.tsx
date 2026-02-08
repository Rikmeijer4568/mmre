import { Metadata } from 'next'
import {
  Users,
  Globe,
  FileText,
  Home,
  ClipboardList,
  BarChart3,
  Shield,
  Headphones,
} from 'lucide-react'
import { ServiceHero } from '@/components/sections/ServiceHero'
import { ServiceSteps } from '@/components/sections/ServiceSteps'
import { ServiceCTA } from '@/components/sections/ServiceCTA'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Corporate Relocation Services Netherlands | MMRE',
  description:
    'Corporate relocation services for companies bringing employees to the Netherlands. Dedicated account management, scalable solutions, and full compliance.',
}

export default async function CorporatePage() {
  const t = await getTranslations('services.corporate')
  const tCommon = await getTranslations('common')

  const services = [
    { icon: Globe, title: t('services.immigration.title'), description: t('services.immigration.description') },
    { icon: Home, title: t('services.housing.title'), description: t('services.housing.description') },
    { icon: ClipboardList, title: t('services.settlingIn.title'), description: t('services.settlingIn.description') },
    { icon: Users, title: t('services.family.title'), description: t('services.family.description') },
    { icon: BarChart3, title: t('services.reporting.title'), description: t('services.reporting.description') },
    { icon: FileText, title: t('services.policy.title'), description: t('services.policy.description') },
  ]

  const valueProps = [
    { icon: Shield, label: t('valueProp.singleContact') },
    { icon: Headphones, label: t('valueProp.accountManager') },
    { icon: Users, label: t('valueProp.scalable') },
    { icon: BarChart3, label: t('valueProp.reporting') },
  ]

  const processSteps = [
    {
      title: t('steps.meeting.title'),
      description: t('steps.meeting.description'),
      details: [
        t('steps.meeting.detail1'),
        t('steps.meeting.detail2'),
        t('steps.meeting.detail3'),
        t('steps.meeting.detail4'),
      ],
    },
    {
      title: t('steps.agreement.title'),
      description: t('steps.agreement.description'),
      details: [
        t('steps.agreement.detail1'),
        t('steps.agreement.detail2'),
        t('steps.agreement.detail3'),
        t('steps.agreement.detail4'),
      ],
    },
    {
      title: t('steps.onboarding.title'),
      description: t('steps.onboarding.description'),
      details: [
        t('steps.onboarding.detail1'),
        t('steps.onboarding.detail2'),
        t('steps.onboarding.detail3'),
        t('steps.onboarding.detail4'),
      ],
    },
    {
      title: t('steps.execution.title'),
      description: t('steps.execution.description'),
      details: [
        t('steps.execution.detail1'),
        t('steps.execution.detail2'),
        t('steps.execution.detail3'),
        t('steps.execution.detail4'),
      ],
    },
    {
      title: t('steps.review.title'),
      description: t('steps.review.description'),
      details: [
        t('steps.review.detail1'),
        t('steps.review.detail2'),
        t('steps.review.detail3'),
        t('steps.review.detail4'),
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
          { label: t('breadcrumb'), href: '/services/corporate' },
        ]}
        ctaLabel={tCommon('contactUs')}
        ctaHref="/contact"
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                {t('whyChoose.title')}
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                {t('whyChoose.text1')}
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                {t('whyChoose.text2')}
              </p>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="grid grid-cols-2 gap-6">
                {valueProps.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-highlight rounded-xl p-6 flex flex-col items-center text-center"
                  >
                    <item.icon className="h-8 w-8 text-accent mb-3" />
                    <p className="text-sm font-medium text-gray-900">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('servicesTitle')}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('servicesSubtitle')}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-gray-100"
              >
                <div className="w-12 h-12 bg-highlight rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ServiceSteps
        title={t('stepsTitle')}
        subtitle={t('stepsSubtitle')}
        steps={processSteps}
        variant="vertical"
      />
      <ServiceCTA
        title={t('ctaTitle')}
        description={t('ctaDescription')}
        whatsappTemplate="corporate"
        whatsappLabel={t('cta.contact')}
        primaryLabel={t('cta.backToRelocation')}
        primaryHref="/services/relocation"
      />
    </>
  )
}
