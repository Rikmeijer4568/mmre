import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MMRE - Meijer & Munninghoff Real Estate',
  description: 'Premium rental services in Amsterdam for expats and landlords. Find your perfect home or rent out your property with personal guidance.',
  keywords: 'Amsterdam rental, expat housing, property rental, landlord services, real estate Amsterdam',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
