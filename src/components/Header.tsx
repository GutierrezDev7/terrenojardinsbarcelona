import React, { useState } from 'react';
import Image from 'next/image';
import { MessageCircle, Menu, X, ShieldCheck } from 'lucide-react';
import { getWhatsAppHref, CONDO_IMAGES } from '../data/condoData';
import { scrollToSection } from '../lib/smoothScroll';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    scrollToSection(href.replace(/^#/, ''));
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent('Olá! Tenho interesse no terreno de 300m² no Jardins Barcelona e gostaria de agendar uma visita.');
    window.open(getWhatsAppHref(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="sticky top-0 z-40 bg-[#17221c]/95 backdrop-blur-md border-b border-stone-800 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-2 sm:gap-8">
          
          {/* Zone 1: Single element Brand Wordmark */}
          <a href="#top" className="group flex shrink-0 items-center gap-2 whitespace-nowrap sm:gap-3">
            <Image
              src={CONDO_IMAGES.logo}
              alt=""
              width={40}
              height={40}
              className="h-9 w-auto object-contain rounded bg-stone-900 p-1 border border-stone-800"
            />
            <div className="flex flex-col">
              <span className="font-headline text-xl font-black tracking-tight text-white uppercase transition-colors group-hover:text-amber-400 sm:text-2xl">
                Jardins Barcelona
              </span>
              <span className="text-[10px] font-mono-num font-semibold text-stone-400 tracking-wider uppercase -mt-1">
                Lote Exclusivo 300m² · FGR
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 single-line clean text navigation links focused on the LAND & CONDO */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold tracking-wider uppercase text-stone-300">
            <button 
              onClick={() => handleNavClick('#terreno')} 
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
            >
              O Terreno
            </button>
            <button 
              onClick={() => handleNavClick('#lazer')} 
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
            >
              Lazer & Clube
            </button>
            <button 
              onClick={() => handleNavClick('#masterplan')} 
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
            >
              Localização
            </button>
            <button 
              onClick={() => handleNavClick('#pagamento')} 
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer text-amber-400"
            >
              Condições de Pagamento
            </button>
            <button 
              onClick={() => handleNavClick('#faq')} 
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
            >
              Dúvidas
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={openWhatsApp}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-black tracking-wider uppercase text-black bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded shadow-md transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Falar com o Vendedor</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-300 hover:text-white"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden border-t border-stone-800 bg-[#17221c] px-4 pt-3 pb-6 space-y-2 text-stone-200">
          <div className="flex items-center gap-2 text-xs text-stone-400 mb-3 px-3 py-1 bg-stone-900 rounded">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Condomínio Jardins Barcelona · FGR</span>
          </div>
          <button 
            onClick={() => handleNavClick('#terreno')} 
            className="block w-full text-left px-3 py-2 text-sm font-semibold uppercase hover:bg-stone-900 rounded"
          >
            O Terreno (300m²)
          </button>
          <button 
            onClick={() => handleNavClick('#lazer')} 
            className="block w-full text-left px-3 py-2 text-sm font-semibold uppercase hover:bg-stone-900 rounded"
          >
            Imagens do Condomínio (16)
          </button>
          <button 
            onClick={() => handleNavClick('#masterplan')} 
            className="block w-full text-left px-3 py-2 text-sm font-semibold uppercase hover:bg-stone-900 rounded"
          >
            Localização no Google Maps
          </button>
          <button 
            onClick={() => handleNavClick('#pagamento')} 
            className="block w-full text-left px-3 py-2 text-sm font-bold uppercase text-amber-400 hover:bg-stone-900 rounded"
          >
            Condições & Formas de Pagamento
          </button>
          <button 
            onClick={() => handleNavClick('#faq')} 
            className="block w-full text-left px-3 py-2 text-sm font-semibold uppercase hover:bg-stone-900 rounded"
          >
            Perguntas Frequentes
          </button>
          <div className="pt-2">
            <button
              onClick={openWhatsApp}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-black uppercase tracking-wider text-black bg-amber-400 rounded hover:bg-amber-300 transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Falar com o Vendedor no WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
