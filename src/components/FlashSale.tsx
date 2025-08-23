"use client";

import { Clock, Zap } from "lucide-react";
import headphonesImage from "@/assets/headphones-yellow.jpg";
import smartwatchImage from "@/assets/smartwatch-black.jpg";
import coffeeMakerImage from "@/assets/coffee-maker.jpg";
import keyboardImage from "@/assets/gaming-keyboard.jpg";

export default function FlashSale() {
  const flashProducts = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: "Rp 199.000",
      originalPrice: "Rp 299.000",
      discount: "33%",
      image: headphonesImage,
    },
    {
      id: 2,
      name: "Smart Watch Series 7",
      price: "Rp 2.499.000",
      originalPrice: "Rp 3.499.000",
      discount: "29%",
      image: smartwatchImage,
    },
    {
      id: 3,
      name: "Premium Coffee Maker",
      price: "Rp 1.799.000",
      originalPrice: "Rp 2.499.000",
      discount: "28%",
      image: coffeeMakerImage,
    },
    {
      id: 4,
      name: "Gaming Mechanical Keyboard",
      price: "Rp 899.000",
      originalPrice: "Rp 1.299.000",
      discount: "31%",
      image: keyboardImage,
    },
  ];

  return (
    <div className="mb-8 animate-slide-up">
      {/* Flash Sale Header */}
      <div className="flash-gradient rounded-t-3xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-xl">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-exo font-bold">⚡ Flash Sale</h2>
              <p className="text-white/90 text-sm">Jangan lewatkan kesempatan emas ini! Hemat hingga 50% untuk produk pilihan</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-xl backdrop-blur-sm">
            <Clock className="h-4 w-4" />
            <span className="text-sm font-medium">Berakhir dalam:</span>
            <div className="flex gap-1">
              <span className="bg-white text-flash-sale px-2 py-1 rounded-lg text-xs font-bold min-w-[2rem] text-center">23</span>
              <span className="text-white">:</span>
              <span className="bg-white text-flash-sale px-2 py-1 rounded-lg text-xs font-bold min-w-[2rem] text-center">59</span>
              <span className="text-white">:</span>
              <span className="bg-white text-flash-sale px-2 py-1 rounded-lg text-xs font-bold min-w-[2rem] text-center">36</span>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="bg-card rounded-b-3xl p-6 shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {flashProducts.map((product, index) => (
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
                <div className="absolute top-2 left-2 flash-gradient text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg">
                  -{product.discount}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4">
                <h3 className="text-sm md:text-base font-exo font-semibold text-card-foreground line-clamp-1 mb-2 group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </h3>
                <div className="flex flex-col gap-1">
                  <div className="text-lg md:text-xl font-bold text-primary">
                    {product.price}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground line-through">
                    {product.originalPrice}
                  </div>
                </div>
                <button className="w-full mt-3 bg-primary text-primary-foreground py-2 rounded-xl text-sm font-medium hover:bg-primary-dark transition-all duration-300">
                  Beli Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}