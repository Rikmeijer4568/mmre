import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Resend } from 'resend'

// Lazy initialize Resend only when needed
const getResend = () => {
  if (!process.env.RESEND_API_KEY) return null
  return new Resend(process.env.RESEND_API_KEY)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      phone,
      message,
      leadType,
      source,
      // Calculator fields
      address,
      city,
      propertyType,
      size,
      bedrooms,
      furnished,
      availableFrom,
      desiredRent,
      estimatedRent,
    } = body

    // Validate required fields
    if (!name || !email || !leadType || !source) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create lead
    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        phone,
        leadType,
        source,
        sourcePage: request.headers.get('referer') || undefined,
        address,
        city,
        propertyType,
        size: size ? parseInt(size) : undefined,
        bedrooms: bedrooms ? parseInt(bedrooms) : undefined,
        furnished: furnished === 'yes',
        availableFrom: availableFrom ? new Date(availableFrom) : undefined,
        desiredRent: desiredRent ? parseInt(desiredRent) : undefined,
        estimatedRent,
      },
    })

    // Create event
    await prisma.leadEvent.create({
      data: {
        type: 'created',
        details: `Lead created from ${source}`,
        leadId: lead.id,
      },
    })

    // Send email notification
    const resend = getResend()
    if (resend && process.env.NOTIFICATION_EMAIL) {
      try {
        await resend.emails.send({
          from: 'MMRE <notifications@mmre.nl>',
          to: process.env.NOTIFICATION_EMAIL,
          subject: `New Lead: ${name} (${source})`,
          html: `
            <h2>New Lead Received</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Type:</strong> ${leadType}</p>
            <p><strong>Source:</strong> ${source}</p>
            ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
            ${address ? `<p><strong>Address:</strong> ${address}</p>` : ''}
            ${city ? `<p><strong>City:</strong> ${city}</p>` : ''}
            ${estimatedRent ? `<p><strong>Estimated Rent:</strong> ${estimatedRent}</p>` : ''}
            <p><a href="${process.env.NEXTAUTH_URL}/admin/leads/${lead.id}">View in CRM</a></p>
          `,
        })
      } catch (emailError) {
        console.error('Failed to send notification email:', emailError)
      }
    }

    // Track analytics
    await prisma.analyticsEvent.create({
      data: {
        type: source === 'RENT_OUT_CALCULATOR' ? 'calculator_submit' : 'contact_form_submit',
        page: request.headers.get('referer') || 'unknown',
        metadata: JSON.stringify({ leadId: lead.id, source }),
      },
    })

    return NextResponse.json({ success: true, leadId: lead.id })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    const errorStack = error instanceof Error ? error.stack : undefined

    console.error('Failed to create lead:', {
      message: errorMessage,
      stack: errorStack,
      error: error,
    })

    // In development, return detailed error info
    const isDev = process.env.NODE_ENV === 'development'
    return NextResponse.json(
      {
        error: 'Failed to create lead',
        ...(isDev && {
          details: errorMessage,
          stack: errorStack
        })
      },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const source = searchParams.get('source')
    const leadType = searchParams.get('leadType')
    const assignedTo = searchParams.get('assignedTo')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')

    const where = {
      ...(status && { status: status as never }),
      ...(source && { source: source as never }),
      ...(leadType && { leadType: leadType as never }),
      ...(assignedTo && { assignedToId: assignedTo }),
    }

    const [leads, total] = await Promise.all([
      prisma.lead.findMany({
        where,
        include: {
          assignedTo: {
            select: { id: true, name: true, email: true },
          },
          _count: {
            select: { notes: true },
          },
        },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.lead.count({ where }),
    ])

    return NextResponse.json({
      leads,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    const errorStack = error instanceof Error ? error.stack : undefined

    console.error('Failed to fetch leads:', {
      message: errorMessage,
      stack: errorStack,
      error: error,
    })

    const isDev = process.env.NODE_ENV === 'development'
    return NextResponse.json(
      {
        error: 'Failed to fetch leads',
        ...(isDev && {
          details: errorMessage,
          stack: errorStack
        })
      },
      { status: 500 }
    )
  }
}
