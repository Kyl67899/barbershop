import Link from "next/link"
import { ArrowUpRight, Instagram } from "lucide-react"

const links = [
  { name: "Services", href: "/services" }, { name: "About", href: "/about" }, { name: "Gallery", href: "/gallery" },
  { name: "Testimonials", href: "/testimonials" }, { name: "Booking", href: "/booking" }, { name: "Contact", href: "/contact" },
]

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-20 sm:px-8 lg:px-10 lg:pt-28">
        <div className="flex flex-col gap-12 border-b border-white/12 pb-16 lg:flex-row lg:items-end lg:justify-between">
          <div><p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-primary">Your chair is waiting</p><h2 className="max-w-4xl text-balance font-serif text-5xl leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-8xl">Walk in ordinary.<br /><span className="italic text-primary">Leave undeniable.</span></h2></div>
          <Link href="/booking" className="group flex size-32 shrink-0 items-center justify-center rounded-full bg-primary text-center text-[10px] font-bold uppercase tracking-[0.18em] text-primary-foreground transition-transform hover:rotate-6 hover:scale-105">Book a chair<ArrowUpRight className="ml-1 size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
        </div>

        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div><Link href="/" className="font-serif text-3xl tracking-[0.12em] uppercase">Elite<span className="text-primary">Cuts</span></Link><p className="mt-5 max-w-xs text-sm leading-6 text-secondary-foreground/55">Precision grooming for men who understand that details are never small.</p><a href="#" aria-label="Elite Cuts on Instagram" className="mt-6 inline-flex size-10 items-center justify-center border border-white/15 transition-colors hover:border-primary hover:text-primary"><Instagram className="size-4" /></a></div>
          <div><p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-primary">Navigate</p><nav className="grid grid-cols-2 gap-x-8 gap-y-3">{links.map((link) => <Link key={link.name} href={link.href} className="text-sm text-secondary-foreground/58 transition-colors hover:text-primary">{link.name}</Link>)}</nav></div>
          <div><p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-primary">Visit</p><address className="not-italic text-sm leading-7 text-secondary-foreground/58">123 Barber Street<br />New York, NY 10001<br /><a href="tel:+11234567890" className="transition-colors hover:text-primary">(123) 456-7890</a></address><p className="mt-4 text-xs uppercase tracking-[0.15em] text-secondary-foreground/40">Mon–Sat · 9am–6pm</p></div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/12 pt-7 text-[10px] uppercase tracking-[0.16em] text-secondary-foreground/35 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Elite Cuts. All rights reserved.</p><a href="https://kylepprofile.dev" className="transition-colors hover:text-primary">Crafted by Kyle Parsotan</a></div>
      </div>
    </footer>
  )
}
