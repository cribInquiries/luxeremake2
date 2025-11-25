"use client"
import { ContainerScroll } from "@/components/ScrollBoxMove/container-scroll-animation"
import Image from "next/image"
import { Box, HStack } from "@chakra-ui/react"
import { useRouter } from "next/navigation"
import TitleSubheading from "./Text/titleSubheading"

export function BoxScrollMoveDown() {
  const router = useRouter()
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <Box
              w={["100%", "100%", "100%", "100%", "100%", "100%"]}
              mb={["20px", "20px", "20px", "20px", "20px", "50px"]}
            >
              <TitleSubheading
                title={"Get Started"}
                subheading={"Learn how our Adelaide-based consultants can help you get started."}
              />

              <HStack
                data-aos="fade-up"
                justify={["center", "center", "center", "center", "center", "center"]}
                align={"center"}
                w={"100%"}
                transition={"all 0.2s ease-in-out"}
                zIndex={3}
              >
                <Box
                  as={"button"}
                  aria-label="Get in Touch"
                  data-aos="fade-up"
                  mt={"50px"}
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
                  onClick={() => {
                    router.push("/contact")
                  }}
                >
                  Get in Touch
                  {/* <Icon as={ArrowRight}> </Icon> */}
                </Box>
              </HStack>
            </Box>
          </>
        }
      >
        <Image
          quality={70}
          priority
          loading="eager"
          src="/placeholder.svg?height=720&width=1400"
          alt="Gallery Screenshot"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  )
}
