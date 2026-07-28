import { Quote, Star } from "lucide-react"
import { getFeaturedTestimonials } from "@/lib/reviews"
import { Reveal } from "@/components/motion-reveal"

export default function Testimonials() {
  const testimonials = getFeaturedTestimonials()

  return (
    <section id="testimonials" className="bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="mb-14 grid gap-7 border-b border-border pb-10 md:grid-cols-2 md:items-end">
          <div><p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary">Word on the street</p><h2 className="font-serif text-5xl leading-[0.92] tracking-[-0.04em] sm:text-7xl">They came for a cut. <span className="italic text-muted-foreground">They stayed for the standard.</span></h2></div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground md:justify-self-end">Real words from clients who trust us with the details that shape how they show up.</p>
        </Reveal>

        {testimonials.length > 0 ? (
          <div className="grid gap-px bg-border md:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Reveal key={testimonial.id} delay={index * 0.08} className="flex h-full flex-col bg-background p-8 sm:p-10">
                <Quote className="mb-10 size-8 text-primary" />
                <blockquote className="flex-1 text-pretty font-serif text-2xl italic leading-snug">“{testimonial.content}”</blockquote>
                <div className="mt-10 flex items-end justify-between border-t border-border pt-5">
                  <div><p className="text-sm font-bold uppercase tracking-[0.12em]">{testimonial.name}</p><p className="mt-1 text-xs text-muted-foreground">Verified client</p></div>
                  <div className="flex" aria-label={`${testimonial.rating} out of 5 stars`}>{Array.from({ length: 5 }).map((_, i) => <Star key={i} className={`size-3.5 ${i < testimonial.rating ? "fill-primary text-primary" : "text-border"}`} />)}</div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : <p className="border border-border p-10 text-center text-muted-foreground">Client stories are being curated.</p>}
      </div>
    </section>
  )
}
