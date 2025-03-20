"use client"

import dynamic from "next/dynamic"

// Import the service inquiry form with no SSR
const ServiceInquiryForm = dynamic(() => import("./service-inquiry-form"), {
  ssr: false,
  loading: () => <p className="text-center py-4">Loading inquiry form...</p>,
})

export default function ServiceInquiryFormWrapper({ serviceName }: { serviceName: string }) {
  return <ServiceInquiryForm serviceName={serviceName} />
}
