import React from 'react';
import { Shield, Sparkles, Droplets, Cpu, UserCheck, HeartHandshake } from 'lucide-react';

export default function StudioStandards() {
  const standards = [
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: 'Class 10,000 Cleanroom Protocols',
      description:
        'Every workstation undergoes hospital-grade disinfectant sterilization cycles before and after every appointment. We exceed standard health board mandates.',
    },
    {
      icon: <Cpu className="w-6 h-6 text-white" />,
      title: 'Precision Rotary & Single-Use Needles',
      description:
        'Custom engraved precision machinery calibrated to 0.15mm depth consistency, utilizing individually blister-packed surgical steel cartridges.',
    },
    {
      icon: <Droplets className="w-6 h-6 text-white" />,
      title: '100% Vegan Carbon Pigments',
      description:
        'Heavy-metal free, cruelty-free, organic black formulations engineered for deep saturation that never turns green or blue over decades of healing.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-white" />,
      title: 'Private VIP Acoustic Booths',
      description:
        'No open chaotic floor plans. Enjoy private, sound-dampened suites with custom ergonomic massage beds and personalized ambient climate control.',
    },
  ];

  return (
    <section id="standards" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
        <div className="lg:col-span-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gray-400 font-mono mb-3">
            <span>Hygiene & Engineering</span>
            <span className="text-gray-600">/</span>
            <span>Clinical Integrity</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            WHERE SURGICAL ASEPSIS MEETS HIGH CONTEMPORARY ART.
          </h2>
          <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
            Tattooing is a medical procedure disguised as artistic expression. We treat skin integrity with the rigorous asepsis of an operating suite, pairing custom engineered rotary machines with clean, bio-compatible formulations.
          </p>
          <div className="flex items-center gap-6 text-xs font-mono text-gray-400">
            <div>
              <span className="text-white font-bold block text-lg">0%</span>
              Cross-Contamination Risk
            </div>
            <div className="h-8 w-[1px] bg-white/10" />
            <div>
              <span className="text-white font-bold block text-lg">100%</span>
              Single-Use Consumables
            </div>
            <div className="h-8 w-[1px] bg-white/10" />
            <div>
              <span className="text-white font-bold block text-lg">14-Day</span>
              Medical Aftercare Included
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="aspect-[16/10] bg-[#111111] rounded-sm overflow-hidden border border-white/15 relative">
            <img
              src="/studio/cinematic-workspace.jpg"
              alt="Obsidian Atelier Sterile Workspace"
              className="w-full h-full object-cover grayscale contrast-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs font-mono text-gray-300">
              <span>Station 01 · Elena Vane Suite</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Sterilized & Ready
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Standards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {standards.map((item, idx) => (
          <div
            key={idx}
            className="p-6 bg-[#121212] border border-white/10 rounded-sm hover:border-white/25 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="p-2.5 bg-black w-fit rounded-sm border border-white/10 mb-5">
                {item.icon}
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
