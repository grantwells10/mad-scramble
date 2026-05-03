"use client"

import Header from "./components/header"
import HeroSection from "./components/hero-section"
import Footer from "./components/footer"

export default function App() {
  return (
    <div className="min-h-screen font-inika">
      <div className="bg-[#E4F5FD]">
        <Header />
        <HeroSection />
      </div>
      <div
        className="h-16 sm:h-20 md:h-24 w-full shrink-0 bg-gradient-to-b from-[#E4F5FD] via-[#F2F8F0] to-[#FFFCE9]"
        aria-hidden
      />
      <Footer />
    </div>
  )
}
