import type { ReactNode } from "react"
import dynamic from "next/dynamic"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import LuxeAiAssistance from "@/components/luxeComponents/LuxeAiAssistance"
import Loading from "./loading"
import { StructuredData } from "@/components/seo/StructuredData"
import { Suspense } from "react"

import { Inter } from "next/font/google"
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

const ClientProviderWithFallback = dynamic(() => import("@/components/chakra-snippets/ClientProvider"), {
  loading: () => <Loading />,
})

export const metadata: Metadata = {
  title: {
    default: "Airbnb Management Adelaide | Luxe Managements",
    template: "%s | Luxe Managements",
  },
  description:
    "Professional Airbnb Property Management in Adelaide by Luxe Managements. We provide complete property styling, professional photography, cleaning services, and 24/7 guest care to maximize your rental income.",
  metadataBase: new URL("https://www.luxemanagements.com"),
  keywords: [
    "Airbnb Management Adelaide",
    "Adelaide Property Management",
    "Short Term Rental Management",
    "Airbnb Property Management Adelaide",
    "Property Management Adelaide",
    "Vacation Rental Management",
    "Adelaide Accommodation Management",
    "Professional Property Styling Adelaide",
  ],
  publisher: "Luxe Managements",
  creator: "Luxe Managements",
  applicationName: "Luxe Managements",
  category: "Property Management",
  classification: "Business",

  authors: [
    {
      name: "Luxe Managements",
      url: "https://www.luxemanagements.com",
    },
  ],

  alternates: {
    canonical: "https://www.luxemanagements.com",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Airbnb Management Adelaide | Luxe Managements",
    description:
      "Professional Airbnb Property Management in Adelaide. Complete styling, photography, cleaning & guest care services to maximize your rental income.",
    url: "https://www.luxemanagements.com",
    siteName: "Luxe Managements",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://www.luxemanagements.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luxe Managements - Professional Airbnb Property Management Adelaide",
        type: "image/jpeg",
      },
      {
        url: "https://www.luxemanagements.com/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "Luxe Managements Logo",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@luxemanagements",
    creator: "@luxemanagements",
    title: "Airbnb Management Adelaide | Luxe Managements",
    description:
      "Professional Airbnb Property Management in Adelaide. Complete styling, photography, cleaning & guest care services.",
    images: {
      url: "https://www.luxemanagements.com/og-image.jpg",
      alt: "Luxe Managements - Professional Airbnb Property Management Adelaide",
    },
  },

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },

  manifest: "/site.webmanifest",

  other: {
    "msapplication-TileColor": "#ffffff",
    "theme-color": "#ffffff",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
  },
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-AU" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body>
        <Analytics />
        <SpeedInsights />

        
          <ClientProviderWithFallback>
            <LuxeAiAssistance />
            {children}
          </ClientProviderWithFallback>
      
      </body>
    </html>
  )
}


import './globals.css'
