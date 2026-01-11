"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export function PaintingHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-28 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="flex items-center group">
            <div className="h-32 flex items-center transition-transform group-hover:scale-105">
              <Image
                src="/images/8a47b8cd-97ed-4191-8c2b.png"
                alt="Anthony Christaldi Builders"
                width={400}
                height={128}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#gallery" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link href="#reviews" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Reviews
            </Link>
            <Link href="#process" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Process
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:609-743-6280"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <span className="text-lg">📞</span>
              <span>(609) 743-6280</span>
            </a>
            <a
              href="sms:609-743-6280"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-colors text-sm"
            >
              <span className="text-base">💬</span>
              Free Estimate
            </a>
            <button
              className="md:hidden p-2 text-2xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4 space-y-3">
            <Link
              href="#services"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="#gallery"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="#reviews"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Reviews
            </Link>
            <Link
              href="#process"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Process
            </Link>
            <a href="tel:609-743-6280" className="flex items-center gap-2 text-sm font-medium text-primary">
              <span className="text-lg">📞</span>
              <span>(609) 743-6280</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
