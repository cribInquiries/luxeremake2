"use client"

import dynamic from "next/dynamic"

const ThumnailSlider = dynamic(() => import("@/components/carousel/ThumnailSlider"), {
  ssr: false,
})

export default ThumnailSlider
