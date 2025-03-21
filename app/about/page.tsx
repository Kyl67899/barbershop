import type { Metadata } from "next"
import About from "@/components/about"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Elite Cuts Barbershop",
  description: "Learn about Elite Cuts Barbershop, our history, values, and expert team of barbers.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our story, our team, and our commitment to excellence
          </p>
        </div>
      </div>

      <About />

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expert Team</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the skilled professionals behind Elite Cuts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "John Smith", role: "Master Barber", experience: "15+ years" },
              { name: "Michael Johnson", role: "Style Specialist", experience: "10+ years" },
              { name: "David Williams", role: "Beard Expert", experience: "8+ years" },
            ].map((barber, index) => (
              <div key={index} className="text-center">
                <div className="relative mx-auto rounded-full overflow-hidden w-48 h-48 mb-6">
                  <Image
                    src={`/placeholder.svg?height=200&width=200&text=${barber.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}`}
                    alt={barber.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{barber.name}</h3>
                <p className="text-primary mb-2">{barber.role}</p>
                <p className="text-muted-foreground mb-4">{barber.experience} experience</p>
                <div className="flex justify-center gap-2">
                  {["Precision Cuts", "Styling", "Beard Grooming"].map((skill, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
              <div className="w-24 h-1 bg-primary mb-8"></div>
              <p className="text-lg text-muted-foreground mb-8">
                At Elite Cuts, we believe in providing more than just a haircut. We&apos;re committed to creating an
                experience that leaves you looking and feeling your best. Our core values guide everything we do.
              </p>

              <div className="space-y-4">
                {[
                  { title: "Excellence", desc: "We strive for perfection in every cut and service we provide." },
                  {
                    title: "Integrity",
                    desc: "We&apos;re honest, transparent, and committed to doing what&apos;s right.",
                  },
                  {
                    title: "Community",
                    desc: "We&apos;re proud to be part of our local community and give back whenever possible.",
                  },
                  { title: "Innovation", desc: "We continuously learn and adopt new techniques and styles." },
                ].map((value, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle className="text-primary h-6 w-6 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg">{value.title}</h3>
                      <p className="text-muted-foreground">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video overflow-hidden rounded-lg">
                <Image
                  src="https://wallpapercave.com/wp/wp3067027.jpg"
                  alt="Our barbershop"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

