import type { Metadata } from "next"
import ServicePageClient from "../../../components/service-page-client"

export const metadata: Metadata = {
  title: "Beard Trim | Elite Cuts Barbershop",
  description: "Expert beard shaping and styling for a refined look at Elite Cuts Barbershop.",
}

export default function BeardTrimPage() {
  return (
    <ServicePageClient
      serviceName="Beard Trim"
      description="Expert beard shaping and styling for a refined look"
      imageSrc="/images/beard-trim-service.jpg"
      price="$20"
      duration="20 minutes"
      recommendedFor="All beard types and lengths"
      whatIsIncluded={[
        "Beard style consultation",
        "Precision trimming and shaping",
        "Straight razor line-up",
        "Hot towel treatment",
        "Beard oil and balm application",
        "Styling and grooming tips",
      ]}
      whyChooseUs="At Elite Cuts, we understand that your beard is an important part of your identity and style. Our barbers are specially trained in beard care and styling, ensuring you receive a trim that enhances your natural features while maintaining the health of your facial hair. We use premium tools and products to ensure your beard looks and feels its best."
      styles={["Full Beard", "Goatee", "Van Dyke", "Stubble", "Corporate"]}
    />
  )
}

