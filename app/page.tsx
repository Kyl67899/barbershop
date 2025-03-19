import type { Metadata } from "next"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import Booking from "@/components/booking"
import Contact from "@/components/contact"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Elite Cuts | Premium Barbershop",
  description: "Experience premium grooming services at Elite Cuts Barbershop. Book your appointment today.",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Analytics />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Booking />
      <Contact />
    </main>
  )
}

