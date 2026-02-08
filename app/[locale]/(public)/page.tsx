import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Home, Key, Users, Clock, Shield, Star } from 'lucide-react'
import { GoogleReviews } from '@/components/sections/GoogleReviews'
import { getTranslations } from 'next-intl/server'

// Hero Section
async function HeroSection() {
  const t = await getTranslations('home')

  return (
    <section className="relative bg-accent text-white py-24 lg:py-32">
      <div className="absolute inset-0 bg-[url('/images/amsterdam-hero.jpg')] bg-cover bg-center opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            {t('title')}
          </h1>
          <p className="mt-6 text-xl text-gray-200 max-w-2xl">
            {t('subtitle')}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary-50 text-accent hover:bg-primary-50" asChild>
              <Link href="/rent-out">
                {t('rentOutProperty')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/services/home-finding">
                {t('findRentalHome')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          {/* Trust Bar */}
          <div className="mt-12 flex flex-wrap gap-8 text-sm text-gray-200">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>500+ {t('satisfiedClients')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{t('whatsappSupport')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>{t('premiumService')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// How It Works Section
async function HowItWorksSection() {
  const t = await getTranslations('home')

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{t('howItWorks')}</h2>
          <p className="mt-4 text-lg text-gray-600">{t('howItWorksSubtitle')}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* For Tenants */}
          <Card className="border-2 hover:border-accent transition-colors">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary-50 rounded-lg">
                  <Key className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">{t('forTenants')}</h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-50 text-accent rounded-full flex items-center justify-center text-sm font-medium">1</span>
                  <span>{t('tenantStep1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-50 text-accent rounded-full flex items-center justify-center text-sm font-medium">2</span>
                  <span>{t('tenantStep2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-50 text-accent rounded-full flex items-center justify-center text-sm font-medium">3</span>
                  <span>{t('tenantStep3')}</span>
                </li>
              </ul>
              <Button className="mt-6 w-full" asChild>
                <Link href="/services/home-finding">{t('startYourSearch')}</Link>
              </Button>
            </CardContent>
          </Card>

          {/* For Landlords */}
          <Card className="border-2 hover:border-accent transition-colors">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary-50 rounded-lg">
                  <Home className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">{t('forLandlords')}</h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-50 text-accent rounded-full flex items-center justify-center text-sm font-medium">1</span>
                  <span>{t('landlordStep1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-50 text-accent rounded-full flex items-center justify-center text-sm font-medium">2</span>
                  <span>{t('landlordStep2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-50 text-accent rounded-full flex items-center justify-center text-sm font-medium">3</span>
                  <span>{t('landlordStep3')}</span>
                </li>
              </ul>
              <Button className="mt-6 w-full" asChild>
                <Link href="/rent-out">{t('getRentalEstimate')}</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

// Why Choose Us Section
async function WhyChooseUsSection() {
  const t = await getTranslations('home')

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">{t('whyChooseUs')}</h2>
            <p className="mt-6 text-lg text-gray-600">
              {t('whyChooseUsText')}
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Star className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-gray-700">{t('personalGuidance')}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Star className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-gray-700">{t('deepKnowledge')}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Star className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-gray-700">{t('fastResponse')}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Star className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-gray-700">{t('transparentPricing')}</span>
              </li>
            </ul>
            <Button className="mt-8" asChild>
              <Link href="/about">{t('learnMoreAboutUs')}</Link>
            </Button>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-highlight to-highlight-dark flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl font-bold text-accent">10+</p>
                  <p className="text-lg text-accent mt-2">{t('yearsExperience')}</p>
                </div>
              </div>
            </div>
          </div>
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
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{t('exploreNeighborhoods')}</h2>
          <p className="mt-4 text-lg text-gray-600">{t('exploreNeighborhoodsSubtitle')}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {neighborhoods.map((neighborhood) => (
            <Link key={neighborhood.slug} href={`/neighborhoods/${neighborhood.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={neighborhood.image}
                    alt={neighborhood.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">
                    {neighborhood.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">{neighborhood.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link href="/neighborhoods">{t('viewAllNeighborhoods')}</Link>
          </Button>
        </div>
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
