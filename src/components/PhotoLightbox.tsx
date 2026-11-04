import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { AMENITIES_LIST } from '../data/condoData';

interface PhotoLightboxProps {
  currentSrc: string | null;
  title?: string;
  description?: string;
  onClose: () => void;
  onNavigate?: (newSrc: string, newTitle: string, newDesc?: string) => void;
}

const allPhotos = AMENITIES_LIST.map(({ image, title, description }) => ({
  src: image,
  title,
  desc: description,
}));

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  currentSrc,
  title,
  description,
  onClose,
  onNavigate,
}) => {
  const currentIndex = allPhotos.findIndex(p => p.src === currentSrc);

  useEffect(() => {
    if (!currentSrc) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNavigate && currentIndex >= 0) {
        const next = (currentIndex + 1) % allPhotos.length;
        onNavigate(allPhotos[next].src, allPhotos[next].title, allPhotos[next].desc);
      }
      if (e.key === 'ArrowLeft' && onNavigate && currentIndex >= 0) {
        const prev = (currentIndex - 1 + allPhotos.length) % allPhotos.length;
        onNavigate(allPhotos[prev].src, allPhotos[prev].title, allPhotos[prev].desc);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, currentSrc, onClose, onNavigate]);

  if (!currentSrc) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onNavigate && currentIndex >= 0) {
      const prev = (currentIndex - 1 + allPhotos.length) % allPhotos.length;
      onNavigate(allPhotos[prev].src, allPhotos[prev].title, allPhotos[prev].desc);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onNavigate && currentIndex >= 0) {
      const next = (currentIndex + 1) % allPhotos.length;
      onNavigate(allPhotos[next].src, allPhotos[next].title, allPhotos[next].desc);
    }
  };

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-heading"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 select-none"
      onClick={onClose}
    >
      {/* Top Bar with Info and Close */}
      <div 
        className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between text-white bg-gradient-to-b from-black/80 to-transparent z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="space-y-0.5 max-w-xl">
          <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
            Imagem do empreendimento {currentIndex >= 0 && `(${currentIndex + 1} de ${allPhotos.length})`}
          </span>
          <h2 id="lightbox-heading" className="font-display text-base sm:text-lg font-bold text-white truncate">
            {title || (currentIndex >= 0 ? allPhotos[currentIndex].title : 'Visualização')}
          </h2>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Prev button */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all z-10 cursor-pointer"
        aria-label="Foto anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Main Image Frame */}
      <div
        className="relative h-[70vh] w-full max-w-5xl sm:h-[75vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={currentSrc}
          alt={title || 'Imagem do empreendimento'}
          fill
          sizes="100vw"
          className="rounded-xl border border-white/10 object-contain shadow-2xl"
        />
      </div>

      {/* Next button */}
      <button
        type="button"
        onClick={handleNext}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all z-10 cursor-pointer"
        aria-label="Próxima foto"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Caption Bar */}
      <div 
        className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-center z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-xs sm:text-sm text-stone-300 max-w-2xl mx-auto">
          {description || (currentIndex >= 0 ? allPhotos[currentIndex].desc : '')}
        </p>
        <p className="text-[11px] text-stone-500 mt-1">
          Use as setas do teclado (← / →) para navegar ou ESC para fechar
        </p>
      </div>
    </div>
  );
};
