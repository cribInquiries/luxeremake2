"use client"
import type { EmblaOptionsType } from "embla-carousel"
import Carousel, { Slider, SliderContainer, SliderDotButton } from "./carousel"
import Image from "next/image"
import houseOneImg2 from "@/public/images/dalts/houseOne/WEB/2.jpg"
import houseOneImg10 from "@/public/images/dalts/houseOne/WEB/10.jpg"
import houseTwoImg1 from "@/public/images/dalts/houseTwo/WEB/1.jpg"
import houseTwoImg4 from "@/public/images/dalts/houseTwo/WEB/4.jpg"
import houseThreeImg1 from "@/public/images/dalts/houseThree/WEB/1.jpg"
import houseThreeImg2 from "@/public/images/dalts/houseThree/WEB/2.jpg"
import houseThreeImg5 from "@/public/images/dalts/houseThree/WEB/5.jpg"
import houseFourImg9 from "@/public/images/dalts/houseFour/WEB/9.jpg"
import TitleSubheading from "../luxeComponents/Text/titleSubheading"
import { HStack, Box } from "@chakra-ui/react"
import router from "next/router"

const ScaleSlider = () => {
  const OPTIONS: EmblaOptionsType = { loop: true }
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
            </Box>
          </HStack>
          {/* Images Container */}
          <div className="bg-background p-4">
            <Carousel options={OPTIONS} isAutoPlay={true} className="w-4/5 mx-auto">
              <SliderContainer className="gap-2">
                <Slider className="w-full">
                  <div className="rounded-xl h-full w-full object-cover">
                    <Image src={houseOneImg2 || "/placeholder.svg"} alt="House One" objectFit="cover" layout="fill" />
                  </div>
                </Slider>
                <Slider className="w-full">
                  <div className="rounded-xl h-full w-full object-cover">
                    <Image src={houseOneImg10 || "/placeholder.svg"} alt="House One" objectFit="cover" layout="fill" />
                  </div>
                </Slider>
                <Slider className="w-full">
                  <div className="rounded-xl h-full w-full object-cover">
                    <Image src={houseTwoImg1 || "/placeholder.svg"} alt="House Two" objectFit="cover" layout="fill" />
                  </div>
                </Slider>
                <Slider className="w-full">
                  <div className="rounded-xl h-full w-full object-cover">
                    <Image src={houseTwoImg4 || "/placeholder.svg"} alt="House Two" objectFit="cover" layout="fill" />
                  </div>
                </Slider>
                <Slider className="w-full">
                  <div className="rounded-xl h-full w-full object-cover">
                    <Image
                      src={houseThreeImg1 || "/placeholder.svg"}
                      alt="House Three"
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                </Slider>
                <Slider className="w-full">
                  <div className="rounded-xl h-full w-full object-cover">
                    <Image
                      src={houseThreeImg2 || "/placeholder.svg"}
                      alt="House Three"
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                </Slider>
                <Slider className="w-full">
                  <div className="rounded-xl h-full w-full object-cover">
                    <Image
                      src={houseThreeImg5 || "/placeholder.svg"}
                      alt="House Three"
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                </Slider>
                <Slider className="w-full">
                  <div className="rounded-xl h-full w-full object-cover">
                    <Image src={houseFourImg9 || "/placeholder.svg"} alt="House Four" objectFit="cover" layout="fill" />
                  </div>
                </Slider>
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
