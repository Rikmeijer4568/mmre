import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, MessageSquare, HelpCircle, FileText, Settings, Grid } from 'lucide-react'

const contentSections = [
  {
    name: 'Neighborhoods',
    description: 'Manage neighborhood pages and content',
    href: '/admin/content/neighborhoods',
    icon: MapPin,
    count: '8 neighborhoods',
  },
  {
    name: 'Testimonials',
    description: 'Manage client testimonials and chat conversations',
    href: '/admin/content/testimonials',
    icon: MessageSquare,
    count: '3 testimonials',
  },
  {
    name: 'FAQ',
    description: 'Manage frequently asked questions',
    href: '/admin/content/faq',
    icon: HelpCircle,
    count: '15 questions',
  },
  {
    name: 'Services',
    description: 'Manage service cards on Rent Out page',
    href: '/admin/content/services',
    icon: Grid,
    count: '8 services',
  },
  {
    name: 'Downloads',
    description: 'Manage downloadable files (PDFs)',
    href: '/admin/content/downloads',
    icon: FileText,
    count: '1 file',
  },
  {
    name: 'Page Content',
    description: 'Edit headlines, text, and CTAs',
    href: '/admin/content/pages',
    icon: Settings,
    count: '8 pages',
  },
]

export default function ContentPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Content Management</h1>
        <p className="text-gray-600 mt-1">Manage all website content</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contentSections.map((section) => (
          <Link key={section.name} href={section.href}>
            <Card className="h-full hover:shadow-md transition-shadow cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                    <section.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-accent transition-colors">
                      {section.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{section.description}</p>
                    <p className="text-xs text-gray-400 mt-2">{section.count}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Quick Tips */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Content Management Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Changes to content are saved immediately but may take a moment to appear on the site</li>
            <li>• Use the preview function before publishing major changes</li>
            <li>• Images should be optimized for web (recommended max 500KB)</li>
            <li>• Keep headlines concise and action-oriented</li>
            <li>• FAQ answers should be clear and helpful</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
