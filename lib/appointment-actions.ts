"use server";

import { Resend } from "resend";
import { v4 as uuidv4 } from "uuid";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// --- Service durations in minutes ---
const SERVICE_DURATIONS: Record<string, number> = {
  "Haircut": 30,
  "Beard Trim": 20,
  "Haircut + Beard": 45,
  "Kids Cut": 25,
  "Shape Up": 15,
  "Coloring": 60,
  "Wash & Style": 20,
  default: 30,
};

// --- Create ICS calendar file ---
function createICS({
  appointmentId,
  name,
  service,
  date,
  time,
  cancelUrl,
  rescheduleUrl,
}: {
  appointmentId: string;
  name: string;
  service: string;
  date: string;
  time: string;
  cancelUrl: string;
  rescheduleUrl: string;
}) {
  const duration = SERVICE_DURATIONS[service] || SERVICE_DURATIONS.default;

  const start = new Date(`${date}T${time}:00`);
  const end = new Date(start.getTime() + duration * 60 * 1000);

  const format = (d: Date) =>
    d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  return `
BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
PRODID:-//Elite Cuts//Booking Calendar//EN
METHOD:REQUEST

BEGIN:VEVENT
UID:${appointmentId}
DTSTAMP:${format(new Date())}
DTSTART:${format(start)}
DTEND:${format(end)}
SUMMARY:${service} Appointment at Elite Cuts
LOCATION:Elite Cuts Barbershop
DESCRIPTION:Appointment for ${name} at Elite Cuts.
URL:${rescheduleUrl}
X-ALT-DESC;FMTTYPE=text/html:
  <html>
    <body>
      <p>Appointment for ${name} at Elite Cuts.</p>
      <p><a href="${cancelUrl}">Cancel Appointment</a></p>
      <p><a href="${rescheduleUrl}">Reschedule Appointment</a></p>
    </body>
  </html>

BEGIN:VALARM
TRIGGER:-P1D
ACTION:DISPLAY
DESCRIPTION:Reminder: You have an appointment at Elite Cuts in 24 hours.
END:VALARM

END:VEVENT
END:VCALENDAR
`.trim();
}

// --- Validation schema ---
const appointmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .transform((val) => val.replace(/\D/g, ""))
    .refine((val) => val.length >= 10, "Phone number must have at least 10 digits"),
  service: z.string().min(1, "Service is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  notes: z.string().optional(),
});

// --- Book appointment function ---
export async function bookAppointment(formData: FormData) {
  try {
    const validationResult = appointmentSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      date: formData.get("date"),
      time: formData.get("timeSlot"),
      notes: formData.get("notes"),
    });

    if (!validationResult.success) {
      console.error("Validation error:", validationResult.error);
      throw new Error(validationResult.error.issues[0].message);
    }

    const { name, email, phone, service, date, time, notes } = validationResult.data;
    const appointmentId = uuidv4();

    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) {
      throw new Error("Invalid date format. Please select a valid date.");
    }

    const formattedDate = dateObj.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const cancelUrl = `https://yourwebsite.com/booking/cancel/${appointmentId}`;
    const rescheduleUrl = `https://yourwebsite.com/booking/reschedule/${appointmentId}`;

    // --- Send confirmation email with ICS ---
    try {
      await resend.emails.send({
        from: "appointments@elitecuts.com",
        to: email,
        subject: "Appointment Confirmation - Elite Cuts",
        html: `
          <h1>Appointment Confirmation</h1>
          <p>Dear ${name},</p>
          <p>Your appointment has been confirmed:</p>
          <ul>
            <li><strong>Service:</strong> ${service}</li>
            <li><strong>Date:</strong> ${formattedDate}</li>
            <li><strong>Time:</strong> ${time}</li>
            <li><strong>Appointment ID:</strong> ${appointmentId}</li>
          </ul>
          <p>
            <a href="${rescheduleUrl}">Reschedule Appointment</a> |
            <a href="${cancelUrl}">Cancel Appointment</a>
          </p>
          <p>An event file has been attached so you can add this appointment to your calendar.</p>
        `,
        attachments: [
          {
            filename: "appointment.ics",
            content: createICS({
              appointmentId,
              name,
              service,
              date,
              time,
              cancelUrl,
              rescheduleUrl,
            }),
            contentType: "text/calendar",
          },
        ],
      });
      console.log("Confirmation email sent to client successfully");
    } catch (emailError) {
      console.error("Failed to send confirmation email to client:", emailError);
    }

    // --- Notify barbershop ---
    try {
      await resend.emails.send({
        from: "notifications@elitecuts.com",
        to: "shuttle876@gmail.com",
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
      });
      console.log("Notification email sent to barbershop successfully");
    } catch (emailError) {
      console.error("Failed to send notification email to barbershop:", emailError);
    }

    revalidatePath("/booking");
    return { success: true, appointmentId };
  } catch (error) {
    console.error("Failed to book appointment:", error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Failed to book appointment. Please try again later.");
  }
}
