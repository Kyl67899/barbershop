import type { Metadata } from "next"
import ServicePageClient from "../../../components/service-page-client"

export const metadata: Metadata = {
  title: "Hair Styling | Elite Cuts Barbershop",
  description: "Professional hair styling with premium products at Elite Cuts Barbershop.",
}

export default function HairStylingPage() {
  return (
    <ServicePageClient
      serviceName="Hair Styling"
      description="Professional styling with premium products"
      imageSrc="/images/hair-styling-service.jpg"
      price="$25"
      duration="25 minutes"
      recommendedFor="Special occasions, professional events, photoshoots"
      whatIsIncluded={[
        "Style consultation",
        "Shampoo and conditioning",
        "Blow drying and styling",
        "Premium product application",
        "Finishing touches",
        "Styling tips for home maintenance",
      ]}
      whyChooseUs="At Elite Cuts, we understand that the right styling can transform your look and boost your confidence. Our stylists are trained in the latest techniques and use only premium products to ensure your hair not only looks great but stays healthy. Whether you're preparing for a special event or just want to refresh your everyday look, our styling service will leave you looking and feeling your best."
      styles={["Slick Back", "Textured Quiff", "Modern Pompadour", "Natural Texture", "Classic Side Part"]}
    />
  )
}

