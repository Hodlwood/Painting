"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-heading font-bold text-blue-600">HandyPro</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#gallery" className="text-slate-700 hover:text-blue-600 transition-colors">
              Gallery
            </a>
            <a href="#testimonials" className="text-slate-700 hover:text-blue-600 transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-slate-700">
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-medium">(555) 123-4567</span>
            </div>
            <Button className="bg-sky-500 hover:bg-sky-600 text-white">Free Quote</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-700 hover:text-blue-600">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors">
                Services
              </a>
              <a href="#gallery" className="text-slate-700 hover:text-blue-600 transition-colors">
                Gallery
              </a>
              <a href="#testimonials" className="text-slate-700 hover:text-blue-600 transition-colors">
                Reviews
              </a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">
                Contact
              </a>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center text-slate-700 mb-4">
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="font-medium">(555) 123-4567</span>
                </div>
                <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white">Free Quote</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
