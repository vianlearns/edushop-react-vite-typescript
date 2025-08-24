"use client";

import { Star, Heart, ShoppingCart } from "lucide-react";
import headphonesImage from "@/assets/headphones-yellow.jpg";
import smartwatchImage from "@/assets/smartwatch-black.jpg";
import laptopImage from "@/assets/laptop-black.jpg";
import smartphoneImage from "@/assets/smartphone-white.jpg";
import keyboardImage from "@/assets/gaming-keyboard.jpg";
import mouseImage from "@/assets/wireless-mouse.jpg";
import coffeeMakerImage from "@/assets/coffee-maker.jpg";
import powerBankImage from "@/assets/power-bank.jpg";

export default function RecommendedProducts() {
  const recommendedProducts = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones Premium",
      price: "Rp 299.000",
      rating: 4.8,
      reviews: 158,
      image: headphonesImage,
      isWishlisted: false,
    },
    {
      id: 2,
      name: "Smart Watch Series X Pro Max",
      price: "Rp 1.299.000",
      rating: 4.9,
      reviews: 89,
      image: smartwatchImage,
      isWishlisted: true,
    },
    {
      id: 3,
      name: "Laptop Gaming Ultra Performance",
      price: "Rp 15.999.000",
      rating: 4.7,
      reviews: 234,
      image: laptopImage,
      isWishlisted: false,
    },
    {
      id: 4,
      name: "Smartphone Android Flagship",
      price: "Rp 8.999.000",
      rating: 4.6,
      reviews: 312,
      image: smartphoneImage,
      isWishlisted: false,
    },
    {
      id: 5,
      name: "Mechanical Keyboard RGB",
      price: "Rp 899.000",
      rating: 4.5,
      reviews: 67,
      image: keyboardImage,
      isWishlisted: false,
    },
    {
      id: 6,
      name: "Wireless Mouse Ergonomic Design",
      price: "Rp 399.000",
      rating: 4.4,
      reviews: 98,
      image: mouseImage,
      isWishlisted: true,
    },
    {
      id: 7,
      name: "Premium Coffee Maker Deluxe",
      price: "Rp 1.999.000",
      rating: 4.3,
      reviews: 45,
      image: coffeeMakerImage,
      isWishlisted: false,
    },
    {
      id: 8,
      name: "Power Bank 20000mAh Fast Charge",
      price: "Rp 299.000",
      rating: 4.7,
      reviews: 143,
      image: powerBankImage,
      isWishlisted: false,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-yellow-400' 
            : i < rating 
            ? 'text-yellow-400 fill-yellow-400/50' 
            : 'text-muted-foreground/30'
        }`}
      />
    ));
  };

  return (
    <div className="mb-8 animate-slide-up">
      <div className="mb-4 md:mb-6">
        <h2 className="text-xl md:text-2xl font-exo font-bold text-foreground mb-2">Rekomendasi Untukmu</h2>
        <p className="text-sm md:text-base text-muted-foreground">Produk pilihan terbaik yang dipersonalisasi khusus untuk kebutuhan Anda</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {recommendedProducts.map((product, index) => (
          <div
            key={product.id}
            className="product-card group cursor-pointer animate-scale-in"
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <div className="relative overflow-hidden rounded-xl md:rounded-2xl">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-32 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              
              {/* Wishlist Button */}
              <button className="absolute top-2 right-2 p-1.5 md:p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-300 group">
                <Heart className={`h-3 w-3 md:h-4 md:w-4 ${product.isWishlisted ? 'text-destructive fill-destructive' : 'text-muted-foreground'} group-hover:scale-110 transition-transform duration-300`} />
              </button>
              
              {/* Quick Add to Cart - Hide on mobile */}
              <div className="hidden md:flex absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
                <button className="bg-white text-foreground px-4 py-2 rounded-xl font-semibold hover:bg-accent transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  <span>Tambah</span>
                </button>
              </div>
            </div>
            
            <div className="p-2 md:p-4">
              <h3 className="text-xs md:text-base font-exo font-semibold text-card-foreground mb-1 md:mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                <span className="line-clamp-2 md:line-clamp-1">{product.name}</span>
              </h3>
              
              <div className="flex items-center gap-1 mb-1 md:mb-2">
                <div className="flex">
                  {renderStars(product.rating)}
                </div>
                <span className="text-xs md:text-sm text-muted-foreground ml-1">
                  {product.rating}
                </span>
                <span className="text-xs text-muted-foreground hidden md:inline">
                  ({product.reviews})
                </span>
              </div>
              
            <div className="text-sm md:text-xl font-bold text-primary mb-2 md:mb-3">
              {product.price}
            </div>
            
            <button className="w-full bg-primary text-primary-foreground py-1.5 md:py-2 rounded-lg md:rounded-xl text-xs md:text-sm font-medium hover:bg-primary-dark transition-all duration-300">
              Beli Sekarang
            </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-6">
        <button className="bg-card border border-primary text-primary px-6 py-2 rounded-xl text-sm font-medium hover:bg-primary/5 transition-all duration-300">
          Lihat Produk Lainnya
        </button>
      </div>
    </div>
  );
}