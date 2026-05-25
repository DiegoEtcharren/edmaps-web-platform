import React, { useState } from 'react';
import { Menu, X, ShieldAlert, Cpu, BarChart3, Database } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-[60px] glassmorphism z-50 flex items-center px-6 md:px-12 justify-between">
      {/* High-Fidelity Logo */}
      <div className="flex items-center space-x-3 cursor-pointer">
        <div className="w-8 h-8 rounded-lg bg-industrial-blue border border-industrial-cyan flex items-center justify-center shadow-lg shadow-industrial-cyan/20">
          <Cpu className="w-4 h-4 text-industrial-cyan animate-pulse" />
        </div>
        <div className="font-sans font-black tracking-widest text-2xl flex items-center select-none">
          <span className="text-white">EDM</span>
          <span className="relative inline-block text-white font-extrabold">
            A
            <span className="absolute left-[-3px] right-[-3px] top-[58%] h-[3.5px] bg-industrial-green transform -rotate-[15deg] rounded-full shadow-[0_0_8px_rgba(15,157,88,0.8)]"></span>
          </span>
          <span className="text-white">PS</span>
        </div>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wider">
        <a href="#hero" className="hover:text-industrial-cyan transition-colors duration-300">INICIO</a>
        <a href="#telemetry" className="hover:text-industrial-amber transition-colors duration-300">TELEMETRÍA</a>
        <a href="#operative" className="hover:text-industrial-cyan transition-colors duration-300">PISO DE OPERACIÓN</a>
        <a href="#genealogy" className="hover:text-industrial-green transition-colors duration-300">TRAZABILIDAD</a>
        <button className="bg-industrial-green/10 hover:bg-industrial-green text-industrial-green hover:text-white px-4 py-1.5 rounded border border-industrial-green/30 hover:border-industrial-green transition-all duration-300 font-bold text-xs tracking-widest">
          SISTEMA ACTIVO
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-industrial-cyan transition-colors">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-[#0F3A5F] border-b border-white/10 flex flex-col p-6 space-y-4 md:hidden shadow-2xl animate-fade-in-down z-40">
          <a href="#hero" onClick={() => setIsOpen(false)} className="hover:text-industrial-cyan font-bold tracking-wider py-2">INICIO</a>
          <a href="#telemetry" onClick={() => setIsOpen(false)} className="hover:text-industrial-amber font-bold tracking-wider py-2">TELEMETRÍA</a>
          <a href="#operative" onClick={() => setIsOpen(false)} className="hover:text-industrial-cyan font-bold tracking-wider py-2">PISO DE OPERACIÓN</a>
          <a href="#genealogy" onClick={() => setIsOpen(false)} className="hover:text-industrial-green font-bold tracking-wider py-2">TRAZABILIDAD</a>
          <button className="w-full text-center bg-industrial-green text-white py-2 rounded font-bold text-sm tracking-widest">
            SISTEMA ACTIVO
          </button>
        </div>
      )}
    </nav>
  );
}
