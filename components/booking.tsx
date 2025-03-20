import dynamic from "next/dynamic"

// Import the booking form with no SSR
const BookingForm = dynamic(() => import("../components/book-form"), {
  ssr: false,
})

export default function Booking() {
  return <BookingForm />
}

