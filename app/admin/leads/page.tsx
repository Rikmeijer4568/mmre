'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { cn } from '@/lib/utils'
import {
  Search,
  Filter,
  Download,
  ChevronLeft,
  ChevronRight,
  User,
  Mail,
  Phone,
  Calendar,
} from 'lucide-react'

interface Lead {
  id: string
  name: string
  email: string
  phone: string | null
  leadType: string
  source: string
  status: string
  createdAt: string
  assignedTo: { id: string; name: string; email: string } | null
  _count: { notes: number }
}

interface Pagination {
  page: number
  limit: number
  total: number
  totalPages: number
}

const statusColors: Record<string, string> = {
  NEW: 'bg-blue-100 text-blue-700',
  CONTACTED: 'bg-yellow-100 text-yellow-700',
  IN_PROGRESS: 'bg-purple-100 text-purple-700',
  WON: 'bg-green-100 text-green-700',
  LOST: 'bg-gray-100 text-gray-700',
}

const sourceLabels: Record<string, string> = {
  RENT_IN_WHATSAPP: 'Rent In - WhatsApp',
  RENT_IN_PDF: 'Rent In - PDF Download',
  RENT_OUT_CALCULATOR: 'Rent Out - Calculator',
  CONTACT_FORM: 'Contact Form',
  NEWSLETTER: 'Newsletter',
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 0,
  })
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    status: '',
    source: '',
    search: '',
  })

  const fetchLeads = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
        ...(filters.status && { status: filters.status }),
        ...(filters.source && { source: filters.source }),
      })
      const response = await fetch(`/api/leads?${params}`)
      const data = await response.json()
      setLeads(data.leads || [])
      setPagination(data.pagination || pagination)
    } catch (error) {
      console.error('Failed to fetch leads:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLeads()
  }, [pagination.page, filters.status, filters.source])

  const exportCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Type', 'Source', 'Status', 'Created']
    const rows = leads.map((lead) => [
      lead.name,
      lead.email,
      lead.phone || '',
      lead.leadType,
      lead.source,
      lead.status,
      new Date(lead.createdAt).toLocaleDateString(),
    ])
    const csv = [headers, ...rows].map((row) => row.join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `leads-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Leads</h1>
          <p className="text-gray-600 mt-1">{pagination.total} total leads</p>
        </div>
        <Button onClick={exportCSV}>
          <Download className="mr-2 h-4 w-4" />
          Export CSV
        </Button>
      </div>

      {/* Filters */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by name or email..."
                  value={filters.search}
                  onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                  className="pl-10"
                />
              </div>
            </div>
            <Select
              value={filters.status}
              onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            >
              <option value="">All Statuses</option>
              <option value="NEW">New</option>
              <option value="CONTACTED">Contacted</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="WON">Won</option>
              <option value="LOST">Lost</option>
            </Select>
            <Select
              value={filters.source}
              onChange={(e) => setFilters({ ...filters, source: e.target.value })}
            >
              <option value="">All Sources</option>
              <option value="RENT_IN_PDF">PDF Download</option>
              <option value="RENT_OUT_CALCULATOR">Calculator</option>
              <option value="CONTACT_FORM">Contact Form</option>
              <option value="NEWSLETTER">Newsletter</option>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Leads Table */}
      <Card>
        <CardContent className="p-0">
          {loading ? (
            <div className="p-12 text-center">
              <div className="animate-spin h-8 w-8 border-4 border-highlight border-t-accent rounded-full mx-auto" />
              <p className="text-gray-500 mt-4">Loading leads...</p>
            </div>
          ) : leads.length === 0 ? (
            <div className="p-12 text-center">
              <User className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No leads found</p>
              <p className="text-sm text-gray-400 mt-1">
                Leads will appear here once visitors submit forms
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Contact</th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Source</th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Status</th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Assigned</th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <Link href={`/admin/leads/${lead.id}`} className="block">
                          <p className="font-medium text-gray-900 hover:text-accent">
                            {lead.name}
                          </p>
                          <p className="text-sm text-gray-500 flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {lead.email}
                          </p>
                          {lead.phone && (
                            <p className="text-sm text-gray-500 flex items-center gap-1">
                              <Phone className="h-3 w-3" />
                              {lead.phone}
                            </p>
                          )}
                        </Link>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600">
                          {sourceLabels[lead.source] || lead.source}
                        </span>
                        <p className="text-xs text-gray-400 mt-1">{lead.leadType}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={cn(
                            'inline-block px-2 py-1 rounded-full text-xs font-medium',
                            statusColors[lead.status]
                          )}
                        >
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600">
                          {lead.assignedTo?.name || 'Unassigned'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600 flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(lead.createdAt).toLocaleDateString()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <div className="flex items-center justify-between px-6 py-4 border-t">
              <p className="text-sm text-gray-600">
                Showing {(pagination.page - 1) * pagination.limit + 1} to{' '}
                {Math.min(pagination.page * pagination.limit, pagination.total)} of{' '}
                {pagination.total}
              </p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={pagination.page === 1}
                  onClick={() => setPagination({ ...pagination, page: pagination.page - 1 })}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={pagination.page === pagination.totalPages}
                  onClick={() => setPagination({ ...pagination, page: pagination.page + 1 })}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
