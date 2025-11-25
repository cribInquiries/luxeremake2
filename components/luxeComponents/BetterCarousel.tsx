"use client"

import { useState } from "react"
import Image from "next/image"
import { Box } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"

export default function ImageCarousel() {
  const images = [
    "/images/dalts/houseOne/WEB/10.jpg",
    "/images/dalts/houseOne/WEB/2.jpg",
    "/images/dalts/houseTwo/WEB/1.jpg",
    "/images/dalts/houseTwo/WEB/2.jpg",
    "/images/dalts/houseThree/WEB/1.jpg",
    "/images/dalts/houseThree/WEB/2.jpg",
    "/images/dalts/houseFour/WEB/1.jpg",
    "/images/dalts/houseFour/WEB/2.jpg",
    "/images/dalts/houseFour/WEB/7.jpg",
    "/images/dalts/houseFour/WEB/10.jpg",
  ]

  const [currentImage, setCurrentImage] = useState(0)

  const handleThumbnailClick = (index: number) => {
    setCurrentImage(index)
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      padding="20px"
      bg="gray.100"
      position="relative"
      rounded={"16px"}
      h={["350px", "350px", "350px", "500px", "500px", "600px"]}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ width: "100%", height: "500px", position: "relative" }}
        >
          <Box width="100%" height="100%" position="relative" overflow="hidden">
            <Image
              quality={70}
              loading="lazy"
              src={images[currentImage] || "/placeholder.svg"}
              alt={`carousel-image-${currentImage}`}
              fill
              className="object-cover"
            />
          </Box>
        </motion.div>
      </AnimatePresence>

      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        padding="10px"
        display="flex"
        justifyContent="center"
        zIndex="10"
        gap={2}
      >
        {images.map((img, index) => (
          <Box
            key={index}
            onClick={() => handleThumbnailClick(index)}
            cursor="pointer"
            padding="8px"
            borderRadius="4px"
            transition="all 0.3s"
            _hover={{ transform: "scale(1.1)" }}
            border={currentImage === index ? "2px solid white" : "2px solid transparent"}
          >
            <Box>
              <Image
                quality={70}
                loading="lazy"
                style={{ borderRadius: "4px" }}
                src={img || "/placeholder.svg"}
                alt={`Stunning house image thumbnail-${index}`}
                width={100}
                height={50}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
