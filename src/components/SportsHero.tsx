"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { PlayCircle } from "lucide-react";

export function SportsHero() {
  
  // --- MOUSE MOVEMENT LOGIC ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["25deg", "-25deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-25deg", "25deg"]);
  const moveX = useTransform(mouseXSpring, [-0.5, 0.5], ["-30px", "30px"]);
  const moveY = useTransform(mouseYSpring, [-0.5, 0.5], ["-30px", "30px"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center pt-20 transition-colors duration-500 bg-[#f3f4f6] dark:bg-[#0b0b0b] perspective-1000"
    >
      
      {/* BACKGROUND BIG TEXT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0">
        {/* Fix: dark:text-[#222] এবং opacity-100 দেওয়া হয়েছে যাতে কালো ব্যাকগ্রাউন্ডে দেখা যায় */}
        <h1 className="text-[18vw] font-black text-white dark:text-[#222] drop-shadow-xl dark:drop-shadow-none opacity-60 dark:opacity-100 leading-none uppercase tracking-tighter select-none transition-colors duration-500">
          AIR MAX
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        
        {/* LEFT: TEXT */}
        <div className="text-center md:text-left order-2 md:order-1 pointer-events-none md:pointer-events-auto flex flex-col items-center md:items-start">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center md:items-start w-full"
            >
                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-xs md:text-sm mb-4 tracking-wider">
                    NEW COLLECTION 2026
                </span>
                
                <h2 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tight mb-6 leading-[0.9]">
                    RUN <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">FASTER.</span>
                </h2>
                
                <p className="text-slate-500 dark:text-slate-400 text-lg max-w-md mb-8 leading-relaxed font-medium">
                    Experience zero gravity. The new AeroStride X1 features adaptive cushioning for maximum energy return.
                </p>

                {/* BUTTONS FIX: w-fit ক্লাস দেওয়া হয়েছে যাতে বাটন স্ট্রেচ না হয় */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pointer-events-auto w-full items-center md:items-start">
                    <button className="w-fit px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-bold shadow-lg hover:bg-slate-800 dark:hover:bg-slate-200 hover:scale-105 transition-all flex items-center justify-center gap-2">
                        ADD TO BAG - $199
                    </button>
                    <button className="w-fit px-8 py-4 bg-white dark:bg-transparent text-slate-900 dark:text-white border border-slate-200 dark:border-white/20 rounded-full font-bold hover:bg-slate-50 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                        <PlayCircle size={20} /> WATCH VIDEO
                    </button>
                </div>

                {/* STATS */}
                <div className="mt-12 flex gap-10 justify-center md:justify-start border-t border-slate-200 dark:border-white/10 pt-6 w-full">
                    <div>
                        <p className="text-2xl font-black text-slate-900 dark:text-white">180g</p>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Weight</p>
                    </div>
                    <div>
                        <p className="text-2xl font-black text-slate-900 dark:text-white">95%</p>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Energy Return</p>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* RIGHT: SHOE IMAGE */}
        <motion.div 
            className="relative h-[40vh] md:h-[80vh] flex items-center justify-center order-1 md:order-2 perspective-1000 cursor-pointer"
        >
            <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute w-[280px] md:w-[500px] h-[280px] md:h-[500px] bg-blue-500 rounded-full blur-[80px] md:blur-[120px] opacity-20 dark:opacity-30" 
            />
            
            <motion.img 
                src="https://pngimg.com/d/running_shoes_PNG5823.png" 
                alt="Nike Air Max"
                style={{ 
                    rotateX: rotateX, 
                    rotateY: rotateY,
                    x: moveX,
                    y: moveY
                }}
                initial={{ opacity: 0, scale: 0.8, x: 100, rotate: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0, rotate: -15 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-20 w-full max-w-[400px] md:max-w-[650px] drop-shadow-[-30px_30px_40px_rgba(0,0,0,0.4)] dark:drop-shadow-[-30px_30px_40px_rgba(0,0,0,0.8)] object-contain transform-gpu"
            />
        </motion.div>

      </div>
    </section>
  );
}