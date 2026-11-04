import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS, getWhatsAppHref } from '../data/condoData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent('Olá! Tenho uma dúvida sobre a negociação do terreno no Jardins Barcelona.');
    window.open(getWhatsAppHref(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="faq" data-gsap-reveal className="py-20 sm:py-28 bg-[#29332a] text-stone-100 border-b border-stone-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono-num font-bold text-amber-400 bg-amber-950/40 border border-amber-800/40 rounded">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>TRANSPARÊNCIA TOTAL</span>
          </div>

          <h2 className="font-headline font-black uppercase text-4xl sm:text-6xl tracking-tight text-white leading-none">
            PERGUNTAS <span className="text-amber-400">FREQUENTES</span>
          </h2>

          <p className="text-stone-300 text-base sm:text-lg leading-relaxed text-balance">
            Encontre respostas iniciais e confirme os detalhes do imóvel diretamente com o vendedor antes de fechar negócio.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-stone-800 bg-stone-950 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-stone-900 transition-colors cursor-pointer"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono-num font-bold text-amber-400 uppercase tracking-widest block">
                      {item.category}
                    </span>
                    <span className="font-headline text-lg sm:text-xl font-bold uppercase text-white tracking-wide">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-amber-400' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-label={item.question}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-2 text-sm sm:text-base text-stone-300 leading-relaxed border-t border-stone-850 bg-stone-900/40">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-stone-900 border border-stone-800 sm:flex sm:items-center sm:justify-between gap-6 space-y-4 sm:space-y-0 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-headline text-xl font-bold uppercase text-white">
              Tem outra dúvida sobre o imóvel ou a negociação?
            </h4>
            <p className="text-xs text-stone-400">
              Fale diretamente com o vendedor para conversar sobre as condições e combinar uma visita.
            </p>
          </div>

          <button
            onClick={openWhatsApp}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-black font-mono-num uppercase tracking-wider text-black bg-amber-400 hover:bg-amber-300 rounded shadow transition-colors cursor-pointer shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>Chamar no WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
