"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "How long has Anthony Christaldi Builders been in business?",
      answer:
        "Anthony Christaldi Builders has been serving Cape May County since 1975. With over 50 years of experience, we're a trusted family-owned business with three generations of building expertise.",
    },
    {
      question: "What types of construction services do you offer?",
      answer:
        "We offer comprehensive construction services including new home construction, home additions, complete remodeling, kitchen and bathroom renovations, home theater rooms, custom decks, and our specialty - bath tub to shower conversions.",
    },
    {
      question: "Do you handle both new construction and renovations?",
      answer:
        "Yes! We specialize in both new home construction from the ground up and renovation projects of all sizes. Whether you're building your dream home or updating your current space, we have the expertise to deliver quality results.",
    },
    {
      question: "What makes bath tub to shower conversions your specialty?",
      answer:
        "We've perfected the art of converting outdated bathtubs into modern, accessible shower spaces. Our team has completed hundreds of these conversions throughout Cape May County, ensuring seamless installation, proper waterproofing, and beautiful finishes every time.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "Absolutely. Anthony Christaldi Builders is fully licensed in New Jersey and carries comprehensive insurance for your complete protection and peace of mind throughout your project.",
    },
    {
      question: "How long does a typical remodeling project take?",
      answer:
        "Project timelines vary based on scope and complexity. Kitchen remodels typically take 4-8 weeks, bathroom remodels 2-4 weeks, and bath tub to shower conversions can often be completed in just a few days. We'll provide a detailed timeline with your estimate.",
    },
    {
      question: "Do you provide free estimates?",
      answer:
        "Yes! We offer free, no-obligation estimates for all our services. Contact us at (609) 743-6280 to schedule a consultation and discuss your project.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We proudly serve all of Cape May County including Cape May, Avalon, Stone Harbor, Sea Isle City, and surrounding communities. We've been building in this area for 50 years and know the local building codes and requirements inside and out.",
    },
    {
      question: "What sets Anthony Christaldi Builders apart from other contractors?",
      answer:
        "Our 50-year legacy, family ownership, and commitment to quality craftsmanship set us apart. We treat every project like it's our own home, using premium materials and time-tested techniques backed by three generations of building expertise.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get answers to common questions about our construction and remodeling services in Cape May County
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border border-slate-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left text-slate-900 hover:text-blue-600 py-5 text-base md:text-lg font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-5 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
