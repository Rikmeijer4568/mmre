import { Inter } from 'next/font/google'
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
        <AdminLayoutClient>{children}</AdminLayoutClient>
      </body>
    </html>
  )
}
