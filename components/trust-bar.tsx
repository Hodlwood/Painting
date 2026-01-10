const locations = ["Cape May", "Avalon", "Stone Harbor", "Sea Isle City"]

export function TrustBar() {
  return (
    <section className="bg-background py-8 border-b">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 font-semibold mb-6">
            <span className="text-xl">📍</span>
            <span className="text-base md:text-lg">Proudly Serving Homeowners & Businesses Across Cape May County</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {locations.map((location, index) => (
              <div key={index} className="font-medium text-sm md:text-base text-foreground">
                {location}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
