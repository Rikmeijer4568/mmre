import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { name, email, downloadId } = await request.json()

    if (!email || !downloadId) {
      return NextResponse.json({ error: 'Email and downloadId are required' }, { status: 400 })
    }

    // Create lead for download
    await prisma.lead.create({
      data: {
        name: name || email.split('@')[0],
        email,
        leadType: 'TENANT',
        source: 'RENT_IN_PDF',
        sourcePage: request.headers.get('referer') || undefined,
      },
    })

    // Track analytics
    await prisma.analyticsEvent.create({
      data: {
        type: 'pdf_download',
        page: request.headers.get('referer') || 'unknown',
        metadata: JSON.stringify({ downloadId }),
      },
    })

    // In a real app, you might:
    // 1. Send an email with the download link
    // 2. Return a signed URL for the download
    // For now, we'll just return success

    return NextResponse.json({
      success: true,
      downloadUrl: `/downloads/${downloadId}.pdf`,
    })
  } catch (error) {
    console.error('Failed to process download:', error)
    return NextResponse.json(
      { error: 'Failed to process download' },
      { status: 500 }
    )
  }
}
