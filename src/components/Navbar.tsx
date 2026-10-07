import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { cn } from '../lib/utils';
import { scrollToTarget } from '../lib/lenis';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenAssetLibrary: () => void;
}

export default function Navbar({ onOpenBooking, onOpenAssetLibrary }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ambientAudio, setAmbientAudio] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Artworks', href: '#artworks' },
    { label: 'Resident Masters', href: '#artists' },
    { label: 'Studio & Hygiene', href: '#standards' },
    { label: 'Flash Vault', href: '#flash-vault' },
    { label: 'Client Stories', href: '#testimonials' },
    { label: 'Book Consultation', href: '#booking' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollToTarget(href, { offset: -40 });
  };

  const toggleAudio = () => {
    setAmbientAudio(!ambientAudio);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
            : 'bg-transparent py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Zone 1: Single clean text wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToTarget(0);
            }}
            className="flex flex-col group text-left cursor-pointer"
          >
            <span className="font-display text-xl md:text-2xl font-bold tracking-[0.25em] text-white group-hover:text-gray-300 transition-colors">
              OBSIDIAN
            </span>
            <span className="text-[9px] uppercase tracking-[0.35em] text-gray-400 font-medium">
              Tattoo Atelier · SoHo NYC
            </span>
          </a>

          {/* Zone 2: 4-6 Clean Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-[0.18em] font-medium text-gray-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-3">
            {/* Ambient sound simulation button */}
            <button
              onClick={toggleAudio}
              title={ambientAudio ? 'Mute Studio Ambience' : 'Play Studio Ambient Hum'}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-400 hover:text-white border border-white/10 rounded-sm hover:border-white/30 transition-colors cursor-pointer"
            >
              {ambientAudio ? <Volume2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="text-[10px] tracking-wider uppercase font-mono">{ambientAudio ? 'Studio Hum On' : 'Ambience'}</span>
            </button>

            {/* Asset library button */}
            <button
              onClick={onOpenAssetLibrary}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-300 hover:text-white border border-white/15 rounded-sm hover:border-white/40 transition-colors tracking-widest uppercase font-medium cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300/80" />
              <span>Asset Vault</span>
            </button>

            {/* Primary Booking CTA -> Smooth scrolls to #booking */}
            <button
              onClick={() => scrollToTarget('#booking', { offset: -40 })}
              className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4.5 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-[0.2em] text-black bg-white hover:bg-gray-200 transition-all duration-200 rounded-sm shadow-md active:scale-95 cursor-pointer"
            >
              <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-black shrink-0" />
              <span>Book Session</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#0a0a0a]/95 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-28 pb-10 px-8 border-b border-white/10 animate-fadeIn">
          <div className="flex flex-col space-y-6">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gray-500 font-mono">
              Menu Navigation
            </span>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-display uppercase tracking-widest text-gray-200 hover:text-white transition-colors border-b border-white/5 pb-2"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col space-y-4 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssetLibrary();
              }}
              className="w-full py-3 text-xs uppercase tracking-widest border border-white/20 text-gray-300 hover:text-white flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Inspect 3D Assets & Specs</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToTarget('#booking', { offset: -40 });
              }}
              className="w-full py-3.5 text-xs font-bold uppercase tracking-widest bg-white text-black hover:bg-gray-200 transition-colors text-center cursor-pointer"
            >
              Book Artist Consultation
            </button>
          </div>
        </div>
      )}
    </>
  );
}
