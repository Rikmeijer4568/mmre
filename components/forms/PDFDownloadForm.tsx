'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Download, Loader2 } from 'lucide-react'

export function PDFDownloadForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')

    try {
      const response = await fetch('/api/downloads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, downloadId: 'amsterdam-rental-guide' }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('Check your email for the download link!')
        // In a real app, you might trigger the download here
        // window.open(data.downloadUrl, '_blank')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong')
      }
    } catch {
      setStatus('error')
      setMessage('Failed to process download. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Download className="h-8 w-8 text-green-600" />
        </div>
        <p className="font-medium text-gray-900">Download Ready!</p>
        <p className="text-sm text-gray-600 mt-1">{message}</p>
        <Button className="mt-4" asChild>
          <a href="/downloads/amsterdam-rental-guide.pdf" download>
            Download PDF
          </a>
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name (optional)
        </label>
        <Input
          id="name"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email address
        </label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="w-full" disabled={status === 'loading'}>
        {status === 'loading' ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <Download className="mr-2 h-4 w-4" />
            Download Free Guide
          </>
        )}
      </Button>
      {status === 'error' && (
        <p className="text-red-600 text-sm text-center">{message}</p>
      )}
      <p className="text-xs text-gray-500 text-center">
        By downloading, you agree to receive occasional updates from MMRE.
      </p>
    </form>
  )
}
