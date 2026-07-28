import type React from "react"
import type { Metadata, Viewport } from "next"
import { Bodoni_Moda, Manrope } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from "@next/third-parties/google"

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" })
const bodoni = Bodoni_Moda({ subsets: ["latin"], variable: "--font-bodoni" })

export const metadata: Metadata = {
  title: { default: "Elite Cuts | Precision Without Compromise", template: "%s | Elite Cuts" },
  description: "A premium barbershop combining master craftsmanship, modern style, and an uncompromising grooming experience since 2008.",
  icons: { icon: "/favicon.ico" },
}

export const viewport: Viewport = { themeColor: "#12110f", width: "device-width", initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${bodoni.variable} bg-background`}>
      <body className="font-sans antialiased">
        <Analytics />
        <GoogleAnalytics gaId="G-PTLLKTT35L" />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
