"use client";

import Image from "next/image";

export default function ModelViewer() {
  return (
    <div className="w-full h-[600px] relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A] z-10 pointer-events-none" />
      
      <div className="relative w-full h-full max-w-5xl mx-auto">
        <Image
          src="/clipboard-image-1771811555.png"
          alt="F-22 Raptor Schematic"
          fill
          className="object-contain p-8"
          priority
        />
      </div>
      
      {/* Overlay UI */}
      <div className="absolute bottom-10 left-10 z-20 font-mono text-xs text-white/50">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-neo-orange rounded-full animate-pulse" />
            <span>SYSTEM: ONLINE</span>
          </div>
          <div>MODEL: F-22 RAPTOR</div>
          <div>STATUS: STEALTH MODE ACTIVE</div>
        </div>
      </div>
    </div>
  );
}
