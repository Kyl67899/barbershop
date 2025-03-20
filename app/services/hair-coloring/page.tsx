import type { Metadata } from "next"
import ServicePageClient from "../../../components/service-page-client"

export const metadata: Metadata = {
  title: "Hair Coloring | Elite Cuts Barbershop",
  description: "Professional hair coloring services for men at Elite Cuts Barbershop.",
}

export default function HairColoringPage() {
  return (
    <ServicePageClient
      serviceName="Hair Coloring"
      description="Professional color services for a refreshed, natural look"
      imageSrc="/images/hair-coloring-service.jpg"
      price="$45+"
      duration="45-90 minutes"
      recommendedFor="Gray coverage, refreshing your look, special occasions"
      whatIsIncluded={[
        "Color consultation",
        "Custom color formulation",
        "Professional application",
        "Processing time",
        "Shampoo and conditioning",
        "Styling",
        "Color care recommendations",
      ]}
      whyChooseUs="At Elite Cuts, we understand that changing your hair color is a significant decision. Our color specialists are trained in the latest techniques and use premium, ammonia-free products that minimize damage while delivering vibrant, long-lasting results. We take the time to understand your goals and create a custom color solution that enhances your natural features and fits your lifestyle."
      styles={["Gray Coverage", "Full Color", "Highlights", "Color Refresh", "Balayage"]}
    />
  )
}

