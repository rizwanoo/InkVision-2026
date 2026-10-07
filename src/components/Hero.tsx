import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, ShieldCheck, Award, ChevronRight, Sparkles, Eye } from 'lucide-react';
import { scrollToTarget } from '../lib/lenis';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const heroContainerRef = useRef<HTMLElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const floatingMachineRef = useRef<HTMLDivElement>(null);
  const [heroVisual, setHeroVisual] = useState<'model' | 'dragon'>('model');

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!heroContainerRef.current) return;

      // Master Timeline for ScrollTrigger Scrub
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroContainerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      // 1. Background image parallax & zoom (Keeps high contrast and visibility)
      if (bgImageRef.current) {
        heroTl.to(
          bgImageRef.current,
          {
            scale: 1.18,
            y: 120,
            opacity: 0.6,
            ease: 'none',
          },
          0
        );
      }

      // 2. Floating Tattoo Machine 3D Parallax & Rotation
      if (floatingMachineRef.current) {
        heroTl.to(
          floatingMachineRef.current,
          {
            y: -180,
            rotation: -14,
            scale: 1.08,
            opacity: 0.4,
            ease: 'none',
          },
          0
        );
      }

      // 3. Main Content Scale Down and Fade
      if (contentRef.current) {
        heroTl.to(
          contentRef.current,
          {
            y: -90,
            scale: 0.95,
            opacity: 0,
            ease: 'none',
          },
          0
        );
      }

      // 4. Stats Bar Dissolve
      if (statsRef.current) {
        heroTl.to(
          statsRef.current,
          {
            y: 35,
            opacity: 0,
            ease: 'none',
          },
          0
        );
      }

      // Initial Entrance Animations
      const entranceTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      entranceTl
        .fromTo('.hero-kicker', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.1 })
        .fromTo('.hero-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.0 }, '-=0.6')
        .fromTo('.hero-desc', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.7')
        .fromTo('.hero-cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
        .fromTo(statsRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 }, '-=0.4')
        .fromTo(
          floatingMachineRef.current,
          { opacity: 0, scale: 0.85, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 1.2 },
          '-=0.8'
        );
    }, heroContainerRef);

    return () => ctx.revert();
  }, [heroVisual]);

  const activeImageSrc =
    heroVisual === 'model'
      ? '/hero/hero-tattooed-model.jpg'
      : '/hero/hero-blackwork-dragon.jpg';

  return (
    <section
      ref={heroContainerRef}
      className="relative min-h-[108vh] flex items-center justify-center pt-28 pb-20 overflow-hidden"
    >
      {/* 1. Cinematic Background Layer - Dark, Bold, 100% Crisp & Visible */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          ref={bgImageRef}
          key={heroVisual}
          src={activeImageSrc}
          alt="Obsidian Atelier Editorial Model"
          className="w-full h-full object-cover object-center sm:object-top opacity-90 sm:opacity-95 scale-100 filter contrast-120 brightness-95 will-change-transform transition-opacity duration-700"
          loading="eager"
        />
        {/* Soft targeted edge scrim to keep text legible without washing out the subject */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/70 via-transparent to-[#0a0a0a]/70" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* 2. Floating 3D Tattoo Machine - Clear, Metallic, High-Contrast & Prominent */}
      <div
        ref={floatingMachineRef}
        className="absolute top-[18%] sm:top-[22%] right-[3%] sm:right-[6%] lg:right-[8%] z-20 w-[140px] sm:w-[200px] lg:w-[270px] will-change-transform"
      >
        <div className="relative rounded-sm overflow-hidden border border-white/30 shadow-[0_25px_60px_rgba(0,0,0,0.95)] bg-[#0c0c0c]/90 backdrop-blur-md p-2 group transition-all duration-300 hover:border-white/60">
          <div className="relative aspect-square overflow-hidden rounded-xs bg-black">
            <img
              src="/tattoo-machines/tattoo-machine-metallic.jpg"
              alt="Custom Engraved Rotary Machine"
              className="w-full h-full object-contain filter brightness-115 contrast-135 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-gray-300 uppercase tracking-widest px-1">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Rotary 0.15mm
            </span>
            <span className="text-white font-bold">Class-A</span>
          </div>
        </div>
      </div>

      {/* 3. Hero Content Container */}
      <div
        ref={contentRef}
        className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center will-change-transform"
      >
        {/* Visual Switcher Pill & Emotional Kicker */}
        <div className="hero-kicker flex flex-col sm:flex-row items-center gap-3 mb-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-gray-200 font-mono bg-black/75 backdrop-blur-md px-4 py-1.5 border border-white/20 rounded-full shadow-2xl">
            <span className="text-white font-medium">Your Flesh Is Temporary. Your Art Is Eternal.</span>
            <span className="text-gray-500 hidden sm:inline">/</span>
            <span className="text-gray-400 hidden sm:inline">SoHo NYC</span>
          </div>

          {/* Quick Backdrop Switcher */}
          <div className="flex items-center gap-1 bg-black/80 backdrop-blur-md border border-white/20 rounded-full p-1 text-[10px] font-mono">
            <button
              onClick={() => setHeroVisual('model')}
              className={`px-3 py-0.5 rounded-full uppercase tracking-wider transition-colors cursor-pointer ${
                heroVisual === 'model'
                  ? 'bg-white text-black font-bold shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Model View
            </button>
            <button
              onClick={() => setHeroVisual('dragon')}
              className={`px-3 py-0.5 rounded-full uppercase tracking-wider transition-colors cursor-pointer ${
                heroVisual === 'dragon'
                  ? 'bg-white text-black font-bold shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Dragon Art
            </button>
          </div>
        </div>

        {/* Powerful Tattoo Mantra Headline */}
        <h1 className="hero-title font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white mb-6 text-balance max-w-5xl leading-[1.08] drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
          WE DO NOT JUST INK SKIN. WE ETCH YOUR SOUL'S UNTOLD STORIES.
        </h1>

        {/* Emotion-Catching Narrative Subtitle */}
        <p className="hero-desc text-sm sm:text-base md:text-lg text-gray-100 font-light max-w-3xl mx-auto mb-10 leading-relaxed text-balance drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)] bg-black/45 backdrop-blur-xs p-3.5 rounded-sm border border-white/10">
          Pain is fleeting, but what you have survived deserves to be immortalized.
          Every needle stroke is a whispered truth, every shadow an eternal tribute—mastercrafted in fine-line botanicals, architectural blackwork, and micro-realism inside a hospital-grade sterile sanctuary.
        </p>

        {/* Action Buttons */}
        <div className="hero-cta flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-black bg-white hover:bg-gray-200 transition-all duration-200 rounded-sm shadow-2xl flex items-center justify-center gap-2 group cursor-pointer active:scale-95"
          >
            <span>Book Consultation</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollToTarget('#flash-vault')}
            className="w-full sm:w-auto px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-200 hover:text-white border border-white/30 hover:border-white/70 bg-black/80 backdrop-blur-md transition-all duration-200 rounded-sm flex items-center justify-center gap-2 cursor-pointer shadow-xl"
          >
            <span>Explore 1-of-1 Flash</span>
          </button>
        </div>

        {/* Unboxed Proof Metrics */}
        <div
          ref={statsRef}
          className="w-full pt-8 border-t border-white/20 flex flex-wrap items-center justify-center gap-y-3 gap-x-6 sm:gap-x-10 text-xs sm:text-sm text-gray-200 font-medium will-change-transform bg-black/60 backdrop-blur-md p-4 rounded-sm border border-white/10 shadow-2xl"
        >
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-gray-200" />
            <span className="text-white font-semibold">14 International Awards</span>
          </div>
          <span className="text-gray-600 hidden sm:inline">·</span>

          <div className="flex items-center gap-2">
            <span className="text-white font-semibold">04 Resident Masters</span>
            <span className="text-gray-400 text-xs">(By Appt Only)</span>
          </div>
          <span className="text-gray-600 hidden sm:inline">·</span>

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-white font-semibold">Class 10,000 Cleanroom Protocol</span>
          </div>
          <span className="text-gray-600 hidden sm:inline">·</span>

          <div>
            <span className="text-gray-300">100% Organic Carbon Vegan Inks</span>
          </div>
        </div>
      </div>

      {/* Down Navigation Indicator */}
      <button
        onClick={() => scrollToTarget('#artworks')}
        aria-label="Scroll to portfolio"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-400 hover:text-white transition-colors flex flex-col items-center gap-1 group cursor-pointer z-20"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono opacity-0 group-hover:opacity-100 transition-opacity">
          Explore Works
        </span>
        <ArrowDown className="w-4 h-4 animate-bounce text-gray-300" />
      </button>
    </section>
  );
}
