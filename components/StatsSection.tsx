"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const stats = [
  { label: "Top Speed", value: "2.25", unit: "Mach", desc: "Supercruise capability without afterburners" },
  { label: "Combat Radius", value: "460", unit: "NM", desc: "Extended range for deep penetration missions" },
  { label: "Thrust", value: "70,000", unit: "LBS", desc: "Combined thrust with two F119-PW-100 engines" },
  { label: "Ceiling", value: "50,000+", unit: "FT", desc: "Operating altitude for maximum stealth advantage" },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-white/5 transform skew-x-[-10deg] group-hover:bg-neo-orange/10 transition-colors duration-300 border border-white/10 group-hover:border-neo-orange/50" />
      <div className="relative p-8 transform skew-x-[-10deg]">
        <div className="transform skew-x-[10deg]">
          <div className="font-mono text-neo-orange text-xs mb-2 tracking-widest uppercase">{stat.label}</div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-5xl md:text-6xl text-white">{stat.value}</span>
            <span className="font-mono text-sm text-gray-400">{stat.unit}</span>
          </div>
          <div className="h-px w-full bg-white/10 my-4 group-hover:bg-neo-orange/30 transition-colors" />
          <p className="font-sans text-sm text-gray-400 leading-relaxed">
            {stat.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-16 border-l-2 border-neo-orange pl-6">
          <h2 className="font-display text-4xl md:text-6xl text-white uppercase mb-2">Dominance Metrics</h2>
          <p className="font-mono text-gray-400 uppercase tracking-widest">Classified Performance Data</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neo-orange/5 to-transparent pointer-events-none" />
    </section>
  );
}
