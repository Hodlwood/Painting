"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const reviews = [
  {
    name: "Sarah M.",
    location: "Wilmington, DE",
    rating: 5,
    text: "The crew was respectful, on time, and professional. My kitchen looks brand new after their cabinet painting service!",
  },
  {
    name: "Mark B.",
    location: "Newark, DE",
    rating: 5,
    text: "We found Elite by searching painters in my area — best decision we made this year.",
  },
  {
    name: "Dana R.",
    location: "Bear, DE",
    rating: 5,
    text: "The exterior house painters from Elite completely transformed our home in 3 days.",
  },
]

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 5000)
    return () => clearInterval(timer)
  }, [currentIndex])

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const currentReview = reviews[currentIndex]

  return (
    <section
      id="reviews"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-primary/10 via-white to-primary/5"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">Customer Reviews</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it—hear from homeowners across Delaware
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main review card */}
            <div
              className={`bg-white/90 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-2xl border border-primary/20 transition-all duration-500 ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              {/* Large quote icon */}
              <div className="absolute top-8 left-8 opacity-10 text-8xl text-primary">"</div>

              {/* Stars */}
              <div className="flex items-center justify-center gap-2 mb-6 relative z-10">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <span key={i} className="text-3xl">
                    ⭐
                  </span>
                ))}
              </div>

              {/* Review text */}
              <blockquote className="text-center mb-8 relative z-10">
                <p className="text-xl md:text-2xl text-foreground leading-relaxed font-medium">
                  "{currentReview.text}"
                </p>
              </blockquote>

              {/* Reviewer info */}
              <div className="text-center relative z-10">
                <div className="inline-block">
                  <p className="font-bold text-lg text-foreground mb-1">{currentReview.name}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full" />
                    {currentReview.location}
                  </p>
                </div>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-primary/30 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-primary/30 rounded-bl-3xl" />
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 md:-ml-20">
              <Button
                onClick={handlePrev}
                size="icon"
                variant="outline"
                className="w-12 h-12 rounded-full bg-white shadow-lg hover:bg-primary/10 hover:border-primary hover:scale-110 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 md:-mr-20">
              <Button
                onClick={handleNext}
                size="icon"
                variant="outline"
                className="w-12 h-12 rounded-full bg-white shadow-lg hover:bg-primary/10 hover:border-primary hover:scale-110 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true)
                    setCurrentIndex(index)
                    setTimeout(() => setIsAnimating(false), 500)
                  }
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex ? "w-12 h-3 bg-primary" : "w-3 h-3 bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
