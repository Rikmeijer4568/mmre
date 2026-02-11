'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ImageUploader } from '@/components/admin/ImageUploader'
import {
  ArrowLeft,
  Plus,
  Edit2,
  Trash2,
  Save,
  X,
  Eye,
  EyeOff,
  Star,
  StarOff,
  Home,
  Bed,
  Bath,
  Maximize,
  MapPin,
  Euro,
  Loader2,
} from 'lucide-react'

interface Property {
  id: string
  title: string
  slug: string
  address: string
  city: string
  neighborhood: string | null
  price: number
  bedrooms: number
  bathrooms: number
  area: number
  description: string
  features: string[]
  images: string[]
  available: boolean
  featured: boolean
  publishedAt: string | null
  createdAt: string
  updatedAt: string
}

interface PropertyForm {
  title: string
  slug: string
  address: string
  city: string
  neighborhood: string
  price: string
  bedrooms: string
  bathrooms: string
  area: string
  description: string
  features: string
  images: string[]
  available: boolean
  featured: boolean
  published: boolean
}

const emptyForm: PropertyForm = {
  title: '',
  slug: '',
  address: '',
  city: 'Amsterdam',
  neighborhood: '',
  price: '',
  bedrooms: '',
  bathrooms: '',
  area: '',
  description: '',
  features: '',
  images: [],
  available: true,
  featured: false,
  published: false,
}

export default function AanbodAdminPage() {
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [isCreating, setIsCreating] = useState(false)
  const [form, setForm] = useState<PropertyForm>(emptyForm)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchProperties()
  }, [])

  const fetchProperties = async () => {
    try {
      const res = await fetch('/api/properties')
      if (!res.ok) throw new Error('Failed to fetch')
      const data = await res.json()
      setProperties(data)
    } catch {
      setError('Failed to load properties')
    } finally {
      setLoading(false)
    }
  }

  const propertyToForm = (property: Property): PropertyForm => ({
    title: property.title,
    slug: property.slug,
    address: property.address,
    city: property.city,
    neighborhood: property.neighborhood || '',
    price: property.price.toString(),
    bedrooms: property.bedrooms.toString(),
    bathrooms: property.bathrooms.toString(),
    area: property.area.toString(),
    description: property.description,
    features: property.features.join('\n'),
    images: property.images,
    available: property.available,
    featured: property.featured,
    published: property.publishedAt !== null,
  })

  const startEdit = (property: Property) => {
    setEditingId(property.id)
    setForm(propertyToForm(property))
    setIsCreating(false)
  }

  const startCreate = () => {
    setIsCreating(true)
    setEditingId(null)
    setForm(emptyForm)
  }

  const cancelEdit = () => {
    setEditingId(null)
    setIsCreating(false)
    setForm(emptyForm)
    setError(null)
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }

  const handleTitleChange = (value: string) => {
    setForm({
      ...form,
      title: value,
      slug: isCreating ? generateSlug(value) : form.slug,
    })
  }

  const saveProperty = async () => {
    if (!form.title || !form.address || !form.price) {
      setError('Title, address, and price are required')
      return
    }

    setSaving(true)
    setError(null)

    try {
      const payload = {
        title: form.title,
        slug: form.slug || generateSlug(form.title),
        address: form.address,
        city: form.city,
        neighborhood: form.neighborhood || null,
        price: form.price,
        bedrooms: form.bedrooms || '0',
        bathrooms: form.bathrooms || '0',
        area: form.area || '0',
        description: form.description,
        features: form.features.split('\n').filter(f => f.trim()),
        images: form.images,
        available: form.available,
        featured: form.featured,
        published: form.published,
      }

      if (isCreating) {
        const res = await fetch('/api/properties', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}))
          const errorMsg = errorData.details || errorData.error || 'Failed to create property'
          throw new Error(errorMsg)
        }
      } else if (editingId) {
        const res = await fetch(`/api/properties/${editingId}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}))
          const errorMsg = errorData.details || errorData.error || 'Failed to update property'
          throw new Error(errorMsg)
        }
      }

      await fetchProperties()
      cancelEdit()
    } catch (err) {
      console.error('Save error:', err)
      setError(err instanceof Error ? err.message : 'Failed to save property')
    } finally {
      setSaving(false)
    }
  }

  const deleteProperty = async (id: string) => {
    if (!confirm('Are you sure you want to delete this property?')) return

    try {
      const res = await fetch(`/api/properties/${id}`, { method: 'DELETE' })
      if (!res.ok) throw new Error('Failed to delete')
      await fetchProperties()
    } catch {
      setError('Failed to delete property')
    }
  }

  const togglePublished = async (property: Property) => {
    try {
      const res = await fetch(`/api/properties/${property.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ published: !property.publishedAt }),
      })
      if (!res.ok) throw new Error('Failed to update')
      await fetchProperties()
    } catch {
      setError('Failed to update property')
    }
  }

  const toggleFeatured = async (property: Property) => {
    try {
      const res = await fetch(`/api/properties/${property.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ featured: !property.featured }),
      })
      if (!res.ok) throw new Error('Failed to update')
      await fetchProperties()
    } catch {
      setError('Failed to update property')
    }
  }

  const toggleAvailable = async (property: Property) => {
    try {
      const res = await fetch(`/api/properties/${property.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ available: !property.available }),
      })
      if (!res.ok) throw new Error('Failed to update')
      await fetchProperties()
    } catch {
      setError('Failed to update property')
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-accent" />
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900">Aanbod</h1>
          <p className="text-gray-600 mt-1">Manage rental properties</p>
        </div>
        <Button onClick={startCreate}>
          <Plus className="mr-2 h-4 w-4" />
          Add Property
        </Button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
          {error}
          <button onClick={() => setError(null)} className="float-right">
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Create/Edit Form */}
      {(isCreating || editingId) && (
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">
              {isCreating ? 'New Property' : 'Edit Property'}
            </h2>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title *
                  </label>
                  <Input
                    value={form.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="Charming Apartment in Jordaan"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Slug (URL)
                  </label>
                  <Input
                    value={form.slug}
                    onChange={(e) => setForm({ ...form, slug: e.target.value })}
                    placeholder="charming-apartment-jordaan"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address *
                  </label>
                  <Input
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    placeholder="Prinsengracht 123"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <Input
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    placeholder="Amsterdam"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Neighborhood
                  </label>
                  <Input
                    value={form.neighborhood}
                    onChange={(e) => setForm({ ...form, neighborhood: e.target.value })}
                    placeholder="Jordaan"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <Euro className="inline h-4 w-4 mr-1" />
                    Price (€/month) *
                  </label>
                  <Input
                    type="number"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    placeholder="2500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <Bed className="inline h-4 w-4 mr-1" />
                    Bedrooms
                  </label>
                  <Input
                    type="number"
                    value={form.bedrooms}
                    onChange={(e) => setForm({ ...form, bedrooms: e.target.value })}
                    placeholder="2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <Bath className="inline h-4 w-4 mr-1" />
                    Bathrooms
                  </label>
                  <Input
                    type="number"
                    value={form.bathrooms}
                    onChange={(e) => setForm({ ...form, bathrooms: e.target.value })}
                    placeholder="1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <Maximize className="inline h-4 w-4 mr-1" />
                    Area (m²)
                  </label>
                  <Input
                    type="number"
                    value={form.area}
                    onChange={(e) => setForm({ ...form, area: e.target.value })}
                    placeholder="85"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <Textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  rows={4}
                  placeholder="Describe the property..."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Features (one per line)
                  </label>
                  <Textarea
                    value={form.features}
                    onChange={(e) => setForm({ ...form, features: e.target.value })}
                    rows={4}
                    placeholder="Balcony&#10;Parking&#10;Garden&#10;Recently renovated"
                  />
                </div>
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Images
                </label>
                <ImageUploader
                  images={form.images}
                  onChange={(images) => setForm({ ...form, images })}
                  maxImages={10}
                />
              </div>

              <div className="flex flex-wrap gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.available}
                    onChange={(e) => setForm({ ...form, available: e.target.checked })}
                    className="rounded border-gray-300 text-accent focus:ring-accent"
                  />
                  <span className="text-sm text-gray-700">Available for rent</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.featured}
                    onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                    className="rounded border-gray-300 text-accent focus:ring-accent"
                  />
                  <span className="text-sm text-gray-700">Featured property</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.published}
                    onChange={(e) => setForm({ ...form, published: e.target.checked })}
                    className="rounded border-gray-300 text-accent focus:ring-accent"
                  />
                  <span className="text-sm text-gray-700">Published (visible on website)</span>
                </label>
              </div>

              <div className="flex gap-2 pt-4 border-t">
                <Button onClick={saveProperty} disabled={saving}>
                  {saving ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Save className="mr-2 h-4 w-4" />
                  )}
                  {isCreating ? 'Create Property' : 'Save Changes'}
                </Button>
                <Button variant="outline" onClick={cancelEdit}>
                  <X className="mr-2 h-4 w-4" />
                  Cancel
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Properties List */}
      <Card>
        <CardContent className="p-0">
          {properties.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <Home className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p>No properties yet. Click "Add Property" to create one.</p>
            </div>
          ) : (
            <div className="divide-y">
              {properties.map((property) => (
                <div key={property.id} className="p-4 hover:bg-gray-50">
                  <div className="flex items-start gap-4">
                    {/* Thumbnail */}
                    <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      {property.images[0] ? (
                        <Image
                          src={property.images[0]}
                          alt={property.title}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          <Home className="h-8 w-8" />
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-gray-900 truncate">
                          {property.title}
                        </h3>
                        {!property.publishedAt && (
                          <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded">
                            Draft
                          </span>
                        )}
                        {property.featured && (
                          <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs rounded">
                            Featured
                          </span>
                        )}
                        {!property.available && (
                          <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                            Rented
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {property.address}, {property.neighborhood && `${property.neighborhood}, `}{property.city}
                      </div>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                        <span className="font-medium text-accent">€{property.price.toLocaleString()}/mo</span>
                        <span className="flex items-center gap-1">
                          <Bed className="h-3.5 w-3.5" />
                          {property.bedrooms}
                        </span>
                        <span className="flex items-center gap-1">
                          <Bath className="h-3.5 w-3.5" />
                          {property.bathrooms}
                        </span>
                        <span className="flex items-center gap-1">
                          <Maximize className="h-3.5 w-3.5" />
                          {property.area} m²
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => togglePublished(property)}
                        title={property.publishedAt ? 'Unpublish' : 'Publish'}
                      >
                        {property.publishedAt ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => toggleFeatured(property)}
                        title={property.featured ? 'Remove featured' : 'Mark as featured'}
                      >
                        {property.featured ? (
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        ) : (
                          <StarOff className="h-4 w-4" />
                        )}
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => toggleAvailable(property)}
                        title={property.available ? 'Mark as rented' : 'Mark as available'}
                        className={property.available ? 'text-green-600' : 'text-gray-400'}
                      >
                        <Home className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => startEdit(property)}
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-red-600 hover:text-red-700"
                        onClick={() => deleteProperty(property.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardContent className="p-4">
          <p className="text-sm text-gray-600">
            <strong>Tips:</strong>
            <br />• Click the eye icon to publish/unpublish a property
            <br />• Click the star icon to feature a property (shown first in listings)
            <br />• Click the house icon to toggle availability (available/rented)
            <br />• Properties must be published to appear on the website
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
