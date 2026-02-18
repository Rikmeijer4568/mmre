import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Home, Key, Users, Clock, Shield, Star, CheckCircle2 } from 'lucide-react'
import { GoogleReviews } from '@/components/sections/GoogleReviews'
import { getTranslations } from 'next-intl/server'
import { AnimatedSection, AnimatedContainer, AnimatedItem, fadeInUp, staggerContainer } from '@/components/ui/motion'

// Hero Section
async function HeroSection() {
  const t = await getTranslations('home')

  return (
    <section className="relative bg-accent text-white overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-[url('/images/amsterdam-hero.jpg')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent to-accent-dark opacity-95" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <div>
            <AnimatedSection variants={fadeInUp}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-balance">
                {t('title')}
              </h1>
            </AnimatedSection>

            <AnimatedSection variants={fadeInUp} delay={0.1}>
              <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-gray-200 max-w-2xl leading-relaxed">
                {t('subtitle')}
              </p>
            </AnimatedSection>

            <AnimatedSection variants={fadeInUp} delay={0.2}>
              <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-accent hover:bg-gray-100 shadow-soft-lg hover:shadow-soft-xl
                             transition-all duration-300 hover:-translate-y-0.5"
                  asChild
                >
                  <Link href="/rent-out">
                    {t('rentOutProperty')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50
                             backdrop-blur-sm transition-all duration-300"
                  asChild
                >
                  <Link href="/services/home-finding">
                    {t('findRentalHome')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>

            {/* Trust Bar */}
            <AnimatedSection variants={fadeInUp} delay={0.3}>
              <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10">
                <div className="flex flex-wrap gap-6 sm:gap-10 text-sm text-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                      <Users className="h-5 w-5" />
                    </div>
                    <span>500+ {t('satisfiedClients')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                      <Clock className="h-5 w-5" />
                    </div>
                    <span>{t('whatsappSupport')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                      <Shield className="h-5 w-5" />
                    </div>
                    <span>{t('premiumService')}</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right column - Hero image */}
          <AnimatedSection variants={fadeInUp} delay={0.2} className="hidden lg:block">
            <div className="relative">
              <Image
                src="/images/Header/Header.png"
                alt="MMRE Real Estate"
                width={600}
                height={500}
                className="w-full h-auto drop-shadow-2xl"
                style={{ mixBlendMode: 'multiply' }}
                priority
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// How It Works Section
async function HowItWorksSection() {
  const t = await getTranslations('home')

  return (
    <section className="section-padding bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">{t('howItWorks')}</h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            {t('howItWorksSubtitle')}
          </p>
        </AnimatedSection>

        <AnimatedContainer variants={staggerContainer} className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* For Tenants */}
          <AnimatedItem>
            <Card variant="premium" className="h-full group">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl
                                shadow-soft group-hover:shadow-soft-md transition-shadow duration-300">
                    <Key className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">{t('forTenants')}</h3>
                </div>
                <ul className="space-y-5 text-gray-600">
                  {[t('tenantStep1'), t('tenantStep2'), t('tenantStep3')].map((step, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary-50 to-primary-100
                                     text-accent rounded-full flex items-center justify-center text-sm font-semibold
                                     shadow-soft">
                        {index + 1}
                      </span>
                      <span className="pt-1 leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 w-full" size="lg" asChild>
                  <Link href="/services/home-finding">
                    {t('startYourSearch')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </AnimatedItem>

          {/* For Landlords */}
          <AnimatedItem>
            <Card variant="premium" className="h-full group">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl
                                shadow-soft group-hover:shadow-soft-md transition-shadow duration-300">
                    <Home className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">{t('forLandlords')}</h3>
                </div>
                <ul className="space-y-5 text-gray-600">
                  {[t('landlordStep1'), t('landlordStep2'), t('landlordStep3')].map((step, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary-50 to-primary-100
                                     text-accent rounded-full flex items-center justify-center text-sm font-semibold
                                     shadow-soft">
                        {index + 1}
                      </span>
                      <span className="pt-1 leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 w-full" size="lg" asChild>
                  <Link href="/rent-out">
                    {t('getRentalEstimate')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </AnimatedItem>
        </AnimatedContainer>
      </div>
    </section>
  )
}

// Why Choose Us Section
async function WhyChooseUsSection() {
  const t = await getTranslations('home')

  const benefits = [
    { text: t('personalGuidance'), icon: CheckCircle2 },
    { text: t('deepKnowledge'), icon: CheckCircle2 },
    { text: t('fastResponse'), icon: CheckCircle2 },
    { text: t('transparentPricing'), icon: CheckCircle2 },
  ]

  return (
    <section className="section-padding-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-accent text-sm font-medium rounded-full mb-6">
              Why MMRE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              {t('whyChooseUs')}
            </h2>
            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
              {t('whyChooseUsText')}
            </p>
            <ul className="mt-10 space-y-5">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-50 to-green-100
                                rounded-xl flex items-center justify-center shadow-soft
                                group-hover:shadow-soft-md transition-shadow duration-300">
                    <benefit.icon className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit.text}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-10" size="lg" asChild>
              <Link href="/about">
                {t('learnMoreAboutUs')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-12 lg:mt-0">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-50 rounded-full blur-2xl opacity-60" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-highlight rounded-full blur-2xl opacity-60" />

              <div className="relative aspect-[4/3] rounded-3xl bg-gradient-to-br from-highlight via-primary-50 to-highlight-dark
                            flex items-center justify-center shadow-premium-lg overflow-hidden">
                {/* Subtle pattern */}
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(31,81,76,0.1) 1px, transparent 0)`,
                  backgroundSize: '24px 24px'
                }} />

                <div className="relative text-center p-8">
                  <p className="text-5xl sm:text-6xl lg:text-7xl font-bold text-accent">10+</p>
                  <p className="text-lg sm:text-xl text-accent/80 mt-3 font-medium">{t('yearsExperience')}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// Neighborhoods Section
async function NeighborhoodsSection() {
  const t = await getTranslations('home')
  const tNeighborhoods = await getTranslations('neighborhoods')

  const neighborhoods = [
    { name: tNeighborhoods('jordaan.name'), description: tNeighborhoods('jordaan.description'), slug: 'jordaan', image: '/images/neighborhoods/Jordaan/Jordaan cover.jpg' },
    { name: tNeighborhoods('dePijp.name'), description: tNeighborhoods('dePijp.description'), slug: 'de-pijp', image: '/images/neighborhoods/De Pijp/De Pijp.jpg' },
    { name: tNeighborhoods('oudZuid.name'), description: tNeighborhoods('oudZuid.description'), slug: 'oud-zuid', image: '/images/neighborhoods/Oud zuid/Oud zuid.jpg' },
    { name: tNeighborhoods('centrum.name'), description: tNeighborhoods('centrum.description'), slug: 'centrum', image: '/images/neighborhoods/Centrum/Centrum.jpg' },
  ]

  return (
    <section className="section-padding bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">{t('exploreNeighborhoods')}</h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            {t('exploreNeighborhoodsSubtitle')}
          </p>
        </AnimatedSection>

        <AnimatedContainer variants={staggerContainer} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {neighborhoods.map((neighborhood) => (
            <AnimatedItem key={neighborhood.slug}>
              <Link href={{ pathname: '/neighborhoods/[slug]', params: { slug: neighborhood.slug } }}>
                <Card variant="interactive" className="h-full overflow-hidden group">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={neighborhood.image}
                      alt={neighborhood.name}
                      fill
                      className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                               group-hover:scale-110"
                    />
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="font-semibold text-base sm:text-lg text-gray-900
                                 group-hover:text-accent transition-colors duration-200">
                      {neighborhood.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2 leading-relaxed">
                      {neighborhood.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedItem>
          ))}
        </AnimatedContainer>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="/neighborhoods">
              {t('viewAllNeighborhoods')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}


// Main Home Page
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <NeighborhoodsSection />
      <GoogleReviews />
    </>
  )
}
