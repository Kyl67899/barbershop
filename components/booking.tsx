import { Suspense } from "react"
import BookingWrapper from "../components/book-wrapper"

export default function Booking() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading booking form...</div>}>
      <BookingWrapper />
    </Suspense>
  )
}

