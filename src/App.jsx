import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PillarsGrid from './components/PillarsGrid';
import { Shield, Cpu } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col font-sans select-none antialiased">
      {/* Responsive Sticky Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        <HeroSection />
        <PillarsGrid />
      </main>

      {/* High-Fidelity Industrial Footer */}
      <footer className="bg-[#181c1e] border-t border-slate-steel/10 py-12 px-6 md:px-12 text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Platform Info */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center">
              <Cpu className="w-4 h-4 text-growth-green animate-pulse" />
            </div>
            <div className="font-sans font-black tracking-widest text-lg flex items-center">
              <span className="text-white">EDM</span>
              <span className="relative inline-block text-white">
                A
                <span className="absolute left-[-2px] right-[-2px] top-[58%] h-[3px] bg-growth-green transform -rotate-[15deg] rounded-full shadow-[0_0_8px_rgba(15,157,88,0.8)]"></span>
              </span>
              <span className="text-white">PS</span>
            </div>
          </div>

          {/* Subtitles & Status */}
          <div className="text-center md:text-right">
            <span className="text-[10px] font-bold tracking-widest text-slate-500 block mb-1">
              EDMAPS MANUFACTURING EXECUTION SYSTEM
            </span>
            <span className="text-xs text-slate-400 font-semibold flex items-center justify-center md:justify-end">
              <Shield className="w-4 h-4 text-growth-green mr-1.5 inline" />
              <span>Conectividad de Planta Certificada ISO 27001</span>
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto border-t border-white/5 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] text-slate-500 font-semibold tracking-wider gap-4">
          <p>© 2026 EDMAPS MES PLATFORM. TODOS LOS DERECHOS RESERVADOS.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">POLÍTICA DE PRIVACIDAD</a>
            <a href="#" className="hover:text-white transition-colors">TÉRMINOS DE SERVICIO</a>
            <a href="#" className="hover:text-white transition-colors">DOCUMENTACIÓN MES</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
