import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Home, Users, Utensils, Train, ArrowLeft, MessageCircle } from 'lucide-react'
import { getWhatsAppLink } from '@/lib/whatsapp'

// Image mapping for neighborhoods
const neighborhoodImages: Record<string, string> = {
  jordaan: '/images/neighborhoods/Jordaan/Jordaan cover.jpg',
  'de-pijp': '/images/neighborhoods/De Pijp/De Pijp.jpg',
  'oud-zuid': '/images/neighborhoods/Oud zuid/Oud zuid.jpg',
  centrum: '/images/neighborhoods/Centrum/Centrum.jpg',
  'amsterdam-west': '/images/neighborhoods/Amsterdam West/Amsterdam West.jpg',
  'amsterdam-oost': '/images/neighborhoods/Amsterdam Oost/Amsterdam Oost.jpg',
  'amsterdam-noord': '/images/neighborhoods/Amsterdam Noord/Amsterdam Noord.jpg',
  amstelveen: '/images/neighborhoods/Amstelveen/Amstelveen.jpg',
}

// This would come from the database in production
const neighborhoodData: Record<string, {
  name: string
  description: string
  longDescription: string
  priceRange: string
  avgRent: string
  characteristics: { icon: typeof Home; label: string; value: string }[]
  highlights: string[]
  bestFor: string[]
}> = {
  jordaan: {
    name: 'Jordaan',
    description: 'Charming canals, boutique shops, and a vibrant arts scene',
    longDescription: `The Jordaan is one of Amsterdam's most beloved neighborhoods, known for its picturesque canals,
    narrow streets, and historic buildings. Originally a working-class area, it has transformed into a trendy,
    upscale neighborhood popular with young professionals and creatives.

    The area is filled with independent boutiques, art galleries, cozy brown cafes (traditional Dutch pubs),
    and excellent restaurants. The famous Nine Streets shopping area is nearby, and weekly markets at
    Noordermarkt and Lindengracht add to the neighborhood's charm.

    Living in the Jordaan means being at the heart of Amsterdam's cultural life while enjoying a
    village-like atmosphere with friendly neighbors and a strong sense of community.`,
    priceRange: '€2,500 - €4,500',
    avgRent: '€3,200',
    characteristics: [
      { icon: Home, label: 'Property Type', value: 'Historic apartments' },
      { icon: Users, label: 'Demographic', value: 'Young professionals, Creatives' },
      { icon: Utensils, label: 'Dining', value: 'Cafes, Fine dining' },
      { icon: Train, label: 'Transport', value: 'Central Station 10 min' },
    ],
    highlights: ['Historic canals', 'Art galleries', 'Noordermarkt', 'Nine Streets', 'Anne Frank House nearby'],
    bestFor: ['Young professionals', 'Art lovers', 'Those seeking authentic Amsterdam experience'],
  },
  'de-pijp': {
    name: 'De Pijp',
    description: 'Diverse, trendy, and full of life',
    longDescription: `De Pijp is Amsterdam's most multicultural neighborhood, known for its vibrant street life,
    diverse food scene, and the famous Albert Cuyp Market - one of Europe's largest street markets.

    The area attracts a mix of young professionals, students, and families who appreciate its lively
    atmosphere and excellent restaurants from around the world. Sarphatipark provides green space,
    while the numerous terraces along the streets are perfect for people-watching.

    De Pijp offers a more affordable entry point to central Amsterdam living while maintaining
    excellent connections to the rest of the city via tram and metro.`,
    priceRange: '€2,000 - €3,500',
    avgRent: '€2,600',
    characteristics: [
      { icon: Home, label: 'Property Type', value: 'Mix of old and new' },
      { icon: Users, label: 'Demographic', value: 'Young professionals, Students' },
      { icon: Utensils, label: 'Dining', value: 'International cuisine' },
      { icon: Train, label: 'Transport', value: 'Metro and tram hub' },
    ],
    highlights: ['Albert Cuyp Market', 'Sarphatipark', 'International restaurants', 'Heineken Experience', 'Nightlife'],
    bestFor: ['Foodies', 'Young professionals', 'Those seeking diverse, vibrant atmosphere'],
  },
  'oud-zuid': {
    name: 'Oud-Zuid',
    description: 'Elegant, upscale, and culturally rich',
    longDescription: `Oud-Zuid (Old South) is Amsterdam's most prestigious residential area, characterized by
    grand 19th-century architecture, tree-lined avenues, and proximity to world-class museums.

    The neighborhood includes the famous Museumplein (home to the Rijksmuseum, Van Gogh Museum, and
    Stedelijk Museum), the beautiful Vondelpark, and the upscale shopping street P.C. Hooftstraat.

    Popular with affluent families and expats, Oud-Zuid offers excellent international schools,
    safe streets, and a refined atmosphere. While it's one of the more expensive areas,
    the quality of life and amenities justify the investment.`,
    priceRange: '€3,000 - €6,000',
    avgRent: '€4,200',
    characteristics: [
      { icon: Home, label: 'Property Type', value: 'Grand apartments, Townhouses' },
      { icon: Users, label: 'Demographic', value: 'Families, Expats, Professionals' },
      { icon: Utensils, label: 'Dining', value: 'Upscale restaurants' },
      { icon: Train, label: 'Transport', value: 'Excellent tram connections' },
    ],
    highlights: ['Museumplein', 'Vondelpark', 'P.C. Hooftstraat', 'International schools', 'Concert Hall'],
    bestFor: ['Families', 'Culture enthusiasts', 'Those seeking prestige and quality'],
  },
  centrum: {
    name: 'Centrum',
    description: 'Historic heart with endless entertainment',
    longDescription: `Amsterdam Centrum is the historic core of the city, encompassing the famous Canal Ring
    (a UNESCO World Heritage site), Dam Square, and the city's main shopping and entertainment areas.

    Living in Centrum means having Amsterdam's best attractions, restaurants, and nightlife at your
    doorstep. From the Royal Palace to hidden courtyards, from department stores to specialty shops,
    everything is within walking distance.

    While it can be touristy in some areas, many residential pockets offer a more peaceful atmosphere
    while maintaining the excitement of city-center living.`,
    priceRange: '€2,500 - €5,000',
    avgRent: '€3,500',
    characteristics: [
      { icon: Home, label: 'Property Type', value: 'Canal houses, Apartments' },
      { icon: Users, label: 'Demographic', value: 'Young professionals, Couples' },
      { icon: Utensils, label: 'Dining', value: 'Everything available' },
      { icon: Train, label: 'Transport', value: 'Central Station' },
    ],
    highlights: ['Canal Ring', 'Dam Square', 'Shopping', 'Nightlife', 'Historic architecture'],
    bestFor: ['Those wanting city-center living', 'Nightlife lovers', 'First-time Amsterdam residents'],
  },
  'amsterdam-west': {
    name: 'Amsterdam West',
    description: 'Creative, diverse, and up-and-coming',
    longDescription: `Amsterdam West is one of the city's most dynamic areas, combining multicultural
    communities with a growing creative scene. The neighborhood includes trendy areas like
    Oud-West and Bos en Lommer, each with its own character.

    Westerpark, a large green space with cultural venues and events, is a major draw. The area
    offers more space and better value compared to central neighborhoods while maintaining
    excellent connections to the city center.

    Young families and professionals are increasingly choosing West for its authentic neighborhood
    feel, diverse dining options, and community atmosphere.`,
    priceRange: '€1,800 - €3,000',
    avgRent: '€2,400',
    characteristics: [
      { icon: Home, label: 'Property Type', value: 'Pre-war apartments, New builds' },
      { icon: Users, label: 'Demographic', value: 'Families, Young professionals' },
      { icon: Utensils, label: 'Dining', value: 'Diverse, International' },
      { icon: Train, label: 'Transport', value: 'Tram and metro' },
    ],
    highlights: ['Westerpark', 'De Hallen', 'Affordable', 'Creative scene', 'Multicultural'],
    bestFor: ['Families', 'Budget-conscious renters', 'Those seeking community feel'],
  },
  'amsterdam-oost': {
    name: 'Amsterdam Oost',
    description: 'Green, family-friendly, and diverse',
    longDescription: `Amsterdam Oost (East) is a green, family-oriented neighborhood known for its beautiful
    parks, diverse population, and excellent public transport connections.

    The area includes Oosterpark, a lovely green space, and the vibrant Dappermarkt - one of
    Amsterdam's most multicultural markets. The neighborhood has seen significant development
    while maintaining its diverse, authentic character.

    With good schools, safe streets, and a mix of housing options, Oost is popular with families
    and professionals who want a quieter life without sacrificing urban amenities.`,
    priceRange: '€1,800 - €3,200',
    avgRent: '€2,500',
    characteristics: [
      { icon: Home, label: 'Property Type', value: 'Mix of styles' },
      { icon: Users, label: 'Demographic', value: 'Families, Young professionals' },
      { icon: Utensils, label: 'Dining', value: 'Multicultural' },
      { icon: Train, label: 'Transport', value: 'Metro, Tram' },
    ],
    highlights: ['Oosterpark', 'Dappermarkt', 'Artis Zoo', 'Multicultural', 'Family-friendly'],
    bestFor: ['Families', 'Those seeking green spaces', 'Budget-conscious renters'],
  },
  'amsterdam-noord': {
    name: 'Amsterdam Noord',
    description: 'Creative frontier with space to breathe',
    longDescription: `Amsterdam Noord is the city's creative frontier, located across the IJ river and connected
    by free ferries that run 24/7. Once an industrial area, it has transformed into a hub for
    artists, entrepreneurs, and those seeking more space.

    The NDSM Wharf is the heart of Noord's creative scene, hosting festivals, markets, and studios.
    The Eye Film Museum is an architectural landmark, and new developments continue to reshape the area.

    Noord offers larger apartments and houses at lower prices than central Amsterdam, making it
    attractive for families and those who don't need to be in the city center daily.`,
    priceRange: '€1,500 - €2,800',
    avgRent: '€2,100',
    characteristics: [
      { icon: Home, label: 'Property Type', value: 'New builds, Larger spaces' },
      { icon: Users, label: 'Demographic', value: 'Creatives, Families' },
      { icon: Utensils, label: 'Dining', value: 'Trendy, Industrial' },
      { icon: Train, label: 'Transport', value: 'Ferry (free), Metro' },
    ],
    highlights: ['NDSM Wharf', 'Eye Film Museum', 'More space', 'Lower prices', 'Creative community'],
    bestFor: ['Creatives', 'Families needing space', 'Budget-conscious renters'],
  },
  amstelveen: {
    name: 'Amstelveen',
    description: 'Quiet suburb with international appeal',
    longDescription: `Amstelveen is a prosperous suburb directly south of Amsterdam, known for its excellent
    quality of life, green spaces, and large international community. Many multinational companies
    and international schools are located here.

    The area offers a quieter, more suburban lifestyle while maintaining easy access to Amsterdam
    via metro, tram, and bus. The Amsterdamse Bos (Amsterdam Forest) provides vast green space
    for outdoor activities.

    Popular with expat families, Amstelveen combines Dutch quality of life with international
    amenities, making the transition to the Netherlands smoother for newcomers.`,
    priceRange: '€2,000 - €4,000',
    avgRent: '€2,800',
    characteristics: [
      { icon: Home, label: 'Property Type', value: 'Houses, Apartments' },
      { icon: Users, label: 'Demographic', value: 'Expat families, Professionals' },
      { icon: Utensils, label: 'Dining', value: 'International, Family-friendly' },
      { icon: Train, label: 'Transport', value: 'Metro to Amsterdam' },
    ],
    highlights: ['International schools', 'Amsterdamse Bos', 'Expat community', 'Quiet', 'Safe'],
    bestFor: ['Expat families', 'Those seeking suburban life', 'International school access'],
  },
}

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const neighborhood = neighborhoodData[slug]
  if (!neighborhood) {
    return { title: 'Neighborhood Not Found | MMRE' }
  }
  return {
    title: `${neighborhood.name} - Amsterdam Neighborhood Guide | MMRE`,
    description: neighborhood.description,
  }
}

export default async function NeighborhoodPage({ params }: PageProps) {
  const { slug } = await params
  const neighborhood = neighborhoodData[slug]

  if (!neighborhood) {
    notFound()
  }

  const heroImage = neighborhoodImages[slug]

  return (
    <div>
      {/* Hero */}
      <section className="relative text-white py-20">
        {heroImage && (
          <Image
            src={heroImage}
            alt={neighborhood.name}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-accent/80" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/neighborhoods"
            className="inline-flex items-center gap-2 text-gray-200 hover:text-white mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            All Neighborhoods
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="h-6 w-6" />
            <h1 className="text-4xl sm:text-5xl font-bold">{neighborhood.name}</h1>
          </div>
          <p className="text-xl text-gray-200 max-w-2xl">{neighborhood.description}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-gray max-w-none">
                {neighborhood.longDescription.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-gray-600 mb-4">{paragraph}</p>
                ))}
              </div>

              {/* Highlights */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Highlights</h2>
                <div className="flex flex-wrap gap-3">
                  {neighborhood.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="bg-highlight text-accent px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Best For */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Best For</h2>
                <ul className="space-y-3">
                  {neighborhood.bestFor.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="mt-12 lg:mt-0">
              {/* Quick Facts */}
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Quick Facts</h3>

                  <div className="space-y-4 mb-6">
                    {neighborhood.characteristics.map((char, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-highlight rounded-lg flex items-center justify-center flex-shrink-0">
                          <char.icon className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{char.label}</p>
                          <p className="font-medium text-gray-900">{char.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-100 pt-6 mb-6">
                    <p className="text-sm text-gray-500 mb-1">Average Monthly Rent</p>
                    <p className="text-3xl font-bold text-gray-900">{neighborhood.avgRent}</p>
                    <p className="text-sm text-gray-500 mt-1">Range: {neighborhood.priceRange}</p>
                  </div>

                  <Button className="w-full mb-3" variant="whatsapp" asChild>
                    <a href={getWhatsAppLink('rentIn')} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Find a Home in {neighborhood.name}
                    </a>
                  </Button>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/services/home-finding">View All Rentals</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
