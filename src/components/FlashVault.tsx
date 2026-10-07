import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Lock, ArrowRight, Shield } from 'lucide-react';
import { FLASH_ITEMS } from '../data/mockData';

gsap.registerPlugin(ScrollTrigger);

interface FlashVaultProps {
  onClaimFlash: (flashTitle: string, artistName: string, price: number) => void;
}

export default function FlashVault({ onClaimFlash }: FlashVaultProps) {
  const vaultSectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const bgGothicRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!vaultSectionRef.current) return;

      // 1. Scrub Timeline for the Flash Cards 3D Cascade
      const cards = cardsContainerRef.current?.querySelectorAll('.flash-vault-card');
      if (cards && cards.length > 0) {
        const vaultTl = gsap.timeline({
          scrollTrigger: {
            trigger: vaultSectionRef.current,
            start: 'top 85%',
            end: 'center 45%',
            scrub: 1.2, // Smooth inertia scrub
            invalidateOnRefresh: true,
          },
        });

        // Background subtle parallax drift
        if (bgGothicRef.current) {
          vaultTl.fromTo(
            bgGothicRef.current,
            { y: -60, opacity: 0.05, rotate: -5 },
            { y: 80, opacity: 0.2, rotate: 5, ease: 'none' },
            0
          );
        }

        // 3D Perspective card cascade scrub
        vaultTl.fromTo(
          cards,
          {
            y: 110,
            opacity: 0.15,
            scale: 0.88,
            rotationX: 18,
            transformPerspective: 1000,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationX: 0,
            stagger: 0.12,
            ease: 'power2.out',
          },
          0
        );

        // Progress bar scrub indicator
        if (progressBarRef.current) {
          vaultTl.fromTo(
            progressBarRef.current,
            { width: '0%' },
            { width: '100%', ease: 'none' },
            0
          );
        }
      }
    }, vaultSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={vaultSectionRef}
      id="flash-vault"
      className="relative py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10 overflow-hidden"
    >
      {/* Background Decorative Parallax Layer */}
      <div
        ref={bgGothicRef}
        className="absolute top-1/4 right-0 w-[500px] h-[500px] pointer-events-none opacity-10 mix-blend-screen overflow-hidden will-change-transform"
      >
        <img
          src="/flash-sheets/gothic-flash-sheet.jpg"
          alt="Gothic Watermark"
          className="w-full h-full object-contain filter invert contrast-200"
        />
      </div>

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 relative z-10">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gray-400 font-mono mb-3">
            <span>Exclusive Flash Drop</span>
            <span className="text-gray-600">/</span>
            <span>1-of-1 Never Replicated</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
            THE FLASH VAULT
          </h2>
        </div>
        <div className="max-w-md">
          <p className="text-sm text-gray-400 font-light leading-relaxed mb-4">
            Original ready-to-ink conceptual studies crafted by our resident masters. Each piece is tattooed once and retired forever from our repertoire.
          </p>

          {/* Scrubbed Vault Unlock Progress Indicator */}
          <div className="flex items-center gap-3 text-[11px] font-mono text-gray-500">
            <span>Vault Sync</span>
            <div className="flex-1 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <div ref={progressBarRef} className="h-full bg-white transition-all will-change-transform" />
            </div>
            <span className="text-gray-300">Live</span>
          </div>
        </div>
      </div>

      {/* 3D Scrubbed Cards Grid */}
      <div
        ref={cardsContainerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
      >
        {FLASH_ITEMS.map((item) => (
          <div
            key={item.id}
            className={`flash-vault-card bg-[#121212] border rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 will-change-transform ${
              item.status === 'claimed'
                ? 'border-white/5 opacity-60'
                : 'border-white/15 hover:border-white/40 shadow-xl hover:-translate-y-1'
            }`}
          >
            {/* Image Preview Container */}
            <div className="relative aspect-square bg-black overflow-hidden group">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover grayscale contrast-115 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
              {/* Status Ribbon */}
              <div className="absolute top-3 right-3">
                {item.status === 'available' ? (
                  <span className="bg-white text-black text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm shadow-md flex items-center gap-1 font-mono">
                    <Sparkles className="w-2.5 h-2.5 text-amber-500" />
                    Available 1-of-1
                  </span>
                ) : (
                  <span className="bg-neutral-800 text-gray-400 text-[10px] font-medium uppercase tracking-widest px-2.5 py-1 rounded-sm font-mono flex items-center gap-1">
                    <Lock className="w-2.5 h-2.5" />
                    Claimed & Archived
                  </span>
                )}
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-gray-500 font-mono mb-1">
                  {item.series} · By {item.artist}
                </div>
                <h3 className="text-sm font-semibold text-white mb-3">{item.title}</h3>

                <div className="flex items-center justify-between text-xs py-2.5 border-y border-white/5 mb-4 text-gray-400 font-mono">
                  <span>Scale: {item.size}</span>
                  <span className="text-white font-bold text-sm">${item.price} USD</span>
                </div>
              </div>

              {item.status === 'available' ? (
                <button
                  onClick={() => onClaimFlash(item.title, item.artist, item.price)}
                  className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-gray-200 transition-colors flex items-center justify-center gap-1.5 rounded-sm cursor-pointer active:scale-95"
                >
                  <span>Claim & Lock Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <div className="w-full py-2.5 text-xs font-medium uppercase tracking-wider bg-white/5 text-gray-500 text-center rounded-sm font-mono">
                  Permanently Inked
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
