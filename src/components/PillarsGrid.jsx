import React, { useState, useEffect } from 'react';
import { 
  Network, CheckCircle, Shield, Router, LineChart, 
  ArrowUpRight, Activity, TrendingUp, CheckSquare 
} from 'lucide-react';

export default function PillarsGrid() {
  // Live states for OEE simulation
  const [oee, setOee] = useState(87.4);
  const [availability, setAvailability] = useState(92.4);
  const [performance, setPerformance] = useState(88.1);
  const [quality, setQuality] = useState(99.8);
  const [activeLot, setActiveLot] = useState('LT-2024-89X');

  // Checklist for Bento interactive component
  const [checklist, setChecklist] = useState([
    { id: 1, text: 'Confirmar BOM en tolva primarias', done: true },
    { id: 2, text: 'Calibrar sensor OP-3', done: true },
    { id: 3, text: 'Registrar proveedor en lote', done: false }
  ]);

  // Wiggle metrics occasionally to simulate live data
  useEffect(() => {
    const interval = setInterval(() => {
      setOee(prev => parseFloat((prev + (Math.random() - 0.5) * 0.4).toFixed(1)));
      setAvailability(prev => parseFloat((prev + (Math.random() - 0.5) * 0.2).toFixed(1)));
      setPerformance(prev => parseFloat((prev + (Math.random() - 0.5) * 0.3).toFixed(1)));
      setQuality(prev => parseFloat(Math.min(100, Math.max(95, prev + (Math.random() - 0.5) * 0.1)).toFixed(1)));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const toggleCheck = (id) => {
    setChecklist(prev => prev.map(item => item.id === id ? { ...item, done: !item.done } : item));
  };

  return (
    <div className="font-sans">
      
      {/* ──────────────────────────────────────────────────────── */}
      {/* SECTION 1: MÓDULO DE TRAZABILIDAD DE MATERIALES */}
      {/* ──────────────────────────────────────────────────────── */}
      <section id="telemetry" className="px-margin-mobile md:px-margin-desktop py-20 bg-background border-t border-slate-steel/10 text-left">
        <div className="max-w-max-width mx-auto">
          
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-headline-lg font-bold tracking-headline-lg text-primary mb-4 font-sans uppercase">
              Módulo de Trazabilidad de Materiales
            </h2>
            <p className="text-secondary max-w-3xl text-sm md:text-body-lg font-medium leading-relaxed">
              Genealogía de lotes precisa e inmutable para cumplimiento normativo y control de calidad riguroso.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-stretch">
            
            {/* Card 1: Genealogía */}
            <div className="bg-white rounded-xl border border-slate-steel/10 shadow-[0_5px_15px_0_rgba(15,58,95,0.03)] flex flex-col relative overflow-hidden p-8 transition-transform duration-300 hover:scale-[1.01]">
              <div className="h-1 w-full bg-industrial-navy absolute top-0 left-0"></div>
              <div className="flex-grow text-left">
                <div className="w-12 h-12 bg-primary-container/10 rounded-xl flex items-center justify-center mb-6">
                  <Network className="w-6 h-6 text-industrial-navy" />
                </div>
                <h3 className="text-headline-md font-bold text-primary mb-4">
                  Genealogía de Lotes
                </h3>
                <p className="text-secondary text-sm leading-relaxed font-semibold">
                  Rastreo bidireccional (forward/backward) desde materia prima hasta producto terminado. Visibilidad total del BOM en cada fase productiva.
                </p>
              </div>
            </div>

            {/* Card 2: ISO */}
            <div className="bg-white rounded-xl border border-slate-steel/10 shadow-[0_5px_15px_0_rgba(15,58,95,0.03)] flex flex-col relative overflow-hidden p-8 transition-transform duration-300 hover:scale-[1.01]">
              <div className="h-1 w-full bg-industrial-navy absolute top-0 left-0"></div>
              <div className="flex-grow text-left">
                <div className="w-12 h-12 bg-primary-container/10 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-industrial-navy" />
                </div>
                <h3 className="text-headline-md font-bold text-primary mb-4">
                  Cumplimiento ISO 9001
                </h3>
                <p className="text-secondary text-sm leading-relaxed font-semibold">
                  Validación automática de materiales antes del consumo. Bloqueo de lotes en cuarentena o vencidos, garantizando adherencia estricta a normas de calidad.
                </p>
              </div>
            </div>

            {/* Card 3: Bento Active Batch */}
            <div className="bg-industrial-navy rounded-xl shadow-[0_8px_25px_0_rgba(15,58,95,0.15)] p-8 flex flex-col justify-between relative overflow-hidden min-h-[320px] text-white">
              {/* Radial glow background effect */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
              
              <div className="relative z-10 text-left">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-label-caps text-white/70 block uppercase">
                    ID LOTE ACTIVO
                  </span>
                  <span className="w-2 h-2 rounded-full bg-growth-green animate-ping"></span>
                </div>
                <span className="text-2xl md:text-headline-lg font-bold font-mono tracking-wide text-white block">
                  {activeLot}
                </span>
              </div>

              {/* Interactive checklist representation */}
              <div className="relative z-10 space-y-2 mt-4 text-left">
                <span className="text-[9px] font-bold tracking-label-caps text-white/50 block uppercase">AUTOCONTROL DE PASO</span>
                {checklist.map((item) => (
                  <div 
                    key={item.id} 
                    onClick={() => toggleCheck(item.id)}
                    className="flex items-center space-x-2 cursor-pointer select-none"
                  >
                    <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center transition-all ${
                      item.done 
                        ? 'bg-growth-green border-growth-green text-slate-900' 
                        : 'border-white/30 hover:border-white/60'
                    }`}>
                      {item.done && <svg className="w-2 h-2 fill-current font-bold" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>}
                    </div>
                    <span className={`text-[10px] ${item.done ? 'text-white/60 line-through' : 'text-white'}`}>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Batch Metadata Footer */}
              <div className="relative z-10 space-y-2 pt-4 border-t border-white/10 mt-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white/60">Origen</span>
                  <span className="font-mono text-white font-semibold">PROV-A4</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white/60">Validación</span>
                  <span className="text-[9px] font-bold tracking-label-caps text-growth-green bg-growth-green/20 px-2.5 py-0.5 rounded">
                    APROBADO
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* SECTION 2: EFICIENCIA DE MAQUINARIA (OEE) */}
      {/* ──────────────────────────────────────────────────────── */}
      <section id="operative" className="px-margin-mobile md:px-margin-desktop py-20 bg-surface-container-low border-y border-outline-variant/10 text-left">
        <div className="max-w-max-width mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Live OEE Monitor Mockup */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(15,58,95,0.06)] border border-slate-steel/10 p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-growth-green/5 rounded-bl-full blur-[40px] pointer-events-none"></div>
                
                {/* Dashboard Header */}
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-steel/10">
                  <h4 className="text-headline-md font-bold text-primary font-sans">
                    Live OEE Monitor
                  </h4>
                  <div className="flex items-center gap-2 text-growth-green text-[10px] font-bold tracking-label-caps uppercase">
                    <span className="w-2.5 h-2.5 rounded-full bg-growth-green animate-pulse"></span>
                    <span>CONNECTED TO IoT</span>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-background p-4 rounded-xl border border-slate-steel/5 text-left">
                    <span className="text-[9px] font-bold text-secondary tracking-label-caps block mb-1">DISPONIBILIDAD</span>
                    <span className="text-xl font-bold text-primary font-mono">{availability}%</span>
                  </div>
                  <div className="bg-background p-4 rounded-xl border border-slate-steel/5 text-left">
                    <span className="text-[9px] font-bold text-secondary tracking-label-caps block mb-1">RENDIMIENTO</span>
                    <span className="text-xl font-bold text-primary font-mono">{performance}%</span>
                  </div>
                  <div className="bg-background p-4 rounded-xl border border-slate-steel/5 text-left">
                    <span className="text-[9px] font-bold text-secondary tracking-label-caps block mb-1">CALIDAD</span>
                    <span className="text-xl font-bold text-growth-green font-mono">{quality}%</span>
                  </div>
                </div>

                {/* Interactive SVG Chart representation */}
                <div className="h-32 w-full bg-background rounded-xl relative overflow-hidden border border-slate-steel/5 p-4 flex flex-col justify-between">
                  <div className="flex justify-between text-[8px] text-secondary font-bold tracking-label-caps">
                    <span>SEÑAL TELEMÉTRICA REAL</span>
                    <span className="text-growth-green flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>ESTABLE</span>
                    </span>
                  </div>
                  
                  <div className="h-[60px] w-full mt-2">
                    <svg className="w-full h-full" viewBox="0 0 350 60">
                      {/* Grid overlay */}
                      <line x1="0" y1="20" x2="350" y2="20" stroke="rgba(55,71,79,0.05)" strokeDasharray="3,3" />
                      <line x1="0" y1="40" x2="350" y2="40" stroke="rgba(55,71,79,0.05)" strokeDasharray="3,3" />
                      {/* OEE Chart Wave */}
                      <path
                        d="M 0 30 C 50 10, 80 50, 130 25 C 180 5, 210 45, 260 20 C 310 -5, 330 35, 350 30"
                        fill="none"
                        stroke="#0F9D58"
                        strokeWidth="2.5"
                      />
                    </svg>
                  </div>
                  
                  <div className="flex justify-between items-center text-[10px] text-slate-500 font-semibold pt-1 border-t border-slate-steel/5 mt-2">
                    <span>OEE ACTUAL</span>
                    <span className="font-bold text-primary font-mono text-xs">{oee}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Content Descriptions */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-headline-lg font-bold tracking-headline-lg text-primary mb-6">
                Eficiencia de Maquinaria (OEE)
              </h2>
              <p className="text-secondary text-sm md:text-body-lg font-semibold leading-relaxed mb-8">
                Conectividad IoT directa con PLCs y sensores en piso de planta para monitorización en tiempo real. Calcule el OEE verdadero eliminando la recolección manual de datos.
              </p>

              {/* Feature List */}
              <ul className="space-y-6">
                
                {/* Feature 1 */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center shrink-0 mt-1">
                    <Router className="w-5 h-5 text-industrial-navy" />
                  </div>
                  <div>
                    <h4 className="text-body-md font-bold text-primary">
                      Conectividad PLC / IoT
                    </h4>
                    <p className="text-secondary text-xs md:text-sm mt-1 leading-normal font-semibold">
                      Integración nativa con protocolos industriales (OPC UA, MQTT) para ingesta de datos a nivel máquina.
                    </p>
                  </div>
                </li>

                {/* Feature 2 */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center shrink-0 mt-1">
                    <LineChart className="w-5 h-5 text-industrial-navy" />
                  </div>
                  <div>
                    <h4 className="text-body-md font-bold text-primary">
                      Monitorización Real-Time
                    </h4>
                    <p className="text-secondary text-xs md:text-sm mt-1 leading-normal font-semibold">
                      Visualización instantánea de paros, micro-paros y velocidad de línea. Alertas automáticas ante desviaciones.
                    </p>
                  </div>
                </li>

              </ul>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
