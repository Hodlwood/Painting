"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Clock } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-800 mb-4">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Get your free quote today and let us help you bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-heading font-bold text-slate-800">Get Your Free Quote</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      className="w-full"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                      className="w-full"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="w-full"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                    Service Needed *
                  </label>
                  <Select onValueChange={(value) => handleChange("service", value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general-repairs">General Repairs</SelectItem>
                      <SelectItem value="painting">Painting & Touch-ups</SelectItem>
                      <SelectItem value="electrical">Electrical Work</SelectItem>
                      <SelectItem value="plumbing">Plumbing Services</SelectItem>
                      <SelectItem value="carpentry">Carpentry</SelectItem>
                      <SelectItem value="home-improvements">Home Improvements</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Project Description
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={4}
                    className="w-full"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 text-lg font-semibold"
                >
                  Request a Free Quote
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold text-slate-800 mb-6">Get In Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Phone</h4>
                      <p className="text-slate-600">(555) 123-4567</p>
                      <p className="text-sm text-slate-500">Available 24/7 for emergencies</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Service Area</h4>
                      <p className="text-slate-600">Greater Metro Area</p>
                      <p className="text-sm text-slate-500">Within 25 miles of downtown</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Business Hours</h4>
                      <p className="text-slate-600">Mon-Fri: 7AM - 7PM</p>
                      <p className="text-slate-600">Sat-Sun: 8AM - 5PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="shadow-lg bg-blue-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold text-slate-800 mb-6">Why Choose HandyPro?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Licensed, bonded, and insured
                  </li>
                  <li className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    15+ years of experience
                  </li>
                  <li className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    100% satisfaction guarantee
                  </li>
                  <li className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Free estimates and consultations
                  </li>
                  <li className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Same-day service available
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
