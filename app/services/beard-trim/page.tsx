import type { Metadata } from "next"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import ServiceInquiryForm from "@/components/service-inquiry-form"

export const metadata: Metadata = {
  title: "Beard Trim | Elite Cuts Barbershop",
  description: "Expert beard shaping and styling for a refined look at Elite Cuts Barbershop.",
}

export default function BeardTrimPage() {
  return (
    <div>
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden rounded-xl mb-12">
        <Image src="/images/beard-trim-service.jpg" alt="Beard Trim" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Beard Trim</h1>
            <p className="text-xl max-w-2xl">Expert beard shaping and styling for a refined look</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-6">Service Details</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our beard trim service is designed to help you maintain a well-groomed and stylish beard that enhances your
            facial features. Whether you&apos;re looking for a slight trim or a complete reshape, our expert barbers
            will work with you to achieve the perfect look.
          </p>

          <p className="text-lg text-muted-foreground mb-6">
            The service begins with a consultation to understand your beard goals and face shape. Your barber will then
            use precision trimming techniques to shape your beard, followed by a hot towel treatment to open pores and
            soften the hair. The service concludes with the application of premium beard oils and balms to condition and
            style your beard.
          </p>

          <h3 className="text-xl font-bold mb-4 mt-8">What&apos;s Included</h3>
          <ul className="space-y-3 mb-8">
            {[
              "Beard style consultation",
              "Precision trimming and shaping",
              "Straight razor line-up",
              "Hot towel treatment",
              "Beard oil and balm application",
              "Styling and grooming tips",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-bold mb-4">Why Choose Our Beard Trim Service</h3>
          <p className="text-lg text-muted-foreground mb-6">
            At Elite Cuts, we understand that your beard is an important part of your identity and style. Our barbers
            are specially trained in beard care and styling, ensuring you receive a trim that enhances your natural
            features while maintaining the health of your facial hair. We use premium tools and products to ensure your
            beard looks and feels its best.
          </p>

          <div className="mt-12">
            <ServiceInquiryForm serviceName="Beard Trim" />
          </div>
        </div>

        <div>
          <div className="bg-muted p-6 rounded-xl sticky top-24">
            <h3 className="text-xl font-bold mb-4">Service Information</h3>

            <div className="space-y-4 mb-6">
              <div>
                <p className="text-sm text-muted-foreground">Price</p>
                <p className="text-2xl font-bold">$20</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-medium">20 minutes</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Recommended For</p>
                <p className="font-medium">All beard types and lengths</p>
              </div>
            </div>

            <div className="border-t border-border pt-4 mb-4">
              <h4 className="font-medium mb-2">Popular Styles</h4>
              <div className="flex flex-wrap gap-2">
                {["Full Beard", "Goatee", "Van Dyke", "Stubble", "Corporate"].map((style, index) => (
                  <span key={index} className="bg-background px-3 py-1 rounded-full text-sm">
                    {style}
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

