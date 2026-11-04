import React from 'react';
import Image from 'next/image';
import { CONDO_IMAGES, getWhatsAppHref } from '../data/condoData';
import { ShieldCheck, MessageCircle, ArrowUp } from 'lucide-react';
import { scrollToTop as smoothScrollToTop } from '../lib/smoothScroll';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    smoothScrollToTop();
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent('Olá! Vi a página do lote no Jardins Barcelona e gostaria de agendar uma visita.');
    window.open(getWhatsAppHref(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-[#111812] text-stone-400 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-stone-800">
          
          {/* Brand & Summary */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src={CONDO_IMAGES.logo}
                alt=""
                width={40}
                height={40}
                className="h-9 w-auto object-contain rounded bg-stone-900 p-1 border border-stone-800"
              />
              <div>
                <span className="font-headline text-2xl font-black text-white tracking-tight uppercase block leading-none">
                  Jardins Barcelona
                </span>
                <span className="text-[10px] font-mono-num text-amber-400 uppercase tracking-widest font-bold">
                  Lote Particular · FGR Urbanismo
                </span>
              </div>
            </div>

            <p className="text-stone-400 leading-relaxed max-w-sm text-xs">
              Informações sobre um lote de 300 m² no Jardins Barcelona. Consulte o vendedor para confirmar localização, documentação, condições e possibilidade de permuta.
            </p>

            <div className="flex items-center gap-2 text-stone-300 font-mono-num text-[11px]">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Solicite ao vendedor a documentação atualizada do imóvel</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3 font-mono-num">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Seções
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#pagamento" className="hover:text-amber-400 transition-colors">
                  Permuta & Aceite de Veículos
                </a>
              </li>
              <li>
                <a href="#terreno" className="hover:text-amber-400 transition-colors">
                  Especificações do Lote
                </a>
              </li>
              <li>
                <a href="#masterplan" className="hover:text-amber-400 transition-colors">
                  Localização no Google Maps
                </a>
              </li>
              <li>
                <a href="#lazer" className="hover:text-amber-400 transition-colors">
                  Fotos Reais do Clube
                </a>
              </li>
              <li>
                <a href="#pagamento" className="hover:text-amber-400 transition-colors">
                  Formas de Pagamento
                </a>
              </li>
              <li>
                <a href="#fale-com-vendedor" className="hover:text-amber-400 transition-colors">
                  Fale com o Vendedor
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-4 space-y-3 font-mono-num">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Atendimento Direto
            </h4>
            <p className="text-stone-400 text-xs">
              Negociação particular sem enrolação. Fale direto com o proprietário no WhatsApp.
            </p>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={openWhatsApp}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded text-xs font-black uppercase tracking-wider bg-amber-400 hover:bg-amber-300 text-black transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Conversar no WhatsApp</span>
              </button>

            </div>
          </div>

        </div>

        {/* Legal notice & bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-[11px] font-mono-num">
          <p>
            © {new Date().getFullYear()} Jardins Barcelona Condomínio Horizontal. Oportunidade particular.             Consulte o vendedor para confirmar as informações e condições atualizadas do imóvel.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
