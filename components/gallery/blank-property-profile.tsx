"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BlankPropertyProfile() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const profile10Data = {
    mainImageSrc: "/placeholder.svg?height=800&width=1600&text=Add+Hero+Image",
    titleText: "[Click to Add Property Title]",
    locationText: "[Click to Add Location]",
    subtitleText: "[Click to Add Property Description]",
    bedroomNumber: "[0]",
    bathroomNumber: "[0]",
    areaSize: "[0 m²]",
    dailyRate: "[$0]",
    fullDescription:
      "[Click here to add your complete property description. All text fields are independent and editing them will NOT affect any other gallery properties.]",
    featureList: [
      "[Click to edit feature 1]",
      "[Click to edit feature 2]",
      "[Click to edit feature 3]",
      "[Click to edit feature 4]",
    ],
    carouselImages: [
      "/placeholder.svg?height=600&width=900&text=Image+1",
      "/placeholder.svg?height=600&width=900&text=Image+2",
      "/placeholder.svg?height=600&width=900&text=Image+3",
      "/placeholder.svg?height=600&width=900&text=Image+4",
    ],
    preRenovationText: "[Click to add before renovation details]",
    postRenovationText: "[Click to add after renovation details]",
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === profile10Data.carouselImages.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? profile10Data.carouselImages.length - 1 : prev - 1))
  }

  return (
    <main
      className="min-h-screen bg-background"
      data-profile10-component="true"
      data-unique-gallery-item="property-10-blank"
    >
      <header
        className="relative h-[60vh] min-h-[500px] w-full"
        data-profile10-section="main-banner"
        data-unique-id="hero-10"
      >
        <Image
          src={profile10Data.mainImageSrc || "/placeholder.svg"}
          alt="Property Banner"
          fill
          className="object-cover"
          priority
          data-profile10-img="banner"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-16">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
              data-profile10-field="main-title"
              data-edit-target="title"
            >
              {profile10Data.titleText}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-2" data-profile10-field="geo-location">
              📍 {profile10Data.locationText}
            </p>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl" data-profile10-field="sub-heading">
              {profile10Data.subtitleText}
            </p>
          </div>
        </div>
      </header>

      <article className="bg-card border-b" data-profile10-section="statistics-bar">
        <div className="container mx-auto px-6 py-8">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div data-profile10-stat="bedroom-count">
              <dt className="text-3xl font-bold text-foreground" data-profile10-value="beds">
                {profile10Data.bedroomNumber}
              </dt>
              <dd className="text-sm text-muted-foreground">Bedroom Count</dd>
            </div>
            <div data-profile10-stat="bathroom-count">
              <dt className="text-3xl font-bold text-foreground" data-profile10-value="baths">
                {profile10Data.bathroomNumber}
              </dt>
              <dd className="text-sm text-muted-foreground">Bathroom Count</dd>
            </div>
            <div data-profile10-stat="square-meters">
              <dt className="text-3xl font-bold text-foreground" data-profile10-value="size">
                {profile10Data.areaSize}
              </dt>
              <dd className="text-sm text-muted-foreground">Total Area</dd>
            </div>
            <div data-profile10-stat="nightly-price">
              <dt className="text-3xl font-bold text-foreground" data-profile10-value="rate">
                {profile10Data.dailyRate}
              </dt>
              <dd className="text-sm text-muted-foreground">Nightly Rate</dd>
            </div>
          </dl>
        </div>
      </article>

      <article className="py-16 bg-background" data-profile10-section="long-description">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Property Information</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl" data-profile10-field="full-text">
            {profile10Data.fullDescription}
          </p>
        </div>
      </article>

      <article className="py-16 bg-muted/30" data-profile10-section="amenities-list">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Property Features</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {profile10Data.featureList.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3" data-profile10-feature={idx}>
                <span className="text-primary text-xl">•</span>
                <span className="text-lg" data-profile10-feature-text={idx}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <article className="py-16 bg-background" data-profile10-section="image-carousel">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Photo Collection</h2>

          <figure className="relative max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={profile10Data.carouselImages[currentImageIndex] || "/placeholder.svg"}
                alt={`Photo ${currentImageIndex + 1}`}
                fill
                className="object-cover"
                data-profile10-carousel-img={currentImageIndex}
              />
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              onClick={prevImage}
              data-profile10-control="prev"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              onClick={nextImage}
              data-profile10-control="next"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="flex justify-center gap-2 mt-4">
              {profile10Data.carouselImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentImageIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                  }`}
                  data-profile10-indicator={idx}
                />
              ))}
            </div>
          </figure>
        </div>
      </article>

      <article className="py-16 bg-muted/30" data-profile10-section="renovation-story">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Renovation Journey</h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div data-profile10-phase="pre-renovation">
              <h3 className="text-2xl font-bold mb-4 text-destructive">Pre-Renovation</h3>
              <p className="text-lg text-muted-foreground leading-relaxed" data-profile10-text="before">
                {profile10Data.preRenovationText}
              </p>
            </div>

            <div data-profile10-phase="post-renovation">
              <h3 className="text-2xl font-bold mb-4 text-primary">Post-Renovation</h3>
              <p className="text-lg text-muted-foreground leading-relaxed" data-profile10-text="after">
                {profile10Data.postRenovationText}
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
