import Link from "next/link"
import { Facebook } from "lucide-react"

export function PaintingFooter() {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <span className="font-heading font-bold text-2xl text-white">AC Builders</span>
            </div>
            <p className="text-white/70 text-sm mb-4">
              Building quality homes in Cape May County since 1975. Three generations of craftsmanship and family
              values.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61581568745991"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="text-white/70 hover:text-white transition-colors">
                  New Home Construction
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/70 hover:text-white transition-colors">
                  Home Additions
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/70 hover:text-white transition-colors">
                  Remodeling
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/70 hover:text-white transition-colors">
                  Kitchen & Bathroom
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/70 hover:text-white transition-colors">
                  Tub to Shower Conversions
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/70 hover:text-white transition-colors">
                  Custom Decks
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#gallery" className="text-white/70 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="text-white/70 hover:text-white transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-white/70 hover:text-white transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/70 hover:text-white transition-colors">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:609-743-6280" className="text-white/70 hover:text-white transition-colors">
                  (609) 743-6280
                </a>
              </li>
              <li className="text-white/70">
                Serving Cape May, Avalon, Stone Harbor, Sea Isle City & surrounding Cape May County areas
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2025 AC Builders. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
