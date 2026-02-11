import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

type RouteContext = {
  params: Promise<{ id: string }>
}

// GET /api/properties/[id] - Get a single property
export async function GET(
  request: NextRequest,
  context: RouteContext
) {
  try {
    const { id } = await context.params

    const property = await prisma.property.findUnique({
      where: { id },
    })

    if (!property) {
      return NextResponse.json(
        { error: 'Property not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(property)
  } catch (error) {
    console.error('Error fetching property:', error)
    return NextResponse.json(
      { error: 'Failed to fetch property' },
      { status: 500 }
    )
  }
}

// PATCH /api/properties/[id] - Update a property
export async function PATCH(
  request: NextRequest,
  context: RouteContext
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await context.params
    const body = await request.json()

    // Build update data
    const updateData: Record<string, unknown> = {}

    if (body.title !== undefined) updateData.title = body.title
    if (body.slug !== undefined) updateData.slug = body.slug
    if (body.address !== undefined) updateData.address = body.address
    if (body.city !== undefined) updateData.city = body.city
    if (body.neighborhood !== undefined) updateData.neighborhood = body.neighborhood
    if (body.price !== undefined) updateData.price = parseInt(body.price)
    if (body.bedrooms !== undefined) updateData.bedrooms = parseInt(body.bedrooms)
    if (body.bathrooms !== undefined) updateData.bathrooms = parseInt(body.bathrooms)
    if (body.area !== undefined) updateData.area = parseInt(body.area)
    if (body.description !== undefined) updateData.description = body.description
    if (body.features !== undefined) updateData.features = body.features
    if (body.images !== undefined) updateData.images = body.images
    if (body.available !== undefined) updateData.available = body.available
    if (body.featured !== undefined) updateData.featured = body.featured

    // Handle publish/unpublish
    if (body.published === true) {
      updateData.publishedAt = new Date()
    } else if (body.published === false) {
      updateData.publishedAt = null
    }

    const property = await prisma.property.update({
      where: { id },
      data: updateData,
    })

    return NextResponse.json(property)
  } catch (error) {
    console.error('Error updating property:', error)
    return NextResponse.json(
      { error: 'Failed to update property' },
      { status: 500 }
    )
  }
}

// DELETE /api/properties/[id] - Delete a property
export async function DELETE(
  request: NextRequest,
  context: RouteContext
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await context.params

    await prisma.property.delete({
      where: { id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting property:', error)
    return NextResponse.json(
      { error: 'Failed to delete property' },
      { status: 500 }
    )
  }
}
