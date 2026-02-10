export const metadata = {
  title: 'MMRE Studio',
  description: 'Content Management Studio for MMRE',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
