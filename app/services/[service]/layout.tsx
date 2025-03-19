import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from 'lucide-react'
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Service Details | Elite Cuts Barbershop",
  description: "Detailed information about our premium barbershop services.",
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Link 
          href="/services" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to all services
        </Link>
        
        {children}
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Experience Elite Cuts?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Book your appointment today and let our expert barbers take care of you.
          </p>
          <Button asChild size="lg">
            <Link href="/booking">Book This Service</Link>
          </Button>
        </div>
      </div>
      <Toaster />
    </div>
  )
}

