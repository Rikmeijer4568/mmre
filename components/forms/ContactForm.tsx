'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Loader2, Check } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.consent) return

    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          leadType: 'GENERAL',
          source: 'CONTACT_FORM',
        }),
      })

      if (response.ok) {
        setStatus('success')
      } else {
        const data = await response.json()
        setStatus('error')
        setErrorMessage(data.error || 'Something went wrong')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Failed to send message. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number (optional)
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+31 6 12345678"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message *
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="How can we help you?"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
        />
      </div>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          className="mt-1"
          required
        />
        <label htmlFor="consent" className="text-sm text-gray-600">
          I agree to the{' '}
          <a href="/privacy" className="text-accent hover:underline">
            Privacy Policy
          </a>{' '}
          and consent to being contacted regarding my inquiry. *
        </label>
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm">{errorMessage}</p>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={status === 'loading' || !formData.consent}>
        {status === 'loading' ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  )
}
