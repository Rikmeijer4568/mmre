import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Check for existing subscription
    const existing = await prisma.newsletterSubscriber.findUnique({
      where: { email },
    })

    if (existing) {
      return NextResponse.json({ error: 'Email already subscribed' }, { status: 400 })
    }

    // Create subscription
    await prisma.newsletterSubscriber.create({
      data: { email },
    })

    // Also create a lead record
    await prisma.lead.create({
      data: {
        name: email.split('@')[0], // Use email prefix as name
        email,
        leadType: 'GENERAL',
        source: 'NEWSLETTER',
        sourcePage: request.headers.get('referer') || undefined,
      },
    })

    // Track analytics
    await prisma.analyticsEvent.create({
      data: {
        type: 'newsletter_subscribe',
        page: request.headers.get('referer') || 'unknown',
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to subscribe:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}
