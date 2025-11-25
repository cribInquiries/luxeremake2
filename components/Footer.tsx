import { Box, Text } from "@chakra-ui/react"
import Image from "next/image"

const Footer = () => {
  return (
    <Box as="footer" w="100%" pb="40px">
      {/* Top border line */}
      <Box w="100%" display="flex" justifyContent="center" my={{ base: "40px", md: "60px" }}>
        <Box w="90%" h="1px" bg="#e0e0e0" />
      </Box>

      {/* Main footer content */}
      <Box
        w="100%"
        px={{ base: "5%", md: "10%" }}
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        {/* Logo section */}
        <Box mb={{ base: "40px", md: "0" }}>
          <Box display="flex" alignItems="center" gap="12px">
            <Box w={{ base: "40px", md: "50px" }} h="auto" position="relative">
              <Image
                quality={70}
                loading="lazy"
                src="/placeholder.svg?height=50&width=50"
                alt="Luxe Managements Logo"
                title="Luxe Managements Logo"
                width={50}
                height={50}
              />
            </Box>
            <Text fontSize={{ base: "16px", md: "18px" }} fontWeight="700" fontFamily="arial">
              Luxe Managements
            </Text>
          </Box>
        </Box>

        {/* Links section */}
        <Box display="flex" flexDirection={{ base: "column", md: "row" }} gap={{ base: "30px", md: "80px" }}>
          {/* Resources column */}
          <Box>
            <Text fontSize="14px" fontWeight="600" textTransform="uppercase" mb="16px" letterSpacing="0.5px">
              Resources
            </Text>
            <Box>
              <Text
                as="a"
                title="Luxe Managements Instagram"
                href="https://www.instagram.com/luxemanagements/"
                fontSize="14px"
                color="gray.600"
                _dark={{ color: "gray.400" }}
                display="block"
                mb="10px"
              >
                Luxe Managements
              </Text>
            </Box>
          </Box>

          {/* Follow Us column */}
          <Box>
            <Text fontSize="14px" fontWeight="600" textTransform="uppercase" mb="16px" letterSpacing="0.5px">
              Follow Us
            </Text>
            <Box>
              <Text
                as="a"
                title="Luxe Managements Instagram"
                href="https://www.instagram.com/luxemanagements/"
                fontSize="14px"
                color="gray.600"
                _dark={{ color: "gray.400" }}
                display="block"
                mb="10px"
              >
                Instagram
              </Text>
            </Box>
            <Box>
              <Text
                as="a"
                title="Luxe Managements Tiktok"
                href="https://www.tiktok.com/@luxe_managements"
                fontSize="14px"
                color="gray.600"
                _dark={{ color: "gray.400" }}
                display="block"
                mb="10px"
              >
                Tiktok
              </Text>
            </Box>
          </Box>

          {/* Legal column */}
          <Box>
            <Text fontSize="14px" fontWeight="600" textTransform="uppercase" mb="16px" letterSpacing="0.5px">
              Legal
            </Text>
            <Box>
              <Text
                as="a"
                title="Luxe Managements Privacy Policy"
                href="https://abr.business.gov.au/ABN/View?id=83943962982"
                fontSize="14px"
                color="gray.600"
                _dark={{ color: "gray.400" }}
                display="block"
                mb="10px"
              >
                Privacy Policy
              </Text>
              <Text
                as="a"
                title="Luxe Managements Terms & Conditions"
                href="https://abr.business.gov.au/ABN/View?id=83943962982"
                fontSize="14px"
                color="gray.600"
                _dark={{ color: "gray.400" }}
                display="block"
                mb="10px"
              >
                Terms & Conditions
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Copyright section */}
      <Box w="100%" px={{ base: "5%", md: "10%" }} mt={{ base: "40px", md: "60px" }}>
        <Box display="flex" justifyContent={{ base: "center", md: "flex-start" }}>
          <Text fontSize="12px" color="gray.500" _dark={{ color: "gray.400" }}>
            © 2023{" "}
            <Text as="span" textDecor="underline">
              Luxe Managements™
            </Text>
            . All Rights Reserved.
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
