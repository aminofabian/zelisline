import type { Metadata } from 'next';
import { Jost, Inter, Lora } from 'next/font/google';
import './globals.css';
import { GoogleTagManager} from '@next/third-parties/google'
import SideNav from '@/components/SideNav';
import Link from 'next/link';
import Logo from '@/components/Logo';



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
    images: [
      {
        url: "opengraph-image.png",
        width: 1200,
        height: 600,
        alt: "Zelisline Software Development and Digital Marketing Agency Kenya",
      },
    ],
  },
  twitter: {
    title: "Software Development and Digital Marketing Agency Kenya || Zelisline",
    card: "summary_large_image",
    site: "@zelisline",
    description: "Zelisline, a top software development company in Kenya, offers customized enterprise-level software and applications that meet your business unique needs.",
  },
};
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
  