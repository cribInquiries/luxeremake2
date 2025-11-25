import type React from "react"
import "../globals.css"
import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
