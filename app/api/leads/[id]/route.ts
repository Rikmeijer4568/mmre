import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

type RouteContext = {
  params: Promise<{ id: string }>
}

export async function GET(request: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params

    const lead = await prisma.lead.findUnique({
      where: { id },
      include: {
        assignedTo: {
          select: { id: true, name: true, email: true },
        },
        notes: {
          include: {
            author: {
              select: { id: true, name: true },
            },
          },
          orderBy: { createdAt: 'desc' },
        },
        events: {
          orderBy: { createdAt: 'desc' },
        },
      },
    })

    if (!lead) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 })
    }

    return NextResponse.json(lead)
  } catch (error) {
    console.error('Failed to fetch lead:', error)
    return NextResponse.json(
      { error: 'Failed to fetch lead' },
      { status: 500 }
    )
  }
}

export async function PATCH(request: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params
    const body = await request.json()
    const { status, assignedToId } = body

    const lead = await prisma.lead.findUnique({ where: { id } })
    if (!lead) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 })
    }

    const updates: Record<string, unknown> = {}
    const events: { type: string; details: string }[] = []

    if (status && status !== lead.status) {
      updates.status = status
      events.push({
        type: 'status_change',
        details: `Status changed from ${lead.status} to ${status}`,
      })
    }

    if (assignedToId !== undefined && assignedToId !== lead.assignedToId) {
      updates.assignedToId = assignedToId || null
      events.push({
        type: 'assigned',
        details: assignedToId ? `Lead assigned to user ${assignedToId}` : 'Lead unassigned',
      })
    }

    const updatedLead = await prisma.lead.update({
      where: { id },
      data: updates,
      include: {
        assignedTo: {
          select: { id: true, name: true, email: true },
        },
      },
    })

    // Create events
    for (const event of events) {
      await prisma.leadEvent.create({
        data: {
          ...event,
          leadId: id,
        },
      })
    }

    return NextResponse.json(updatedLead)
  } catch (error) {
    console.error('Failed to update lead:', error)
    return NextResponse.json(
      { error: 'Failed to update lead' },
      { status: 500 }
    )
  }
}
