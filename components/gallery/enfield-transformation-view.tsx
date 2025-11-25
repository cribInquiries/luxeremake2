"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Sparkles } from "lucide-react"
import type { Property } from "@/lib/properties"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ImageLightbox } from "@/components/image-lightbox"
import { useState } from "react"

interface EnfieldTransformationViewProps {
  property: Property
}

export function EnfieldTransformationView({ property }: EnfieldTransformationViewProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % showcaseImages.length)
  }

  const previousImage = () => {
    setLightboxIndex((prev) => (prev - 1 + showcaseImages.length) % showcaseImages.length)
  }

  const monthlyRevenueData = [
    { month: 1, traditional: 2800, luxe: 3200 },
    { month: 2, traditional: 2800, luxe: 3800 },
    { month: 3, traditional: 2800, luxe: 4100 },
    { month: 4, traditional: 2800, luxe: 4400 },
    { month: 5, traditional: 2800, luxe: 4700 },
    { month: 6, traditional: 2800, luxe: 4500 },
    { month: 7, traditional: 2800, luxe: 4200 },
    { month: 8, traditional: 2800, luxe: 4300 },
    { month: 9, traditional: 2800, luxe: 4600 },
    { month: 10, traditional: 2800, luxe: 4900 },
    { month: 11, traditional: 2800, luxe: 5200 },
    { month: 12, traditional: 2800, luxe: 5500 },
  ]

  const showcaseImages = [
    {
      url: "/images/enfield-kitchen.png",
      title: "Gourmet Kitchen",
      description: "Modern appliances, timber cabinetry",
    },
    {
      url: "/images/enfield-dining-living-photo.png",
      title: "Open-Plan Living",
      description: "Seamless kitchen-dining-lounge flow",
    },
    {
      url: "/images/enfield-patio.png",
      title: "Entertainment Zone",
      description: "Covered outdoor patio & dining",
    },
    {
      url: "/images/enfield-game-room.png",
      title: "Games Room",
      description: "Pool table & mezzanine lounge",
    },
    {
      url: "/images/enfield-bathroom1.png",
      title: "Bathroom 1",
      description: "Dual sinks, timber vanity & walk-in shower",
    },
    {
      url: "/images/enfield-bathroom2.png",
      title: "Bathroom 2",
      description: "Compact, contemporary styling",
    },
  ]

  if (!property.transformationStory) return null

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

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/enfield-game-room.png"
            alt={property.title}
            fill
            className="object-cover scale-125 transition-transform duration-[20s] hover:scale-[1.35]"
            priority
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
            <Sparkles size={16} className="text-gray-300" />
            <span className="text-sm font-semibold text-white uppercase tracking-wider">
              Origin Story · Property #1
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tight text-balance leading-[0.95]">
            {property.title}
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl text-gray-200 font-light text-balance max-w-4xl mx-auto mb-6">
            The First. The Breakthrough. The Blueprint.
          </p>
          <p className="text-lg md:text-xl text-white/70 italic max-w-2xl mx-auto">
            Every company has a defining moment. For Luxe, it was a $5,000 miracle.
          </p>
        </div>
      </section>

      {/* Property Stats */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">{property.bedrooms}</div>
              <div className="text-gray-600">Bedrooms</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">{property.bathrooms}</div>
              <div className="text-gray-600">Bathrooms</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">$2,000</div>
              <div className="text-gray-600">Peak Week</div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-sky-50 rounded-xl">
              <div className="text-2xl font-bold text-sky-600 mb-2">$5,000 Budget</div>
              <div className="text-gray-600">Full Furnishing</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-2xl font-bold text-green-600 mb-2">5 Bedrooms</div>
              <div className="text-gray-600">Group Accommodation</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-gray-600 mb-2">Property #1</div>
              <div className="text-gray-600">First Ever</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-28 md:py-40 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">The Impossible Challenge</h2>
          </div>
          <div className="space-y-6 text-xl md:text-2xl text-gray-700 leading-relaxed">
            <p className="text-pretty">
              A brand-new, five-bedroom modern home in Adelaide. Bold. Bright. Architecturally pristine.
            </p>
            <p className="text-pretty">Our first ever property. Our first real test.</p>
            <p className="text-pretty">It arrived with a challenge most operators would decline immediately:</p>
            <div className="my-12 text-center p-12 bg-gradient-to-br from-gray-800 to-black rounded-3xl shadow-2xl">
              <p className="text-white/80 text-lg font-medium mb-4">Total Furnishing Budget</p>
              <p className="text-8xl md:text-9xl font-black text-white mb-4">$5K</p>
              <div className="h-1 w-32 bg-white/30 mx-auto mb-6" />
              <p className="text-xl text-white/90 font-medium">For a 5-bedroom home</p>
              <p className="text-white/70 mt-2">Brand new. Completely empty.</p>
            </div>
            <p className="text-pretty font-semibold text-black">
              Even we hesitated. But this was the opportunity that would shape who we became.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-28 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">The $5,000 Miracle</h2>
          </div>
          <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/90">
            <p className="text-pretty">For the first and only time, Luxe pushed itself to the absolute edge.</p>
            <p className="text-pretty">
              We worked late. We strategised every dollar. We designed with intention, not expense.
            </p>
            <p className="text-pretty">
              Room by room, we transformed the blank canvas into a fully realised luxury stay.
            </p>
            <div className="flex flex-wrap justify-center gap-4 py-8">
              <span className="px-6 py-3 bg-white/10 rounded-full text-lg">Pool Table</span>
              <span className="px-6 py-3 bg-white/10 rounded-full text-lg">Table Tennis</span>
              <span className="px-6 py-3 bg-white/10 rounded-full text-lg">Premium Kitchen</span>
              <span className="px-6 py-3 bg-white/10 rounded-full text-lg">Multiple Living Zones</span>
              <span className="px-6 py-3 bg-white/10 rounded-full text-lg">Cohesive Styling</span>
            </div>
            <p className="text-pretty font-semibold text-white">
              The kind of setup that shouldn't have been possible for a home of this size. But possible is what we do.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Only $5,000 budget</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Five bedrooms to furnish</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>High-end property expectations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>First property launch</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-green-500/10 backdrop-blur-sm rounded-2xl border border-green-500/20">
              <h3 className="text-2xl font-bold mb-4 text-green-400">Luxe Solution</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Strategic furniture sourcing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Entertainment features added</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Cohesive luxury aesthetic</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Premium guest experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Property Showcase */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">The Finished Property</h2>
            <p className="text-xl text-gray-600">Every space designed to create an unforgettable stay</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {showcaseImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3] cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.url || "/placeholder.svg"}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-1">{image.title}</h3>
                  <p className="text-white/80">{image.description}</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/0 group-hover:bg-white/90 backdrop-blur-sm flex items-center justify-center transform scale-0 group-hover:scale-100 transition-all duration-300">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Performance That Changed Everything</h2>
            <p className="text-xl text-gray-600">Revenue comparison: traditional rent vs Luxe management</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="text-center p-8 bg-gray-50 rounded-2xl border-2 border-gray-200">
              <div className="text-5xl font-bold text-gray-600 mb-3">$900</div>
              <div className="text-gray-700 font-semibold mb-2">Traditional Rent</div>
              <div className="text-gray-500 text-sm">Per week, year-round</div>
            </div>

            <div className="text-center p-8 bg-green-50 rounded-2xl border-2 border-green-500 shadow-xl transform scale-105">
              <div className="text-5xl font-bold text-green-600 mb-3">$2,000</div>
              <div className="text-gray-700 font-semibold mb-2">With Luxe Management</div>
              <div className="text-gray-500 text-sm">Per week average</div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12">
            <h3 className="text-3xl font-bold text-black mb-8 text-center">Monthly Revenue Comparison</h3>
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
                <LineChart data={monthlyRevenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="month"
                    tick={{ fill: "#666", fontSize: 14 }}
                    tickLine={false}
                    label={{ value: "Months Active", position: "insideBottom", offset: -5, fill: "#666" }}
                    domain={[1, 12]}
                  />
                  <YAxis
                    tick={{ fill: "#666", fontSize: 14 }}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value / 1000}k`}
                    label={{ value: "Revenue", angle: -90, position: "insideLeft", fill: "#666" }}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} cursor={{ stroke: "#e5e7eb", strokeWidth: 2 }} />
                  <Line
                    type="monotone"
                    dataKey="traditional"
                    stroke="#ef4444"
                    strokeWidth={3}
                    name="Traditional Rent"
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="luxe"
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
                <span className="text-gray-600">Traditional: $2,800/month</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-green-500" />
                <span className="text-gray-600">Luxe: $3,200/month avg</span>
              </div>
            </div>
          </div>

          <div className="text-center p-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl shadow-2xl">
            <p className="text-4xl font-bold text-white mb-2">+$4,000 extra per year</p>
            <p className="text-white/90 text-xl">111% increase over traditional renting</p>
          </div>
        </div>
      </section>

      {/* The Cleaning Challenge */}
      <section className="py-28 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">The Hidden Challenge</h2>
          </div>
          <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/90">
            <p className="text-pretty">But the home had a hidden challenge that threatened profitability:</p>
            <ul className="space-y-4 text-xl pl-6">
              <li className="flex items-start gap-4">
                <span className="text-gray-400 text-2xl">•</span>
                <span>{"High-Gloss Flooring"}</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gray-400 text-2xl">•</span>
                <span>Ultra-white interior palette</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gray-400 text-2xl">•</span>
                <span>Massive feature carpet</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gray-400 text-2xl">•</span>
                <span>High-Gloss fingerprint prone surfaces</span>
              </li>
            </ul>
            <p className="text-pretty font-semibold text-white">
              External cleaners quoted $400+ per stay. Making the operation unsustainable.
            </p>
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 my-12">
              <p className="text-3xl font-bold text-white mb-4">So we made a decision that changed Luxe forever:</p>
              <p className="text-2xl font-semibold text-white">We created our own in-house cleaning team.</p>
            </div>
            <p className="text-pretty">Trained in-house. Quality-controlled. Detail-obsessed.</p>
            <p className="text-pretty text-white/70 italic">
              This wasn't just cost-saving — it became the foundation of the Luxe standard that every property benefits
              from today.
            </p>
          </div>
        </div>
      </section>

      {/* What This Represents */}
      <section className="py-28 md:py-40 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">What Enfield Represents</h2>
          </div>
          <div className="space-y-6 text-xl md:text-2xl text-gray-700 leading-relaxed">
            <p className="text-pretty">
              Enfield wasn't just a property we managed. It was the project that taught us everything.
            </p>
            <div className="my-12 grid grid-cols-2 gap-4 text-center">
              <div className="p-6 bg-gradient-to-br from-sky-50 to-cyan-50 rounded-xl">
                <p className="text-2xl font-bold text-sky-600">Budget mastery</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                <p className="text-2xl font-bold text-green-600">Design at scale</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl">
                <p className="text-2xl font-bold text-violet-600">Problem solving</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl">
                <p className="text-2xl font-bold text-gray-600">System building</p>
              </div>
            </div>
            <p className="text-pretty text-2xl md:text-3xl font-bold text-black text-center">
              This home didn't just teach us how to manage properties.
            </p>
            <p className="text-pretty text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
              It taught us how to build excellence from constraints.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 md:py-48 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <div className="mb-8">
            <span className="text-sm font-semibold text-white/50 uppercase tracking-wider">
              The Foundation of Excellence
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-tight">
            Enfield set our standard.
          </h2>
          <p className="text-3xl md:text-4xl text-white font-bold mb-12 text-balance">Now let us set yours.</p>

          <div className="mt-16">
            <button className="px-12 md:px-16 py-6 md:py-7 bg-gradient-to-r from-sky-500 to-emerald-500 text-white text-xl md:text-2xl font-bold rounded-full hover:from-sky-600 hover:to-emerald-600 hover:scale-105 transition-all duration-300 shadow-2xl">
              Work with Luxe
            </button>
            <p className="text-white/60 mt-6">The first property that defined everything we do.</p>
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <ImageLightbox
          images={showcaseImages.map((img) => img.url)}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      )}
    </div>
  )
}
