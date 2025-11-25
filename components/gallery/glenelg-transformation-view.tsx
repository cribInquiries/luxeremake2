"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, TrendingUp, DollarSign, Check, Home, MapPin, Bed, Bath, Square } from "lucide-react"
import type { Property } from "@/lib/properties"
import { Line, LineChart, Bar, BarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface GlenelgTransformationViewProps {
  property: Property
}

export function GlenelgTransformationView({ property }: GlenelgTransformationViewProps) {
  if (!property.transformationStory) return null

  const story = property.transformationStory

  const propertyValueData = [
    { period: "Before Luxe", value: 457000, fill: "#94a3b8" },
    { period: "After Luxe", value: 520000, fill: "#10b981" },
  ]

  const incomeComparisonData = [
    { period: "Traditional Rental", annual: 24440, fill: "#ef4444" },
    { period: "With Luxe (Airbnb)", annual: 38000, fill: "#10b981" },
  ]

  const revenueTimelineData = [
    { month: "Oct", traditional: 2037, airbnb: 2850 },
    { month: "Nov", traditional: 2037, airbnb: 3100 },
    { month: "Dec", traditional: 2037, airbnb: 3600 },
    { month: "Jan", traditional: 2037, airbnb: 3800 },
    { month: "Feb", traditional: 2037, airbnb: 3400 },
    { month: "Mar", traditional: 2037, airbnb: 3200 },
    { month: "Apr", traditional: 2037, airbnb: 2900 },
    { month: "May", traditional: 2037, airbnb: 3000 },
    { month: "Jun", traditional: 2037, airbnb: 3100 },
    { month: "Jul", traditional: 2037, airbnb: 2950 },
    { month: "Aug", traditional: 2037, airbnb: 3200 },
    { month: "Sep", traditional: 2037, airbnb: 2900 },
  ]

  const renovationChanges = [
    {
      title: "Modern Herringbone Backsplash",
      reason: "Creates visual interest and a premium aesthetic that photographs beautifully for listings",
    },
    {
      title: "Ambient LED Strip Lighting",
      reason: "Adds warmth and creates a cozy atmosphere that guests love and remember",
    },
    {
      title: "Coastal Color Palette",
      reason: "Connects the space to the nearby beach, creating a cohesive Glenelg experience",
    },
    {
      title: "Open Shelving with Styling",
      reason: "Combines functionality with decorative appeal, making the space feel curated and homely",
    },
    {
      title: "Quality Bedding & Linens",
      reason: "Premium comfort drives positive reviews and repeat bookings",
    },
    {
      title: "Modern Bathroom Fixtures",
      reason: "Clean, hotel-quality finishes elevate the guest experience and justify higher nightly rates",
    },
    {
      title: "Strategic Furniture Placement",
      reason: "Maximizes flow and functionality in the compact space",
    },
    {
      title: "Professional Styling & Artwork",
      reason: "Creates an Instagram-worthy aesthetic that guests share, driving organic marketing",
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

      {/* Scrollable Content */}
      <div className="h-full overflow-y-auto scroll-smooth">
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden">
          <div className="absolute inset-0 animate-[zoom_30s_ease-in-out_infinite]">
            <Image
              src={property.mainImage || "/placeholder.svg"}
              alt={property.title}
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
              {property.title}
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-light text-balance max-w-4xl mx-auto animate-[fadeInUp_1s_ease-out_0.4s_both]">
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
                  <div className="text-lg font-bold text-black">Glenelg</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0">
                  <Bed className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Bedrooms</div>
                  <div className="text-lg font-bold text-black">2</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0">
                  <Bath className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Bathrooms</div>
                  <div className="text-lg font-bold text-black">1</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0">
                  <Square className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Land Size</div>
                  <div className="text-lg font-bold text-black">40 m²</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Story */}
        <section className="py-28 md:py-40 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="mb-12">
              <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">The Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-12 text-balance leading-tight">
              From Property Search to High-Performing Asset
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed text-pretty mb-8">
              Our journey with this client began when he reached out looking to purchase a property with strong
              short-term rental potential. From the first call, we guided him through a comprehensive analysis of
              several properties, breaking down projected short-term rental earnings, long-term appreciation, and
              renovation potential. Our team at Luxe Managements transformed the space to create a modern, warm, and
              highly functional Short-stay-ready home. Every detail was intentional—from interior flow and furniture
              selection to lighting and guest-ready features that elevate the stay experience. By October, we launched
              the listing—and the results spoke for themselves. Bookings surged immediately, outperforming traditional
              rental income and generating the kind of revenue only a well-optimized short-term rental can achieve.
            </p>
          </div>
        </section>

        {/* Before & After Comparison */}
        <section className="bg-gray-50 py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">The Transformation</h2>
              <p className="text-xl text-gray-600">Side-by-side comparison: Before Luxe vs. After Luxe</p>
            </div>

            {/* Side by Side Comparisons */}
            <div className="space-y-16">
              {/* Kitchen Comparison */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="inline-block px-6 py-2 bg-gray-800 text-white text-sm font-semibold rounded-full">
                    Before Luxe
                  </div>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden group">
                    <Image
                      src="/images/glnelgkitchenold.jpg"
                      alt="Kitchen before renovation"
                      fill
                      className="object-cover grayscale-[40%] group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <p className="text-gray-600 text-lg">Outdated orange countertops, dated tiling</p>
                </div>
                <div className="space-y-4">
                  <div className="inline-block px-6 py-2 bg-green-600 text-white text-sm font-semibold rounded-full">
                    After Luxe
                  </div>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden group shadow-2xl">
                    <Image
                      src="/images/design-mode/kitchennew.JPG.jpeg"
                      alt="Kitchen after renovation"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <p className="text-gray-900 text-lg font-semibold">
                    Modern herringbone backsplash, LED lighting, styled decor
                  </p>
                </div>
              </div>

              {/* Bathroom Comparison */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="inline-block px-6 py-2 bg-gray-800 text-white text-sm font-semibold rounded-full">
                    Before Luxe
                  </div>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden group">
                    <Image
                      src="/images/design-mode/toiletold.jpg"
                      alt="Bathroom before renovation"
                      fill
                      className="object-cover grayscale-[40%] group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <p className="text-gray-600 text-lg">Basic fixtures, old plumbing, uninviting atmosphere</p>
                </div>
                <div className="space-y-4">
                  <div className="inline-block px-6 py-2 bg-green-600 text-white text-sm font-semibold rounded-full">
                    After Luxe
                  </div>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden group shadow-2xl">
                    <Image
                      src="/images/design-mode/bathroom%20new.JPG.jpeg"
                      alt="Bathroom after renovation"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <p className="text-gray-900 text-lg font-semibold">
                    Hotel-quality finishes, modern fixtures, ambient lighting
                  </p>
                </div>
              </div>

              {/* Bedroom Comparison */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="inline-block px-6 py-2 bg-gray-800 text-white text-sm font-semibold rounded-full">
                    Before Luxe
                  </div>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden group">
                    <Image
                      src="/images/glenelgoldbedroom1.jpg"
                      alt="Bedroom before renovation"
                      fill
                      className="object-cover grayscale-[40%] group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <p className="text-gray-600 text-lg">Empty room, no character, worn carpet</p>
                </div>
                <div className="space-y-4">
                  <div className="inline-block px-6 py-2 bg-green-600 text-white text-sm font-semibold rounded-full">
                    After Luxe
                  </div>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden group shadow-2xl">
                    <Image
                      src="/images/design-mode/BEDROOMNEW.jpg"
                      alt="Bedroom after renovation"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <p className="text-gray-900 text-lg font-semibold">
                    Cozy retreat with quality linens, coastal styling, warm lighting
                  </p>
                </div>
              </div>

              {/* Living Room Comparison */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="inline-block px-6 py-2 bg-gray-800 text-white text-sm font-semibold rounded-full">
                    Before Luxe
                  </div>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden group">
                    <Image
                      src="/images/glenelgloungeold.jpg"
                      alt="Living room before renovation"
                      fill
                      className="object-cover grayscale-[40%] group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <p className="text-gray-600 text-lg">Empty room, no character, worn carpet</p>
                </div>
                <div className="space-y-4">
                  <div className="inline-block px-6 py-2 bg-green-600 text-white text-sm font-semibold rounded-full">
                    After Luxe
                  </div>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden group shadow-2xl">
                    <Image
                      src="/images/design-mode/LOUNGENEW.png.jpeg"
                      alt="Living room after renovation"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <p className="text-gray-900 text-lg font-semibold">
                    Stylish open-plan living with strategic furniture and artwork
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Changed */}
        <section className="py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">What We Changed & Why</h2>
              <p className="text-xl text-gray-600">Every decision was strategic, intentional, and guest-focused</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {renovationChanges.map((change, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">{change.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{change.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Property Value Impact */}
        <section className="py-28 bg-black text-white">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Property Value Growth</h2>
              <p className="text-xl text-white/70">Strategic improvements increased the property's market value</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-4 md:p-12 mb-12 overflow-hidden w-full">
              <div className="w-full overflow-hidden">
                <ChartContainer
                  config={{
                    value: {
                      label: "Property Value (AUD)",
                      color: "#10b981",
                    },
                  }}
                  className="h-[300px] md:h-[450px] w-full"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={propertyValueData}
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
                        height={80}
                      />
                      <YAxis
                        tick={{ fill: "#fff", fontSize: 9 }}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${value / 1000}k`}
                        width={40}
                      />
                      <ChartTooltip
                        content={<ChartTooltipContent />}
                        cursor={{ fill: "rgba(255,255,255,0.1)" }}
                        formatter={(value: number) => [`$${value.toLocaleString()}`, "Value"]}
                      />
                      <Bar dataKey="value" radius={[12, 12, 0, 0]} maxBarSize={70}>
                        {propertyValueData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
              <div className="mt-8 flex justify-center gap-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-400 mb-2">$457,000</div>
                  <div className="text-sm text-gray-500">Before Luxe</div>
                </div>
                <TrendingUp className="w-8 h-8 text-green-500" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-500 mb-2">$520,000</div>
                  <div className="text-sm text-white">After Luxe</div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-2xl font-bold text-green-500">+$63,000 equity growth</p>
                <p className="text-white/70 mt-2">13.8% value increase through strategic improvements</p>
              </div>
            </div>
          </div>
        </section>

        {/* Revenue Comparison */}
        <section className="py-28 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Revenue Transformation</h2>
              <p className="text-xl text-gray-600">Traditional rental vs. Luxe-managed Airbnb performance</p>
            </div>

            {/* Annual Comparison */}
            <div className="bg-white rounded-3xl p-4 md:p-12 shadow-lg mb-12 overflow-hidden w-full">
              <h3 className="text-2xl font-bold text-black mb-8">Annual Revenue Comparison</h3>
              <div className="w-full overflow-hidden">
                <ChartContainer
                  config={{
                    annual: {
                      label: "Annual Revenue (AUD)",
                      color: "#10b981",
                    },
                  }}
                  className="h-[300px] md:h-[450px] w-full"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={incomeComparisonData}
                      margin={{ top: 20, right: 10, left: 0, bottom: 85 }}
                      barCategoryGap="20%"
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis
                        dataKey="period"
                        tick={{ fill: "#666", fontSize: 9 }}
                        tickLine={false}
                        angle={-45}
                        textAnchor="end"
                        height={100}
                        interval={0}
                      />
                      <YAxis
                        tick={{ fill: "#666", fontSize: 9 }}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${value / 1000}k`}
                        width={40}
                      />
                      <ChartTooltip
                        content={<ChartTooltipContent />}
                        cursor={{ fill: "rgba(0,0,0,0.05)" }}
                        formatter={(value: number) => [`$${value.toLocaleString()}`, "Annual Revenue"]}
                      />
                      <Bar dataKey="annual" radius={[12, 12, 0, 0]} maxBarSize={70}>
                        {incomeComparisonData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-red-50 rounded-xl">
                  <div className="text-3xl font-bold text-red-600 mb-2">$24,440</div>
                  <div className="text-sm text-gray-600">Traditional Rental</div>
                </div>
                <div className="flex items-center justify-center">
                  <DollarSign className="w-12 h-12 text-green-500" />
                </div>
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">$38,000</div>
                  <div className="text-sm text-gray-600">Luxe Airbnb</div>
                </div>
              </div>
              <div className="mt-6 text-center p-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                <p className="text-3xl font-bold text-white">+$13,560 additional annual revenue</p>
                <p className="text-white/90 mt-2">55% revenue increase with Luxe Managements</p>
              </div>
            </div>

            {/* Monthly Timeline */}
            <div className="bg-white rounded-3xl p-4 md:p-8 lg:p-12 shadow-lg overflow-hidden">
              <h3 className="text-2xl font-bold text-black mb-8">Monthly Revenue Performance</h3>
              <div className="overflow-hidden -mx-4 md:mx-0">
                <ChartContainer
                  config={{
                    traditional: {
                      label: "Traditional Rental",
                      color: "#ef4444",
                    },
                    airbnb: {
                      label: "Luxe Airbnb",
                      color: "#10b981",
                    },
                  }}
                  className="h-[300px] md:h-[400px] lg:h-[450px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueTimelineData} margin={{ top: 5, right: 5, left: 10, bottom: 40 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis
                        dataKey="month"
                        tick={{ fill: "#666", fontSize: 10 }}
                        tickLine={false}
                        angle={-90}
                        textAnchor="end"
                        height={80}
                        interval={0}
                      />
                      <YAxis
                        tick={{ fill: "#666", fontSize: 10 }}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${value / 1000}k`}
                        width={35}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} cursor={{ stroke: "#e5e7eb", strokeWidth: 2 }} />
                      <Line
                        type="monotone"
                        dataKey="traditional"
                        stroke="#ef4444"
                        strokeWidth={2}
                        dot={{ fill: "#ef4444", r: 4 }}
                        name="Traditional Rental"
                      />
                      <Line
                        type="monotone"
                        dataKey="airbnb"
                        stroke="#10b981"
                        strokeWidth={2}
                        dot={{ fill: "#10b981", r: 4 }}
                        name="Luxe Airbnb"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
              <div className="mt-8 flex justify-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-red-500" />
                  <span className="text-gray-600">Traditional: $2,037/month</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-500" />
                  <span className="text-gray-600">Luxe: $3,167/month avg</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Summary */}
        <section className="py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">The Results</h2>
              <p className="text-xl text-gray-600">Performance that exceeded all expectations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-8 bg-gray-50 rounded-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="text-5xl font-bold text-black mb-3">{story.results.occupancyRate}%</div>
                <div className="text-gray-600">Average Occupancy</div>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="text-5xl font-bold text-black mb-3">$230</div>
                <div className="text-gray-600">Nightly Rate</div>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="text-5xl font-bold text-black mb-3">55%</div>
                <div className="text-gray-600">Revenue Increase</div>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="text-5xl font-bold text-black mb-3">4.9★</div>
                <div className="text-gray-600">Guest Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="relative h-screen w-full overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={property.mainImage || "/placeholder.svg"}
              alt="Success story"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative h-full flex items-center justify-center px-6">
            <div className="max-w-4xl text-center">
              <div className="mb-8">
                <span className="text-white/70 text-lg">Client Testimonial</span>
              </div>
              <p className="text-3xl md:text-4xl lg:text-5xl text-white font-light italic leading-relaxed text-balance mb-8">
                "I was blown away by how seamlessly Luxe managed everything—from helping me find the right property, to
                the complete renovation, to ongoing management. The profit my property generates now compared to what
                I'd make with a standard rental is night and day. Best investment decision I've made."
              </p>
              <div className="flex items-center justify-center gap-2">
                <Home className="w-6 h-6 text-white/70" />
                <span className="text-white/70">Glenelg Property Owner</span>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 md:py-48 bg-gradient-to-br from-black via-gray-900 to-black text-white">
          <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
            <div className="mb-12">
              <span className="text-sm font-semibold text-white/50 uppercase tracking-wider">
                Don't Leave Money on the Table
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-tight">
              You're Missing Out Without Luxe
            </h2>
            <p className="text-2xl md:text-3xl text-white/80 leading-relaxed mb-12 text-balance max-w-3xl mx-auto">
              While you're earning traditional rental income, properties like this are generating 55% more revenue.
              Every month you wait is money left on the table.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl">
                <div className="text-4xl font-bold text-red-400 mb-2">$13,560</div>
                <div className="text-white/70">Annual revenue you could be missing</div>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl">
                <div className="text-4xl font-bold text-yellow-400 mb-2">$63k+</div>
                <div className="text-white/70">Potential equity growth</div>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl">
                <div className="text-4xl font-bold text-green-400 mb-2">88%+</div>
                <div className="text-white/70">Occupancy rate achievable</div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-2xl font-semibold">Your property has untapped potential.</p>
              <p className="text-3xl md:text-4xl font-bold">Let Luxe unlock it.</p>
            </div>

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
