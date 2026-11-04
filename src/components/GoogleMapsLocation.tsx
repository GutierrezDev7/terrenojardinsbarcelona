const locationQuery = encodeURIComponent('Condomínio Jardins Barcelona FGR');
const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${locationQuery}&output=embed`;

export const GoogleMapsLocation = () => {
  return (
    <section
      id="masterplan"
      data-gsap-reveal
      aria-labelledby="location-heading"
      className="border-b border-stone-800 bg-[#202a21] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="location-heading"
          className="mb-8 text-center font-headline text-4xl font-black uppercase tracking-tight text-white sm:text-6xl"
        >
          Localização <span className="text-amber-400">do Condomínio</span>
        </h2>
        <p className="mx-auto mb-6 max-w-2xl text-center text-sm leading-relaxed text-stone-300 sm:text-base">
          O mapa mostra o Condomínio Jardins Barcelona. Para confirmar a posição exata do lote à venda, fale com o vendedor.
        </p>
        <iframe
          title="Localização do Condomínio Jardins Barcelona no Google Maps"
          src={googleMapsEmbedUrl}
          className="h-[420px] w-full rounded-2xl border border-stone-700 sm:h-[560px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
};
