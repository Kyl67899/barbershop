import type { Metadata } from "next"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Hair Coloring | Elite Cuts Barbershop",
  description: "Professional hair coloring services for men at Elite Cuts Barbershop.",
}

export default function HairColoringPage() {
  return (
    <div>
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden rounded-xl mb-12">
        <Image src="/images/hair-coloring-service.jpg" alt="Hair Coloring" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hair Coloring</h1>
            <p className="text-xl max-w-2xl">Professional color services for a refreshed, natural look</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-6">Service Details</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our hair coloring service offers a range of options to enhance your natural color, cover gray hair, or
            create a bold new look. Whether you&apos;re looking for a subtle change or a complete transformation, our
            color specialists will work with you to achieve the perfect shade that complements your skin tone and style.
          </p>

          <p className="text-lg text-muted-foreground mb-6">
            The service begins with a thorough consultation to understand your color goals and assess your hair&apos;s
            current condition. Your colorist will then mix a custom color formula tailored to your specific needs and
            apply it using techniques that ensure even, natural-looking results. After processing, your hair will be
            washed, conditioned, and styled to showcase your new color.
          </p>

          <h3 className="text-xl font-bold mb-4 mt-8">What&apos;s Included</h3>
          <ul className="space-y-3 mb-8">
            {[
              "Color consultation",
              "Custom color formulation",
              "Professional application",
              "Processing time",
              "Shampoo and conditioning",
              "Styling",
              "Color care recommendations",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-bold mb-4">Color Options</h3>
          <div className="space-y-4 mb-8">
            <div>
              <h4 className="font-bold">Gray Coverage</h4>
              <p className="text-muted-foreground">
                Natural-looking coverage for gray hair that blends seamlessly with your natural color.
              </p>
            </div>
            <div>
              <h4 className="font-bold">Full Color</h4>
              <p className="text-muted-foreground">Complete color change or enhancement for a fresh new look.</p>
            </div>
            <div>
              <h4 className="font-bold">Highlights</h4>
              <p className="text-muted-foreground">
                Subtle or bold highlights to add dimension and texture to your hair.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">Why Choose Our Hair Coloring Service</h3>
          <p className="text-lg text-muted-foreground mb-6">
            At Elite Cuts, we understand that changing your hair color is a significant decision. Our color specialists
            are trained in the latest techniques and use premium, ammonia-free products that minimize damage while
            delivering vibrant, long-lasting results. We take the time to understand your goals and create a custom
            color solution that enhances your natural features and fits your lifestyle.
          </p>
        </div>

        <div>
          <div className="bg-muted p-6 rounded-xl sticky top-24">
            <h3 className="text-xl font-bold mb-4">Service Information</h3>

            <div className="space-y-4 mb-6">
              <div>
                <p className="text-sm text-muted-foreground">Price</p>
                <p className="text-2xl font-bold">$45+</p>
                <p className="text-xs text-muted-foreground">Price varies based on service type and hair length</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-medium">45-90 minutes</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Recommended For</p>
                <p className="font-medium">Gray coverage, refreshing your look, special occasions</p>
              </div>
            </div>

            <div className="border-t border-border pt-4 mb-4">
              <h4 className="font-medium mb-2">Popular Color Services</h4>
              <div className="flex flex-wrap gap-2">
                {["Gray Coverage", "Full Color", "Highlights", "Color Refresh", "Balayage"].map((service, index) => (
                  <span key={index} className="bg-background px-3 py-1 rounded-full text-sm">
                    {service}
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

