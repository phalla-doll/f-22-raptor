"use client";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-display text-2xl text-white uppercase tracking-wider">
              F-22 <span className="text-neo-orange">Raptor</span>
            </h2>
            <p className="font-mono text-xs text-gray-500 mt-2">
              Air Dominance Fighter
            </p>
          </div>

          <div className="flex gap-8 font-mono text-xs text-gray-400 uppercase tracking-widest">
            <a href="#" className="hover:text-neo-orange transition-colors">Specs</a>
            <a href="#" className="hover:text-neo-orange transition-colors">Gallery</a>
            <a href="#" className="hover:text-neo-orange transition-colors">Mission</a>
            <a href="#" className="hover:text-neo-orange transition-colors">Contact</a>
          </div>

          <div className="text-right">
            <button className="px-6 py-2 border border-white/20 text-white font-mono text-xs uppercase hover:bg-white hover:text-black transition-colors">
              Access Restricted Data
            </button>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs font-mono">
          <p>&copy; 2025 US AIR FORCE / LOCKHEED MARTIN TRIBUTE. NON-OFFICIAL.</p>
          <p>CLASSIFIED // TOP SECRET</p>
        </div>
      </div>
    </footer>
  );
}
