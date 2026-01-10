import { Button } from "@/components/ui/button"
import { Play, CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source
            src="/placeholder.mp4?height=1080&width=1920&query=handyman working on home renovation project"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-blue-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            Transform Your Space with Expert Handyman Services
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
            From repairs to renovations, we handle it all. Get your free quote today and see the difference professional
            craftsmanship makes.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-blue-100">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
              <span>15+ Years Experience</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
              <span>Same Day Service</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 text-lg font-semibold">
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold bg-transparent"
            >
              <Play className="h-5 w-5 mr-2" />
              Watch Our Work
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
