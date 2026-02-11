import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

// GET /api/properties - List all properties
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const published = searchParams.get('published')
    const featured = searchParams.get('featured')
    const available = searchParams.get('available')

    const where: Record<string, unknown> = {}

    if (published === 'true') {
      where.publishedAt = { not: null }
    } else if (published === 'false') {
      where.publishedAt = null
    }

    if (featured === 'true') {
      where.featured = true
    }

    if (available === 'true') {
      where.available = true
    } else if (available === 'false') {
      where.available = false
    }

    const properties = await prisma.property.findMany({
      where,
      orderBy: [
        { featured: 'desc' },
        { createdAt: 'desc' },
      ],
    })

    return NextResponse.json(properties)
  } catch (error) {
    console.error('Error fetching properties:', error)
    return NextResponse.json(
      { error: 'Failed to fetch properties' },
      { status: 500 }
    )
  }
}

// POST /api/properties - Create a new property
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()

    // Generate slug from title if not provided
    const slug = body.slug || body.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

    const property = await prisma.property.create({
      data: {
        title: body.title,
        slug,
        address: body.address,
        city: body.city || 'Amsterdam',
        neighborhood: body.neighborhood || null,
        price: parseInt(body.price),
        bedrooms: parseInt(body.bedrooms),
        bathrooms: parseInt(body.bathrooms),
        area: parseInt(body.area),
        description: body.description,
        features: body.features || [],
        images: body.images || [],
        available: body.available ?? true,
        featured: body.featured ?? false,
        publishedAt: body.published ? new Date() : null,
      },
    })

    return NextResponse.json(property, { status: 201 })
  } catch (error) {
    console.error('Error creating property:', error)
    return NextResponse.json(
      { error: 'Failed to create property' },
      { status: 500 }
    )
  }
}
