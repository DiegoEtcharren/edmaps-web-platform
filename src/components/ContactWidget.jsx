import React, { useState } from 'react';
import { MessageSquare, Mail, X, MessageCircle, HelpCircle } from 'lucide-react';

export default function ContactWidget({ isOpen, setIsOpen }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const whatsappNumber = '521234567890';
  const supportEmail = 'support@edmaps.com';

  const handleWhatsApp = (e) => {
    e.preventDefault();
    if (!name || !message) return;
    const text = encodeURIComponent(`Hola EDMAPS, mi nombre es ${name}. ${message}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const handleEmail = (e) => {
    e.preventDefault();
    if (!name || !message) return;
    const subject = encodeURIComponent('Consulta sobre Portal EDMAPS MES');
    const body = encodeURIComponent(`Nombre: ${name}\n\nMensaje:\n${message}`);
    window.location.href = `mailto:${supportEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-industrial-navy hover:bg-industrial-navy/90 text-white flex items-center justify-center shadow-2xl pulse-cyan transition-all duration-300 hover:scale-105 active:scale-95 border border-white/10"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

      {/* Glassmorphic Contact Window / Modal */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[320px] sm:w-[360px] bg-white border border-slate-steel/10 rounded-2xl shadow-2xl p-6 animate-fade-in-down z-50 text-left">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-3.5 mb-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-industrial-navy/5 flex items-center justify-center">
                <HelpCircle className="w-4 h-4 text-industrial-navy" />
              </div>
              <div>
                <h4 className="text-primary font-bold text-sm">Centro de Contacto</h4>
                <p className="text-[10px] text-slate-400 font-bold tracking-label-caps uppercase">SOPORTE Y CONSULTAS</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Nombre Completo</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Escriba su nombre..."
                required
                className="w-full bg-[#f1f4f6]/60 border border-slate-200 focus:border-industrial-navy focus:bg-white rounded-lg px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Consulta o Mensaje</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="¿En qué podemos ayudarle?..."
                required
                rows="3"
                className="w-full bg-[#f1f4f6]/60 border border-slate-200 focus:border-industrial-navy focus:bg-white rounded-lg px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none transition-all resize-none"
              ></textarea>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="submit"
                onClick={handleWhatsApp}
                disabled={!name || !message}
                className="bg-growth-green hover:bg-growth-green/95 disabled:opacity-50 text-white py-3 rounded-lg text-[10px] font-bold tracking-label-caps transition-all flex items-center justify-center gap-1.5 active:scale-[0.98] shadow-md shadow-growth-green/10"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WHATSAPP</span>
              </button>
              <button
                type="submit"
                onClick={handleEmail}
                disabled={!name || !message}
                className="bg-industrial-navy hover:bg-industrial-navy/95 disabled:opacity-50 text-white py-3 rounded-lg text-[10px] font-bold tracking-label-caps transition-all flex items-center justify-center gap-1.5 active:scale-[0.98] shadow-md shadow-industrial-navy/10"
              >
                <Mail className="w-4 h-4" />
                <span>CORREO</span>
              </button>
            </div>
          </form>

          {/* Footer Info */}
          <div className="mt-4 pt-3.5 border-t border-slate-200 text-center">
            <span className="text-[9px] font-bold text-slate-400 tracking-wider block">EDMAPS MES PLATFORM CONNECT</span>
          </div>
        </div>
      )}
    </div>
  );
}
