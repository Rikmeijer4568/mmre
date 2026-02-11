import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

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
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { error: 'Failed to fetch properties', details: errorMessage },
      { status: 500 }
    )
  }
}

// POST /api/properties - Create a new property
export async function POST(request: NextRequest) {
  try {
    // Log the incoming request
    const body = await request.json()
    console.log('Creating property with data:', JSON.stringify(body, null, 2))

    // Validate required fields
    const requiredFields = ['title', 'address', 'price']
    const missingFields = requiredFields.filter(field => !body[field])
    if (missingFields.length > 0) {
      console.error('Missing required fields:', missingFields)
      return NextResponse.json(
        { error: 'Missing required fields', fields: missingFields },
        { status: 400 }
      )
    }

    // Validate numeric fields
    const price = parseInt(body.price)
    const bedrooms = parseInt(body.bedrooms) || 0
    const bathrooms = parseInt(body.bathrooms) || 0
    const area = parseInt(body.area) || 0

    if (isNaN(price) || price <= 0) {
      console.error('Invalid price:', body.price)
      return NextResponse.json(
        { error: 'Invalid price value', value: body.price },
        { status: 400 }
      )
    }

    // Generate slug from title if not provided
    const slug = body.slug || body.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

    console.log('Generated slug:', slug)

    // Check if slug already exists
    const existingProperty = await prisma.property.findUnique({
      where: { slug },
    })

    if (existingProperty) {
      console.error('Slug already exists:', slug)
      return NextResponse.json(
        { error: 'A property with this slug already exists', slug },
        { status: 409 }
      )
    }

    // Prepare the data
    const propertyData = {
      title: body.title,
      slug,
      address: body.address,
      city: body.city || 'Amsterdam',
      neighborhood: body.neighborhood || null,
      price,
      bedrooms,
      bathrooms,
      area,
      description: body.description || '',
      features: Array.isArray(body.features) ? body.features : [],
      images: Array.isArray(body.images) ? body.images : [],
      available: body.available ?? true,
      featured: body.featured ?? false,
      publishedAt: body.published ? new Date() : null,
    }

    console.log('Prepared property data:', JSON.stringify(propertyData, null, 2))

    // Create the property
    const property = await prisma.property.create({
      data: propertyData,
    })

    console.log('Property created successfully:', property.id)
    return NextResponse.json(property, { status: 201 })

  } catch (error) {
    console.error('Error creating property:', error)

    // Extract detailed error information
    let errorMessage = 'Unknown error'
    let errorCode = 'UNKNOWN'

    if (error instanceof Error) {
      errorMessage = error.message

      // Check for Prisma-specific errors
      if ('code' in error) {
        errorCode = (error as { code: string }).code
      }
    }

    // Log the full error for debugging
    console.error('Full error details:', {
      message: errorMessage,
      code: errorCode,
      stack: error instanceof Error ? error.stack : undefined,
    })

    return NextResponse.json(
      {
        error: 'Failed to create property',
        details: errorMessage,
        code: errorCode,
      },
      { status: 500 }
    )
  }
}
