"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0A0A0A]">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div 
          className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080')] bg-cover bg-center grayscale mix-blend-overlay"
          style={{
            transform: `scale(1.1) translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0A0A0A_100%)]" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-10 grid-bg opacity-20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 text-center flex flex-col items-center max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4"
        >
          <span className="font-mono text-neo-orange tracking-[0.5em] text-sm md:text-base uppercase border border-neo-orange/30 px-4 py-2 rounded-full backdrop-blur-sm">
            Lockheed Martin F-22
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
          className="font-display text-6xl md:text-9xl uppercase tracking-tighter text-white mb-6 glitch-effect"
          data-text="AIR SUPERIORITY REDEFINED"
        >
          Air Superiority
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
            Redefined
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-8 items-center font-mono text-sm md:text-base text-gray-400 tracking-widest uppercase"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-neo-orange" />
            Stealth
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-neo-orange" />
            Supercruise
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-neo-orange" />
            Thrust Vectoring
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12"
        >
          <button className="group relative px-8 py-4 bg-transparent overflow-hidden border border-neo-orange text-neo-orange font-mono uppercase tracking-widest hover:text-black transition-colors duration-300">
            <span className="absolute inset-0 w-full h-full bg-neo-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 flex items-center gap-2 font-bold">
              Initialize Systems
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </span>
          </button>
        </motion.div>
      </div>

      {/* Decorative HUD Elements */}
      <div className="absolute top-10 left-10 z-20 hidden md:block">
        <div className="w-64 h-32 border-l border-t border-white/20 relative">
          <div className="absolute top-0 left-0 w-2 h-2 bg-white" />
          <div className="p-4 font-mono text-xs text-white/50">
            <div>ALT: 50,000 FT</div>
            <div>SPD: MACH 2.25</div>
            <div>HDG: 045 MARK 2</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 z-20 hidden md:block">
        <div className="w-64 h-32 border-r border-b border-white/20 relative flex items-end justify-end">
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-white" />
          <div className="p-4 font-mono text-xs text-white/50 text-right">
            <div>RADAR: ACTIVE</div>
            <div>WEAPONS: ARMED</div>
            <div>FUEL: 98%</div>
          </div>
        </div>
      </div>
    </section>
  );
}
