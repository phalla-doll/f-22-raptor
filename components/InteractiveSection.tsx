"use client";

import ModelViewer from "./ModelViewer";

export default function InteractiveSection() {
  return (
    <section className="relative bg-[#0A0A0A] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="font-display text-4xl md:text-6xl text-white uppercase mb-4">
          Tactical <span className="text-neo-orange">Schematic</span>
        </h2>
        <p className="font-mono text-gray-400 uppercase tracking-widest">Interactive 3D Visualization</p>
      </div>

      <div className="relative w-full h-[600px] border-y border-white/10 bg-[#050505]">
        <ModelViewer />
        
        {/* Overlay Controls Hint */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/30 font-mono text-xs uppercase tracking-widest pointer-events-none">
          [ Drag to Rotate ]
        </div>
      </div>
    </section>
  );
}
