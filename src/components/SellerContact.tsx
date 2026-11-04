import { ArrowRight, MessageCircle, UserRound } from 'lucide-react';
import {
  getWhatsAppHref,
  SELLER_PHONE_DISPLAY,
  SELLER_PHONE_HREF,
} from '../data/condoData';

const message =
  'Olá! Tenho interesse no terreno no Jardins Barcelona e gostaria de conversar com o vendedor.';

export const SellerContact = () => {
  return (
    <section
      id="fale-com-vendedor"
      data-gsap-reveal
      aria-labelledby="seller-contact-heading"
      className="border-b border-stone-800 bg-[#17221c] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 rounded-3xl border border-amber-400/30 bg-gradient-to-br from-stone-900 to-stone-950 p-8 text-center shadow-2xl sm:p-12">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-400/30 bg-amber-400/10 text-amber-400">
            <UserRound className="h-8 w-8" />
          </div>

          <div className="max-w-2xl space-y-4">
            <span className="font-mono-num text-xs font-bold uppercase tracking-widest text-amber-400">
              Atendimento direto
            </span>
            <h2
              id="seller-contact-heading"
              className="font-headline text-4xl font-black uppercase leading-none text-white sm:text-6xl"
            >
              Fale com <span className="text-amber-400">o Vendedor</span>
            </h2>
            <p className="text-base leading-relaxed text-stone-300 sm:text-lg">
              Tire suas dúvidas sobre o terreno, negocie as condições e combine uma visita
              diretamente pelo WhatsApp.
            </p>
          </div>

          <a
            href={getWhatsAppHref(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded bg-amber-400 px-7 py-4 text-sm font-black uppercase tracking-wider text-black shadow-lg transition-colors hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950"
          >
            <MessageCircle className="h-5 w-5 fill-black" />
            Conversar pelo WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href={SELLER_PHONE_HREF}
            className="text-sm font-mono-num text-stone-300 underline decoration-stone-600 underline-offset-4 transition-colors hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
          >
            {SELLER_PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
};
