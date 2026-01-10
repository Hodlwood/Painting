import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">HandyPro</h3>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Your trusted partner for all home improvement and repair needs. Professional, reliable, and affordable
              handyman services.
            </p>
            <div className="flex items-center text-slate-300 mb-2">
              <Phone className="h-4 w-4 mr-2" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center text-slate-300 mb-2">
              <Mail className="h-4 w-4 mr-2" />
              <span>info@handypro.com</span>
            </div>
            <div className="flex items-center text-slate-300">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Greater Metro Area</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li>General Repairs</li>
              <li>Painting & Touch-ups</li>
              <li>Electrical Work</li>
              <li>Plumbing Services</li>
              <li>Carpentry</li>
              <li>Home Improvements</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 HandyPro. All rights reserved. Licensed, bonded, and insured.</p>
        </div>
      </div>
    </footer>
  )
}
