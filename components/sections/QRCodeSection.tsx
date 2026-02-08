'use client'

import { useEffect, useState } from 'react'
import { getWhatsAppLink } from '@/lib/whatsapp'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'

export function QRCodeSection() {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('')

  useEffect(() => {
    const generateQR = async () => {
      try {
        const QRCode = (await import('qrcode')).default
        const whatsappUrl = getWhatsAppLink('rentIn')
        const url = await QRCode.toDataURL(whatsappUrl, {
          width: 200,
          margin: 2,
          color: {
            dark: '#1e3a5f',
            light: '#ffffff',
          },
        })
        setQrCodeUrl(url)
      } catch (error) {
        console.error('Failed to generate QR code:', error)
      }
    }
    generateQR()
  }, [])

  return (
    <Card className="max-w-sm mx-auto">
      <CardContent className="p-8 text-center">
        {/* Phone mockup frame */}
        <div className="relative mx-auto w-48 h-72 bg-gray-900 rounded-3xl p-2 shadow-xl">
          <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
            {/* WhatsApp header */}
            <div className="bg-[#075e54] p-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full" />
                <span className="text-white text-sm font-medium">MMRE</span>
              </div>
            </div>
            {/* Chat preview */}
            <div className="p-3 bg-[#e5ddd5] h-full">
              <div className="bg-white rounded-lg p-2 text-xs text-gray-700 max-w-[80%]">
                Hi! How can we help you find a home?
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="font-semibold text-gray-900 mb-4">Scan to start chatting</p>
          {qrCodeUrl ? (
            <img
              src={qrCodeUrl}
              alt="WhatsApp QR Code"
              className="mx-auto rounded-lg"
              width={150}
              height={150}
            />
          ) : (
            <div className="w-[150px] h-[150px] mx-auto bg-gray-100 rounded-lg animate-pulse" />
          )}
        </div>

        <Button variant="whatsapp" className="mt-6 w-full" asChild>
          <a href={getWhatsAppLink('rentIn')} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-4 w-4" />
            Open WhatsApp
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}
