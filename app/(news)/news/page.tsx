"use client"
import { useState } from "react"
import { Box, Text } from "@chakra-ui/react"
import Image from "next/image"

const NewsPage = () => {
  const [categories, setCategories] = useState("Investment")

  const Allcategories = ["Investment", "Property Management", "Market Trends", "Technology"]

  const stats = [
    { value: "27%", label: "Average ROI" },
    { value: "3.5x", label: "Portfolio Growth" },
    { value: "40+", label: "Markets Served" },
  ]

  return (
    <Box width="100%" overflowX="hidden">
      <Box
        width="100%"
        maxWidth={{ base: "100%", xl: "1400px" }}
        marginX="auto"
        paddingX={{ base: "16px", sm: "24px", md: "32px", lg: "40px", xl: "60px" }}
        paddingY={{ base: "40px", md: "60px" }}
      >
        {/* Hero Section with improved responsive layout */}
        <Box position="relative" paddingBottom={{ base: "40px", sm: "50px", md: "60px", lg: "80px" }}>
          <Box
            display="flex"
            flexDirection={{ base: "column", lg: "row" }}
            gap={{ base: "24px", sm: "32px", md: "40px", lg: "60px", xl: "80px" }}
            alignItems={{ base: "flex-start", md: "center" }}
            position="relative"
          >
            <Box
              flex="1"
              maxWidth={{ base: "100%", lg: "50%" }}
              position="relative"
              zIndex="1"
              paddingRight={{ base: "0", lg: "20px" }}
            >
              {/* Small accent line */}
              <Box
                width={{ base: "40px", md: "60px" }}
                height={{ base: "3px", md: "4px" }}
                backgroundColor="black"
                marginBottom={{ base: "16px", md: "24px" }}
              />

              <Text
                fontSize={{
                  base: "28px",
                  sm: "32px",
                  md: "36px",
                  lg: "42px",
                  xl: "48px",
                }}
                fontWeight="800"
                lineHeight={{ base: "1.2", md: "1.1" }}
                marginBottom={{ base: "16px", md: "24px" }}
                letterSpacing="-0.02em"
                position="relative"
              >
                Unlocking Efficiency:
                <br />
                The Power of Modern Real Estate
              </Text>

              <Text
                fontSize={{ base: "14px", sm: "15px", md: "16px", lg: "18px" }}
                color="gray.600"
                lineHeight="1.6"
                maxWidth={{ base: "100%", md: "540px" }}
                marginBottom={{ base: "24px", md: "32px" }}
              >
                Discover how our innovative approach to property/AirBnB management and real estate investments can
                elevate your portfolio to new heights. Our data-driven strategies have helped clients achieve remarkable
                results in today's competitive market.
              </Text>

              {/* Statistics row with improved responsive layout */}
              <Box
                display="flex"
                flexDirection={{ base: "row", sm: "row" }}
                flexWrap={{ base: "wrap", sm: "wrap" }}
                gap={{
                  base: "16px",
                  sm: "20px",
                  md: "24px",
                  lg: "32px",
                  xl: "40px",
                }}
                marginTop={{ base: "24px", md: "32px" }}
              >
                {stats.map((stat, index) => (
                  <Box key={index} display="flex" flexDirection="column" minWidth={{ sm: "80px", md: "100px" }}>
                    <Text
                      fontSize={{
                        base: "20px",
                        sm: "22px",
                        md: "24px",
                        lg: "28px",
                        xl: "32px",
                      }}
                      fontWeight="700"
                      color="blue.800"
                      lineHeight="1"
                    >
                      {stat.value}
                    </Text>
                    <Text
                      fontSize={{ base: "12px", sm: "13px", md: "14px" }}
                      color="gray.600"
                      marginTop={{ base: "2px", md: "4px" }}
                    >
                      {stat.label}
                    </Text>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box
              flex="1"
              maxWidth={{ base: "100%", lg: "50%" }}
              height={{
                base: "200px",
                sm: "240px",
                md: "280px",
                lg: "320px",
                xl: "400px",
              }}
              borderRadius={{ base: "6px", md: "8px" }}
              overflow="hidden"
              position="relative"
              backgroundColor="gray.100"
              boxShadow={{
                base: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                md: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              {/* Image container with overlay */}
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                overflow="hidden" // ensure any oversize stays clipped
              >
                <Image
                  quality={70}
                  loading="lazy"
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&q=75"
                  alt="A person working on a laptop in a modern office"
                  fill // makes the img absolutely fill this Box
                  style={{
                    objectFit: "cover", // background-size: cover
                    objectPosition: "center", // background-position: center
                  }}
                  // optional: load immediately if above the fold
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Divider with responsive margins */}
        <Box
          w="100%"
          display="flex"
          justifyContent="center"
          my={{ base: "30px", sm: "35px", md: "40px", lg: "50px", xl: "60px" }}
        >
          <Box w="90%" h="1px" bg="#e0e0e0" />
        </Box>

        {/* Error display UI before articles */}
        {/* No error display needed for static content */}

        {/* Articles Section with enhanced header */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          marginBottom={{ base: "30px", md: "40px", lg: "48px" }}
          position="relative"
        >
          <Text
            fontSize={{
              base: "24px",
              sm: "26px",
              md: "28px",
              lg: "32px",
              xl: "36px",
            }}
            fontWeight="700"
            marginBottom={{ base: "12px", md: "16px" }}
            textAlign="center"
            position="relative"
            display="inline-block"
          >
            Our Recent Articles
          </Text>

          <Text
            fontSize={{ base: "14px", sm: "15px", md: "16px" }}
            color="gray.600"
            marginTop={{ base: "16px", md: "24px" }}
            marginBottom={{ base: "12px", md: "16px" }}
            textAlign="center"
            maxWidth={{ base: "100%", md: "600px" }}
            paddingX={{ base: "16px", md: "0" }}
          >
            Stay informed with our latest insights on real estate trends, investment strategies, and market analysis to
            help you make better property decisions.
          </Text>

          {/* Category Pills with improved responsive spacing */}
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            gap={{ base: "8px", sm: "10px", md: "12px" }}
            marginY={{
              base: "16px",
              sm: "20px",
              md: "24px",
              lg: "32px",
              xl: "40px",
            }}
            paddingX={{ base: "8px", sm: "0" }}
          >
            {Allcategories.map((categoryInAll) => (
              <Box
                key={categoryInAll}
                backgroundColor={categories === categoryInAll ? "#EBF8FF" : "gray.100"}
                color={categories === categoryInAll ? "#2C5282" : "gray.700"}
                borderRadius="full"
                padding={{ base: "6px 12px", md: "8px 16px" }}
                fontSize={{ base: "12px", sm: "13px", md: "14px" }}
                fontWeight={categories === categoryInAll ? "600" : "500"}
                cursor="pointer"
                onClick={() => setCategories(categoryInAll)}
              >
                {categoryInAll}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Coming Soon Message */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="300px"
          backgroundColor="gray.50"
          borderRadius="12px"
          padding={{ base: "32px", md: "48px" }}
        >
          <Text
            fontSize={{ base: "24px", md: "32px" }}
            fontWeight="700"
            color="gray.700"
            marginBottom="16px"
            textAlign="center"
          >
            Articles Coming Soon
          </Text>
          <Text fontSize={{ base: "14px", md: "16px" }} color="gray.500" textAlign="center" maxWidth="500px">
            We are working on bringing you valuable insights about real estate investment and property management. Check
            back soon!
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default NewsPage
