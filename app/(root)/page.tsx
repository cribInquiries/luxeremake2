"use client"

import React from "react"
import Hero from "@/components/Hero"
import FAQ from "@/components/FAQ"
import { Box, HStack, Stack } from "@chakra-ui/react"
import ReactLenis from "lenis/react"
import Testimonials from "@/components/testimonials"
import ScheduleConsultation from "@/components/luxeComponents/scheduleConsultation"
import HowWeCanGetYouStarted from "@/components/luxeComponents/HowWeCanGetYouStarted"
import OurServices from "@/components/luxeComponents/OurServices"

import FeaturedPlatforms from "@/components/luxeComponents/FeaturedPlatforms"
import ScaleSlider from "@/components/core/ScaleSlider"
// import FollowingScrollButton from "@/components/luxeComponents/followingScrollButton";

// Lazy load the GalleryHeroSection component
const GalleryHeroSection = React.lazy(() => import("@/components/luxeComponents/GalleryHeroSection"))

const Home = () => {
  return (
    <>
      <ReactLenis
        root
        options={{
          duration: 1.2,
          touchMultiplier: 2,
        }}
      />

      {/* <FollowingScrollButton /> */}
      {/* Render Hero and other components normally */}

      <Stack
        overflow={"hidden"}
        mt={{ base: "25px", sm: "25px", md: "25px", lg: "100px", xl: "100px" }}
        mb={{ base: "25px", sm: "25px", md: "50px", lg: "50px", xl: "50px" }}
        textAlign={"center"}
        width={"100%"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        textStyle={"display"}
        fontWeight={{ base: "400", sm: "400", md: "400", lg: "400", xl: "400" }}
        fontFamily={"arial"}
      >
        <Box as={"h1"} color={"#222222"} fontWeight={"600"} width={"90%"}>
          Luxe Managements <br />
          <Box fontWeight={"400"} textStyle={"heading"}>
            Professional Airbnb Property Management in Adelaide.
            {/* Made <FlipWords words={words} /> */}
          </Box>
        </Box>
      </Stack>
      <Hero />
      <FeaturedPlatforms />

      <OurServices />

      <HowWeCanGetYouStarted />

      {/* <StickyGallery /> */}

      {/* Use Suspense to lazy-load GalleryHeroSection */}
      {/* <Suspense fallback={<div>Loading gallery...</div>}>
        <GalleryHeroSection />
      </Suspense> */}

      <ScaleSlider />
      <Testimonials />

      {/* Horizontal dividers for spacing */}
      <HStack
        justify={"center"}
        align={"center"}
        w={"100%"}
        id="get-started-button"
        my={["50px", "50px", "100px", "100px", "100px", "100px"]}
      >
        <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
      </HStack>

      <ScheduleConsultation />

      {/* Horizontal dividers for spacing */}
      <HStack justify={"center"} align={"center"} w={"100%"}>
        <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
      </HStack>

      <FAQ type="general" />
    </>
  )
}

export default Home
