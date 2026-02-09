import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Award, Shield, Heart, CheckCircle, MessageCircle } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { getWhatsAppLink } from '@/lib/whatsapp'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'About Us - MMRE | Meijer & Münninghoff Real Estate',
  description: 'Learn about MMRE, your trusted partner for premium rental services in Amsterdam. Personal guidance for expats and landlords.',
}

export default async function AboutPage() {
  const t = await getTranslations('about')
  const tCommon = await getTranslations('common')
  const tHome = await getTranslations('home')

  const stats = [
    { value: '500+', label: tHome('satisfiedClients') },
    { value: '10+', label: tHome('yearsExperience') },
    { value: '4.9/5', label: t('clientRating') },
    { value: '98%', label: t('successRate') },
  ]

  const values = [
    {
      icon: Shield,
      title: t('personalService'),
      description: t('personalServiceText'),
    },
    {
      icon: Heart,
      title: t('localExpertise'),
      description: t('localExpertiseText'),
    },
    {
      icon: Award,
      title: t('transparency'),
      description: t('transparencyText'),
    },
    {
      icon: Users,
      title: t('efficiency'),
      description: t('efficiencyText'),
    },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-accent to-accent-dark text-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">{t('title')}</h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-200">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{t('whoWeAre')}</h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600">
                {t('whoWeAreText1')}
              </p>
              <p className="mt-4 text-lg text-gray-600">
                {t('whoWeAreText2')}
              </p>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  {tHome('personalGuidance')}
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  {tHome('deepKnowledge')}
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  {tHome('fastResponse')}
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  {tHome('transparentPricing')}
                </li>
              </ul>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="aspect-[4/3] bg-gradient-to-br from-highlight to-highlight-dark rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{t('ourMission')}</h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600">
              {t('ourMissionText')}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{t('ourValues')}</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {values.map((value, idx) => (
              <Card key={idx} className="text-center">
                <CardContent className="p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-50 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <value.icon className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                  </div>
                  <h3 className="text-base sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-accent text-white rounded-2xl sm:rounded-3xl p-6 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold">{t('readyToWork')}</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-xl text-gray-200 max-w-2xl mx-auto">
              {t('readyToWorkText')}
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button size="lg" className="bg-white text-accent hover:bg-gray-100" asChild>
                <Link href="/contact">{tCommon('contactUs')}</Link>
              </Button>
              <Button size="lg" variant="whatsapp" asChild>
                <a href={getWhatsAppLink('general')} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {tCommon('whatsappUs')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
