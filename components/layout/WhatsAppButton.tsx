'use client'

import { MessageCircle } from 'lucide-react'
import { getWhatsAppLink, WhatsAppTemplate } from '@/lib/whatsapp'

interface WhatsAppButtonProps {
  template?: WhatsAppTemplate
  className?: string
}

export function WhatsAppButton({ template = 'general', className = '' }: WhatsAppButtonProps) {
  const handleClick = () => {
    // Track analytics event
    if (typeof window !== 'undefined') {
      fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'whatsapp_click',
          page: window.location.pathname,
          metadata: { template },
        }),
      }).catch(() => {})
    }
  }

  return (
    <a
      href={getWhatsAppLink(template)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-whatsapp rounded-full shadow-lg hover:bg-green-600 transition-all animate-pulse-whatsapp ${className}`}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-8 w-8 text-white" fill="white" />
    </a>
  )
}
