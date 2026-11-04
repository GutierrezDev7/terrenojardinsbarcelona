import React from 'react';
import Image from 'next/image';
import { Compass, Maximize2, Sun, FileCheck, Hammer, ShieldCheck } from 'lucide-react';
import { LOT_DETAILS, CONDO_IMAGES } from '../data/condoData';

interface DirectDealPillarsProps {
  onContactSeller: () => void;
  onSelectPhoto: (src: string, title: string) => void;
}

export const DirectDealPillars: React.FC<DirectDealPillarsProps> = ({ onContactSeller, onSelectPhoto }) => {
  return (
    <section id="terreno" data-gsap-reveal className="py-20 sm:py-28 bg-[#17221c] text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono-num font-bold text-amber-400 bg-amber-950/40 border border-amber-800/40 rounded">
            <Maximize2 className="w-3.5 h-3.5" />
            <span>TOPOGRAFIA & ENGENHARIA</span>
          </div>

          <h2 className="font-headline font-black uppercase text-4xl sm:text-6xl tracking-tight text-white leading-none">
            O TERRENO: <span className="text-amber-400">DIMENSÕES E CARACTERÍSTICAS</span>
          </h2>

          <p className="text-stone-300 text-base sm:text-lg leading-relaxed text-balance">
            Consulte as informações disponíveis sobre o lote e confirme medidas, orientação, documentação e regras de construção diretamente com o vendedor.
          </p>
        </div>

        {/* 2-Column Split: Specs + High-Res Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left Column: Visual with Interactive Zoom */}
          <div data-gsap-stagger className="lg:col-span-6 space-y-4">
            <button
              type="button"
              onClick={() => onSelectPhoto(CONDO_IMAGES.condoPanoramic, 'Vista aérea do loteamento')}
              aria-label="Ampliar imagem aérea do loteamento"
              className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-stone-800 bg-stone-950 text-left shadow-2xl group"
            >
              <Image
                src={CONDO_IMAGES.condoPanoramic}
                alt="Vista aérea de ruas e lotes do empreendimento"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="text-xs font-mono-num font-bold text-amber-400 uppercase">Vista aérea</span>
                <span className="font-headline text-xl font-bold uppercase text-white">Ruas e lotes do empreendimento</span>
              </div>
              <div className="absolute top-4 right-4 px-2.5 py-1 text-[10px] font-mono-num uppercase bg-black/80 text-amber-400 rounded border border-amber-400/30">
                Ampliar imagem
              </div>
            </button>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono-num">
              <div className="p-3.5 rounded bg-stone-900 border border-stone-800 flex items-center gap-2.5">
                <FileCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-stone-300">Solicite a documentação</span>
              </div>
              <div className="p-3.5 rounded bg-stone-900 border border-stone-800 flex items-center gap-2.5">
                <Hammer className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-stone-300">Confirme regras de construção</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Technical Pillars */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="p-5 rounded-xl bg-stone-900/80 border border-stone-800 hover:border-amber-400/50 transition-colors flex items-start gap-4">
              <div className="p-3 rounded-lg bg-amber-400/10 text-amber-400 shrink-0 mt-1">
                <Maximize2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono-num uppercase text-amber-400 font-bold block">Dimensões informadas</span>
                <h4 className="font-headline text-lg font-bold uppercase text-white">12 m de frente por 25 m</h4>
                <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                  Confirme as medidas e os limites do lote na documentação antes de definir o projeto.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-stone-900/80 border border-stone-800 hover:border-amber-400/50 transition-colors flex items-start gap-4">
              <div className="p-3 rounded-lg bg-amber-400/10 text-amber-400 shrink-0 mt-1">
                <Sun className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono-num uppercase text-amber-400 font-bold block">Orientação informada</span>
                <h4 className="font-headline text-lg font-bold uppercase text-white">Sol da manhã</h4>
                <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                  Confira a orientação da fachada presencialmente com o vendedor.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-stone-900/80 border border-stone-800 hover:border-amber-400/50 transition-colors flex items-start gap-4">
              <div className="p-3 rounded-lg bg-amber-400/10 text-amber-400 shrink-0 mt-1">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono-num uppercase text-amber-400 font-bold block">Dimensões Totais</span>
                <h4 className="font-headline text-lg font-bold uppercase text-white">Área total</h4>
                <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                  A área completa, mede um tamanho total de 300m²
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-stone-900/80 border border-stone-800 hover:border-amber-400/50 transition-colors flex items-start gap-4">
              <div className="p-3 rounded-lg bg-amber-400/10 text-amber-400 shrink-0 mt-1">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono-num uppercase text-amber-400 font-bold block">Documentação</span>
                <h4 className="font-headline text-lg font-bold uppercase text-white">Confira os dados do imóvel</h4>
                <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                  Solicite a matrícula atualizada e confirme as condições legais com o vendedor e o cartório competente.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Real Human Deal Guarantee Quote */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 border border-amber-400/30 text-stone-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] font-mono-num uppercase tracking-wider text-amber-400 font-bold block">
              Fale com o vendedor
            </span>
            <h3 className="font-headline text-2xl sm:text-3xl font-black uppercase text-white">
              “Confirme os detalhes antes de fechar negócio.”
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Converse diretamente sobre preço, documentação, condições de pagamento e eventual permuta. Os termos devem ser acordados com o vendedor.
            </p>
          </div>

          <button
            onClick={onContactSeller}
            className="shrink-0 px-6 py-4 text-xs font-black font-mono-num uppercase tracking-wider text-black bg-amber-400 hover:bg-amber-300 rounded shadow transition-all cursor-pointer whitespace-nowrap"
          >
            Falar com o Vendedor
          </button>
        </div>

      </div>
    </section>
  );
};
