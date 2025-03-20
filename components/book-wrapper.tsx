"use client"

import dynamic from "next/dynamic"

// Import the booking form with no SSR
const BookingForm = dynamic(() => import("../components/book-form"), {
  ssr: false,
  loading: () => <p className="text-center py-4">Loading booking form...</p>,
})

export default function BookingWrapper() {
  return <BookingForm />
}

