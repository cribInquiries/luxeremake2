"use client"
import { useState } from "react"
import { Box, HStack, Text, VStack } from "@chakra-ui/react"

import { useRouter } from "next/navigation"
import { FaAngleRight } from "react-icons/fa"

import ScheduleConsultation from "@/components/luxeComponents/scheduleConsultation"
import Image from "next/image"

const About = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const router = useRouter()
  const [members, setMembers] = useState([
    {
      name: "Habibur Rahman",
      role: "Founder & CEO",
      src: "/placeholder.svg?height=400&width=400",
      bio: "With over 10 years in property management, Habibur founded Luxe with a vision to transform the short-term rental industry through innovation and exceptional service.",
    },
    {
      name: "Matthew Zaniewski",
      role: "Operations Director",
      src: "/placeholder.svg?height=400&width=400",
      bio: "Matthew oversees day-to-day operations, ensuring every property meets our exacting standards and every guest experience exceeds expectations.",
    },
    {
      name: "Anjesh Bhattarai",
      role: "Lead Software Engineer",
      src: "/placeholder.svg?height=400&width=400",
      bio: "Anjesh develops our proprietary technology platform that powers our data-driven approach to pricing, marketing, and guest communication.",
    },
    {
      name: "Zadeed Bhuiyan",
      role: "Executive Partner",
      src: "/placeholder.svg?height=400&width=400",
      bio: "Zadeed brings extensive experience in hospitality and real estate, helping property owners maximize their investment returns.",
    },
    {
      name: "Aryan Dangwal",
      role: "Executive Partner",
      src: "/placeholder.svg?height=400&width=400",
      bio: "Aryan specializes in market analysis and strategic growth, identifying opportunities to expand our portfolio of luxury properties.",
    },
  ])

  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide(currentSlide === members.length - 1 ? 0 : currentSlide + 1)
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? members.length - 1 : currentSlide - 1)
  }

  // Stats data
  const stats = [
    { value: "98%", label: "Guest Satisfaction" },
    { value: "35%", label: "Average Revenue Increase" },
    { value: "24/7", label: "Guest Support" },
    // { value: "100+", label: "Properties Managed" },
  ]

  return (
    <>
      {/* Hero Section */}

      <HStack
        zIndex={3}
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        justify={"center"} // !!
        align={"center"}
        w={"100%"}
        h={"100%"}
        my={["50px", "50px", "50px", "50px", "50px", "100px"]}
      >
        <HStack
          justify={"center"}
          align={["center", "center", "start", "start", "start", "start"]}
          w={"100%"}
          h={"100%"}
          gap={["15px", "15px", "15px", "50px", "50px", "50px"]}
          wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
        >
          <Box w={["95%", "95%", "95%", "600px", "600px", "600px"]}>
            <Text
              w={["100%", "100%", "100%", "100%", "100%", "100%"]}
              mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
              textStyle={"heading"}
              fontWeight={600}
              fontFamily={"arial"}
              bgClip="text"
              textAlign={["center", "center", "center", "left", "left", "left"]}
              color={"black"}
              bgGradient="linear(to-r, teal, blue)"
            >
              Our Story
            </Text>
            <Text
              textStyle={"basicText"}
              mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
              textAlign={["center", "center", "center", "left", "left", "left"]}
              fontFamily={"arial"}
              color={"black"}
              w={["100%", "100%", "100%", "100%", "100%", "100%"]}
              fontWeight={300}
            >
              Luxe Managements launched in 2022 with a clear mission: to redefine AirBnB management through innovation,
              quality, and care. We saw the gaps — inconsistent AirBnB management service, underperforming listings, and
              generic guest experiences — and built a smarter, more elevated alternative. <br></br>
              <br></br>From data-driven pricing to five-star cleaning and 24/7 guest support, every detail is designed
              to maximise returns and create unforgettable stays. Today, Luxe is the go-to choice for property owners
              across Adelaide who want hassle-free hosting, effortless managements services for their AirBnBs, and
              hotel-quality results.
            </Text>
            <HStack
              justify={["center", "center", "center", "start", "start", "start"]}
              align={"start"}
              w={"100%"}
              transition={"all 0.2s ease-in-out"}
              zIndex={3}
            >
              <Box
                my={"25px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={["center"]}
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
                onClick={() => router.push("/about/journey")}
              >
                Our Journey
                {/* <Icon as={ArrowRight}> </Icon> */}
              </Box>
            </HStack>
          </Box>

          <Box
            position="relative"
            h={["350px", "350px", "350px", "500px", "500px", "600px"]}
            w={["95%", "95%", "95%", "600px", "600px", "600px"]}
            borderRadius="30px"
            overflow="hidden"
            display="flex"
            justifyContent="flex-end"
          >
            {/* replace inner Box’s background-image with Next/Image */}
            <Box
              position="relative"
              h={["350px", "350px", "350px", "500px", "500px", "600px"]}
              w={["100%", "100%", "100%", "550px", "550px", "550px"]}
              borderRadius="30px"
              overflow="hidden"
              bg="gray.200" // fallback color
            >
              <Image
                quality={70}
                loading="lazy"
                src="https://images.pexels.com/photos/7213549/pexels-photo-7213549.jpeg"
                alt="Scenic background"
                fill // in Next.js 13+, use `fill`; for older versions use `layout="fill"`
                style={{
                  objectFit: "cover", // replicate `background-size: cover`
                  objectPosition: "center", // replicate `background-position: center`
                }}

                // optional: if you want to preload it
              />
            </Box>
          </Box>
        </HStack>
      </HStack>

      {/* Stats Section */}
      <Box
        width="100%"
        py={16}
        px={{ base: 4, md: 8 }}
        bg="gray.50"
        borderTop="1px solid"
        borderBottom="1px solid"
        borderColor="gray.100"
      >
        <Box maxWidth="1200px" mx="auto">
          <Box
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            gap={{ base: 8, md: 0 }}
            justifyContent="space-between"
          >
            {stats.map((stat, index) => (
              <Box key={index} textAlign="center" flex="1" py={6} px={4} borderRadius="lg" transition="all 0.3s ease">
                <Text
                  fontSize={{ base: "4xl", md: "5xl" }}
                  fontWeight="bold"
                  mb={2}
                  bgGradient="linear(to-r, gray.800, gray.600)"
                  bgClip="text"
                  color={"black"}
                >
                  {stat.value}
                </Text>
                <Text fontSize="lg" color="gray.600">
                  {stat.label}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Our Approach Section */}
      <Box width="100%" py={20} px={{ base: 4, md: 8 }}>
        <Box maxWidth="1200px" mx="auto">
          <Box textAlign="center" mb={16}>
            <Box width="80px" height="4px" bg="gray.900" mb={6} mx="auto" />
            <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" mb={4}>
              Our Approach
            </Text>
            <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600" maxWidth="800px" mx="auto" lineHeight="tall">
              What sets Luxe apart is our comprehensive, detail-oriented approach to AirBnB management
            </Text>
          </Box>

          <Box
            display="grid"
            gridTemplateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={8}
          >
            {/* Approach Item 1 */}
            <Box
              p={8}
              borderRadius="xl"
              bg="white"
              boxShadow="md"
              transition="all 0.3s ease"
              _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
              height="100%"
            >
              <Text fontSize="xl" fontWeight="bold" mb={4}>
                Data-Driven Pricing
              </Text>
              <Text fontSize="md" color="gray.600" lineHeight="tall">
                Our proprietary algorithm analyzes market trends, seasonal demand, and local events to optimize your
                AirBnB's pricing for maximum revenue.
              </Text>
            </Box>

            {/* Approach Item 2 */}
            <Box
              p={8}
              borderRadius="xl"
              bg="white"
              boxShadow="md"
              transition="all 0.3s ease"
              _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
              height="100%"
            >
              <Text fontSize="xl" fontWeight="bold" mb={4}>
                Professional Photography
              </Text>
              <Text fontSize="md" color="gray.600" lineHeight="tall">
                High-quality, professionally staged photos showcase your AirBnBs's best features, attracting more
                bookings and premium rates.
              </Text>
            </Box>

            {/* Approach Item 3 */}
            <Box
              p={8}
              borderRadius="xl"
              bg="white"
              boxShadow="md"
              transition="all 0.3s ease"
              _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
              height="100%"
            >
              <Text fontSize="xl" fontWeight="bold" mb={4}>
                Concierge Guest Service
              </Text>
              <Text fontSize="md" color="gray.600" lineHeight="tall">
                Our 24/7 guest support ensures every stay is seamless, from personalized check-in to local
                recommendations and immediate assistance.
              </Text>
            </Box>

            {/* Approach Item 4 */}
            <Box
              p={8}
              borderRadius="xl"
              bg="white"
              boxShadow="md"
              transition="all 0.3s ease"
              _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
              height="100%"
            >
              <Text fontSize="xl" fontWeight="bold" mb={4}>
                Five-Star Cleaning
              </Text>
              <Text fontSize="md" color="gray.600" lineHeight="tall">
                Our rigorous cleaning protocol exceeds industry standards, ensuring every guest arrives to an impeccably
                maintained AirBnB.
              </Text>
            </Box>

            {/* Approach Item 5 */}
            <Box
              p={8}
              borderRadius="xl"
              bg="white"
              boxShadow="md"
              transition="all 0.3s ease"
              _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
              height="100%"
            >
              <Text fontSize="xl" fontWeight="bold" mb={4}>
                Smart Home Integration
              </Text>
              <Text fontSize="md" color="gray.600" lineHeight="tall">
                We implement and manage smart home technology for secure, convenient access and enhanced guest
                experiences.
              </Text>
            </Box>

            {/* Approach Item 6 */}
            <Box
              p={8}
              borderRadius="xl"
              bg="white"
              boxShadow="md"
              transition="all 0.3s ease"
              _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
              height="100%"
            >
              <Text fontSize="xl" fontWeight="bold" mb={4}>
                Transparent Reporting
              </Text>
              <Text fontSize="md" color="gray.600" lineHeight="tall">
                Detailed monthly reports provide complete visibility into your AirBnB's performance, bookings, and
                financial returns.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Our Mission Section */}
      <Box width="100%" bg="#0a0e1f" color="white" py={20} px={{ base: 4, md: 8 }}>
        <Box maxWidth="1200px" mx="auto">
          <Box width="80px" height="4px" bg="white" mb={6} mx="auto" />
          <Text fontSize={{ base: "4xl", md: "5xl" }} fontWeight="bold" textAlign="center" mb={6}>
            Our Mission
          </Text>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            textAlign="center"
            maxWidth="800px"
            mx="auto"
            mb={16}
            lineHeight="tall"
            opacity="0.9"
          >
            At Luxe Managements, our mission is to elevate the AirBnBs' experience for both property owners and guests.
            We strive to maximize returns for owners while ensuring each guest enjoys a five-star stay.
          </Text>

          <Box display="flex" flexDirection={{ base: "column", md: "row" }} gap={8} justifyContent="center">
            {/* Excellence Card */}
            <Box
              flex="1"
              bg="rgba(255,255,255,0.05)"
              p={10}
              borderRadius="xl"
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-5px)",
                bg: "rgba(255,255,255,0.08)",
              }}
              border="1px solid"
              borderColor="rgba(255,255,255,0.1)"
            >
              <Box
                width="60px"
                height="60px"
                borderRadius="full"
                bg="rgba(255,255,255,0.1)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={6}
              >
                <Text fontSize="2xl">✨</Text>
              </Box>
              <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" mb={4}>
                Excellence
              </Text>
              <Text fontSize="md" lineHeight="tall" opacity="0.8">
                Delivering unparalleled service quality in every interaction, from guest communications to AirBnB
                maintenance and owner reporting.
              </Text>
            </Box>

            {/* Innovation Card */}
            <Box
              flex="1"
              bg="rgba(255,255,255,0.05)"
              p={10}
              borderRadius="xl"
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-5px)",
                bg: "rgba(255,255,255,0.08)",
              }}
              border="1px solid"
              borderColor="rgba(255,255,255,0.1)"
            >
              <Box
                width="60px"
                height="60px"
                borderRadius="full"
                bg="rgba(255,255,255,0.1)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={6}
              >
                <Text fontSize="2xl">💡</Text>
              </Box>
              <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" mb={4}>
                Innovation
              </Text>
              <Text fontSize="md" lineHeight="tall" opacity="0.8">
                Leveraging cutting-edge technology to streamline operations, optimize pricing, and create seamless
                experiences for both owners and guests.
              </Text>
            </Box>

            {/* Integrity Card */}
            <Box
              flex="1"
              bg="rgba(255,255,255,0.05)"
              p={10}
              borderRadius="xl"
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-5px)",
                bg: "rgba(255,255,255,0.08)",
              }}
              border="1px solid"
              borderColor="rgba(255,255,255,0.1)"
            >
              <Box
                width="60px"
                height="60px"
                borderRadius="full"
                bg="rgba(255,255,255,0.1)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={6}
              >
                <Text fontSize="2xl">🤝</Text>
              </Box>
              <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" mb={4}>
                Integrity
              </Text>
              <Text fontSize="md" lineHeight="tall" opacity="0.8">
                Building trust through transparency and ethical practices, providing honest communication and fair
                pricing to all stakeholders.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      <HStack
        zIndex={3}
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        justify={"center"} // !!
        align={"center"}
        w={"100%"}
        h={"100%"}
        my={["50px", "50px", "50px", "50px", "50px", "100px"]}
      >
        <VStack
          justify={"center"}
          align={["center", "center", "center", "center", "center", "center"]}
          w={"100%"}
          h={"100%"}
          gap={["5px", "5px", "5px", "5px", "5px", "5px"]}
          wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
        >
          <Box w={["100%", "100%", "100%", "60%", "50%", "50%"]}>
            <Text
              w={["100%", "100%", "100%", "100%", "100%", "100%"]}
              mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
              fontSize={["30px", "30px", "35px", "35px", "35px", "40px"]}
              fontWeight={600}
              fontFamily={"arial"}
              bgClip="text"
              textAlign={["center", "center", "center", "center", "center", "center"]}
              color={"black"}
              bgGradient="linear(to-r, teal, blue)"
            >
              Meet Our Team
            </Text>
          </Box>

          <VStack>
            <HStack
              w={["100%", "100%", "100%", "100%", "100%", "100%"]}
              justify={["center", "center", "center", "center", "center", "center"]}
              align={"center"}
              gap={["0", "0", "0", "50px", "50px", "100px"]}
            >
              <HStack
                aria-label="Previous Slide"
                display={["none", "none", "none", "flex", "flex", "flex"]}
                as={"button"}
                mt={["25px", "25px", "50px", "25px", "25px", "25px"]}
                w={["50px", "50px", "50px", "100px", "100px", "100px"]}
                h={["50px", "50px", "50px", "100px", "100px", "100px"]}
                transition={"transform 0.3s ease"}
                _hover={{
                  transform: "translateX(-10px)",
                }}
                justify={"center"}
                align={"center"}
                borderRadius={"100px"}
                border={"1px solid rgb(0, 0,0,0.25)"}
                color={"black"}
                onClick={() => {
                  prevSlide()
                }}
              >
                <Text cursor={"pointer"} fontSize={"40px"}>
                  <FaAngleRight style={{ transform: "rotate(180deg)" }} color="black" />
                </Text>
              </HStack>
              <Box
                position="relative" // make room for Image fill
                mt={["80px", "80px", "50px", "50px", "50px", "50px"]}
                display="block"
                h={["300px", "300px", "300px", "500px", "500px", "500px"]}
                w={["300px", "300px", "300px", "500px", "500px", "500px"]}
                borderRadius="full" // circle
                overflow="hidden" // clip to circle
              >
                <Image
                  quality={70}
                  loading="lazy"
                  src={members[currentSlide].src || "/placeholder.svg"}
                  alt={`Slide ${currentSlide + 1}`}
                  fill // in Next.js 13+, for older use layout="fill"
                  style={{
                    objectFit: "cover", // cover & center just like bg-size/bg-pos
                    objectPosition: "center",
                  }}

                  // optional: preload current slide
                />
              </Box>

              <HStack
                display={["none", "none", "none", "flex", "flex", "flex"]}
                as={"button"}
                aria-label="Next Slide"
                mt={["25px", "25px", "50px", "25px", "25px", "25px"]}
                w={["50px", "50px", "50px", "100px", "100px", "100px"]}
                h={["50px", "50px", "50px", "100px", "100px", "100px"]}
                transition={"transform 0.3s ease"}
                _hover={{
                  transform: "translateX(10px)",
                }}
                justify={"center"}
                align={"center"}
                borderRadius={"100px"}
                bg={"white"}
                color={"black"}
                border={"1px solid rgb(0, 0,0,0.25)"}
                onClick={() => {
                  nextSlide()
                }}
              >
                <Text cursor={"pointer"} fontSize={"40px"}>
                  <FaAngleRight color="black" />
                </Text>
              </HStack>
            </HStack>
            <HStack mt={["25px", "25px", "50px", "25px", "25px", "25px"]}>
              <HStack
                aria-label="Previous Slide"
                display={["flex", "flex", "flex", "none", "none", "none"]}
                as={"button"}
                w={["50px", "50px", "50px", "170px", "200px", "125px"]}
                h={["50px", "50px", "50px", "50px", "50px", "125px"]}
                transition={"transform 0.3s ease"}
                _hover={{
                  transform: "translateX(-10px)",
                }}
                justify={"center"}
                align={"center"}
                borderRadius={"100px"}
                border={"1px solid rgb(0, 0,0,0.25)"}
                color={"black"}
                onClick={() => {
                  prevSlide()
                }}
              >
                <Text cursor={"pointer"} fontSize={"40px"}>
                  <FaAngleRight style={{ transform: "rotate(180deg)" }} color="black" />
                </Text>
              </HStack>

              <VStack w={["245px", "245px", "245px", "100%", "100%", "100%"]}>
                <Text fontSize={["20px", "20px", "20px", "30px", "30px", "30px"]} fontWeight={"700"}>
                  {members[currentSlide].name}
                </Text>

                <Text fontWeight={"500"} fontSize={["16px", "16px", "16px", "18px", "18px", "18px"]}>
                  {members[currentSlide].role}
                </Text>
              </VStack>
              <HStack
                display={["flex", "flex", "flex", "none", "none", "none"]}
                as={"button"}
                aria-label="Next Slide"
                w={["50px", "50px", "50px", "170px", "200px", "125px"]}
                h={["50px", "50px", "50px", "50px", "50px", "125px"]}
                transition={"transform 0.3s ease"}
                _hover={{
                  transform: "translateX(10px)",
                }}
                justify={"center"}
                align={"center"}
                borderRadius={"100px"}
                bg={"white"}
                color={"black"}
                border={"1px solid rgb(0, 0,0,0.25)"}
                onClick={() => {
                  nextSlide()
                }}
              >
                <Text cursor={"pointer"} fontSize={"40px"}>
                  <FaAngleRight color="black" />
                </Text>
              </HStack>
            </HStack>
          </VStack>
          {/* <Image
quality={70} loading="lazy" src={collage || "/placeholder.svg"} width={500} /> */}
        </VStack>
      </HStack>
      {/* Call to Action */}

      <ScheduleConsultation />
    </>
  )
}

export default About
