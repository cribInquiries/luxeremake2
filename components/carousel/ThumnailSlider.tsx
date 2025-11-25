"use client"

import React, { useEffect, useState, useRef } from "react"
import type { EmblaOptionsType } from "embla-carousel"
import Carousel, { Slider, SliderContainer, ThumsSlider } from "@/components/core/carousel"
import Image from "next/image"
import { Box, HStack } from "@chakra-ui/react"

type ImgPreview = {
  [key: string]: string
}

function ThumnailSlider() {
  const imgPreview: ImgPreview = {
    img1: "/images/dalts/houseOne/WEB/10.jpg",
    img2: "/images/dalts/houseOne/WEB/2.jpg",
    img5: "/images/dalts/houseTwo/WEB/1.jpg",
    img8: "/images/dalts/houseTwo/WEB/4.jpg",
    img14: "/images/dalts/houseFour/WEB/9.jpg",
    img15: "/images/dalts/houseThree/WEB/1.jpg",
    img16: "/images/dalts/houseThree/WEB/2.jpg",
    img17: "/images/dalts/houseThree/WEB/5.jpg",
  }

  const OPTIONS: EmblaOptionsType = { loop: false }
  const [isVisible, setIsVisible] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  // Use IntersectionObserver for lazy loading images
  const useIntersectionObserver = (ref: React.RefObject<HTMLElement>, rootMargin = "0px") => {
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        },
        { rootMargin },
      )
      if (ref.current) observer.observe(ref.current)
      return () => observer.disconnect()
    }, [ref])
  }

  useIntersectionObserver(imgRef as React.RefObject<HTMLElement>, "200px")

  // Memoized Image with Lazy Loading
  const ImageWithLazyLoading = React.memo(
    ({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) => {
      const placeholder = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy5zdmcuY29tLz4KPC9zdmc+Cg=="

      return (
        <div ref={imgRef}>
          <Image
            quality={70}
            src={isVisible ? src : placeholder}
            alt={alt}
            width={width}
            height={height}
            loading={"lazy"}
            style={{
              backgroundPosition: "bottom",
              height: "100%",
              width: "100%",
              objectFit: "contain",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: "40px",
            }}
          />
        </div>
      )
    },
  )

  ImageWithLazyLoading.displayName = "ImageWithLazyLoading"

  return (
    <Box w="100%" bg="gray.100" p={["8px", "8px", "8px", "24px", "24px", "24px"]} borderRadius="16px">
      <Carousel options={OPTIONS} className="relative" isAutoPlay={true}>
        <SliderContainer className="gap-2">
          {Object.keys(imgPreview).map((key, index) => (
            <Slider
              key={index}
              className="xl:h-[500px] sm:h-[500px] h-[200px] w-full rounded-2xl"
              style={{ borderRadius: "40px" }}
              thumnailSrc={imgPreview[key]}
            >
              <HStack justify="center" align="center" h="100%" w="100%">
                <ImageWithLazyLoading
                  src={imgPreview[key] || "/placeholder.svg"}
                  alt={`House's in our Gallery ${index + 1}`}
                  width={1400}
                  height={800}
                />
              </HStack>
            </Slider>
          ))}
        </SliderContainer>
        <ThumsSlider />
      </Carousel>
    </Box>
  )
}

export default ThumnailSlider
