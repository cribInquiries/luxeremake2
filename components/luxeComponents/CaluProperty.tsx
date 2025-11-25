"use client"

import { useState } from "react"
import { Box, Strong, Text } from "@chakra-ui/react"
import { Search, DollarSign, Users, Calendar, MapPin, ChevronDown, TrendingUp, Zap } from "lucide-react"
import TitleSubheading from "./Text/titleSubheading"

// Locations and property details
const locations = ["Adelaide, Australia", "Sydney, NSW", "Melbourne, VIC"]
const propertyDetails = {
  "Adelaide, Australia": {
    revenue: "$30.6K",
    revenueTrend: "+1%",
    occupancy: "65%",
    occupancyTrend: "+2%",
    dailyRate: "$107",
    dailyRateTrend: "-1%",
    marketScore: "74",
    expenses: "$8.7K",
    income: "$16.7K",
    capRate: "4.2%",
  },
}
const defaultPropertyDetails = {
  revenue: "$45.2K",
  revenueTrend: "+5%",
  occupancy: "58%",
  occupancyTrend: "+3%",
  dailyRate: "$215.50",
  dailyRateTrend: "+2%",
  marketScore: "70",
  expenses: "$10.5K",
  income: "$14.8K",
  capRate: "4.9%",
}

const CaluProperty = () => {
  const [searchValue, setSearchValue] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState("")
  const [showResults, setShowResults] = useState(false)

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      setShowResults(true)
      setShowDropdown(false)
    }
  }

  const handleLocationSelect = (location) => {
    setSearchValue(location)
    setSelectedLocation(location)
    setShowDropdown(false)
    setShowResults(true)
  }

  const details = propertyDetails[selectedLocation] || defaultPropertyDetails

  // Reusable ProgressBar component
  const ProgressBar = ({ value, color = "#3182CE", bgColor = "#EDF2F7" }) => (
    <Box width="100%" height="8px" bg={bgColor} borderRadius="full" overflow="hidden">
      <Box width={`${value}%`} height="100%" bg={color} borderRadius="full" />
    </Box>
  )

  // Reusable TrendIndicator component
  const TrendIndicator = ({ value }) => {
    const isPositive = value.startsWith("+")
    const color = isPositive ? "#38A169" : "#E53E3E"
    return (
      <Box display="flex" alignItems="center" gap="4px">
        <TrendingUp size="16px" color={color} style={!isPositive ? { transform: "rotate(180deg)" } : {}} />
        <Text fontSize="16px" color={color}>
          {value}
        </Text>
      </Box>
    )
  }

  // Reusable StatBox component
  const StatBox = ({ icon, label, value, trend, progressValue, bgColor, iconColor, color }) => (
    <Box
      bg="white"
      borderRadius="12px"
      padding="24px"
      boxShadow="0 2px 8px rgba(0,0,0,0.04)"
      border="1px solid"
      borderColor="gray.100"
      transition="all 0.2s ease"
      _hover={{ boxShadow: "0 6px 12px rgba(0,0,0,0.08)" }}
    >
      <Box display="flex" alignItems="center" marginBottom="16px">
        <Box
          width="36px"
          height="36px"
          borderRadius="10px"
          bg={bgColor}
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginRight="12px"
        >
          {icon}
        </Box>
        <Text fontSize="16px" fontWeight="600" color="gray.700">
          {label}
        </Text>
      </Box>

      <Text fontSize="32px" fontWeight="700" color="gray.800" marginBottom="8px">
        {value}
      </Text>

      <Box display="flex" alignItems="center" justifyContent="space-between">
        <TrendIndicator value={trend} />
        <Text fontSize="14px" color="gray.500">
          Year over year
        </Text>
      </Box>

      <Box marginTop="16px">
        <Text fontSize="14px" color="gray.500" marginBottom="6px">
          {progressValue}
        </Text>
        <ProgressBar value={Number.parseInt(value)} color={color} bgColor={bgColor} />
      </Box>
    </Box>
  )

  return (
    <>
      <Box maxWidth="1400px" my="50px" mx="auto" padding="20px">
        <Box display="flex" alignItems="center" justifyContent="center">
          {/* <GptLuxeCalc /> */}

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="2xl"
            p={2}
            textAlign={"center"}
            px={4}
            boxShadow="md"
            w={"auto"}
            gap={"8px"}
          >
            <Text ml="8px" fontSize="14px" fontWeight="bold" color="gray.700">
              AI Powered
            </Text>
            <Zap size="20px" color="#E53E3E" />
          </Box>
        </Box>

        <TitleSubheading
          title={"Luxe Property Calculator"}
          subheading={"Analyze and calculate your property investment value"}
        />

        {/* Search Box */}
        <Box
          mt="80px"
          position="relative"
          marginBottom="30px"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="12px"
        >
          <Box
            display="flex"
            alignItems="center"
            padding="16px"
            cursor="pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="40px"
              height="40px"
              borderRadius="10px"
              bg="blue.50"
              marginRight="16px"
            >
              <Search size={20} color="#3182CE" />
            </Box>

            <Box flex="1">
              <Text fontSize="12px" color="gray.500" marginBottom="4px">
                PROPERTY LOCATION
              </Text>
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={handleSearch}
                placeholder="Enter a city, neighborhood, or address..."
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  fontSize: "16px",
                  fontWeight: "500",
                  background: "transparent",
                }}
              />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              padding="12px 18px"
              borderRadius="8px"
              bg="#0A0F29"
              onClick={handleSearch}
              cursor="pointer"
            >
              <Text fontSize="14px" fontWeight="600" color="white" marginRight="8px">
                Search
              </Text>
              <ChevronDown size={16} color="white" />
            </Box>
          </Box>

          {/* Dropdown */}
          {showDropdown && (
            <Box
              mt="10px"
              position="absolute"
              top="100%"
              left="0"
              width="100%"
              bg="white"
              borderRadius="12px"
              zIndex="10"
              border="1px solid"
              borderColor="gray.200"
              maxHeight="300px"
              overflowY="auto"
            >
              <Text fontSize="12px" fontWeight="600" color="gray.500" padding="8px 20px">
                POPULAR LOCATIONS
              </Text>

              {locations
                .filter((loc) => !searchValue || loc.toLowerCase().includes(searchValue.toLowerCase()))
                .map((location, index) => (
                  <Box
                    key={index}
                    padding="12px 20px"
                    display="flex"
                    alignItems="center"
                    _hover={{ bg: "gray.50" }}
                    cursor="pointer"
                    onClick={() => handleLocationSelect(location)}
                  >
                    <Box
                      width="32px"
                      height="32px"
                      borderRadius="8px"
                      bg="blue.50"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      marginRight="12px"
                    >
                      <MapPin size={16} color="#3182CE" />
                    </Box>
                    <Box>
                      <Text fontSize="15px" fontWeight="500">
                        {location}
                      </Text>
                      <Text fontSize="12px" color="gray.500">
                        {propertyDetails[location] ? "Investment Property" : "Residential Property"}
                      </Text>
                    </Box>
                  </Box>
                ))}

              {locations.filter((loc) => !searchValue || loc.toLowerCase().includes(searchValue.toLowerCase()))
                .length === 0 && (
                <Box padding="16px 20px" textAlign="center">
                  <Text fontSize="14px" color="gray.500">
                    No locations found. Try a different search.
                  </Text>
                </Box>
              )}
            </Box>
          )}
        </Box>

        {/* Results Section */}
        {showResults && (
          <Box>
            {/* Header */}
            <Box marginBottom="24px">
              <Text fontSize="24px" fontWeight="500" color="gray.800">
                <Strong>{selectedLocation || "Market"}</Strong> - Investment Overview
              </Text>
            </Box>

            {/* Property Details Grid */}
            <Box
              display="grid"
              gridTemplateColumns={{
                base: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              }}
              gap="20px"
              marginBottom="32px"
            >
              <StatBox
                icon={<DollarSign size={18} color="#3182CE" />}
                label="Annual Revenue"
                value={details.revenue}
                trend={details.revenueTrend}
                progressValue="Revenue Potential"
                bgColor="blue.50"
                color="#3182CE"
                iconColor={undefined}
              />
              <StatBox
                icon={<Users size={18} color="#38A169" />}
                label="Occupancy Rate"
                value={details.occupancy}
                trend={details.occupancyTrend}
                progressValue="Market Average: 62%"
                bgColor="green.50"
                color="#38A169"
                iconColor={undefined}
              />
              <StatBox
                icon={<Calendar size={18} color="#805AD5" />}
                label="Avg Daily Rate"
                value={details.dailyRate}
                trend={details.dailyRateTrend}
                progressValue="Pricing Competitiveness"
                bgColor="purple.50"
                color="#805AD5"
                iconColor={undefined}
              />
            </Box>

            {/* Map Section */}
            <Box
              bg="white"
              borderRadius="12px"
              overflow="hidden"
              height="350px"
              boxShadow="0 2px 8px rgba(0,0,0,0.04)"
              border="1px solid"
              borderColor="gray.100"
              marginBottom="32px"
            >
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedLocation || "United States")}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Box>
        )}
      </Box>
    </>
  )
}

export default CaluProperty
