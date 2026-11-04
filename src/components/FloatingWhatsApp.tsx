import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppHref } from '../data/condoData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const openWhatsApp = () => {
    const text = encodeURIComponent('Olá! Tenho interesse no lote do Jardins Barcelona e gostaria de negociar (tenho um veículo para avaliar na troca).');
    window.open(getWhatsAppHref(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 font-sans select-none">
      {/* Speech Bubble Tooltip */}
      {showTooltip && (
        <div className="relative bg-[#303528] text-white px-3.5 py-2.5 rounded-xl shadow-2xl border border-stone-700 text-xs font-semibold flex items-center gap-2.5 max-w-[240px]">
          <span className="leading-snug">
            👋 Tem interesse no terreno? Fale direto com o vendedor.
          </span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-white p-0.5 cursor-pointer"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#303528] border-b border-r border-stone-700 rotate-45" />
        </div>
      )}

      {/* Floating Action Button */}
      <button
        type="button"
        onClick={openWhatsApp}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-amber-400 hover:bg-amber-300 text-black shadow-2xl transition-all duration-300 cursor-pointer active:scale-95 ring-2 ring-black"
        aria-label="Conversar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-black" />
        <span className="sr-only">Chamar no WhatsApp</span>
      </button>
    </div>
  );
};
