"use client"
import dynamic from "next/dynamic"
import { Box, HStack } from "@chakra-ui/react"
import { useRouter } from "next/navigation"
import TitleSubheading from "./Text/titleSubheading"
const ThumnailSlider = dynamic(() => import("./ThumnailSliderClient"), { ssr: false })

const GalleryHeroSection = () => {
  const router = useRouter()
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
          {/* Title & Subtitle */}

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
              {/* <Icon as={ArrowRight}> </Icon> */}
            </Box>
          </HStack>
          {/* Images Container */}

          <HStack gap={["10px", "20px", "40px"]} justify="center" align="center" flexWrap="wrap">
            {/* Image 1: Rotated 45° */}
            <ThumnailSlider />
          </HStack>
        </Box>
      </HStack>
    </>
  )
}

export default GalleryHeroSection
