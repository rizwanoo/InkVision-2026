import React from 'react';
import { Instagram, Calendar, ChevronRight, CheckCircle2 } from 'lucide-react';
import { ARTISTS } from '../data/mockData';

interface ArtistsProps {
  onSelectArtist: (artistName: string) => void;
}

export default function Artists({ onSelectArtist }: ArtistsProps) {
  return (
    <section id="artists" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
            RESIDENT MASTER ARTISANS
          </h2>
        </div>
        <p className="text-sm text-gray-400 max-w-md font-light leading-relaxed">
          Each artist brings over a decade of disciplined mastery in dedicated stylistic disciplines. We maintain strict ethical spacing to prevent artist fatigue.
        </p>
      </div>

      {/* Artists Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {ARTISTS.map((artist) => (
          <div
            key={artist.id}
            className="bg-[#111111] border border-white/10 rounded-sm p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8 hover:border-white/25 transition-all duration-300"
          >
            {/* Portrait Image */}
            <div className="w-full sm:w-2/5 aspect-[3/4] overflow-hidden rounded-sm bg-black relative shrink-0">
              <img
                src={artist.avatar}
                alt={artist.name}
                className="w-full h-full object-cover grayscale contrast-115 hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-sm px-2.5 py-1 text-[10px] uppercase font-mono text-gray-300 border border-white/10 flex items-center justify-between">
                <span>{artist.experience}</span>
              </div>
            </div>

            {/* Artist Details */}
            <div className="w-full sm:w-3/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-display text-2xl font-bold text-white">{artist.name}</h3>
                  <a
                    href={`https://instagram.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white transition-colors"
                    aria-label={`${artist.name} Instagram`}
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>

                <div className="text-xs text-gray-400 font-medium mb-3 font-mono">
                  {artist.role}
                </div>

                <p className="text-xs text-gray-300 leading-relaxed font-light mb-4">
                  {artist.bio}
                </p>

                {/* Specialties */}
                <div className="text-xs text-gray-400 border-t border-white/5 pt-3 mb-4 space-y-1">
                  <div className="text-[11px] uppercase tracking-wider text-gray-500">Core Signature:</div>
                  <div className="text-gray-300 font-medium">{artist.specialty}</div>
                </div>
              </div>

              {/* Booking Availability & Action */}
              <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-emerald-400 flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                    {artist.bookingStatus}
                  </span>
                  <span className="text-gray-400 font-mono">${artist.hourlyRate}/hr</span>
                </div>

                <button
                  onClick={() => onSelectArtist(artist.name)}
                  className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 transition-all duration-200 flex items-center justify-center gap-1.5 rounded-sm"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Request Booking with {artist.name.split(' ')[0]}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
