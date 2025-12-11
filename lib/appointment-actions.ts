"use server"

import { Resend } from "resend"
import { v4 as uuidv4 } from "uuid"
import { revalidatePath } from "next/cache"
import { z } from "zod"

// Initialize Resend with error handling
const resend = new Resend(process.env.RESEND_API_KEY)

// Validation schema
const appointmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .transform((val) => val.replace(/\D/g, "")) // Remove all non-digit characters
    .refine((val) => val.length >= 10, "Phone number must have at least 10 digits"),
  service: z.string().min(1, "Service is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  notes: z.string().optional(),
})

export async function bookAppointment(formData: FormData) {
  try {
    // Validate form data
    const validationResult = appointmentSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      date: formData.get("date"),
      time: formData.get("timeSlot"),
      notes: formData.get("notes"),
    })

    if (!validationResult.success) {
      console.error("Validation error:", validationResult.error)
      throw new Error(validationResult.error.issues[0].message)
    }

    const { name, email, phone, service, date, time, notes } = validationResult.data

    // Generate a unique ID for the appointment
    const appointmentId = uuidv4();

    // Parse the date string to a Date object
    let dateObj: Date
    try {
      dateObj = new Date(date)
      if (isNaN(dateObj.getTime())) {
        throw new Error("Invalid date format")
      }
    } catch (error) {
      console.error("Date parsing error:", error, "Date string:", date)
      throw new Error("Invalid date format. Please select a valid date.")
    }

    const formattedDate = dateObj.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })

    // Send confirmation email to the client
    try {
      await resend.emails.send({
        from: "appointments@elitecuts.com",
        to: email,
        subject: "Appointment Confirmation - Elite Cuts",
        html: `
          <h1>Appointment Confirmation</h1>
          <p>Dear ${name},</p>
          <p>Your appointment has been confirmed for the following:</p>
          <ul>
            <li><strong>Service:</strong> ${service}</li>
            <li><strong>Date:</strong> ${formattedDate}</li>
            <li><strong>Time:</strong> ${time}</li>
            <li><strong>Appointment ID:</strong> ${appointmentId}</li>
          </ul>
          ${notes ? `<p><strong>Notes:</strong> ${notes}</p>` : ""}
          <p>If you need to reschedule or cancel, please contact us directly at (123) 456-7890 or reply to this email.</p>
          <p>Thank you for choosing Elite Cuts!</p>
        `,
      })
      console.log("Confirmation email sent to client successfully")
    } catch (emailError) {
      console.error("Failed to send confirmation email to client:", emailError)
      // Continue even if client email fails
    }

    // Send notification to the barbershop
    try {
      await resend.emails.send({
        from: "notifications@elitecuts.com",
        to: "shuttle876@gmail.com", // This would be the barbershop's email
        subject: "New Appointment Booking",
        html: `
          <h1>New Appointment</h1>
          <p>A new appointment has been booked:</p>
          <ul>
            <li><strong>Client:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Service:</strong> ${service}</li>
            <li><strong>Date:</strong> ${formattedDate}</li>
            <li><strong>Time:</strong> ${time}</li>
            <li><strong>Appointment ID:</strong> ${appointmentId}</li>
            ${notes ? `<li><strong>Notes:</strong> ${notes}</li>` : ""}
          </ul>
        `,
      })
      console.log("Notification email sent to barbershop successfully")
    } catch (emailError) {
      console.error("Failed to send notification email to barbershop:", emailError)
      // Continue even if barbershop email fails
    }

    revalidatePath("/booking")
    return { success: true, appointmentId }
  } catch (error) {
    console.error("Failed to book appointment:", error)
    if (error instanceof Error) {
      throw new Error(error.message)
    }
    throw new Error("Failed to book appointment. Please try again later.")
  }
}

