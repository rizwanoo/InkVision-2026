import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Clock, Sparkles } from 'lucide-react';
import { ARTWORKS } from '../data/mockData';
import { Artwork } from '../types';
import ArtworkModal from './ArtworkModal';

interface PortfolioProps {
  onBookStyle: (styleName: string, artistName: string) => void;
}

export default function Portfolio({ onBookStyle }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const categories = [
    { id: 'all', label: 'All Portfolio Works' },
    { id: 'fineline', label: 'Fine-Line & Botanical' },
    { id: 'blackwork', label: 'Dark Blackwork & Geometry' },
    { id: 'realism', label: 'Micro-Realism' },
    { id: 'irezumi', label: 'Contemporary Irezumi' },
  ];

  const filteredArtworks =
    activeCategory === 'all'
      ? ARTWORKS
      : ARTWORKS.filter((art) => art.category === activeCategory);

  return (
    <section id="artworks" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gray-400 font-mono mb-3">
            <span>Archive & Curations</span>
            <span className="text-gray-600">/</span>
            <span>2026 Collection</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
            SELECTED ATELIER WORKS
          </h2>
        </div>
        <p className="text-sm text-gray-400 max-w-md font-light leading-relaxed">
          Every piece is designed custom for the individual body architecture.
          Explore our permanent portfolio across our core stylistic disciplines.
        </p>
      </div>

      {/* Interactive Filter Tabs (Functional Button Controls) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-all duration-200 rounded-sm whitespace-nowrap ${
              activeCategory === cat.id
                ? 'bg-white text-black shadow-sm font-semibold'
                : 'text-gray-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/5'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredArtworks.map((art) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              key={art.id}
              onClick={() => setSelectedArtwork(art)}
              className="group cursor-pointer bg-[#121212] border border-white/10 rounded-sm overflow-hidden hover:border-white/30 transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] bg-black overflow-hidden">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
                
                {/* Overlay hover badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white">
                    <Maximize2 className="w-3.5 h-3.5 text-white" />
                    <span>Inspect High-Res & Specs</span>
                  </div>
                </div>
              </div>

              {/* Card Metadata (Clean unboxed layout without pill sandwich) */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-400 font-mono mb-2">
                    <span className="text-gray-300">{art.categoryLabel}</span>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>{art.estimatedHours.split(' ')[0]} hrs</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white group-hover:text-gray-200 transition-colors mb-2">
                    {art.title}
                  </h3>

                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed font-light">
                    {art.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-gray-500">Master Artist:</span>
                  <span className="text-gray-300 font-medium">{art.artist}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      {selectedArtwork && (
        <ArtworkModal
          artwork={selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
          onBookStyle={onBookStyle}
        />
      )}
    </section>
  );
}
