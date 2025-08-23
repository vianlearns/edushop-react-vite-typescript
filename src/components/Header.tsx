"use client"

import { useState } from 'react'
import { Search, ShoppingCart, User, Menu } from 'lucide-react'

export default function Header() {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 glass-morphism border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              {/* Logo Icon */}
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
                  <div className="w-4 h-3 bg-primary rounded-sm relative">
                    <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              {/* Logo Text */}
              <div className="text-2xl font-exo font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                EDUSHOP
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 mx-6 max-w-xl">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Cari produk, buku, atau kategori..." 
                className="w-full py-3 pl-12 pr-4 rounded-2xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white/80 backdrop-blur-sm text-foreground placeholder-muted-foreground transition-all duration-300 font-exo"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
              <button className="absolute right-2 top-1.5 bg-primary hover:bg-primary-dark text-primary-foreground p-2 rounded-xl transition-colors duration-300">
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Header Actions */}
          <div className="flex items-center gap-4">
            {/* Login/Signup */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors duration-300 font-exo">
                Login
              </button>
              <button className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground px-4 py-2 rounded-xl text-sm font-medium hover:from-primary-dark hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl font-exo">
                Daftar
              </button>
            </div>
            
            {/* Cart with Badge */}
            <div className="relative">
              <button className="text-muted-foreground hover:text-primary p-2 rounded-xl hover:bg-accent transition-all duration-300 group">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-destructive to-flash-sale text-destructive-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium pulse-glow">
                  3
                </span>
              </button>
            </div>
            
            {/* Mobile Menu */}
            <div className="lg:hidden">
              <button 
                className="text-muted-foreground hover:text-primary p-2 rounded-xl hover:bg-accent transition-all duration-300"
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex space-x-8 border-t border-white/20 pt-3 pb-2 font-exo">
          <a href="#" className="text-primary font-semibold text-sm hover:text-primary-dark transition-colors duration-300">
            Beranda
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors duration-300">
            Kategori
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors duration-300">
            Promo
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors duration-300">
            Toko
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors duration-300">
            Bantuan
          </a>
        </div>
      </div>
    </header>
  )
}