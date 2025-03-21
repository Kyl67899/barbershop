import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Elite Cuts | Premium Barbershop",
  description: "Elite Cuts is a premium barbershop offering exceptional grooming services since 2008.",
}

// console.log(process.env.RESEND_API_KEY);


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body className={inter.className}>
        <Analytics />
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
        <Toaster />
        {/* <EliteChatbot /> */}
      </body>
    </html>
  )
}

