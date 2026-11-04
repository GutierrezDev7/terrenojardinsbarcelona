"use client";

import { useState } from 'react';
import { ExperienceEffects } from './components/ExperienceEffects';
import { Header } from './components/Header';
import { HeroCinematic } from './components/HeroCinematic';
import { DirectDealPillars } from './components/DirectDealPillars';
import { CinemaGallery } from './components/CinemaGallery';
import { GoogleMapsLocation } from './components/GoogleMapsLocation';
import { PaymentConditionsSection } from './components/PaymentConditionsSection';
import { SellerContact } from './components/SellerContact';
import { FaqSection } from './components/FaqSection';
import { PhotoLightbox } from './components/PhotoLightbox';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { scrollToSection } from './lib/smoothScroll';

export default function App() {
  const [lightboxPhoto, setLightboxPhoto] = useState<{
    src: string | null;
    title?: string;
    description?: string;
  }>({
    src: null,
  });

  const handleOpenPhoto = (src: string, title?: string, description?: string) => {
    setLightboxPhoto({ src, title, description });
  };

  const handleClosePhoto = () => {
    setLightboxPhoto({ src: null });
  };

  const handleNavigatePhoto = (newSrc: string, newTitle: string, newDesc?: string) => {
    setLightboxPhoto({ src: newSrc, title: newTitle, description: newDesc });
  };

  return (
    <div id="top" className="min-h-screen bg-[#17221c] text-stone-100 font-sans flex flex-col selection:bg-amber-500 selection:text-black">
      <ExperienceEffects />

      {/* 1. Header */}
      <Header />

      {/* Main Sections Flow */}
      <main className="flex-1">
        {/* 2. Hero Section: Core Value Proposition & Selling the Dream in Jardins Barcelona */}
        <HeroCinematic
          onContactSeller={() => scrollToSection('fale-com-vendedor')}
          onScrollToSection={scrollToSection}
          onSelectPhoto={handleOpenPhoto}
        />

        {/* 3. Lot dimensions and seller-provided information */}
        <DirectDealPillars
          onContactSeller={() => scrollToSection('fale-com-vendedor')}
          onSelectPhoto={handleOpenPhoto}
        />

        {/* 4. Condominium images */}
        <CinemaGallery onSelectPhoto={handleOpenPhoto} />

        {/* 5. Google Maps location */}
        <GoogleMapsLocation />

        {/* 6. Payment options and negotiation */}
        <PaymentConditionsSection />

        {/* 7. Direct seller contact */}
        <SellerContact />

        {/* 8. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* 10. Floating WhatsApp */}
      <FloatingWhatsApp />

      {/* 11. Fullscreen Photo Lightbox */}
      <PhotoLightbox
        currentSrc={lightboxPhoto.src}
        title={lightboxPhoto.title}
        description={lightboxPhoto.description}
        onClose={handleClosePhoto}
        onNavigate={handleNavigatePhoto}
      />
    </div>
  );
}
