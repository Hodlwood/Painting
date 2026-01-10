import { PaintingHeader } from "@/components/painting-header"
import { PaintingHero } from "@/components/painting-hero"
import { LocationsStrip } from "@/components/locations-strip"
import { TrustBar } from "@/components/trust-bar"
import { PaintingServices } from "@/components/painting-services"
import { InteriorExteriorSection } from "@/components/interior-exterior-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { WorkGallerySection } from "@/components/work-gallery-section"
import { ProcessSection } from "@/components/process-section"
import { WarrantySection } from "@/components/warranty-section"
import { GallerySection } from "@/components/gallery-section"
import { ReviewsSection } from "@/components/reviews-section"
import { CtaSection } from "@/components/cta-section"
import { FaqSection } from "@/components/faq-section"
import { PaintingFooter } from "@/components/painting-footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <PaintingHeader />
      <PaintingHero />
      <LocationsStrip />
      <TrustBar />
      <PaintingServices />
      <WorkGallerySection />
      <InteriorExteriorSection />
      <WhyChooseUs />
      <ProcessSection />
      <WarrantySection />
      <GallerySection />
      <ReviewsSection />
      <FaqSection />
      <CtaSection />
      <PaintingFooter />
    </main>
  )
}
