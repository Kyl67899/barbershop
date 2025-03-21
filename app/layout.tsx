import type React from "react"
import type { Metadata } from "next"
import Head from "next/head"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from '@next/third-parties/google'

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
    <html>
      <div>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className={inter.className}>
          <Analytics />
          <GoogleAnalytics gaId="G-PTLLKTT35L" />
          <Navbar />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
          <Toaster />
          {/* <EliteChatbot /> */}
        </body>
      </div>
    </html>
  )
}

