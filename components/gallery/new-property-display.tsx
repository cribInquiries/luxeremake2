"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function NewPropertyDisplay() {
  // Fresh independent data for property 9 - completely isolated
  const freshPropertyData = {
    propertyId: 9,
    mainTitle: "[Enter Main Title Here]",
    locationText: "[Enter Location]",
    tagline: "[Enter Tagline or Description]",

    // Stats section
    stats: {
      dailyRate: "[Enter Rate]",
      bedroomCount: "[Enter Number]",
      bathroomCount: "[Enter Number]",
      areaSize: "[Enter Size]",
    },

    // Image gallery
    imageGallery: [
      { url: "/modern-house-exterior.png", alt: "Image 1" },
      { url: "/room-1.jpg", alt: "Image 2" },
      { url: "/room-2.jpg", alt: "Image 3" },
      { url: "/room-3.jpg", alt: "Image 4" },
    ],

    // Content sections
    sections: {
      challenge: "[Describe the challenge or opportunity]",
      approach: "[Describe your approach or strategy]",
      outcome: "[Describe the results or outcome]",
    },

    // Feature highlights
    highlights: [
      "[Feature or highlight 1]",
      "[Feature or highlight 2]",
      "[Feature or highlight 3]",
      "[Feature or highlight 4]",
    ],
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % freshPropertyData.imageGallery.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? freshPropertyData.imageGallery.length - 1 : prev - 1))
  }

  return (
    <div className="min-h-screen bg-background" data-property-id="fresh-property-9">
      {/* Hero Banner Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
        data-section-type="hero-banner"
        style={{
          backgroundImage: `url(${freshPropertyData.imageGallery[0].url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight" data-field-type="main-heading">
            {freshPropertyData.mainTitle}
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-2" data-field-type="location-info">
            {freshPropertyData.locationText}
          </p>
          <p className="text-xl md:text-2xl text-white/80" data-field-type="tagline-text">
            {freshPropertyData.tagline}
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-card border-b" data-section-type="stats-bar">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center" data-stat-type="daily-rate">
              <div className="text-3xl font-bold text-foreground mb-1">{freshPropertyData.stats.dailyRate}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Daily Rate</div>
            </div>

            <div className="text-center" data-stat-type="bedroom-count">
              <div className="text-3xl font-bold text-foreground mb-1">{freshPropertyData.stats.bedroomCount}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Bedrooms</div>
            </div>

            <div className="text-center" data-stat-type="bathroom-count">
              <div className="text-3xl font-bold text-foreground mb-1">{freshPropertyData.stats.bathroomCount}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Bathrooms</div>
            </div>

            <div className="text-center" data-stat-type="area-size">
              <div className="text-3xl font-bold text-foreground mb-1">{freshPropertyData.stats.areaSize}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Area</div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery with Navigation */}
      <section className="container mx-auto px-6 py-16" data-section-type="image-carousel">
        <h2 className="text-4xl font-bold mb-8 text-center">Property Gallery</h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-video relative overflow-hidden rounded-lg">
            <img
              src={freshPropertyData.imageGallery[currentImageIndex].url || "/placeholder.svg"}
              alt={freshPropertyData.imageGallery[currentImageIndex].alt}
              className="w-full h-full object-cover"
            />
          </div>

          <Button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2"
            size="icon"
            variant="secondary"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2"
            size="icon"
            variant="secondary"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="flex justify-center gap-2 mt-4">
            {freshPropertyData.imageGallery.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentImageIndex ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="bg-muted/30 py-16" data-section-type="content-blocks">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-12">
            <div data-content-block="challenge">
              <h3 className="text-3xl font-bold mb-4">The Challenge</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{freshPropertyData.sections.challenge}</p>
            </div>

            <div data-content-block="approach">
              <h3 className="text-3xl font-bold mb-4">Our Approach</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{freshPropertyData.sections.approach}</p>
            </div>

            <div data-content-block="outcome">
              <h3 className="text-3xl font-bold mb-4">The Outcome</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{freshPropertyData.sections.outcome}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="container mx-auto px-6 py-16" data-section-type="feature-list">
        <h2 className="text-4xl font-bold mb-8 text-center">Key Features</h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {freshPropertyData.highlights.map((highlight, index) => (
            <div key={index} className="flex items-start gap-3 p-6 bg-card rounded-lg border" data-feature-item={index}>
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-lg">{highlight}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
