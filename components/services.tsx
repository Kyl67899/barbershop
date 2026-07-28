import Link from "next/link"
import { ArrowUpRight, Clock3 } from "lucide-react"
import { Reveal } from "@/components/motion-reveal"

const services = [
  { number: "01", title: "Signature Cut", description: "Consultation, precision cut, and a finish tailored to how you actually live.", price: "$30", duration: "30 min", slug: "haircut" },
  { number: "02", title: "Beard Sculpt", description: "Intentional shaping, clean lines, and balance that complements your features.", price: "$20", duration: "20 min", slug: "beard-trim" },
  { number: "03", title: "Cut & Style", description: "A complete reset with premium products and expert styling direction.", price: "$25", duration: "25 min", slug: "hair-styling" },
  { number: "04", title: "Ritual Shave", description: "Hot towels, traditional technique, and a remarkably close, calm finish.", price: "$35", duration: "40 min", slug: "hot-towel-shave" },
]

export default function Services() {
  return (
    <section id="services" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="flex flex-col gap-8 border-b border-border pb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary">The menu</p>
            <h2 className="max-w-3xl text-balance font-serif text-5xl leading-[0.92] tracking-[-0.04em] sm:text-7xl">Classic craft.<br /><span className="italic text-muted-foreground">Modern attitude.</span></h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-6 text-muted-foreground">No rushed chairs. No one-size-fits-all cuts. Every service starts with your face, your hair, and your standard.</p>
        </Reveal>

        <div>
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.05}>
              <Link href={`/services/${service.slug}`} className="group grid gap-5 border-b border-border py-8 transition-colors hover:bg-card sm:grid-cols-[4rem_1fr_auto] sm:items-center sm:px-4 lg:grid-cols-[6rem_1fr_16rem_8rem]">
                <span className="text-xs font-bold tracking-[0.2em] text-primary">{service.number}</span>
                <div>
                  <h3 className="font-serif text-3xl tracking-tight transition-transform group-hover:translate-x-2 sm:text-4xl">{service.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground lg:hidden">{service.description}</p>
                </div>
                <p className="hidden text-sm leading-6 text-muted-foreground lg:block">{service.description}</p>
                <div className="flex items-center justify-between gap-6 sm:justify-end">
                  <span className="flex items-center gap-2 text-xs text-muted-foreground"><Clock3 className="size-4" />{service.duration}</span>
                  <span className="font-serif text-2xl text-primary">{service.price}</span>
                  <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 flex justify-end">
          <Link href="/services" className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]">Explore all services <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
        </Reveal>
      </div>
    </section>
  )
}
