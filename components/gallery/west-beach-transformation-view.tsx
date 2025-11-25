"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Bed, Bath, Square } from "lucide-react"
import type { Property } from "@/lib/properties"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface WestBeachTransformationViewProps {
  property: Property
}

export function WestBeachTransformationView({ property }: WestBeachTransformationViewProps) {
  if (!property.transformationStory) return null

  const story = property.transformationStory

  const monthlyRevenueData = [
    { month: "Jan", traditional: 2300, luxe: 5900 },
    { month: "Feb", traditional: 2300, luxe: 6000 },
    { month: "Mar", traditional: 2300, luxe: 5500 },
    { month: "Apr", traditional: 2300, luxe: 5000 },
    { month: "May", traditional: 2300, luxe: 4500 },
    { month: "Jun", traditional: 2300, luxe: 4100 },
    { month: "Jul", traditional: 2300, luxe: 4000 },
    { month: "Aug", traditional: 2300, luxe: 4100 },
    { month: "Sep", traditional: 2300, luxe: 4500 },
    { month: "Oct", traditional: 2300, luxe: 5000 },
    { month: "Nov", traditional: 2300, luxe: 5500 },
    { month: "Dec", traditional: 2300, luxe: 5900 },
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
        {/* Hero Section - Cover */}
        <section className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={property.mainImage || "/placeholder.svg"}
              alt={property.title}
              fill
              className="object-cover opacity-60 scale-125 transition-transform duration-[20s] ease-out hover:scale-[1.35]"
              priority
              sizes="100vw"
            />
          </div>

          <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 text-center">
            <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <span className="text-sm font-semibold text-white uppercase tracking-wider">Success Story</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tight text-balance leading-[0.95]">
              {property.title}
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-light text-balance max-w-4xl mx-auto">
              {property.subheading}
            </p>
          </div>
        </section>

        {/* Property Details Section */}
        <section className="py-16 bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Location</div>
                  <div className="text-lg font-bold text-black">West Beach</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0">
                  <Bed className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Bedrooms</div>
                  <div className="text-lg font-bold text-black">{property.bedrooms}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0">
                  <Bath className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Bathrooms</div>
                  <div className="text-lg font-bold text-black">{property.bathrooms}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0">
                  <Square className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Land Size</div>
                  <div className="text-lg font-bold text-black">{property.sqft} sqm</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Details Section */}
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
                <div className="text-4xl font-bold text-black mb-2">{property.sqft}</div>
                <div className="text-gray-600">sqm</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-2">$250</div>
                <div className="text-gray-600">ADR/Night</div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <div className="inline-block px-8 py-4 bg-green-50 rounded-2xl">
                <div className="text-3xl font-bold text-green-600">$64,000/year</div>
                <div className="text-gray-600 mt-1">Annual Revenue</div>
              </div>
            </div>
          </div>
        </section>

        {/* The Story */}
        <section className="py-28 md:py-40 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="mb-12">
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">The Story</h2>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-pretty">{property.description}</p>
          </div>
        </section>

        {/* Before & After Journey - Side by Side */}
        <section className="py-28 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">The Transformation Journey</h2>
              <p className="text-xl text-gray-600">Side-by-side comparison of before and after working with Luxe</p>
            </div>

            <div className="space-y-16">
              {/* Bathroom Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/before-west-bathroom.jpg"
                      alt="Bathroom before Luxe transformation"
                      fill
                      className="object-cover grayscale-[30%] scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-900">Before</p>
                    <p className="text-gray-600">Basic, dated bathroom setup</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-green-500/20">
                    <Image
                      src="/images/design-mode/bathroomnew.jpg"
                      alt="Bathroom after Luxe transformation"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-green-600">After Luxe</p>
                    <p className="text-gray-600">Modern coastal bathroom with hotel-quality finishes</p>
                  </div>
                </div>
              </div>

              {/* Kitchen Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/design-mode/kitchenold.jpg"
                      alt="Kitchen before Luxe transformation"
                      fill
                      className="object-cover grayscale-[30%] scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-900">Before</p>
                    <p className="text-gray-600">Functional but plain kitchen</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-green-500/20">
                    <Image
                      src="/images/design-mode/kitchennew.jpg"
                      alt="Kitchen after Luxe transformation"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-green-600">After Luxe</p>
                    <p className="text-gray-600">Contemporary kitchen with premium appliances</p>
                  </div>
                </div>
              </div>

              {/* Living Area Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/design-mode/loungeold.jpg"
                      alt="Lounge before Luxe transformation"
                      fill
                      className="object-cover grayscale-[30%] scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-900">Before</p>
                    <p className="text-gray-600">Living area lacking character and warmth</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-green-500/20">
                    <Image
                      src="/images/design-mode/loungenew.jpg"
                      alt="Lounge after Luxe transformation"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-green-600">After Luxe</p>
                    <p className="text-gray-600">Stunning open-plan living with designer touches</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Revenue Comparison */}
        <section className="py-28 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Revenue Performance</h2>
              <p className="text-xl text-gray-600">Traditional renting vs. Working with Luxe Airbnb management</p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
              <ChartContainer
                config={{
                  revenue: {
                    label: "Monthly Revenue",
                    color: "#10b981",
                  },
                }}
                className="h-[350px] md:h-[500px]"
              >
                <div className="w-full h-full overflow-hidden">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyRevenueData} margin={{ left: 10, right: 20, bottom: 60, top: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.5} />
                      <XAxis
                        dataKey="month"
                        tick={{ fill: "#6b7280", fontSize: 11 }}
                        tickLine={false}
                        angle={-45}
                        textAnchor="end"
                        height={80}
                        interval={0}
                      />
                      <YAxis
                        width={50}
                        tick={{ fill: "#6b7280", fontSize: 11 }}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${(value / 1000).toFixed(1)}k`}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} cursor={{ stroke: "#d1d5db", strokeWidth: 1 }} />
                      <Line
                        type="monotone"
                        dataKey="traditional"
                        stroke="#ef4444"
                        strokeWidth={3}
                        name="Traditional Rent"
                        dot={{ fill: "#ef4444", r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="luxe"
                        stroke="#10b981"
                        strokeWidth={3}
                        name="Luxe Airbnb"
                        dot={{ fill: "#10b981", r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </ChartContainer>

              <div className="mt-10 flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-3 px-4 py-2 bg-red-50 rounded-full">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="text-sm font-medium text-gray-700">Traditional Rent: $2,300/month</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 bg-green-50 rounded-full">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-sm font-medium text-gray-700">Luxe Airbnb: $5,333/month avg</span>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl border border-red-200">
                  <div className="text-5xl font-bold text-red-600 mb-2">$27,600</div>
                  <div className="text-gray-700 font-medium">Traditional Annual Revenue</div>
                </div>
                <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200">
                  <div className="text-5xl font-bold text-green-600 mb-2">$64,000</div>
                  <div className="text-gray-700 font-medium">Luxe Annual Revenue</div>
                </div>
              </div>

              <div className="mt-8 text-center p-8 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 rounded-2xl shadow-xl">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">+$36,400</p>
                <p className="text-xl text-white/95 font-medium">Extra revenue per year with Luxe</p>
                <p className="text-white/80 mt-3 text-lg">277% increase in annual income</p>
              </div>
            </div>
          </div>
        </section>

        {/* Guest Experience Section */}
        <section className="py-28 md:py-40 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="mb-12">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4">Guest Experience</h2>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-pretty">
              Discover how our transformation services enhance your property's guest experience.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 md:py-48 bg-gradient-to-br from-black via-gray-900 to-black text-white">
          <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
            <div className="mb-8">
              <span className="text-sm font-semibold text-white/50 uppercase tracking-wider">Your Turn</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-tight">
              Every Day Without Luxe Is Revenue Lost
            </h2>
            <p className="text-2xl md:text-3xl text-white/80 leading-relaxed mb-12 text-balance max-w-3xl mx-auto">
              This property owner took action. Now they&#39;re earning 277% more. What&#39;s your property capable of?
            </p>

            <div className="mt-16">
              <button className="px-10 py-5 bg-white text-black text-lg font-bold rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 shadow-2xl">
                Book a Consultation Now
              </button>
              <p className="text-white/60 mt-6">No obligation. Just expert insights into your property's potential.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
