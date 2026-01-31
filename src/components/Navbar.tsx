"use client";
import React, { useState, useEffect } from "react";
import { ShoppingBag, Menu, Search, Moon, Sun } from "lucide-react";

export function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // সিস্টেম থিম চেক এবং টগল হ্যান্ডলার
  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.remove("dark");
      setDarkMode(false);
    } else {
      html.classList.add("dark");
      setDarkMode(true);
    }
  };

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center p-6 z-50 transition-colors duration-300">
      
      {/* Logo */}
      <div className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white italic z-50">
        NIKE<span className="text-blue-600">AIR</span>
      </div>

      {/* Menu Links (Desktop) */}
      <div className="hidden md:flex gap-8 font-bold text-sm text-slate-600 dark:text-slate-300">
        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">MEN</a>
        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">WOMEN</a>
        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">KIDS</a>
        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">SALE</a>
      </div>

      {/* Icons & Toggle */}
      <div className="flex gap-4 items-center z-50">
        
        {/* Dark/Light Toggle Button */}
        {/* <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-yellow-400 transition-all hover:scale-110"
        >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button> */}

        <button className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition">
           <Search size={20} className="text-slate-900 dark:text-white" />
        </button>
        
        <button className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition relative">
           <ShoppingBag size={20} className="text-slate-900 dark:text-white" />
           <span className="absolute top-1 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <button className="md:hidden p-2">
            <Menu size={24} className="text-slate-900 dark:text-white" />
        </button>
      </div>
    </nav>
  );
}