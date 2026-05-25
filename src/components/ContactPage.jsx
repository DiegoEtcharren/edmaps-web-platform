import React, { useState } from 'react';
import { 
  MessageCircle, Mail, Clock, ShieldCheck, MapPin, 
  ArrowLeft, Phone, Server, Send 
} from 'lucide-react';

export default function ContactPage({ onBackToHome }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const whatsappNumber = '521234567890';
  const supportEmail = 'support@edmaps.com';

  const handleWhatsApp = (e) => {
    e.preventDefault();
    if (!name || !message) return;
    const text = encodeURIComponent(`Hola EDMAPS, mi nombre es ${name}. Asunto: ${subject || 'Contacto'}. ${message}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const handleEmail = (e) => {
    e.preventDefault();
    if (!name || !message) return;
    const emailSubject = encodeURIComponent(subject || 'Consulta General Portal EDMAPS');
    const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`);
    window.location.href = `mailto:${supportEmail}?subject=${emailSubject}&body=${body}`;
  };

  return (
    <section className="min-h-screen pt-24 pb-20 px-6 md:px-12 bg-background font-sans text-left relative overflow-hidden">
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-slate-steel/20"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-slate-steel/20"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-slate-steel/20"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Back Link */}
        <button 
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-slate-500 hover:text-industrial-navy transition-colors mb-8 font-bold text-xs tracking-label-caps"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>VOLVER A INICIO</span>
        </button>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-display-lg font-black text-primary tracking-display-lg mb-4">
            CENTRO DE ATENCIÓN Y SOPORTE
          </h1>
          <p className="text-secondary max-w-xl text-sm md:text-base leading-relaxed font-semibold">
            Canales directos de soporte técnico de planta, solicitudes de demo e integración MES para su línea de manufactura.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact Channels Card */}
            <div className="bg-white border border-slate-steel/10 rounded-2xl p-6 shadow-2xl space-y-6">
              <h3 className="text-primary font-bold tracking-wider text-xs uppercase border-b border-slate-200 pb-3">
                CANALES DE COMUNICACIÓN DIRECTOS
              </h3>

              <div className="space-y-4">
                {/* Channel 1: WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-growth-green/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-growth-green" />
                  </div>
                  <div>
                    <h4 className="text-primary font-bold text-xs">WHATSAPP DE PLANTA</h4>
                    <p className="text-[11px] text-slate-500 font-semibold mt-0.5">Respuestas rápidas para emergencias operativas.</p>
                    <a 
                      href={`https://wa.me/${whatsappNumber}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-growth-green mt-1 block hover:underline"
                    >
                      +52 (123) 456-7890
                    </a>
                  </div>
                </div>

                {/* Channel 2: Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-industrial-navy/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-industrial-navy" />
                  </div>
                  <div>
                    <h4 className="text-primary font-bold text-xs">MESA DE AYUDA (EMAIL)</h4>
                    <p className="text-[11px] text-slate-500 font-semibold mt-0.5">Levante tickets de soporte o dudas comerciales.</p>
                    <a 
                      href={`mailto:${supportEmail}`}
                      className="text-xs font-bold text-industrial-navy mt-1 block hover:underline"
                    >
                      {supportEmail}
                    </a>
                  </div>
                </div>

                {/* Channel 3: Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-status-warning/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-status-warning" />
                  </div>
                  <div>
                    <h4 className="text-primary font-bold text-xs">HORAS DE ATENCIÓN</h4>
                    <p className="text-[11px] text-slate-500 font-semibold mt-0.5">Soporte Técnico Especializado: Lunes a Sábado, 24/6</p>
                    <span className="text-[10px] font-bold text-slate-400 block mt-1">Monitoreo de Servidores: 24/7/365</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Status Widget */}
            <div className="bg-industrial-navy rounded-2xl p-6 shadow-2xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-white/5 rounded-bl-full blur-[40px]"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[10px] font-bold tracking-label-caps text-white/60 block uppercase">ESTADO DE INTEGRIDAD</span>
                  <h4 className="text-sm font-bold mt-0.5">NODO CENTRAL MES</h4>
                </div>
                <div className="pulse-green w-3.5 h-3.5 rounded-full bg-growth-green flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-industrial-navy"></span>
                </div>
              </div>

              <div className="space-y-3 text-xs font-medium">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-white/70">Disponibilidad de Servidor API</span>
                  <span className="font-bold text-growth-green font-mono">99.98%</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-white/70">Certificación Normativa</span>
                  <span className="font-bold text-white flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-growth-green" />
                    <span>ISO 9001:2015</span>
                  </span>
                </div>
                <div className="flex justify-between items-center pb-1">
                  <span className="text-white/70">Stitch Sync Profile</span>
                  <span className="font-bold text-white font-mono flex items-center gap-1">
                    <Server className="w-3.5 h-3.5 text-status-warning" />
                    <span>Conectado (Active)</span>
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Complete Form */}
          <div className="lg:col-span-7 bg-white border border-slate-steel/10 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-primary font-bold tracking-wider text-xs uppercase border-b border-slate-200 pb-3 mb-6">
              FORMULARIO DE CONTACTO E INTEGRACIÓN MES
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Nombre Completo</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Escriba su nombre..."
                    required
                    className="w-full bg-[#f1f4f6]/60 border border-slate-200 focus:border-industrial-navy focus:bg-white rounded-lg px-4 py-3 text-xs text-slate-800 focus:outline-none transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Correo Electrónico</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nombre@empresa.com"
                    required
                    className="w-full bg-[#f1f4f6]/60 border border-slate-200 focus:border-industrial-navy focus:bg-white rounded-lg px-4 py-3 text-xs text-slate-800 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Asunto / Motivo de Consulta</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Ej. Integración IoT, Solicitud Demo, Consultoría..."
                  className="w-full bg-[#f1f4f6]/60 border border-slate-200 focus:border-industrial-navy focus:bg-white rounded-lg px-4 py-3 text-xs text-slate-800 focus:outline-none transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Detalle de Mensaje o Consulta</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Detalle los requerimientos específicos de su línea de producción..."
                  required
                  rows="5"
                  className="w-full bg-[#f1f4f6]/60 border border-slate-200 focus:border-industrial-navy focus:bg-white rounded-lg px-4 py-3 text-xs text-slate-800 focus:outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                <button
                  type="submit"
                  onClick={handleWhatsApp}
                  disabled={!name || !message}
                  className="bg-growth-green hover:bg-growth-green/95 disabled:opacity-50 text-white py-4 rounded-lg text-[10px] font-bold tracking-label-caps transition-all flex items-center justify-center gap-2 active:scale-[0.98] shadow-md shadow-growth-green/10"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>ENVIAR VÍA WHATSAPP</span>
                </button>
                <button
                  type="submit"
                  onClick={handleEmail}
                  disabled={!name || !message}
                  className="bg-industrial-navy hover:bg-industrial-navy/95 disabled:opacity-50 text-white py-4 rounded-lg text-[10px] font-bold tracking-label-caps transition-all flex items-center justify-center gap-2 active:scale-[0.98] shadow-md shadow-industrial-navy/10"
                >
                  <Mail className="w-5 h-5" />
                  <span>ENVIAR VÍA EMAIL</span>
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
