import { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, ArrowRight } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Amsterdam Neighborhoods Guide | MMRE',
  description: 'Explore Amsterdam neighborhoods. Find the perfect area to live with our comprehensive guide to Amsterdam districts.',
}

export default async function NeighborhoodsPage() {
  const t = await getTranslations('neighborhoods')
  const tCommon = await getTranslations('common')

  const neighborhoods = [
    {
      slug: 'jordaan',
      name: t('jordaan.name'),
      description: t('jordaan.longDescription'),
      priceRange: '€2,500 - €4,500',
      highlights: [t('highlights.historicCanals'), t('highlights.artGalleries'), t('highlights.localMarkets'), t('highlights.restaurants')],
      image: '/images/neighborhoods/Jordaan/Jordaan cover.jpg',
    },
    {
      slug: 'de-pijp',
      name: t('dePijp.name'),
      description: t('dePijp.longDescription'),
      priceRange: '€2,000 - €3,500',
      highlights: [t('highlights.albertCuypMarket'), t('highlights.diverseDining'), t('highlights.nightlife'), t('highlights.sarphatipark')],
      image: '/images/neighborhoods/De Pijp/De Pijp.jpg',
    },
    {
      slug: 'oud-zuid',
      name: t('oudZuid.name'),
      description: t('oudZuid.longDescription'),
      priceRange: '€3,000 - €6,000',
      highlights: [t('highlights.museumplein'), t('highlights.vondelpark'), t('highlights.upscaleShopping'), t('highlights.internationalSchools')],
      image: '/images/neighborhoods/Oud zuid/Oud zuid.jpg',
    },
    {
      slug: 'centrum',
      name: t('centrum.name'),
      description: t('centrum.longDescription'),
      priceRange: '€2,500 - €5,000',
      highlights: [t('highlights.canalRing'), t('highlights.historicSites'), t('highlights.shopping'), t('highlights.dining')],
      image: '/images/neighborhoods/Centrum/Centrum.jpg',
    },
    {
      slug: 'amsterdam-west',
      name: t('west.name'),
      description: t('west.longDescription'),
      priceRange: '€1,800 - €3,000',
      highlights: [t('highlights.westerpark'), t('highlights.creativeHubs'), t('highlights.affordable'), t('highlights.familyFriendly')],
      image: '/images/neighborhoods/Amsterdam West/Amsterdam West.jpg',
    },
    {
      slug: 'amsterdam-oost',
      name: t('oost.name'),
      description: t('oost.longDescription'),
      priceRange: '€1,800 - €3,200',
      highlights: [t('highlights.oosterpark'), t('highlights.dappermarkt'), t('highlights.multicultural'), t('highlights.goodTransport')],
      image: '/images/neighborhoods/Amsterdam Oost/Amsterdam Oost.jpg',
    },
    {
      slug: 'amsterdam-noord',
      name: t('noord.name'),
      description: t('noord.longDescription'),
      priceRange: '€1,500 - €2,800',
      highlights: [t('highlights.ndsmWharf'), t('highlights.eyeFilmMuseum'), t('highlights.creativeScene'), t('highlights.moreSpace')],
      image: '/images/neighborhoods/Amsterdam Noord/Amsterdam Noord.jpg',
    },
    {
      slug: 'amstelveen',
      name: t('amstelveen.name'),
      description: t('amstelveen.longDescription'),
      priceRange: '€2,000 - €4,000',
      highlights: [t('highlights.internationalSchools'), t('highlights.parks'), t('highlights.familyFriendly'), t('highlights.quieter')],
      image: '/images/neighborhoods/Amstelveen/Amstelveen.jpg',
    },
  ]

  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">{t('title')}</h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Neighborhoods Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {neighborhoods.map((neighborhood) => (
            <Link key={neighborhood.slug} href={{ pathname: '/neighborhoods/[slug]', params: { slug: neighborhood.slug } }}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="aspect-[16/10] relative overflow-hidden rounded-t-xl">
                  <Image
                    src={neighborhood.image}
                    alt={neighborhood.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center gap-1 bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      <MapPin className="h-4 w-4" />
                      {neighborhood.name}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                    {neighborhood.description}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {neighborhood.highlights.slice(0, 3).map((highlight, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-3 sm:pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-500">{t('priceRange')}</p>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">{neighborhood.priceRange}</p>
                    </div>
                    <span className="text-accent group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
