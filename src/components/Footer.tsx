import { Facebook, Twitter, Instagram, MapPin, Phone, Mail, CreditCard, Smartphone, Shield, Truck } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white mt-16 font-exo">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-xl font-exo font-bold">EDUSHOP</div>
            </div>
            <p className="text-gray-300 text-sm mb-4 font-exo">
              A trusted e-commerce platform for the best education and technology needs at affordable prices.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-300 font-exo">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>Jl. Pendidikan No. 123, Jakarta</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300 font-exo">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+62 21 1234 5678</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300 font-exo">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>info@edushop.id</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-exo font-bold text-lg mb-4">About Edushop</h3>
            <ul className="space-y-3 text-sm font-exo">
              <li><a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-exo font-semibold mb-3">Ikuti Kami</h4>
            <div className="flex space-x-3">
              <button className="bg-white/10 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="bg-white/10 p-2 rounded-lg hover:bg-pink-600 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="bg-white/10 p-2 rounded-lg hover:bg-blue-400 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0 font-exo">
            © 2024 Edushop. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400 font-exo">
            <span>Terms & Conditions</span>
            <span>•</span>
            <span>About Us</span>
            <span>•</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>
    </footer>
  )
}