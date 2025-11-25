"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Property } from "@/lib/properties"
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ImageLightbox } from "@/components/image-lightbox"

interface PropertyTransformationViewProps {
  property: Property
}

export function PropertyTransformationView({ property }: PropertyTransformationViewProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  if (!property.transformationStory) return null

  const story = property.transformationStory

  const galleryImages = property.carouselImages.slice(1, 7).filter((img) => img)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const previousImage = () => {
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const incomeData = [
    { period: "Before", income: 750, fill: "#ef4444" },
    { period: "After (Gross)", income: 1400, fill: "#3b82f6" },
    { period: "After (Net)", income: 1000, fill: "#10b981" },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
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
        <section className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden pb-20">
          <div className="absolute inset-0 animate-[zoom_30s_ease-in-out_infinite]">
            <Image
              src={property.mainImage || "/placeholder.svg"}
              alt={property.title}
              fill
              className="object-cover opacity-40"
              priority
              sizes="100vw"
            />
          </div>

          <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 text-center pb-8 md:pb-16">
            <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 animate-[fadeInUp_1s_ease-out]">
              <span className="text-sm font-semibold text-white uppercase tracking-wider">Transformation Story</span>
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
        <section className="py-12 bg-gray-900">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">ADR</div>
                <div className="text-3xl font-bold text-black">$200</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Bedrooms</div>
                <div className="text-3xl font-bold text-black">6</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Bathrooms</div>
                <div className="text-3xl font-bold text-black">3</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Floor Area</div>
                <div className="text-xl font-bold text-black whitespace-nowrap">332 m²</div>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="py-28 md:py-40 bg-black">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="mb-12">
              <span className="text-sm font-semibold text-white/50 uppercase tracking-wider">The Challenge</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-balance leading-tight">
              How do we turn a compact 2-bedroom into a high-performing asset?
            </h2>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed text-pretty">{"CHECK ABC"}</p>
          </div>
        </section>

        <section className="bg-gray-900 py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/images/cbedframeold1.jpg"
                  alt="Before transformation"
                  fill
                  className="object-cover grayscale-[50%]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md px-6 py-3 rounded-full">
                  <span className="text-white font-semibold">Before</span>
                </div>
              </div>
              <div className="relative h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden md:mt-20 transform hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/images/cbedroom3new.jpeg"
                  alt="After transformation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full">
                  <span className="text-black font-semibold">After</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Vision */}
        <section className="py-28 md:py-40 bg-black text-white">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="mb-12">
              <span className="text-sm font-semibold text-white/50 uppercase tracking-wider">
                A Vision Built on Restraint
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-balance leading-tight">
              Constraints often reveal the most potential.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-5xl font-bold mb-4">$12000</div>
                <div className="text-xl text-white/70">Total Budget</div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-5xl font-bold mb-4">14 Days</div>
                <div className="text-xl text-white/70">Completion Time</div>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-16 text-pretty">
              This project highlights how the right preparation can elevate a property's performance from the moment it
              goes live. After coordinating essential maintenance and completing the furnishing, our team styled the
              home to showcase its full potential, working creatively around existing design challenges such as a
              striking red splashback and contrasting finishes. Every detail was planned to ensure a seamless transition
              into the short-term rental market. Once launched, the property quickly gained traction across major
              platforms and delivered impressive early returns.
            </p>
          </div>
        </section>

        <section className="bg-black py-0">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
            {property.carouselImages.slice(1, 7).map((image, index) => (
              <div
                key={index}
                className="relative h-[40vh] md:h-[50vh] overflow-hidden group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${property.title} transformation ${index + 1}`}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/0 group-hover:bg-white/90 backdrop-blur-sm flex items-center justify-center transform scale-0 group-hover:scale-100 transition-all duration-300">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Transformation */}
        <section className="py-28 md:py-40 bg-black">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="mb-16 text-center">
              <span className="text-sm font-semibold text-white/50 uppercase tracking-wider">The Transformation</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-6 mb-8 text-balance">
                From hesitation to high performance
              </h2>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-4 md:p-8 lg:p-12 mb-12 transform hover:shadow-2xl hover:shadow-white/5 transition-all duration-500 w-full overflow-hidden">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">Weekly Income Transformation</h3>
              <div className="w-full overflow-x-hidden">
                <div className="w-full overflow-hidden">
                  <ChartContainer
                    config={{
                      income: {
                        label: "Weekly Income ($)",
                        color: "#3b82f6",
                      },
                    }}
                    className="h-[280px] md:h-[400px] w-full"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={incomeData}
                        margin={{ top: 20, right: 10, left: 0, bottom: 70 }}
                        barCategoryGap="20%"
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                        <XAxis
                          dataKey="period"
                          tick={{ fill: "#999", fontSize: 9 }}
                          tickLine={false}
                          angle={-45}
                          textAnchor="end"
                          height={70}
                          interval={0}
                        />
                        <YAxis tick={{ fill: "#999", fontSize: 9 }} tickLine={false} axisLine={false} width={35} />
                        <ChartTooltip content={<ChartTooltipContent />} cursor={{ fill: "rgba(255,255,255,0.05)" }} />
                        <Bar dataKey="income" radius={[8, 8, 0, 0]} maxBarSize={70}>
                          {incomeData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#ef4444]" />
                  <span className="text-sm text-white/70">Before: $750</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#3b82f6]" />
                  <span className="text-sm text-white/70">Gross: $1400</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#10b981]" />
                  <span className="text-sm text-white/70">Net: $1000</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Property Showcase */}
        <section className="relative h-[80vh] w-full overflow-hidden">
          <Image
            src={property.carouselImages[3] || "/placeholder.svg"}
            alt="Property showcase"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 className="text-5xl md:text-7xl font-bold text-white text-center px-6 text-balance">
              Performance that speaks for itself
            </h3>
          </div>
        </section>

        {/* Showcase of What's Possible */}
        <section className="py-28 md:py-40 bg-gradient-to-b from-black via-gray-900 to-black text-white">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="mb-20 text-center">
              <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold text-white/80 uppercase tracking-wider mb-8">
                A Showcase of What's Possible
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12 text-balance leading-[1.1] tracking-tight text-center">
              {"Luxury Clearview Mansion"}
            </h2>

            <p className="text-2xl md:text-3xl text-white/70 leading-relaxed mb-8 text-balance font-light text-center">
              Stands as proof of what we believe:
            </p>

            <div className="my-16 space-y-6">
              <p className="text-3xl md:text-5xl lg:text-6xl font-light text-white/90 text-balance text-center">
                Great performance doesn't start with luxury.
              </p>
              <p className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent text-balance text-center">
                It starts with vision.
              </p>
            </div>

            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed text-balance mb-16 text-center">
              By rethinking layout, maximising functionality, and designing with intention, Luxe Managements turned a
              residential home into one of Adelaide&#39;s most reliable and profitable short-stay assets.
            </p>

            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance text-center">
                Ready to transform your property?
              </h3>
              <p className="text-xl md:text-2xl text-white/70 text-balance max-w-2xl mx-auto text-center">
                Let's reimagine what your property can become. Don't miss out on unlocking your property's true
                potential.
              </p>
              <div className="mt-16 flex flex-col items-center">
                <button className="px-10 py-5 bg-white text-black text-lg font-bold rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 shadow-2xl">
                  Book a Consultation Now
                </button>
                <p className="text-sm text-white/40 italic mt-4 text-center">
                  Your property could be our next success story
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {lightboxOpen && (
        <ImageLightbox
          images={galleryImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      )}
    </div>
  )
}
