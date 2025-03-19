import type { Metadata } from "next"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Hot Towel Shave | Elite Cuts Barbershop",
  description: "Luxurious traditional hot towel shave experience at Elite Cuts Barbershop.",
}

export default function HotTowelShavePage() {
  return (
    <div>
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden rounded-xl mb-12">
        <Image src="/images/hot-towel-shave-service.jpg" alt="Hot Towel Shave" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hot Towel Shave</h1>
            <p className="text-xl max-w-2xl">Luxurious traditional hot towel shave experience</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-6">Service Details</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our hot towel shave is a luxurious, traditional barbering experience that provides the closest, most
            comfortable shave possible. This service combines old-world techniques with modern products to deliver a
            relaxing and rejuvenating experience that leaves your skin smooth and refreshed.
          </p>

          <p className="text-lg text-muted-foreground mb-6">
            The service begins with a series of hot towels to open pores and soften facial hair. Your barber will then
            apply a rich pre-shave oil followed by a luxurious lather of shaving cream. Using a straight razor with
            expert precision, your barber will deliver a close, comfortable shave. The service concludes with cold
            towels to close pores and the application of aftershave balm to soothe and protect your skin.
          </p>

          <h3 className="text-xl font-bold mb-4 mt-8">What's Included</h3>
          <ul className="space-y-3 mb-8">
            {[
              "Multiple hot towel applications",
              "Pre-shave oil treatment",
              "Premium shaving cream application",
              "Straight razor shave with two passes",
              "Cold towel finish",
              "Aftershave balm and moisturizer",
              "Facial massage",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-bold mb-4">Why Choose Our Hot Towel Shave</h3>
          <p className="text-lg text-muted-foreground mb-6">
            At Elite Cuts, our hot towel shave is more than just a service—it's an experience. This traditional
            barbering ritual provides not only the closest shave possible but also a moment of relaxation and self-care.
            Our barbers are specially trained in straight razor techniques, ensuring a safe, comfortable, and luxurious
            experience that modern razors simply can't match.
          </p>
        </div>

        <div>
          <div className="bg-muted p-6 rounded-xl sticky top-24">
            <h3 className="text-xl font-bold mb-4">Service Information</h3>

            <div className="space-y-4 mb-6">
              <div>
                <p className="text-sm text-muted-foreground">Price</p>
                <p className="text-2xl font-bold">$35</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-medium">40 minutes</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Recommended For</p>
                <p className="font-medium">Special occasions, relaxation, skin rejuvenation</p>
              </div>
            </div>

            <div className="border-t border-border pt-4 mb-4">
              <h4 className="font-medium mb-2">Benefits</h4>
              <div className="flex flex-wrap gap-2">
                {["Closest Shave", "Skin Exfoliation", "Relaxation", "Reduced Irritation", "Improved Skin Tone"].map(
                  (benefit, index) => (
                    <span key={index} className="bg-background px-3 py-1 rounded-full text-sm">
                      {benefit}
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

