"use client";

import { ShoppingCart, Plus } from "lucide-react";
import { useState } from "react";

export default function FloatingCartButton() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCartClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
    console.log("Cart button clicked");
  };

  return (
    <button
      onClick={handleCartClick}
      className={`fixed bottom-20 right-4 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground rounded-2xl p-4 shadow-2xl md:hidden z-40 transition-all duration-300 hover:from-primary-dark hover:to-primary hover:scale-110 ${
        isAnimating ? "animate-bounce" : ""
      }`}
    >
      <div className="relative">
        <ShoppingCart className="h-6 w-6" />
        <div className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold pulse-glow">
          3
        </div>
        {/* Plus animation overlay */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          isAnimating ? "opacity-100 scale-150" : "opacity-0 scale-100"
        }`}>
          <Plus className="h-4 w-4 text-primary-foreground" />
        </div>
      </div>
    </button>
  );
}