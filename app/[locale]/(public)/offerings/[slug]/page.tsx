import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { prisma } from '@/lib/prisma'
import { ImageGallery } from '@/components/property/ImageGallery'
import { Badge } from '@/components/ui/badge'
import { AnimatedSection } from '@/components/ui/motion'
import { Link } from '@/i18n/navigation'
import { Bed, Bath, Maximize, MapPin, Check, ArrowLeft, Calendar } from 'lucide-react'

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

async function getProperty(slug: string) {
  return prisma.property.findUnique({
    where: { slug },
  })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const property = await getProperty(slug)

  if (!property) {
    return { title: 'Property Not Found' }
  }

  const t = await getTranslations({ locale, namespace: 'offerings' })

  return {
    title: `${property.title} | ${t('pageTitle')}`,
    description: property.description.slice(0, 160),
    openGraph: {
      images: property.images[0] ? [property.images[0]] : [],
    },
  }
}

export async function generateStaticParams() {
  try {
    const properties = await prisma.property.findMany({
      where: { publishedAt: { not: null } },
      select: { slug: true },
    })

    return properties.map((property) => ({
      slug: property.slug,
    }))
  } catch {
    // Database not available during build - pages will be generated on-demand
    return []
  }
}

export default async function PropertyDetailPage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  const t = await getTranslations('offerings')
  const property = await getProperty(slug)

  if (!property) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back link */}
      <div className="container mx-auto px-4 py-6">
        <Link
          href="/offerings"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('backToOverview')}
        </Link>
      </div>

      {/* Property Header */}
      <div className="container mx-auto px-4 pb-8">
        <AnimatedSection>
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Badge
                  variant={property.available ? 'default' : 'secondary'}
                  className={property.available
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : 'bg-gray-500 text-white'
                  }
                >
                  {property.available ? t('available') : t('notAvailable')}
                </Badge>
                {property.featured && (
                  <Badge className="bg-accent text-white">Featured</Badge>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                {property.title}
              </h1>
            </div>
            <div className="text-right">
              <p className="text-3xl md:text-4xl font-bold text-accent">
                €{property.price.toLocaleString()}
              </p>
              <p className="text-gray-500">{t('perMonth')}</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-600 mb-8">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">
              {property.address}, {property.neighborhood && `${property.neighborhood}, `}{property.city}
            </span>
          </div>
        </AnimatedSection>

        {/* Image Gallery */}
        <AnimatedSection delay={0.1}>
          <ImageGallery images={property.images} title={property.title} />
        </AnimatedSection>
      </div>

      {/* Property Details */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Key Features */}
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-3 gap-6 p-6 bg-gray-50 rounded-2xl">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-soft">
                    <Bed className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{property.bedrooms}</p>
                  <p className="text-gray-500 text-sm">
                    {property.bedrooms === 1 ? t('bedroom') : t('bedrooms')}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-soft">
                    <Bath className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{property.bathrooms}</p>
                  <p className="text-gray-500 text-sm">
                    {property.bathrooms === 1 ? t('bathroom') : t('bathrooms')}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-soft">
                    <Maximize className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{property.area}</p>
                  <p className="text-gray-500 text-sm">{t('sqm')}</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Description */}
            <AnimatedSection delay={0.3}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('description')}</h2>
              <div className="prose prose-gray max-w-none">
                {property.description.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </AnimatedSection>

            {/* Features List */}
            {property.features.length > 0 && (
              <AnimatedSection delay={0.4}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('features')}</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {property.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            )}
          </div>

          {/* Sidebar - Contact Card */}
          <div className="lg:col-span-1">
            <AnimatedSection delay={0.3}>
              <div className="sticky top-24 bg-white border border-gray-200 rounded-2xl p-6 shadow-soft-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t('interestedTitle')}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t('interestedDescription')}
                </p>

                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/31612345678?text=${encodeURIComponent(
                    `Hi, I'm interested in: ${property.title} (${property.address})`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a]
                           text-white font-semibold py-4 rounded-xl transition-all duration-300
                           hover:shadow-lg hover:-translate-y-0.5 mb-4"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {t('whatsappCta')}
                </a>

                {/* Schedule Viewing */}
                <a
                  href={`mailto:info@mmre.nl?subject=${encodeURIComponent(
                    `Viewing Request: ${property.title}`
                  )}&body=${encodeURIComponent(
                    `Hi,\n\nI would like to schedule a viewing for:\n${property.title}\n${property.address}\n\nPlease contact me to arrange a suitable time.\n\nThank you!`
                  )}`}
                  className="flex items-center justify-center gap-2 w-full bg-gray-100 hover:bg-gray-200
                           text-gray-900 font-semibold py-4 rounded-xl transition-all duration-300"
                >
                  <Calendar className="w-5 h-5" />
                  {t('scheduleViewing')}
                </a>

                {/* Property Info */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-500">{t('propertyId')}</span>
                    <span className="font-mono text-gray-700">{property.id.slice(0, 8).toUpperCase()}</span>
                  </div>
                  {property.publishedAt && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">{t('publishedOn')}</span>
                      <span className="text-gray-700">
                        {new Date(property.publishedAt).toLocaleDateString(locale, {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  )
}
