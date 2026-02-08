import { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  MessageCircle,
  Calculator,
  Home,
  Users,
  FileText,
  Shield,
  Check,
  Key,
  Headphones,
  Search,
  ClipboardCheck,
  Zap,
  Ruler,
  ShieldCheck,
  Leaf,
  ArrowRight,
} from 'lucide-react'
import { getWhatsAppLink } from '@/lib/whatsapp'
import { RentalCalculator } from '@/components/forms/RentalCalculator'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Rent Out Your Property in Amsterdam | MMRE',
  description: 'Rent out your property in Amsterdam with MMRE. Get a free rental estimate, professional marketing, tenant screening, and full support.',
}

// Main Rent Out Page
export default async function RentOutPage() {
  const t = await getTranslations('rentOut')
  const tCommon = await getTranslations('common')
  const tNav = await getTranslations('nav')

  const steps = [
    { icon: ClipboardCheck, title: t('step1Title'), description: t('step1Desc') },
    { icon: Search, title: t('step2Title'), description: t('step2Desc') },
    { icon: Users, title: t('step3Title'), description: t('step3Desc') },
    { icon: Key, title: t('step4Title'), description: t('step4Desc') },
  ]

  const services = [
    { icon: Home, title: t('propertyValuation'), description: t('propertyValuationDesc') },
    { icon: Search, title: t('professionalMarketing'), description: t('professionalMarketingDesc') },
    { icon: Users, title: t('tenantScreening'), description: t('tenantScreeningDesc') },
    { icon: FileText, title: t('contractManagement'), description: t('contractManagementDesc') },
    { icon: Key, title: t('keyHandover'), description: t('keyHandoverDesc') },
    { icon: Headphones, title: t('ongoingSupport'), description: t('ongoingSupportDesc') },
    { icon: Shield, title: t('rentProtection'), description: t('rentProtectionDesc') },
    { icon: Calculator, title: t('financialReporting'), description: t('financialReportingDesc') },
  ]

  const complianceServices = [
    { icon: Calculator, title: tNav('wwsPointCalculation'), description: t('complianceWWSDesc'), href: '/rent-out/services/wws-point-calculation' },
    { icon: Zap, title: tNav('energyLabel'), description: t('complianceEnergyDesc'), href: '/rent-out/services/energy-label' },
    { icon: Ruler, title: tNav('nen2580'), description: t('complianceNENDesc'), href: '/rent-out/services/nen-2580' },
    { icon: ShieldCheck, title: tNav('rentalCompliance'), description: t('compliancePackageDesc'), href: '/rent-out/services/rental-compliance', highlighted: true },
    { icon: Leaf, title: tNav('sustainability'), description: t('complianceSustainabilityDesc'), href: '/rent-out/services/sustainability' },
  ]

  const stats = [
    { value: '200+', label: t('propertiesManaged') },
    { value: '98%', label: t('occupancyRate') },
    { value: '14', label: t('daysAvgToRent') },
    { value: '4.9/5', label: t('landlordRating') },
  ]

  const faqs = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
    { question: t('faq.q4'), answer: t('faq.a4') },
    { question: t('faq.q5'), answer: t('faq.a5') },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent to-accent-dark text-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">{t('title')}</h1>
              <p className="mt-6 text-xl text-gray-200">{t('subtitle')}</p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-accent hover:bg-gray-100" asChild>
                  <a href="#calculator">
                    <Calculator className="mr-2 h-5 w-5" />
                    {t('getRentalEstimate')}
                  </a>
                </Button>
                <Button size="lg" variant="whatsapp" asChild>
                  <a href={getWhatsAppLink('rentOut')} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    {tCommon('whatsappUs')}
                  </a>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4 mt-10 lg:mt-0">
                <Card className="bg-white/10 border-white/20">
                  <CardContent className="p-6 text-center">
                    <p className="text-4xl font-bold">98%</p>
                    <p className="text-sm text-gray-200 mt-1">{t('occupancyRate')}</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 border-white/20">
                  <CardContent className="p-6 text-center">
                    <p className="text-4xl font-bold">14</p>
                    <p className="text-sm text-gray-200 mt-1">{t('daysAvgToRent')}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('freeRentalEstimate')}</h2>
            <p className="mt-4 text-lg text-gray-600">{t('freeRentalEstimateText')}</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <RentalCalculator />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('ourProcess')}</h2>
            <p className="mt-4 text-lg text-gray-600">{t('ourProcessSubtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-highlight rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-accent" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-highlight text-accent text-xs font-medium rounded-full mb-3">
                    {tCommon('step')} {idx + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('whatWeOffer')}</h2>
            <p className="mt-4 text-lg text-gray-600">{t('whatWeOfferSubtitle')}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-highlight rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Services Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-highlight text-accent text-sm font-medium rounded-full mb-4">
              {t('requirementsCompliance')}
            </span>
            <h2 className="text-3xl font-bold text-gray-900">{t('servicesForLandlords')}</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{t('servicesForLandlordsText')}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceServices.map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className={`block rounded-xl p-6 border-2 transition-all group hover:shadow-lg ${
                  service.highlighted
                    ? 'border-accent bg-highlight/30'
                    : 'border-gray-100 bg-white hover:border-accent/30'
                }`}
              >
                {service.highlighted && (
                  <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-medium rounded-full mb-3">
                    {tCommon('recommended')}
                  </span>
                )}
                <div className="w-12 h-12 bg-highlight rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{service.description}</p>
                <div className="mt-4 text-accent text-sm font-medium flex items-center">
                  {tCommon('moreInfo')}
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl font-bold">{stat.value}</p>
                <p className="text-gray-200 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('faqTitle')}</h2>
            <p className="mt-4 text-lg text-gray-600">{t('faqSubtitle')}</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-highlight">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">{t('readyToStart')}</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{t('readyToStartText')}</p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <a href="#calculator">
                  <Calculator className="mr-2 h-5 w-5" />
                  {t('getRentalEstimate')}
                </a>
              </Button>
              <Button size="lg" variant="whatsapp" asChild>
                <a href={getWhatsAppLink('rentOut')} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {tCommon('whatsappUs')}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">{tCommon('contactUs')}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
