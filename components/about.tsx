import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/barber-at-work.jpg"
                alt="Barber at work"
                width={800}
                height={800}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary text-white p-6 rounded-lg hidden md:block">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm">Years of Experience</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Elite Cuts</h2>
            <div className="w-24 h-1 bg-primary mb-8"></div>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2008, Elite Cuts has been providing premium grooming services to discerning clients. Our team
              of expert barbers combines traditional techniques with modern styles to deliver exceptional results.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We believe that a great haircut is more than just a service—it&apos;s an experience. That&apos;s why
              we&apos;ve created a space where you can relax, unwind, and leave looking and feeling your best.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {["Premium Products", "Expert Barbers", "Clean Environment", "Modern Techniques"].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="text-primary h-5 w-5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

