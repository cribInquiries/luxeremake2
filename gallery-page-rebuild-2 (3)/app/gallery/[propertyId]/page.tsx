import { notFound } from "next/navigation"
import { getPropertyById } from "@/lib/properties"
import { PropertyDetailView } from "@/components/property-detail-view"
import { PropertyTransformationView } from "@/components/property-transformation-view"
import { GlenelgTransformationView } from "@/components/glenelg-transformation-view"
import { WestBeachTransformationView } from "@/components/west-beach-transformation-view"
import { SeafordTransformationView } from "@/components/seaford-transformation-view"
import { EnfieldTransformationView } from "@/components/enfield-transformation-view"
import { MelbourneStreetTransformationView } from "@/components/melbourne-street-transformation-view"
import { NorwoodEstateView } from "@/components/norwood-estate-view"
import { ClearviewTransformationView } from "@/components/clearview-transformation-view"
import { BlankPropertyProfile } from "@/components/blank-property-profile"

interface PropertyPageProps {
  params: Promise<{
    propertyId: string
  }>
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { propertyId } = await params
  const id = Number.parseInt(propertyId)

  if (isNaN(id)) {
    notFound()
  }

  if (id === 2) {
    return <NorwoodEstateView />
  }

  if (id === 8) {
    const property = getPropertyById(id)
    if (!property) notFound()
    return <ClearviewTransformationView property={property} />
  }

  if (id === 10) {
    return <BlankPropertyProfile />
  }

  const property = getPropertyById(id)

  if (!property) {
    notFound()
  }

  if (property.transformationStory) {
    if (id === 1) {
      return <GlenelgTransformationView property={property} />
    }
    if (id === 4) {
      return <MelbourneStreetTransformationView property={property} />
    }
    if (id === 3) {
      return <WestBeachTransformationView property={property} />
    }
    if (id === 5) {
      return <SeafordTransformationView property={property} />
    }
    if (id === 6) {
      return <EnfieldTransformationView property={property} />
    }
    return <PropertyTransformationView property={property} />
  }

  return <PropertyDetailView property={property} />
}

export async function generateMetadata({ params }: PropertyPageProps) {
  const { propertyId } = await params
  const id = Number.parseInt(propertyId)
  const property = getPropertyById(id)

  if (!property) {
    return {
      title: "Property Not Found",
    }
  }

  const isTransformation = !!property.transformationStory

  return {
    title: isTransformation
      ? `${property.title} - Property Transformation Success Story | Luxe Managements`
      : `${property.title} | Luxe Managements`,
    description: isTransformation
      ? `Discover how Luxe Managements transformed ${property.title} into a high-performing Airbnb investment. ${property.transformationStory!.results.occupancyRate}% occupancy, $${property.transformationStory!.results.annualGrossRevenue.toLocaleString()} annual revenue. ${property.description.substring(0, 100)}...`
      : property.description,
    keywords: isTransformation
      ? [
          "Airbnb property management",
          "short-term rental management",
          "property transformation",
          "Airbnb investment",
          property.location,
          "vacation rental management",
          "property renovation",
          "Airbnb success story",
          "rental income optimization",
          "Luxe Managements",
        ].join(", ")
      : undefined,
    openGraph: {
      title: property.title,
      description: property.description,
      images: [property.mainImage],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: property.title,
      description: property.description.substring(0, 200),
      images: [property.mainImage],
    },
    alternates: {
      canonical: `/gallery/${propertyId}`,
    },
  }
}
