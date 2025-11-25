"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, DollarSign } from "lucide-react"
import type { Property } from "@/lib/properties"
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface ClearviewTransformationViewProps {
  property: Property
}

export function ClearviewTransformationView({ property }: ClearviewTransformationViewProps) {
  if (!property.transformationStory) return null

  const story = property.transformationStory

  const incomeComparisonData = [
    { period: "Traditional Rental", annual: 41600, fill: "#ef4444" },
    { period: "With Luxe (Airbnb)", annual: 102200, fill: "#10b981" },
  ]

  const galleryImages = [
    { src: "/images/cbedroom1.jpg", alt: "Luxurious master bedroom with modern grey headboard" },
    { src: "/images/cbedroom5new.jpeg", alt: "Fifth bedroom with premium finishes" },
    { src: "/images/cgameroom1new.jpeg", alt: "Entertainment room with pool table" },
    { src: "/images/cgameroom2new.jpeg", alt: "Games room with ping pong and pool tables" },
    { src: "/images/cbedroom1new.jpeg", alt: "Bright modern bedroom with white marble flooring and navy area rug" },
    { src: "/images/cbedroom2new.jpeg", alt: "Sophisticated bedroom with black furniture and warm lighting" },
  ]

  return (
    <div className="min-h-screen bg-white" data-property-id="clearview-8">
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
        {/* Hero Section */}
        <section
          className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden"
          data-section="clearview-hero"
        >
          <div className="absolute inset-0 animate-[zoom_30s_ease-in-out_infinite]">
            <Image
              src="/images/chero.jpg"
              alt="Modern Clearview Family Home"
              fill
              className="object-cover opacity-50"
              priority
              sizes="100vw"
            />
          </div>

          <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 text-center">
            <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 animate-[fadeInUp_1s_ease-out]">
              <span className="text-sm font-semibold text-white uppercase tracking-wider">
                Transformation Success Story
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tight text-balance leading-[0.95] animate-[fadeInUp_1s_ease-out_0.2s_both]">
              Serene Family Home in Clearview
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-light text-balance max-w-4xl mx-auto animate-[fadeInUp_1s_ease-out_0.4s_both]">
              {property.subheading}
            </p>
          </div>
        </section>

        {/* Property Details Section */}
        <section className="py-16 bg-white border-b border-gray-200" data-section="clearview-property-details">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2" data-metric="clearview-adr">
                {/* CLEARVIEW ONLY - DO NOT SHARE WITH OTHER GALLERIES */}
                <div className="text-4xl font-bold text-black" data-value="clearview-adr-value">
                  $450
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Average Daily Rate </div>
              </div>
              <div className="space-y-2" data-metric="clearview-bedrooms">
                {/* CLEARVIEW ONLY - DO NOT SHARE WITH OTHER GALLERIES */}
                <div className="text-4xl font-bold text-black" data-value="clearview-bedrooms-value">
                  6
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Bedrooms</div>
              </div>
              <div className="space-y-2" data-metric="clearview-bathrooms">
                {/* CLEARVIEW ONLY - DO NOT SHARE WITH OTHER GALLERIES */}
                <div className="text-4xl font-bold text-black" data-value="clearview-bathrooms-value">
                  {"3"}
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Bathrooms </div>
              </div>
              <div className="space-y-2" data-metric="clearview-land-size">
                {/* CLEARVIEW ONLY - DO NOT SHARE WITH OTHER GALLERIES */}
                <div className="text-4xl font-bold text-black" data-value="clearview-land-size-value">
                  346m²
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Floor Size </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Story */}
        <section className="py-28 md:py-40 bg-white" data-section="clearview-story">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="mb-12">
              <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">The Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-12 text-balance leading-tight">
              Fast-Tracked Transformation Under Tight Deadline
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed text-pretty mb-8">{property.description}</p>
          </div>
        </section>

        <section className="bg-gray-50 py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">The Finished Product</h2>
              <p className="text-xl text-gray-600">Luxe-styled rooms ready for premium guests</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Revenue Transformation */}
        <section className="py-28 bg-black text-white">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Revenue Transformation</h2>
              <p className="text-xl text-white/70">Traditional rental vs. Luxe-managed Airbnb performance</p>
            </div>

            {/* Annual Comparison */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-4 md:p-12 shadow-lg overflow-hidden w-full">
              <div className="w-full overflow-hidden">
                <ChartContainer
                  config={{
                    annual: {
                      label: "Annual Revenue (AUD)",
                      color: "#10b981",
                    },
                  }}
                  className="h-[280px] md:h-[450px] w-full"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={incomeComparisonData}
                      margin={{ top: 20, right: 10, left: 0, bottom: 85 }}
                      barCategoryGap="20%"
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis
                        dataKey="period"
                        tick={{ fill: "#fff", fontSize: 9 }}
                        tickLine={false}
                        angle={-45}
                        textAnchor="end"
                        height={100}
                        interval={0}
                      />
                      <YAxis
                        tick={{ fill: "#fff", fontSize: 9 }}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${value / 1000}k`}
                        width={35}
                      />
                      <ChartTooltip
                        content={<ChartTooltipContent />}
                        cursor={{ fill: "rgba(255,255,255,0.1)" }}
                        formatter={(value: number) => [`$${value.toLocaleString()}`, "Annual Revenue"]}
                      />
                      <Bar dataKey="annual" radius={[8, 8, 0, 0]} maxBarSize={70}>
                        {incomeComparisonData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white/10 rounded-xl">
                <div className="text-3xl font-bold text-red-400 mb-2">$41,600</div>
                <div className="text-sm text-white/70">Traditional Rental</div>
              </div>
              <div className="flex items-center justify-center">
                <DollarSign className="w-12 h-12 text-green-500" />
              </div>
              <div className="text-center p-6 bg-white/10 rounded-xl">
                <div className="text-3xl font-bold text-green-400 mb-2">$102,200</div>
                <div className="text-sm text-white/70">Luxe Airbnb</div>
              </div>
            </div>
            <div className="mt-6 text-center p-6 bg-green-500/20 rounded-xl border border-green-500/30">
              <p className="text-3xl font-bold text-green-400">+$60,600 additional annual revenue</p>
              <p className="text-white/90 mt-2">145% revenue increase with Luxe Management</p>
            </div>
          </div>
        </section>

        <section className="py-32 md:py-48 bg-gradient-to-br from-black via-gray-900 to-black text-white">
          <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
            <div className="mb-12">
              <span className="text-sm font-semibold text-white/50 uppercase tracking-wider">
                Ready to Transform Your Property?
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-tight">
              From Hesitation to High Performance
            </h2>
            <p className="text-2xl md:text-3xl text-white/80 leading-relaxed mb-12 text-balance max-w-3xl mx-auto">
              This owner trusted Luxe with a tight deadline and watched their property transform into a $102,200/year
              revenue generator. What could we do for yours?
            </p>

            <div className="mt-16">
              <button className="px-12 md:px-16 py-6 md:py-7 bg-white text-black text-xl md:text-2xl font-bold rounded-full hover:bg-green-500 hover:text-white hover:scale-105 transition-all duration-300 shadow-2xl">
                Book a Consultation Now
              </button>
              <p className="text-white/60 mt-6 italic text-xl">
                "Fast turnarounds. Exceptional results. That's the Luxe difference."
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
