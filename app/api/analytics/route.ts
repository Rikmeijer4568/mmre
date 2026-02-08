import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { type, page, metadata } = await request.json()

    if (!type || !page) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await prisma.analyticsEvent.create({
      data: {
        type,
        page,
        metadata: metadata ? JSON.stringify(metadata) : null,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to track event:', error)
    return NextResponse.json(
      { error: 'Failed to track event' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')

    const where = {
      ...(startDate && endDate && {
        createdAt: {
          gte: new Date(startDate),
          lte: new Date(endDate),
        },
      }),
    }

    const [events, totals] = await Promise.all([
      prisma.analyticsEvent.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        take: 100,
      }),
      prisma.analyticsEvent.groupBy({
        by: ['type'],
        _count: true,
        where,
      }),
    ])

    const summary = totals.reduce((acc, item) => {
      acc[item.type] = item._count
      return acc
    }, {} as Record<string, number>)

    return NextResponse.json({ events, summary })
  } catch (error) {
    console.error('Failed to fetch analytics:', error)
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    )
  }
}
