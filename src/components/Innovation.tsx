"use client";
import React from "react";
import { motion } from "framer-motion";
import { Wind, Zap, ShieldCheck } from "lucide-react";

export function Innovation() {
  return (
    <section className="py-32 bg-slate-900 dark:bg-black relative overflow-hidden">
      
      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-5 pointer-events-none">
        <h2 className="text-[20vw] font-black text-white leading-none tracking-tighter uppercase">
            FUTURE
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
            <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">Engineered for Speed</span>
            <h2 className="text-5xl md:text-7xl font-black text-white mt-4 mb-8 italic uppercase leading-none">
                Innovation <br /> Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Power</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
                Our labs spent 5 years perfecting the Aero-Sole technology. It returns 40% more energy than any other foam on the market.
            </p>

            {/* Features List */}
            <div className="space-y-8">
                <Feature icon={<Wind />} title="Aerodynamic Flow" desc="Reduces drag by 15% allowing you to cut through air." />
                <Feature icon={<Zap />} title="Energy Return" desc="Carbon fiber plate propels you forward with every step." />
                <Feature icon={<ShieldCheck />} title="Durability" desc="Reinforced mesh upper lasts 3x longer than standard knit." />
            </div>
        </div>

        {/* Right Image (Abstract/Tech) */}
        <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900 to-slate-900 border border-white/10"
        >
             {/* Abstract Mesh Grid Image */}
             <img 
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop" 
                alt="Shoe Detail" 
                className="w-full h-full object-cover opacity-60 mix-blend-overlay"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
             
             {/* Floating Info Card inside image */}
             <motion.div 
                whileHover={{ y: -10 }}
                className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl"
             >
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-xs text-blue-300 font-bold uppercase">Material</p>
                        <p className="text-xl font-bold text-white">Nano-Weave Knit</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-blue-300 font-bold uppercase">Weight</p>
                        <p className="text-xl font-bold text-white">140g</p>
                    </div>
                </div>
             </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

function Feature({ icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-600/20 text-blue-500 border border-blue-500/30">
                {icon}
            </div>
            <div>
                <h4 className="text-xl font-bold text-white mb-1">{title}</h4>
                <p className="text-slate-400 text-sm">{desc}</p>
            </div>
        </div>
    )
}