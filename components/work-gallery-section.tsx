"use client"

import { useState } from "react"
import Image from "next/image"

const galleryImages = [
  {
    id: 1,
    title: "Modern Kitchen Transformation",
    category: "Kitchen & Bathroom",
    size: "large",
    image: "/images/screenshot-202026-01-11-20150004.png",
  },
  {
    id: 2,
    title: "Custom Home Exterior",
    category: "New Home Construction",
    size: "medium",
    image: "/images/screenshot-2026-01-11-204606.png",
  },
  {
    id: 3,
    title: "Luxury Bathroom Remodel",
    category: "Kitchen & Bathroom",
    size: "medium",
    image: "/images/screenshot-2025-11-05-175930.png",
  },
  {
    id: 4,
    title: "Home Addition",
    category: "Home Additions",
    size: "large",
    image: "/images/image1.jpeg",
  },
  {
    id: 5,
    title: "Living Space Renovation",
    category: "Remodeling",
    size: "medium",
    image: "/images/screenshot-202026-01-11-20153632.png",
  },
  {
    id: 6,
    title: "Custom Deck Build",
    category: "Decks",
    size: "medium",
    image: "/images/screenshot-2026-01-11-135014.png",
  },
  {
    id: 7,
    title: "Shower Conversion",
    category: "Bath Tub to Shower Conversions",
    size: "medium",
    image: "/images/screenshot-2025-11-05-175235.png",
  },
  {
    id: 8,
    title: "Home Theater Installation",
    category: "Home Theater Rooms",
    size: "medium",
    image: "/images/screenshot-2026-01-11-134912.png",
  },
]

export function WorkGallerySection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">See Our Work</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every project showcases our commitment to quality craftsmanship and attention to detail. Here's a glimpse of
            what we can build for you.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`
                relative overflow-hidden rounded-2xl group cursor-pointer
                transition-all duration-500 ease-out
                col-span-1
                ${image.size === "large" ? "md:col-span-2" : ""}
                ${index === 0 ? "md:row-span-2" : ""}
                ${index === 3 ? "md:row-span-2" : ""}
                hover:scale-[1.02] hover:shadow-2xl
              `}
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-square bg-gradient-to-br from-blue-100 via-slate-100 to-blue-50">
                <Image
                  src={
                    image.image ||
                    `/.jpg?height=600&width=600&query=${encodeURIComponent(image.title) || "/placeholder.svg"}`
                  }
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div
                  className={`
                    absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent
                    transition-opacity duration-300
                    ${hoveredId === image.id ? "opacity-100" : "opacity-0"}
                  `}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium mb-2">
                      {image.category}
                    </span>
                    <h3 className="text-xl font-bold">{image.title}</h3>
                  </div>
                </div>

                {/* Border Accent */}
                <div className="absolute inset-0 border-2 border-blue-500/0 group-hover:border-blue-500/50 transition-colors duration-300 rounded-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ready to start your construction or remodeling project?</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:609-743-6280"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              📞 Call Now
            </a>
            <a
              href="sms:609-743-6280"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Free Estimate
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
