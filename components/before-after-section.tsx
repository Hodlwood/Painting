"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Kitchen Cabinet Refinishing",
    before: "/placeholder.svg?height=400&width=600",
    after: "/placeholder.svg?height=400&width=600",
    description: "Complete cabinet refinishing with new hardware and paint finish.",
  },
  {
    id: 2,
    title: "Bathroom Tile Repair",
    before: "/placeholder.svg?height=400&width=600",
    after: "/placeholder.svg?height=400&width=600",
    description: "Professional tile replacement and grout restoration.",
  },
  {
    id: 3,
    title: "Deck Restoration",
    before: "/placeholder.svg?height=400&width=600",
    after: "/placeholder.svg?height=400&width=600",
    description: "Complete deck sanding, staining, and weatherproofing.",
  },
  {
    id: 4,
    title: "Interior Painting",
    before: "/placeholder.svg?height=400&width=600",
    after: "/placeholder.svg?height=400&width=600",
    description: "Full room painting with wall preparation and trim work.",
  },
]

export function BeforeAfterSection() {
  const [currentProject, setCurrentProject] = useState(0)
  const [showAfter, setShowAfter] = useState(false)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
    setShowAfter(false)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
    setShowAfter(false)
  }

  const project = projects[currentProject]

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-800 mb-4">See the Transformation</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Every project tells a story of transformation. See how we turn your vision into reality.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="relative">
                {/* Image Container */}
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={showAfter ? project.after : project.before}
                    alt={`${project.title} - ${showAfter ? "After" : "Before"}`}
                    className="w-full h-full object-cover transition-all duration-500"
                  />

                  {/* Before/After Toggle */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        showAfter ? "bg-green-500 text-white" : "bg-red-500 text-white"
                      }`}
                    >
                      {showAfter ? "AFTER" : "BEFORE"}
                    </span>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevProject}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
                  >
                    <ChevronLeft className="h-6 w-6 text-slate-700" />
                  </button>
                  <button
                    onClick={nextProject}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
                  >
                    <ChevronRight className="h-6 w-6 text-slate-700" />
                  </button>
                </div>

                {/* Project Info */}
                <div className="p-8 bg-slate-50">
                  <h3 className="text-2xl font-heading font-bold text-slate-800 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-6">{project.description}</p>

                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <Button
                      onClick={() => setShowAfter(!showAfter)}
                      className={`px-8 py-3 font-semibold transition-all duration-300 ${
                        showAfter
                          ? "bg-red-500 hover:bg-red-600 text-white"
                          : "bg-green-500 hover:bg-green-600 text-white"
                      }`}
                    >
                      {showAfter ? "Show Before" : "Show After"}
                    </Button>

                    {/* Project Counter */}
                    <div className="flex items-center space-x-2">
                      {projects.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setCurrentProject(index)
                            setShowAfter(false)
                          }}
                          className={`w-3 h-3 rounded-full transition-all duration-200 ${
                            index === currentProject ? "bg-blue-600" : "bg-slate-300 hover:bg-slate-400"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
