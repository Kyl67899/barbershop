import type { Metadata } from "next"
import ServicePageClient from "@/components/service-page-client"

export const metadata: Metadata = {
  title: "Kids Haircut | Elite Cuts Barbershop",
  description: "Gentle, fun haircuts for children at Elite Cuts Barbershop.",
}

export default function KidsHaircutPage() {
  return (
    <ServicePageClient
      serviceName="Kids Haircut"
      description="Gentle, fun haircuts in a kid-friendly environment"
      imageSrc="/images/kids-haircut-service.jpg"
      price="$20"
      duration="20-30 minutes"
      recommendedFor="Children ages 2-12"
      whatIsIncluded={[
        "Consultation with parent and child",
        "Kid-friendly approach and environment",
        "Precision haircut",
        "Styling appropriate for age",
        "Complimentary treat after the haircut",
        "First haircut certificate (for first-time clients)",
      ]}
      whyChooseUs="At Elite Cuts, we understand that a child's first experiences with haircuts can shape their attitudes for years to come. Our barbers are not only skilled in cutting children's hair but also in creating a positive, fun atmosphere that helps children feel comfortable and confident. We take pride in our ability to work with children of all ages and temperaments, ensuring a great haircut and a great experience."
      styles={["Classic Cut", "Fade", "Textured Top", "Bowl Cut", "Mohawk"]}
    />
  )
}

