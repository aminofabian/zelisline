import type { Metadata } from 'next';
import { Jost, Caveat } from 'next/font/google';
import './globals.css';
import { GoogleTagManager} from '@next/third-parties/google'
import { Toaster } from "@/components/ui/toaster"
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Jost({ subsets: ['latin'] })
const caveat = Caveat({ 
  subsets: ['latin'],
  variable: '--font-caveat',
})

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
    <html lang="en" className={caveat.variable}>
      <body className={inter.className}>
        {children}
        <Toaster />
        <WhatsAppButton />
      </body>
      <GoogleTagManager gtmId="GTM-VHVH004Y49" />
    </html>
  )
}
