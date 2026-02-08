import { Metadata } from 'next'
import { GraduationCap, Baby, Briefcase, Heart, Globe, BookOpen } from 'lucide-react'
import { ServiceHero } from '@/components/sections/ServiceHero'
import { ServiceCTA } from '@/components/sections/ServiceCTA'
import { DomainCards } from '@/components/sections/DomainCards'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Family & Integration Services - Schools, Childcare & Culture | MMRE',
  description:
    'Relocating with family? MMRE helps with school search, childcare, partner support, and cultural integration in the Netherlands.',
}

export default async function FamilyIntegrationPage() {
  const t = await getTranslations('services.familyIntegration')
  const tCommon = await getTranslations('common')

  const domains = [
    {
      icon: GraduationCap,
      title: t('domains.schools.title'),
      description: t('domains.schools.description'),
    },
    {
      icon: Baby,
      title: t('domains.childcare.title'),
      description: t('domains.childcare.description'),
    },
    {
      icon: Briefcase,
      title: t('domains.partner.title'),
      description: t('domains.partner.description'),
    },
    {
      icon: Heart,
      title: t('domains.cultural.title'),
      description: t('domains.cultural.description'),
    },
    {
      icon: Globe,
      title: t('domains.language.title'),
      description: t('domains.language.description'),
    },
    {
      icon: BookOpen,
      title: t('domains.activities.title'),
      description: t('domains.activities.description'),
    },
  ]

  return (
    <>
      <ServiceHero
        title={t('title')}
        subtitle={t('subtitle')}
        breadcrumbs={[
          { label: 'Services', href: '/services/relocation' },
          { label: t('breadcrumb'), href: '/services/family-integration' },
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
      <DomainCards
        title={t('domainsTitle')}
        subtitle={t('domainsSubtitle')}
        domains={domains}
      />
      <ServiceCTA
        title={t('ctaTitle')}
        description={t('ctaDescription')}
        whatsappTemplate="relocation"
        whatsappLabel={t('cta.discuss')}
        primaryLabel={t('cta.backToRelocation')}
        primaryHref="/services/relocation"
      />
    </>
  )
}
