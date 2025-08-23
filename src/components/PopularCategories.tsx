"use client";

import { 
  PenTool, 
  BookOpen, 
  Smartphone, 
  Armchair, 
  FlaskConical, 
  Coffee, 
  Shirt, 
  Monitor, 
  Cloud 
} from "lucide-react";

export default function PopularCategories() {
  const categories = [
    { name: "Alat Tulis & ATK", icon: PenTool, colorClass: "category-electronics" },
    { name: "Buku & Belajar", icon: BookOpen, colorClass: "category-fashion" },
    { name: "Elektronik Edu", icon: Smartphone, colorClass: "category-home" },
    { name: "Furniture Kelas", icon: Armchair, colorClass: "category-beauty" },
    { name: "Lab & Praktikum", icon: FlaskConical, colorClass: "category-toys" },
    { name: "Kantin & Konsumsi", icon: Coffee, colorClass: "category-food" },
    { name: "Seragam & Fashion", icon: Shirt, colorClass: "category-electronics" },
    { name: "Ruang Belajar", icon: Monitor, colorClass: "category-fashion" },
    { name: "Digital & Layanan", icon: Cloud, colorClass: "category-home" },
  ];

  return (
    <div className="mb-8 animate-slide-up">
      <h2 className="text-xl font-exo font-bold mb-4 text-foreground">Kategori Populer</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
        {categories.slice(0, 6).map((category, index) => (
          <div
            key={index}
            className="category-card p-3 md:p-4 text-center cursor-pointer group animate-scale-in bg-card rounded-2xl border border-border/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-2 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className={`${category.colorClass} p-2 rounded-xl shadow-lg`}>
                <category.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
            </div>
            <span className="text-xs md:text-sm font-exo font-medium text-card-foreground group-hover:text-primary transition-colors duration-300 text-center leading-tight">
              {category.name}
            </span>
          </div>
        ))}
      </div>
      
      {/* View All Categories Button - matching reference image */}
      <div className="text-center mt-6">
        <button className="bg-card border border-primary text-primary px-6 py-2 rounded-xl text-sm font-medium hover:bg-primary/5 transition-all duration-300">
          Lihat Kategori Lainnya
        </button>
      </div>
    </div>
  );
}