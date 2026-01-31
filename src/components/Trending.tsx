"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Air Zoom Pegasus",
    category: "Running",
    price: "180",
    rating: "4.9",
    img: "https://pngimg.com/d/running_shoes_PNG5816.png", // Blue Shoe
    color: "bg-blue-500"
  },
  {
    id: 2,
    name: "Crimson Runner X",
    category: "Marathon",
    price: "220",
    rating: "5.0",
    img: "https://pngimg.com/d/running_shoes_PNG5817.png", // Red Shoe
    color: "bg-red-500"
  },
  {
    id: 3,
    name: "Neon Velocity",
    category: "Training",
    price: "150",
    rating: "4.8",
    img: "https://pngimg.com/d/running_shoes_PNG5823.png", // Orange/Green
    color: "bg-orange-500"
  }
];

export function Trending() {
  return (
    <section className="py-24 px-4 bg-white dark:bg-[#0b0b0b] transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-16">
            <div>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter">
                    Trending <span className="text-blue-600">Drops</span>
                </h2>
            </div>
            <button className="hidden md:block text-sm font-bold border-b-2 border-slate-900 dark:border-white pb-1 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 transition-colors dark:text-white">
                VIEW ALL
            </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {products.map((item, i) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="group relative bg-[#f8f9fa] dark:bg-[#151515] rounded-[2rem] p-8 cursor-pointer transition-colors duration-500"
                >
                    {/* Floating Product Image */}
                    <div className="h-[250px] flex items-center justify-center relative z-10">
                        <motion.img 
                            whileHover={{ scale: 1.1, rotate: -15, y: -20 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            src={item.img} 
                            alt={item.name} 
                            className="w-full h-full object-contain drop-shadow-2xl"
                        />
                    </div>

                    {/* Background Blob Effect */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 ${item.color} rounded-full blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />

                    {/* Info */}
                    <div className="mt-6 flex justify-between items-end relative z-20">
                        <div>
                            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">{item.category}</p>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white italic">{item.name}</h3>
                            <div className="flex items-center gap-1 mt-2 text-yellow-400 text-sm font-bold">
                                <Star size={16} fill="currentColor" /> {item.rating}
                            </div>
                        </div>
                        <div className="text-right">
                             <p className="text-2xl font-black text-slate-900 dark:text-white">${item.price}</p>
                             <button className="mt-2 p-3 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full hover:scale-110 transition-transform">
                                <ShoppingBag size={20} />
                             </button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}