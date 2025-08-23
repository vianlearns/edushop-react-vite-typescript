import { Facebook, Twitter, Instagram, MapPin, Phone, Mail, CreditCard, Smartphone, Shield, Truck } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white mt-16 font-exo">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-exo font-bold mb-3">Dapatkan Update Terbaru</h3>
            <p className="text-gray-300 mb-6 font-exo">Berlangganan newsletter kami untuk mendapatkan info promo dan produk terbaru</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Masukkan email Anda..." 
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-exo"
              />
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 rounded-xl font-exo font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300">
                Berlangganan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
                  <div className="w-4 h-3 bg-blue-500 rounded-sm relative">
                    <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="text-xl font-exo font-bold">EDUSHOP</div>
            </div>
            <p className="text-gray-300 text-sm mb-4 font-exo">
              Platform e-commerce terpercaya untuk kebutuhan pendidikan dan teknologi terbaik dengan harga terjangkau.
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
            <h3 className="font-exo font-bold text-lg mb-4">Tentang Edushop</h3>
            <ul className="space-y-3 text-sm font-exo">
              <li><a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300">Tentang Kami</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300">Karir</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300">Kebijakan Privasi</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300">Syarat & Ketentuan</a></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="font-exo font-bold text-lg mb-4">Bantuan</h3>
            <ul className="space-y-3 text-sm font-exo">
              <li><a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300">Pusat Bantuan</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300">Cara Berbelanja</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300">Cara Jual</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300">Hubungi Kami</a></li>
            </ul>
          </div>

          {/* Payment & Security */}
          <div>
            <h3 className="font-exo font-bold text-lg mb-4">Pembayaran</h3>
            <div className="grid grid-cols-4 gap-2 mb-6">
              <div className="bg-white/10 rounded-lg p-2 flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-blue-400" />
              </div>
              <div className="bg-white/10 rounded-lg p-2 flex items-center justify-center">
                <Smartphone className="h-5 w-5 text-green-400" />
              </div>
              <div className="bg-white/10 rounded-lg p-2 flex items-center justify-center">
                <Shield className="h-5 w-5 text-purple-400" />
              </div>
              <div className="bg-white/10 rounded-lg p-2 flex items-center justify-center">
                <Truck className="h-5 w-5 text-orange-400" />
              </div>
            </div>

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
            © 2024 Edushop. Semua hak dilindungi.
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400 font-exo">
            <span>Keamanan & Privasi</span>
            <span>•</span>
            <span>Peta Situs</span>
            <span>•</span>
            <span>Hubungi Kami</span>
          </div>
        </div>
      </div>
    </footer>
  )
}