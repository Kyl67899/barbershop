"use client"

import { useEffect, useRef, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle } from "lucide-react"

export default function Booking() {
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
    <section id="booking" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Appointment</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Schedule your visit with our expert barbers</p>

          {hasPrefilledData && formLoaded && (
            <Alert className="mt-6 max-w-xl mx-auto bg-green-50 border-green-200">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertTitle>Your information has been pre-filled</AlertTitle>
              <AlertDescription>
                <p className="mb-2">We've pre-filled the form with the information you provided:</p>
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

        <div className="max-w-4xl mx-auto">
          <div className="relative w-full overflow-hidden rounded-lg shadow-md bg-white">
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

