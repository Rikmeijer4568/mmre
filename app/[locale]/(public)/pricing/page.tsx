import { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import { Check, ArrowRight, Star, Home, Search, MessageSquare, Eye, FileText, Key, Wrench, Shield, Zap, Calculator, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('pricing')
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  }
}

export default async function PricingPage() {
  const t = await getTranslations('pricing')

  const verhuurPackages = [
    {
      name: t('verhuur.package1.name'),
      price: '€499,-',
      priceNote: t('verhuur.priceNote'),
      badge: t('verhuur.package1.badge'),
      features: [
        t('verhuur.package1.feature1'),
        t('verhuur.package1.feature2'),
        t('verhuur.package1.feature3'),
        t('verhuur.package1.feature4'),
        t('verhuur.package1.feature5'),
        t('verhuur.package1.feature6'),
        t('verhuur.package1.feature7'),
      ],
      disclaimer: t('verhuur.package1.disclaimer'),
    },
    {
      name: t('verhuur.package2.name'),
      price: '€849,-',
      priceNote: t('verhuur.priceNote'),
      popular: true,
      features: [
        t('verhuur.package2.feature1'),
        t('verhuur.package2.feature2'),
        t('verhuur.package2.feature3'),
        t('verhuur.package2.feature4'),
      ],
    },
    {
      name: t('verhuur.package3.name'),
      price: '€1.249,-',
      priceNote: t('verhuur.priceNote'),
      features: [
        t('verhuur.package3.feature1'),
        t('verhuur.package3.feature2'),
        t('verhuur.package3.feature3'),
      ],
      note: t('verhuur.package3.note'),
    },
  ]

  const aanhuurServices = [
    { icon: Search, text: t('aanhuur.service1') },
    { icon: Home, text: t('aanhuur.service2') },
    { icon: MessageSquare, text: t('aanhuur.service3') },
    { icon: MessageSquare, text: t('aanhuur.service4') },
    { icon: Eye, text: t('aanhuur.service5') },
    { icon: FileText, text: t('aanhuur.service6') },
    { icon: Key, text: t('aanhuur.service7') },
    { icon: Wrench, text: t('aanhuur.service8') },
    { icon: Shield, text: t('aanhuur.service9') },
  ]

  const beheerPackages = [
    {
      name: t('beheer.package1.name'),
      price: '€99,-',
      priceNote: t('beheer.priceNote'),
      icon: Calculator,
      features: [
        t('beheer.package1.feature1'),
        t('beheer.package1.feature2'),
        t('beheer.package1.feature3'),
        t('beheer.package1.feature4'),
      ],
    },
    {
      name: t('beheer.package2.name'),
      price: '€119,-',
      priceNote: t('beheer.priceNote'),
      icon: Wrench,
      features: [
        t('beheer.package2.feature1'),
        t('beheer.package2.feature2'),
        t('beheer.package2.feature3'),
        t('beheer.package2.feature4'),
      ],
    },
    {
      name: t('beheer.package3.name'),
      price: '€140,-',
      priceNote: t('beheer.priceNote'),
      icon: Briefcase,
      popular: true,
      features: [
        t('beheer.package3.feature1'),
        t('beheer.package3.feature2'),
        t('beheer.package3.feature3'),
      ],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-accent text-white py-12 sm:py-16 lg:py-24 overflow-hidden">
        {/* Bottom gradient transition to white */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
              {t('title')}
            </h1>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-white/90">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Verhuur Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 bg-accent rounded-2xl py-8 px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {t('verhuur.title')}
            </h2>
            <p className="mt-4 text-lg text-white/80">
              {t('verhuur.subtitle')}
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {verhuurPackages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-xl ${
                  pkg.popular
                    ? 'border-accent shadow-lg scale-105'
                    : 'border-gray-200 hover:border-accent/50'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-accent text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                      <Star className="h-4 w-4 fill-current" />
                      {t('popular')}
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  {pkg.badge && (
                    <span className="inline-flex items-center gap-1.5 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      <Zap className="h-3.5 w-3.5" />
                      {pkg.badge}
                    </span>
                  )}
                  <div className="text-4xl font-bold text-accent">
                    {pkg.price}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {pkg.priceNote}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {pkg.disclaimer && (
                  <p className="text-sm text-gray-500 italic mb-6">
                    {pkg.disclaimer}
                  </p>
                )}

                {pkg.note && (
                  <p className="text-sm text-amber-600 bg-amber-50 rounded-lg p-3 mb-6">
                    {pkg.note}
                  </p>
                )}

                <Button asChild className="w-full" variant={pkg.popular ? 'default' : 'outline'}>
                  <Link href="/contact">
                    {t('cta')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Starttarief Notice */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gray-100 rounded-xl px-6 py-4">
              <p className="text-gray-700">
                <span className="font-semibold">{t('verhuur.startFee.label')}</span>{' '}
                {t('verhuur.startFee.text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aanhuur Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 bg-accent rounded-2xl py-8 px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {t('aanhuur.title')}
            </h2>
            <p className="mt-4 text-lg text-white/80">
              {t('aanhuur.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Price Card */}
            <div className="bg-white rounded-2xl border-2 border-accent shadow-lg p-8 lg:p-10">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t('aanhuur.priceTitle')}
                </h3>
                <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">
                  {t('aanhuur.price')}
                </div>
                <p className="text-gray-600">
                  {t('aanhuur.priceMinimum')}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">{t('aanhuur.condition')}</span>
                  <span className="font-semibold text-accent">{t('aanhuur.noCureNoPay')}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">{t('aanhuur.startFeeLabel')}</span>
                  <span className="font-semibold">{t('aanhuur.startFeeAmount')}</span>
                </div>
                <p className="text-sm text-gray-500 text-center">
                  {t('aanhuur.startFeeNote')}
                </p>
              </div>

              <Button asChild className="w-full" size="lg">
                <Link href="/contact">
                  {t('cta')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Services List */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {t('aanhuur.servicesTitle')}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {aanhuurServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <service.icon className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-gray-700 pt-2">{service.text}</span>
                  </div>
                ))}
              </div>

              {/* Slogan */}
              <div className="mt-8 p-6 bg-accent/5 rounded-xl border border-accent/20">
                <p className="text-lg font-medium text-gray-900 text-center">
                  {t('aanhuur.slogan')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beheer Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 bg-accent rounded-2xl py-8 px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {t('beheer.title')}
            </h2>
            <p className="mt-4 text-lg text-white/80">
              {t('beheer.subtitle')}
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {beheerPackages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-xl ${
                  pkg.popular
                    ? 'border-accent shadow-lg scale-105'
                    : 'border-gray-200 hover:border-accent/50'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-accent text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                      <Star className="h-4 w-4 fill-current" />
                      {t('popular')}
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl mb-4">
                    <pkg.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-4xl font-bold text-accent">
                    {pkg.price}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {pkg.priceNote}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="w-full" variant={pkg.popular ? 'default' : 'outline'}>
                  <Link href="/contact">
                    {t('cta')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Link to full management page */}
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/management">
                {t('beheer.learnMore')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-accent text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
            {t('ctaTitle')}
          </h2>
          <p className="text-lg text-white/90 mb-8">
            {t('ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                {t('ctaContact')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
