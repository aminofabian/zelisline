import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { Toaster } from "@/components/ui/toaster";
import PromoBar from "@/components/chrome/PromoBar";
import SiteHeader from "@/components/chrome/SiteHeader";
import SiteFooter from "@/components/chrome/SiteFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const DEFAULT_TITLE = "Software Development and Digital Marketing Agency Kenya || Zelisline";
const DEFAULT_DESCRIPTION =
  "Zelisline, a top software development company in Kenya, offers customized enterprise-level software and applications that meet your business unique needs.";

const SITE_URL = "https://www.zelisline.co.ke";
const GTM_ID = "GTM-VHVH004Y49";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Zelisline",
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Zelisline",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Zelisline — software studio, Nairobi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${mono.variable}`}>
      <body className="font-sans">
        <GoogleTagManager gtmId={GTM_ID} />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <PromoBar />
        <SiteHeader />
        <main id="main" className="min-h-screen">
          {children}
        </main>
        <SiteFooter />
        <Toaster />
        <WhatsAppButton />
      </body>
    </html>
  );
}
