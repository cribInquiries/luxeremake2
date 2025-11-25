"use client"

import dynamic from "next/dynamic"

const HouseHeroParallax = dynamic(() => import("./HouseHeroParallax"), { ssr: false })

export default HouseHeroParallax
