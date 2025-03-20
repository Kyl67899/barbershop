"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import dynamic from "next/dynamic"

// Add this type declaration at the top of the file, after the imports
declare global {
  interface Window {
    jotformEmbedHandler: (selector: string, baseUrl: string) => void
  }
}

// Import the service inquiry form with no SSR
const ServiceInquiryFormWrapper = dynamic(() => import("@/components/service-inquiry-form-wrapper"), {
  ssr: false,
  loading: () => (
    <div className="p-6 border rounded-lg min-h-[500px] flex items-center justify-center">
      <p className="text-muted-foreground">Loading inquiry form...</p>
    </div>
  ),
})

interface ServicePageClientProps {
  serviceName: string
  description: string
  imageSrc: string
  price: string
  duration: string
  recommendedFor: string
  whatIsIncluded: string[]
  whyChooseUs: string
  styles?: string[]
  benefits?: string[]
}

export default function ServicePageClient({
  serviceName,
  description,
  imageSrc,
  price,
  duration,
  recommendedFor,
  whatIsIncluded,
  whyChooseUs,
  styles,
  benefits,
}: ServicePageClientProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div>
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden rounded-xl mb-12">
        <Image src={imageSrc || "/placeholder.svg"} alt={serviceName} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{serviceName}</h1>
            <p className="text-xl max-w-2xl">{description}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-6">Service Details</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our {serviceName.toLowerCase()} service is designed to help you maintain a well-groomed and stylish look
            that enhances your features. Whether you&apos;re looking for a slight change or a complete new style, our
            expert barbers will work with you to achieve the perfect look.
          </p>

          <p className="text-lg text-muted-foreground mb-6">
            The service begins with a consultation to understand your goals and preferences. Your barber will then use
            precision techniques to create your desired look, followed by styling with premium products.
          </p>

          <h3 className="text-xl font-bold mb-4 mt-8">What&apos;s Included</h3>
          <ul className="space-y-3 mb-8">
            {whatIsIncluded.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-bold mb-4">Why Choose Our {serviceName} Service</h3>
          <p className="text-lg text-muted-foreground mb-6">{whyChooseUs}</p>

          <div className="mt-12">
            {isClient ? (
              <ServiceInquiryFormWrapper serviceName={serviceName} />
            ) : (
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-4">Inquire About This Service</h3>
                <p className="mb-6">
                  Have questions about our {serviceName} service? Fill out the form below and we&apos;ll get back to
                  you.
                </p>
                <div className="h-[500px] flex items-center justify-center bg-muted rounded-lg">
                  <p>Loading inquiry form...</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="bg-muted p-6 rounded-xl sticky top-24">
            <h3 className="text-xl font-bold mb-4">Service Information</h3>

            <div className="space-y-4 mb-6">
              <div>
                <p className="text-sm text-muted-foreground">Price</p>
                <p className="text-2xl font-bold">{price}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-medium">{duration}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Recommended For</p>
                <p className="font-medium">{recommendedFor}</p>
              </div>
            </div>

            <div className="border-t border-border pt-4 mb-4">
              <h4 className="font-medium mb-2">{styles ? "Popular Styles" : "Benefits"}</h4>
              <div className="flex flex-wrap gap-2">
                {styles &&
                  styles.map((style, index) => (
                    <span key={index} className="bg-background px-3 py-1 rounded-full text-sm">
                      {style}
                    </span>
                  ))}
                {benefits &&
                  benefits.map((benefit, index) => (
                    <span key={index} className="bg-background px-3 py-1 rounded-full text-sm">
                      {benefit}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

