import { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import { ArrowRight, Home, Shield, Wrench, Users, Clock, CheckCircle2, MessageCircle, Check, Star, Calculator, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { getTranslations } from 'next-intl/server'
import { getWhatsAppLink } from '@/lib/whatsapp'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('management')
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  }
}

export default async function ManagementPage() {
  const t = await getTranslations('management')

  const services = [
    { icon: Users, key: 'tenantScreening' },
    { icon: Home, key: 'rentCollection' },
    { icon: Wrench, key: 'maintenance' },
    { icon: Shield, key: 'legalCompliance' },
    { icon: Clock, key: 'availability' },
  ]

  const packages = [
    {
      key: 'financial',
      price: '€99,-',
      icon: Calculator,
      featureCount: 4,
    },
    {
      key: 'technical',
      price: '€119,-',
      icon: Wrench,
      featureCount: 4,
    },
    {
      key: 'complete',
      price: '€140,-',
      icon: Briefcase,
      popular: true,
      featureCount: 3,
    },
  ]

  const benefits = [
    t('benefit1'),
    t('benefit2'),
    t('benefit3'),
    t('benefit4'),
    t('benefit5'),
    t('benefit6'),
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-accent text-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              {t('title')}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed">
              {t('subtitle')}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-accent hover:bg-gray-100"
                asChild
              >
                <Link href="/contact">
                  {t('cta')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <a href={getWhatsAppLink('general')} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              {t('servicesTitle')}
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              {t('servicesSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <Card key={service.key} variant="premium" className="group">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-50 to-primary-100
                                  rounded-xl flex items-center justify-center shadow-soft
                                  group-hover:shadow-soft-md transition-shadow duration-300">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t(`services.${service.key}.title`)}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {t(`services.${service.key}.description`)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 bg-accent rounded-2xl py-8 px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {t('pricingTitle')}
            </h2>
            <p className="mt-4 text-lg text-white/80">
              {t('pricingSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {packages.map((pkg) => (
              <div
                key={pkg.key}
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
                    {t(`packages.${pkg.key}.name`)}
                  </h3>
                  <div className="text-4xl font-bold text-accent">
                    {pkg.price}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {t('priceNote')}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {Array.from({ length: pkg.featureCount }, (_, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{t(`packages.${pkg.key}.feature${i + 1}`)}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="w-full" variant={pkg.popular ? 'default' : 'outline'}>
                  <Link href="/contact">
                    {t('pricingCta')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              {t('benefitsTitle')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('benefitsSubtitle')}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 bg-gray-50 rounded-xl p-5">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-accent text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {t('ctaTitle')}
          </h2>
          <p className="text-lg text-gray-200 mb-8">
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
