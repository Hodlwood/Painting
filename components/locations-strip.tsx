const credentials = [
  { icon: "⭐", text: "50+ Years Experience" },
  { icon: "👨‍👩‍👧‍👦", text: "Family Owned" },
  { icon: "🏠", text: "Licensed & Insured" },
  { icon: "🏆", text: "100% Satisfaction Guaranteed" },
]

export function LocationsStrip() {
  return (
    <section className="bg-secondary py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {credentials.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm md:text-base font-semibold text-white">{item.text}</span>
              {index < credentials.length - 1 && <span className="hidden md:inline text-white/60 ml-4 md:ml-6">|</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
