"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Bed, Bath, Maximize2, Check } from 'lucide-react'
import type { Property } from "@/lib/properties"

interface PropertyDetailViewProps {
  property: Property
}

export function PropertyDetailView({ property }: PropertyDetailViewProps) {
  return (
    <div className="min-h-screen bg-black">
      {/* Back Button */}
      <Link
        href="/gallery"
        className="fixed top-6 left-6 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex justify-center items-center hover:bg-white/20 transition-all duration-300 group"
        aria-label="Back to gallery"
      >
        <ArrowLeft size={24} className="text-white group-hover:-translate-x-1 transition-transform duration-300" />
      </Link>

      {/* Scrollable Content */}
      <div className="h-full overflow-y-auto scroll-smooth">
        {/* Hero Section - Full Screen */}
        <section className="relative h-screen w-full flex items-end">
          <Image
            src={property.mainImage || "/placeholder.svg"}
            alt={property.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          {/* Hero Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-24">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-sm font-semibold text-white uppercase tracking-wider">
                {property.categories[0]}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight text-balance">
              {property.title}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light text-balance">
              {property.subheading}
            </p>
          </div>
        </section>

        {/* Price & Quick Stats Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-12 border-b border-gray-200">
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Price
                </p>
                <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-black">
                  {property.price}
                </p>
              </div>
              <div className="flex gap-8 md:gap-12">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Bed className="w-5 h-5 text-gray-400" />
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      Bedrooms
                    </p>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-black">{property.bedrooms}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Bath className="w-5 h-5 text-gray-400" />
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      Bathrooms
                    </p>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-black">{property.bathrooms}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Maximize2 className="w-5 h-5 text-gray-400" />
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      Sq Ft
                    </p>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-black">{property.sqft.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="pt-12">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-6 h-6 text-gray-400" />
                <p className="text-lg font-semibold text-gray-500 uppercase tracking-wider">
                  Location
                </p>
              </div>
              <p className="text-2xl md:text-3xl font-semibold text-black">{property.location}</p>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="bg-gray-50 py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 leading-relaxed text-balance">
              {property.description}
            </p>
          </div>
        </section>

        {/* Gallery Grid Section */}
        <section className="bg-black py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {property.carouselImages.slice(1, 5).map((image, index) => (
              <div key={index} className="relative h-[50vh] md:h-[60vh]">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${property.title} view ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-16 text-balance">
              Exceptional Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
              {property.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full Width Image Break */}
        <section className="relative h-[70vh] md:h-screen w-full">
          <Image
            src={property.carouselImages[property.carouselImages.length - 1] || "/placeholder.svg"}
            alt={`${property.title} showcase`}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </section>

        {/* Amenities Section */}
        <section className="bg-gray-900 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-16 text-balance">
              World-Class Amenities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {property.amenities.map((amenity, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-xl md:text-2xl font-semibold text-white">{amenity}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Neighborhood Section */}
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-12 text-balance">
              The Neighborhood
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-pretty">
              {property.neighborhood}
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-balance">
              Experience {property.title}
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-12 text-balance">
              Schedule a private viewing to discover this exceptional property.
            </p>
            <button className="px-8 md:px-12 py-4 md:py-5 bg-white text-black text-lg md:text-xl font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300">
              Schedule Viewing
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
