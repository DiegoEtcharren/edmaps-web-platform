import React from 'react';
import { ShieldAlert, CheckCircle, ArrowRight, Activity } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative px-margin-mobile md:px-margin-desktop py-24 md:py-32 overflow-hidden bg-surface-container-lowest font-sans">
      {/* Decorative Background Grid Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-slate-steel/20"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-slate-steel/20"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-slate-steel/20"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-slate-steel/20"></div>
      </div>

      {/* Dynamic Glowing Accents */}
      <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-industrial-navy/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[20%] w-[350px] h-[350px] bg-growth-green/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center relative z-10 max-w-max-width mx-auto">
        {/* Left Side: Content */}
        <div className="md:col-span-7 flex flex-col gap-6 items-start text-left">
          {/* Badge Tag */}
          <div className="inline-flex items-center gap-2 bg-secondary-container/30 border border-secondary/20 px-3 py-1 rounded-full text-[12px] font-semibold tracking-label-caps text-industrial-navy">
            <span className="w-2 h-2 rounded-full bg-growth-green animate-ping"></span>
            <span>Transformación Digital Operativa</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-display-lg font-black tracking-display-lg text-primary md:max-w-3xl leading-tight">
            Inteligencia Industrial en{' '}
            <span className="text-industrial-navy relative inline-block">
              Tiempo Real
              <span className="absolute bottom-0 left-0 w-full h-2 bg-growth-green/20 -z-10"></span>
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-base md:text-body-lg text-secondary md:max-w-2xl leading-relaxed font-medium">
            Transforma tus datos operativos de las fábricas en información accionable para garantizar calidad y eficiencia operativa. Resuelve
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <button className="bg-industrial-navy text-white px-8 py-4 rounded text-[12px] font-bold tracking-label-caps hover:bg-industrial-navy/95 transition-colors shadow-sm active:scale-[0.98] duration-150 flex items-center justify-center gap-2">
              <span>Ver Soluciones</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border border-slate-steel text-slate-steel px-8 py-4 rounded text-[12px] font-bold tracking-label-caps hover:bg-slate-50 transition-colors active:scale-[0.98] duration-150">
              Ver Arquitectura
            </button>
          </div>
        </div>

        {/* Right Side: Graphic Device Mockup */}
        <div className="md:col-span-5 relative mt-12 md:mt-0">
          <div className="aspect-square rounded-xl overflow-hidden shadow-[0_5px_15px_0_rgba(15,58,95,0.2)] border border-slate-steel/10 bg-white relative">
            <img
              alt="Hero Image"
              className="w-full h-full object-cover select-none"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC3C9wzjSsSy1MeLWjKkr5jglSYGL6Db8nj41lgWoZSAU-7f1cdNvmGOL_puvHwbQsugPlo6zDoKo_llsngjId0KjYeHdwU_YlYEJ2LF7Tjs-RqN7xZRSuWDzPep2u2YZAkBu9p8l5PaF5jU_Jkocmfm-8wIEgNFra2yDRNFY4qIxYVx9JlyXeVT7ySMOhEh_orb5ehtFwxWIeNW9G4cgP4ded7dSXsOannj9FtTKsokWcBesGfHsws02RzQssf3JTs3Vk51wBDWs"
            />
            {/* Overlay UI element */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm border border-slate-steel/10 p-4 rounded shadow-sm flex items-center justify-between">
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-bold tracking-label-caps text-secondary uppercase">Estado Global</span>
                <span className="text-sm font-bold text-industrial-navy font-mono">OEE: 87.4%</span>
              </div>
              <CheckCircle className="w-8 h-8 text-growth-green fill-growth-green/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
