"use client"

import { useEffect, useRef, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle } from "lucide-react"

declare global {
  interface Window {
    jotformEmbedHandler: (selector: string, baseUrl: string) => void
  }
}

export default function BookingForm() {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const searchParams = useSearchParams()
  const [formLoaded, setFormLoaded] = useState(false)

  // Get query parameters for pre-filling the form
  const service = searchParams?.get("service") || ""
  const date = searchParams?.get("date") || ""
  const time = searchParams?.get("time") || ""
  const name = searchParams?.get("name") || ""
  const email = searchParams?.get("email") || ""
  const phone = searchParams?.get("phone") || ""
  const notes = searchParams?.get("notes") || ""

  // Check if we have pre-filled data
  const hasPrefilledData = !!(service || date || time || name || email || phone || notes)

  // Format date for display if it exists
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : ""

  // Construct the JotForm URL with parameters if available
  const jotformUrl = `https://form.jotform.com/250767357882168${
    hasPrefilledData
      ? `?serviceType=${encodeURIComponent(service)}&date=${encodeURIComponent(date)}&time=${encodeURIComponent(time)}&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&comments=${encodeURIComponent(notes)}`
      : ""
  }`

  // Handle script loading in a React-friendly way
  useEffect(() => {
    // Load the JotForm script
    const script = document.createElement("script")
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"
    script.async = true
    script.onload = () => {
      // Once the script is loaded, initialize the form handler
      if (window.jotformEmbedHandler && iframeRef.current) {
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-250767357882168']", "https://form.jotform.com/")
        setFormLoaded(true)
      }
    }
    document.body.appendChild(script)

    // Cleanup function to remove the script when component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  // Function to handle iframe resize for responsiveness
  const handleResize = () => {
    if (iframeRef.current) {
      // Adjust height based on content or window size
      const windowHeight = window.innerHeight
      iframeRef.current.style.height = `${windowHeight * 0.8}px`
    }
  }

  // Set up resize listener
  useEffect(() => {
    window.addEventListener("resize", handleResize)
    // Initial resize
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section id="booking" className="bg-secondary py-24 text-secondary-foreground sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-14 grid gap-8 border-b border-white/12 pb-10 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary">Reserve your chair</p>
            <h2 className="text-balance font-serif text-5xl leading-[0.92] tracking-[-0.04em] sm:text-7xl">Your best look starts <span className="italic text-primary">right here.</span></h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-secondary-foreground/58 md:justify-self-end">Choose your service and preferred time. We&apos;ll handle every detail from there.</p>

          {hasPrefilledData && formLoaded && (
            <Alert className="mt-6 max-w-xl border-primary/40 bg-primary/10 text-secondary-foreground">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertTitle>Your information has been pre-filled</AlertTitle>
              <AlertDescription>
                <p className="mb-2">We&apos;ve pre-filled the form with the information you provided:</p>
                <ul className="text-left text-sm space-y-1">
                  {service && (
                    <li>
                      <strong>Service:</strong> {service}
                    </li>
                  )}
                  {formattedDate && (
                    <li>
                      <strong>Date:</strong> {formattedDate}
                    </li>
                  )}
                  {time && (
                    <li>
                      <strong>Time:</strong> {time}
                    </li>
                  )}
                  {name && (
                    <li>
                      <strong>Name:</strong> {name}
                    </li>
                  )}
                  {email && (
                    <li>
                      <strong>Email:</strong> {email}
                    </li>
                  )}
                  {phone && (
                    <li>
                      <strong>Phone:</strong> {phone}
                    </li>
                  )}
                </ul>
                <p className="mt-2 text-sm">Please review and submit the form to confirm your appointment.</p>
              </AlertDescription>
            </Alert>
          )}
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative w-full overflow-hidden border border-white/12 bg-background shadow-2xl">
            <iframe
              ref={iframeRef}
              id="JotFormIFrame-250767357882168"
              title="Appointment Request Form"
              allowTransparency={true}
              allow="geolocation; microphone; camera; fullscreen"
              src={jotformUrl}
              frameBorder="0"
              className="w-full"
              style={{
                minHeight: "600px",
                width: "100%",
                border: "none",
                overflow: "auto",
              }}
              scrolling="yes"
              onLoad={() => setFormLoaded(true)}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

