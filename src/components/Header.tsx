"use client"

import { useState } from 'react'
import { Search, ShoppingCart } from 'lucide-react'

export default function Header() {
  const [hasCart, setCart] = useState<number>();
  return (
    <header className="sticky top-0 z-50 glass-morphism border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              {/* Logo Text */}
              <div className="text-2xl font-exo font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                EDUSHOP
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 mx-6 max-w-xl max-md:hidden">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search products, books, or categories..." 
                className="w-full py-3 pl-12 pr-4 rounded-2xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white/80 backdrop-blur-sm text-foreground placeholder-muted-foreground transition-all duration-300 font-exo"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
              <button className="absolute right-2 top-1.5 bg-primary hover:bg-primary-dark text-primary-foreground p-2 rounded-xl transition-colors duration-300">
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Header Actions */}
          <div className="flex items-center gap-4 max-md:hidden">
            {/* Cart with Badge */}
            <div className="relative">
              <button className="text-muted-foreground hover:text-primary p-2 rounded-xl hover:bg-accent transition-all duration-300 group">
                <ShoppingCart className="h-6 w-6" />
                { hasCart && (<span className="absolute -top-1 -right-1 bg-gradient-to-r from-destructive to-flash-sale text-destructive-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium pulse-glow">{hasCart}</span>) }
              </button>
            </div>
            {/* Login/Signup */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors duration-300 font-exo">
                Login
              </button>
              <button className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground px-4 py-2 rounded-xl text-sm font-medium hover:from-primary-dark hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl font-exo">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}