"use server"

import { Resend } from "resend"
import { z } from "zod"
import { revalidatePath } from "next/cache"

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

// Validation schema for contact form
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function sendContactForm(formData: FormData) {
  try {
    const validationResult = contactFormSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    })

    if (!validationResult.success) {
      throw new Error(validationResult.error.issues[0].message)
    }

    const { name, email, subject, message } = validationResult.data

    // Send confirmation email to the client
    await resend.emails.send({
      from: "contact@elitecuts.com",
      to: email,
      subject: "Contact Form Submission Confirmation - Elite Cuts",
      html: `
        <h1>Contact Form Submission Confirmation</h1>
        <p>Dear ${name},</p>
        <p>Thank you for contacting Elite Cuts. We have received your message and will get back to you shortly.</p>

        <h2>Message Summary</h2>
        <ul>
          <li><strong>Subject:</strong> ${subject}</li>
          <li><strong>Message:</strong> ${message}</li>
        </ul>

        <p>If you have more questions, feel free to reply to this email.</p>
      `,
    })

    // Send notification to the barbershop
    await resend.emails.send({
      from: "notifications@elitecuts.com",
      to: "shuttle876@gmail.com",
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Subject:</strong> ${subject}</li>
          <li><strong>Message:</strong> ${message}</li>
        </ul>
      `,
    })

    revalidatePath("/contact")
    return { success: true }
  } catch (error) {
    console.error("Failed to send contact form:", error)
    if (error instanceof Error) {
      throw new Error(error.message)
    }
    throw new Error("Failed to send contact form. Please try again later.")
  }
}

// Validation schema for newsletter subscription
const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
})

export async function subscribeToNewsletter(formData: FormData) {
  try {
    const validationResult = newsletterSchema.safeParse({
      email: formData.get("email"),
    })

    if (!validationResult.success) {
      throw new Error(validationResult.error.issues[0].message)
    }

    const { email } = validationResult.data

    // Send confirmation email to the subscriber
    await resend.emails.send({
      from: "newsletter@elitecuts.com",
      to: email,
      subject: "Newsletter Subscription Confirmation - Elite Cuts",
      html: `
        <h1>Newsletter Subscription Confirmation</h1>
        <p>Thank you for subscribing to the Elite Cuts newsletter!</p>
      `,
    })

    // Notify barbershop
    await resend.emails.send({
      from: "notifications@elitecuts.com",
      to: "shuttle876@gmail.com",
      subject: "New Newsletter Subscription",
      html: `
        <h1>New Newsletter Subscription</h1>
        <p><strong>Email:</strong> ${email}</p>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("Failed to subscribe to newsletter:", error)
    if (error instanceof Error) {
      throw new Error(error.message)
    }
    throw new Error("Failed to subscribe to newsletter. Please try again later.")
  }
}
