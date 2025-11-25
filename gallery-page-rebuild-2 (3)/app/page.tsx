"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { properties } from "@/lib/properties"

const categories = ["All", "Property Management", "Styling", "Renovation"]

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProperties =
    activeCategory === "All"
      ? properties
      : properties.filter(
          (property) =>
            property.categories.includes(activeCategory) ||
            (property.services && property.services.includes(activeCategory)),
        )

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
  }

  const comingSoonCount = Math.max(0, 9 - filteredProperties.length)
  const comingSoonCards = Array.from({ length: comingSoonCount }, (_, i) => i)

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative flex flex-col items-center justify-center text-center w-full py-16 md:py-20 lg:py-24 overflow-hidden">
        {/* Decorative corner elements */}
        <div className="absolute top-5 left-[10%] w-10 h-10 border-t-2 border-l-2 border-gray-200 opacity-60" />
        <div className="absolute bottom-5 right-[10%] w-10 h-10 border-b-2 border-r-2 border-gray-200 opacity-60" />

        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2 text-black">Gallery</h1>
          <div className="w-10 h-1 bg-black mx-auto mb-6" />
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4 leading-relaxed">
            Check out our latest work showcasing premium properties and exceptional interior design.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="flex justify-center items-center w-full mb-12 px-5 md:px-8">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-5">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-full border transition-all duration-300 text-sm md:text-base ${
                activeCategory === category
                  ? "bg-black text-white border-black font-semibold"
                  : "bg-transparent text-gray-700 border-gray-200 hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="w-full max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 xl:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 w-full">
          {filteredProperties.map((property) => {
            const isComingSoon = property.id === 9 || property.id === 10

            if (isComingSoon) {
              return (
                <article key={property.id} className="opacity-60 cursor-default">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg h-72 md:h-80 lg:h-[320px] w-full mb-4 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center px-6">
                      <p className="text-3xl font-bold text-gray-500 mb-2">Coming Soon</p>
                      <p className="text-sm text-gray-400 leading-relaxed">Your property could be featured here</p>
                    </div>
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-gray-500/70 backdrop-blur-sm rounded-full z-10">
                      <span className="text-xs font-semibold text-white uppercase tracking-wide">Upcoming</span>
                    </div>
                  </div>
                  <div className="px-1">
                    <h2 className="text-lg md:text-xl font-semibold text-gray-500 mb-1">{property.title}</h2>
                    <p className="text-sm text-gray-400 mb-2">{property.shortDescription}</p>
                  </div>
                </article>
              )
            }

            return (
              <Link key={property.id} href={`/gallery/${property.id}`} className="group cursor-pointer">
                <article>
                  {/* Property Image */}
                  <div className="relative overflow-hidden rounded-2xl shadow-lg h-72 md:h-80 lg:h-[320px] w-full mb-4">
                    <Image
                      src={property.mainImage || "/placeholder.svg"}
                      alt={property.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-full z-10">
                      <span className="text-xs font-semibold text-white uppercase tracking-wide">
                        Property Management
                      </span>
                    </div>

                    {property.services && property.services.length > 0 && (
                      <div className="absolute top-16 left-4 flex flex-wrap gap-1.5 max-w-[calc(100%-5rem)] z-10">
                        {property.services.map((service, index) => (
                          <span
                            key={index}
                            className="px-2 py-0.5 bg-white/90 backdrop-blur-sm rounded-md text-[10px] font-medium text-gray-800"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  </div>

                  {/* Property Information */}
                  <div className="px-1">
                    <h2 className="text-lg md:text-xl font-semibold text-black mb-1">{property.title}</h2>
                    <p className="text-sm text-gray-600 mb-2">{property.shortDescription}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-gray-700">
                        {property.bedrooms} {property.bedrooms === 1 ? "Bed" : "Beds"}
                      </span>
                      <span className="text-sm font-medium text-gray-700">
                        {property.bathrooms} {property.bathrooms === 1 ? "Bathroom" : "Bathrooms"}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            )
          })}

          {comingSoonCards.map((index) => (
            <article key={`coming-soon-${index}`} className="opacity-60 cursor-default">
              {/* Coming Soon Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg h-72 md:h-80 lg:h-[320px] w-full mb-4 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/50 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-500"
                    >
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-gray-600 mb-1">Future Transformation</p>
                  <p className="text-sm text-gray-500 leading-relaxed">Let us showcase your success story</p>
                </div>

                {/* Coming Soon Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-gray-500/70 backdrop-blur-sm rounded-full z-10">
                  <span className="text-xs font-semibold text-white uppercase tracking-wide">Upcoming</span>
                </div>
              </div>

              {/* Coming Soon Information */}
              <div className="px-1">
                <h2 className="text-lg md:text-xl font-semibold text-gray-500 mb-1">Future Transformation</h2>
                <p className="text-sm text-gray-400 mb-2">Let us showcase your success story</p>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-400">Contact us</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Decorative Separator */}
      <div className="relative flex justify-center items-center w-full my-16 md:my-20 lg:my-24 px-5">
        <div className="w-full h-px bg-gray-200" />
        <div className="absolute bg-white px-5">
          <div className="w-10 h-10 rounded-full border border-gray-200 flex justify-center items-center">
            <div className="w-5 h-5 rounded-full bg-black" />
          </div>
        </div>
      </div>
    </main>
  )
}
