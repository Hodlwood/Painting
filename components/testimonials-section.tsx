import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Downtown",
    rating: 5,
    text: "HandyPro transformed our kitchen cabinets beautifully. The attention to detail was incredible, and they finished ahead of schedule!",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Mike Chen",
    location: "Westside",
    rating: 5,
    text: "Best handyman service in town! They fixed our plumbing issues and painted our entire living room. Professional and affordable.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Emily Rodriguez",
    location: "Northbrook",
    rating: 5,
    text: "I was amazed by the quality of work. They repaired our deck and it looks brand new. Highly recommend their services!",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-800 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-600 mb-6 leading-relaxed">"{testimonial.text}"</p>

                {/* Customer Info */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
