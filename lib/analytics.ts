'use server'

import { prisma } from './prisma'

export type AnalyticsEventType =
  | 'whatsapp_click'
  | 'pdf_download'
  | 'contact_form_submit'
  | 'calculator_submit'
  | 'newsletter_subscribe'

export async function trackEvent(
  type: AnalyticsEventType,
  page: string,
  metadata?: Record<string, unknown>
) {
  try {
    await prisma.analyticsEvent.create({
      data: {
        type,
        page,
        metadata: metadata ? JSON.stringify(metadata) : null,
      },
    })
  } catch (error) {
    console.error('Failed to track event:', error)
  }
}

export async function getAnalytics(startDate?: Date, endDate?: Date) {
  const where = {
    ...(startDate && endDate && {
      createdAt: {
        gte: startDate,
        lte: endDate,
      },
    }),
  }

  const events = await prisma.analyticsEvent.groupBy({
    by: ['type'],
    _count: true,
    where,
  })

  return events.reduce((acc, event) => {
    acc[event.type] = event._count
    return acc
  }, {} as Record<string, number>)
}
