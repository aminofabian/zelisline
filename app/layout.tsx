import type { Metadata } from 'next';
import { Jost, Caveat, Fraunces } from 'next/font/google';
import './globals.css';
import { GoogleTagManager } from '@next/third-parties/google';
import { Toaster } from "@/components/ui/toaster";
import WhatsAppButton from '@/components/WhatsAppButton';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fraunces',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-caveat',
  display: 'swap',
});

const HelloBar = dynamic(() => import('@/components/HelloBar'), {
  ssr: false,
});

const MobileNav = dynamic(() => import('@/components/MobileNav'), {
  ssr: false,
});

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
    <html
      lang="en"
      className={`${jost.variable} ${fraunces.variable} ${caveat.variable}`}
    >
      <body className="font-sans">
        <Suspense fallback={<div className="h-10 bg-orange-700" />}>
          <HelloBar />
        </Suspense>
        <MobileNav />
        {children}
        <Toaster />
        <WhatsAppButton />
      </body>
      <GoogleTagManager gtmId="GTM-VHVH004Y49" />
    </html>
  )
}
