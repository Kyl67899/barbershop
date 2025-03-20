"use client"

import dynamic from "next/dynamic"

// Import the contact form with no SSR
const ContactForm = dynamic(() => import("../components/contact-forms"), {
  ssr: false,
  loading: () => <p className="text-center py-4">Loading contact form...</p>,
})

export default function ContactWrapper() {
  return <ContactForm />
}

