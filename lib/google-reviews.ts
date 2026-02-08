// Google Places API integration for fetching reviews

export interface GoogleReview {
  author_name: string
  author_url?: string
  profile_photo_url?: string
  rating: number
  relative_time_description: string
  text: string
  time: number
}

export interface PlaceDetails {
  name: string
  rating: number
  user_ratings_total: number
  reviews: GoogleReview[]
}

export async function getGoogleReviews(): Promise<PlaceDetails | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    console.warn('Google Places API key or Place ID not configured')
    return null
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error('Failed to fetch Google reviews')
    }

    const data = await response.json()

    if (data.status !== 'OK') {
      console.error('Google Places API error:', data.status)
      return null
    }

    return data.result as PlaceDetails
  } catch (error) {
    console.error('Error fetching Google reviews:', error)
    return null
  }
}
