import React from 'react';
import { Download, Code, Layers } from 'lucide-react';

const ASSETS = [
  { path: '/hero/hero-blackwork-dragon.jpg', category: 'Hero', name: 'Blackwork Dragon' },
  { path: '/tattoo-machines/tattoo-machine-metallic.jpg', category: 'Objects', name: 'Metallic Machine' },
  { path: '/ink-assets/ink-particle-cloud.jpg', category: 'Overlays', name: 'Ink Particles' },
  { path: '/tattoo-artwork/floating-snake-tattoo.jpg', category: 'Artwork', name: 'Floating Snake' },
  { path: '/flash-sheets/gothic-flash-sheet.jpg', category: 'Flash Sheets', name: 'Gothic Collection' },
  { path: '/gallery/macro-needle-precision.jpg', category: 'Gallery', name: 'Macro Detail' },
  { path: '/studio/cinematic-workspace.jpg', category: 'Studio', name: 'Cinematic Workspace' },
];

export default function AssetLibrary() {
  return (
    <div className="min-h-screen bg-[#121212] pt-32 px-8 md:px-24 pb-24">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16">
          <h1 className="font-display text-5xl mb-4">ASSET LIBRARY & DOCUMENTATION</h1>
          <p className="text-gray-400 max-w-2xl leading-relaxed text-lg">
            A comprehensive guide on asset implementation, scalable integration, and CSS-based layering for the Obsidian Tattoo Studio digital experience.
          </p>
        </header>

        {/* Documentation Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <DocCard 
            icon={<Layers className="w-8 h-8 mb-4 text-white" />}
            title="CSS-Based Layering"
            description="Use mix-blend-mode properties to seamlessly integrate assets on dark backgrounds. 'mix-blend-lighten' or 'mix-blend-screen' works perfectly for isolating black-background artwork."
            code={`.asset-overlay {
  mix-blend-mode: lighten;
  opacity: 0.8;
  transform-style: preserve-3d;
}`}
          />
          <DocCard 
            icon={<Code className="w-8 h-8 mb-4 text-white" />}
            title="Cinematic Motion"
            description="Leverage Framer Motion for scroll-linked animations. Parallax scaling, rotation, and opacity shifts create the illusion of true 3D spatial depth."
            code={`const y = useTransform(
  scrollYProgress, 
  [0, 1], 
  [0, -500]
);`}
          />
          <DocCard 
            icon={<Download className="w-8 h-8 mb-4 text-white" />}
            title="Scalable Vector Library"
            description="For cross-browser performance, use responsive image wrappers and modern formats (WebP). Maintain varying opacity levels (30%, 60%, 100%) for depth enhancement."
            code={`<img 
  src="/path.webp" 
  className="w-full h-auto"
  loading="lazy" 
/>`}
          />
        </section>

        {/* Asset Grid */}
        <section>
          <h2 className="text-2xl font-bold tracking-widest uppercase mb-8 border-b border-white/10 pb-4">
            Generated Visual Assets
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ASSETS.map((asset, i) => (
              <div key={i} className="group relative bg-[#0a0a0a] rounded-sm overflow-hidden border border-white/5">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={asset.path} 
                    alt={asset.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs uppercase tracking-widest text-gray-500">{asset.category}</span>
                  <h3 className="text-lg mt-2 font-medium">{asset.name}</h3>
                  <div className="mt-4 flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="text-xs border border-white/30 px-3 py-1 hover:bg-white hover:text-black transition-colors">
                      Copy Path
                    </button>
                    <button className="text-xs border border-white/30 px-3 py-1 hover:bg-white hover:text-black transition-colors">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function DocCard({ icon, title, description, code }: any) {
  return (
    <div className="bg-[#0a0a0a] p-8 border border-white/10 rounded-sm hover:border-white/30 transition-colors">
      {icon}
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-6">{description}</p>
      <pre className="bg-[#1a1a1a] p-4 rounded text-xs text-gray-300 overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}
