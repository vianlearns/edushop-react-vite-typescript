"use client";

import { Smartphone, Shirt, Home, Droplet, Gift, ShoppingBag } from "lucide-react";

export default function PopularCategories() {
  const categories = [
    { name: "Elektronik", icon: Smartphone, colorClass: "category-electronics" },
    { name: "Fashion", icon: Shirt, colorClass: "category-fashion" },
    { name: "Rumah", icon: Home, colorClass: "category-home" },
    { name: "Kecantikan", icon: Droplet, colorClass: "category-beauty" },
    { name: "Mainan", icon: Gift, colorClass: "category-toys" },
    { name: "Sembako", icon: ShoppingBag, colorClass: "category-food" },
  ];

  return (
    <div className="mb-8 animate-slide-up">
      <h2 className="text-2xl font-exo font-bold mb-6 text-foreground">Kategori Populer</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-card p-4 md:p-6 text-center cursor-pointer group animate-scale-in"
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-3 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className={`${category.colorClass} p-2 rounded-xl shadow-lg`}>
                <category.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
              </div>
            </div>
            <span className="text-sm md:text-base font-exo font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}