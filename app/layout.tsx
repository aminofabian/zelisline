import type { Metadata } from 'next';
import { Jost, Inter, Lora } from 'next/font/google';
import './globals.css';
import { GoogleTagManager} from '@next/third-parties/google'
import SideNav from '@/components/SideNav';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { Toaster } from "@/components/ui/toaster"




const inter = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: "Software Development and Digital Marketing Agency Kenya || Zelisline",
    template: "%s | Zelisline", 
  },
  description: "Zelisline, a top software development company in Kenya, offers customized enterprise-level software and applications that meet your business unique needs.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.zelisline.co.ke",
    title: "Software Development and Digital Marketing Agency Kenya || Zelisline",
    description: "Zelisline, a top software development company in Kenya, offers customized enterprise-level software and applications that meet your business unique needs.",
    images: '/og-image.png',
  }
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={inter.className}>{children}
    <Toaster />
    
    
    </body>
    <GoogleTagManager gtmId="GTM-VHVH004Y49" />
    </html>
    )
  }
  