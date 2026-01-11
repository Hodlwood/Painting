"use client"
import Image from "next/image"

export function InteriorExteriorSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
                <span className="text-lg">🏘️</span>
                <span className="text-sm font-semibold text-primary">New Construction</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">New Home Construction</h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Build your dream home from the ground up with Anthony Christaldi Builders. With 50 years of experience,
                we bring your vision to life with expert craftsmanship, quality materials, and personalized attention to
                every detail.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg text-xl">
                    📐
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Custom Design</h3>
                    <p className="text-gray-600">Work with our team to design the perfect floor plan for your family</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg text-xl">
                    🔨
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Quality Construction</h3>
                    <p className="text-gray-600">Premium materials and expert craftsmanship in every build</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg text-xl">
                    ⏱️
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">On-Time Completion</h3>
                    <p className="text-gray-600">Reliable scheduling and project management you can count on</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg text-xl">
                    🏡
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Built to Last</h3>
                    <p className="text-gray-600">Homes engineered for durability and long-term value</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/images/home-2486092-1280.jpg"
                  alt="Custom home construction interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-2xl" />
            </div>
          </div>
        </div>

        <div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/images/screenshot-202026-01-11-20135105.jpg"
                  alt="Home addition with screened porch"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-full opacity-20 blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-2xl" />
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full border border-accent/20">
                <span className="text-lg">🔨</span>
                <span className="text-sm font-semibold text-accent">Remodeling</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Remodeling & Additions</h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Transform your existing space or add to it. From complete home renovations to kitchen and bathroom
                remodels, we deliver quality results that enhance your home's value and your quality of life.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0 shadow-lg text-xl">
                    🏠
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Home Additions</h3>
                    <p className="text-gray-600">Expand your living space with seamless additions</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0 shadow-lg text-xl">
                    🍳
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Kitchen & Bath Remodels</h3>
                    <p className="text-gray-600">Beautiful, functional spaces tailored to your lifestyle</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0 shadow-lg text-xl">
                    🎬
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Home Theater Rooms</h3>
                    <p className="text-gray-600">Custom entertainment spaces for the ultimate experience</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0 shadow-lg text-xl">
                    🛁
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Tub to Shower Conversions</h3>
                    <p className="text-gray-600">Our specialty! Modern, accessible bathroom upgrades</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
