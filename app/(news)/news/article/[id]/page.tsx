// app/(news)/news/article/[id]/page.tsx
import { getArticle } from "@/lib/actions/get-article"
import type { Article } from "../../../lib/types/article"
import { Box, Stack, HStack, VStack, Text } from "@chakra-ui/react"
import { CalendarIcon, UserIcon, ClockIcon } from "lucide-react"
import Image from "next/image"

type Props = {
  // params is now a Promise
  params: Promise<{ id: string }>
}

export default async function ArticlePage({ params }: Props) {
  // await params before using its properties
  const { id } = await params

  let articleRes
  try {
    articleRes = await getArticle(id)
  } catch (error) {
    console.error("[v0] Error fetching article:", error)
    return (
      <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" p="8">
        <VStack gap="4" textAlign="center">
          <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="700" color="#0a2342">
            Article Unavailable
          </Text>
          <Text color="#374151" maxW="400px">
            This article is temporarily unavailable. Please try again later.
          </Text>
          <Box
            as="a"
            href="/news"
            backgroundColor="#3182CE"
            color="white"
            padding="12px 24px"
            borderRadius="8px"
            fontWeight="600"
            _hover={{ backgroundColor: "#2C5282" }}
          >
            Back to News
          </Box>
        </VStack>
      </Box>
    )
  }

  if (!articleRes || !articleRes.success || !articleRes.data) {
    return (
      <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" p="8">
        <VStack gap="4" textAlign="center">
          <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="700" color="#0a2342">
            Article Not Found
          </Text>
          <Text color="#374151" maxW="400px">
            The article you're looking for could not be found.
          </Text>
          <Box
            as="a"
            href="/news"
            backgroundColor="#3182CE"
            color="white"
            padding="12px 24px"
            borderRadius="8px"
            fontWeight="600"
            _hover={{ backgroundColor: "#2C5282" }}
          >
            Back to News
          </Box>
        </VStack>
      </Box>
    )
  }

  const article: Article = articleRes.data

  return (
    <Box minH="100vh">
      <Box mx="auto" px={["4", "6", "8"]} py={["8", "12", "16"]}>
        <Box bg="white" borderRadius="xl" overflow="hidden">
          {/* Article Header */}
          <Box p={["8", "10", "12"]} color="#0a2342">
            <VStack gap="6" align="flex-start" maxW="900px">
              <Text
                as="h1"
                fontSize={["2rem", "2.5rem", "3.25rem"]}
                fontWeight="800"
                lineHeight="1.1"
                letterSpacing="-0.02em"
              >
                {article.articleTitle}
              </Text>

              <HStack gap="4" flexWrap="wrap" opacity="0.9" fontSize={["sm", "md"]}>
                <HStack gap="2">
                  <CalendarIcon size={16} />
                  <Text>{article.date}</Text>
                </HStack>
                <Text display={["none", "block"]}>•</Text>
                <HStack gap="2">
                  <UserIcon size={16} />
                  <Text>{article.author}</Text>
                </HStack>
                <Text display={["none", "block"]}>•</Text>
                <HStack gap="2">
                  <ClockIcon size={16} />
                  <Text>{article.readTime} min read</Text>
                </HStack>
              </HStack>
              {/* Use Introduction Subheading from database */}
              <Text as="h2" fontSize={["lg", "xl"]} fontWeight="600" color="#374151">
                {article.introductionSubheading}
              </Text>
            </VStack>
          </Box>

          <Box p={["6", "8", "10"]}>
            {/* Main Content */}
            <Box w="100%">
              {/* Introduction Section */}
              <Box id="introduction" mb="16" scrollMarginTop="5rem">
                <Text
                  as="h2"
                  fontSize={["1.5rem", "1.75rem", "2rem"]}
                  fontWeight="700"
                  color="#0a2342"
                  mb="6"
                  lineHeight="1.2"
                  borderBottom="2px solid"
                  borderColor="#e2e8f0"
                  pb="2"
                >
                  Introduction
                </Text>
                <Stack direction={["column", "column", "row"]} gap="8" align="center">
                  <Box flex="1">
                    <Text fontSize={["lg", "xl"]} mb="4" color="#374151" lineHeight="1.7">
                      {article.introductionContent}
                    </Text>
                  </Box>
                  <Box
                    flex="1"
                    position="relative" // establish containing block for the Image
                    minH="320px"
                    w="100%"
                    overflow="hidden" // clip the Image to the Box bounds
                    boxShadow="lg"
                    transition="all 0.3s"
                  >
                    <Image
                      quality={70}
                      loading="lazy"
                      src={`https://images.pexels.com/photos/${article.pexelImgLink}/pexels-photo-${article.pexelImgLink}.jpeg?auto=compress&cs=tinysrgb&q=75`}
                      alt={article.title ?? ""}
                      fill // makes the img fill the Box
                      style={{
                        objectFit: "cover", // replicates background-size: cover
                        objectPosition: "center", // replicates background-position: center
                      }}
                    />
                  </Box>
                </Stack>
              </Box>

              {/* Content One Section */}
              <Box id="content-one" mb="16" scrollMarginTop="5rem">
                <Text
                  as="h2"
                  fontSize={["1.5rem", "1.75rem", "2rem"]}
                  fontWeight="700"
                  color="#0a2342"
                  mb="6"
                  lineHeight="1.2"
                  borderBottom="2px solid"
                  borderColor="#e2e8f0"
                  pb="2"
                >
                  {article.contentOneSubheadingTitle}
                </Text>
                <Box p="6" bg="#f8fafc" borderRadius="md">
                  <Text fontSize={["lg", "xl"]} color="#374151" lineHeight="1.7">
                    {article.contentOneParagraph}
                  </Text>
                </Box>
              </Box>

              {/* Content Two Section */}
              <Box id="content-two" mb="16" scrollMarginTop="5rem">
                <Text
                  as="h2"
                  fontSize={["1.5rem", "1.75rem", "2rem"]}
                  fontWeight="700"
                  color="#0a2342"
                  mb="6"
                  lineHeight="1.2"
                  borderBottom="2px solid"
                  borderColor="#e2e8f0"
                  pb="2"
                >
                  {article.contentTwoSubheadingTitle}
                </Text>
                <Stack direction={["column", "column", "row"]} gap="8" align="center">
                  <Box
                    flex="1"
                    position="relative" // establish containing block for the Image
                    minH="320px"
                    w="100%"
                    overflow="hidden" // clip the Image to the Box bounds
                    boxShadow="lg"
                    transition="all 0.3s"
                  >
                    <Image
                      quality={70}
                      loading="lazy"
                      src={`https://images.pexels.com/photos/${article.pexelImgLink2}/pexels-photo-${article.pexelImgLink2}.jpeg?auto=compress&cs=tinysrgb&q=75`}
                      alt={article.title ?? ""}
                      fill // makes the img fill the Box
                      style={{
                        objectFit: "cover", // replicates background-size: cover
                        objectPosition: "center", // replicates background-position: center
                      }}
                    />
                  </Box>
                  <Box flex="1">
                    <Text fontSize={["lg", "xl"]} color="#374151" lineHeight="1.7">
                      {article.contentTwoParagraph}
                    </Text>
                  </Box>
                </Stack>
              </Box>

              {/* Content Three Section */}
              {article.contentThreeSubheadingTitle && article.contentThreeParagraph && (
                <Box id="content-three" mb="16" scrollMarginTop="5rem">
                  <Text
                    as="h2"
                    fontSize={["1.5rem", "1.75rem", "2rem"]}
                    fontWeight="700"
                    color="#0a2342"
                    mb="6"
                    lineHeight="1.2"
                    borderBottom="2px solid"
                    borderColor="#e2e8f0"
                    pb="2"
                  >
                    {article.contentThreeSubheadingTitle}
                  </Text>
                  <Box p="6" bg="#f8fafc" borderRadius="md">
                    <Text fontSize={["lg", "xl"]} color="#374151" lineHeight="1.7">
                      {article.contentThreeParagraph}
                    </Text>
                  </Box>
                </Box>
              )}

              {/* Conclusion Section */}
              <Box id="conclusion" mb="16" scrollMarginTop="5rem">
                <Text
                  as="h2"
                  fontSize={["1.5rem", "1.75rem", "2rem"]}
                  fontWeight="700"
                  color="#0a2342"
                  mb="6"
                  lineHeight="1.2"
                  borderBottom="2px solid"
                  borderColor="#e2e8f0"
                  pb="2"
                >
                  {article.conclusionSubheading}
                </Text>
                <Text fontSize={["lg", "xl"]} mb="8" color="#374151" lineHeight="1.7">
                  {article.conclusionParagraph}
                </Text>
              </Box>

              {/* Extra Section */}
              {(article.extraSubheading || article.extraContentParagraph) && (
                <Box id="extra" mb="16" scrollMarginTop="5rem">
                  {article.extraSubheading && (
                    <Text
                      as="h2"
                      fontSize={["1.5rem", "1.75rem", "2rem"]}
                      fontWeight="700"
                      color="#0a2342"
                      mb="6"
                      lineHeight="1.2"
                      borderBottom="2px solid"
                      borderColor="#e2e8f0"
                      pb="2"
                    >
                      {article.extraSubheading}
                    </Text>
                  )}
                  {article.extraContentParagraph && (
                    <Text fontSize={["lg", "xl"]} mb="8" color="#374151" lineHeight="1.7">
                      {article.extraContentParagraph}
                    </Text>
                  )}
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
