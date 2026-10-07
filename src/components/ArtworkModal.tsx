import React from 'react';
import { X, Clock, AlertCircle, Sparkles, Calendar, ChevronRight } from 'lucide-react';
import { Artwork } from '../types';

interface ArtworkModalProps {
  artwork: Artwork | null;
  onClose: () => void;
  onBookStyle: (styleName: string, artistName: string) => void;
}

export default function ArtworkModal({ artwork, onClose, onBookStyle }: ArtworkModalProps) {
  if (!artwork) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-xl animate-fadeIn">
      <div 
        className="relative w-full max-w-5xl bg-[#111111] border border-white/15 rounded-sm overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/60 text-gray-300 hover:text-white rounded-full border border-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: High-Resolution Artwork */}
        <div className="w-full lg:w-3/5 bg-black flex items-center justify-center relative overflow-hidden group min-h-[350px] lg:min-h-[550px]">
          <img
            src={artwork.image}
            alt={artwork.title}
            className="w-full h-full object-contain max-h-[650px] p-4 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 text-[11px] font-mono text-gray-400 bg-black/80 px-3 py-1 border border-white/10 rounded-sm">
            High-Res Macro View · 100% Uncompressed
          </div>
        </div>

        {/* Right Side: Artwork Dossier & Specs */}
        <div className="w-full lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto border-t lg:border-t-0 lg:border-l border-white/10">
          <div>
            {/* Category / Artist unboxed metadata */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-400 font-mono mb-2">
              <span>{artwork.categoryLabel}</span>
              <span>/</span>
              <span className="text-gray-200">{artwork.artist}</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
              {artwork.title}
            </h2>

            <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
              {artwork.description}
            </p>

            {/* Spec Sheet Table */}
            <div className="space-y-3 py-4 border-y border-white/10 mb-6 text-xs">
              <div className="flex justify-between items-center text-gray-400">
                <span>Placement Recommendation:</span>
                <span className="text-white font-medium">{artwork.placement}</span>
              </div>
              <div className="flex justify-between items-center text-gray-400">
                <span>Estimated Duration:</span>
                <span className="text-white font-mono">{artwork.estimatedHours}</span>
              </div>
              <div className="flex justify-between items-center text-gray-400">
                <span>Pain Index Indicator:</span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((lvl) => (
                    <div
                      key={lvl}
                      className={`w-2 h-2 rounded-full ${
                        lvl <= artwork.painLevel ? 'bg-amber-400' : 'bg-neutral-800'
                      }`}
                    />
                  ))}
                  <span className="ml-1 text-[11px] font-mono text-gray-400">({artwork.painLevel}/5)</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-gray-400">
                <span>Pigment Formula:</span>
                <span className="text-emerald-400 font-medium">100% Medical Vegan Carbon</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                onClose();
                onBookStyle(artwork.title, artwork.artist);
              }}
              className="w-full py-3.5 text-xs font-semibold uppercase tracking-[0.2em] bg-white text-black hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 rounded-sm"
            >
              <Calendar className="w-4 h-4 text-black" />
              <span>Inquire About This Style</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-gray-500 text-center">
              Custom adaptations crafted exclusively for your anatomical silhouette.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
