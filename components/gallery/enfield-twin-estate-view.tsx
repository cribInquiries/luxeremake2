"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Sparkles, Home } from 'lucide-react'
import type { Property } from "@/lib/properties"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface EnfieldTwinEstateViewProps {
  property: Property
}

export function EnfieldTwinEstateView({ property }: EnfieldTwinEstateViewProps) {
  if (!property.transformationStory) return null

  const traditionalRentRevenue = [
    { month: 1, revenue: 3800 },
    { month: 2, revenue: 3800 },
    { month: 3, revenue: 3800 },
    { month: 4, revenue: 3800 },
    { month: 5, revenue: 3800 },
    { month: 6, revenue: 3800 },
    { month: 7, revenue: 3800 },
    { month: 8, revenue: 3800 },
    { month: 9, revenue: 3800 },
    { month: 10, revenue: 3800 },
    { month: 11, revenue: 3800 },
    { month: 12, revenue: 3800 },
  ]

  const luxeAirbnbRevenue = [
    { month: 1, revenue: 6500 },
    { month: 2, revenue: 7200 },
    { month: 3, revenue: 8100 },
    { month: 4, revenue: 8600 },
    { month: 5, revenue: 9200 },
    { month: 6, revenue: 8800 },
    { month: 7, revenue: 8300 },
    { month: 8, revenue: 8500 },
    { month: 9, revenue: 9000 },
    { month: 10, revenue: 9500 },
    { month: 11, revenue: 10200 },
    { month: 12, revenue: 11000 },
  ]

  const occupancyData = [
    { month: 1, rate: 78 },
    { month: 2, rate: 82 },
    { month: 3, rate: 85 },
    { month: 4, rate: 88 },
    { month: 5, rate: 90 },
    { month: 6, rate: 92 },
    { month: 7, rate: 91 },
    { month: 8, rate: 93 },
    { month: 9, rate: 92 },
    { month: 10, rate: 94 },
    { month: 11, rate: 93 },
    { month: 12, rate: 92 },
    { month: 13, rate: 91 },
    { month: 14, rate: 92 },
    { month: 15, rate: 93 },
    { month: 16, rate: 91 },
    { month: 17, rate: 92 },
    { month: 18, rate: 94 },
    { month: 19, rate: 93 },
    { month: 20, rate: 92 },
    { month: 21, rate: 93 },
    { month: 22, rate: 94 },
    { month: 23, rate: 92 },
    { month: 24, rate: 93 },
    { month: 25, rate: 92 },
    { month: 26, rate: 93 },
    { month: 27, rate: 92 },
    { month: 28, rate: 94 },
    { month: 29, rate: 93 },
    { month: 30, rate: 92 },
    { month: 31, rate: 93 },
    { month: 32, rate: 92 },
    { month: 33, rate: 94 },
    { month: 34, rate: 93 },
    { month: 35, rate: 92 },
    { month: 36, rate: 93 },
  ]

  const showcaseImages = [
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CyBiVfwpj8Y3SCUrreqxvZ66YRfkTm.png",
      title: "Gourmet Kitchen",
      description: "Modern appliances, timber cabinetry"
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-r6yHSPOuC3MVHUMqDh7epuuL4yZGKD.png",
      title: "Open-Plan Living",
      description: "Seamless kitchen-dining-lounge flow"
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1tSywHNSDSuaCWwQp92recB6GT0Ygb.png",
      title: "Entertainment Zone",
      description: "Table tennis & spacious lounge"
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-saZB1V6Q4hcxd83mUEDMmwlx4vjZP0.png",
      title: "Games Room",
      description: "Pool table & mezzanine lounge"
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CHoTMWkFoGkSKUJdfeU2K42diwcmsM.png",
      title: "Bedroom 1",
      description: "Botanical linens, timber nightstands"
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uNuSm1TJ2UTi3qVGBV7zGIJmc3R15c.png",
      title: "Bedroom 2",
      description: "Light-filled, contemporary styling"
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KOYuqnyeKbGIj7dSOq1j6ALOrWozfo.png",
      title: "Bathroom 1",
      description: "Vessel sink, timber vanity"
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CkRCgQnHuRlbgfPgbJ7gp02LeFfCvB.png",
      title: "Bathroom 2",
      description: "Dual sinks, spacious shower"
    },
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
      <section className="relative h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/design-mode/image(1).png"
            alt={property.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
            <Sparkles size={16} className="text-gray-300" />
            <span className="text-sm font-semibold text-white uppercase tracking-wider">
              Twin Property · Property #2
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tight text-balance leading-[0.95]">
            {property.title}
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl text-gray-200 font-light text-balance max-w-4xl mx-auto mb-6">
            The Sister Estate. Same Challenge. Same Excellence.
          </p>
          <p className="text-lg md:text-xl text-white/70 italic max-w-2xl mx-auto">
            Two identical homes. Two separate transformations. One proven blueprint.
          </p>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
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
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">92%</div>
              <div className="text-gray-600">Occupancy</div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-violet-50 rounded-xl">
              <div className="text-2xl font-bold text-violet-600 mb-2">Twin Property</div>
              <div className="text-gray-600">Sister to Property #1</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-2xl font-bold text-green-600 mb-2">5 Bedrooms</div>
              <div className="text-gray-600">Group Accommodation</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-gray-600 mb-2">Proven Model</div>
              <div className="text-gray-600">Blueprint Applied</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Twin Story */}
      <section className="py-28 md:py-40 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">The Twin Estate</h2>
          </div>
          <div className="space-y-6 text-xl md:text-2xl text-gray-700 leading-relaxed">
            <p className="text-pretty">
              After the success of the original Enfield property, something remarkable happened.
            </p>
            <p className="text-pretty">
              Right next door stood its architectural twin — an identical five-bedroom modern home with the same pristine finish, the same bold design, and the same untapped potential.
            </p>
            <p className="text-pretty font-semibold text-black">
              Two identical houses. Two separate owners. Both treated as individual projects.
            </p>
            <div className="my-12 text-center p-12 bg-gradient-to-br from-violet-100 to-purple-100 rounded-3xl shadow-2xl">
              <p className="text-gray-700 text-lg font-medium mb-4">The Twin Challenge</p>
              <p className="text-6xl md:text-7xl font-black text-violet-600 mb-4">Same Blueprint</p>
              <div className="h-1 w-32 bg-violet-300 mx-auto mb-6" />
              <p className="text-xl text-gray-700 font-medium">Applied to an identical property</p>
              <p className="text-gray-600 mt-2">Separate transformation. Equal success.</p>
            </div>
            <p className="text-pretty">
              Where the first property taught us what was possible, the twin estate proved it was repeatable.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-28 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">The Proven System</h2>
          </div>
          <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/90">
            <p className="text-pretty">
              This time, we knew exactly what to do. The blueprint from Property #1 became the foundation.
            </p>
            <p className="text-pretty">
              Same strategic approach. Same attention to detail. Same level of excellence.
            </p>
            <p className="text-pretty">
              Room by room, we recreated the magic — transforming another blank canvas into a luxury group stay.
            </p>
            <div className="flex flex-wrap justify-center gap-4 py-8">
              <span className="px-6 py-3 bg-white/10 rounded-full text-lg">Pool Table</span>
              <span className="px-6 py-3 bg-white/10 rounded-full text-lg">Table Tennis</span>
              <span className="px-6 py-3 bg-white/10 rounded-full text-lg">Premium Kitchen</span>
              <span className="px-6 py-3 bg-white/10 rounded-full text-lg">Multiple Living Zones</span>
              <span className="px-6 py-3 bg-white/10 rounded-full text-lg">Cohesive Styling</span>
            </div>
            <p className="text-pretty font-semibold text-white">
              What was once an impossible challenge became a proven formula for success.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-violet-500/10 backdrop-blur-sm rounded-2xl border border-violet-500/20">
              <h3 className="text-2xl font-bold mb-4 text-violet-400">Property #1</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-violet-400 mt-1">★</span>
                  <span>The breakthrough challenge</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-400 mt-1">★</span>
                  <span>Built from scratch</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-400 mt-1">★</span>
                  <span>Created the blueprint</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-400 mt-1">★</span>
                  <span>Proved it was possible</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-green-500/10 backdrop-blur-sm rounded-2xl border border-green-500/20">
              <h3 className="text-2xl font-bold mb-4 text-green-400">Property #2 (Twin)</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Applied proven system</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Refined the approach</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Matched the quality</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Proved it's repeatable</span>
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
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">The Twin Property</h2>
            <p className="text-xl text-gray-600">Same architectural excellence, same luxury finish</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {showcaseImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3]">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exterior Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[21/9]">
            <Image
              src="/images/design-mode/image(1).png"
              alt="Modern exterior of Enfield Twin Estate"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="text-center mt-8">
            <h3 className="text-3xl font-bold text-black mb-2">Identical Architecture</h3>
            <p className="text-xl text-gray-600">Twin properties, twin transformations, twin success stories</p>
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Proven Performance</h2>
            <p className="text-xl text-gray-600">The twin estate delivers identical excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="text-center p-8 bg-gray-50 rounded-2xl border-2 border-gray-200">
              <div className="text-5xl font-bold text-gray-600 mb-3">$950</div>
              <div className="text-gray-700 font-semibold mb-2">Traditional Rent</div>
              <div className="text-gray-500 text-sm">Per week, year-round</div>
            </div>

            <div className="text-center p-8 bg-green-50 rounded-2xl border-2 border-green-500 shadow-xl transform scale-105">
              <div className="text-5xl font-bold text-green-600 mb-3">$2,000</div>
              <div className="text-gray-700 font-semibold mb-2">With Luxe Management</div>
              <div className="text-gray-500 text-sm">Per week average</div>
            </div>

            <div className="text-center p-8 bg-sky-50 rounded-2xl border-2 border-sky-200">
              <div className="text-5xl font-bold text-sky-600 mb-3">92%</div>
              <div className="text-gray-700 font-semibold mb-2">Occupancy Rate</div>
              <div className="text-gray-500 text-sm">Consistently high</div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-lg mb-12">
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
                <LineChart>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis 
                    type="number"
                    dataKey="month"
                    tick={{ fill: '#666', fontSize: 14 }}
                    tickLine={false}
                    label={{ value: 'Months', position: 'insideBottom', offset: -5, fill: '#666' }}
                  />
                  <YAxis 
                    tick={{ fill: '#666', fontSize: 14 }}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${(value / 1000)}k`}
                  />
                  <ChartTooltip 
                    content={<ChartTooltipContent />}
                    cursor={{ stroke: '#e5e7eb', strokeWidth: 2 }}
                  />
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
                    dot={{ fill: '#10b981', r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>

            <div className="mt-12 flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500" />
                <span className="text-gray-600">Traditional: $3,800/month</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-green-500" />
                <span className="text-gray-600">Luxe: $8,667/month avg</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-3xl p-8 md:p-12 shadow-lg mb-12">
            <h3 className="text-3xl font-bold text-black mb-8 text-center">Occupancy Rate Over 3 Years</h3>
            <ChartContainer
              config={{
                occupancy: {
                  label: "Occupancy Rate",
                  color: "#0ea5e9",
                },
              }}
              className="h-[400px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={occupancyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0f2fe" />
                  <XAxis 
                    dataKey="month"
                    tick={{ fill: '#666', fontSize: 14 }}
                    tickLine={false}
                    label={{ value: 'Months Since Launch', position: 'insideBottom', offset: -5, fill: '#666' }}
                  />
                  <YAxis 
                    tick={{ fill: '#666', fontSize: 14 }}
                    tickLine={false}
                    axisLine={false}
                    domain={[70, 100]}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <ChartTooltip 
                    content={<ChartTooltipContent />}
                    cursor={{ stroke: '#bae6fd', strokeWidth: 2 }}
                    formatter={(value: number) => [`${value}%`, 'Occupancy']}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="rate" 
                    stroke="#0ea5e9" 
                    strokeWidth={3}
                    name="Occupancy Rate"
                    dot={{ fill: '#0ea5e9', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>

            <div className="mt-8 text-center">
              <p className="text-2xl font-bold text-sky-600">Average 92% occupancy maintained</p>
              <p className="text-gray-600 mt-2">Matching the performance of the original property</p>
            </div>
          </div>

          <div className="text-center p-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl shadow-2xl">
            <p className="text-4xl font-bold text-white mb-2">+$54,600 extra per year</p>
            <p className="text-white/90 text-xl">111% increase over traditional renting</p>
          </div>
        </div>
      </section>

      {/* What This Proves */}
      <section className="py-28 md:py-40 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">What The Twin Proves</h2>
          </div>
          <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/90">
            <p className="text-pretty">
              The first Enfield property taught us what was possible. The twin estate proved it wasn't luck.
            </p>
            <div className="my-12 grid grid-cols-2 gap-4 text-center">
              <div className="p-6 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-xl border border-violet-500/30">
                <p className="text-2xl font-bold text-violet-300">Repeatable</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30">
                <p className="text-2xl font-bold text-green-300">Reliable</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-sky-500/20 to-cyan-500/20 rounded-xl border border-sky-500/30">
                <p className="text-2xl font-bold text-sky-300">Scalable</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-gray-500/20 to-slate-500/20 rounded-xl border border-gray-500/30">
                <p className="text-2xl font-bold text-gray-300">Proven</p>
              </div>
            </div>
            <p className="text-pretty text-2xl md:text-3xl font-bold text-white text-center">
              Two identical homes. Two separate transformations.
            </p>
            <p className="text-pretty text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent">
              One system that works — every single time.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 md:py-48 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <div className="mb-8">
            <span className="text-sm font-semibold text-white/50 uppercase tracking-wider">
              Proven. Repeatable. Reliable.
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-tight">
            The twin estate proved our system works.
          </h2>
          <p className="text-3xl md:text-4xl text-white font-bold mb-12 text-balance">
            Let us prove it for your property.
          </p>

          <div className="mt-16">
            <button className="px-12 md:px-16 py-6 md:py-7 bg-gradient-to-r from-violet-500 to-emerald-500 text-white text-xl md:text-2xl font-bold rounded-full hover:from-violet-600 hover:to-emerald-600 hover:scale-105 transition-all duration-300 shadow-2xl">
              Work with Luxe
            </button>
            <p className="text-white/60 mt-6">Excellence isn't an accident. It's a system.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
