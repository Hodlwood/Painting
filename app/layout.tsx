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
  title: "Anthony Christaldi Builders | Building & Renovating Cape May County Homes Since 1975",
  description:
    "Family owned building contractor specializing in new home construction, additions, remodeling, kitchen & bathroom renovations, home theaters, and tub to shower conversions. Serving all of Cape May County - Cape May, Avalon, Stone Harbor, Sea Isle City, Wildwood, Ocean City, and surrounding areas.",
  generator: "v0.app",
  openGraph: {
    title: "Anthony Christaldi Builders | Building & Renovating Cape May County Homes Since 1975",
    description:
      "Family owned building contractor specializing in new home construction, additions, remodeling, kitchen & bathroom renovations, home theaters, and tub to shower conversions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anthony Christaldi Builders | Cape May County Contractor",
    description: "Family owned building contractor. Building & renovating Cape May County homes since 1975.",
  },
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
