import { Inter } from 'next/font/google'
import { SessionProvider } from '@/components/providers/SessionProvider'
import { AdminLayoutClient } from './layout-client'
import '../globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <SessionProvider>
          <AdminLayoutClient>{children}</AdminLayoutClient>
        </SessionProvider>
      </body>
    </html>
  )
}
