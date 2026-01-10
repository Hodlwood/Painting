const steps = [
  {
    icon: "📋",
    number: "01",
    title: "Free Estimate",
    description: "On-site or virtual walkthrough with detailed pricing.",
  },
  {
    icon: "🎨",
    number: "02",
    title: "Design & Color Guidance",
    description: "We help you choose the perfect finish and tones.",
  },
  {
    icon: "🖌️",
    number: "03",
    title: "Prep & Paint",
    description: "Surfaces are cleaned, repaired, and expertly coated.",
  },
  {
    icon: "✅",
    number: "04",
    title: "Final Walkthrough",
    description: "No job is done until you're 100% satisfied.",
  },
]

export function ProcessSection() {
  return (
    <section
      id="process"
      className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
            Our Process: Easy from Start to Finish
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, transparent, and designed around your needs
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative mb-24">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
          <div className="hidden lg:block absolute top-0 left-1/2 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary/30 to-transparent -translate-x-1/2" />

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 lg:gap-y-16">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0

              return (
                <div key={index} className={`relative group ${isLeft ? "md:text-right" : "md:text-left"}`}>
                  <div className="relative inline-block">
                    {/* Large number background */}
                    <div
                      className={`absolute ${isLeft ? "-right-8 md:-right-12" : "-left-8 md:-left-12"} -top-6 text-8xl md:text-9xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors duration-300`}
                    >
                      {step.number}
                    </div>

                    {/* Icon container */}
                    <div
                      className={`relative inline-flex items-center justify-center w-20 h-20 mb-6 ${isLeft ? "md:ml-auto" : "md:mr-auto"}`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary rounded-2xl -rotate-6 group-hover:-rotate-12 transition-transform duration-300 opacity-50" />
                      <div className="relative z-10 w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg text-3xl">
                        {step.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${isLeft ? "md:pr-8" : "md:pl-8"}`}>
                      <h3 className="font-heading font-bold text-2xl md:text-3xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-sm mx-auto md:mx-0">
                        {step.description}
                      </p>
                    </div>

                    {/* Decorative dot */}
                    <div
                      className={`hidden lg:block absolute top-1/2 ${isLeft ? "-right-2" : "-left-2"} w-4 h-4 bg-primary rounded-full -translate-y-1/2 group-hover:scale-150 transition-transform duration-300 shadow-lg shadow-primary/50`}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
