import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scissors, BeakerIcon as Beard, SprayCanIcon as Spray, Droplet, Palette, BabyIcon as Child } from "lucide-react"

export const metadata: Metadata = {
  title: "Services | Elite Cuts Barbershop",
  description: "Explore our premium barbershop services including haircuts, beard trims, styling, and more.",
}

const allServices = [
  {
    title: "Haircut",
    description: "Precision haircut tailored to your style and preference",
    price: "$30",
    icon: Scissors,
    duration: "30 min",
    slug: "haircut",
  },
  {
    title: "Beard Trim",
    description: "Expert beard shaping and styling for a refined look",
    price: "$20",
    icon: Beard,
    duration: "20 min",
    slug: "beard-trim",
  },
  {
    title: "Hair Styling",
    description: "Professional styling with premium products",
    price: "$25",
    icon: Spray,
    duration: "25 min",
    slug: "hair-styling",
  },
  {
    title: "Hot Towel Shave",
    description: "Luxurious traditional hot towel shave experience",
    price: "$35",
    icon: Droplet,
    duration: "40 min",
    slug: "hot-towel-shave",
  },
  {
    title: "Hair Coloring",
    description: "Professional color services for a refreshed, natural look",
    price: "$45+",
    icon: Palette,
    duration: "45-90 min",
    slug: "hair-coloring",
  },
  {
    title: "Kids Haircut",
    description: "Gentle, fun haircuts in a kid-friendly environment",
    price: "$20",
    icon: Child,
    duration: "20-30 min",
    slug: "kids-haircut",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Premium grooming services tailored to your style and preference
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>{service.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{service.duration}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/services/${service.slug}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Looking for a Custom Service?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We offer personalized grooming solutions tailored to your specific needs. Contact us to discuss your
              requirements.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Premium Products</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Elite Cuts, we use only the finest grooming products to ensure exceptional results. Our selection
                includes premium brands known for their quality ingredients and performance.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our barbers can recommend the perfect products for your hair type and style, helping you maintain your
                look between visits.
              </p>
              <Button asChild>
                <Link href="/booking">Book an Appointment</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=800&width=800&text=Premium+Products"
                alt="Premium barbershop products"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

