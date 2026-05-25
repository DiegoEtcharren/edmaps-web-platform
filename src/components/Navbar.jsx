import React, { useState } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

export default function Navbar({ onContactClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    if (onContactClick) onContactClick();
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-[60px] glassmorphism z-50 flex items-center px-6 md:px-12 justify-between">
      {/* High-Fidelity Logo */}
      <div className="flex items-center space-x-3 cursor-pointer">
        <div className="w-8 h-8 rounded-lg bg-white border border-industrial-navy/20 flex items-center justify-center shadow-md">
          <Cpu className="w-4 h-4 text-industrial-navy animate-pulse" />
        </div>
        <div className="font-sans font-black tracking-widest text-2xl flex items-center select-none">
          <span className="text-industrial-navy">EDM</span>
          <span className="relative inline-block text-industrial-navy font-extrabold">
            A
            <span className="absolute left-[-3px] right-[-3px] top-[58%] h-[3.5px] bg-[#0F9D58] transform -rotate-[15deg] rounded-full shadow-[0_0_8px_rgba(15,157,88,0.6)]"></span>
          </span>
          <span className="text-industrial-navy">PS</span>
        </div>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-8 text-xs font-bold tracking-label-caps">
        <a href="#hero" className="text-secondary hover:text-industrial-navy transition-colors duration-300">INICIO</a>
        <a href="#telemetry" className="text-secondary hover:text-industrial-navy transition-colors duration-300">TELEMETRÍA</a>
        <a href="#operative" className="text-secondary hover:text-industrial-navy transition-colors duration-300">PISO DE OPERACIÓN</a>
        <a href="#genealogy" className="text-secondary hover:text-industrial-navy transition-colors duration-300">TRAZABILIDAD</a>
        <a href="#contacto" onClick={handleContactClick} className="text-secondary hover:text-industrial-navy transition-colors duration-300">CONTACTO</a>
        <button className="bg-industrial-navy/5 hover:bg-industrial-navy text-industrial-navy hover:text-white px-4 py-1.5 rounded border border-industrial-navy/20 hover:border-industrial-navy transition-all duration-300 font-bold text-xs tracking-label-caps">
          SISTEMA ACTIVO
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-industrial-navy hover:text-secondary transition-colors">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-white border-b border-slate-steel/10 flex flex-col p-6 space-y-4 md:hidden shadow-2xl animate-fade-in-down z-40">
          <a href="#hero" onClick={() => setIsOpen(false)} className="text-secondary hover:text-industrial-navy font-bold tracking-label-caps py-2">INICIO</a>
          <a href="#telemetry" onClick={() => setIsOpen(false)} className="text-secondary hover:text-industrial-navy font-bold tracking-label-caps py-2">TELEMETRÍA</a>
          <a href="#operative" onClick={() => setIsOpen(false)} className="text-secondary hover:text-industrial-navy font-bold tracking-label-caps py-2">PISO DE OPERACIÓN</a>
          <a href="#genealogy" onClick={() => setIsOpen(false)} className="text-secondary hover:text-industrial-navy font-bold tracking-label-caps py-2">TRAZABILIDAD</a>
          <a href="#contacto" onClick={handleContactClick} className="text-secondary hover:text-industrial-navy font-bold tracking-label-caps py-2">CONTACTO</a>
          <button className="w-full text-center bg-industrial-navy text-white py-2 rounded font-bold text-sm tracking-label-caps">
            SISTEMA ACTIVO
          </button>
        </div>
      )}
    </nav>
  );
}
