"use client"

export function WarrantySection() {
  const guarantees = [
    {
      icon: "🛡️",
      title: "Limited Warranty",
      description: "All our work is backed by an exclusive warranty for your peace of mind",
    },
    {
      icon: "🏆",
      title: "Licensed & Insured",
      description: "Fully licensed and insured professionals committed to protecting you and your property",
    },
    {
      icon: "✅",
      title: "Quality Assured",
      description: "We don't consider the job done until you're completely satisfied",
    },
  ]

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-primary via-blue-900 to-blue-950">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent rounded-full blur-3xl"></div>
      </div>

      {/* Diagonal pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal-lines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="40" y2="40" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-6xl text-white mb-6">Our Service Guarantee</h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light">
            Your satisfaction and peace of mind are our top priorities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {guarantees.map((item, index) => (
            <div key={index} className="group relative">
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20">
                {/* Icon container with glow */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto shadow-lg text-4xl">
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-2xl text-white mb-4 text-center">{item.title}</h3>
                <p className="text-blue-100 text-center leading-relaxed">{item.description}</p>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-secondary/50 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-accent/50 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent line */}
        <div className="mt-16 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent max-w-4xl mx-auto"></div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:443-760-6051"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/90 transition-colors text-lg shadow-lg"
          >
            📞 Call Now
          </a>
          <a
            href="sms:443-760-6051"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors text-lg shadow-lg"
          >
            💬 Text Us
          </a>
        </div>
      </div>
    </section>
  )
}
