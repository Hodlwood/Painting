const features = [
  {
    icon: "🏗️",
    title: "50 Years of Building Excellence",
    description:
      "Since 1975, our family has been building quality homes and completing renovations throughout Cape May County with unmatched craftsmanship.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family Owned & Operated",
    description:
      "Three generations of builders who treat your home like our own. Personal service from start to finish.",
  },
  {
    icon: "🏆",
    title: "Licensed & Fully Insured",
    description:
      "Fully licensed New Jersey contractor (License #13VH0492600) with comprehensive insurance for your complete protection and peace of mind.",
  },
  {
    icon: "🛁",
    title: "Bath Tub to Shower Conversion Specialists",
    description:
      "Our specialty service! Expert conversions that transform your bathroom into a modern, accessible space.",
  },
  {
    icon: "💎",
    title: "Quality Craftsmanship Guaranteed",
    description:
      "We use only premium materials and proven techniques. Every project backed by our satisfaction guarantee.",
  },
  {
    icon: "🤝",
    title: "Honest, Transparent Pricing",
    description: "No hidden fees or surprises. Clear quotes and open communication throughout your entire project.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="relative bg-gradient-to-br from-primary via-blue-900 to-blue-950 rounded-3xl p-12 md:p-16 shadow-2xl overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
                Why Choose Anthony Christaldi Builders?
              </h2>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                We're more than builders—we're your trusted partners in creating the home of your dreams.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                return (
                  <div
                    key={index}
                    className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Icon container with gradient */}
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-blue-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 text-3xl">
                      {feature.icon}
                    </div>

                    <h3 className="font-heading font-semibold text-xl mb-3 text-white">{feature.title}</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">{feature.description}</p>

                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <a
                href="tel:609-743-6280"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors text-lg shadow-lg"
              >
                📞 Call Now
              </a>
              <a
                href="sms:609-743-6280"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-50 transition-colors text-lg shadow-lg"
              >
                Free Estimate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
