import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Scissors, BeakerIcon as Beard, SprayCanIcon as Spray, Droplet } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
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
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a range of premium grooming services to keep you looking your best
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link href={`/services/${service.slug}`} key={index} className="block group">
              <Card className="border-none shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 h-full">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto bg-primary/10 p-4 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <div className="flex justify-center items-center gap-2 text-muted-foreground">
                    <span>{service.duration}</span>
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

