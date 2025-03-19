import type { Metadata } from "next"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Hair Styling | Elite Cuts Barbershop",
  description: "Professional hair styling with premium products at Elite Cuts Barbershop.",
}

export default function HairStylingPage() {
  return (
    <div>
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden rounded-xl mb-12">
        <Image src="/images/hair-styling-service.jpg" alt="Hair Styling" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hair Styling</h1>
            <p className="text-xl max-w-2xl">Professional styling with premium products</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-6">Service Details</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our hair styling service is perfect for special occasions, photoshoots, or whenever you want to look your
            absolute best. Our expert stylists will create a polished, sophisticated look using premium styling products
            and techniques tailored to your hair type and desired style.
          </p>

          <p className="text-lg text-muted-foreground mb-6">
            The service begins with a consultation to understand your styling goals and preferences. Your stylist will
            then wash and condition your hair before applying the appropriate styling products and using professional
            techniques to achieve your desired look. Whether you're looking for a sleek, professional style or something
            more textured and casual, we'll help you look your best.
          </p>

          <h3 className="text-xl font-bold mb-4 mt-8">What's Included</h3>
          <ul className="space-y-3 mb-8">
            {[
              "Style consultation",
              "Shampoo and conditioning",
              "Blow drying and styling",
              "Premium product application",
              "Finishing touches",
              "Styling tips for home maintenance",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-bold mb-4">Why Choose Our Hair Styling Service</h3>
          <p className="text-lg text-muted-foreground mb-6">
            At Elite Cuts, we understand that the right styling can transform your look and boost your confidence. Our
            stylists are trained in the latest techniques and use only premium products to ensure your hair not only
            looks great but stays healthy. Whether you're preparing for a special event or just want to refresh your
            everyday look, our styling service will leave you looking and feeling your best.
          </p>
        </div>

        <div>
          <div className="bg-muted p-6 rounded-xl sticky top-24">
            <h3 className="text-xl font-bold mb-4">Service Information</h3>

            <div className="space-y-4 mb-6">
              <div>
                <p className="text-sm text-muted-foreground">Price</p>
                <p className="text-2xl font-bold">$25</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-medium">25 minutes</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Recommended For</p>
                <p className="font-medium">Special occasions, professional events, photoshoots</p>
              </div>
            </div>

            <div className="border-t border-border pt-4 mb-4">
              <h4 className="font-medium mb-2">Popular Styles</h4>
              <div className="flex flex-wrap gap-2">
                {["Slick Back", "Textured Quiff", "Modern Pompadour", "Natural Texture", "Classic Side Part"].map(
                  (style, index) => (
                    <span key={index} className="bg-background px-3 py-1 rounded-full text-sm">
                      {style}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

