import type { Metadata } from "next"
import ServicePageClient from "../../../components/service-page-client"

export const metadata: Metadata = {
  title: "Hot Towel Shave | Elite Cuts Barbershop",
  description: "Luxurious traditional hot towel shave experience at Elite Cuts Barbershop.",
}

export default function HotTowelShavePage() {
  return (
    <ServicePageClient
      serviceName="Hot Towel Shave"
      description="Luxurious traditional hot towel shave experience"
      imageSrc="https://static.vecteezy.com/system/resources/thumbnails/006/199/995/small_2x/men-s-hairstyling-and-haircutting-in-a-barber-shop-or-hair-salon-photo.jpg"
      price="$35"
      duration="40 minutes"
      recommendedFor="Special occasions, relaxation, skin rejuvenation"
      whatIsIncluded={[
        "Multiple hot towel applications",
        "Pre-shave oil treatment",
        "Premium shaving cream application",
        "Straight razor shave with two passes",
        "Cold towel finish",
        "Aftershave balm and moisturizer",
        "Facial massage",
      ]}
      whyChooseUs="At Elite Cuts, our hot towel shave is more than just a service—it's an experience. This traditional barbering ritual provides not only the closest shave possible but also a moment of relaxation and self-care. Our barbers are specially trained in straight razor techniques, ensuring a safe, comfortable, and luxurious experience that modern razors simply can't match."
      benefits={["Closest Shave", "Skin Exfoliation", "Relaxation", "Reduced Irritation", "Improved Skin Tone"]}
    />
  )
}

