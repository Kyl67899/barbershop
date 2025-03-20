import type { Metadata } from "next"
import { Suspense } from "react"
import BookingWrapper from "@/components/booking-wrapper"

export const metadata: Metadata = {
  title: "Book Appointment | Elite Cuts Barbershop",
  description: "Schedule your appointment at Elite Cuts Barbershop. Choose your preferred date, time, and service.",
}

export default function BookingPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Appointment</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Schedule your visit with our expert barbers</p>
        </div>
      </div>

      <Suspense fallback={<BookingFallback />}>
        <BookingWrapper />
      </Suspense>
    </div>
  )
}

function BookingFallback() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Appointment</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Loading booking form...</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full overflow-hidden rounded-lg shadow-md bg-white h-[600px] animate-pulse">
            {/* Loading placeholder */}
          </div>
        </div>
      </div>
    </section>
  )
}

