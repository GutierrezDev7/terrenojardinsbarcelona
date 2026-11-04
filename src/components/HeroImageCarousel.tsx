"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Camera, Expand } from 'lucide-react';
import { CONDO_IMAGES } from '../data/condoData';

const slides = [
  {
    src: CONDO_IMAGES.entranceAerial,
    title: 'Acesso ao condomínio',
    description: 'Vista aérea da entrada e da estrutura de acesso do condomínio.',
    category: 'Acesso',
    alt: 'Vista aérea da portaria e da entrada do condomínio.',
  },
  {
    src: CONDO_IMAGES.tennisClay,
    title: 'Quadras de tênis em saibro',
    description: 'Quadras de tênis com piso de saibro.',
    category: 'Esportes',
    alt: 'Quadras de tênis em saibro no empreendimento.',
  },
  {
    src: CONDO_IMAGES.lakeDeck,
    title: 'Lago com deck',
    description: 'Lago com deck de madeira na margem.',
    category: 'Natureza',
    alt: 'Lago cercado por vegetação com um deck de madeira.',
  },
  {
    src: CONDO_IMAGES.fitnessGym,
    title: 'Academia',
    description: 'Ambiente interno equipado para atividades físicas.',
    category: 'Espaço interno',
    alt: 'Academia equipada em ambiente interno.',
  },
];

interface HeroImageCarouselProps {
  onSelectPhoto: (src: string, title: string, description?: string) => void;
}

export function HeroImageCarousel({ onSelectPhoto }: HeroImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const pointerStartX = useRef<number | null>(null);
  const suppressClick = useRef(false);
  const reducedMotion = useReducedMotion();
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    const breakpoint = window.matchMedia('(max-width: 639px)');
    const updateCompactLayout = () => setIsCompact(breakpoint.matches);

    updateCompactLayout();
    breakpoint.addEventListener('change', updateCompactLayout);
    return () => breakpoint.removeEventListener('change', updateCompactLayout);
  }, []);

  const showSlide = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  const navigate = (direction: -1 | 1) => {
    showSlide(activeIndex + direction);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    pointerStartX.current = event.clientX;
    suppressClick.current = false;
    setIsDragging(true);
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null) return;
    const distance = event.clientX - pointerStartX.current;
    if (Math.abs(distance) > 48) {
      suppressClick.current = true;
      navigate(distance < 0 ? 1 : -1);
    }
    pointerStartX.current = null;
    setIsDragging(false);
  };

  const handlePointerCancel = () => {
    pointerStartX.current = null;
    setIsDragging(false);
  };

  return (
    <section
      aria-label="Imagens do loteamento e de áreas comuns"
      className="relative overflow-hidden border-t border-stone-800/80 bg-[linear-gradient(180deg,#111812_0%,#17221c_100%)] py-8 sm:py-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-1 flex flex-col gap-4 sm:mb-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-[10px] font-mono-num font-bold uppercase tracking-[0.18em] text-amber-400 sm:text-xs">
              <Camera className="h-3.5 w-3.5" />
              <span>Imagens do empreendimento</span>
            </div>
            <h2 className="font-headline text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
              Loteamento &amp; áreas comuns
            </h2>
          </div>

          <p className="hidden max-w-xs text-right text-xs leading-relaxed text-stone-400 sm:block">
            Arraste as imagens ou use as setas para explorar.
          </p>
        </div>

        <div
          className="relative mt-3 select-none touch-pan-y"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerCancel}
          onPointerCancel={handlePointerCancel}
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft') {
              event.preventDefault();
              navigate(-1);
            }
            if (event.key === 'ArrowRight') {
              event.preventDefault();
              navigate(1);
            }
          }}
        >
          <div
            className="relative mx-auto aspect-[1.4/1] w-full overflow-hidden sm:aspect-[2.5/1] sm:max-h-[480px]"
            style={{
              perspective: '1600px',
              background:
                'radial-gradient(ellipse at center, rgba(148, 169, 120, 0.12), transparent 68%)',
            }}
            aria-roledescription="carrossel"
            aria-label="Galeria de imagens do empreendimento"
            tabIndex={0}
          >
            {slides.map((slide, index) => {
              const difference =
                (index - activeIndex + slides.length + slides.length / 2) %
                  slides.length -
                slides.length / 2;
              const isActive = difference === 0;
              const isVisible = Math.abs(difference) <= 1;
              const x =
                difference === -1
                  ? isCompact
                    ? '-100%'
                    : '-86%'
                  : difference === 1
                    ? isCompact
                      ? '0%'
                      : '8%'
                    : '-50%';

              return (
                <motion.button
                  key={slide.src}
                  type="button"
                  aria-label={
                    isActive
                      ? `Ampliar imagem: ${slide.title}`
                      : `Mostrar imagem: ${slide.title}`
                  }
                  aria-current={isActive ? 'true' : undefined}
                  aria-hidden={!isVisible}
                  tabIndex={isVisible ? 0 : -1}
                  onClick={() => {
                    if (suppressClick.current) {
                      suppressClick.current = false;
                      return;
                    }
                    if (isActive) {
                      onSelectPhoto(slide.src, slide.title, slide.description);
                    } else {
                      showSlide(index);
                    }
                  }}
                  initial={false}
                  animate={{
                    x,
                    y: '-50%',
                    scale: isActive ? 1 : 0.78,
                    rotateY: isActive ? 0 : difference < 0 ? 13 : -13,
                    opacity: isActive ? 1 : isVisible ? 0.72 : 0,
                  }}
                  transition={{
                    duration: reducedMotion ? 0 : 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    left: '50%',
                    top: '50%',
                    zIndex: isActive ? 30 : isVisible ? 10 : 0,
                    transformStyle: 'preserve-3d',
                    pointerEvents: isVisible ? 'auto' : 'none',
                    filter: isActive ? 'brightness(1)' : 'brightness(0.72)',
                  }}
                  className={`absolute aspect-[4/3] w-[82%] overflow-hidden rounded-2xl border bg-stone-900 text-left shadow-[0_24px_70px_-20px_rgba(0,0,0,0.8)] outline-none transition-[border-color,box-shadow] focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#17221c] sm:aspect-[16/9] sm:w-[64%] ${
                    isActive
                      ? 'border-white/30 shadow-[0_35px_100px_-25px_rgba(0,0,0,0.9)]'
                      : 'border-white/15 shadow-[0_22px_55px_-20px_rgba(0,0,0,0.9)]'
                  } ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(min-width: 1280px) 760px, (min-width: 640px) 62vw, 82vw"
                    draggable={false}
                    className="pointer-events-none object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101812]/95 via-[#101812]/10 to-[#101812]/5" />
                  <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-3 sm:p-5">
                    <span className="rounded border border-white/15 bg-black/35 px-2.5 py-1 text-[9px] font-mono-num font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-md sm:text-[10px]">
                      Jardins Barcelona
                    </span>
                    <span className="rounded border border-white/15 bg-black/35 px-2.5 py-1 text-[9px] font-mono-num font-bold uppercase tracking-[0.16em] text-white/80 backdrop-blur-md sm:text-[10px]">
                      {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-7">
                    <div className="min-w-0">
                      <span className="mb-1.5 inline-flex rounded border border-amber-300/35 bg-black/40 px-2.5 py-1 text-[9px] font-mono-num font-bold uppercase tracking-[0.16em] text-amber-200 backdrop-blur-md sm:mb-2 sm:text-[10px]">
                        {slide.category}
                      </span>
                      <h3 className="truncate font-headline text-2xl font-black uppercase leading-none tracking-tight text-white sm:text-4xl">
                        {slide.title}
                      </h3>
                      <p className="mt-2 hidden max-w-lg text-sm leading-relaxed text-stone-200 sm:block">
                        {slide.description}
                      </p>
                    </div>
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="mb-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md sm:h-12 sm:w-12"
                      >
                        <Expand className="h-4 w-4" />
                      </span>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => navigate(-1)}
            aria-label="Imagem anterior"
            className="absolute left-1 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-[#17221c]/90 text-white shadow-xl backdrop-blur-md transition-colors hover:border-amber-300/60 hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 sm:left-3 sm:h-12 sm:w-12"
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button
            type="button"
            onClick={() => navigate(1)}
            aria-label="Próxima imagem"
            className="absolute right-1 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-[#17221c]/90 text-white shadow-xl backdrop-blur-md transition-colors hover:border-amber-300/60 hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 sm:right-3 sm:h-12 sm:w-12"
          >
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>

        <div className="mt-2 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-center text-[10px] font-mono-num uppercase tracking-wider text-stone-500 sm:text-left">
            Arraste para navegar · Selecione a imagem para ampliar
          </p>
          <div className="flex items-center gap-2" aria-label="Selecionar imagem">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => showSlide(index)}
                aria-label={`Mostrar imagem ${index + 1}: ${slide.title}`}
                aria-current={index === activeIndex ? 'true' : undefined}
                className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 ${
                  index === activeIndex
                    ? 'w-8 bg-amber-400'
                    : 'w-1.5 bg-stone-600 hover:bg-stone-400'
                }`}
              />
            ))}
          </div>
          <p className="text-xs font-mono-num text-stone-400" aria-live="polite">
            {String(activeIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            <span className="sr-only"> — {activeSlide.title}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
