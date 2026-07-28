"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", dropdown: true },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
]

const serviceLinks = [
  { name: "Haircut", href: "/services/haircut" },
  { name: "Beard Trim", href: "/services/beard-trim" },
  { name: "Hair Styling", href: "/services/hair-styling" },
  { name: "Hot Towel Shave", href: "/services/hot-towel-shave" },
  { name: "Hair Coloring", href: "/services/hair-coloring" },
  { name: "Kids Haircut", href: "/services/kids-haircut" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }, [pathname])

  const solid = isScrolled || !isHome || isMenuOpen

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        solid
          ? "bg-secondary/95 text-secondary-foreground backdrop-blur-md border-b border-white/10 py-4"
          : "bg-transparent text-secondary-foreground py-6",
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
        <Link href="/" className="group flex items-baseline gap-2" aria-label="Elite Cuts home">
          <span className="font-serif text-2xl italic leading-none text-primary">E</span>
          <span className="font-serif text-xl tracking-[0.2em] uppercase leading-none">
            Elite<span className="text-primary">Cuts</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:text-primary",
                    pathname.startsWith("/services") && "text-primary",
                  )}
                >
                  {link.name}
                  <ChevronDown className={cn("size-3.5 transition-transform", isServicesOpen && "rotate-180")} />
                </Link>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-full w-56 -translate-x-1/2 pt-4"
                    >
                      <div className="overflow-hidden border border-border bg-background text-foreground shadow-2xl">
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="flex items-center justify-between px-5 py-3 text-sm transition-colors hover:bg-secondary hover:text-secondary-foreground"
                          >
                            {service.name}
                            <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:text-primary",
                  pathname === link.href && "text-primary",
                )}
              >
                {link.name}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/booking"
            className="group inline-flex items-center gap-2 bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Book Now
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          className="lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-secondary text-secondary-foreground lg:hidden"
          >
            <nav className="container mx-auto flex flex-col gap-1 px-4 py-6" aria-label="Mobile">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.name} className="flex flex-col">
                    <button
                      onClick={() => setIsServicesOpen((v) => !v)}
                      className="flex items-center justify-between py-3 text-sm uppercase tracking-[0.18em]"
                    >
                      {link.name}
                      <ChevronDown className={cn("size-4 transition-transform", isServicesOpen && "rotate-180")} />
                    </button>
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex flex-col overflow-hidden border-l border-white/15 pl-4"
                        >
                          {serviceLinks.map((service) => (
                            <Link key={service.name} href={service.href} className="py-2 text-sm text-secondary-foreground/70 hover:text-primary">
                              {service.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn("py-3 text-sm uppercase tracking-[0.18em] hover:text-primary", pathname === link.href && "text-primary")}
                  >
                    {link.name}
                  </Link>
                ),
              )}
              <Link
                href="/booking"
                className="mt-4 inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground"
              >
                Book Now <ArrowUpRight className="size-4" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
