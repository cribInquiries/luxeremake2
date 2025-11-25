"use client"
import { useEffect, useState } from "react"
import { Box, Text } from "@chakra-ui/react"
import { getAllArticles } from "@/lib/actions/get-all-articles"
import type { Article } from "@/lib/types/article"
import Image from "next/image"
// app/news/page.tsx

const NewsPage = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(false)
  const [totalCount, setTotalCount] = useState(0)
  const [categories, setCategories] = useState("Investment")

  const LIMIT = 6

  const fetchArticles = async () => {
    setLoading(true)
    const res = await getAllArticles(LIMIT, offset)
    if (res.success && res.data) {
      setArticles((prev) => {
        const existingIds = new Set(prev.map((a) => a.$id))
        const newUnique = res.data.filter((a) => !existingIds.has(a.$id))
        return [...prev, ...newUnique]
      })
      setOffset((prev) => prev + LIMIT)
      setTotalCount(res.total)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  // Sample categories for visual enhancement
  const Allcategories = ["Investment", "Property Management", "Market Trends", "Technology"]

  // Sample statistics for visual enhancement
  const stats = [
    { value: "27%", label: "Average ROI" },
    { value: "3.5x", label: "Portfolio Growth" },
    { value: "40+", label: "Markets Served" },
  ]

  return (
    <Box width="100%" overflowX="hidden">
      {/* Main container with improved responsive padding */}
      <Box
        width="100%"
        maxWidth={{ base: "100%", xl: "1400px" }}
        marginX="auto"
        paddingX={{
          base: "16px",
          sm: "24px",
          md: "32px",
          lg: "40px",
          xl: "60px",
        }}
        paddingY={{ base: "40px", md: "60px" }}
      >
        {/* Hero Section with improved responsive layout */}
        <Box position="relative" paddingBottom={{ base: "40px", sm: "50px", md: "60px", lg: "80px" }}>
          <Box
            display="flex"
            flexDirection={{ base: "column", lg: "row" }}
            gap={{
              base: "24px",
              sm: "32px",
              md: "40px",
              lg: "60px",
              xl: "80px",
            }}
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
            {Allcategories.map((categoryInAll, index) => (
              <Box
                key={categoryInAll}
                backgroundColor={categories === categoryInAll ? "#EBF8FF" : "gray.100"}
                color={categories === categoryInAll ? "#2C5282" : "gray.700"}
                borderRadius="full"
                padding={{ base: "6px 12px", md: "8px 16px" }}
                fontSize={{ base: "12px", sm: "13px", md: "14px" }}
                fontWeight={categories === categoryInAll ? "600" : "500"}
                cursor="pointer"
                _hover={{
                  backgroundColor: categories === categoryInAll ? "#BEE3F8" : "gray.200",
                }}
                transition="all 0.2s ease-in-out"
                onClick={() => setCategories(categoryInAll)}
              >
                {categoryInAll}
              </Box>
            ))}
          </Box>

          <Text
            fontSize={{ base: "13px", md: "14px", lg: "15px" }}
            color="gray.500"
            marginBottom={{ base: "30px", md: "40px" }}
            textAlign="center"
          >
            Showing {articles.length} of {totalCount} article
            {totalCount !== 1 ? "s" : ""}
          </Text>
        </Box>

        {/* Featured Article with improved responsive behavior */}
        {articles.length > 0 && (
          <Box marginBottom={{ base: "30px", sm: "40px", md: "48px" }} display={{ base: "none", md: "block" }}>
            <Box
              display="flex"
              flexDirection={{ base: "column", lg: "row" }}
              backgroundColor="gray.50"
              borderRadius={{ base: "8px", md: "12px" }}
              overflow="hidden"
              boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
            >
              <Box
                width={{ base: "100%", lg: "50%" }}
                height={{ base: "200px", sm: "240px", lg: "320px" }}
                backgroundColor="gray.200"
                position="relative"
              >
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  overflow="hidden" // clip overflow just like background-image
                >
                  <Image
                    quality={70}
                    loading="lazy"
                    src={
                      articles[0]?.featuredImage ||
                      "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&q=75" ||
                      "/placeholder.svg"
                    }
                    alt={articles[0]?.title}
                    fill // in Next.js 13+; for older versions use layout="fill"
                    style={{
                      objectFit: "cover", // replicates background-size: cover
                      objectPosition: "center", // replicates background-position: center
                    }}
                    // optional: load right away if this is above the fold
                  />
                </Box>

                <Box
                  position="absolute"
                  top={{ base: "12px", md: "16px" }}
                  left={{ base: "12px", md: "16px" }}
                  backgroundColor="#3182CE"
                  color="white"
                  padding={{ base: "4px 10px", md: "6px 12px" }}
                  borderRadius="4px"
                  fontSize={{ base: "10px", md: "12px" }}
                  fontWeight="600"
                  textTransform="uppercase"
                >
                  Featured
                </Box>
              </Box>

              <Box
                width={{ base: "100%", lg: "50%" }}
                padding={{ base: "24px", sm: "28px", md: "32px" }}
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Text
                  fontSize={{ base: "10px", sm: "11px", md: "12px" }}
                  color="#3182CE"
                  fontWeight="600"
                  textTransform="uppercase"
                  letterSpacing="0.05em"
                  marginBottom={{ base: "6px", md: "8px" }}
                >
                  {articles[0]?.category || "Market Insights"}
                </Text>

                <Text
                  fontSize={{
                    base: "18px",
                    sm: "20px",
                    md: "22px",
                    lg: "24px",
                  }}
                  fontWeight="700"
                  lineHeight="1.3"
                  marginBottom={{ base: "12px", md: "16px" }}
                >
                  {articles[0]?.title || "Understanding the Modern Real Estate Landscape"}
                </Text>

                <Text
                  fontSize={{ base: "14px", md: "16px" }}
                  color="gray.600"
                  lineHeight="1.6"
                  marginBottom={{ base: "16px", md: "24px" }}
                  noOfLines={{ base: 3, lg: 4 }}
                >
                  {articles[0]?.excerpt ||
                    "Discover how technological innovations and changing market dynamics are reshaping the real estate industry and creating new opportunities for investors."}
                </Text>

                <Box display="flex" alignItems="center">
                  <Box
                    width={{ base: "28px", md: "32px" }}
                    height={{ base: "28px", md: "32px" }}
                    borderRadius="full"
                    backgroundColor="gray.300"
                    marginRight={{ base: "10px", md: "12px" }}
                  />

                  <Box>
                    <Text fontSize={{ base: "13px", md: "14px" }} fontWeight="600">
                      {articles[0]?.author?.name || "Sarah Johnson"}
                    </Text>
                    <Text fontSize={{ base: "11px", md: "12px" }} color="gray.500">
                      {articles[0]?.publishedAt || "May 2, 2025"} • {articles[0]?.readTime || "5 min read"}
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        )}

        {/* Articles Grid with improved responsive layout */}
        <Box
          display="grid"
          gridTemplateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={{ base: "16px", sm: "20px", md: "24px" }}
        >
          {articles.map((article, index) => (
            <Box
              key={article.$id}
              borderRadius={{ base: "6px", md: "8px" }}
              overflow="hidden"
              backgroundColor="white"
              boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
              transition="transform 0.3s, box-shadow 0.3s"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}
              position="relative"
              height={{ base: "auto", sm: "100%" }}
              display="flex"
              flexDirection="column"
            >
              {/* Custom card instead of using NewsCard component */}
              <Box
                height={{
                  base: "160px",
                  sm: "140px",
                  md: "160px",
                  lg: "180px",
                }}
                backgroundColor="gray.200"
                position="relative"
              >
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  overflow="hidden" // ensure the image is clipped exactly like a background
                >
                  <Image
                    quality={70}
                    loading="lazy"
                    src={
                      article.featuredImage ||
                      `https://images.pexels.com/photos/${1546168 + index * 10 || "/placeholder.svg"}/pexels-photo-${
                        1546168 + index * 10
                      }.jpeg?auto=compress&cs=tinysrgb&q=75`
                    }
                    alt={article.title}
                    fill // in Next.js 13+, for older versions use layout="fill"
                    style={{
                      objectFit: "cover", // replicates background-size: cover
                      objectPosition: "center", // replicates background-position: center
                    }}
                    // optional: preload if this is critical
                  />
                </Box>

                {/* Category tag */}
                <Box
                  position="absolute"
                  top={{ base: "8px", md: "12px" }}
                  left={{ base: "8px", md: "12px" }}
                  backgroundColor="rgba(255, 255, 255, 0.9)"
                  padding={{ base: "3px 8px", md: "4px 10px" }}
                  borderRadius="4px"
                  fontSize={{ base: "10px", md: "11px" }}
                  fontWeight="600"
                >
                  {article.category || Allcategories[index % Allcategories.length]}
                </Box>
              </Box>

              <Box padding={{ base: "16px", md: "20px" }} display="flex" flexDirection="column" flex="1">
                <Text
                  fontSize={{ base: "16px", md: "18px" }}
                  fontWeight="700"
                  lineHeight="1.3"
                  marginBottom={{ base: "8px", md: "12px" }}
                  noOfLines={2}
                >
                  {article.title || "Article Title Goes Here"}
                </Text>

                <Text
                  fontSize={{ base: "13px", md: "14px" }}
                  color="gray.600"
                  lineHeight="1.6"
                  marginBottom={{ base: "12px", md: "16px" }}
                  noOfLines={3}
                  flex="1"
                >
                  {article.excerpt ||
                    "This is a brief excerpt from the article that gives readers a preview of what the content is about."}
                </Text>

                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  borderTop="1px solid"
                  borderColor="gray.100"
                  paddingTop={{ base: "10px", md: "12px" }}
                  marginTop="auto"
                >
                  <Text fontSize={{ base: "11px", md: "12px" }} color="gray.500">
                    {article.publishedAt || "May 2, 2025"}
                  </Text>

                  <Box
                    as="span"
                    color="#3182CE"
                    fontSize={{ base: "13px", md: "14px" }}
                    fontWeight="600"
                    cursor="pointer"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Read More
                  </Box>
                </Box>
              </Box>

              {/* Corner accent */}
              <Box
                position="absolute"
                top="0"
                right="0"
                borderStyle="solid"
                borderWidth={{ base: "0 16px 16px 0", md: "0 20px 20px 0" }}
                borderColor="transparent #EBF8FF transparent transparent"
                display={index % 3 === 0 ? "block" : "none"}
              />
            </Box>
          ))}

          {/* Empty state placeholders with improved responsive sizing */}
          {articles.length === 0 &&
            Array(3)
              .fill(0)
              .map((_, index) => (
                <Box
                  key={index}
                  borderRadius={{ base: "6px", md: "8px" }}
                  overflow="hidden"
                  backgroundColor="white"
                  boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                  height={{ base: "280px", sm: "300px", md: "320px" }}
                  position="relative"
                >
                  <Box
                    height={{ base: "140px", sm: "160px", md: "180px" }}
                    backgroundColor="gray.200"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box
                      width={{ base: "32px", md: "40px" }}
                      height={{ base: "32px", md: "40px" }}
                      borderRadius="full"
                      border="3px solid"
                      borderColor="gray.300"
                      borderTopColor="gray.400"
                      animation="pulse 1.5s infinite"
                      sx={{
                        "@keyframes pulse": {
                          "0%": { opacity: 0.6 },
                          "50%": { opacity: 0.3 },
                          "100%": { opacity: 0.6 },
                        },
                      }}
                    />
                  </Box>

                  <Box padding={{ base: "16px", md: "20px" }}>
                    <Box
                      height={{ base: "16px", md: "20px" }}
                      width="80%"
                      backgroundColor="gray.200"
                      marginBottom={{ base: "10px", md: "12px" }}
                      borderRadius="4px"
                    />

                    <Box
                      height={{ base: "10px", md: "12px" }}
                      width="100%"
                      backgroundColor="gray.200"
                      marginBottom={{ base: "6px", md: "8px" }}
                      borderRadius="4px"
                    />

                    <Box
                      height={{ base: "10px", md: "12px" }}
                      width="90%"
                      backgroundColor="gray.200"
                      marginBottom={{ base: "6px", md: "8px" }}
                      borderRadius="4px"
                    />

                    <Box
                      height={{ base: "10px", md: "12px" }}
                      width="60%"
                      backgroundColor="gray.200"
                      borderRadius="4px"
                    />
                  </Box>
                </Box>
              ))}
        </Box>

        {/* Enhanced Load More Button with better responsive sizing */}
        <Box marginTop={{ base: "40px", sm: "50px", md: "60px" }} textAlign="center" position="relative">
          <Box
            as="button"
            aria-label="Load more articles"
            onClick={fetchArticles}
            padding={{ base: "10px 24px", sm: "11px 28px", md: "12px 32px" }}
            borderRadius={{ base: "4px", md: "6px" }}
            backgroundColor={loading ? "gray.200" : "black"}
            color="white"
            fontWeight="600"
            fontSize={{ base: "14px", sm: "15px", md: "16px" }}
            cursor={loading ? "not-allowed" : "pointer"}
            transition="all 0.2s"
            _hover={{
              backgroundColor: loading ? "gray.200" : "black",
              transform: loading ? "none" : "translateY(-2px)",
              boxShadow: loading ? "none" : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
            _active={{
              transform: "translateY(0)",
              boxShadow: "none",
            }}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            overflow="hidden"
          >
            {loading ? (
              <Box
                as="span"
                width={{ base: "16px", md: "20px" }}
                height={{ base: "16px", md: "20px" }}
                borderRadius="50%"
                border="2px solid"
                borderColor="gray.400"
                borderTopColor="white"
                animation="spin 1s linear infinite"
                sx={{
                  "@keyframes spin": {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                  },
                }}
              />
            ) : (
              <>
                <Text as="span">Load More Articles</Text>
                {/* Button shine effect */}
                <Box
                  position="absolute"
                  top="0"
                  left="-100%"
                  width="60%"
                  height="100%"
                  background="linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)"
                  animation="shine 2s infinite"
                  sx={{
                    "@keyframes shine": {
                      "0%": { left: "-100%" },
                      "100%": { left: "100%" },
                    },
                  }}
                />
              </>
            )}
          </Box>

          <Text
            fontSize={{ base: "12px", sm: "13px", md: "14px" }}
            color="gray.500"
            marginTop={{ base: "8px", md: "12px" }}
          >
            {totalCount > 0 ? `${articles.length} of ${totalCount} articles loaded` : "Check back soon for new content"}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default NewsPage
