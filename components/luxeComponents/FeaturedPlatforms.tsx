import { Box, HStack } from "@chakra-ui/react"
import TitleSubheading from "./Text/titleSubheading"
import Image from "next/image"

const FeaturedPlatforms = () => {
  return (
    <Box
      mt={{ base: "25px", sm: "25px", md: "25px", lg: "100px", xl: "100px" }}
      mb={{ base: "25px", sm: "25px", md: "50px", lg: "50px", xl: "50px" }}
    >
      <TitleSubheading
        title="Featured Platforms"
        subheading="We proudly feature our properties on the most trusted platforms in the industry."
      />

      <HStack
        my={{
          base: "50px",
          sm: "50px",
          md: "70px",
          lg: "70px",
          xl: "70px",
        }}
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        wrap={["wrap", "wrap", "wrap", "wrap", "nowrap", "nowrap"]}
        justify="center"
        align="center"
        w="100%"
        h="100%"
        py={6}
        gap={["30px", "30px", "30px", "30px", "80px"]}
      >
        <HStack
          transition={"transform 0.3s"}
          _hover={{
            transform: "scale(1.05)",
            cursor: "pointer",
          }}
          justify={["center", "center", "center", "center", "center"]}
          align={["center", "center", "center", "center", "center"]}
          w={["30%", "30%", "30%", "30%", "100%"]}
          h={["30%", "30%", "30%", "30%", "100%"]}
        >
          <a href="https://www.airbnb.com" target="_blank" rel="noreferrer" aria-label="Airbnb Logo" title="Airbnb">
            <Image src="/placeholder.svg?height=250&width=250" width={250} height={250} alt="Airbnb" />
          </a>
        </HStack>

        <HStack
          transition={"transform 0.3s"}
          _hover={{
            transform: "scale(1.05)",
            cursor: "pointer",
          }}
          justify={["center", "center", "center", "center", "center"]}
          align={["center", "center", "center", "center", "center"]}
          w={["30%", "30%", "30%", "30%", "100%"]}
          h={["30%", "30%", "30%", "30%", "100%"]}
        >
          <a
            href="https://www.booking.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Booking.com Logo"
            title="Booking.com"
          >
            <Image src="/placeholder.svg?height=250&width=250" width={250} height={250} alt="Booking.com" />
          </a>
        </HStack>

        <HStack
          transition={"transform 0.3s"}
          _hover={{
            transform: "scale(1.05)",
            cursor: "pointer",
          }}
          justify={["center", "center", "center", "center", "center"]}
          align={["center", "center", "center", "center", "center"]}
          w={["30%", "30%", "30%", "30%", "100%"]}
          h={["30%", "30%", "30%", "30%", "100%"]}
        >
          <a href="https://www.vrbo.com" target="_blank" rel="noreferrer" aria-label="Vrbo Logo" title="Vrbo">
            <Image src="/placeholder.svg?height=200&width=200" width={200} height={200} alt="Vrbo" />
          </a>
        </HStack>

        <HStack
          transition={"transform 0.3s"}
          _hover={{
            transform: "scale(1.05)",
            cursor: "pointer",
          }}
          justify={["center", "center", "center", "center", "center"]}
          align={["center", "center", "center", "center", "center"]}
          w={["30%", "30%", "30%", "30%", "100%"]}
          h={["30%", "30%", "30%", "30%", "100%"]}
        >
          <a href="https://www.stayz.com.au" target="_blank" rel="noreferrer" aria-label="Stayz Logo" title="Stayz">
            <Image src="/placeholder.svg?height=200&width=200" width={200} height={200} alt="Stayz" />
          </a>
        </HStack>

        <HStack
          transition={"transform 0.3s"}
          _hover={{
            transform: "scale(1.05)",
            cursor: "pointer",
          }}
          justify={["center", "center", "center", "center", "center"]}
          align={["center", "center", "center", "center", "center"]}
          w={["30%", "30%", "30%", "30%", "100%"]}
          h={["30%", "30%", "30%", "30%", "100%"]}
        >
          <a
            href="https://www.realestate.com.au"
            target="_blank"
            rel="noreferrer"
            aria-label="Realestate Logo"
            title="Realestate"
          >
            <Image src="/placeholder.svg?height=250&width=250" width={250} height={250} alt="Realestate" />
          </a>
        </HStack>
      </HStack>
    </Box>
  )
}

export default FeaturedPlatforms
