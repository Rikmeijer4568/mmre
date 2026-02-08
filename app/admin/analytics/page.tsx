'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MessageCircle, Download, FileText, Mail, TrendingUp } from 'lucide-react'

interface AnalyticsSummary {
  whatsapp_click: number
  pdf_download: number
  contact_form_submit: number
  calculator_submit: number
  newsletter_subscribe: number
}

export default function AnalyticsPage() {
  const [summary, setSummary] = useState<AnalyticsSummary>({
    whatsapp_click: 0,
    pdf_download: 0,
    contact_form_submit: 0,
    calculator_submit: 0,
    newsletter_subscribe: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await fetch('/api/analytics')
        const data = await response.json()
        setSummary(data.summary || summary)
      } catch (error) {
        console.error('Failed to fetch analytics:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchAnalytics()
  }, [])

  const metrics = [
    {
      name: 'WhatsApp Clicks',
      value: summary.whatsapp_click,
      icon: MessageCircle,
      color: 'bg-green-100 text-green-700',
      description: 'Total clicks on WhatsApp buttons',
    },
    {
      name: 'Calculator Submits',
      value: summary.calculator_submit,
      icon: TrendingUp,
      color: 'bg-blue-100 text-blue-700',
      description: 'Rental calculator form submissions',
    },
    {
      name: 'Contact Forms',
      value: summary.contact_form_submit,
      icon: FileText,
      color: 'bg-purple-100 text-purple-700',
      description: 'Contact form submissions',
    },
    {
      name: 'PDF Downloads',
      value: summary.pdf_download,
      icon: Download,
      color: 'bg-orange-100 text-orange-700',
      description: 'Amsterdam Rental Guide downloads',
    },
    {
      name: 'Newsletter Signups',
      value: summary.newsletter_subscribe,
      icon: Mail,
      color: 'bg-pink-100 text-pink-700',
      description: 'Newsletter subscriptions',
    },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600 mt-1">Track conversions and user engagement</p>
      </div>

      {loading ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(5)].map((_, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="animate-pulse">
                  <div className="h-10 w-10 bg-gray-200 rounded-lg mb-4" />
                  <div className="h-8 w-20 bg-gray-200 rounded mb-2" />
                  <div className="h-4 w-32 bg-gray-200 rounded" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <>
          {/* Metrics Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {metrics.map((metric) => (
              <Card key={metric.name}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-gray-500">{metric.name}</p>
                      <p className="text-4xl font-bold text-gray-900 mt-2">{metric.value}</p>
                      <p className="text-xs text-gray-400 mt-2">{metric.description}</p>
                    </div>
                    <div className={`p-3 rounded-lg ${metric.color}`}>
                      <metric.icon className="h-6 w-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Conversion Funnel */}
          <Card>
            <CardHeader>
              <CardTitle>Conversion Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>WhatsApp Clicks (Primary CTA)</span>
                    <span className="font-medium">{summary.whatsapp_click}</span>
                  </div>
                  <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500 rounded-full transition-all"
                      style={{
                        width: `${Math.min(100, (summary.whatsapp_click / Math.max(1, Object.values(summary).reduce((a, b) => a + b, 0))) * 100)}%`,
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Calculator Submissions</span>
                    <span className="font-medium">{summary.calculator_submit}</span>
                  </div>
                  <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full transition-all"
                      style={{
                        width: `${Math.min(100, (summary.calculator_submit / Math.max(1, Object.values(summary).reduce((a, b) => a + b, 0))) * 100)}%`,
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Contact Form Submissions</span>
                    <span className="font-medium">{summary.contact_form_submit}</span>
                  </div>
                  <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-500 rounded-full transition-all"
                      style={{
                        width: `${Math.min(100, (summary.contact_form_submit / Math.max(1, Object.values(summary).reduce((a, b) => a + b, 0))) * 100)}%`,
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>PDF Downloads</span>
                    <span className="font-medium">{summary.pdf_download}</span>
                  </div>
                  <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-orange-500 rounded-full transition-all"
                      style={{
                        width: `${Math.min(100, (summary.pdf_download / Math.max(1, Object.values(summary).reduce((a, b) => a + b, 0))) * 100)}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card className="mt-6">
            <CardContent className="p-6">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Analytics data is collected automatically when users interact
                with forms and WhatsApp buttons. For more detailed analytics, consider integrating
                Google Analytics or a similar service.
              </p>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}
