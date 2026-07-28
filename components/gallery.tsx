import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/motion-reveal"

const images = [
  { src: "/images/elite-shave.png", alt: "Traditional hot towel shave", label: "The ritual", className: "md:col-span-7 md:row-span-2" },
  { src: "/images/elite-interior.png", alt: "Elite Cuts interior", label: "The space", className: "md:col-span-5" },
  { src: "/images/elite-hero.png", alt: "Precision fade in progress", label: "The finish", className: "md:col-span-5" },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="mb-12 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary">Inside Elite</p><h2 className="font-serif text-5xl leading-none tracking-[-0.04em] sm:text-7xl">Proof is in<br /><span className="italic text-muted-foreground">the details.</span></h2></div>
          <Link href="/gallery" className="group inline-flex w-fit items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]">View the full gallery <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
        </Reveal>
        <div className="grid auto-rows-[18rem] gap-4 md:grid-cols-12 md:auto-rows-[16rem]">
          {images.map((image, index) => (
            <Reveal key={image.label} delay={index * 0.1} className={`group relative overflow-hidden ${image.className}`}>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-secondary/10 transition-colors group-hover:bg-secondary/35" />
              <p className="absolute bottom-5 left-5 text-xs font-bold uppercase tracking-[0.22em] text-secondary-foreground">{image.label}</p>
              <span className="absolute right-5 top-5 flex size-10 translate-y-2 items-center justify-center bg-primary text-primary-foreground opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"><ArrowUpRight className="size-4" /></span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
