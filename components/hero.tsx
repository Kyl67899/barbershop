import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('https://th.bing.com/th/id/OIP.n85tZ-Gt820l8IKdjgTjzgHaFe?rs=1&pid=ImgDetMain')",
          filter: "brightness(0.4)",
        }}
      />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          <span className="block">ELITE CUTS</span>
          <span className="text-2xl md:text-3xl font-light block mt-2">PREMIUM BARBERSHOP</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Experience the art of grooming with our expert barbers and premium services
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-lg">
            <Link className="text-lg bg-black text-white border-white" href="/booking">Book Appointment</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-lg bg-transparent text-white border-white hover:bg-white hover:text-black"
          >
            <Link href="/services">Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

