"use client"

import dynamic from "next/dynamic"

const BookingForm = dynamic(() => import("../components/book-form"), {
  ssr: false,
  loading: () => <div className="mx-auto h-[42rem] max-w-4xl animate-pulse bg-card" aria-label="Loading booking form" />,
})

export default function Booking() {
  return <BookingForm />
}
