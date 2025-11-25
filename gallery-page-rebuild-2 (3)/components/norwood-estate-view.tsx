"use client"

import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export function NorwoodEstateView() {
  const independentData = {
    propertyName: "Parkland Vista Luxury Retreat",
    locationCity: "Adelaide CBD",
    tagline: "Experience the Adelaide CBD and Parklands in Luxury",
    bedroomCount: 2,
    bathroomCount: 1,
    squareMeters: 80,
    pricePerNight: 220,
    heroImageUrl: "/images/leadimage-southtce.jpg",
    aboutText:
      "Parkland Vista Luxury Retreat offers an elevated stay experience overlooking tranquil parklands, blending modern comfort with a refined, resort-inspired aesthetic. Thoughtfully styled throughout, the home features spacious living areas, premium bedding, and a fully equipped kitchen designed for both short and extended stays. Guests can unwind on the private outdoor patio with leafy views, enjoy high-end amenities, and relax in a space curated for comfort, privacy, and relaxation. With its serene setting and contemporary design, this retreat is perfect for families, couples, or business travellers seeking a peaceful escape without compromising on luxury.",
    highlight1: "Edit Feature 1",
    highlight2: "Edit Feature 2",
    highlight3: "Edit Feature 3",
    highlight4: "Edit Feature 4",
    highlight5: "Edit Feature 5",
    highlight6: "Edit Feature 6",
    beforeAfterComparisons: [
      {
        title: "Living Room Styling",
        beforeImage: "/images/beforeimage.png",
        afterImage: "/images/afterimagest.jpg",
      },
    ],
    galleryImages: [
      { src: "/images/mainviewst.jpg", alt: "Modern living and dining area with gray sofa and glass table" },
      { src: "/images/mainbedroom1.jpg", alt: "Main bedroom with wooden furniture and coastal artwork" },
      { src: "/images/bedroom2lookingout.jpg", alt: "Bedroom view looking out to kitchen and living area" },
      { src: "/images/bedroom2photost.jpg", alt: "Bright bedroom with corner windows and beach artwork" },
      { src: "/images/stoutside.jpg", alt: "Modern apartment building exterior on GK Terrace" },
      { src: "/images/kitchenst.jpg", alt: "Contemporary white kitchen with mirror backsplash and LED lighting" },
    ],
  }

  const incomeData = [
    { period: "Before Luxe", income: 750, fill: "#ef4444" },
    { period: "After Luxe", income: 1400, fill: "#10b981" },
  ]

  return (
    <div className="min-h-screen bg-black text-white" data-gallery-id="property-2-independent">
      <Link
        href="/gallery"
        className="fixed top-6 left-6 z-50 w-12 h-12 rounded-full bg-black/80 backdrop-blur-md flex justify-center items-center hover:bg-black transition-all duration-300 group"
        aria-label="Back to gallery"
      >
        <ArrowLeft size={24} className="text-white group-hover:-translate-x-1 transition-transform duration-300" />
      </Link>

      {/* Hero Section with animated zoom and full-screen design */}
      <section className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden pb-20">
        <div className="absolute inset-0 animate-[zoom_30s_ease-in-out_infinite]">
          <Image
            src={independentData.heroImageUrl || "/placeholder.svg"}
            alt="Property hero"
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
            {independentData.propertyName}
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-light text-balance max-w-4xl mx-auto animate-[fadeInUp_1s_ease-out_0.4s_both]">
            {independentData.tagline}
          </p>
        </div>
      </section>

      {/* Property Statistics */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Bedrooms</div>
              <div className="text-3xl font-bold text-black">{independentData.bedroomCount}</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Bathrooms</div>
              <div className="text-3xl font-bold text-black">{independentData.bathroomCount}</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Sq Meters</div>
              <div className="text-3xl font-bold text-black">{independentData.squareMeters}</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Per Night</div>
              <div className="text-3xl font-bold text-black">${independentData.pricePerNight}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24 bg-white" data-section-id="content-area">
        <div className="container px-6 max-w-4xl mx-auto">
          {/* About Section */}
          <div className="mb-12" data-content="about-property">
            <div className="mb-8">
              <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">About This Property</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-black text-balance leading-tight">
              Property Overview
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed text-pretty">{independentData.aboutText}</p>
          </div>
        </div>
      </section>

      {/* Before & After Showcase */}
      <section className="py-16 md:py-24 bg-gray-100" data-content="before-after-showcase">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Luxe Transformation</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mt-4 mb-6 text-balance">
              Before &amp; After Luxe Management
            </h2>
          </div>

          <div className="space-y-12">
            {independentData.beforeAfterComparisons.map((comparison, index) => (
              <div key={index} className="group">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 text-center">{comparison.title}</h3>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  {/* Before Image */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute top-4 left-4 z-10 px-4 py-2 bg-red-500/90 backdrop-blur-sm rounded-full">
                      <span className="text-sm font-bold text-white uppercase tracking-wider">Before</span>
                    </div>
                    <div className="relative h-[50vh] md:h-[60vh]">
                      <Image
                        src={comparison.beforeImage || "/placeholder.svg"}
                        alt={`Before ${comparison.title}`}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* After Image */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute top-4 left-4 z-10 px-4 py-2 bg-green-500/90 backdrop-blur-sm rounded-full">
                      <span className="text-sm font-bold text-white uppercase tracking-wider">After</span>
                    </div>
                    <div className="relative h-[50vh] md:h-[60vh]">
                      <Image
                        src={comparison.afterImage || "/placeholder.svg"}
                        alt={`After ${comparison.title}`}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New 6-photo gallery section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Property Gallery</span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">Explore the Space</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {independentData.galleryImages.map((image, index) => (
              <div key={index} className="relative h-[300px] md:h-[350px] rounded-2xl overflow-hidden shadow-lg group">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold text-white/50 uppercase tracking-wider">The Impact</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 text-balance">
              Revenue Impact Through Short-Term Rental Transformation
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-4 md:p-8 mb-8 transform hover:shadow-2xl hover:shadow-white/5 transition-all duration-500 overflow-hidden w-full">
            <h3 className="text-2xl font-bold text-white mb-6">Weekly Income - Before &amp; After STR </h3>
            <div className="w-full overflow-hidden">
              <ChartContainer
                config={{
                  income: {
                    label: "Weekly Income ($)",
                    color: "#10b981",
                  },
                }}
                className="h-[280px] md:h-[350px] w-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={incomeData} margin={{ top: 20, right: 10, left: 0, bottom: 70 }} barCategoryGap="20%">
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis
                      dataKey="period"
                      tick={{ fill: "#999", fontSize: 14 }}
                      tickLine={false}
                      angle={-45}
                      textAnchor="end"
                      height={70}
                      interval={0}
                    />
                    <YAxis tick={{ fill: "#999", fontSize: 14 }} tickLine={false} axisLine={false} width={35} />
                    <ChartTooltip content={<ChartTooltipContent />} cursor={{ fill: "rgba(255,255,255,0.05)" }} />
                    <Bar dataKey="income" radius={[8, 8, 0, 0]} maxBarSize={100}>
                      {incomeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#ef4444]" />
                <span className="text-sm text-white/70">Before Luxe: $750/week</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#10b981]" />
                <span className="text-sm text-white/70">After Luxe: $1,400/week</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <div className="mb-8">
            <span className="text-sm font-semibold text-white/50 uppercase tracking-wider">
              Ready to Transform Your Property?
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
            Your Property Could Be Next
          </h2>
          <p className="text-2xl md:text-3xl text-white/80 leading-relaxed mb-10 text-balance max-w-3xl mx-auto">
            This property owner trusted Luxe Managements with professional styling and photography, transforming their
            Adelaide retreat into a high-performing rental asset. What could we do for yours?
          </p>

          <div className="mt-12">
            <Link href="/gallery">
              <button className="px-12 md:px-16 py-6 md:py-7 bg-white text-black text-xl md:text-2xl font-bold rounded-full hover:bg-green-500 hover:text-white hover:scale-105 transition-all duration-300 shadow-2xl">
                Book a Consultation Now
              </button>
            </Link>
            <p className="text-white/60 mt-6 italic text-xl">
              "Strategic vision. Exceptional results. That's the Luxe difference."
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
