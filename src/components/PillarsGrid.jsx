import React, { useState, useEffect } from 'react';
import { 
  Activity, AlertTriangle, CheckSquare, Upload, FileText, 
  Play, Pause, RefreshCw, BarChart2, ShieldCheck, Database 
} from 'lucide-react';

export default function PillarsGrid() {
  // Telemetry (Pillar 1) states
  const [isPlaying, setIsPlaying] = useState(true);
  const [telemetryLogs, setTelemetryLogs] = useState([
    { time: '14:36:12', type: 'SYS', msg: 'CNC-01 connection established.' },
    { time: '14:36:18', type: 'TEMP', msg: 'Extrusion cylinder at 192°C.' },
    { time: '14:36:24', type: 'SPC', msg: 'Sample size #40 approved (Cpk 1.84).' }
  ]);
  const [oeeValue, setOeeValue] = useState(85.4);

  // Tablet Checklist (Pillar 2) states
  const [checklist, setChecklist] = useState([
    { id: 1, text: 'Verificar presión neumática central (6.2 bar)', done: true },
    { id: 2, text: 'Confirmar calibración de sensor óptico OP-3', done: true },
    { id: 3, text: 'Inspeccionar integridad de sello hermético', done: false },
    { id: 4, text: 'Registrar lote de resina primaria en tolva 2', done: false }
  ]);
  const [uploadName, setUploadName] = useState('');

  // Genealogy Material Trace (Pillar 3) states
  const [activeBatch, setActiveBatch] = useState('LOT-2026-A49');
  const batchData = {
    'LOT-2026-A49': {
      origin: 'Resin-Supplier-X1',
      date: '2026-05-20',
      status: 'Aprobado',
      isolation: 'Ninguna',
      asBuiltPdfSize: '4.8 MB',
      compileTime: '180ms'
    },
    'LOT-2026-B12': {
      origin: 'Polymer-Co-West',
      date: '2026-05-22',
      status: 'Bajo Aislamiento',
      isolation: 'Alerta Contaminación Tolva 3',
      asBuiltPdfSize: '5.2 MB',
      compileTime: '240ms'
    }
  };

  // Simulate Telemetry Feed Updates
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      const logs = ['TEMP', 'SYS', 'SPC', 'IoT', 'RPM'];
      const msgs = [
        'Husillo motor principal operando a 1450 RPM.',
        'Presión hidráulica estable en 120 PSI.',
        'Medición de diámetro exterior dentro de tolerancias.',
        'Lectura de vibración registrada en zona tolerable (0.04g).',
        'Ciclo de inyección finalizado correctamente.'
      ];
      const randomLogType = logs[Math.floor(Math.random() * logs.length)];
      const randomMsg = msgs[Math.floor(Math.random() * msgs.length)];
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      
      setTelemetryLogs(prev => [
        { time: timestamp, type: randomLogType, msg: randomMsg },
        ...prev.slice(0, 3)
      ]);

      // Gently wiggle OEE
      setOeeValue(prev => {
        const delta = (Math.random() - 0.5) * 0.4;
        return parseFloat(Math.min(100, Math.max(0, prev + delta)).toFixed(1));
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Handle Checklist Click
  const toggleCheck = (id) => {
    setChecklist(prev => prev.map(item => item.id === id ? { ...item, done: !item.done } : item));
  };

  const completedCount = checklist.filter(item => item.done).length;
  const progressPercent = Math.round((completedCount / checklist.length) * 100);

  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#0F3A5F] to-[#0A263F] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl md:text-5xl font-sans font-black tracking-industrial mb-4">
            MÓDULOS DE NEGOCIO
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm md:text-base font-medium">
            Mapeo interactivo de flujos industriales e inteligencia integrada. Diseños ultra-responsivos 
            desarrollados para soportar altos volúmenes de datos.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* PILLAR 1: Capture & Automatic Telemetry */}
          <div id="telemetry" className="glass-card rounded-2xl p-6 flex flex-col justify-between border-t-4 border-t-industrial-amber shadow-2xl relative overflow-hidden transition-all duration-300 hover:scale-[1.01]">
            <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-industrial-amber/5 rounded-bl-full blur-[40px] pointer-events-none"></div>
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-industrial-amber/10 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-industrial-amber" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold tracking-wider text-sm font-sans uppercase">Módulo 01</h3>
                    <p className="text-xs text-industrial-amber font-bold tracking-widest">TELEMETRÍA Y CAPTURA</p>
                  </div>
                </div>
                <div className="pulse-amber w-3.5 h-3.5 rounded-full bg-industrial-amber flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F3A5F]"></span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-xs md:text-sm mb-6 leading-relaxed">
                Captura de sensores en tiempo real con modelado de gráficos SPC y cálculo continuo de eficiencia.
              </p>

              {/* SPC Chart Component (Interactive SVG) */}
              <div className="bg-slate-900/60 border border-white/5 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold tracking-wider text-slate-400 flex items-center space-x-1">
                    <BarChart2 className="w-3.5 h-3.5 text-industrial-amber" />
                    <span>CONTROL ESTADÍSTICO (SPC)</span>
                  </span>
                  <span className="text-[10px] font-bold text-industrial-green">Cpk 1.84</span>
                </div>
                <div className="h-[100px] w-full flex items-end">
                  <svg className="w-full h-full" viewBox="0 0 300 100">
                    {/* Control limits */}
                    <line x1="0" y1="15" x2="300" y2="15" stroke="rgba(244,180,0,0.3)" strokeDasharray="3,3" />
                    <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(15,157,88,0.4)" strokeDasharray="4,4" />
                    <line x1="0" y1="85" x2="300" y2="85" stroke="rgba(244,180,0,0.3)" strokeDasharray="3,3" />
                    {/* Line Chart */}
                    <path
                      d="M 10 50 L 50 35 L 95 65 L 140 38 L 185 28 L 230 45 L 290 32"
                      fill="none"
                      stroke="#F4B400"
                      strokeWidth="2.5"
                    />
                    {/* Dots */}
                    <circle cx="10" cy="50" r="3.5" fill="#F4B400" className="hover:scale-150 transition-transform cursor-pointer" />
                    <circle cx="50" cy="35" r="3.5" fill="#F4B400" className="hover:scale-150 transition-transform cursor-pointer" />
                    <circle cx="95" cy="65" r="3.5" fill="#F4B400" className="hover:scale-150 transition-transform cursor-pointer" />
                    <circle cx="140" cy="38" r="3.5" fill="#F4B400" className="hover:scale-150 transition-transform cursor-pointer" />
                    <circle cx="185" cy="28" r="3.5" fill="#F4B400" className="hover:scale-150 transition-transform cursor-pointer" />
                    <circle cx="230" cy="45" r="3.5" fill="#F4B400" className="hover:scale-150 transition-transform cursor-pointer" />
                    <circle cx="290" cy="32" r="3.5" fill="#F4B400" className="hover:scale-150 transition-transform cursor-pointer" />
                  </svg>
                </div>
                <div className="flex justify-between text-[8px] text-slate-400 font-bold tracking-wider mt-1.5">
                  <span>MUESTRA 1</span>
                  <span>MUESTRA 7</span>
                </div>
              </div>

              {/* Dynamic live telemetry feed console */}
              <div className="bg-slate-950 border border-white/10 rounded-xl p-3.5 mb-6 font-mono text-[10px] text-slate-300">
                <div className="flex items-center justify-between border-b border-white/5 pb-1.5 mb-2">
                  <span className="text-industrial-amber font-bold">RAW TELEMETRY DATA FEED</span>
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)} 
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <div className="space-y-1.5">
                  {telemetryLogs.map((log, idx) => (
                    <div key={idx} className="flex space-x-2 leading-tight">
                      <span className="text-slate-500 font-semibold">{log.time}</span>
                      <span className="text-industrial-cyan">[{log.type}]</span>
                      <span className="truncate text-slate-300">{log.msg}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Gauge Display & Lower Accents */}
            <div className="border-t border-white/5 pt-5 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-slate-400 tracking-wider">CÁLCULO OEE EN VIVO</span>
                <div className="text-2xl font-black font-sans text-white mt-0.5">{oeeValue}%</div>
              </div>
              
              {/* Animated Progress Circle representation */}
              <div className="relative w-12 h-12 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="24" cy="24" r="18" className="stroke-slate-800" strokeWidth="4" fill="transparent" />
                  <circle 
                    cx="24" 
                    cy="24" 
                    r="18" 
                    className="stroke-industrial-amber transition-all duration-500" 
                    strokeWidth="4" 
                    fill="transparent" 
                    strokeDasharray={`${2 * Math.PI * 18}`}
                    strokeDashoffset={`${2 * Math.PI * 18 * (1 - oeeValue / 100)}`}
                  />
                </svg>
                <span className="absolute text-[8px] font-bold text-white font-sans">OEE</span>
              </div>
            </div>
          </div>

          {/* PILLAR 2: Digital Operative Floor Interaction */}
          <div id="operative" className="glass-card rounded-2xl p-6 flex flex-col justify-between border-t-4 border-t-industrial-cyan shadow-2xl relative overflow-hidden transition-all duration-300 hover:scale-[1.01]">
            <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-industrial-cyan/5 rounded-bl-full blur-[40px] pointer-events-none"></div>
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-industrial-cyan/10 flex items-center justify-center">
                    <CheckSquare className="w-5 h-5 text-industrial-cyan" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold tracking-wider text-sm font-sans uppercase">Módulo 02</h3>
                    <p className="text-xs text-industrial-cyan font-bold tracking-widest">INTERACCIÓN EN PLANTA</p>
                  </div>
                </div>
                <div className="pulse-cyan w-3.5 h-3.5 rounded-full bg-industrial-cyan flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F3A5F]"></span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-xs md:text-sm mb-6 leading-relaxed">
                Control digital paperless en planta. Checklist robusto montado para visualización robusta en tablets industriales.
              </p>

              {/* Tablet Mockup */}
              <div className="bg-slate-900 border-[3px] border-slate-750 rounded-xl p-4 mb-6 shadow-xl relative">
                {/* Camera Notch */}
                <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-8 h-1.5 bg-slate-850 rounded-full"></div>
                
                <div className="text-[10px] text-slate-400 font-bold tracking-wider border-b border-white/5 pb-2 mb-3 flex items-center justify-between mt-1">
                  <span>ORDEN ACTIVA: WO-4927</span>
                  <span className="text-industrial-cyan font-extrabold">{progressPercent}%</span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-800 h-1.5 rounded-full mb-4 overflow-hidden">
                  <div 
                    className="bg-industrial-cyan h-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>

                {/* Tablet Checklist */}
                <div className="space-y-2.5 max-h-[110px] overflow-y-auto mb-4 scrollbar-thin">
                  {checklist.map((item) => (
                    <div 
                      key={item.id} 
                      onClick={() => toggleCheck(item.id)}
                      className="flex items-start space-x-2.5 cursor-pointer select-none group"
                    >
                      <div className={`w-3.5 h-3.5 rounded border mt-0.5 flex items-center justify-center transition-all ${
                        item.done 
                          ? 'bg-industrial-cyan border-industrial-cyan text-slate-900' 
                          : 'border-slate-500 group-hover:border-industrial-cyan'
                      }`}>
                        {item.done && <svg className="w-2.5 h-2.5 fill-current font-black" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>}
                      </div>
                      <span className={`text-[10px] leading-snug transition-colors ${item.done ? 'text-slate-400 line-through' : 'text-slate-200 group-hover:text-white'}`}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Photo Evidence upload field */}
                <div className="border border-dashed border-white/20 hover:border-industrial-cyan rounded-lg p-2.5 text-center cursor-pointer transition-colors relative group">
                  <input 
                    type="file" 
                    onChange={(e) => setUploadName(e.target.files[0]?.name || '')}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                  />
                  <div className="flex items-center justify-center space-x-2">
                    <Upload className="w-3.5 h-3.5 text-slate-400 group-hover:text-industrial-cyan" />
                    <span className="text-[9px] font-bold text-slate-300 tracking-wider truncate max-w-[140px]">
                      {uploadName || 'ADJUNTAR EVIDENCIA DE CALIDAD'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-white/5 pt-5 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-slate-400 tracking-wider">RESPONSIVE EMULATOR</span>
                <p className="text-[11px] font-semibold text-industrial-cyan mt-0.5">Pantalla Rugerizada Activa</p>
              </div>
              <button 
                onClick={() => setChecklist(prev => prev.map(item => ({ ...item, done: false })))}
                className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-3 py-1.5 rounded text-[10px] font-extrabold tracking-widest transition-all"
              >
                REINICIAR WO
              </button>
            </div>
          </div>

          {/* PILLAR 3: Genealogical Traceability & Document Intelligence */}
          <div id="genealogy" className="glass-card rounded-2xl p-6 flex flex-col justify-between border-t-4 border-t-industrial-green shadow-2xl relative overflow-hidden transition-all duration-300 hover:scale-[1.01]">
            <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-industrial-green/5 rounded-bl-full blur-[40px] pointer-events-none"></div>
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-industrial-green/10 flex items-center justify-center">
                    <Database className="w-5 h-5 text-industrial-green" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold tracking-wider text-sm font-sans uppercase">Módulo 03</h3>
                    <p className="text-xs text-industrial-green font-bold tracking-widest">TRAZABILIDAD Y GENEALOGÍA</p>
                  </div>
                </div>
                <div className="pulse-green w-3.5 h-3.5 rounded-full bg-industrial-green flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F3A5F]"></span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-xs md:text-sm mb-6 leading-relaxed">
                Control estricto de genealogía de materiales y compilación automatizada de reportes As-Built Record PDF.
              </p>

              {/* Batch History Grid */}
              <div className="bg-slate-900 border border-white/5 rounded-xl p-4 mb-6">
                <div className="text-[10px] text-slate-400 font-bold tracking-wider border-b border-white/5 pb-2 mb-3">
                  SELECCIONAR LOTE PARA VERIFICAR LINAJE
                </div>
                
                {/* Batch toggles */}
                <div className="flex space-x-2.5 mb-3.5">
                  <button 
                    onClick={() => setActiveBatch('LOT-2026-A49')}
                    className={`flex-1 text-[10px] py-1.5 font-bold rounded tracking-wider border transition-all ${
                      activeBatch === 'LOT-2026-A49' 
                        ? 'bg-industrial-green border-industrial-green text-slate-900 shadow-md' 
                        : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                    }`}
                  >
                    LOT-2026-A49
                  </button>
                  <button 
                    onClick={() => setActiveBatch('LOT-2026-B12')}
                    className={`flex-1 text-[10px] py-1.5 font-bold rounded tracking-wider border transition-all ${
                      activeBatch === 'LOT-2026-B12' 
                        ? 'bg-industrial-green border-industrial-green text-slate-900 shadow-md' 
                        : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                    }`}
                  >
                    LOT-2026-B12
                  </button>
                </div>

                {/* Trace Grid Data */}
                <div className="space-y-2 text-[10px]">
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-semibold uppercase">PROVEEDOR DE ORIGEN:</span>
                    <span className="text-white font-medium">{batchData[activeBatch].origin}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-semibold uppercase">FECHA DE INGRESO:</span>
                    <span className="text-white font-medium">{batchData[activeBatch].date}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-semibold uppercase">ESTADO DE CALIDAD:</span>
                    <span className={`font-bold px-2 py-0.5 rounded-full text-[8px] flex items-center space-x-1 ${
                      batchData[activeBatch].status === 'Aprobado' 
                        ? 'bg-industrial-green/20 text-industrial-green' 
                        : 'bg-industrial-amber/20 text-industrial-amber'
                    }`}>
                      {batchData[activeBatch].status === 'Aprobado' ? (
                        <>
                          <ShieldCheck className="w-2.5 h-2.5 mr-0.5 inline" />
                          <span>APROBADO</span>
                        </>
                      ) : (
                        <>
                          <AlertTriangle className="w-2.5 h-2.5 mr-0.5 inline animate-bounce" />
                          <span>AISLADO</span>
                        </>
                      )}
                    </span>
                  </div>
                  {activeBatch === 'LOT-2026-B12' && (
                    <div className="bg-industrial-amber/15 border border-industrial-amber/30 text-industrial-amber rounded p-2 text-[9px] font-bold leading-normal">
                      DETALLE: {batchData[activeBatch].isolation}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom section showing automated PDF metrics */}
            <div className="border-t border-white/5 pt-5 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-slate-400 tracking-wider">COMPILADOR DE LIBRO DE CONTROL</span>
                <div className="text-xs font-semibold text-industrial-green flex items-center mt-0.5">
                  <FileText className="w-3.5 h-3.5 text-industrial-green mr-1.5" />
                  <span>PDF As-Built Listo ({batchData[activeBatch].asBuiltPdfSize})</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[9px] font-bold text-slate-400 block tracking-wider uppercase">VELOCIDAD</span>
                <span className="text-xs font-black text-white font-sans">{batchData[activeBatch].compileTime}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
