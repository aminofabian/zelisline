import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import './globals.css'

const inter = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Welcome to Zelisline',
  description: 'Driving Growth from Series A to IPO',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
    <body className={inter.className}>{children}</body>
    </html>
    )
  }
  