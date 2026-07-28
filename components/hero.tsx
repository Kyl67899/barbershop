"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const enter = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 36 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section className="grain relative min-h-[94svh] overflow-hidden bg-secondary text-secondary-foreground">
      <div className="absolute inset-0 lg:left-[48%]">
        <motion.div initial={reduceMotion ? false : { scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} className="relative size-full">
          <Image src="/images/elite-hero.png" alt="Elite Cuts barber creating a precision fade" fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover object-center" />
        </motion.div>
        <div className="absolute inset-0 bg-secondary/45 lg:bg-gradient-to-r lg:from-secondary lg:via-secondary/25 lg:to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[94svh] max-w-7xl flex-col justify-end px-5 pb-12 pt-32 sm:px-8 lg:justify-center lg:px-10 lg:pb-20">
        <div className="max-w-3xl">
          <motion.p {...enter(0.1)} className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.26em] text-primary">
            <span className="h-px w-10 bg-primary" /> New York · Est. 2008
          </motion.p>
          <motion.h1 {...enter(0.2)} className="text-balance font-serif text-[clamp(4.2rem,12vw,9.5rem)] font-medium italic leading-[0.72] tracking-[-0.07em]">
            Sharp looks.
            <span className="mt-4 block pl-[10vw] text-primary lg:pl-40">Sharper</span>
            <span className="mt-3 block">standards.</span>
          </motion.h1>
          <motion.div {...enter(0.38)} className="mt-10 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between lg:max-w-2xl">
            <p className="max-w-sm text-pretty text-sm leading-6 text-secondary-foreground/70 sm:text-base">
              Precision cuts, considered details, and an atmosphere built for men who refuse to blend in.
            </p>
            <Link href="/booking" className="group inline-flex w-fit items-center gap-3 bg-primary px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:-translate-y-1">
              Reserve your chair <ArrowUpRight data-icon="inline-end" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>
        </div>

        <motion.a {...enter(0.62)} href="#services" className="absolute bottom-12 right-8 hidden items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-secondary-foreground/60 transition-colors hover:text-primary lg:flex">
          Explore the craft <ArrowDown className="size-4" />
        </motion.a>
      </div>
      <div className="absolute bottom-0 left-0 hidden h-24 w-px bg-primary lg:block" />
    </section>
  )
}
