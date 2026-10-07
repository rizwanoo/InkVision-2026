import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, ShieldCheck, Award, ChevronRight } from 'lucide-react';
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
  const floatingSnakeRef = useRef<HTMLDivElement>(null);
  const inkMistRef = useRef<HTMLDivElement>(null);

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

      // 1. Background image parallax & zoom
      if (bgImageRef.current) {
        heroTl.to(
          bgImageRef.current,
          {
            scale: 1.28,
            y: 160,
            opacity: 0.15,
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
            y: -220,
            rotation: -18,
            scale: 1.15,
            opacity: 0,
            ease: 'none',
          },
          0
        );
      }

      // 3. Floating Fine-Line Snake Parallax
      if (floatingSnakeRef.current) {
        heroTl.to(
          floatingSnakeRef.current,
          {
            y: -180,
            rotation: 22,
            scale: 0.85,
            opacity: 0,
            ease: 'none',
          },
          0
        );
      }

      // 4. Ink Mist Suspension Dispersion
      if (inkMistRef.current) {
        heroTl.to(
          inkMistRef.current,
          {
            y: -300,
            scale: 1.4,
            opacity: 0,
            ease: 'none',
          },
          0
        );
      }

      // 5. Main Content Scale Down and Fade
      if (contentRef.current) {
        heroTl.to(
          contentRef.current,
          {
            y: -110,
            scale: 0.92,
            opacity: 0,
            ease: 'none',
          },
          0
        );
      }

      // 6. Stats Bar Dissolve
      if (statsRef.current) {
        heroTl.to(
          statsRef.current,
          {
            y: 40,
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
          [floatingMachineRef.current, floatingSnakeRef.current],
          { opacity: 0, scale: 0.8 },
          { opacity: 0.7, scale: 1, duration: 1.2, stagger: 0.2 },
          '-=0.8'
        );
    }, heroContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroContainerRef}
      className="relative min-h-[105vh] flex items-center justify-center pt-28 pb-20 overflow-hidden"
    >
      {/* 1. Cinematic Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          ref={bgImageRef}
          src="/hero/hero-blackwork-dragon.jpg"
          alt="Obsidian Atelier Dragon Blackwork"
          className="w-full h-full object-cover object-center opacity-35 scale-105 filter contrast-125 will-change-transform"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* 2. Floating 3D Tattoo Objects */}
      <div
        ref={floatingMachineRef}
        className="hidden lg:block absolute top-[20%] right-[8%] z-10 w-[240px] pointer-events-none mix-blend-lighten will-change-transform"
      >
        <img
          src="/tattoo-machines/tattoo-machine-metallic.jpg"
          alt="Rotary Tattoo Machine 3D Object"
          className="w-full h-auto drop-shadow-[0_20px_50px_rgba(255,255,255,0.15)] filter brightness-110 contrast-125"
        />
      </div>

      <div
        ref={floatingSnakeRef}
        className="hidden lg:block absolute bottom-[22%] left-[7%] z-10 w-[200px] pointer-events-none mix-blend-screen opacity-70 will-change-transform"
      >
        <img
          src="/tattoo-artwork/floating-snake-tattoo.jpg"
          alt="Floating Serpent Flash"
          className="w-full h-auto drop-shadow-2xl"
        />
      </div>

      <div
        ref={inkMistRef}
        className="absolute inset-0 z-5 pointer-events-none mix-blend-screen opacity-25 overflow-hidden will-change-transform"
      >
        <img
          src="/ink-assets/ink-particle-cloud.jpg"
          alt="Ink Dispersion Mist"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 3. Hero Content Container */}
      <div
        ref={contentRef}
        className="relative z-20 max-w-6xl mx-auto px-6 md:px-12 text-center flex flex-col items-center will-change-transform"
      >
        {/* Emotional Quote Kicker */}
        <div className="hero-kicker flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-gray-400 mb-6 font-mono">
          <span>Your Flesh Is Temporary. Your Art Is Eternal.</span>
          <span className="text-gray-600">/</span>
          <span>SoHo, New York</span>
        </div>

        {/* Powerful Tattoo Mantra Headline */}
        <h1 className="hero-title font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 text-balance max-w-5xl leading-[1.05]">
          WE DO NOT JUST INK SKIN. WE ETCH YOUR SOUL'S UNTOLD STORIES.
        </h1>

        {/* Emotion-Catching Narrative Subtitle */}
        <p className="hero-desc text-base sm:text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto mb-10 leading-relaxed text-balance">
          Pain is fleeting, but what you have survived deserves to be immortalized.
          Every needle stroke is a whispered truth, every shadow an eternal tribute—mastercrafted in fine-line botanicals, architectural blackwork, and micro-realism inside a hospital-grade sterile sanctuary.
        </p>

        {/* Action Buttons */}
        <div className="hero-cta flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-black bg-white hover:bg-gray-200 transition-all duration-200 rounded-sm shadow-xl flex items-center justify-center gap-2 group cursor-pointer active:scale-95"
          >
            <span>Book Consultation</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollToTarget('#flash-vault')}
            className="w-full sm:w-auto px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-200 hover:text-white border border-white/20 hover:border-white/50 bg-black/40 backdrop-blur-sm transition-all duration-200 rounded-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore 1-of-1 Flash</span>
          </button>
        </div>

        {/* Unboxed Proof Metrics */}
        <div
          ref={statsRef}
          className="w-full pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-y-3 gap-x-6 sm:gap-x-10 text-xs sm:text-sm text-gray-400 font-medium will-change-transform"
        >
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-gray-300" />
            <span className="text-gray-200 font-semibold">14 International Awards</span>
          </div>
          <span className="text-gray-700 hidden sm:inline">·</span>

          <div className="flex items-center gap-2">
            <span className="text-gray-200 font-semibold">04 Resident Masters</span>
            <span className="text-gray-500 text-xs">(By Appt Only)</span>
          </div>
          <span className="text-gray-700 hidden sm:inline">·</span>

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-gray-200 font-semibold">Class 10,000 Cleanroom Protocol</span>
          </div>
          <span className="text-gray-700 hidden sm:inline">·</span>

          <div>
            <span className="text-gray-400">100% Organic Carbon Vegan Inks</span>
          </div>
        </div>
      </div>

      {/* Down Navigation Indicator */}
      <button
        onClick={() => scrollToTarget('#artworks')}
        aria-label="Scroll to portfolio"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-500 hover:text-white transition-colors flex flex-col items-center gap-1 group cursor-pointer z-20"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono opacity-0 group-hover:opacity-100 transition-opacity">
          Explore Works
        </span>
        <ArrowDown className="w-4 h-4 animate-bounce text-gray-400" />
      </button>
    </section>
  );
}
