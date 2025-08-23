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
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-exo font-bold text-foreground">Rekomendasi Untukmu</h2>
        <p className="text-muted-foreground">Produk pilihan terbaik yang dipersonalisasi khusus untuk kebutuhan Anda</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {recommendedProducts.map((product, index) => (
          <div
            key={product.id}
            className="product-card group cursor-pointer animate-scale-in"
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              
              {/* Wishlist Button */}
              <button className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-300 group">
                <Heart className={`h-4 w-4 ${product.isWishlisted ? 'text-destructive fill-destructive' : 'text-muted-foreground'} group-hover:scale-110 transition-transform duration-300`} />
              </button>
              
              {/* Quick Add to Cart */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-foreground px-4 py-2 rounded-xl font-semibold hover:bg-accent transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  <span className="hidden md:inline">Tambah</span>
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="text-sm md:text-base font-exo font-semibold text-card-foreground line-clamp-1 mb-2 group-hover:text-primary transition-colors duration-300">
                {product.name}
              </h3>
              
              <div className="flex items-center gap-1 mb-2">
                <div className="flex">
                  {renderStars(product.rating)}
                </div>
                <span className="text-sm text-muted-foreground ml-1">
                  {product.rating}
                </span>
                <span className="text-xs text-muted-foreground">
                  ({product.reviews})
                </span>
              </div>
              
              <div className="text-lg md:text-xl font-bold text-primary mb-3">
                {product.price}
              </div>
              
              <button className="w-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground py-2.5 rounded-xl text-sm font-semibold hover:from-primary-dark hover:to-primary transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
                Beli Sekarang
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <button className="bg-card border-2 border-primary text-primary px-8 py-3 rounded-xl font-semibold hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl">
          Lihat Produk Lainnya
        </button>
      </div>
    </div>
  );
}