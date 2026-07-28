import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"
import { Reveal } from "@/components/motion-reveal"

const standards = ["Master barbers", "Premium products", "Considered consultation", "Immaculate space"]

export default function About() {
  return (
    <section id="about" className="overflow-hidden bg-secondary py-24 text-secondary-foreground sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:px-10">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image src="/images/elite-craft.png" alt="Master barber detailing a precision fade" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-8 right-0 bg-primary px-7 py-6 text-primary-foreground sm:right-8">
            <p className="font-serif text-5xl leading-none">15+</p>
            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em]">Years refining the craft</p>
          </div>
        </Reveal>

        <div className="lg:pl-10">
          <Reveal>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-primary">Our philosophy</p>
            <h2 className="text-balance font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-7xl">A cut should say something <span className="italic text-primary">before you do.</span></h2>
          </Reveal>
          <Reveal delay={0.12} className="mt-9 border-l border-primary pl-6">
            <p className="text-pretty text-base leading-7 text-secondary-foreground/68">Since 2008, Elite Cuts has paired old-school discipline with a distinctly modern point of view. We do not chase trends. We study proportion, texture, and character to create a look that belongs to you.</p>
          </Reveal>
          <Reveal delay={0.2} className="mt-10 grid gap-4 sm:grid-cols-2">
            {standards.map((item) => <div key={item} className="flex items-center gap-3 border-b border-white/12 pb-4 text-sm"><Check className="size-4 text-primary" />{item}</div>)}
          </Reveal>
          <Reveal delay={0.28} className="mt-10">
            <Link href="/about" className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">Discover our story <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
