export type Property = {
  id: number
  title: string
  subheading: string
  categories: string[]
  location: string
  shortDescription: string
  services?: string[]
  bedrooms: number
  bathrooms: number
  sqft: number
  price: string
  mainImage: string
  carouselImages: string[]
  description: string
  features: string[]
  amenities: string[]
  neighborhood: string | { description: string; nearby: string[] }
  transformationStory?: {
    subtitle: string
    challenge: string
    solution: string
    results: {
      originalIncome: number
      currentGross: number
      currentNet: number
      weeklyGain: number
      annualIncrease: number
      annualGrossRevenue: number
      occupancyRate: number
      expectedROI: number
      actualROI: number
      yearsManaged: number
    }
    timeline: {
      date: string
      event: string
    }[]
    testimonial?: string
    before?: string
    after?: string
    challenges?: string[]
    solutions?: string[]
  }
  financials?: {
    acquisitionCost: number
    renovationCost: number
    totalInvestment: number
    currentValue: number
    monthlyRevenue: number
    currentGross: number
    currentNet: number
    weeklyGain: number
    annualIncrease: number
    annualGrossRevenue: number
    occupancyRate: number
    expectedROI: number
    actualROI: number
    yearsManaged: number
  }
  type?: string
  gallery?: string[]
  heroImage?: string
  images?: string[]
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Cosy Glenelg Getaway",
    subheading: "Affordable family holiday home with premium amenities",
    categories: ["Property Management", "Interior Design", "Styling"],
    location: "Glenelg Beach",
    shortDescription: "5-minutes from Glenelg Beach",
    services: ["Styling", "Renovation"],
    bedrooms: 2,
    bathrooms: 1,
    sqft: 50,
    price: "$270/per night",
    mainImage: "/images/title-20image-20glenelg.jpg",
    carouselImages: [
      "/images/title-20image-20glenelg.jpg",
      "/images/loungenew.jpg",
      "/images/kitchennew.jpg",
      "/images/bedroomnew.jpg",
      "/images/bathroom-20new.jpeg",
    ],
    description:
      "Our journey with this client began when he reached out looking to purchase a property with strong short-term rental potential. He wasn't just looking for a home—he was looking for an investment that would grow. From the first call, we guided him through a comprehensive analysis of several properties, breaking down projected Airbnb earnings, long-term appreciation, and renovation potential. Once he settled on the perfect location, our team at Luxe Managements took over the transformation. We re-styled and renovated the space to create a modern, warm, and highly functional Airbnb-ready home. Every detail was intentional—from interior flow and furniture selection to lighting, amenities, and guest-ready features that elevate the stay experience. By October, we launched the listing—and the results spoke for themselves. Bookings surged immediately, outperforming traditional rental income and generating the kind of revenue only a well-optimized short-term rental can achieve. What started as a search for a property turned into a high-performing Airbnb asset. The client was blown away by how seamlessly we managed everything—from purchase support to renovation to ongoing management—and how much more profit the property produced under Luxe compared to standard renting.",
    features: [
      "Full property transformation and styling",
      "Strategic Airbnb optimization",
      "Modern herringbone tile backsplash",
      "Ambient LED lighting throughout",
      "Premium guest amenities included",
      "Coastal-inspired interior design",
    ],
    amenities: [
      "Steps from Glenelg Beach",
      "Fully equipped modern kitchen",
      "Comfortable living spaces",
      "Quality linens and towels",
      "Fast WiFi and entertainment",
      "Professional property management",
    ],
    neighborhood:
      "Glenelg Beach is Adelaide's most beloved seaside destination, offering pristine beaches, vibrant cafes, boutique shopping, and endless entertainment. Perfect for families and travelers seeking a coastal escape.",
    transformationStory: {
      subtitle: "From standard rental to high-performing Airbnb investment",
      challenge:
        "A client reached out seeking to purchase a property with strong short-term rental potential. He needed expert guidance on property selection, projected earnings analysis, and complete transformation to create an Airbnb-ready investment that would outperform traditional rental income.",
      solution:
        "Luxe Managements provided end-to-end support—from property analysis and purchase guidance to complete renovation and styling. We transformed the space with modern finishes, including herringbone tile backsplash, ambient lighting, coastal-inspired furnishings, and guest-focused amenities. Every design decision was intentional, creating a warm, functional, and highly bookable Airbnb home.",
      results: {
        originalIncome: 380,
        currentGross: 1050,
        currentNet: 680,
        weeklyGain: 300,
        annualIncrease: 15600,
        annualGrossRevenue: 54600,
        occupancyRate: 88,
        expectedROI: 24,
        actualROI: 24,
        yearsManaged: 1,
      },
      timeline: [
        { date: "Early 2024", event: "Property analysis and purchase guidance" },
        { date: "Mid 2024", event: "Complete renovation and Airbnb transformation" },
        { date: "October 2024", event: "Launched on Airbnb with immediate bookings" },
        { date: "2024-2025", event: "Consistent 88% occupancy maintained" },
      ],
      testimonial:
        "The client was blown away by how seamlessly we managed everything—from purchase support to renovation to ongoing management—and how much more profit the property produced under Luxe compared to standard renting.",
    },
  },
  {
    id: 2,
    title: "Parkland Vista Luxury Retreat",
    subheading: "Heritage charm meets modern elegance",
    categories: ["Renovation", "Interior Design"],
    location: "Norwood",
    shortDescription: "Adelaide Parkland Views",
    services: ["Styling"],
    bedrooms: 2,
    bathrooms: 1,
    sqft: 60,
    price: "$220 ADR • $85,000/year",
    mainImage: "/images/dsc09076.jpg",
    carouselImages: [
      "/images/dsc09079.jpg",
      "/images/dsc09080.jpg",
      "/images/dsc09083.jpg",
      "/images/dsc09088.jpg",
      "/images/dsc09090.jpg",
      "/images/dsc09092.jpg",
      "/images/dsc09095.jpg",
      "/images/dsc09097.jpg",
    ],
    description:
      "A beautiful heritage property in the heart of Norwood, transformed into a modern rental masterpiece while preserving its historic character. This project showcases our ability to blend traditional architecture with contemporary amenities.",
    features: [
      "4-bedroom heritage-style home",
      "Restored period features with modern upgrades",
      "Premium kitchen and bathroom renovations",
      "Landscaped gardens and outdoor entertaining",
      "High-end furnishings throughout",
      "Smart home technology integration",
      "Premium location near cafes and shops",
      "Consistent bookings year-round",
    ],
    amenities: [
      "Historic charm",
      "Modern kitchen",
      "Spacious bedrooms",
      "Landscaped gardens",
      "Outdoor entertaining area",
      "Smart home technology",
      "Central Norwood location",
      "Professional Luxe management",
    ],
    neighborhood:
      "Norwood is a charming suburb with a mix of heritage homes and modern amenities, offering a unique blend of history and convenience. Perfect for families and travelers seeking a blend of classic and contemporary style.",
    transformationStory: {
      subtitle: "Heritage meets modern elegance",
      challenge:
        "A heritage property needed a complete renovation and transformation to become a modern rental while preserving its historic charm.",
      solution:
        "Luxe Managements executed a comprehensive renovation plan, restoring period features with modern upgrades, and elevating the home with premium kitchen and bathroom renovations, high-end furnishings, and smart home technology integration.",
      results: {
        originalIncome: 600,
        currentGross: 3200,
        currentNet: 2000,
        weeklyGain: 1300,
        annualIncrease: 68400,
        annualGrossRevenue: 85000,
        occupancyRate: 90,
        expectedROI: 0,
        actualROI: 0,
        yearsManaged: 2,
      },
      timeline: [
        { date: "Initial Contact", event: "Owner reached out seeking heritage renovation" },
        { date: "Planning Phase", event: "Comprehensive assessment and renovation plan developed" },
        { date: "Transformation", event: "Restoration of period features and modern upgrades completed" },
        { date: "Renovation", event: "Premium kitchen and bathroom renovations executed" },
        { date: "Styling", event: "High-end furnishings and smart home integration installed" },
        { date: "Launch", event: "Property went live as premium Airbnb" },
        { date: "Results", event: "Now earning $85,000 annually with high occupancy" },
      ],
      testimonial:
        "The transformation of our heritage home exceeded all our expectations. Luxe Managements brought out the best of our historic property while adding modern conveniences and luxury touches.",
    },
  },
  {
    id: 3,
    title: "2-Bedroom West Beach Getaway",
    subheading: "High-performing coastal Airbnb with premium returns",
    categories: ["Property Management", "Interior Design", "Styling"],
    location: "West Beach",
    shortDescription: "Steps from the shoreline",
    services: ["Styling"],
    bedrooms: 2,
    bathrooms: 1,
    sqft: 85,
    price: "$250 ADR • $45,000/year",
    mainImage: "/images/hero_west_beach.jpg",
    carouselImages: [
      "/images/loungenew.jpg",
      "/images/kitchennew.jpg",
      "/images/bathroomnew.jpg",
      "/images/bednew.jpg",
    ],
    description:
      "This client was the very first homeowner to reach out to us through our website. He had just finished renovating a beautiful property only a minute from the beach and wanted to turn it into something more than a standard rental. After our initial consultation, we introduced him to Luxe's full-service Airbnb transformation. We implemented our latest bedding system, prepared a premium care package, and completed a full styling and setup tailored for high–occupancy coastal stays. Within days, the home was completely guest-ready. The result? The property quickly became one of our top-performing Airbnbs in West Beach, consistently achieving high occupancy, excellent guest reviews, and returns far beyond what a regular rental could offer. What began as a simple enquiry became a long-term partnership—and a standout success story for Luxe.",
    features: [
      "Full Airbnb styling and setup",
      "Premium bedding system",
      "Coastal-inspired interior design",
      "Professional photography",
      "Guest amenity packages",
      "Optimized for high occupancy",
    ],
    amenities: [
      "One minute to West Beach",
      "Fully equipped modern kitchen",
      "Quality furnishings throughout",
      "Fast WiFi and entertainment",
      "Premium guest amenities",
      "Professional Luxe management",
    ],
    neighborhood:
      "West Beach offers pristine coastal living away from city crowds, with beautiful beaches, peaceful surroundings, and a growing community. Perfect for families and travelers seeking an authentic seaside escape.",
    transformationStory: {
      subtitle: "From newly renovated to top-performing Airbnb",
      challenge:
        "A newly renovated property needed expert transformation to become a high-performing Airbnb rather than a standard rental.",
      solution:
        "Luxe Managements implemented our complete Airbnb transformation system including premium bedding, professional styling, guest amenity packages, and strategic setup for coastal stays.",
      results: {
        originalIncome: 400,
        currentGross: 3750,
        currentNet: 865,
        weeklyGain: 465,
        annualIncrease: 24180,
        annualGrossRevenue: 45000,
        occupancyRate: 85,
        expectedROI: 0,
        actualROI: 0,
        yearsManaged: 1,
      },
      timeline: [
        { date: "Initial", event: "Client reached out through website" },
        { date: "Week 1", event: "Consultation and Airbnb transformation plan" },
        { date: "Week 2", event: "Full styling, bedding system, and setup completed" },
        { date: "Launch", event: "Property went live and bookings surged" },
        { date: "Ongoing", event: "Consistently high occupancy and excellent reviews" },
      ],
      testimonial:
        "What began as a simple enquiry became a long-term partnership—and a standout success story for Luxe.",
    },
  },
  {
    id: 4,
    title: "Cosy Melbourne Street Hideaway",
    subheading: "High-performing North Adelaide Airbnb investment",
    categories: ["Property Management", "Interior Design", "Styling"],
    location: "North Adelaide, 5 mins from Adelaide Oval",
    shortDescription: "Historic North Adelaide",
    services: ["Styling"],
    bedrooms: 1,
    bathrooms: 1,
    sqft: 40,
    price: "$180 ADR",
    mainImage: "/images/mexterior.jpeg",
    carouselImages: [
      "/images/mexterior.jpeg",
      "/images/mliving.jpeg",
      "/images/mkitchen.jpeg",
      "/images/mbedroom.jpeg",
      "/images/mbathroom.jpeg",
    ],
    description:
      "Our journey with this client began when she reached out after purchasing a property with strong short-term rental potential. She wanted to position it as a high-performing investment, and we stepped in to help bring that vision to life. We analysed the local market, projected returns across major booking platforms, and developed a tailored styling and setup plan to highlight the property's strengths. Our team styled the space to create a warm, modern, guest-ready home ideal for short-term stays. Throughout the year, we managed the property with a balance of strong booking performance and the flexibility she needed—coordinating seamlessly whenever she or her family wished to enjoy the home, while still maintaining consistent availability for guest bookings. By the end of the year, the property had achieved a 9.5/10 rating on Booking.com and consistently outperformed traditional rental income. Impressed with the returns and our service, she chose to continue with us long-term, turning a newly purchased home into a high-performing investment supported by a trusted, ongoing partnership.",
    features: [
      "Heritage building with modern interiors",
      "5 minutes walk to Adelaide Oval",
      "Complete Airbnb transformation",
      "Designer styling throughout",
      "Private balcony with city views",
      "Premium guest amenities",
    ],
    amenities: [
      "Central North Adelaide location",
      "Modern kitchen with quality appliances",
      "Spacious living and dining areas",
      "Quality linens and towels",
      "Fast WiFi and entertainment",
      "Professional Luxe management",
    ],
    neighborhood:
      "North Adelaide is one of Adelaide's most prestigious suburbs, featuring tree-lined streets, heritage architecture, top restaurants, and proximity to Adelaide Oval and the CBD. Perfect for travelers seeking an authentic Adelaide experience.",
    transformationStory: {
      subtitle: "From property search to high-performing Airbnb investment",
      challenge:
        "A client seeking to purchase a property with strong short-term rental potential needed expert guidance through property analysis, purchase support, and complete transformation to create an Airbnb-ready investment.",
      solution:
        "Luxe Managements provided comprehensive property analysis, guided the purchase decision, and executed a complete transformation with modern styling, functional design, and guest-focused amenities.",
      results: {
        originalIncome: 350,
        currentGross: 780,
        currentNet: 520,
        weeklyGain: 170,
        annualIncrease: 8840,
        annualGrossRevenue: 47000,
        occupancyRate: 85,
        expectedROI: 0,
        actualROI: 0,
        yearsManaged: 1,
      },
      timeline: [
        { date: "Initial Contact", event: "Client reached out for property investment guidance" },
        { date: "Property Analysis", event: "Comprehensive analysis of multiple properties" },
        { date: "Purchase Support", event: "Guided purchase of perfect North Adelaide location" },
        { date: "Transformation", event: "Complete renovation and Airbnb-ready styling" },
        { date: "October Launch", event: "Listed on Airbnb with immediate booking surge" },
        { date: "Ongoing Success", event: "Consistent high occupancy and revenue performance" },
      ],
      testimonial:
        "The client was blown away by how seamlessly we managed everything—from purchase support to renovation to ongoing management—and how much more profit the property produced under Luxe compared to standard renting.",
    },
  },
  {
    id: 5,
    title: "Seaford Coastal Residence",
    subheading: "Where Distance Becomes a Feature. Not a Limitation.",
    categories: ["Property Management", "Styling"],
    location: "Seaford",
    shortDescription: "5 mins from Seaford Beach",
    services: ["Styling"],
    bedrooms: 3,
    bathrooms: 2,
    sqft: 120,
    price: "$1,000/week avg",
    mainImage: "/images/design-mode/sfnewlounge.jpg",
    carouselImages: [
      "/seaford-coastal-home-exterior.jpg",
      "/modern-coastal-living-room.jpg",
      "/coastal-bedroom-with-ocean-views.jpg",
      "/coastal-kitchen-modern-design.jpg",
      "/coastal-outdoor-deck-beach.jpg",
      "/coastal-bathroom-modern-finishes.jpg",
    ],
    description:
      "A three-bedroom coastal home, far from central Adelaide — beautiful, quiet, and undeniably outside the usual orbit of most short-stay operators. The owner wanted to live in it during winter and transform it into a high-performing Airbnb during summer. But in rural-fringe locations, even finding a reliable cleaner can feel impossible. Most companies would have stopped there. We didn't. At Luxe, we've built a team that doesn't shy away from distance — they embrace it. Cleaners and contractors who travel through thick and thin to deliver the same standard of excellence guests expect in the CBD. No shortcuts. No compromises. Just consistency, wherever the map takes us. Once furnished and elevated to Luxe standards, the true potential of the home revealed itself. During peak summer, the property now earns ~$1,800 per week. Across the year, the client averages ~$1,000 per week — almost double the long-term value, powered by niche guests seeking premium stays in an area with very few high-quality options. A remote location became a summer powerhouse.",
    features: [
      "Owner-occupied in winter, Luxe-managed in summer",
      "Dedicated travel-ready cleaning team",
      "Full Luxe furnishing and styling",
      "Remote property management excellence",
      "Summer powerhouse performance",
      "Peak summer earns ~$1,800/week",
    ],
    amenities: [
      "Coastal location",
      "Premium guest amenities",
      "Modern furnishings",
      "Professional cleaning team",
      "Remote management capability",
      "High-quality finishes",
    ],
    neighborhood: {
      description:
        "Seaford offers pristine coastal living away from city crowds, with beautiful beaches, peaceful surroundings, and a growing community. Perfect for families and travelers seeking an authentic seaside escape.",
      points: ["Point 1", "Point 2", "Point 3"],
    },
    transformationStory: {
      before: {
        description: "Describe the before state",
        challenges: ["Challenge 1", "Challenge 2"],
      },
      after: {
        description: "Describe the transformation results",
        improvements: ["Improvement 1", "Improvement 2"],
      },
    },
  },
  {
    id: 6,
    title: "Enfield Grand Residence",
    subheading: "Modern Five-Bedroom Home in Adelaide – Complete Transformation",
    categories: ["Property Management", "Interior Design", "Styling"],
    location: "Enfield",
    shortDescription: "Family-friendly Enfield",
    services: ["Styling"],
    bedrooms: 5,
    bathrooms: 3,
    sqft: 332,
    price: "$2,100/week peak",
    mainImage: "/images/enfield-game-room.png",
    carouselImages: [
      "/images/modern-five-bedroom-home-enfield-exterior.jpg",
      "/luxury-living-room-with-pool-table.jpg",
      "/modern-kitchen-premium-finishes-five-bedroom-home.jpg",
      "/table-tennis-entertainment-room.jpg",
      "/luxury-bedroom-modern-finishes.jpg",
      "/modern-bathroom-marble-floors-white-palette.jpg",
    ],
    description:
      "This sprawling five-bedroom modern home in Enfield was designed for families, groups, and corporate retreats. But when it came to us, it was a generic rental — large, but empty of personality. Our transformation turned it into a luxury retreat with premium finishes, multiple entertainment zones, and cohesive styling throughout. From a pool table and table tennis room to a designer kitchen and expansive outdoor area, every detail was designed to deliver a premium group stay experience.",
    features: [
      "5 bedrooms / 3 bathrooms",
      "Pool table & table tennis for entertainment",
      "Premium kitchen with modern appliances",
      "Spacious outdoor area with BBQ facilities",
      "Multiple living zones for large groups",
      "Cohesive luxury styling throughout",
    ],
    amenities: [
      "Pool table",
      "Table tennis",
      "Premium kitchen",
      "BBQ facilities",
      "Spacious outdoor area",
      "Multiple living zones",
      "Cohesive luxury styling",
      "Professional cleaning service",
    ],
    neighborhood: {
      description:
        "Enfield offers peaceful suburban living with modern conveniences, family-friendly amenities, and easy access to Adelaide CBD. Perfect for group stays, corporate retreats, and family gatherings.",
      points: ["Point 1", "Point 2", "Point 3"],
    },
    transformationStory: {
      subtitle: "From generic rental to luxury group retreat",
      challenge:
        "A large five-bedroom home with potential, but no personality. The owner wanted to target families and groups, but the property lacked the amenities and cohesive styling to command premium rates. Standard furniture and generic finishes made it feel more like a house than a destination.",
      solution:
        "We transformed this property into a luxury group retreat with strategic upgrades and cohesive design. Added a pool table and table tennis for entertainment, upgraded the kitchen with premium appliances, styled every room with designer furniture, and created multiple living zones for guests to relax and connect. The outdoor area was transformed into an entertainment hub with BBQ facilities and comfortable seating.",
      results: {
        originalIncome: 900,
        currentGross: 2100,
        currentNet: 2100,
        weeklyGain: 1200,
        annualIncrease: 62400,
        annualGrossRevenue: 109200,
        occupancyRate: 95,
        expectedROI: 0,
        actualROI: 0,
        yearsManaged: 3,
      },
      timeline: [
        { date: "Day 1", event: "Property assessment and strategy planning" },
        { date: "Week 1", event: "Furniture sourcing and entertainment setup" },
        { date: "Week 2", event: "Kitchen upgrades and styling installation" },
        { date: "Week 3", event: "Outdoor transformation and final touches" },
        { date: "Launch", event: "Professional photography and listing optimization" },
        { date: "3 Years On", event: "Consistent 95% occupancy with 5-star reviews" },
      ],
      testimonial:
        "We wanted a property that could host families and groups comfortably. Luxe transformed our house into a destination that consistently earns 5-star reviews and premium rates.",
    },
  },
  {
    id: 8,
    title: "Serene Family Home – Pool & Games Close to Adl CBD",
    subheading: "Fast turnaround transformation that exceeded expectations",
    categories: ["Property Management", "Interior Design", "Styling"],
    location: "Clearview",
    shortDescription: "Peaceful Family Stay",
    services: ["Styling"],
    bedrooms: 6,
    bathrooms: 4,
    sqft: 346,
    price: "$450 ADR • $105,000/year",
    mainImage: "/images/chero.jpg",
    carouselImages: [
      "/images/cbedroom3new.jpeg",
      "/images/cbedroom1new.jpeg",
      "/images/cbedroom2new.jpeg",
      "/images/cgameroom1new.jpeg",
      "/images/cbathroom1-edited.jpg", // Replaced cbathroom1.jpg with edited version
      "/images/cloungeshot.jpg",
      "/images/ckitchenshot.jpg",
      "/images/cbalcony.jpg",
      "/images/ckitchenshot2.jpg",
      "/images/cloungeshot2.jpg",
    ],
    description:
      "Upon hearing about our Enfield success story, the owner of 74 Kent Ave reached out wanting to achieve similar results for his own property. Although initially uncertain about venturing into short-term rentals due to the perceived risks, he was open to exploring the potential. The home had strong fundamentals but required additional furnishing and some maintenance work before it was ready for short-term rental platforms. Our team stepped in to coordinate the necessary maintenance, complete the furnishing, and style the home to create a warm, functional, and guest-ready space. Once listed, the property quickly gained traction across platforms, delivering returns well above what traditional renting could offer. What began as a property in need of preparation evolved into a polished, high-performing investment supported by a smooth and reliable management experience.",
    features: [
      "Complete 6-bedroom transformation",
      "First major bedding system showcase",
      "Modern bedroom redesign with premium bedding",
      "Fast-track renovation",
      "Pool & games entertainment",
      "Close to Adelaide CBD",
    ],
    amenities: [
      "6 spacious bedrooms",
      "3 modern bathrooms",
      "Entertainment room with games",
      "Modern kitchen",
      "Premium guest amenities",
      "Professional Luxe management",
    ],
    neighborhood: {
      description:
        "Clearview offers peaceful suburban living with modern conveniences, family-friendly amenities, and quick access to Adelaide CBD. Perfect for large families, groups, and extended stays.",
      points: ["Point 1", "Point 2", "Point 3"],
    },
    transformationStory: {
      subtitle: "Fast turnaround with our first major bedding system",
      challenge:
        "A six-bedroom home needed complete transformation within a tight deadline. Owner wanted the property guest-ready fast, and we saw the perfect opportunity to showcase our first major bedding system implementation.",
      solution:
        "Luxe moved quickly, redesigning every bedroom with modern furniture and introducing our groundbreaking bedding system. The transformation of Bedroom 1—from ornate vintage bed to luxurious grey headboard with premium white linens—became the signature showcase of this new approach. Efficient coordination and styling refreshed the entire home in days.",
      results: {
        originalIncome: 700,
        currentGross: 900,
        currentNet: 900,
        weeklyGain: 200,
        annualIncrease: 10400,
        annualGrossRevenue: 105000,
        occupancyRate: 88,
        expectedROI: 0,
        actualROI: 0,
        yearsManaged: 1,
      },
      timeline: [
        { date: "Initial Contact", event: "Owner reached out needing fast transformation" },
        { date: "Planning Phase", event: "Quick assessment and first bedding system implementation planned" },
        { date: "Transformation", event: "All 6 bedrooms redesigned with premium bedding system in days" },
        { date: "Showcase", event: "Bedroom 1 before/after became signature transformation" },
        { date: "Launch", event: "Property went live as premium Airbnb" },
        { date: "Results", event: "Now earning $105,000 annually with high occupancy" },
      ],
      testimonial:
        "What started as a rushed renovation became one of our most impressive transformations—and the debut of our major bedding system. It showed exactly what Luxe can deliver under pressure, and set the standard for all bedroom transformations that followed.",
    },
  },
  {
    id: 9,
    title: "Coming Soon",
    subheading: "Your property could be next",
    categories: ["Upcoming"],
    location: "Available Soon",
    shortDescription: "Ready to showcase your property transformation?",
    services: [],
    price: "$0",
    bedrooms: 0,
    bathrooms: 0,
    sqft: 0,
    mainImage: "/placeholder.svg?height=400&width=600&text=Coming+Soon",
    carouselImages: [],
    features: [],
    amenities: [],
    neighborhood: {
      description: "",
      points: [],
    },
    transformationStory: {
      before: {
        description: "",
        challenges: [],
      },
      after: {
        description: "",
        improvements: [],
      },
    },
  },
  {
    id: 10,
    title: "Coming Soon",
    subheading: "Future transformation showcase",
    categories: ["Upcoming"],
    location: "Available Soon",
    shortDescription: "Contact us to feature your property here",
    services: [],
    price: "$0",
    bedrooms: 0,
    bathrooms: 0,
    sqft: 0,
    mainImage: "/placeholder.svg?height=400&width=600&text=Coming+Soon",
    carouselImages: [],
    features: [],
    amenities: [],
    neighborhood: {
      description: "",
      points: [],
    },
    transformationStory: {
      before: {
        description: "",
        challenges: [],
      },
      after: {
        description: "",
        improvements: [],
      },
    },
  },
]

export function getPropertyById(id: number): Property | undefined {
  return properties.find((property) => property.id === id)
}
