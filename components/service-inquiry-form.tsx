"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useSearchParams } from "next/navigation"

interface ServiceInquiryFormProps {
  serviceName: string
}

export default function ServiceInquiryForm({ serviceName }: ServiceInquiryFormProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const searchParams = useSearchParams()
  const isPrefill = searchParams?.get("prefill") === "true"
  const prefillName = searchParams?.get("name") || ""
  const prefillEmail = searchParams?.get("email") || ""
  const prefillPhone = searchParams?.get("phone") || ""

  // Construct the JotForm URL with prefill parameters if available
  const jotformUrl = isPrefill
    ? `https://form.jotform.com/250767357882168?serviceType=${encodeURIComponent(serviceName)}&name=${encodeURIComponent(prefillName)}&email=${encodeURIComponent(prefillEmail)}&phone=${encodeURIComponent(prefillPhone)}`
    : `https://form.jotform.com/250767357882168?serviceType=${encodeURIComponent(serviceName)}`

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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Inquire About This Service</CardTitle>
        <CardDescription>
          Have questions about our {serviceName} service? Send us a message and we&apos;ll get back to you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative w-full overflow-hidden rounded-lg">
          <iframe
            ref={iframeRef}
            id="JotFormIFrame-250767357882168"
            title={`${serviceName} Inquiry Form`}
            allowTransparency={true}
            allowFullScreen={true}
            allow="geolocation; microphone; camera"
            src={jotformUrl}
            frameBorder="0"
            className="w-full min-h-[500px]"
            style={{
              border: "none",
              width: "100%",
            }}
            scrolling="no"
          />
        </div>
      </CardContent>
    </Card>
  )
}

// Add this to make TypeScript recognize the jotformEmbedHandler global function
declare global {
  interface Window {
    jotformEmbedHandler: (selector: string, baseUrl: string) => void
  }
}

