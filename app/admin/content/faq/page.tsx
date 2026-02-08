'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { ArrowLeft, Plus, Edit2, Trash2, GripVertical, Save, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  order: number
  isPublished: boolean
}

const initialFAQs: FAQ[] = [
  { id: '1', question: 'What areas does MMRE cover?', answer: 'We primarily focus on Amsterdam and the greater Amsterdam area...', category: 'general', order: 0, isPublished: true },
  { id: '2', question: 'What budget should I have for renting in Amsterdam?', answer: 'The Amsterdam rental market starts around €1,500/month...', category: 'tenants', order: 1, isPublished: true },
  { id: '3', question: 'What is your fee structure?', answer: 'Our standard fee is one month rent (excluding VAT)...', category: 'landlords', order: 2, isPublished: true },
  { id: '4', question: 'How do you screen tenants?', answer: 'We verify employment and income, check references...', category: 'landlords', order: 3, isPublished: true },
  { id: '5', question: 'What documents do I need to rent?', answer: 'Typically you need: valid ID/passport, proof of income...', category: 'tenants', order: 4, isPublished: true },
]

export default function FAQAdminPage() {
  const [faqs, setFAQs] = useState<FAQ[]>(initialFAQs)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editForm, setEditForm] = useState({ question: '', answer: '', category: 'general' })
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [showAddForm, setShowAddForm] = useState(false)

  const startEdit = (faq: FAQ) => {
    setEditingId(faq.id)
    setEditForm({
      question: faq.question,
      answer: faq.answer,
      category: faq.category,
    })
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditForm({ question: '', answer: '', category: 'general' })
  }

  const saveEdit = (id: string) => {
    setFAQs(faqs.map(f =>
      f.id === id ? { ...f, ...editForm } : f
    ))
    setEditingId(null)
  }

  const addFAQ = () => {
    const newFAQ: FAQ = {
      id: Date.now().toString(),
      question: editForm.question,
      answer: editForm.answer,
      category: editForm.category,
      order: faqs.length,
      isPublished: true,
    }
    setFAQs([...faqs, newFAQ])
    setShowAddForm(false)
    setEditForm({ question: '', answer: '', category: 'general' })
  }

  const deleteFAQ = (id: string) => {
    if (confirm('Are you sure you want to delete this FAQ?')) {
      setFAQs(faqs.filter(f => f.id !== id))
    }
  }

  const categoryLabels: Record<string, string> = {
    general: 'General',
    tenants: 'For Tenants',
    landlords: 'For Landlords',
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
          <h1 className="text-2xl font-bold text-gray-900">FAQ Management</h1>
          <p className="text-gray-600 mt-1">Manage frequently asked questions</p>
        </div>
        <Button onClick={() => setShowAddForm(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Question
        </Button>
      </div>

      {/* Add Form */}
      {showAddForm && (
        <Card className="mb-6">
          <CardContent className="p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Add New FAQ</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Question
                </label>
                <Input
                  value={editForm.question}
                  onChange={(e) => setEditForm({ ...editForm, question: e.target.value })}
                  placeholder="Enter the question..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Answer
                </label>
                <Textarea
                  value={editForm.answer}
                  onChange={(e) => setEditForm({ ...editForm, answer: e.target.value })}
                  placeholder="Enter the answer..."
                  rows={4}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <Select
                  value={editForm.category}
                  onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                >
                  <option value="general">General</option>
                  <option value="tenants">For Tenants</option>
                  <option value="landlords">For Landlords</option>
                </Select>
              </div>
              <div className="flex gap-2">
                <Button onClick={addFAQ} disabled={!editForm.question || !editForm.answer}>
                  <Save className="mr-2 h-4 w-4" />
                  Save FAQ
                </Button>
                <Button variant="outline" onClick={() => {
                  setShowAddForm(false)
                  setEditForm({ question: '', answer: '', category: 'general' })
                }}>
                  Cancel
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* FAQ List by Category */}
      {['general', 'tenants', 'landlords'].map((category) => {
        const categoryFAQs = faqs.filter(f => f.category === category)
        if (categoryFAQs.length === 0) return null

        return (
          <div key={category} className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              {categoryLabels[category]}
            </h2>
            <Card>
              <CardContent className="p-0 divide-y">
                {categoryFAQs.map((faq) => (
                  <div key={faq.id} className="p-4">
                    {editingId === faq.id ? (
                      <div className="space-y-4">
                        <Input
                          value={editForm.question}
                          onChange={(e) => setEditForm({ ...editForm, question: e.target.value })}
                        />
                        <Textarea
                          value={editForm.answer}
                          onChange={(e) => setEditForm({ ...editForm, answer: e.target.value })}
                          rows={3}
                        />
                        <Select
                          value={editForm.category}
                          onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                        >
                          <option value="general">General</option>
                          <option value="tenants">For Tenants</option>
                          <option value="landlords">For Landlords</option>
                        </Select>
                        <div className="flex gap-2">
                          <Button size="sm" onClick={() => saveEdit(faq.id)}>
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
                      <div>
                        <div className="flex items-start gap-4">
                          <GripVertical className="h-5 w-5 text-gray-400 cursor-grab mt-1" />
                          <div className="flex-1">
                            <button
                              className="w-full text-left flex items-center justify-between"
                              onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                            >
                              <h3 className="font-medium text-gray-900">{faq.question}</h3>
                              <ChevronDown
                                className={cn(
                                  'h-5 w-5 text-gray-400 transition-transform',
                                  expandedId === faq.id && 'rotate-180'
                                )}
                              />
                            </button>
                            {expandedId === faq.id && (
                              <p className="text-gray-600 mt-2 text-sm">{faq.answer}</p>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => startEdit(faq)}
                            >
                              <Edit2 className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-red-600 hover:text-red-700"
                              onClick={() => deleteFAQ(faq.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )
      })}
    </div>
  )
}
