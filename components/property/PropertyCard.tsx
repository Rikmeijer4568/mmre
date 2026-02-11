'use client'

import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Bed, Bath, Maximize, MapPin } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface Property {
  id: string
  title: string
  slug: string
  address: string
  city: string
  neighborhood: string | null
  price: number
  bedrooms: number
  bathrooms: number
  area: number
  images: string[]
  available: boolean
  featured: boolean
}

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  const t = useTranslations('offerings')

  const mainImage = property.images[0] || '/images/property-placeholder.jpg'

  return (
    <Link href={{ pathname: '/offerings/[slug]', params: { slug: property.slug } }}>
      <Card variant="interactive" className="h-full overflow-hidden group">
        {/* Image */}
        <div className="aspect-[16/10] relative overflow-hidden">
          <Image
            src={mainImage}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                     group-hover:scale-110"
          />

          {/* Status badge */}
          <div className="absolute top-3 left-3">
            <Badge
              variant={property.available ? 'default' : 'secondary'}
              className={property.available
                ? 'bg-green-500 hover:bg-green-600 text-white'
                : 'bg-gray-500 text-white'
              }
            >
              {property.available ? t('available') : t('notAvailable')}
            </Badge>
          </div>

          {/* Featured badge */}
          {property.featured && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-accent text-white">Featured</Badge>
            </div>
          )}

          {/* Price overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p className="text-white font-bold text-xl">
              €{property.price.toLocaleString()}
              <span className="text-sm font-normal text-white/80"> {t('perMonth')}</span>
            </p>
          </div>
        </div>

        {/* Content */}
        <CardContent className="p-4 sm:p-5">
          <h3 className="font-semibold text-lg text-gray-900 group-hover:text-accent
                       transition-colors duration-200 line-clamp-1">
            {property.title}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-gray-500 text-sm mt-2">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            <span className="line-clamp-1">
              {property.neighborhood || property.city}
            </span>
          </div>

          {/* Features */}
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-1.5 text-gray-600">
              <Bed className="h-4 w-4" />
              <span className="text-sm">
                {property.bedrooms} {property.bedrooms === 1 ? t('bedroom') : t('bedrooms')}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-600">
              <Bath className="h-4 w-4" />
              <span className="text-sm">
                {property.bathrooms} {property.bathrooms === 1 ? t('bathroom') : t('bathrooms')}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-600">
              <Maximize className="h-4 w-4" />
              <span className="text-sm">{property.area} {t('sqm')}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
