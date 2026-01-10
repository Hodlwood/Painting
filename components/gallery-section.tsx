"use client"

import type React from "react"
import Image from "next/image"

import { useState, useRef, useEffect } from "react"

export function GallerySection() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX)
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging])

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX)
    }
  }

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
              Our Work
            </span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">Before & After Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the dramatic transformation we created for this Delaware home
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-border/50 bg-card">
            {/* Before/After Slider Container */}
            <div
              ref={containerRef}
              className="relative w-full h-[500px] md:h-[600px] select-none cursor-ew-resize"
              onMouseDown={handleMouseDown}
              onTouchMove={handleTouchMove}
            >
              {/* After Image (Full) */}
              <div className="absolute inset-0 bg-muted/20 flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%2010-10-25%20at%208.31%E2%80%AFPM%20%281%29-BESSGvO1PwG8OJo8YXnZX3HblqDtYk.jpeg"
                  alt="After painting - interior room with blue walls and white trim"
                  fill
                  className="object-contain bg-muted/20"
                  priority
                />
                <div className="absolute top-6 right-6 bg-gradient-to-r from-primary to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg backdrop-blur-sm z-10">
                  AFTER
                </div>
              </div>

              {/* Before Image (Clipped) */}
              <div
                className="absolute inset-0 transition-all duration-100"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%2010-10-25%20at%208.31%E2%80%AFPM-FrTzxcekcrwAfbaKpS5EutvjguZWjI.jpeg"
                  alt="Before painting - interior room with windows"
                  fill
                  className="object-contain bg-muted/20"
                  priority
                />
                <div className="absolute top-6 left-6 bg-gray-800/90 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg backdrop-blur-sm z-10">
                  BEFORE
                </div>
              </div>

              {/* Slider Handle */}
              <div
                className="absolute inset-y-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Handle Circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-primary pointer-events-auto cursor-ew-resize">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      transform="rotate(90 12 12)"
                    />
                  </svg>
                </div>
              </div>

              {/* Instruction Overlay (fades out after interaction) */}
              {sliderPosition === 50 && !isDragging && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-black/60 text-white px-6 py-3 rounded-full text-sm font-semibold backdrop-blur-sm animate-pulse">
                    ← Drag to Compare →
                  </div>
                </div>
              )}
            </div>

            {/* Project Details */}
            <div className="p-6 md:p-8 bg-gradient-to-br from-card to-muted/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="font-heading font-bold text-2xl text-card-foreground mb-2">
                    Interior Room Transformation
                  </h3>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                    Wilmington, DE
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    Interior Painting
                  </span>
                  <span className="bg-blue-500/10 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Trim Work
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm">Drag the slider to see the complete transformation</p>
          </div>
        </div>
      </div>
    </section>
  )
}
