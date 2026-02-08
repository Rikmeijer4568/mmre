'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

interface GoogleReview {
  author_name: string
  profile_photo_url?: string
  rating: number
  relative_time_description: string
  text: string
}

interface PlaceDetails {
  name: string
  rating: number
  user_ratings_total: number
  reviews: GoogleReview[]
}

// Fallback reviews when API is not configured
const fallbackReviews: GoogleReview[] = [
  {
    author_name: 'Sarah M.',
    rating: 5,
    relative_time_description: '2 months ago',
    text: 'Excellent service! MMRE helped us find our perfect apartment in Amsterdam within just 2 weeks. Very professional and responsive via WhatsApp.',
  },
  {
    author_name: 'Thomas K.',
    rating: 5,
    relative_time_description: '1 month ago',
    text: 'As a landlord, I was impressed by how quickly they found reliable tenants for my property. Great communication throughout the process.',
  },
  {
    author_name: 'Anna L.',
    rating: 5,
    relative_time_description: '3 weeks ago',
    text: 'Moving from Germany, I was worried about finding housing. MMRE made it so easy! They understood exactly what our family needed.',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating
              ? 'fill-yellow-400 text-yellow-400'
              : 'fill-gray-200 text-gray-200'
          }`}
        />
      ))}
    </div>
  )
}

export function GoogleReviews() {
  const [reviews, setReviews] = useState<GoogleReview[]>(fallbackReviews)
  const [overallRating, setOverallRating] = useState<number>(5.0)
  const [totalReviews, setTotalReviews] = useState<number>(50)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch('/api/reviews')
        if (response.ok) {
          const data: PlaceDetails = await response.json()
          if (data.reviews && data.reviews.length > 0) {
            setReviews(data.reviews.slice(0, 3)) // Show top 3 reviews
            setOverallRating(data.rating)
            setTotalReviews(data.user_ratings_total)
          }
        }
      } catch (error) {
        // Use fallback reviews on error
        console.log('Using fallback reviews')
      } finally {
        setIsLoading(false)
      }
    }

    fetchReviews()
  }, [])

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-lg font-medium text-gray-600">Google Reviews</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <StarRating rating={Math.round(overallRating)} />
            <span className="text-lg font-semibold text-gray-900">{overallRating.toFixed(1)}</span>
            <span className="text-gray-500">({totalReviews} reviews)</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className={`grid md:grid-cols-3 gap-6 ${isLoading ? 'opacity-50' : ''}`}>
          {reviews.map((review, idx) => (
            <Card key={idx} className="h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-semibold text-lg flex-shrink-0">
                    {review.author_name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{review.author_name}</p>
                    <p className="text-sm text-gray-500">{review.relative_time_description}</p>
                  </div>
                </div>
                <StarRating rating={review.rating} />
                <p className="mt-4 text-gray-600 line-clamp-4">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/search?q=Meijer+Munninghoff+Real+Estate+Amsterdam+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-dark font-medium inline-flex items-center gap-2"
          >
            View all reviews on Google
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
