"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { useSearchParams } from "next/navigation"
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { sendContactForm } from "@/lib/actions"
import { toast } from "@/components/ui/use-toast"
import Map from "@/components/map"
import { Reveal } from "@/components/motion-reveal"

const details = [
  { icon: MapPin, label: "Find us", value: <>123 Barber Street<br />New York, NY 10001</> },
  { icon: Phone, label: "Call us", value: <a href="tel:+11234567890">(123) 456-7890</a> },
  { icon: Mail, label: "Write us", value: <a href="mailto:info@elitecuts.com">info@elitecuts.com</a> },
  { icon: Clock, label: "Hours", value: <>Mon–Sat · 9am–6pm<br />Sunday · Closed</> },
]

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const searchParams = useSearchParams()
  const formRef = useRef<HTMLFormElement>(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (!searchParams) return
    setName(searchParams.get("name") || "")
    setEmail(searchParams.get("email") || "")
    setSubject(searchParams.get("subject") || "")
    setMessage(searchParams.get("message") || "")
  }, [searchParams])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    try {
      await sendContactForm(new FormData(event.currentTarget))
      toast({ title: "Message sent", description: "We'll get back to you as soon as possible." })
      setName(""); setEmail(""); setSubject(""); setMessage(""); formRef.current?.reset()
    } catch (error) {
      toast({ title: "Message not sent", description: error instanceof Error ? error.message : "Please try again later.", variant: "destructive" })
    } finally { setIsSubmitting(false) }
  }

  const fieldClass = "h-12 rounded-none border-0 border-b border-border bg-transparent px-0 shadow-none focus-visible:ring-0 focus-visible:border-primary"

  return (
    <section id="contact" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="mb-14"><p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary">Say hello</p><h2 className="max-w-4xl text-balance font-serif text-5xl leading-[0.92] tracking-[-0.04em] sm:text-7xl">Questions, ideas, or a look in mind? <span className="italic text-muted-foreground">Let&apos;s talk.</span></h2></Reveal>
        <div className="grid gap-16 lg:grid-cols-[1.1fr_.9fr]">
          <Reveal>
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-7">
              <div className="grid gap-7 sm:grid-cols-2">
                <div className="flex flex-col gap-2"><Label htmlFor="contact-name" className="text-xs uppercase tracking-[0.16em]">Name</Label><Input id="contact-name" name="name" required value={name} onChange={(e) => setName(e.target.value)} className={fieldClass} /></div>
                <div className="flex flex-col gap-2"><Label htmlFor="contact-email" className="text-xs uppercase tracking-[0.16em]">Email</Label><Input id="contact-email" name="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={fieldClass} /></div>
              </div>
              <div className="flex flex-col gap-2"><Label htmlFor="contact-subject" className="text-xs uppercase tracking-[0.16em]">Subject</Label><Input id="contact-subject" name="subject" required value={subject} onChange={(e) => setSubject(e.target.value)} className={fieldClass} /></div>
              <div className="flex flex-col gap-2"><Label htmlFor="contact-message" className="text-xs uppercase tracking-[0.16em]">Message</Label><Textarea id="contact-message" name="message" rows={5} required value={message} onChange={(e) => setMessage(e.target.value)} className="resize-none rounded-none border-0 border-b border-border bg-transparent px-0 shadow-none focus-visible:border-primary focus-visible:ring-0" /></div>
              <Button type="submit" disabled={isSubmitting} className="h-14 w-full rounded-none bg-secondary text-xs font-bold uppercase tracking-[0.2em] text-secondary-foreground hover:bg-primary hover:text-primary-foreground">{isSubmitting ? "Sending…" : "Send message"}<ArrowUpRight data-icon="inline-end" /></Button>
            </form>
          </Reveal>
          <Reveal delay={0.12} className="flex flex-col gap-8">
            <div className="grid gap-px bg-border sm:grid-cols-2">{details.map((detail) => <div key={detail.label} className="bg-card p-6"><detail.icon className="mb-5 size-5 text-primary" /><p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{detail.label}</p><div className="text-sm leading-6">{detail.value}</div></div>)}</div>
            <div className="h-72 overflow-hidden border border-border"><Map address="123 Barber Street, New York, NY 10001" lat={40.7128} lng={-74.006} zoom={14} height="100%" /></div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
