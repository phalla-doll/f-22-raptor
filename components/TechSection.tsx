"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const features = [
  {
    id: "stealth",
    title: "Stealth",
    description: "The F-22's stealth coating and airframe design minimize its radar cross-section, making it nearly invisible to enemy radar systems until it's too late.",
    details: ["Radar Absorbent Material (RAM)", "Serpentine Air Inlets", "Internal Weapons Bays"]
  },
  {
    id: "avionics",
    title: "Sensor Fusion",
    description: "Advanced avionics integrate data from multiple onboard and offboard sensors, providing the pilot with unprecedented situational awareness.",
    details: ["AN/APG-77 AESA Radar", "ALR-94 EW System", "Link 16 Data Link"]
  },
  {
    id: "maneuver",
    title: "Thrust Vectoring",
    description: "2D thrust vectoring nozzles allow the F-22 to perform maneuvers impossible for other aircraft, granting superior dogfighting capability.",
    details: ["±20 Degree Pitch Control", "Post-Stall Maneuvering", "High Angle of Attack"]
  }
];

export default function TechSection() {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <section className="py-24 bg-[#0F0F0F] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Navigation */}
          <div className="lg:w-1/3">
            <h2 className="font-display text-4xl md:text-5xl text-white uppercase mb-8">
              Technology <span className="text-neo-orange">Breakdown</span>
            </h2>
            
            <div className="flex flex-col gap-4">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature)}
                  className={`group text-left p-6 border transition-all duration-300 relative overflow-hidden ${
                    activeFeature.id === feature.id 
                      ? "border-neo-orange bg-neo-orange/5" 
                      : "border-white/10 hover:border-white/30 bg-white/5"
                  }`}
                >
                  <div className={`absolute inset-0 w-1 bg-neo-orange transition-transform duration-300 ${
                    activeFeature.id === feature.id ? "scale-y-100" : "scale-y-0 group-hover:scale-y-50"
                  }`} />
                  
                  <span className={`font-mono text-sm tracking-widest uppercase block mb-1 ${
                    activeFeature.id === feature.id ? "text-neo-orange" : "text-gray-500"
                  }`}>
                    System 0{features.indexOf(feature) + 1}
                  </span>
                  <span className="font-display text-2xl uppercase text-white">
                    {feature.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Content Display */}
          <div className="lg:w-2/3 relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="h-full flex flex-col justify-center"
              >
                <div className="border border-white/10 bg-[#0A0A0A] p-8 md:p-12 relative overflow-hidden">
                  {/* Decorative Background Tech Lines */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg width="100%" height="100%">
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                  </div>

                  <h3 className="font-display text-3xl md:text-4xl text-white mb-6 uppercase">
                    {activeFeature.title} <span className="text-neo-orange">{'//'}</span> Analysis
                  </h3>
                  
                  <p className="font-sans text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
                    {activeFeature.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {activeFeature.details.map((detail, idx) => (
                      <div key={idx} className="bg-white/5 p-4 border border-white/5">
                        <div className="w-2 h-2 bg-neo-orange mb-3" />
                        <span className="font-mono text-xs text-gray-400 uppercase tracking-wider">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-neo-orange" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-neo-orange" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-neo-orange" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-neo-orange" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
