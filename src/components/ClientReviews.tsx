import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export default function ClientReviews() {
  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gray-400 font-mono mb-3">
            <span>Verified Healed Proof</span>
            <span className="text-gray-600">/</span>
            <span>Client Experiences</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
            THE HEALED REPERTOIRE
          </h2>
        </div>
        <p className="text-sm text-gray-400 max-w-md font-light leading-relaxed">
          Tattoos should be judged by how they heal over years, not how they look 5 minutes off the needle. Read unedited reviews from our global collectors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="bg-[#121212] border border-white/10 rounded-sm p-6 sm:p-8 flex flex-col justify-between hover:border-white/25 transition-all duration-300"
          >
            <div>
              {/* Unboxed Metadata (Anti-slop rule) */}
              <div className="flex items-center justify-between text-xs text-gray-400 font-mono mb-4 pb-3 border-b border-white/5">
                <span className="text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {t.healedTime}
                </span>
                <span>{t.style}</span>
              </div>

              <Quote className="w-6 h-6 text-white/20 mb-3" />
              
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-white">{t.clientName}</div>
                <div className="text-[11px] text-gray-500">{t.city}</div>
              </div>
              <div className="text-right">
                <div className="text-[11px] text-gray-500 font-mono">Tattooed By:</div>
                <div className="text-xs font-medium text-gray-300">{t.artist}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
