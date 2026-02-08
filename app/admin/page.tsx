import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, TrendingUp, MessageCircle, FileText } from 'lucide-react'
import Link from 'next/link'

// In production, these would come from the database
const stats = [
  { name: 'Total Leads', value: '0', icon: Users, href: '/admin/leads', change: '+0 this week' },
  { name: 'WhatsApp Clicks', value: '0', icon: MessageCircle, href: '/admin/analytics', change: '+0 this week' },
  { name: 'Calculator Submits', value: '0', icon: TrendingUp, href: '/admin/analytics', change: '+0 this week' },
  { name: 'PDF Downloads', value: '0', icon: FileText, href: '/admin/analytics', change: '+0 this week' },
]

const recentLeads = [
  // Would be populated from database
]

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome to the MMRE admin panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Link key={stat.name} href={stat.href}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{stat.name}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    <p className="text-sm text-green-600 mt-1">{stat.change}</p>
                  </div>
                  <div className="w-12 h-12 bg-highlight rounded-lg flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-accent" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Recent Leads */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Leads</CardTitle>
        </CardHeader>
        <CardContent>
          {recentLeads.length === 0 ? (
            <div className="text-center py-12">
              <Users className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No leads yet</p>
              <p className="text-sm text-gray-400 mt-1">
                Leads will appear here once visitors submit forms
              </p>
            </div>
          ) : (
            <div className="divide-y">
              {/* Lead rows would go here */}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/admin/leads">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4 flex items-center gap-3">
                <Users className="h-5 w-5 text-accent" />
                <span className="font-medium">View All Leads</span>
              </CardContent>
            </Card>
          </Link>
          <Link href="/admin/content">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4 flex items-center gap-3">
                <FileText className="h-5 w-5 text-accent" />
                <span className="font-medium">Edit Content</span>
              </CardContent>
            </Card>
          </Link>
          <Link href="/admin/analytics">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4 flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-accent" />
                <span className="font-medium">View Analytics</span>
              </CardContent>
            </Card>
          </Link>
          <Link href="/admin/settings">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4 flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-accent" />
                <span className="font-medium">Settings</span>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
