"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Scissors, Send, X, MessageSquare, User, Bot } from "lucide-react"
import ChatQuickActions from "./chat-quick-actions"
import {
  generateChatResponse,
  extractBookingInfo,
  validateBookingData,
  generateRuleBasedResponse,
  extractBookingInfoRuleBased,
  extractJotFormInfo,
  extractJotFormInfoRuleBased,
  validateJotFormData,
  type BookingData,
  type JotFormData,
} from "@/lib/ai-chat"
import { prepareJotFormData } from "@/lib/chatbot-actions"

type Message = {
  role: "user" | "assistant"
  content: string
}

export default function EliteChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi there! I'm Elite, your virtual assistant. How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showQuickActions, setShowQuickActions] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Booking data state
  const [bookingData, setBookingData] = useState<BookingData>({})
  const [isBookingFlow, setIsBookingFlow] = useState(false)

  // JotForm data state
  const [jotFormData, setJotFormData] = useState<JotFormData>({})
  const [isJotFormFlow, setIsJotFormFlow] = useState(false)

  // Track if we're using fallback mode due to API errors
  const [useFallbackMode, setUseFallbackMode] = useState(false)
  const [apiErrorCount, setApiErrorCount] = useState(0)

  // Initialize in fallback mode if OpenAI API key is not available
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_OPENAI_AVAILABLE) {
      setUseFallbackMode(true)
      console.log("Starting in fallback mode due to missing OpenAI API key")
    }
  }, [])

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  // Function to handle form completion and redirect
  const completeBookingForm = () => {
    const { isComplete, missingFields } = validateBookingData(bookingData)

    if (isComplete) {
      // Construct URL for booking form with all parameters
      const bookingUrl = `/booking?service=${encodeURIComponent(bookingData.service || "")}&date=${encodeURIComponent(bookingData.date || "")}&time=${encodeURIComponent(bookingData.time || "")}&name=${encodeURIComponent(bookingData.name || "")}&email=${encodeURIComponent(bookingData.email || "")}&phone=${encodeURIComponent(bookingData.phone || "")}&notes=${encodeURIComponent(bookingData.notes || "")}`

      // Add a final message before redirecting
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Perfect! I've collected all the information for your ${bookingData.service} appointment. Taking you to our booking form now to confirm...`,
        },
      ])

      // Redirect after a short delay
      setTimeout(() => {
        router.push(bookingUrl)
      }, 1500)

      return true
    }

    return false
  }

  // Function to handle JotForm completion and redirect
  const completeJotForm = async () => {
    const { isComplete, missingFields } = validateJotFormData(jotFormData)

    if (isComplete) {
      try {
        // Check if this is a contact form or booking form
        if (jotFormData.type === "contact") {
          // For contact form, redirect to the contact page with query params
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content: `Thank you for providing your information. I'll take you to our contact page where you can send us your message.`,
            },
          ])

          // Redirect to contact page with prefilled data
          setTimeout(() => {
            const contactUrl = `/contact?${jotFormData.name ? `name=${encodeURIComponent(jotFormData.name)}` : ""}${jotFormData.email ? `&email=${encodeURIComponent(jotFormData.email)}` : ""}${jotFormData.phone ? `&phone=${encodeURIComponent(jotFormData.phone)}` : ""}${jotFormData.service ? `&subject=${encodeURIComponent(jotFormData.service)}` : ""}${jotFormData.message ? `&message=${encodeURIComponent(jotFormData.message)}` : ""}`
            router.push(contactUrl)
          }, 1500)

          return true
        } else {
          // For booking form, prepare the JotForm data
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content: `Thank you for providing all the information. I'm preparing your booking form now...`,
            },
          ])

          // Prepare the JotForm data
          const result = await prepareJotFormData({
            name: jotFormData.name,
            email: jotFormData.email,
            phone: jotFormData.phone,
            service: jotFormData.service,
            message: jotFormData.message,
          })

          if (result.success) {
            // Add a final message before redirecting
            setMessages((prev) => [
              ...prev,
              {
                role: "assistant",
                content: `Perfect! I've prepared your booking form. Taking you to our booking page now...`,
              },
            ])

            // Redirect to booking page with prefilled data
            setTimeout(() => {
              const bookingUrl = `/booking?${jotFormData.name ? `name=${encodeURIComponent(jotFormData.name)}` : ""}${jotFormData.email ? `&email=${encodeURIComponent(jotFormData.email)}` : ""}${jotFormData.phone ? `&phone=${encodeURIComponent(jotFormData.phone)}` : ""}${jotFormData.service ? `&service=${encodeURIComponent(jotFormData.service)}` : ""}${jotFormData.message ? `&notes=${encodeURIComponent(jotFormData.message)}` : ""}`
              router.push(bookingUrl)
            }, 1500)

            return true
          } else {
            // If JotForm preparation fails, redirect to booking page instead
            setMessages((prev) => [
              ...prev,
              {
                role: "assistant",
                content: `I'm having trouble preparing the form. Let me take you to our booking page where you can fill out the form directly.`,
              },
            ])

            // Redirect to booking page with available information
            setTimeout(() => {
              const bookingUrl = `/booking?${jotFormData.name ? `name=${encodeURIComponent(jotFormData.name)}` : ""}${jotFormData.email ? `&email=${encodeURIComponent(jotFormData.email)}` : ""}${jotFormData.phone ? `&phone=${encodeURIComponent(jotFormData.phone)}` : ""}${jotFormData.service ? `&service=${encodeURIComponent(jotFormData.service)}` : ""}${jotFormData.message ? `&notes=${encodeURIComponent(jotFormData.message)}` : ""}`
              router.push(bookingUrl)
            }, 1500)
          }
        }
      } catch (error) {
        console.error("Error preparing form data:", error)
        // If there's an error, redirect to appropriate page
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: `I'm sorry, I encountered an error preparing your form. Let me take you to the appropriate page where you can fill out the form directly.`,
          },
        ])

        // Redirect based on form type
        setTimeout(() => {
          if (jotFormData.type === "contact") {
            const contactUrl = `/contact?${jotFormData.name ? `name=${encodeURIComponent(jotFormData.name)}` : ""}${jotFormData.email ? `&email=${encodeURIComponent(jotFormData.email)}` : ""}${jotFormData.message ? `&message=${encodeURIComponent(jotFormData.message)}` : ""}`
            router.push(contactUrl)
          } else {
            const bookingUrl = `/booking?${jotFormData.name ? `name=${encodeURIComponent(jotFormData.name)}` : ""}${jotFormData.email ? `&email=${encodeURIComponent(jotFormData.email)}` : ""}${jotFormData.phone ? `&phone=${encodeURIComponent(jotFormData.phone)}` : ""}${jotFormData.service ? `&service=${encodeURIComponent(jotFormData.service)}` : ""}${jotFormData.message ? `&notes=${encodeURIComponent(jotFormData.message)}` : ""}`
            router.push(bookingUrl)
          }
        }, 1500)
      }
    } else {
      // If we don't have complete information, try to collect it or redirect
      if (missingFields.length > 2) {
        // If too many fields are missing, just redirect to appropriate page
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: `It seems we're missing several pieces of information. Let me take you to our form page where you can fill out the details directly.`,
          },
        ])

        // Redirect based on form type
        setTimeout(() => {
          if (jotFormData.type === "contact") {
            const contactUrl = `/contact?${jotFormData.name ? `name=${encodeURIComponent(jotFormData.name)}` : ""}${jotFormData.email ? `&email=${encodeURIComponent(jotFormData.email)}` : ""}${jotFormData.message ? `&message=${encodeURIComponent(jotFormData.message)}` : ""}`
            router.push(contactUrl)
          } else {
            const bookingUrl = `/booking?${jotFormData.name ? `name=${encodeURIComponent(jotFormData.name)}` : ""}${jotFormData.email ? `&email=${encodeURIComponent(jotFormData.email)}` : ""}${jotFormData.phone ? `&phone=${encodeURIComponent(jotFormData.phone)}` : ""}${jotFormData.service ? `&service=${encodeURIComponent(jotFormData.service)}` : ""}${jotFormData.message ? `&notes=${encodeURIComponent(jotFormData.message)}` : ""}`
            router.push(bookingUrl)
          }
        }, 1500)

        return true
      }

      return false
    }

    return false
  }

  const handleQuickAction = async (action: string) => {
    // Add the quick action as a user message
    setMessages((prev) => [...prev, { role: "user", content: action }])
    setIsLoading(true)
    setShowQuickActions(false)

    // Check if this is a booking-related action
    if (action.toLowerCase().includes("book") || action.toLowerCase().includes("appointment")) {
      setIsBookingFlow(true)
      setIsJotFormFlow(true)
      // Set the form type to booking
      setJotFormData((prev) => ({ ...prev, type: "booking" }))
    }

    // Check if this is a contact-related action
    if (
      action.toLowerCase().includes("contact") ||
      action.toLowerCase().includes("inquiry") ||
      action.toLowerCase().includes("question") ||
      action.toLowerCase().includes("message")
    ) {
      setIsJotFormFlow(true)
      setIsBookingFlow(false)
      // Set the form type to contact
      setJotFormData((prev) => ({ ...prev, type: "contact" }))
    }

    try {
      let aiResponse: string
      let updatedBookingData: BookingData = { ...bookingData }
      let updatedJotFormData: JotFormData = { ...jotFormData }

      // Use fallback mode if we've had API errors or if fallback mode is already active
      if (useFallbackMode) {
        // Use rule-based response generation
        aiResponse = generateRuleBasedResponse(
          action,
          messages.concat({ role: "user", content: action }),
          isBookingFlow ? bookingData : undefined,
          isJotFormFlow ? jotFormData : undefined,
          isJotFormFlow,
        )

        // Use rule-based information extraction
        if (isBookingFlow) {
          updatedBookingData = extractBookingInfoRuleBased(action, bookingData)
        } else if (isJotFormFlow) {
          updatedJotFormData = extractJotFormInfoRuleBased(action, jotFormData)
        }
      } else {
        try {
          // Try to use AI-based response generation
          aiResponse = await generateChatResponse(
            action,
            messages.concat({ role: "user", content: action }),
            isBookingFlow ? bookingData : undefined,
            isJotFormFlow ? jotFormData : undefined,
            isJotFormFlow,
          )

          // Try to use AI-based information extraction
          if (isBookingFlow) {
            updatedBookingData = await extractBookingInfo(
              messages.concat([
                { role: "user", content: action },
                { role: "assistant", content: aiResponse },
              ]),
              bookingData,
            )
          } else if (isJotFormFlow) {
            updatedJotFormData = await extractJotFormInfo(
              messages.concat([
                { role: "user", content: action },
                { role: "assistant", content: aiResponse },
              ]),
              jotFormData,
            )
          }
        } catch (error: any) {
          console.error("Error using AI services:", error)
          setApiErrorCount((prev) => prev + 1)

          // Switch to fallback mode immediately if quota exceeded
          if (
            error.message &&
            (error.message.includes("quota") ||
              error.message.includes("billing") ||
              error.message.includes("rate limit") ||
              error.message.includes("exceeded"))
          ) {
            setUseFallbackMode(true)
            console.log("Switching to fallback mode due to API quota exceeded")
          }
          // Otherwise switch to fallback mode after multiple errors
          else if (apiErrorCount >= 1) {
            setUseFallbackMode(true)
            console.log("Switching to fallback mode due to multiple API errors")
          }

          // Use rule-based fallbacks
          aiResponse = generateRuleBasedResponse(
            action,
            messages.concat({ role: "user", content: action }),
            isBookingFlow ? bookingData : undefined,
            isJotFormFlow ? jotFormData : undefined,
            isJotFormFlow,
          )

          if (isBookingFlow) {
            updatedBookingData = extractBookingInfoRuleBased(action, bookingData)
          } else if (isJotFormFlow) {
            updatedJotFormData = extractJotFormInfoRuleBased(action, jotFormData)
          }
        }
      }

      // Add the assistant's response
      setMessages((prev) => [...prev, { role: "assistant", content: aiResponse }])

      // Update data based on the flow
      if (isBookingFlow) {
        setBookingData(updatedBookingData)

        // Check if we have all the required information to complete the booking
        const { isComplete } = validateBookingData(updatedBookingData)
        if (isComplete) {
          completeBookingForm()
        }
      } else if (isJotFormFlow) {
        setJotFormData(updatedJotFormData)

        // Check if we have all the required information to complete the form
        const { isComplete } = validateJotFormData(updatedJotFormData)
        if (isComplete) {
          completeJotForm()
        }
      }
    } catch (error) {
      console.error("Error handling quick action:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm sorry, I'm having trouble processing your request right now. Please try again.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message to chat
    const userMessage = { role: "user" as const, content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    setShowQuickActions(false)

    try {
      // Check if the message is about booking or form
      if (!isBookingFlow && !isJotFormFlow) {
        if (
          input.toLowerCase().includes("book") ||
          input.toLowerCase().includes("appointment") ||
          input.toLowerCase().includes("schedule")
        ) {
          setIsBookingFlow(true)
          setIsJotFormFlow(true)
          // Set the form type to booking
          setJotFormData((prev) => ({ ...prev, type: "booking" }))
        } else if (
          input.toLowerCase().includes("contact") ||
          input.toLowerCase().includes("inquiry") ||
          input.toLowerCase().includes("question") ||
          input.toLowerCase().includes("message")
        ) {
          setIsJotFormFlow(true)
          setIsBookingFlow(false)
          // Set the form type to contact
          setJotFormData((prev) => ({ ...prev, type: "contact" }))
        }
      }

      let aiResponse: string
      let updatedBookingData: BookingData = { ...bookingData }
      let updatedJotFormData: JotFormData = { ...jotFormData }

      // Use fallback mode if we've had API errors or if fallback mode is already active
      if (useFallbackMode) {
        // Use rule-based response generation
        aiResponse = generateRuleBasedResponse(
          input,
          messages.concat(userMessage),
          isBookingFlow ? bookingData : undefined,
          isJotFormFlow ? jotFormData : undefined,
          isJotFormFlow,
        )

        // Use rule-based information extraction
        if (isBookingFlow) {
          updatedBookingData = extractBookingInfoRuleBased(input, bookingData)
        } else if (isJotFormFlow) {
          updatedJotFormData = extractJotFormInfoRuleBased(input, jotFormData)
        }
      } else {
        try {
          // Try to use AI-based response generation
          aiResponse = await generateChatResponse(
            input,
            messages.concat(userMessage),
            isBookingFlow ? bookingData : undefined,
            isJotFormFlow ? jotFormData : undefined,
            isJotFormFlow,
          )

          // Try to use AI-based information extraction
          if (isBookingFlow) {
            updatedBookingData = await extractBookingInfo(
              messages.concat([userMessage, { role: "assistant", content: aiResponse }]),
              bookingData,
            )
          } else if (isJotFormFlow) {
            updatedJotFormData = await extractJotFormInfo(
              messages.concat([userMessage, { role: "assistant", content: aiResponse }]),
              jotFormData,
            )
          }
        } catch (error: any) {
          console.error("Error using AI services:", error)
          setApiErrorCount((prev) => prev + 1)

          // Switch to fallback mode immediately if quota exceeded
          if (
            error.message &&
            (error.message.includes("quota") ||
              error.message.includes("billing") ||
              error.message.includes("rate limit") ||
              error.message.includes("exceeded"))
          ) {
            setUseFallbackMode(true)
            console.log("Switching to fallback mode due to API quota exceeded")
          }
          // Otherwise switch to fallback mode after multiple errors
          else if (apiErrorCount >= 1) {
            setUseFallbackMode(true)
            console.log("Switching to fallback mode due to multiple API errors")
          }

          // Use rule-based fallbacks
          aiResponse = generateRuleBasedResponse(
            input,
            messages.concat(userMessage),
            isBookingFlow ? bookingData : undefined,
            isJotFormFlow ? jotFormData : undefined,
            isJotFormFlow,
          )

          if (isBookingFlow) {
            updatedBookingData = extractBookingInfoRuleBased(input, bookingData)
          } else if (isJotFormFlow) {
            updatedJotFormData = extractJotFormInfoRuleBased(input, jotFormData)
          }
        }
      }

      // Add the assistant's response
      setMessages((prev) => [...prev, { role: "assistant", content: aiResponse }])

      // Update data based on the flow
      if (isBookingFlow) {
        setBookingData(updatedBookingData)

        // Check if we have all the required information to complete the booking
        const { isComplete } = validateBookingData(updatedBookingData)
        if (isComplete) {
          completeBookingForm()
        }
      } else if (isJotFormFlow) {
        setJotFormData(updatedJotFormData)

        // Check if we have all the required information to complete the form
        const { isComplete } = validateJotFormData(updatedJotFormData)
        if (isComplete) {
          completeJotForm()
        }
      }
    } catch (error) {
      console.error("Error generating response:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm sorry, I'm having trouble right now. Please try again later.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Chat button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 p-0 shadow-lg"
        aria-label="Open chat"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-[350px] h-[500px] shadow-xl flex flex-col z-50">
          <div className="bg-primary text-white p-3 flex justify-between items-center rounded-t-lg">
            <div className="flex items-center gap-2">
              <Scissors className="h-5 w-5" />
              <h3 className="font-bold">Elite Assistant</h3>
              {isLoading && <Bot className="h-4 w-4 animate-pulse" />}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-primary/80"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`flex gap-2 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                  <Avatar className={message.role === "user" ? "bg-blue-100" : "bg-primary/10"}>
                    {message.role === "user" ? (
                      <AvatarFallback className="bg-blue-100 text-blue-600">
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    ) : (
                      <>
                        <AvatarImage src="/placeholder.svg?height=40&width=40&text=EC" alt="Elite Cuts" />
                        <AvatarFallback className="bg-primary/10 text-primary">
                          <Scissors className="h-4 w-4" />
                        </AvatarFallback>
                      </>
                    )}
                  </Avatar>
                  <div
                    className={`rounded-lg p-3 ${
                      message.role === "user" ? "bg-blue-100 text-blue-900" : "bg-muted text-foreground"
                    }`}
                  >
                    {message.content.split("\n").map((line, i) => (
                      <p key={i} className={i > 0 ? "mt-2" : ""}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Show quick actions after the initial greeting */}
            {showQuickActions && messages.length === 1 && <ChatQuickActions onActionClick={handleQuickAction} />}

            {/* Show booking progress if in booking flow */}
            {isBookingFlow && !isLoading && (
              <div className="bg-primary/5 rounded-lg p-3 text-xs">
                <p className="font-medium mb-1">Booking Progress:</p>
                <div className="space-y-1">
                  {["service", "date", "time", "name", "email", "phone"].map((field) => (
                    <div key={field} className="flex items-center">
                      <div
                        className={`w-3 h-3 rounded-full mr-2 ${bookingData[field as keyof BookingData] ? "bg-green-500" : "bg-gray-300"}`}
                      ></div>
                      <span className={bookingData[field as keyof BookingData] ? "text-green-700" : "text-gray-500"}>
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Show JotForm progress if in form flow */}
            {isJotFormFlow && !isLoading && (
              <div className="bg-primary/5 rounded-lg p-3 text-xs">
                <p className="font-medium mb-1">Form Progress:</p>
                <div className="space-y-1">
                  {["name", "email", "phone", "service"].map((field) => (
                    <div key={field} className="flex items-center">
                      <div
                        className={`w-3 h-3 rounded-full mr-2 ${jotFormData[field as keyof JotFormData] ? "bg-green-500" : "bg-gray-300"}`}
                      ></div>
                      <span className={jotFormData[field as keyof JotFormData] ? "text-green-700" : "text-gray-500"}>
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </CardContent>

          <form onSubmit={handleSubmit} className="p-3 border-t flex gap-2">
            <Input
              placeholder={isLoading ? "Thinking..." : "Type your message..."}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
              className="flex-1"
            />
            <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </Card>
      )}
    </>
  )
}

