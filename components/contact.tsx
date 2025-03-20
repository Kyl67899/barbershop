import { Suspense } from "react"
import ContactWrapper from "./contact-wrapper"

export default function Contact() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading contact form...</div>}>
      <ContactWrapper />
    </Suspense>
  )
}

