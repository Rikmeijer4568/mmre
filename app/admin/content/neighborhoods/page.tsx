'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowLeft, Plus, Edit2, Trash2, GripVertical, Save, X } from 'lucide-react'

// In production, this would come from the database
const initialNeighborhoods = [
  { id: '1', slug: 'jordaan', name: 'Jordaan', description: 'Charming canals, boutique shops, and cafes', order: 0, isPublished: true },
  { id: '2', slug: 'de-pijp', name: 'De Pijp', description: 'Diverse, trendy, and full of life', order: 1, isPublished: true },
  { id: '3', slug: 'oud-zuid', name: 'Oud-Zuid', description: 'Elegant streets and museums', order: 2, isPublished: true },
  { id: '4', slug: 'centrum', name: 'Centrum', description: 'Historic heart of Amsterdam', order: 3, isPublished: true },
  { id: '5', slug: 'amsterdam-west', name: 'Amsterdam West', description: 'Creative, diverse, and up-and-coming', order: 4, isPublished: true },
  { id: '6', slug: 'amsterdam-oost', name: 'Amsterdam Oost', description: 'Green, family-friendly, and diverse', order: 5, isPublished: true },
  { id: '7', slug: 'amsterdam-noord', name: 'Amsterdam Noord', description: 'Creative frontier with space', order: 6, isPublished: true },
  { id: '8', slug: 'amstelveen', name: 'Amstelveen', description: 'Quiet suburb with international appeal', order: 7, isPublished: true },
]

interface Neighborhood {
  id: string
  slug: string
  name: string
  description: string
  order: number
  isPublished: boolean
}

export default function NeighborhoodsAdminPage() {
  const [neighborhoods, setNeighborhoods] = useState<Neighborhood[]>(initialNeighborhoods)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editForm, setEditForm] = useState({ name: '', slug: '', description: '' })

  const startEdit = (neighborhood: Neighborhood) => {
    setEditingId(neighborhood.id)
    setEditForm({
      name: neighborhood.name,
      slug: neighborhood.slug,
      description: neighborhood.description,
    })
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditForm({ name: '', slug: '', description: '' })
  }

  const saveEdit = (id: string) => {
    setNeighborhoods(neighborhoods.map(n =>
      n.id === id ? { ...n, ...editForm } : n
    ))
    setEditingId(null)
    // In production, this would save to the database
  }

  const togglePublished = (id: string) => {
    setNeighborhoods(neighborhoods.map(n =>
      n.id === id ? { ...n, isPublished: !n.isPublished } : n
    ))
    // In production, this would save to the database
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/content">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900">Neighborhoods</h1>
          <p className="text-gray-600 mt-1">Manage neighborhood pages and content</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Neighborhood
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="divide-y">
            {neighborhoods.map((neighborhood) => (
              <div key={neighborhood.id} className="p-4 hover:bg-gray-50">
                {editingId === neighborhood.id ? (
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Name
                        </label>
                        <Input
                          value={editForm.name}
                          onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Slug (URL)
                        </label>
                        <Input
                          value={editForm.slug}
                          onChange={(e) => setEditForm({ ...editForm, slug: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                      </label>
                      <Textarea
                        value={editForm.description}
                        onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                        rows={2}
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => saveEdit(neighborhood.id)}>
                        <Save className="mr-2 h-4 w-4" />
                        Save
                      </Button>
                      <Button size="sm" variant="outline" onClick={cancelEdit}>
                        <X className="mr-2 h-4 w-4" />
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-4">
                    <GripVertical className="h-5 w-5 text-gray-400 cursor-grab" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-gray-900">{neighborhood.name}</h3>
                        {!neighborhood.isPublished && (
                          <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded">
                            Draft
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{neighborhood.description}</p>
                      <p className="text-xs text-gray-400 mt-1">/neighborhoods/{neighborhood.slug}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => togglePublished(neighborhood.id)}
                      >
                        {neighborhood.isPublished ? 'Unpublish' : 'Publish'}
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => startEdit(neighborhood)}
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardContent className="p-4">
          <p className="text-sm text-gray-600">
            <strong>Tip:</strong> Drag neighborhoods to reorder them. The order determines how they
            appear on the website. Changes are saved automatically.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
