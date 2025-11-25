// app/news/layout.tsx

import type React from "react"
import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer"
// app/news/page.tsx
import type { Metadata } from "next"

// eslint-disable-next-line import/no-unused-modules
export const metadata: Metadata = {
  title: "News & Updates | Luxe Managements",
  description: "Stay up to date with the latest news, tips, and Airbnb industry insights from Luxe Managements.",
  keywords: ["Airbnb News", "Property Management News", "Adelaide", "Luxe Managements", "Updates"],
  openGraph: {
    title: "News & Updates | Luxe Managements",
    description: "Read about our latest launches, success stories, and Airbnb hosting tips.",
    url: "/news",
    images: [
      {
        url: "/news/og-image.png",
        width: 1200,
        height: 630,
        alt: "Airbnb property featured in our news",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Updates | Luxe Managements",
    description: "Read about our latest launches, success stories, and Airbnb hosting tips.",
    images: ["/news/og-image.png"],
  },
}

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
