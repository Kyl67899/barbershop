import type { Metadata } from "next"
import ServicePageClient from "../../../components/service-page-client"

export const metadata: Metadata = {
  title: "Haircut | Elite Cuts Barbershop",
  description: "Premium haircut services tailored to your style and preference at Elite Cuts Barbershop.",
}

export default function HaircutPage() {
  return (
    <ServicePageClient
      serviceName="Premium Haircut"
      description="Precision haircut tailored to your style and preference"
      imageSrc="https://th.bing.com/th/id/OIP.wb91Ot3of2gvobjP18ujWgHaFD?rs=1&pid=ImgDetMain"
      price="$30"
      duration="30 minutes"
      recommendedFor="All hair types and styles"
      whatIsIncluded={[
        "Personal style consultation",
        "Shampoo and conditioning",
        "Precision haircut",
        "Hot towel refreshment",
        "Styling with premium products",
        "Styling tips and product recommendations",
      ]}
      whyChooseUs="At Elite Cuts, we pride ourselves on delivering haircuts that not only meet but exceed your expectations. Our barbers are trained in the latest techniques and styles, ensuring you receive a cut that's both contemporary and tailored to your individual needs. We use only the finest tools and products to ensure a superior experience and result."
      styles={["Fade", "Undercut", "Pompadour", "Crew Cut", "Textured Crop"]}
    />
  )
}

