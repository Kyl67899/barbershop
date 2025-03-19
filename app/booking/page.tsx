import type { Metadata } from "next"
import Booking from "@/components/booking"

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

      <Booking />
    </div>
  )
}

