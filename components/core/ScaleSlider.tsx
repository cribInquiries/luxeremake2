"use client"
import type { EmblaOptionsType } from "embla-carousel"
import Carousel, { Slider, SliderContainer, SliderDotButton } from "./carousel"
import Image from "next/image"
import TitleSubheading from "../luxeComponents/Text/titleSubheading"
import { HStack, Box } from "@chakra-ui/react"
import { useRouter } from "next/navigation"

const ScaleSlider = () => {
  const router = useRouter()
  const OPTIONS: EmblaOptionsType = { loop: true }

  const images = [
    "/images/dalts/houseOne/WEB/2.jpg",
    "/images/dalts/houseOne/WEB/10.jpg",
    "/images/dalts/houseTwo/WEB/1.jpg",
    "/images/dalts/houseTwo/WEB/4.jpg",
    "/images/dalts/houseThree/WEB/1.jpg",
    "/images/dalts/houseThree/WEB/2.jpg",
    "/images/dalts/houseThree/WEB/5.jpg",
    "/images/dalts/houseFour/WEB/9.jpg",
  ]

  return (
    <>
      <HStack my={["50px", "50px", "100px", "100px", "100px", "100px"]} justify={"center"} align={"center"} w={"100%"}>
        <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
      </HStack>
      <TitleSubheading
        title={"Gallery"}
        subheading={
          "Explore our portfolio to see our latest innovative projects in web development, design, and beyond."
        }
      />
      <HStack id="gallery-section" w="100%" justify="center" align="center">
        <Box w="100%" bg="white" borderRadius="md" p={["20px", "30px"]} textAlign="center">
          <HStack
            data-aos="fade-up"
            justify={["center", "center", "center", "center", "center", "center"]}
            align={"start"}
            w={"100%"}
            transition={"all 0.2s ease-in-out"}
            zIndex={3}
          >
            <Box
              as={"button"}
              aria-label="Go to Gallery"
              data-aos="fade-up"
              my={"40px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"15px"}
              fontFamily={"arial"}
              transition={"all 0.2s ease-in-out"}
              cursor={"pointer"}
              _hover={{
                transition: "all 0.2s ease-in-out",
                scale: 1.1,
                fontWeight: "700",
                px: "80px",
                bg: "black",
              }}
              p={4}
              bg={"black"}
              color={"white"}
              rounded={"30px"}
              px={"12"}
              fontWeight={"500"}
              onClick={() => router.push("/gallery")}
            >
              Go to Gallery
            </Box>
          </HStack>
          <div className="bg-background p-4">
            <Carousel options={OPTIONS} isAutoPlay={true} className="w-4/5 mx-auto">
              <SliderContainer className="gap-2">
                {images.map((src, index) => (
                  <Slider key={index} className="w-full">
                    <div className="rounded-xl h-full w-full object-cover">
                      <Image
                        src={src || "/placeholder.svg"}
                        alt={`House ${index + 1}`}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Slider>
                ))}
              </SliderContainer>
              <div className="flex justify-center py-4">
                <SliderDotButton />
              </div>
            </Carousel>
          </div>
        </Box>
      </HStack>
    </>
  )
}

export default ScaleSlider
