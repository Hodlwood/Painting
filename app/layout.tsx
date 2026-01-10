import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans, Inter, Poppins } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Professional Painting Services | Fresh Coat Painters",
  description:
    "Expert interior and exterior painting services. Serving Bear, Middletown, Newark, Odessa, Smyrna, and Townsend. Get your free quote today!",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${inter.variable} ${poppins.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  )
}
