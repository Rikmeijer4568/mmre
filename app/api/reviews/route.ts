import { NextResponse } from 'next/server'
import { getGoogleReviews } from '@/lib/google-reviews'

export async function GET() {
  const reviews = await getGoogleReviews()

  if (!reviews) {
    return NextResponse.json(
      { error: 'Could not fetch reviews' },
      { status: 500 }
    )
  }

  return NextResponse.json(reviews)
}
