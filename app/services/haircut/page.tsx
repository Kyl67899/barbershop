import type { Metadata } from "next"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import ServiceInquiryForm from "@/components/service-inquiry-form"

export const metadata: Metadata = {
  title: "Haircut | Elite Cuts Barbershop",
  description: "Premium haircut services tailored to your style and preference at Elite Cuts Barbershop.",
}

export default function HaircutPage() {
  return (
    <div>
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden rounded-xl mb-12">
        <Image src="/images/premium-haircut.jpg" alt="Premium Haircut" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Premium Haircut</h1>
            <p className="text-xl max-w-2xl">Precision haircut tailored to your style and preference</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-6">Service Details</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our premium haircut service is designed to give you a personalized and precise cut that complements your
            face shape, hair type, and personal style. Our expert barbers take the time to understand your preferences
            and provide recommendations to help you achieve your desired look.
          </p>

          <p className="text-lg text-muted-foreground mb-6">
            Each haircut begins with a consultation to discuss your style goals, followed by a relaxing shampoo and
            scalp massage. Your barber will then use precision cutting techniques to create a look that's uniquely
            yours. The service concludes with styling using premium products to ensure your new cut looks its best.
          </p>

          <h3 className="text-xl font-bold mb-4 mt-8">What's Included</h3>
          <ul className="space-y-3 mb-8">
            {[
              "Personal style consultation",
              "Shampoo and conditioning",
              "Precision haircut",
              "Hot towel refreshment",
              "Styling with premium products",
              "Styling tips and product recommendations",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-bold mb-4">Why Choose Our Haircut Service</h3>
          <p className="text-lg text-muted-foreground mb-6">
            At Elite Cuts, we pride ourselves on delivering haircuts that not only meet but exceed your expectations.
            Our barbers are trained in the latest techniques and styles, ensuring you receive a cut that's both
            contemporary and tailored to your individual needs. We use only the finest tools and products to ensure a
            superior experience and result.
          </p>

          <div className="mt-12">
            <ServiceInquiryForm serviceName="Premium Haircut" />
          </div>
        </div>

        <div>
          <div className="bg-muted p-6 rounded-xl sticky top-24">
            <h3 className="text-xl font-bold mb-4">Service Information</h3>

            <div className="space-y-4 mb-6">
              <div>
                <p className="text-sm text-muted-foreground">Price</p>
                <p className="text-2xl font-bold">$30</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-medium">30 minutes</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Recommended For</p>
                <p className="font-medium">All hair types and styles</p>
              </div>
            </div>

            <div className="border-t border-border pt-4 mb-4">
              <h4 className="font-medium mb-2">Popular Styles</h4>
              <div className="flex flex-wrap gap-2">
                {["Fade", "Undercut", "Pompadour", "Crew Cut", "Textured Crop"].map((style, index) => (
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

