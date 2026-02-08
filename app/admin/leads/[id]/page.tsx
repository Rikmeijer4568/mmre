'use client'

import { useState, useEffect, use } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import {
  ArrowLeft,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Home,
  User,
  MessageSquare,
  Clock,
  Loader2,
} from 'lucide-react'

interface Lead {
  id: string
  name: string
  email: string
  phone: string | null
  leadType: string
  source: string
  sourcePage: string | null
  status: string
  address: string | null
  city: string | null
  propertyType: string | null
  size: number | null
  bedrooms: number | null
  furnished: boolean | null
  availableFrom: string | null
  desiredRent: number | null
  estimatedRent: string | null
  createdAt: string
  updatedAt: string
  assignedTo: { id: string; name: string; email: string } | null
  notes: Array<{
    id: string
    content: string
    createdAt: string
    author: { id: string; name: string }
  }>
  events: Array<{
    id: string
    type: string
    details: string | null
    createdAt: string
  }>
}

const statusColors: Record<string, string> = {
  NEW: 'bg-blue-100 text-blue-700',
  CONTACTED: 'bg-yellow-100 text-yellow-700',
  IN_PROGRESS: 'bg-purple-100 text-purple-700',
  WON: 'bg-green-100 text-green-700',
  LOST: 'bg-gray-100 text-gray-700',
}

export default function LeadDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const [lead, setLead] = useState<Lead | null>(null)
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState(false)
  const [newNote, setNewNote] = useState('')
  const [addingNote, setAddingNote] = useState(false)

  const fetchLead = async () => {
    try {
      const response = await fetch(`/api/leads/${id}`)
      if (!response.ok) throw new Error('Lead not found')
      const data = await response.json()
      setLead(data)
    } catch (error) {
      console.error('Failed to fetch lead:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLead()
  }, [id])

  const updateStatus = async (newStatus: string) => {
    if (!lead) return
    setUpdating(true)
    try {
      const response = await fetch(`/api/leads/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      })
      if (response.ok) {
        await fetchLead()
      }
    } catch (error) {
      console.error('Failed to update status:', error)
    } finally {
      setUpdating(false)
    }
  }

  const addNote = async () => {
    if (!newNote.trim()) return
    setAddingNote(true)
    try {
      const response = await fetch(`/api/leads/${id}/notes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: newNote }),
      })
      if (response.ok) {
        setNewNote('')
        await fetchLead()
      }
    } catch (error) {
      console.error('Failed to add note:', error)
    } finally {
      setAddingNote(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-accent" />
      </div>
    )
  }

  if (!lead) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Lead not found</p>
        <Button className="mt-4" onClick={() => router.back()}>
          Go Back
        </Button>
      </div>
    )
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/leads">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900">{lead.name}</h1>
          <p className="text-gray-600">{lead.email}</p>
        </div>
        <span
          className={cn(
            'px-3 py-1 rounded-full text-sm font-medium',
            statusColors[lead.status]
          )}
        >
          {lead.status}
        </span>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Contact Info */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href={`mailto:${lead.email}`} className="text-accent hover:underline">
                      {lead.email}
                    </a>
                  </div>
                </div>
                {lead.phone && (
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <a href={`tel:${lead.phone}`} className="text-accent hover:underline">
                        {lead.phone}
                      </a>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Type</p>
                    <p>{lead.leadType}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Created</p>
                    <p>{new Date(lead.createdAt).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Property Info (for calculator leads) */}
          {lead.source === 'RENT_OUT_CALCULATOR' && (
            <Card>
              <CardHeader>
                <CardTitle>Property Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {lead.address && (
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Address</p>
                        <p>{lead.address}</p>
                        {lead.city && <p className="text-sm text-gray-600">{lead.city}</p>}
                      </div>
                    </div>
                  )}
                  {lead.propertyType && (
                    <div className="flex items-start gap-3">
                      <Home className="h-5 w-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Property</p>
                        <p>{lead.propertyType}</p>
                        {lead.size && <p className="text-sm text-gray-600">{lead.size} m²</p>}
                        {lead.bedrooms && <p className="text-sm text-gray-600">{lead.bedrooms} bedrooms</p>}
                      </div>
                    </div>
                  )}
                  {lead.furnished !== null && (
                    <div>
                      <p className="text-sm text-gray-500">Furnished</p>
                      <p>{lead.furnished ? 'Yes' : 'No'}</p>
                    </div>
                  )}
                  {lead.availableFrom && (
                    <div>
                      <p className="text-sm text-gray-500">Available From</p>
                      <p>{new Date(lead.availableFrom).toLocaleDateString()}</p>
                    </div>
                  )}
                  {lead.estimatedRent && (
                    <div className="sm:col-span-2 p-4 bg-primary-50 rounded-lg">
                      <p className="text-sm text-accent font-medium">Estimated Rent</p>
                      <p className="text-xl font-bold text-primary-900">{lead.estimatedRent}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Notes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Notes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                {lead.notes.length === 0 ? (
                  <p className="text-gray-500 text-sm">No notes yet</p>
                ) : (
                  lead.notes.map((note) => (
                    <div key={note.id} className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-700">{note.content}</p>
                      <p className="text-xs text-gray-400 mt-2">
                        {note.author.name} - {new Date(note.createdAt).toLocaleString()}
                      </p>
                    </div>
                  ))
                )}
              </div>
              <div className="space-y-3">
                <Textarea
                  placeholder="Add a note..."
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  rows={3}
                />
                <Button onClick={addNote} disabled={addingNote || !newNote.trim()}>
                  {addingNote ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Adding...
                    </>
                  ) : (
                    'Add Note'
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <Select
                  value={lead.status}
                  onChange={(e) => updateStatus(e.target.value)}
                  disabled={updating}
                >
                  <option value="NEW">New</option>
                  <option value="CONTACTED">Contacted</option>
                  <option value="IN_PROGRESS">In Progress</option>
                  <option value="WON">Won</option>
                  <option value="LOST">Lost</option>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Assigned To
                </label>
                <p className="text-gray-600">{lead.assignedTo?.name || 'Unassigned'}</p>
              </div>
            </CardContent>
          </Card>

          {/* Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {lead.events.map((event) => (
                  <div key={event.id} className="flex gap-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2" />
                    <div>
                      <p className="text-sm text-gray-700">{event.details || event.type}</p>
                      <p className="text-xs text-gray-400">
                        {new Date(event.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Source Info */}
          <Card>
            <CardHeader>
              <CardTitle>Source</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <p className="text-sm text-gray-500">Source</p>
                <p className="font-medium">{lead.source}</p>
              </div>
              {lead.sourcePage && (
                <div>
                  <p className="text-sm text-gray-500">Page</p>
                  <p className="text-sm text-gray-600 break-all">{lead.sourcePage}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
