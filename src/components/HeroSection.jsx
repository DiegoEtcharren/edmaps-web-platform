import React from 'react';
import { Cpu, ArrowRight, Settings } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen pt-[60px] flex items-center justify-center overflow-hidden bg-[#0F3A5F] px-6">
      {/* Premium Technical Grid Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Dynamic Glowing Accents */}
      <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-industrial-cyan/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[20%] w-[350px] h-[350px] bg-industrial-green/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl text-center flex flex-col items-center">
        {/* Connection Tag */}
        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8 shadow-inner">
          <span className="w-2.5 h-2.5 rounded-full bg-industrial-green animate-ping"></span>
          <span className="text-xs font-semibold tracking-[0.15em] text-slate-300">MODULO CONECTADO A RED DE PRODUCCIÓN</span>
        </div>

        {/* Full Geometric Wordmark Logo */}
        <h1 className="font-sans font-black tracking-[0.2em] text-6xl md:text-8xl text-white select-none flex items-center justify-center leading-none mb-6">
          <span>EDM</span>
          <span className="relative inline-block">
            A
            <span className="absolute left-[-6px] right-[-6px] top-[58%] h-[8px] md:h-[10px] bg-industrial-green transform -rotate-[15deg] rounded-full shadow-[0_0_15px_rgba(15,157,88,1)]"></span>
          </span>
          <span>PS</span>
        </h1>

        {/* Technical Subtitle */}
        <p className="font-sans font-bold tracking-[0.25em] text-xs md:text-sm text-industrial-cyan mb-8 leading-relaxed uppercase border-t border-b border-white/5 py-3 px-6 max-w-lg md:max-w-xl">
          TRAZABILIDAD INDUSTRIAL INTELIGENTE
        </p>

        {/* Marketing Summary Paragraph */}
        <p className="text-slate-300 text-sm md:text-base max-w-xl mb-10 leading-relaxed font-medium">
          El portal MES modular de alto desempeño diseñado para la captura automática de telemetría, 
          control genealógico y digitalización total del piso de manufactura. Conectividad robusta 
          sin fricciones.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 w-full max-w-md">
          <a
            href="#telemetry"
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-industrial-cyan to-industrial-cyan/85 hover:from-industrial-cyan/95 hover:to-industrial-cyan text-white text-xs font-extrabold tracking-widest rounded-lg flex items-center justify-center space-x-2 border border-industrial-cyan/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-industrial-cyan/20"
          >
            <span>INGRESAR AL PORTAL</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#genealogy"
            className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white text-xs font-extrabold tracking-widest rounded-lg flex items-center justify-center space-x-2 border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <Settings className="w-4 h-4 animate-spin-slow text-industrial-amber" />
            <span>VER GENEALOGÍA</span>
          </a>
        </div>
      </div>
    </section>
  );
}
