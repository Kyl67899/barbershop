"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { sendContactForm } from "@/lib/actions"
import { toast } from "@/components/ui/use-toast"
import Map from "@/components/map"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const searchParams = useSearchParams()
  const formRef = useRef<HTMLFormElement>(null)

  // Form state
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  // Prefill form from URL parameters
  useEffect(() => {
    if (searchParams) {
      const nameParam = searchParams.get("name")
      const emailParam = searchParams.get("email")
      const subjectParam = searchParams.get("subject")
      const messageParam = searchParams.get("message")

      if (nameParam) setName(nameParam)
      if (emailParam) setEmail(emailParam)
      if (subjectParam) setSubject(subjectParam)
      if (messageParam) setMessage(messageParam)
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      await sendContactForm(formData)

      toast({
        title: "Message sent successfully!",
        description: "Thank you for contacting us. We'll get back to you as soon as possible.",
        variant: "default",
        className: "bg-green-50 border-green-200 text-green-800",
      })

      // Reset form using state
      setName("")
      setEmail("")
      setSubject("")
      setMessage("")

      // Reset the form if the ref is available
      if (formRef.current) {
        formRef.current.reset()
      }
    } catch (error) {
      console.error("Error sending contact form:", error)
      toast({
        title: "Error sending message",
        description: error instanceof Error ? error.message : "Please try again later or contact us directly by phone.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Have questions? Get in touch with us</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Name</Label>
                  <Input
                    id="contact-name"
                    name="name"
                    placeholder="Your name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border-0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-0"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-subject">Subject</Label>
                <Input
                  id="contact-subject"
                  name="subject"
                  placeholder="Subject"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="border-0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border-0"
                />
              </div>

              <Button type="submit" className="w-full bg-white text-black hover:bg-black hover:text-white" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-0">
                <CardContent className="flex items-start gap-4 pt-6">
                  <MapPin className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      123 Barber Street
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-0">
                <CardContent className="flex items-start gap-4 pt-6">
                  <Phone className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-muted-foreground">
                      (123) 456-7890
                      <br />
                      (123) 456-7891
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-0">
                <CardContent className="flex items-start gap-4 pt-6">
                  <Mail className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-muted-foreground">
                      info@elitecuts.com
                      <br />
                      booking@elitecuts.com
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-0">
                <CardContent className="flex items-start gap-4 pt-6">
                  <Clock className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Working Hours</h4>
                    <p className="text-muted-foreground">
                      Mon-Sat: 9am - 6pm
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 h-64 rounded-lg overflow-hidden">
              <Map
                address="123 Barber Street, New York, NY 10001"
                lat={40.7128}
                lng={-74.006}
                zoom={14}
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

