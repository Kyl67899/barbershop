"use server"

import { Resend } from "resend"
import { z } from "zod"
import { revalidatePath } from "next/cache"

const RESEND_API_KEY="re_SEBWmM8d_3RmbhyFtcfhKFWcQakLooxek"

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY || RESEND_API_KEY)

// Validation schema
const serviceInquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .transform((val) => val.replace(/\D/g, "")) // Remove all non-digit characters
    .refine((val) => val.length >= 10, "Phone number must have at least 10 digits"),
  service: z.string().min(1, "Service is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  preferredDate: z.string().optional(),
})

export async function submitServiceInquiry(formData: FormData) {
  try {
    // Validate form data
    const validationResult = serviceInquirySchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
      preferredDate: formData.get("preferredDate"),
    })

    if (!validationResult.success) {
      throw new Error(validationResult.error.errors[0].message)
    }

    const { name, email, phone, service, message, preferredDate } = validationResult.data

    // Send confirmation email to the client
    await resend.emails.send({
      from: "inquiries@elitecuts.com",
      to: email,
      subject: "Service Inquiry Confirmation - Elite Cuts",
      html: `
        <h1>Service Inquiry Confirmation</h1>
        <p>Dear ${name},</p>
        <p>Thank you for your interest in our ${service} service. We have received your inquiry and will get back to you shortly.</p>
        <p>Here's a summary of your inquiry:</p>
        <ul>
          <li><strong>Service:</strong> ${service}</li>
          ${preferredDate ? `<li><strong>Preferred Date:</strong> ${preferredDate}</li>` : ""}
          <li><strong>Message:</strong> ${message}</li>
        </ul>
        <p>If you have any additional questions, please feel free to contact us.</p>
        <p>Thank you for choosing Elite Cuts!</p>
      `,
    })

    // Send notification to the barbershop
    await resend.emails.send({
      from: "notifications@elitecuts.com",
      to: "shuttle876@gmail.com", // This would be the barbershop's email
      subject: `New Service Inquiry: ${service}`,
      html: `
        <h1>New Service Inquiry</h1>
        <p>A new service inquiry has been submitted:</p>
        <ul>
          <li><strong>Client:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Service:</strong> ${service}</li>
          ${preferredDate ? `<li><strong>Preferred Date:</strong> ${preferredDate}</li>` : ""}
          <li><strong>Message:</strong> ${message}</li>
        </ul>
      `,
    })

    revalidatePath("/services")
    return { success: true }
  } catch (error) {
    console.error("Failed to submit service inquiry:", error)
    if (error instanceof Error) {
      throw new Error(error.message)
    }
    throw new Error("Failed to submit service inquiry. Please try again later.")
  }
}

