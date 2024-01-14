import type { Metadata } from 'next';
import { Jost, Inter, Lora } from 'next/font/google';
import './globals.css';
import { GoogleTagManager} from '@next/third-parties/google'
import SideNav from '@/components/SideNav';



const inter = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Software Development and Digital Marketing Agency Kenya',
  description: 'Zelisline, a top software development company in Kenya, offers customized enterprise-level software and applications that meet your business needs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={inter.className}>{children}</body>
    <GoogleTagManager gtmId="GTM-VHVH004Y49" />
    </html>
    )
  }
  