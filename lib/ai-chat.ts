import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

// Define the type for our booking data
export type BookingData = {
  service?: string
  date?: string
  time?: string
  name?: string
  email?: string
  phone?: string
  notes?: string
}

// Define the type for JotForm data
export type JotFormData = {
  name?: string
  email?: string
  phone?: string
  service?: string
  message?: string
  type?: "contact" | "booking"
}

// Function to validate booking data and identify missing fields
export function validateBookingData(data: BookingData): {
  isComplete: boolean
  missingFields: string[]
} {
  const requiredFields = ["service", "date", "time", "name", "email", "phone"]
  const missingFields = requiredFields.filter((field) => !data[field as keyof BookingData])

  return {
    isComplete: missingFields.length === 0,
    missingFields,
  }
}

// Function to validate JotForm data and identify missing fields
export function validateJotFormData(data: JotFormData): {
  isComplete: boolean
  missingFields: string[]
} {
  // Different required fields based on form type
  const requiredFields = data.type === "contact" ? ["name", "email", "message"] : ["name", "email", "phone", "service"]

  const missingFields = requiredFields.filter((field) => !data[field as keyof JotFormData])

  return {
    isComplete: missingFields.length === 0,
    missingFields,
  }
}

// Rule-based response generator as fallback
export function generateRuleBasedResponse(
  userInput: string,
  chatHistory: { role: "user" | "assistant"; content: string }[],
  bookingData?: BookingData,
  jotFormData?: JotFormData,
  isJotFormFlow?: boolean,
): string {
  const input = userInput.toLowerCase()

  // Check if we're in a JotForm flow and have partial data
  if (isJotFormFlow && jotFormData && Object.keys(jotFormData).length > 0) {
    const { missingFields } = validateJotFormData(jotFormData)

    // If we have missing fields, ask for the first missing one
    if (missingFields.length > 0) {
      const nextField = missingFields[0]

      switch (nextField) {
        case "name":
          return "Could you please provide your name for the form?"
        case "email":
          return "What's your email address so we can contact you?"
        case "phone":
          return "What's your phone number for the form?"
        case "service":
          return "Which service are you interested in? We offer haircuts, beard trims, hair styling, hot towel shaves, hair coloring, and kids haircuts."
        default:
          return "Do you have any specific message or questions you'd like to include in the form?"
      }
    }

    // If we have all required fields
    return `Perfect! I've collected all the information for your form. I'll now prepare to submit it for you.`
  }

  // Check if we're in a booking flow and have partial data
  if (bookingData && Object.keys(bookingData).length > 0) {
    const { missingFields } = validateBookingData(bookingData)

    // If we have missing fields, ask for the first missing one
    if (missingFields.length > 0) {
      const nextField = missingFields[0]

      switch (nextField) {
        case "service":
          return "What service would you like to book? We offer haircuts, beard trims, hair styling, hot towel shaves, hair coloring, and kids haircuts."
        case "date":
          return `Great! You've selected ${bookingData.service}. What date would you prefer? (e.g., tomorrow, next Monday, June 15)`
        case "time":
          return "What time would you prefer? We're open from 9:00 AM to 6:00 PM, Monday through Saturday."
        case "name":
          return "Could you please provide your name?"
        case "email":
          return "What's your email address?"
        case "phone":
          return "What's your phone number?"
        default:
          return "Do you have any special requests or notes for your appointment?"
      }
    }

    // If we have all required fields
    return `Perfect! I've collected all the information for your ${bookingData.service} appointment. Let me confirm the details before we proceed.`
  }

  // JotForm related queries
  if (
    input.includes("form") ||
    input.includes("inquiry") ||
    input.includes("question") ||
    input.includes("contact us")
  ) {
    return "I'd be happy to help you fill out a contact form. I'll need some information from you. First, could you tell me your name?"
  }

  // Booking related queries
  if (input.includes("book") || input.includes("appointment") || input.includes("schedule")) {
    return "I'd be happy to help you book an appointment! What service are you interested in? We offer haircuts, beard trims, hair styling, hot towel shaves, hair coloring, and kids haircuts."
  }

  // Service related queries
  if (input.includes("service") || input.includes("offer")) {
    return "We offer a variety of services including haircuts, beard trims, hair styling, hot towel shaves, hair coloring, and kids haircuts. Would you like to see our services page?"
  }

  // Price related queries
  if (input.includes("price") || input.includes("cost") || input.includes("how much")) {
    if (input.includes("haircut")) {
      return "Our haircuts are $30 and take about 30 minutes. Would you like to book a haircut?"
    } else if (input.includes("beard") || input.includes("trim")) {
      return "Our beard trims are $20 and take about 20 minutes. Would you like to book a beard trim?"
    } else if (input.includes("shave") || input.includes("hot towel")) {
      return "Our hot towel shaves are $35 and take about 40 minutes. Would you like to book a hot towel shave?"
    } else if (input.includes("color") || input.includes("coloring")) {
      return "Our hair coloring services start at $45 and can take 45-90 minutes depending on the service. Would you like to book a hair coloring service?"
    } else if (input.includes("kid") || input.includes("child")) {
      return "Our kids haircuts are $20 and take about 20-30 minutes. Would you like to book a kids haircut?"
    } else {
      return "Our services range from $20 to $45+. Would you like to see our full price list?"
    }
  }

  // Hours related queries
  if (input.includes("hour") || input.includes("open") || input.includes("time") || input.includes("when")) {
    return "We're open Monday to Saturday from 9:00 AM to 6:00 PM. We're closed on Sundays. Would you like to book an appointment?"
  }

  // Location related queries
  if (input.includes("location") || input.includes("address") || input.includes("where")) {
    return "We're located at 123 Barber Street, New York, NY 10001. Would you like to see our contact page for more details?"
  }

  // Contact related queries
  if (input.includes("contact") || input.includes("phone") || input.includes("email") || input.includes("call")) {
    return "You can reach us at (123) 456-7890 or email us at info@elitecuts.com. Would you like to fill out a contact form?"
  }

  // About related queries
  if (input.includes("about") || input.includes("history") || input.includes("company")) {
    return "Elite Cuts has been providing premium grooming services since 2008. Would you like to learn more about us?"
  }

  // Gallery related queries
  if (input.includes("gallery") || input.includes("photo") || input.includes("picture") || input.includes("image")) {
    return "We have a gallery showcasing our work. Would you like to see it?"
  }

  // Reviews/Testimonials related queries
  if (input.includes("review") || input.includes("testimonial") || input.includes("feedback")) {
    return "We have many satisfied customers! Would you like to read some of their testimonials?"
  }

  // Help related queries
  if (input.includes("help") || input.includes("assist") || input.includes("support")) {
    return "I can help you with booking appointments, filling out contact forms, finding information about our services, prices, hours, location, and more. What would you like to know?"
  }

  // Greeting
  if (input.includes("hello") || input.includes("hi") || input.includes("hey") || input.includes("greetings")) {
    return "Hello! How can I assist you today with Elite Cuts Barbershop?"
  }

  // Thank you
  if (input.includes("thank") || input.includes("thanks")) {
    return "You're welcome! Is there anything else I can help you with?"
  }

  // Goodbye
  if (input.includes("bye") || input.includes("goodbye") || input.includes("see you")) {
    return "Goodbye! Feel free to chat with me again if you need any assistance."
  }

  // Default response for unrecognized queries
  return "I'm not sure I understand. I can help with booking appointments, filling out contact forms, or providing information about our services, prices, hours, and location. How can I assist you today?"
}

// Function to extract JotForm information using rule-based approach
export function extractJotFormInfoRuleBased(userInput: string, currentData: JotFormData = {}): JotFormData {
  const input = userInput.toLowerCase()
  const updatedData = { ...currentData }

  // Add a type field to distinguish between contact form and booking
  if (!updatedData.type) {
    if (
      input.includes("contact") ||
      input.includes("question") ||
      input.includes("inquiry") ||
      input.includes("message")
    ) {
      updatedData.type = "contact"
    } else if (
      input.includes("book") ||
      input.includes("appointment") ||
      input.includes("schedule") ||
      input.includes("reservation")
    ) {
      updatedData.type = "booking"
    }
  }

  // Extract service
  if (!updatedData.service) {
    if (input.includes("haircut")) updatedData.service = "Haircut"
    else if (input.includes("beard trim") || (input.includes("beard") && input.includes("trim")))
      updatedData.service = "Beard Trim"
    else if (input.includes("hair styling") || (input.includes("hair") && input.includes("style")))
      updatedData.service = "Hair Styling"
    else if (input.includes("hot towel") || input.includes("shave")) updatedData.service = "Hot Towel Shave"
    else if (input.includes("coloring") || input.includes("color")) updatedData.service = "Hair Coloring"
    else if (input.includes("kids") || input.includes("child")) updatedData.service = "Kids Haircut"
  }

  // Extract email - look for something@something.something
  if (!updatedData.email) {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/
    const emailMatch = input.match(emailRegex)
    if (emailMatch) {
      updatedData.email = emailMatch[0]
    }
  }

  // Extract phone - look for digits, possibly with formatting
  if (!updatedData.phone) {
    const phoneRegex = /\+?[\d\s$$$$\-.]{10,20}/
    const phoneMatch = input.match(phoneRegex)
    if (phoneMatch) {
      updatedData.phone = phoneMatch[0]
    }
  }

  // Extract name - this is the hardest to extract reliably with rules
  if (!updatedData.name) {
    // Skip common greeting words
    const skipWords = ["hi", "hello", "hey", "my", "name", "is", "i", "am", "called"]
    const words = input.split(/\s+/)
    const nameWords = []

    for (let i = 0; i < words.length && nameWords.length < 3; i++) {
      const word = words[i].toLowerCase()
      // Skip common words and words that are too short
      if (!skipWords.includes(word) && word.length > 1) {
        // Capitalize the first letter
        nameWords.push(word.charAt(0).toUpperCase() + word.slice(1))
      }
    }

    if (nameWords.length > 0) {
      updatedData.name = nameWords.join(" ")
    }
  }

  // Extract message - use the whole input if it's longer than a few words
  if (!updatedData.message && input.split(/\s+/).length > 5) {
    // Only use the input as a message if it doesn't seem like it's just providing other info
    if (!input.includes("my name is") && !input.includes("my email") && !input.includes("my phone")) {
      updatedData.message = userInput // Use original case
    }
  }

  return updatedData
}

// Function to extract booking information using rule-based approach
export function extractBookingInfoRuleBased(userInput: string, currentData: BookingData = {}): BookingData {
  const input = userInput.toLowerCase()
  const updatedData = { ...currentData }

  // Extract service
  if (!updatedData.service) {
    if (input.includes("haircut")) updatedData.service = "Haircut"
    else if (input.includes("beard trim") || (input.includes("beard") && input.includes("trim")))
      updatedData.service = "Beard Trim"
    else if (input.includes("hair styling") || (input.includes("hair") && input.includes("style")))
      updatedData.service = "Hair Styling"
    else if (input.includes("hot towel") || input.includes("shave")) updatedData.service = "Hot Towel Shave"
    else if (input.includes("coloring") || input.includes("color")) updatedData.service = "Hair Coloring"
    else if (input.includes("kids") || input.includes("child")) updatedData.service = "Kids Haircut"
  }

  // Extract date
  if (!updatedData.date) {
    // Simple date parsing - in a real app, you'd use a more robust date parser
    if (input.includes("today")) {
      updatedData.date = new Date().toISOString().split("T")[0]
    } else if (input.includes("tomorrow")) {
      const tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)
      updatedData.date = tomorrow.toISOString().split("T")[0]
    } else if (input.includes("next")) {
      const nextDate = new Date()
      if (input.includes("monday")) nextDate.setDate(nextDate.getDate() + ((8 - nextDate.getDay()) % 7))
      else if (input.includes("tuesday")) nextDate.setDate(nextDate.getDate() + ((9 - nextDate.getDay()) % 7))
      else if (input.includes("wednesday")) nextDate.setDate(nextDate.getDate() + ((10 - nextDate.getDay()) % 7))
      else if (input.includes("thursday")) nextDate.setDate(nextDate.getDate() + ((11 - nextDate.getDay()) % 7))
      else if (input.includes("friday")) nextDate.setDate(nextDate.getDate() + ((12 - nextDate.getDay()) % 7))
      else if (input.includes("saturday")) nextDate.setDate(nextDate.getDate() + ((13 - nextDate.getDay()) % 7))
      else if (input.includes("week")) nextDate.setDate(nextDate.getDate() + 7)

      if (nextDate > new Date()) {
        updatedData.date = nextDate.toISOString().split("T")[0]
      }
    } else {
      // Try to extract a date in format MM/DD or Month Day
      const dateRegex = /(\d{1,2})[/-](\d{1,2})/
      const monthDayRegex =
        /(january|february|march|april|may|june|july|august|september|october|november|december)\s+(\d{1,2})/i

      const dateMatch = input.match(dateRegex)
      const monthDayMatch = input.match(monthDayRegex)

      if (dateMatch) {
        const month = Number.parseInt(dateMatch[1])
        const day = Number.parseInt(dateMatch[2])
        const year = new Date().getFullYear()
        const dateObj = new Date(year, month - 1, day)
        if (dateObj > new Date()) {
          updatedData.date = dateObj.toISOString().split("T")[0]
        }
      } else if (monthDayMatch) {
        const months = [
          "january",
          "february",
          "march",
          "april",
          "may",
          "june",
          "july",
          "august",
          "september",
          "october",
          "november",
          "december",
        ];
        
        const month = months.indexOf(monthDayMatch[1].toLowerCase())
        const day = Number.parseInt(monthDayMatch[2])
        const year = new Date().getFullYear()
        const dateObj = new Date(year, month, day)
        if (dateObj > new Date()) {
          updatedData.date = dateObj.toISOString().split("T")[0]
        }
      }
    }
  }

  // Extract time
  if (!updatedData.time) {
    // Simple time parsing
    const timeRegex = /(\d{1,2})(?::(\d{2}))?\s*(am|pm)/i
    const timeMatch = input.match(timeRegex)

    if (timeMatch) {
      let hour = Number.parseInt(timeMatch[1])
      const minute = timeMatch[2] ? timeMatch[2] : "00"
      const period = timeMatch[3].toLowerCase()

      if (period === "pm" && hour < 12) hour += 12
      if (period === "am" && hour === 12) hour = 0

      // Format the time
      const formattedHour = hour % 12 === 0 ? 12 : hour % 12
      const ampm = hour >= 12 ? "PM" : "AM"
      updatedData.time = `${formattedHour}:${minute} ${ampm}`
    } else {
      // Check for common time phrases
      if (input.includes("morning")) updatedData.time = "10:00 AM"
      else if (input.includes("afternoon")) updatedData.time = "2:00 PM"
      else if (input.includes("evening") || input.includes("late")) updatedData.time = "5:00 PM"

      // Try to match with available time slots
      const availableSlots = [
        "9:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM",
        "4:00 PM",
        "5:00 PM",
      ];

      for (const slot of availableSlots) {
        if (input.includes(slot.toLowerCase())) {
          updatedData.time = slot
          break
        }
      }
    }
  }

  // Extract email - look for something@something.something
  //if (!updatedData.email) {
  //const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/
  //const emailMatch = input.match(emailRegex)
  //if (emailMatch) {
  // updatedData.email = emailMatch[0]
  // }
  //}

  // Extract phone - look for digits, possibly with formatting
  if (!updatedData.phone) {
    const phoneRegex = /\+?[\d\s$$$$\-.]{10,20}/
    const phoneMatch = input.match(phoneRegex)
    if (phoneMatch) {
      updatedData.phone = phoneMatch[0]
    }
  }

  // Extract name - this is the hardest to extract reliably with rules
  if (!updatedData.name) {
    // Skip common greeting words
    const skipWords = ["hi", "hello", "hey", "my", "name", "is", "i", "am", "called"]
    const words = input.split(/\s+/)
    const nameWords = []

    for (let i = 0; i < words.length && nameWords.length < 3; i++) {
      const word = words[i].toLowerCase()
      // Skip common words and words that are too short
      if (!skipWords.includes(word) && word.length > 1) {
        // Capitalize the first letter
        nameWords.push(word.charAt(0).toUpperCase() + word.slice(1))
      }
    }

    if (nameWords.length > 0) {
      updatedData.name = nameWords.join(" ")
    }
  }

  return updatedData
}

// Function to generate a response using OpenAI with fallback
export async function generateChatResponse(
  userMessage: string,
  chatHistory: { role: "user" | "assistant"; content: string }[],
  bookingData?: BookingData,
  jotFormData?: JotFormData,
  isJotFormFlow?: boolean,
): Promise<string> {
  try {
    // Check if OpenAI API key is available or if we should use fallback
    if (!process.env.OPENAI_API_KEY) {
      console.log("OpenAI API key not found, using rule-based fallback")
      return generateRuleBasedResponse(userMessage, chatHistory, bookingData, jotFormData, isJotFormFlow)
    }

    // Create a system prompt based on the flow
    let systemPrompt = ""

    if (isJotFormFlow) {
      systemPrompt = `
        You are Elite, a virtual assistant for Elite Cuts Barbershop. Your job is to help users fill out a contact form.
        
        SERVICES OFFERED:
        - Haircut ($30, 30 minutes)
        - Beard Trim ($20, 20 minutes)
        - Hair Styling ($25, 25 minutes)
        - Hot Towel Shave ($35, 40 minutes)
        - Hair Coloring ($45+, 45-90 minutes)
        - Kids Haircut ($20, 20-30 minutes)
        
        FORM FIELDS NEEDED:
        1. Name
        2. Email
        3. Phone
        4. Service of interest
        5. Message (optional)
        
        Be conversational but efficient. Guide the user through the form filling process step by step.
        If they've already provided some information, don't ask for it again.
      `

      // If we have partial JotForm data, include it in the system prompt
      if (jotFormData && Object.keys(jotFormData).length > 0) {
        systemPrompt += `\nCURRENT FORM INFORMATION:`

        for (const [key, value] of Object.entries(jotFormData)) {
          if (value) {
            systemPrompt += `\n- ${key}: ${value}`
          }
        }

        // Check what's missing and instruct the AI to focus on collecting that
        const { isComplete, missingFields } = validateJotFormData(jotFormData)

        if (!isComplete) {
          systemPrompt += `\n\nMISSING INFORMATION: ${missingFields.join(", ")}`
          systemPrompt += `\nFocus on collecting the missing information in a conversational way.`
        } else {
          systemPrompt += `\n\nAll required information has been collected. Confirm the details and offer to submit the form.`
        }
      }
    } else {
      systemPrompt = `
        You are Elite, a virtual assistant for Elite Cuts Barbershop. Your job is to help users book appointments.
        
        SERVICES OFFERED:
        - Haircut ($30, 30 minutes)
        - Beard Trim ($20, 20 minutes)
        - Hair Styling ($25, 25 minutes)
        - Hot Towel Shave ($35, 40 minutes)
        - Hair Coloring ($45+, 45-90 minutes)
        - Kids Haircut ($20, 20-30 minutes)
        
        BUSINESS HOURS:
        Monday to Saturday: 9:00 AM to 6:00 PM
        Sunday: Closed
        
        BOOKING PROCESS:
        1. Ask for the service they want
        2. Ask for the date they prefer
        3. Ask for the time they prefer
        4. Ask for their name
        5. Ask for their email
        6. Ask for their phone number
        7. Ask if they have any special requests or notes
        
        Be conversational but efficient. Guide the user through the booking process step by step.
        If they've already provided some information, don't ask for it again.
      `

      // If we have partial booking data, include it in the system prompt
      if (bookingData && Object.keys(bookingData).length > 0) {
        systemPrompt += `\nCURRENT BOOKING INFORMATION:`

        for (const [key, value] of Object.entries(bookingData)) {
          if (value) {
            systemPrompt += `\n- ${key}: ${value}`
          }
        }

        // Check what's missing and instruct the AI to focus on collecting that
        const { isComplete, missingFields } = validateBookingData(bookingData)

        if (!isComplete) {
          systemPrompt += `\n\nMISSING INFORMATION: ${missingFields.join(", ")}`
          systemPrompt += `\nFocus on collecting the missing information in a conversational way.`
        } else {
          systemPrompt += `\n\nAll required information has been collected. Confirm the details and offer to complete the booking.`
        }
      }
    }

    // Try to generate a response using the AI SDK
    try {
      const { text } = await generateText({
        model: openai("gpt-4o"),
        system: systemPrompt,
        messages: chatHistory,
        temperature: 0.7,
        maxOutputTokens: 500,
      })      

      return text
    } catch (error: unknown) {
      console.error("Error generating AI response:", error)

      // Check for quota exceeded error
      if (
        error instanceof Error &&
        error.message &&
        (error.message.includes("quota") ||
          error.message.includes("billing") ||
          error.message.includes("rate limit") ||
          error.message.includes("exceeded"))
      ) {
        console.log("API quota exceeded, switching to rule-based fallback permanently")
        // We could set a global flag here if needed
      }

      // Fall back to rule-based response
      return generateRuleBasedResponse(userMessage, chatHistory, bookingData, jotFormData, isJotFormFlow)
    }
  } catch (error) {
    console.error("Error in generateChatResponse:", error)
    return generateRuleBasedResponse(userMessage, chatHistory, bookingData, jotFormData, isJotFormFlow)
  }
}

// Function to extract JotForm information with fallback
export async function extractJotFormInfo(
  chatHistory: { role: "user" | "assistant"; content: string }[],
  currentData?: JotFormData,
): Promise<JotFormData> {
  try {
    // Check if OpenAI API key is available
    if (!process.env.OPENAI_API_KEY) {
      console.log("OpenAI API key not found, using rule-based extraction")
      // Use the last user message for rule-based extraction
      const lastUserMessage = [...chatHistory].reverse().find((msg) => msg.role === "user")
      if (lastUserMessage) {
        return extractJotFormInfoRuleBased(lastUserMessage.content, currentData)
      }
      return currentData || {}
    }

    // Create a system prompt for information extraction
    const systemPrompt = `
      You are an AI assistant that extracts contact form information from conversations.
      Extract the following information if present in the conversation:
      - name: The customer's name
      - email: The customer's email
      - phone: The customer's phone number
      - service: The haircut or grooming service they're interested in
      - message: Any additional message or question they have
      
      Return ONLY a JSON object with these fields. If a field is not found, don't include it.
      If the current data already has some fields filled, prioritize new information from the conversation.
      If the current data already has some fields filled, prioritize new information from the conversation.
    `

    try {
      // Generate a structured response using the AI SDK
      const { text } = await generateText({
        model: openai("gpt-4o"),
        system: systemPrompt,
        prompt: JSON.stringify({
          conversation: chatHistory,
          currentData: currentData || {},
        }),
        temperature: 0,
        maxOutputTokens: 500,
      })

      // Parse the JSON response
      try {
        const extractedData = JSON.parse(text)
        return {
          ...currentData,
          ...extractedData,
        }
      } catch (e) {
        console.error("Error parsing extracted data:", e)
        // Fall back to rule-based extraction
        const lastUserMessage = [...chatHistory].reverse().find((msg) => msg.role === "user")
        if (lastUserMessage) {
          return extractJotFormInfoRuleBased(lastUserMessage.content, currentData)
        }
        return currentData || {}
      }
    } catch (error: unknown) {
      console.error("Error extracting JotForm info with AI:", error)

      // Check for quota exceeded error
      if (
        error instanceof Error &&
        error.message &&
        (error.message.includes("quota") ||
          error.message.includes("billing") ||
          error.message.includes("rate limit") ||
          error.message.includes("exceeded"))
      ) {
        console.log("API quota exceeded, switching to rule-based extraction permanently")
        // We could set a global flag here if needed
      }

      // Fall back to rule-based extraction
      const lastUserMessage = [...chatHistory].reverse().find((msg) => msg.role === "user")
      if (lastUserMessage) {
        return extractJotFormInfoRuleBased(lastUserMessage.content, currentData)
      }
      return currentData || {}
    }
  } catch (error) {
    console.error("Error in extractJotFormInfo:", error)
    return currentData || {}
  }
}

// Function to extract booking information with fallback
export async function extractBookingInfo(
  chatHistory: { role: "user" | "assistant"; content: string }[],
  currentData?: BookingData,
): Promise<BookingData> {
  try {
    // Check if OpenAI API key is available
    if (!process.env.OPENAI_API_KEY) {
      console.log("OpenAI API key not found, using rule-based extraction")
      // Use the last user message for rule-based extraction
      const lastUserMessage = [...chatHistory].reverse().find((msg) => msg.role === "user")
      if (lastUserMessage) {
        return extractBookingInfoRuleBased(lastUserMessage.content, currentData)
      }
      return currentData || {}
    }

    // Create a system prompt for information extraction
    const systemPrompt = `
      You are an AI assistant that extracts booking information from conversations.
      Extract the following information if present in the conversation:
      - service: The haircut or grooming service requested
      - date: The appointment date
      - time: The appointment time
      - name: The customer's name
      - email: The customer's email
      - phone: The customer's phone number
      - notes: Any special requests or notes
      
      Return ONLY a JSON object with these fields. If a field is not found, don't include it.
      If the current data already has some fields filled, prioritize new information from the conversation.
    `

    try {
      // Generate a structured response using the AI SDK
      const { text } = await generateText({
        model: openai("gpt-4o"),
        system: systemPrompt,
        prompt: JSON.stringify({
          conversation: chatHistory,
          currentData: currentData || {},
        }),
        temperature: 0,
        maxOutputTokens: 500,
      })

      // Parse the JSON response
      try {
        const extractedData = JSON.parse(text)
        return {
          ...currentData,
          ...extractedData,
        }
      } catch (e) {
        console.error("Error parsing extracted data:", e)
        // Fall back to rule-based extraction
        const lastUserMessage = [...chatHistory].reverse().find((msg) => msg.role === "user")
        if (lastUserMessage) {
          return extractBookingInfoRuleBased(lastUserMessage.content, currentData)
        }
        return currentData || {}
      }
    } catch (error: unknown) {
      console.error("Error extracting booking info with AI:", error)

      // Check for quota exceeded error
      if (
        error instanceof Error &&
        error.message &&
        (error.message.includes("quota") ||
          error.message.includes("billing") ||
          error.message.includes("rate limit") ||
          error.message.includes("exceeded"))
      ) {
        console.log("API quota exceeded, switching to rule-based extraction permanently")
        // We could set a global flag here if needed
      }

      // Fall back to rule-based extraction
      const lastUserMessage = [...chatHistory].reverse().find((msg) => msg.role === "user")
      if (lastUserMessage) {
        return extractBookingInfoRuleBased(lastUserMessage.content, currentData)
      }
      return currentData || {}
    }
  } catch (error) {
    console.error("Error in extractBookingInfo:", error)
    return currentData || {}
  }
}

