import React, { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { AMENITIES_LIST } from '../data/condoData';
import { Eye, Camera } from 'lucide-react';

interface CinemaGalleryProps {
  onSelectPhoto: (src: string, title: string, desc?: string) => void;
}

export const CinemaGallery: React.FC<CinemaGalleryProps> = ({ onSelectPhoto }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('todos');

  const filters = [
    { id: 'todos', label: `Todas as imagens (${AMENITIES_LIST.length})` },
    { id: 'esportes', label: 'Esportes' },
    { id: 'natureza', label: 'Natureza e loteamento' },
    { id: 'saude', label: 'Atividade física' },
    { id: 'familia', label: 'Áreas externas' },
    { id: 'clube', label: 'Espaços comuns' },
  ];

  const items = selectedFilter === 'todos' 
    ? AMENITIES_LIST 
    : AMENITIES_LIST.filter(a => a.category === selectedFilter);

  return (
    <section id="lazer" data-gsap-reveal className="py-20 sm:py-28 bg-[#29332a] text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono-num font-bold text-amber-400 bg-amber-950/40 border border-amber-800/40 rounded">
            <Camera className="w-3.5 h-3.5" />
            <span>IMAGENS DO LOTEAMENTO E DE ÁREAS COMUNS</span>
          </div>

          <h2 className="font-headline font-black uppercase text-4xl sm:text-6xl tracking-tight text-white leading-none">
            CONHEÇA AS ÁREAS DO <br />
            <span className="text-amber-400">JARDINS BARCELONA</span>
          </h2>

          <p className="text-stone-300 text-base sm:text-lg leading-relaxed text-balance">
            Veja imagens do empreendimento e de espaços comuns. A planta é ilustrativa e não identifica o lote à venda; confirme com o vendedor a disponibilidade e as condições de uso de cada área.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((f) => (
            <motion.button
              key={f.id}
              type="button"
              onClick={() => setSelectedFilter(f.id)}
              aria-pressed={selectedFilter === f.id}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className={`px-4 py-2 text-xs font-mono-num font-bold uppercase rounded border transition-all cursor-pointer ${
                selectedFilter === f.id
                  ? 'bg-amber-400 text-black border-amber-400 shadow-sm'
                  : 'bg-stone-900 text-stone-400 border-stone-800 hover:border-stone-700 hover:text-white'
              }`}
            >
              {f.label}
            </motion.button>
          ))}
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const isFeatured = index === 0;

            return (
              <button
                type="button"
                key={item.id}
                onClick={() => onSelectPhoto(item.image, item.title, item.description)}
                aria-label={`Ampliar imagem: ${item.title}`}
                className={`group relative w-full bg-stone-950 rounded-2xl overflow-hidden border border-stone-800 hover:border-amber-400/60 transition-all duration-300 cursor-pointer text-left ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes={
                    isFeatured
                      ? '(min-width: 1024px) 66vw, (min-width: 768px) 100vw, 100vw'
                      : '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
                  }
                  className={`transition-transform duration-700 group-hover:scale-105 ${
                    item.id === 'planta' ? 'bg-white object-contain' : 'object-cover'
                  }`}
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:via-black/20 transition-all" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-2.5 py-1 text-[10px] font-mono-num font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-amber-400 border border-amber-400/30 rounded">
                    {item.tag}
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10 space-y-1.5">
                  <h3 className="font-headline text-xl sm:text-2xl font-bold uppercase text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-[11px] font-mono-num text-amber-400">
                    <span>Selecione para ampliar</span>
                    <span>→</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
