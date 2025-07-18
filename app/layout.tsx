import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vale-Prev Escritório',
  description: 'Created with VSCode',
  generator: 'eu.glauber',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
