import { Card, CardContent } from "@/components/ui/card"
import { Wrench, Paintbrush, Zap, Droplets, Hammer, Home } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "General Repairs",
    description: "Fix anything that needs attention in your home, from squeaky doors to broken fixtures.",
  },
  {
    icon: Paintbrush,
    title: "Painting & Touch-ups",
    description: "Interior and exterior painting services to refresh and protect your property.",
  },
  {
    icon: Zap,
    title: "Electrical Work",
    description: "Safe and reliable electrical repairs, installations, and upgrades by licensed professionals.",
  },
  {
    icon: Droplets,
    title: "Plumbing Services",
    description: "From leaky faucets to pipe repairs, we handle all your plumbing needs.",
  },
  {
    icon: Hammer,
    title: "Carpentry",
    description: "Custom woodwork, furniture repair, and carpentry projects of all sizes.",
  },
  {
    icon: Home,
    title: "Home Improvements",
    description: "Transform your space with renovations, installations, and upgrades.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-800 mb-4">Our Expert Services</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            No job is too big or too small. We provide comprehensive handyman services to keep your home in perfect
            condition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-slate-800 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
