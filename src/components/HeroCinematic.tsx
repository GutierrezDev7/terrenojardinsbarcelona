"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight, MessageCircle, Trees } from 'lucide-react';
import { CONDO_IMAGES, LOT_DETAILS } from '../data/condoData';
import { HeroImageCarousel } from './HeroImageCarousel';

interface HeroCinematicProps {
  onContactSeller: () => void;
  onScrollToSection: (id: string) => void;
  onSelectPhoto: (src: string, title: string) => void;
}

export const HeroCinematic: React.FC<HeroCinematicProps> = ({
  onContactSeller,
  onScrollToSection,
  onSelectPhoto,
}) => {
  return (
    <section data-gsap-parallax-section className="relative overflow-hidden border-b border-stone-800 bg-[#202a21] text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="grid items-center gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-14">
          <div className="max-w-3xl">
            <div className="mb-5 flex flex-wrap items-center gap-x-2.5 gap-y-2 text-[10px] font-mono-num font-bold uppercase tracking-[0.16em] text-white sm:text-xs">
              <span className="flex items-center gap-2 text-white">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                TERRENO À VENDA
              </span>
              <span aria-hidden="true" className="text-white">/</span>
              <span>CONDOMÍNIO JARDINS BARCELONA</span>
              <span aria-hidden="true" className="text-white">/</span>
              <span className="text-white">NEGOCIAÇÃO DIRETA</span>
            </div>

            <h1 data-gsap-reveal className="font-headline text-5xl font-black uppercase leading-[0.94] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              TERRENO DE <span className="whitespace-nowrap">300 M²</span> NO
              <span className="mt-1 block bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                JARDINS BARCELONA.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base font-normal leading-relaxed text-stone-300 sm:text-lg">
              Conheça um lote de <strong className="font-semibold text-white">300 m²</strong> no Condomínio Jardins Barcelona. As dimensões e características abaixo foram informadas pelo vendedor; confirme os detalhes, a documentação e as condições diretamente com ele.
            </p>

            <div className="mt-6 border-l-2 border-amber-400 pl-4">
              <span className="block text-[10px] font-mono-num font-bold uppercase tracking-[0.16em] text-stone-400">
                Valor anunciado
              </span>
              <span className="mt-1 block font-headline text-4xl font-black text-amber-300 sm:text-5xl">
                {LOT_DETAILS.askingPrice}
              </span>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <button
                onClick={onContactSeller}
                className="inline-flex min-h-14 cursor-pointer items-center justify-center gap-3 rounded bg-amber-400 px-7 py-4 text-sm font-black uppercase tracking-wider text-black shadow-lg shadow-black/20 transition-colors hover:bg-amber-300 active:bg-amber-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#202a21]"
              >
                <MessageCircle className="h-5 w-5 fill-black" />
                <span>Falar com o Vendedor</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => onScrollToSection('lazer')}
                className="inline-flex min-h-14 cursor-pointer items-center justify-center gap-2.5 rounded border border-stone-600 bg-stone-900/70 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-stone-500 hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#202a21]"
              >
                <Trees className="h-4 w-4 text-emerald-400" />
                <span>Ver imagens do condomínio</span>
              </button>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-stone-400">
              Converse diretamente com o vendedor sobre preço, permuta e condições.
            </p>
          </div>

          <figure className="relative isolate mx-auto w-full max-w-2xl lg:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-stone-900 shadow-[0_30px_90px_-28px_rgba(0,0,0,0.8)] sm:aspect-[16/10] lg:aspect-[4/3]">
              <Image
                src={CONDO_IMAGES.condoPanoramic}
                alt="Vista aérea do empreendimento Jardins Barcelona, com vias, áreas verdes e lotes."
                fill
                priority
                sizes="(min-width: 1024px) 48vw, (min-width: 640px) 90vw, 100vw"
                data-gsap-parallax
                className="scale-[1.03] object-cover object-[center_52%] transition-transform duration-700 ease-out motion-safe:hover:scale-[1.06]"
              />
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101812]/75 via-transparent to-[#101812]/10" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-5">
                <span className="text-[10px] font-mono-num font-bold uppercase tracking-[0.16em] text-white sm:text-xs">
                  Jardins Barcelona
                </span>
                <span className="rounded border border-white/20 bg-black/35 px-2.5 py-1.5 text-[9px] font-mono-num font-bold uppercase tracking-wider text-stone-100 backdrop-blur-sm sm:text-[10px]">
                  Vista aérea
                </span>
              </figcaption>
            </div>
          </figure>
        </div>

        <div data-gsap-stagger className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 lg:grid-cols-4 lg:gap-4">
          <div className="rounded-lg border border-white/10 bg-[#263128]/80 p-4 sm:p-5">
            <span className="mb-2 block text-[10px] font-mono-num font-bold uppercase tracking-wider text-amber-400">Área informada</span>
            <span className="block font-headline text-2xl font-black text-white sm:text-3xl">{LOT_DETAILS.estimatedArea}</span>
            <span className="mt-1 block text-[11px] text-stone-400">12 m de frente × 25 m</span>
          </div>

          <div className="rounded-lg border border-white/10 bg-[#263128]/80 p-4 sm:p-5">
            <span className="mb-2 block text-[10px] font-mono-num font-bold uppercase tracking-wider text-amber-400">Topografia informada</span>
            <span className="block font-headline text-2xl font-black text-white sm:text-3xl">Aclive suave</span>
            <span className="mt-1 block text-[11px] text-stone-400">Na parte frontal do lote</span>
          </div>

          <div className="rounded-lg border border-white/10 bg-[#263128]/80 p-4 sm:p-5">
            <span className="mb-2 block text-[10px] font-mono-num font-bold uppercase tracking-wider text-amber-400">Orientação informada</span>
            <span className="block font-headline text-2xl font-black text-white sm:text-3xl">Sol da manhã</span>
            <span className="mt-1 block text-[11px] text-stone-400">Confirme na visita</span>
          </div>

          <div className="rounded-lg border border-white/10 bg-[#263128]/80 p-4 sm:p-5">
            <span className="mb-2 block text-[10px] font-mono-num font-bold uppercase tracking-wider text-amber-400">Documentação</span>
            <span className="block font-headline text-2xl font-black text-white sm:text-3xl">Consulte</span>
            <span className="mt-1 block text-[11px] text-stone-400">Peça os dados atualizados</span>
          </div>
        </div>
      </div>

      <HeroImageCarousel onSelectPhoto={onSelectPhoto} />

    </section>
  );
};
