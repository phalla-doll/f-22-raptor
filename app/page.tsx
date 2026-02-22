"use client";

import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import TechSection from "@/components/TechSection";
import InteractiveSection from "@/components/InteractiveSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-neo-orange selection:text-black overflow-x-hidden">
      <HeroSection />
      <StatsSection />
      <TechSection />
      <InteractiveSection />
      
      {/* Call to Action Section */}
      <section className="py-32 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-neo-orange/5" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        
        <div className="relative z-10 text-center px-4">
          <h2 className="font-display text-6xl md:text-9xl text-white uppercase mb-8 leading-none">
            Enter The <span className="text-transparent bg-clip-text bg-gradient-to-b from-neo-orange to-red-600">Sky</span>
          </h2>
          <p className="font-mono text-gray-400 mb-12 max-w-xl mx-auto">
            Join the elite. Experience the pinnacle of air superiority.
          </p>
          
          <button className="group relative inline-flex items-center justify-center px-12 py-6 overflow-hidden font-mono font-bold text-white transition-all duration-300 bg-transparent border-2 border-neo-orange hover:bg-neo-orange hover:text-black focus:outline-none focus:ring-2 focus:ring-neo-orange focus:ring-offset-2 focus:ring-offset-gray-900">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
            <span className="relative text-lg tracking-widest uppercase">Initiate Launch Sequence</span>
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
