'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calculator, Loader2, Check, MessageCircle, ArrowRight } from 'lucide-react'
import { getWhatsAppLink } from '@/lib/whatsapp'

interface FormData {
  address: string
  city: string
  propertyType: string
  size: string
  bedrooms: string
  furnished: string
  availableFrom: string
  desiredRent: string
  name: string
  email: string
  phone: string
  consent: boolean
}

interface EstimateResult {
  minRent: number
  maxRent: number
  estimatedDays: number
}

function calculateEstimate(data: FormData): EstimateResult {
  // Simple estimation logic based on property attributes
  const basePrice = 1500
  const size = parseInt(data.size) || 80
  const bedrooms = parseInt(data.bedrooms) || 2

  // Price per m2 varies by area
  const areaMultiplier: Record<string, number> = {
    'amsterdam-centrum': 30,
    'amsterdam-west': 25,
    'amsterdam-zuid': 28,
    'amsterdam-oost': 24,
    'amsterdam-noord': 20,
    'amstelveen': 22,
    'other': 20,
  }

  const multiplier = areaMultiplier[data.city] || 22
  const furnishedBonus = data.furnished === 'yes' ? 300 : 0

  const baseEstimate = size * multiplier + furnishedBonus
  const minRent = Math.round(baseEstimate * 0.9 / 50) * 50
  const maxRent = Math.round(baseEstimate * 1.1 / 50) * 50

  // Estimated days to rent (faster for furnished, premium areas)
  let estimatedDays = 21
  if (data.furnished === 'yes') estimatedDays -= 5
  if (['amsterdam-centrum', 'amsterdam-zuid'].includes(data.city)) estimatedDays -= 4

  return {
    minRent: Math.max(minRent, 1500),
    maxRent: Math.max(maxRent, 2000),
    estimatedDays: Math.max(estimatedDays, 7),
  }
}

export function RentalCalculator() {
  const [step, setStep] = useState<'form' | 'contact' | 'result'>('form')
  const [isLoading, setIsLoading] = useState(false)
  const [estimate, setEstimate] = useState<EstimateResult | null>(null)
  const [formData, setFormData] = useState<FormData>({
    address: '',
    city: '',
    propertyType: 'apartment',
    size: '',
    bedrooms: '',
    furnished: 'no',
    availableFrom: '',
    desiredRent: '',
    name: '',
    email: '',
    phone: '',
    consent: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handlePropertySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('contact')
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.consent) return

    setIsLoading(true)

    try {
      // Calculate estimate
      const result = calculateEstimate(formData)
      setEstimate(result)

      // Submit to API
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          leadType: 'LANDLORD',
          source: 'RENT_OUT_CALCULATOR',
          estimatedRent: `€${result.minRent} - €${result.maxRent}`,
        }),
      })

      setStep('result')
    } catch (error) {
      console.error('Failed to submit:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Property Details Form
  if (step === 'form') {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-accent" />
            Property Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePropertySubmit} className="space-y-3 sm:space-y-4">
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <Input
                  name="address"
                  placeholder="Street and number"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City / Area
                </label>
                <Select name="city" value={formData.city} onChange={handleChange} required>
                  <option value="">Select area</option>
                  <option value="amsterdam-centrum">Amsterdam Centrum</option>
                  <option value="amsterdam-west">Amsterdam West</option>
                  <option value="amsterdam-zuid">Amsterdam Zuid</option>
                  <option value="amsterdam-oost">Amsterdam Oost</option>
                  <option value="amsterdam-noord">Amsterdam Noord</option>
                  <option value="amstelveen">Amstelveen</option>
                  <option value="other">Other</option>
                </Select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Property Type
                </label>
                <Select name="propertyType" value={formData.propertyType} onChange={handleChange}>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="studio">Studio</option>
                  <option value="other">Other</option>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Size (m²)
                </label>
                <Input
                  name="size"
                  type="number"
                  placeholder="e.g. 80"
                  value={formData.size}
                  onChange={handleChange}
                  required
                  min="20"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bedrooms
                </label>
                <Select name="bedrooms" value={formData.bedrooms} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="1">1 bedroom</option>
                  <option value="2">2 bedrooms</option>
                  <option value="3">3 bedrooms</option>
                  <option value="4">4+ bedrooms</option>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Furnished?
                </label>
                <Select name="furnished" value={formData.furnished} onChange={handleChange}>
                  <option value="no">No (Unfurnished)</option>
                  <option value="yes">Yes (Furnished)</option>
                </Select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Available From
                </label>
                <Input
                  name="availableFrom"
                  type="date"
                  value={formData.availableFrom}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Desired Rent (optional)
                </label>
                <Input
                  name="desiredRent"
                  type="number"
                  placeholder="€ per month"
                  value={formData.desiredRent}
                  onChange={handleChange}
                />
              </div>
            </div>

            <Button type="submit" className="w-full">
              Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>
    )
  }

  // Contact Details Form
  if (step === 'contact') {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your Contact Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <Input
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <Input
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <Input
                name="phone"
                type="tel"
                placeholder="+31 6 12345678"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                name="consent"
                id="consent"
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
                and consent to being contacted about my rental estimate.
              </label>
            </div>

            <div className="flex gap-3">
              <Button type="button" variant="outline" onClick={() => setStep('form')}>
                Back
              </Button>
              <Button type="submit" className="flex-1" disabled={isLoading || !formData.consent}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Calculating...
                  </>
                ) : (
                  <>
                    <Calculator className="mr-2 h-4 w-4" />
                    Get My Estimate
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    )
  }

  // Result
  return (
    <Card className="border-2 border-accent/30">
      <CardHeader className="bg-highlight">
        <CardTitle className="flex items-center gap-2 text-accent">
          <Check className="h-5 w-5" />
          Your Rental Estimate
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="text-center mb-4 sm:mb-6">
          <p className="text-sm text-gray-600 mb-2">Estimated Monthly Rent</p>
          <p className="text-2xl sm:text-4xl font-bold text-gray-900">
            €{estimate?.minRent.toLocaleString()} - €{estimate?.maxRent.toLocaleString()}
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Estimated time to rent</span>
            <span className="font-semibold">{estimate?.estimatedDays} days</span>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-6">
          * This is an indicative estimate based on current market conditions.
          Final rental price depends on property condition, exact location, and market demand.
        </p>

        <div className="space-y-3">
          <Button className="w-full" variant="whatsapp" asChild>
            <a href={getWhatsAppLink('rentOut')} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              Discuss on WhatsApp
            </a>
          </Button>
          <p className="text-center text-sm text-gray-500">
            We&apos;ll contact you within 24 hours with personalized advice.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
