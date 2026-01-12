"use client"

import Image from "next/image"

export function PaintingHero() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/da86cd74-e969-42f3-8815-db83a1051747.png"
          alt="Modern beach house construction by Anthony Christaldi Builders"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            From Cape May to Avalon —{" "}
            <span className="text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">We Build It All</span>
          </h2>
          <p className="text-xl md:text-2xl text-white mb-8 text-pretty drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
            Family owned. Locally trusted. Building & Renovating Cape May County homes since 1975...
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:609-743-6280"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors text-lg"
            >
              📞 Call Now
            </a>
            <a
              href="sms:609-743-6280"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors text-lg"
            >
              💬 Free Estimate
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
