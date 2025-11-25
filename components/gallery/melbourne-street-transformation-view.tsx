"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ChevronLeft, ChevronRight, Bed, Bath, Square } from "lucide-react"
import type { Property } from "@/lib/properties"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useState } from "react"

interface MelbourneStreetTransformationViewProps {
  property: Property
}

export function MelbourneStreetTransformationView({ property }: MelbourneStreetTransformationViewProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!property.transformationStory) return null

  const story = property.transformationStory

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.carouselImages.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.carouselImages.length) % property.carouselImages.length)
  }

  // Property value data - monthly scatter plot with line
  const propertyValueBeforeLuxe = [
    { month: 1, value: 620000 },
    { month: 2, value: 622000 },
    { month: 3, value: 621000 },
    { month: 4, value: 623000 },
    { month: 5, value: 625000 },
    { month: 6, value: 624000 },
  ]

  const propertyValueWithLuxe = [
    { month: 1, value: 635000 },
    { month: 2, value: 652000 },
    { month: 3, value: 670000 },
    { month: 4, value: 688000 },
    { month: 5, value: 705000 },
    { month: 6, value: 720000 },
  ]

  // Revenue comparison - rent (linear) vs Luxe (increasing scatter with line)
  const traditionalRentRevenue = [
    { month: 1, revenue: 1950 },
    { month: 2, revenue: 1950 },
    { month: 3, revenue: 1950 },
    { month: 4, revenue: 1950 },
    { month: 5, revenue: 1950 },
    { month: 6, revenue: 1950 },
    { month: 7, revenue: 1950 },
    { month: 8, revenue: 1950 },
    { month: 9, revenue: 1950 },
    { month: 10, revenue: 1950 },
    { month: 11, revenue: 1950 },
    { month: 12, revenue: 1950 },
  ]

  const luxeAirbnbRevenue = [
    { month: 1, revenue: 2800 },
    { month: 2, revenue: 2900 },
    { month: 3, revenue: 3100 },
    { month: 4, revenue: 3200 },
    { month: 5, revenue: 3400 },
    { month: 6, revenue: 3000 },
    { month: 7, revenue: 2800 },
    { month: 8, revenue: 2900 },
    { month: 9, revenue: 3100 },
    { month: 10, revenue: 3200 },
    { month: 11, revenue: 3300 },
    { month: 12, revenue: 3400 },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <Link
        href="/gallery"
        className="fixed top-6 left-6 z-50 w-12 h-12 rounded-full bg-black/80 backdrop-blur-md flex justify-center items-center hover:bg-black transition-all duration-300 group"
        aria-label="Back to gallery"
      >
        <ArrowLeft size={24} className="text-white group-hover:-translate-x-1 transition-transform duration-300" />
      </Link>

      {/* Scrollable Content */}
      <div className="h-full overflow-y-auto scroll-smooth">
        {/* Hero Section with Slideshow */}
        <section className="relative h-screen w-full flex items-end bg-black overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={property.carouselImages[currentImageIndex] || "/placeholder.svg"}
              alt={`${property.title} - Image ${currentImageIndex + 1}`}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>

          {/* Slideshow Controls */}
          <button
            onClick={previousImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex justify-center items-center hover:bg-white/20 transition-all duration-300"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex justify-center items-center hover:bg-white/20 transition-all duration-300"
            aria-label="Next image"
          >
            <ChevronRight size={24} className="text-white" />
          </button>

          {/* Image Indicators */}
          <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {property.carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? "bg-white w-8" : "bg-white/50"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 pb-20">
            <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-sm font-semibold text-white uppercase tracking-wider">
                Investment Success Story
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight text-balance leading-[0.95]">
              {property.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light text-balance max-w-3xl">{property.location}</p>
          </div>
        </section>

        {/* Property Details Section */}
        <section className="py-20 bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center gap-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-lg">$</span>
                </div>
                <div>
                  <div className="text-sm text-gray-600 font-medium">ADR</div>
                  <div className="text-2xl font-bold text-black">$150</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center shrink-0">
                  <Bed className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 font-medium">Bedroom</div>
                  <div className="text-2xl font-bold text-black">1</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center shrink-0">
                  <Bath className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 font-medium">Bathroom</div>
                  <div className="text-2xl font-bold text-black">1</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center shrink-0">
                  <Square className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 font-medium">Land Size</div>
                  <div className="text-xl font-bold text-black whitespace-nowrap">40 m²</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Story */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="mb-12">
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">The Story</h2>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-pretty">{property.description}</p>
          </div>
        </section>

        {/* Property Photos */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">The Property</h2>
              <p className="text-xl text-gray-600">Premium styling and design throughout</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/design-mode/mbathroom.jpeg"
                  alt="Modern bathroom"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/design-mode/mkitchen.jpeg"
                  alt="Contemporary kitchen"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/design-mode/mlounge1.avif"
                  alt="Stylish living area"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/mexterior.jpeg"
                  alt="Elegant exterior of Melbourne Street property with inviting entrance"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/mdining.jpeg"
                  alt="Modern dining area with sophisticated table setting and ambient lighting"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/mpatio.jpeg"
                  alt="Outdoor patio space with stylish furniture and relaxing atmosphere"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Revenue Comparison */}
        <section className="py-20 md:py-28 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Revenue Performance</h2>
              <p className="text-xl text-gray-600">Traditional renting vs. Working with Luxe Airbnb management</p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-lg">
              <ChartContainer
                config={{
                  traditional: {
                    label: "Traditional Rent",
                    color: "#ef4444",
                  },
                  luxe: {
                    label: "Luxe Airbnb",
                    color: "#10b981",
                  },
                }}
                className="h-[500px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                      type="number"
                      dataKey="month"
                      tick={{ fill: "#666", fontSize: 14 }}
                      tickLine={false}
                      label={{ value: "Months", position: "insideBottom", offset: -5, fill: "#666" }}
                    />
                    <YAxis
                      tick={{ fill: "#666", fontSize: 14 }}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `$${value / 1000}k`}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} cursor={{ stroke: "#e5e7eb", strokeWidth: 2 }} />
                    <Line
                      data={traditionalRentRevenue}
                      type="monotone"
                      dataKey="revenue"
                      stroke="#ef4444"
                      strokeWidth={3}
                      name="Traditional Rent"
                      dot={false}
                    />
                    <Line
                      data={luxeAirbnbRevenue}
                      type="monotone"
                      dataKey="revenue"
                      stroke="#10b981"
                      strokeWidth={3}
                      name="Luxe Airbnb"
                      dot={{ fill: "#10b981", r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>

              <div className="mt-12 flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500" />
                  <span className="text-gray-600">Traditional: $1,950/month</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-500" />
                  <span className="text-gray-600">Luxe: $3,000/month avg</span>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-red-50 rounded-xl">
                  <div className="text-4xl font-bold text-red-600 mb-2">$23,400</div>
                  <div className="text-gray-600">Traditional Annual Revenue</div>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <div className="text-4xl font-bold text-green-600 mb-2">$36,000</div>
                  <div className="text-gray-600">Luxe Annual Revenue</div>
                </div>
              </div>

              <div className="mt-6 text-center p-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                <p className="text-3xl font-bold text-white">+$12,600 extra per year</p>
                <p className="text-white/90 mt-2">54% revenue increase with Luxe</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 md:py-36 bg-gradient-to-br from-black via-gray-900 to-black text-white">
          <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
            <div className="mb-8">
              <span className="text-sm font-semibold text-white/50 uppercase tracking-wider">
                Stop Leaving Money on the Table
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-tight">
              Your Property Deserves the Luxe Treatment
            </h2>
            <p className="text-2xl md:text-3xl text-white/80 leading-relaxed mb-12 text-balance max-w-3xl mx-auto">
              From purchase guidance to complete transformation and ongoing management—this is what we do. And we'd love
              to show you what's possible with your property.
            </p>

            <div className="mt-16">
              <button className="px-12 md:px-16 py-6 md:py-7 bg-white text-black text-xl md:text-2xl font-bold rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl">
                Book Your Free Consultation
              </button>
              <p className="text-white/60 mt-6">Let's unlock your property's true potential together.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
