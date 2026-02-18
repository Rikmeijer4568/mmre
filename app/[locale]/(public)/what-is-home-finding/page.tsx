import { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import { ArrowRight, Search, Shield, Scale, FileCheck, Handshake } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ServiceCTA } from '@/components/sections/ServiceCTA'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'What is Home Finding (Aanhuur)? - Complete Guide | MMRE',
  description:
    'What does a home finding agent (aanhuurmakelaar) do? Learn about home finding services, the difference with traditional agents, and how aanhuur works in the Netherlands.',
}

export default async function WhatIsHomeFindingPage() {
  const t = await getTranslations('whatIsHomeFinding')
  const tCommon = await getTranslations('common')
  const tNav = await getTranslations('nav')

  const benefits = [
    {
      icon: Search,
      title: 'Market Access',
      description: t('benefit1'),
    },
    {
      icon: Shield,
      title: 'Your Interests First',
      description: t('benefit2'),
    },
    {
      icon: Scale,
      title: 'Objective Assessment',
      description: t('benefit3'),
    },
    {
      icon: Handshake,
      title: 'Negotiation Power',
      description: t('benefit4'),
    },
    {
      icon: FileCheck,
      title: 'Contract Protection',
      description: t('benefit5'),
    },
  ]

  return (
    <>
      <section className="relative bg-accent text-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white">{t('title')}</h1>
            <p className="mt-6 text-xl text-white/90">{t('subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900">Home Finding Explained</h2>
            <div className="mt-8 space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>{t('intro')}</p>
              <p>
                Home finding — or <em>aanhuur</em> — means hiring a professional to search for
                rental properties on your behalf. Your agent actively monitors the market,
                contacts landlords, arranges viewings, and negotiates terms — all with your
                interests as the priority.
              </p>
              <p>
                This service is especially valuable in competitive markets like Amsterdam, where
                good properties are rented within days and understanding local practices gives you
                a significant advantage.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-16">{t('difference')}</h2>
            <div className="mt-8 space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>{t('differenceText')}</p>
              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Verhuurmakelaar (Letting Agent)
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                        Works for the <strong>landlord</strong>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                        Goal: find a tenant and get the best terms for the landlord
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                        Paid by the landlord
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Aanhuurmakelaar (Home Finding Agent)
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        Works for the <strong>tenant</strong>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        Goal: find the best home at the best terms for you
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        Paid by the tenant (you)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <p>
                Since the landlord&apos;s agent is paid to serve the landlord&apos;s interests,
                it makes sense for tenants — especially those new to the market — to have their
                own representation.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-16">
              When Is Home Finding Worth It?
            </h2>
            <div className="mt-8 space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>Home finding is particularly valuable when:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You&apos;re new to the Netherlands and don&apos;t know the market</li>
                <li>You don&apos;t speak Dutch and need someone to communicate with landlords</li>
                <li>You&apos;re searching from abroad and can&apos;t attend viewings easily</li>
                <li>You&apos;re in a competitive market where speed and connections matter</li>
                <li>You want professional contract review before committing</li>
                <li>You simply don&apos;t have time to manage the search yourself</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('benefits')}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-highlight rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Looking for a Home Finding Agent?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            MMRE offers professional home finding services in Amsterdam. We handle the
            search, viewings, negotiation, and contract review — so you can focus on your move.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/services/home-finding">
                {tNav('homeFinding')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/pricing">{tNav('pricing')}</Link>
            </Button>
          </div>
        </div>
      </section>

      <ServiceCTA
        title="Ready to Start Your Search?"
        description="Tell us what you're looking for and we'll find the right home for you."
        whatsappTemplate="homeFinding"
        whatsappLabel={tCommon('whatsappUs')}
        primaryLabel={tNav('howWeWork')}
        primaryHref="/how-we-work"
      />
    </>
  )
}
