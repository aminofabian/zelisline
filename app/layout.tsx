import type { Metadata } from 'next';
import { Jost, Inter, Lora } from 'next/font/google';
import './globals.css';
import { GoogleTagManager} from '@next/third-parties/google'



const inter = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Most Trusted Software Development and Digital Marketing Company in Kenya',
  description: 'Zelisline is a leading software development and digital marketing company based in Kenya. With over 10 years of experience, we have established ourselves as the most trusted and reliable choice for businesses looking to enhance their online presence and streamline their operations.',
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
  