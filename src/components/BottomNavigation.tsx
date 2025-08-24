"use client";

import { Home, Search, ShoppingCart, User, ReceiptText } from "lucide-react";
import { useState } from "react";

export default function BottomNavigation() {
  const [activeTab, setActiveTab] = useState("home");
  const [cartAmount, setCartAmount] = useState<number>();

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "search", icon: Search, label: "Search" },
    { id: "cart", icon: ShoppingCart, label: "Cart" },
    { id: "transactions", icon: ReceiptText, label: "Transactions" },
    { id: "profile", icon: User, label: "Profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/90 backdrop-blur-lg border-t border-border/50 md:hidden z-50">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center py-2 px-3 rounded-xl transition-all duration-300 ${
              activeTab === item.id
                ? "text-primary bg-primary/10"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            <div className="relative">
              <item.icon 
                className={`h-5 w-5 mb-1 transition-transform duration-300 ${
                  activeTab === item.id ? "scale-110" : ""
                }`} 
              />
              {item.id === "cart" && cartAmount && (
                <div className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cartAmount}
                </div>
              )}
            </div>
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}