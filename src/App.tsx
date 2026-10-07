import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Artists from './components/Artists';
import StudioStandards from './components/StudioStandards';
import FlashVault from './components/FlashVault';
import ClientReviews from './components/ClientReviews';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
import AssetLibraryModal from './components/AssetLibraryModal';
import { ArrowUp, Calendar } from 'lucide-react';
import { initSmoothScroll, scrollToTarget } from './lib/lenis';

export default function App() {
  const [assetModalOpen, setAssetModalOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Booking pre-fill state
  const [bookingPreFill, setBookingPreFill] = useState<{
    style?: string;
    artist?: string;
    placement?: string;
    estimatedQuote?: string;
    flashTitle?: string;
  }>({});

  // Initialize Lenis + GSAP ScrollTrigger ticker integration
  useEffect(() => {
    const lenis = initSmoothScroll();

    const handleScroll = (e: any) => {
      const scrollY = typeof e?.scroll === 'number' ? e.scroll : window.scrollY;
      setShowBackToTop(scrollY > 500);
    };

    if (lenis) {
      lenis.on('scroll', handleScroll);
    } else {
      window.addEventListener('scroll', () => handleScroll({ scroll: window.scrollY }), { passive: true });
    }

    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  const handleOpenBooking = (preFillData = {}) => {
    setBookingPreFill(preFillData);
    scrollToTarget('#booking', { offset: -40, duration: 1.4 });
  };

  const handleBookStyle = (styleTitle: string, artistName: string) => {
    handleOpenBooking({
      style: styleTitle,
      artist: artistName,
    });
  };

  const handleSelectArtist = (artistName: string) => {
    handleOpenBooking({
      artist: artistName,
    });
  };

  const handleClaimFlash = (flashTitle: string, artistName: string, price: number) => {
    handleOpenBooking({
      flashTitle,
      artist: artistName,
      estimatedQuote: `$${price} USD (Flash Reservation)`,
    });
  };

  const scrollToTop = () => {
    scrollToTarget(0, { duration: 1.5 });
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-[#f5f5f5] selection:bg-white selection:text-black relative">
      {/* 1. Header & Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenAssetLibrary={() => setAssetModalOpen(true)}
      />

      {/* 2. Main Content Sections */}
      <main>
        {/* Cinematic Hero with GSAP ScrollTrigger Scrub */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Selected Portfolio & Styles Lightbox */}
        <Portfolio onBookStyle={handleBookStyle} />

        {/* Resident Master Artisans */}
        <Artists onSelectArtist={handleSelectArtist} />

        {/* Studio Cleanroom & Sterile Standards */}
        <StudioStandards />

        {/* Exclusive 1-of-1 Flash Drop Vault with GSAP 3D Cascade Scrub */}
        <FlashVault onClaimFlash={handleClaimFlash} />

        {/* Verified Healed Client Testimonials */}
        <ClientReviews />

        {/* Permanent On-Page Booking Section */}
        <BookingSection initialData={bookingPreFill} />
      </main>

      {/* 3. Comprehensive Business Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenAssetLibrary={() => setAssetModalOpen(true)}
      />

      {/* Floating Action Controls - Compact and refined on mobile */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 flex flex-col items-end gap-2 sm:gap-3">
        {/* Smooth Back to Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="p-2 sm:p-2.5 bg-black/85 hover:bg-black text-gray-400 hover:text-white border border-white/20 rounded-full shadow-2xl transition-all duration-200 backdrop-blur-md hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        )}

        {/* Floating Quick Consultation Pill */}
        <button
          onClick={() => handleOpenBooking()}
          className="flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 bg-white text-black text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-[0.2em] rounded-full shadow-2xl hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border border-white/40"
        >
          <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-black shrink-0" />
          <span>Book Session</span>
        </button>
      </div>

      {/* Asset Library Technical Specs Modal */}
      <AssetLibraryModal
        isOpen={assetModalOpen}
        onClose={() => setAssetModalOpen(false)}
      />
    </div>
  );
}
