"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin } from "lucide-react"
import type { Property } from "@/lib/properties"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface SeafordTransformationViewProps {
  property: Property
}

export function SeafordTransformationView({ property }: SeafordTransformationViewProps) {
  if (!property.transformationStory) return null

  const story = property.transformationStory

  // Weekly revenue comparison - Traditional Rent vs Summer Peak vs Year Average
  const weeklyRevenueData = [
    { period: "Traditional Rent", revenue: 550, color: "#ef4444" },
    { period: "Peak Summer", revenue: 1800, color: "#10b981" },
    { period: "Annual Average", revenue: 1000, color: "#3b82f6" },
  ]

  // Monthly seasonal performance showing summer spike
  const seasonalPerformance = [
    { month: "Jan", revenue: 1800, season: "Summer" },
    { month: "Feb", revenue: 1750, season: "Summer" },
    { month: "Mar", revenue: 1600, season: "Autumn" },
    { month: "Apr", revenue: 0, season: "Owner" },
    { month: "May", revenue: 0, season: "Owner" },
    { month: "Jun", revenue: 0, season: "Owner" },
    { month: "Jul", revenue: 0, season: "Owner" },
    { month: "Aug", revenue: 0, season: "Owner" },
    { month: "Sep", revenue: 650, season: "Spring" },
    { month: "Oct", revenue: 950, season: "Spring" },
    { month: "Nov", revenue: 1200, season: "Summer" },
    { month: "Dec", revenue: 1700, season: "Summer" },
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

      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden pb-20">
        <div className="absolute inset-0">
          <Image
            src="/images/design-mode/hero%20photo.jpg"
            alt={property.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 text-center pb-8 md:pb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
            <MapPin size={16} className="text-sky-300" />
            <span className="text-sm font-semibold text-white uppercase tracking-wider">Coastal Success Story</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tight text-balance leading-[0.95] drop-shadow-lg">
            {property.title}
          </h1>
          <p className="text-base md:text-lg text-white/70 mb-2">{property.subheading}</p>
          <p
            className="text-lg md:text-xl text-white font-medium italic max-w-2xl mx-auto"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
          >
            Some properties test your creativity. Some test your design. But Seaford… tested our reach.
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
              <div className="text-4xl font-bold text-black mb-2">1</div>
              <div className="text-gray-600">Bathroom</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">$2,100</div>
              <div className="text-gray-600">Peak Week</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">$900</div>
              <div className="text-gray-600">Avg/Week</div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-sky-50 rounded-xl">
              <div className="text-2xl font-bold text-sky-600 mb-2">Owner-Occupied</div>
              <div className="text-gray-600">Winter Months</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-2xl font-bold text-green-600 mb-2">Luxe-Managed</div>
              <div className="text-gray-600">Summer Season</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-2xl font-bold text-blue-600 mb-2">Coastal</div>
              <div className="text-gray-600">5 mins from Seaford Beach</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-28 md:py-40 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">The Challenge</h2>
          </div>
          <div className="space-y-6 text-xl md:text-2xl text-gray-700 leading-relaxed">
            <p className="text-pretty">
              A three-bedroom coastal home, far from central Adelaide — beautiful, quiet, and undeniably outside the
              usual orbit of most short-stay operators.
            </p>
            <p className="text-pretty">
              The owner wanted to live in it during winter and transform it into a high-performing Airbnb during summer.
              But in rural-fringe locations, even finding a reliable cleaner can feel impossible.
            </p>
            <p className="text-pretty font-semibold text-black">Most companies would have stopped there. We didn't.</p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-28 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Going Beyond the City Line</h2>
          </div>
          <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/90">
            <p className="text-pretty">
              At Luxe, we've built a team that doesn't shy away from distance — they embrace it.
            </p>
            <p className="text-pretty">
              Cleaners and contractors who travel through thick and thin to deliver the same standard of excellence
              guests expect in the CBD.
            </p>
            <p className="text-pretty font-semibold text-white">
              No shortcuts. No compromises. Just consistency, wherever the map takes us.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">The Problem</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Distance from Adelaide CBD</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Limited local operators</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Seasonal management needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Most companies refused</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-green-500/10 backdrop-blur-sm rounded-2xl border border-green-500/20">
              <h3 className="text-2xl font-bold mb-4 text-green-400">Luxe Solution</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Travel-ready cleaning team</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Remote management systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Flexible seasonal operation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>CBD-level excellence everywhere</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Transformation */}
      <section className="py-28 md:py-40 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">The Transformation of a Coastal Home</h2>
          </div>
          <div className="space-y-6 text-xl md:text-2xl text-gray-700 leading-relaxed">
            <p className="text-pretty">
              Once furnished and elevated to Luxe standards, the true potential of the home revealed itself.
            </p>
            <p className="text-pretty">Long-term rent would have earned ~$621 per week. Steady… but limited.</p>
            <p className="text-pretty">Short-stay performance, however? A completely different story.</p>
            <p className="text-pretty font-semibold text-black">
              During peak summer, the property now earns ~$2,100 per week. Across the year, the client averages ~$900
              per week — almost double the long-term value.
            </p>
            <p className="text-pretty text-green-600 font-semibold">A remote location became a summer powerhouse.</p>
          </div>
        </div>
      </section>

      {/* Before & After Photos */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">The Visual Journey</h2>
            <p className="text-xl text-gray-600">See how we transformed every space into a coastal sanctuary</p>
          </div>

          {/* Living Room Transformation */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-black mb-8 text-center">Living Space</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative group overflow-hidden rounded-2xl shadow-xl aspect-[4/3]">
                <Image
                  src="/images/design-mode/%7B81B22062-3E2A-4DA1-8C87-B7173C192C4C%7D.png"
                  alt="Living room before - dated yellow walls and plaid furniture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                  Before
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-2xl shadow-xl aspect-[4/3]">
                <Image
                  src="/images/design-mode/sfnewlounge.jpg"
                  alt="Living room after - modern coastal design with arched windows"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                  After
                </div>
              </div>
            </div>
          </div>

          {/* Kitchen Transformation */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-black mb-8 text-center">Kitchen</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative group overflow-hidden rounded-2xl shadow-xl aspect-[4/3]">
                <Image
                  src="/images/design-mode/v0_image.png"
                  alt="Kitchen before - dated with brown tiles"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                  Before
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-2xl shadow-xl aspect-[4/3]">
                <Image
                  src="/images/design-mode/sfnewkitchen.jpg"
                  alt="Kitchen after - modern white cabinets with coastal finishes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                  After
                </div>
              </div>
            </div>
          </div>

          {/* Bedroom Transformation */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-black mb-8 text-center">Bedroom</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative group overflow-hidden rounded-2xl shadow-xl aspect-[4/3]">
                <Image
                  src="/images/design-mode/%7B1552307D-417A-4ECF-B9DF-C3275F258851%7D.png"
                  alt="Bedroom before - yellow walls with dated wooden furniture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                  Before
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-2xl shadow-xl aspect-[4/3]">
                <Image
                  src="/images/design-mode/sfnewbedroom.jpg"
                  alt="Bedroom after - modern gray tufted headboard with arched window"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                  After
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Revenue Comparison */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">The Numbers — Elevated</h2>
            <p className="text-xl text-gray-600">Revenue comparison across different management strategies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-8 bg-red-50 rounded-2xl border-2 border-red-200">
              <div className="text-5xl font-bold text-red-600 mb-3">$621</div>
              <div className="text-gray-700 font-semibold mb-2">Traditional Rent</div>
              <div className="text-gray-500 text-sm">$32,320 yearly</div>
            </div>

            <div className="text-center p-8 bg-green-50 rounded-2xl border-2 border-green-500 shadow-xl transform scale-105">
              <div className="text-5xl font-bold text-green-600 mb-3">$2,100</div>
              <div className="text-gray-700 font-semibold mb-2">Peak Summer with Luxe</div>
              <div className="text-gray-500 text-sm">Per week, high season</div>
            </div>

            <div className="text-center p-8 bg-blue-50 rounded-2xl border-2 border-blue-200">
              <div className="text-5xl font-bold text-blue-600 mb-3">$900</div>
              <div className="text-gray-700 font-semibold mb-2">Annual Average</div>
              <div className="text-gray-500 text-sm">Per week, across year</div>
            </div>
          </div>

          <div className="mt-12 text-center p-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl shadow-2xl">
            <p className="text-4xl font-bold text-white mb-2">$27,680 extra per year</p>
            <p className="text-white/90 text-xl">86% increase over traditional renting</p>
          </div>
        </div>
      </section>

      {/* Seasonal Performance Chart */}
      <section className="py-28 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Seasonal Performance</h2>
            <p className="text-xl text-white/70">Monthly revenue showing summer peaks and owner-occupied periods</p>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12">
            <ChartContainer
              config={{
                revenue: {
                  label: "Weekly Revenue",
                  color: "#10b981",
                },
              }}
              className="h-[500px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={seasonalPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="month" tick={{ fill: "#fff", fontSize: 14 }} tickLine={false} />
                  <YAxis
                    tick={{ fill: "#fff", fontSize: 14 }}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value / 1000}k`}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} cursor={{ strokeDasharray: "3 3" }} />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#10b981"
                    strokeWidth={3}
                    dot={{ fill: "#10b981", r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-green-500/20 rounded-lg">
                <div className="text-sm text-white/60 mb-1">Summer Peak</div>
                <div className="text-lg font-bold text-green-400">$1,800/wk</div>
              </div>
              <div className="p-4 bg-blue-500/20 rounded-lg">
                <div className="text-sm text-white/60 mb-1">Spring/Autumn</div>
                <div className="text-lg font-bold text-blue-400">$900/wk</div>
              </div>
              <div className="p-4 bg-gray-500/20 rounded-lg">
                <div className="text-sm text-white/60 mb-1">Owner Period</div>
                <div className="text-lg font-bold text-gray-400">$0/wk</div>
              </div>
              <div className="p-4 bg-white/10 rounded-lg">
                <div className="text-sm text-white/60 mb-1">Annual Avg</div>
                <div className="text-lg font-bold text-white">$1,000/wk</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What This Represents */}
      <section className="py-28 md:py-40 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">What This Story Represents</h2>
          </div>
          <div className="space-y-6 text-xl md:text-2xl text-gray-700 leading-relaxed">
            <p className="text-pretty">
              This isn't just a property we manage. It's proof of what happens when you refuse to limit potential based
              on location.
            </p>
            <div className="my-12 grid grid-cols-2 gap-4 text-center">
              <div className="p-6 bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl">
                <p className="text-2xl font-bold text-sky-600">The coast.</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl">
                <p className="text-2xl font-bold text-emerald-600">The hills.</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl">
                <p className="text-2xl font-bold text-violet-600">The suburbs.</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
                <p className="text-2xl font-bold text-amber-600">The city.</p>
              </div>
            </div>
            <p className="text-pretty text-2xl md:text-3xl font-bold text-black text-center">
              We go where others won't. We deliver what others can't.
            </p>
            <p className="text-pretty text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
              Because excellence isn't a location. It's a standard.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 md:py-48 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <div className="mb-8">
            <span className="text-sm font-semibold text-white/50 uppercase tracking-wider">Ready to Perform</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-tight">
            If you're ready for your property to perform,
          </h2>
          <p className="text-3xl md:text-4xl text-white font-bold mb-12 text-balance">
            Luxe is ready to take it there.
          </p>

          <div className="mt-16">
            <button className="px-12 md:px-16 py-6 md:py-7 bg-gradient-to-r from-sky-500 to-emerald-500 text-white text-xl md:text-2xl font-bold rounded-full hover:from-sky-600 hover:to-emerald-600 hover:scale-105 transition-all duration-300 shadow-2xl">
              Book Your Free Consultation
            </button>
            <p className="text-white/60 mt-6">Distance is not a barrier. It's an opportunity.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
