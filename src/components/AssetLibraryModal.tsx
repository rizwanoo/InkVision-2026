import React, { useState } from 'react';
import { X, Download, Code, Layers, Sparkles, Check } from 'lucide-react';

interface AssetLibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AssetLibraryModal({ isOpen, onClose }: AssetLibraryModalProps) {
  const [copiedPath, setCopiedPath] = useState<string | null>(null);

  if (!isOpen) return null;

  const assets = [
    {
      path: '/hero/hero-blackwork-dragon.jpg',
      name: 'Hero Blackwork Dragon',
      category: '1. Hero Artwork',
      aspect: '16:9',
      desc: 'Wide cinematic dragon composition with negative-space web geometry and charcoal studio lighting.',
    },
    {
      path: '/tattoo-machines/tattoo-machine-metallic.jpg',
      name: 'Engraved Rotary Tattoo Machine',
      category: '3. Machine Hero Object',
      aspect: '1:1',
      desc: 'High-end metallic rotary machine with intricate filigree engraving and needle cartridge detail.',
    },
    {
      path: '/tattoo-artwork/floating-snake-tattoo.jpg',
      name: 'Floating Snake & Botanical Rose',
      category: '2. Floating 3D Flash',
      aspect: '3:4',
      desc: 'Isolated fine-line serpent with delicate rose petals, optimized for 3D parallax scroll layering.',
    },
    {
      path: '/flash-sheets/gothic-flash-sheet.jpg',
      name: 'Gothic Occult Flash Sheet',
      category: '6. Flash Sheets',
      aspect: '3:4',
      desc: 'Fine-line gothic skulls, roses, and daggers on charcoal background.',
    },
    {
      path: '/ink-assets/ink-particle-cloud.jpg',
      name: 'Ink Particle Cloud & Dispersion',
      category: '5. Ink Splash Assets',
      aspect: '16:9',
      desc: 'Suspended carbon black tattoo ink particle clouds for screen blend overlays.',
    },
    {
      path: '/gallery/macro-needle-precision.jpg',
      name: 'Macro Needle Precision & Texture',
      category: '8. Close-Up Details',
      aspect: '16:9',
      desc: 'Extreme macro photography of fine-line needle precision on living canvas.',
    },
    {
      path: '/studio/cinematic-workspace.jpg',
      name: 'Surgical Sterile Workspace',
      category: '7. Artist Workspace',
      aspect: '16:9',
      desc: 'Class 10,000 cleanroom aesthetic with stainless steel stations and dark minimalist mood.',
    },
    {
      path: '/artists/master-artist-elena.jpg',
      name: 'Master Artisan Elena Vane',
      category: 'Team & Editorial',
      aspect: '3:4',
      desc: 'Editorial portrait of lead fine-line artist in dark studio lighting.',
    },
  ];

  const handleCopy = (path: string) => {
    navigator.clipboard.writeText(path);
    setCopiedPath(path);
    setTimeout(() => setCopiedPath(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-xl animate-fadeIn">
      <div 
        className="relative w-full max-w-6xl bg-[#111111] border border-white/15 rounded-sm shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-black/60">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gray-400 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Studio Visual Asset Vault & Technical Guide</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-white mt-1">
              EDITORIAL TATTOO ASSETS & CSS LAYERING SPECS
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white rounded-full transition-colors"
            aria-label="Close asset library"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-10">
          {/* Layering & Performance Guide */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-black/70 border border-white/10 rounded-sm">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-white font-mono mb-2">
                <Layers className="w-4 h-4 text-emerald-400" />
                <span>Zero-Lag CSS Blending</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed mb-3">
                Use `mix-blend-lighten` or `mix-blend-screen` on dark backgrounds for natural seamless object isolation without heavy canvas computations.
              </p>
              <pre className="text-[10px] bg-neutral-900 p-2.5 rounded font-mono text-gray-300 overflow-x-auto">
{`.layer-floating {
  mix-blend-mode: lighten;
  will-change: transform;
  transform: translate3d(0,0,0);
}`}
              </pre>
            </div>

            <div className="p-5 bg-black/70 border border-white/10 rounded-sm">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-white font-mono mb-2">
                <Code className="w-4 h-4 text-amber-400" />
                <span>Hardware Accelerated Motion</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed mb-3">
                Only animate compositor properties (`transform`, `opacity`). Never animate layout geometry like `top` or `height` during scroll.
              </p>
              <pre className="text-[10px] bg-neutral-900 p-2.5 rounded font-mono text-gray-300 overflow-x-auto">
{`motion.div {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true }
}`}
              </pre>
            </div>

            <div className="p-5 bg-black/70 border border-white/10 rounded-sm">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-white font-mono mb-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>Scalable Asset Delivery</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed mb-3">
                Assets are standardized in 16:9, 3:4, and 1:1 aspect ratios, formatted for cross-browser high-DPI displays.
              </p>
              <pre className="text-[10px] bg-neutral-900 p-2.5 rounded font-mono text-gray-300 overflow-x-auto">
{`<img 
  src="/path.jpg"
  loading="lazy"
  decoding="async" 
/>`}
              </pre>
            </div>
          </div>

          {/* Visual Assets Grid */}
          <div>
            <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-300 mb-6 border-b border-white/10 pb-3">
              Generated Visual Assets ({assets.length} Files)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {assets.map((asset, idx) => (
                <div
                  key={idx}
                  className="bg-black/60 border border-white/10 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-white/30 transition-all"
                >
                  <div className="aspect-[4/3] bg-black overflow-hidden relative">
                    <img
                      src={asset.path}
                      alt={asset.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 text-[9px] uppercase font-mono px-2 py-0.5 bg-black/80 text-gray-300 border border-white/10 rounded-sm">
                      {asset.aspect}
                    </div>
                  </div>

                  <div className="p-4 flex flex-col justify-between flex-1">
                    <div>
                      <div className="text-[10px] uppercase font-mono text-gray-500 mb-1">
                        {asset.category}
                      </div>
                      <h4 className="text-xs font-semibold text-white mb-2">{asset.name}</h4>
                      <p className="text-[11px] text-gray-400 leading-relaxed font-light mb-4">
                        {asset.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/5 flex items-center justify-between gap-2">
                      <button
                        onClick={() => handleCopy(asset.path)}
                        className="flex-1 py-1.5 px-2 text-[10px] uppercase tracking-wider font-mono border border-white/20 hover:bg-white hover:text-black transition-colors rounded-sm flex items-center justify-center gap-1 text-gray-300"
                      >
                        {copiedPath === asset.path ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400 font-bold">Copied</span>
                          </>
                        ) : (
                          <span>Copy URL</span>
                        )}
                      </button>

                      <a
                        href={asset.path}
                        download
                        className="py-1.5 px-2.5 text-[10px] border border-white/10 hover:border-white/40 text-gray-400 hover:text-white rounded-sm transition-colors flex items-center justify-center"
                        title="Download file"
                      >
                        <Download className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
