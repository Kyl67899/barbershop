import type { Metadata } from "next"
import Contact from "@/components/contact"

export const metadata: Metadata = {
  title: "Contact Us | Elite Cuts Barbershop",
  description: "Get in touch with Elite Cuts Barbershop. Find our location, hours, and contact information.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Have questions? Get in touch with us</p>
        </div>
      </div>

      <Contact />
    </div>
  )
}

