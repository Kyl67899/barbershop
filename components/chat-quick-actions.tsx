"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Clock, FileText, Phone, Scissors } from "lucide-react"

interface ChatQuickActionsProps {
  onActionClick: (action: string) => void
}

export default function ChatQuickActions({ onActionClick }: ChatQuickActionsProps) {
  return (
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground">Quick actions:</p>
      <div className="grid grid-cols-2 gap-2">
        <Button
          variant="outline"
          size="sm"
          className="justify-start"
          onClick={() => onActionClick("I want to book an appointment")}
        >
          <Calendar className="mr-2 h-4 w-4" />
          Book Appointment
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="justify-start"
          onClick={() => onActionClick("What services do you offer?")}
        >
          <Scissors className="mr-2 h-4 w-4" />
          Services
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="justify-start"
          onClick={() => onActionClick("What are your business hours?")}
        >
          <Clock className="mr-2 h-4 w-4" />
          Business Hours
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="justify-start"
          onClick={() => onActionClick("How can I contact you?")}
        >
          <Phone className="mr-2 h-4 w-4" />
          Contact Info
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="justify-start col-span-2"
          onClick={() => onActionClick("I'd like to fill out a contact form")}
        >
          <FileText className="mr-2 h-4 w-4" />
          Fill Out Contact Form
        </Button>
      </div>
    </div>
  )
}

