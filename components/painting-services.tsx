import { Card } from "@/components/ui/card"

const services = [
  {
    icon: "🏘️",
    title: "New Home Construction",
    description:
      "Custom-built homes from foundation to finish. We bring your dream home to life with quality craftsmanship and attention to detail.",
  },
  {
    icon: "🏗️",
    title: "Home Additions",
    description:
      "Expand your living space with expertly designed and built additions that blend seamlessly with your existing home.",
  },
  {
    icon: "🔨",
    title: "Remodeling",
    description:
      "Complete home renovations that transform your space. From concept to completion, we handle every detail of your remodel.",
  },
  {
    icon: "🍳",
    title: "Kitchen & Bathroom",
    description: "Stunning kitchen and bathroom remodels that combine functionality with beautiful design.",
  },
  {
    icon: "🎬",
    title: "Home Theater Rooms",
    description: "Custom home theaters designed for the ultimate entertainment experience with acoustic perfection.",
  },
  {
    icon: "🛁",
    title: "Bath Tub to Shower Conversions",
    description:
      "Our specialty! Transform outdated tubs into modern, accessible shower spaces with professional installation.",
  },
  {
    icon: "🪵",
    title: "Decks",
    description: "Beautiful outdoor living spaces built to last. Custom deck design and construction for your home.",
  },
]

export function PaintingServices() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">Our Building Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-service construction and remodeling solutions for homeowners throughout Cape May County.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            return (
              <Card
                key={index}
                className="group relative p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-border/50 hover:border-primary/30 bg-gradient-to-br from-blue-100 via-blue-50 to-slate-50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 text-3xl">
                    {service.icon}
                  </div>

                  <h3 className="font-heading font-bold text-2xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
