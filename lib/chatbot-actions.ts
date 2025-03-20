"use server"

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

// Function to prepare form data for JotForm
export async function prepareJotFormData(data: {
  name?: string
  email?: string
  phone?: string
  service?: string
  message?: string
}) {
  // This would typically interact with JotForm's API
  // For now, we'll just return the data to be used with URL parameters

  return {
    success: true,
    formData: data,
    formUrl: `https://form.jotform.com/250767357882168?name=${encodeURIComponent(data.name || "")}&email=${encodeURIComponent(data.email || "")}&phone=${encodeURIComponent(data.phone || "")}&serviceType=${encodeURIComponent(data.service || "")}`,
  }
}

// Function to save chatbot state in a cookie
export async function saveChatbotState(state: Record<string, unknown>) {
  (await cookies()).set({
    name: "elite_chatbot_state",
    value: JSON.stringify(state),
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  })

  revalidatePath("/")
  return { success: true }
}

// Function to get chatbot state from cookie
export async function getChatbotState() {
  const stateCookie = (await cookies()).get("elite_chatbot_state")

  if (stateCookie) {
    try {
      return JSON.parse(stateCookie.value)
    } catch (error) {
      console.error("Error parsing chatbot state:", error)
    }
  }

  return null
}

// Function to clear chatbot state
export async function clearChatbotState() {
  (await cookies()).delete("elite_chatbot_state")
  revalidatePath("/")
  return { success: true }
}

