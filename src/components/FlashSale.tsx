"use client";

import { Clock, Zap } from "lucide-react";
import headphonesImage from "@/assets/headphones-yellow.jpg";
import smartwatchImage from "@/assets/smartwatch-black.jpg";
import coffeeMakerImage from "@/assets/coffee-maker.jpg";
import keyboardImage from "@/assets/gaming-keyboard.jpg";
import ProductCard from "./ProductCard";

export default function FlashSale() {
  const flashProducts = [
    {
      id: '1',
      name: "Wireless Bluetooth Headphones",
      price: 299000,
      discount: 199000,
      image: headphonesImage,
    },
    {
      id: '2',
      name: "Smart Watch Series 7",
      price: 299000,
      discount: 199000,
      image: smartwatchImage,
    },
    {
      id: '3',
      name: "Premium Coffee Maker",
      price: 299000,
      discount: 199000,
      image: coffeeMakerImage,
    },
    {
      id: '4',
      name: "Gaming Mechanical Keyboard",
      price: 299000,
      discount: 199000,
      image: keyboardImage,
    },
  ];

  return (
    <div className="mb-8 animate-slide-up">
      {/* Flash Sale Header */}
      <div className="flash-gradient rounded-t-3xl p-6 text-white">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center m-3">
            <div className="bg-white/20 p-2 rounded-xl mr-2">
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
          {flashProducts.map((product, index) => (<ProductCard key={index} product={product} />))}
        </div>
      </div>
    </div>
  );
}