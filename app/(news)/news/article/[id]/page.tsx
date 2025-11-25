"use client"

import { Box, VStack, Text } from "@chakra-ui/react"
import { useParams } from "next/navigation"

export default function ArticlePage() {
  const params = useParams()

  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" p="8">
      <VStack gap="4" textAlign="center">
        <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="700" color="#0a2342">
          News Coming Soon
        </Text>
        <Text color="#374151" maxW="400px">
          Our news section is currently under development. Check back soon for the latest updates.
        </Text>
        <Box
          as="a"
          href="/"
          backgroundColor="#3182CE"
          color="white"
          padding="12px 24px"
          borderRadius="8px"
          fontWeight="600"
          _hover={{ backgroundColor: "#2C5282" }}
        >
          Back to Home
        </Box>
      </VStack>
    </Box>
  )
}
