"use client";

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-foreground via-foreground/95 to-foreground text-background">
      {/* Newsletter Section */}
      <div className="py-12 border-b border-white/20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-exo font-bold mb-2">Dapatkan Update Terbaru</h3>
          <p className="text-background/80 mb-6">
            Berlangganan newsletter kami untuk mendapatkan info promo dan produk terbaru
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Masukkan email Anda..."
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-background placeholder-background/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="bg-primary hover:bg-primary-dark text-primary-foreground px-6 py-3 rounded-xl font-semibold transition-colors duration-300">
              Berlangganan
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
                    <div className="w-4 h-3 bg-primary rounded-sm relative">
                      <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="text-xl font-exo font-bold">EDUSHOP</div>
              </div>
              <p className="text-background/80 text-sm mb-4">
                Platform e-commerce terpercaya untuk kebutuhan pendidikan dan teknologi terbaik dengan harga terjangkau.
              </p>
              <div className="space-y-2 text-sm">
                <p>📍 Jl. Pendidikan No. 123, Jakarta</p>
                <p>📞 +62 21 1234 5678</p>
                <p>✉️ info@edushop.id</p>
              </div>
            </div>

            {/* About Edushop */}
            <div>
              <h4 className="font-exo font-semibold mb-4">Tentang Edushop</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li><a href="#" className="hover:text-primary transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Karir</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Kebijakan Privasi</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Syarat & Ketentuan</a></li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h4 className="font-exo font-semibold mb-4">Bantuan</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li><a href="#" className="hover:text-primary transition-colors">Pusat Bantuan</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cara Belanja</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cara Jual</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Hubungi Kami</a></li>
              </ul>
            </div>

            {/* Payment & Social */}
            <div>
              <h4 className="font-exo font-semibold mb-4">Pembayaran</h4>
              <div className="grid grid-cols-4 gap-2 mb-6">
                <div className="bg-white/10 p-2 rounded text-center">💳</div>
                <div className="bg-white/10 p-2 rounded text-center">🏦</div>
                <div className="bg-white/10 p-2 rounded text-center">💰</div>
                <div className="bg-white/10 p-2 rounded text-center">📱</div>
              </div>
              
              <h4 className="font-exo font-semibold mb-4">Ikuti Kami</h4>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/80">
            <p>© 2024 Edushop. Semua hak dilindungi.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Keamanan & Privasi</a>
              <a href="#" className="hover:text-primary transition-colors">Peta Situs</a>
              <a href="#" className="hover:text-primary transition-colors">Hubungi Kami</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}