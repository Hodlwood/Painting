"use client"

export function CtaSection() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-blue-700" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Content */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold border border-white/30">
                Get Your Free Estimate Today
              </span>
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Ready to Start
              <br />
              Your Project?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Call now to speak with a local building expert. Serving Cape May, Avalon, Stone Harbor, Sea Isle City, and
              surrounding communities for over 50 years.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="tel:609-743-6280"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-white/90 transition-colors text-lg"
              >
                📞 Call (609) 743-6280
              </a>
              <a
                href="sms:609-743-6280"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-lg"
              >
                💬 Text Us Now
              </a>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all hover:scale-105 group">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform text-3xl">
                📞
              </div>
              <h3 className="font-bold text-white text-lg mb-2">Call Anytime</h3>
              <a
                href="tel:609-743-6280"
                className="text-white/90 hover:text-white transition-colors text-lg font-semibold"
              >
                (609) 743-6280
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all hover:scale-105 group">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform text-3xl">
                ⏱️
              </div>
              <h3 className="font-bold text-white text-lg mb-2">Quick Response</h3>
              <p className="text-white/90 text-sm">Free estimates for all projects</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all hover:scale-105 group">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform text-3xl">
                📍
              </div>
              <h3 className="font-bold text-white text-lg mb-2">Service Area</h3>
              <p className="text-white/90 text-sm">Cape May County & surrounding areas</p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-lg">🏆</span>
              <span>Licensed & Insured</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30" />
            <div className="flex items-center gap-2">
              <span className="text-lg">👨‍👩‍👧‍👦</span>
              <span>Family Owned Since 1975</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30" />
            <div className="flex items-center gap-2">
              <span className="text-lg">🏆</span>
              <span>50+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
