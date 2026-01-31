"use client";
import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

export function SportsFooter() {
  return (
    <footer className="bg-white dark:bg-[#0b0b0b] pt-20 pb-10 border-t border-slate-200 dark:border-white/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
                <div className="text-3xl font-black italic tracking-tighter text-slate-900 dark:text-white mb-6">
                    NIKE<span className="text-blue-600">AIR</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                    Designed for athletes who demand the best. Performance meets style in every stitch.
                </p>
                <div className="flex gap-4">
                    <SocialIcon icon={<Facebook size={18} />} />
                    <SocialIcon icon={<Twitter size={18} />} />
                    <SocialIcon icon={<Instagram size={18} />} />
                </div>
            </div>

            {/* Links */}
            <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
                <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-4 uppercase text-sm tracking-wider">Products</h4>
                    <ul className="space-y-2 text-slate-500 dark:text-slate-400 text-sm">
                        <li className="hover:text-blue-600 cursor-pointer">Running</li>
                        <li className="hover:text-blue-600 cursor-pointer">Basketball</li>
                        <li className="hover:text-blue-600 cursor-pointer">Training</li>
                        <li className="hover:text-blue-600 cursor-pointer">Casual</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-4 uppercase text-sm tracking-wider">Company</h4>
                    <ul className="space-y-2 text-slate-500 dark:text-slate-400 text-sm">
                        <li className="hover:text-blue-600 cursor-pointer">About Us</li>
                        <li className="hover:text-blue-600 cursor-pointer">Careers</li>
                        <li className="hover:text-blue-600 cursor-pointer">News</li>
                    </ul>
                </div>
            </div>

            {/* Newsletter */}
            <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-4 uppercase text-sm tracking-wider">Stay Updated</h4>
                <div className="flex flex-col gap-3">
                    <input 
                        type="email" 
                        placeholder="Enter email" 
                        className="p-3 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
                    />
                    <button className="p-3 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-black font-bold uppercase text-sm hover:opacity-90 transition">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>

        <div className="border-t border-slate-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>&copy; 2026 Pro Sports Gear. All rights reserved.</p>
            <div className="flex gap-6">
                <span className="cursor-pointer hover:text-blue-600">Privacy Policy</span>
                <span className="cursor-pointer hover:text-blue-600">Terms of Use</span>
            </div>
        </div>

      </div>
    </footer>
  );
}

function SocialIcon({icon}: {icon: any}) {
    return (
        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-600 dark:text-white hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
            {icon}
        </div>
    )
}