"use client"

import Image from "next/image"

export function PaintingHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/screenshot-202026-01-10-20153939.png"
          alt="Modern beach house construction by AC Builders"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight text-balance">
            From Cape May to Avalon — <span className="text-primary">We Build It All</span>
          </h2>
          <p className="text-xl md:text-2xl text-white mb-8 text-pretty">
            Locally owned. Family trusted. Building Cape May County homes since 1975.
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
