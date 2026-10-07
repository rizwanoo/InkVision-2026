import React, { useState, useEffect } from 'react';
import { Calendar, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { ARTISTS } from '../data/mockData';

interface BookingSectionProps {
  initialData?: {
    style?: string;
    artist?: string;
    placement?: string;
    estimatedQuote?: string;
    flashTitle?: string;
  };
}

export default function BookingSection({ initialData }: BookingSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    artist: 'Elena Vane',
    idea: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setFormData((prev) => ({
        ...prev,
        artist: initialData.artist || prev.artist,
        idea: initialData.flashTitle
          ? `Reserving Flash: ${initialData.flashTitle}`
          : initialData.style
          ? `${initialData.style}${initialData.placement ? ` on ${initialData.placement}` : ''}`
          : prev.idea,
      }));
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = 'OBS-' + Math.floor(100000 + Math.random() * 900000);
    setBookingId(id);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setBookingId('');
    setFormData({
      name: '',
      contact: '',
      artist: 'Elena Vane',
      idea: '',
    });
  };

  return (
    <section id="booking" className="py-20 px-6 md:px-12 max-w-4xl mx-auto border-t border-white/10">
      <div className="bg-[#121212] border border-white/15 rounded-sm p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

        {isSubmitted ? (
          /* Fast Confirmation */
          <div className="text-center py-6 space-y-4 animate-fadeIn">
            <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle2 className="w-6 h-6 text-black" />
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-mono">
                Booking Request Sent
              </div>
              <div className="font-mono text-2xl font-bold text-white my-1.5">
                {bookingId}
              </div>
              <p className="text-xs text-gray-300 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.name || 'Collector'}</strong>.
                Our concierge will contact you with <strong className="text-white">{formData.artist}</strong>'s available appointment dates within 24 hours.
              </p>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors rounded-sm cursor-pointer shadow-md"
            >
              New Request
            </button>
          </div>
        ) : (
          /* Super Compact Fast Form */
          <div>
            <div className="text-center mb-8">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-mono">
                Quick Reservation
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                BOOK A SESSION
              </h2>
              <p className="text-xs text-gray-400 mt-1.5 max-w-md mx-auto font-light">
                Direct inquiry with our resident master artists. No long questionnaires.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-300 font-mono mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Julian Hayes"
                    className="w-full bg-[#181818] border border-white/15 rounded-sm px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                    required
                  />
                </div>

                {/* Contact */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-300 font-mono mb-1.5">
                    Email or Phone
                  </label>
                  <input
                    type="text"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="email@domain.com / +1 (555) 000-0000"
                    className="w-full bg-[#181818] border border-white/15 rounded-sm px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Artist Select */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-300 font-mono mb-1.5">
                    Select Artist
                  </label>
                  <select
                    value={formData.artist}
                    onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
                    className="w-full bg-[#181818] border border-white/15 rounded-sm px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white transition-colors"
                  >
                    {ARTISTS.map((artist) => (
                      <option key={artist.id} value={artist.name}>
                        {artist.name} ({artist.role.split(' ')[0]})
                      </option>
                    ))}
                    <option value="Any Available Master">Any Available Master Artist</option>
                  </select>
                </div>

                {/* Tattoo Idea / Placement */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-300 font-mono mb-1.5">
                    Tattoo Idea & Placement
                  </label>
                  <input
                    type="text"
                    value={formData.idea}
                    onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
                    placeholder="e.g. Fine-line snake on forearm, ~4 inches"
                    className="w-full bg-[#181818] border border-white/15 rounded-sm px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-bold uppercase tracking-[0.2em] bg-white text-black hover:bg-gray-200 transition-all duration-200 rounded-sm shadow-xl flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Calendar className="w-3.5 h-3.5 text-black" />
                  <span>Request Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Minimal Trust Badge */}
              <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-gray-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Class 10,000 Sterile Cleanroom · Concierge responds within 24 hours</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
