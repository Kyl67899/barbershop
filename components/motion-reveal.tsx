"use client"

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion"
import type { ReactNode } from "react"

export function Reveal({ children, delay = 0, className, ...props }: HTMLMotionProps<"div"> & { children: ReactNode; delay?: number }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const MotionLink = motion.create("a")
