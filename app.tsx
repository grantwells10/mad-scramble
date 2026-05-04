"use client"

import Header from "./components/header"
import HeroSection from "./components/hero-section"
import Footer from "./components/footer"

export default function App() {
  return (
    <div className="flex min-h-dvh flex-col font-inika">
      <div className="shrink-0">
        <Header />
        <div className="h-2 w-full shrink-0 bg-[#FFC300]" aria-hidden />
        <HeroSection />
      </div>
      <Footer />
    </div>
  )
}
