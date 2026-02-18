import { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import {
  Globe,
  Home,
  FileText,
  ClipboardList,
  Users,
  LifeBuoy,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ServiceCTA } from '@/components/sections/ServiceCTA'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'What is Relocation? - Complete Guide | MMRE',
  description:
    'What does relocation mean and what does a relocation company do? Learn about relocation services, what they include, and how they help with your international move.',
}

export default async function WhatIsRelocationPage() {
  const t = await getTranslations('whatIsRelocation')
  const tCommon = await getTranslations('common')
  const tNav = await getTranslations('nav')

  const services = [
    {
      icon: FileText,
      title: t('immigration'),
      description: 'Handling visa applications, residence and work permits, and ensuring compliance with Dutch immigration law.',
    },
    {
      icon: Home,
      title: t('houseFinding'),
      description: 'Finding and securing a suitable rental home in your new city, including contract negotiation and handover.',
    },
    {
      icon: ClipboardList,
      title: t('registration'),
      description: 'All the admin: municipality registration, BSN, bank account, health insurance, utilities, and more.',
    },
    {
      icon: Users,
      title: t('schools'),
      description: 'School search for children, childcare, partner career support, and cultural integration for the whole family.',
    },
    {
      icon: Globe,
      title: t('integration'),
      description: 'Understanding the local culture, customs, and practical day-to-day life in the Netherlands.',
    },
    {
      icon: LifeBuoy,
      title: 'Ongoing Support',
      description: 'Continued assistance after the move for any questions, issues, or changes that arise.',
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
            <p className="mt-6 text-xl text-white/90">{t('subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900">Relocation Explained</h2>
            <div className="mt-8 space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>{t('intro')}</p>
              <p>
                A relocation company (or relocation agency) acts as a single point of contact for
                all the practical aspects of an international move. Instead of navigating
                immigration, housing, banking, insurance, and registration systems on your own, a
                relocation specialist handles these tasks for you.
              </p>
              <p>
                Relocation services are commonly provided by employers as part of an assignment
                package, but individuals and families moving independently can also benefit from
                professional relocation support.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-16">{t('whyNeeded')}</h2>
            <div className="mt-8 space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>{t('whyNeededText')}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Understanding visa and permit requirements</li>
                <li>Finding a rental home in a competitive market</li>
                <li>Navigating Dutch bureaucracy (municipality registration, BSN, DigiD)</li>
                <li>Opening a bank account without a Dutch address or BSN</li>
                <li>Understanding the healthcare system and insurance requirements</li>
                <li>Finding schools and childcare for children</li>
              </ul>
              <p>
                A relocation specialist knows the system, speaks the language, and has established
                relationships with local authorities and service providers. This means fewer
                delays, fewer mistakes, and less stress for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('whatIncluded')}</h2>
            <p className="mt-4 text-lg text-gray-600">
              A typical relocation package covers these key areas
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-100">
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

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900">Who Pays for Relocation Services?</h2>
            <div className="mt-8 space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                In many cases, the employer covers relocation costs as part of the employment
                package. This is especially common for international assignments and highly skilled
                migrant placements.
              </p>
              <p>
                However, individuals relocating independently — such as freelancers,
                entrepreneurs, or those joining a partner — can also hire relocation services
                directly. At MMRE, we offer flexible packages for both corporate and individual
                clients.
              </p>
            </div>

            <div className="mt-12">
              <Button asChild>
                <Link href="/services/relocation">
                  {tCommon('learnMore')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ServiceCTA
        title="Planning Your Move to the Netherlands?"
        description="Whether you're an individual or a company, we can help make your relocation smooth and stress-free."
        whatsappTemplate="relocation"
        whatsappLabel={tCommon('whatsappUs')}
        primaryLabel={tNav('relocation')}
        primaryHref="/services/relocation"
      />
    </>
  )
}
