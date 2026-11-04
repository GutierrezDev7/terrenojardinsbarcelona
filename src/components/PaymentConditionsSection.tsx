import { Banknote, Building2, Car, CheckCircle2, Handshake, RefreshCw } from 'lucide-react';
import { LOT_DETAILS } from '../data/condoData';

const paymentOptions = [
  {
    title: 'Pagamento à Vista',
    description:
      'Converse com o vendedor para verificar as condições disponíveis para pagamento à vista.',
    note: 'Condições sob consulta',
    icon: Banknote,
  },
  {
    title: 'Financiamento Bancário',
    description:
      'Consulte uma instituição financeira sobre as opções de crédito e confirme a documentação do imóvel com o vendedor.',
    note: 'Sujeito à análise da instituição',
    icon: Building2,
  },
  {
    title: 'Permuta & Aceite de Veículos',
    description:
      'O vendedor pode avaliar veículos ou outros bens como parte da negociação. A aceitação e os valores dependem de análise e acordo entre as partes.',
    note: 'Sujeito à avaliação e acordo',
    icon: Car,
    featured: true,
  },
];

export const PaymentConditionsSection = () => {
  return (
    <section
      id="pagamento"
      data-gsap-reveal
      className="border-b border-stone-800 bg-[#17221c] py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded border border-amber-800/40 bg-amber-950/40 px-3 py-1 text-xs font-bold font-mono-num text-amber-400">
            <Handshake className="h-3.5 w-3.5" />
            <span>NEGOCIAÇÃO DIRETA</span>
          </div>

          <h2 className="font-headline text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-6xl">
            FORMAS DE PAGAMENTO &amp; <br />
            <span className="text-amber-400">CONDIÇÕES DO VENDEDOR</span>
          </h2>

          <p className="text-balance text-base leading-relaxed text-stone-300 sm:text-lg">
            Valor anunciado: <strong className="font-semibold text-white">{LOT_DETAILS.askingPrice}</strong>. Converse diretamente com o vendedor para conhecer as condições disponíveis. Financiamentos e permutas dependem de análise e aprovação.
          </p>
        </div>

        <div data-gsap-stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {paymentOptions.map(({ title, description, note, icon: Icon, featured }) => (
            <article
              key={title}
              className={`flex flex-col justify-between space-y-4 rounded-2xl border p-6 ${
                featured
                  ? 'border-amber-500/50 bg-gradient-to-b from-stone-900 to-stone-950 shadow-xl'
                  : 'border-stone-800 bg-stone-950'
              }`}
            >
              <div className="space-y-3">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl border ${
                    featured
                      ? 'border-amber-400 bg-amber-400 text-black'
                      : 'border-amber-400/30 bg-amber-400/10 text-amber-400'
                  }`}
                >
                  <Icon className={`h-6 w-6 ${featured ? 'fill-black' : ''}`} />
                </div>
                <h3 className="font-headline text-xl font-bold uppercase text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-stone-300 sm:text-base">{description}</p>
              </div>

              <div className="flex items-center gap-1.5 border-t border-stone-800 pt-4 text-xs font-mono-num text-amber-400">
                {featured ? (
                  <RefreshCw className="h-4 w-4 shrink-0" />
                ) : (
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                )}
                <span>{note}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
