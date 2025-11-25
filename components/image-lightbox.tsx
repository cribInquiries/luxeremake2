"use client"

import { useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageLightboxProps {
  images: string[]
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}

export function ImageLightbox({ images, currentIndex, onClose, onNext, onPrevious }: ImageLightboxProps) {
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") onNext()
      if (e.key === "ArrowLeft") onPrevious()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose, onNext, onPrevious])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm" onClick={onClose}>
      {/* Close button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-white hover:bg-white/10"
        onClick={onClose}
      >
        <X className="h-6 w-6" />
      </Button>

      {/* Previous button */}
      {images.length > 1 && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 text-white hover:bg-white/10"
          onClick={(e) => {
            e.stopPropagation()
            onPrevious()
          }}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
      )}

      {/* Image */}
      <div className="relative max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`Image ${currentIndex + 1}`}
          className="max-h-[90vh] max-w-[90vw] object-contain"
        />
        {/* Image counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-4 py-2 text-sm text-white">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Next button */}
      {images.length > 1 && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 text-white hover:bg-white/10"
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      )}
    </div>
  )
}
