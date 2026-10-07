import React, { useState } from 'react';
import { Mail, MapPin, Phone, Instagram, ArrowRight, CheckCircle2 } from 'lucide-react';
import { scrollToTarget } from '../lib/lenis';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenAssetLibrary: () => void;
}

export default function Footer({ onOpenBooking, onOpenAssetLibrary }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-20 pb-12 px-6 md:px-12 text-gray-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
        {/* Brand statement (4 Cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="font-display text-2xl font-bold tracking-[0.25em] text-white">
            OBSIDIAN
          </div>
          <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed max-w-sm">
            A bespoke contemporary tattoo atelier located in SoHo, New York. Dedicated to permanent fine art, medical-grade hygiene, and architectural anatomical precision.
          </p>
          <div className="pt-2 text-xs font-mono text-gray-500">
            © 2026 Obsidian Atelier LLC. All rights reserved.
          </div>
        </div>

        {/* Location & Hours (3 Cols) */}
        <div className="lg:col-span-3 space-y-3 text-xs font-light">
          <div className="text-xs uppercase tracking-widest text-white font-mono font-semibold mb-2">
            The Atelier Location
          </div>
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
            <span>482 Broome Street, 3rd Floor<br />SoHo Arts District, New York, NY 10013</span>
          </div>
          <div className="flex items-center gap-2.5 pt-1">
            <Phone className="w-4 h-4 text-gray-400 shrink-0" />
            <span className="font-mono text-gray-300">+1 (212) 890-4421</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-gray-400 shrink-0" />
            <span className="text-gray-300 font-mono">concierge@obsidianatelier.com</span>
          </div>
          <div className="pt-2 text-[11px] text-gray-500 font-mono">
            Hours: Mon – Sat 11:00 to 20:00 (By Appointment Only)
          </div>
        </div>

        {/* Quick Nav (2 Cols) */}
        <div className="lg:col-span-2 space-y-2 text-xs font-medium">
          <div className="text-xs uppercase tracking-widest text-white font-mono font-semibold mb-3">
            Atelier Index
          </div>
          <div>
            <a
              href="#artworks"
              onClick={(e) => {
                e.preventDefault();
                scrollToTarget('#artworks', { offset: -40 });
              }}
              className="hover:text-white transition-colors block py-1 cursor-pointer"
            >
              Portfolio Works
            </a>
          </div>
          <div>
            <a
              href="#artists"
              onClick={(e) => {
                e.preventDefault();
                scrollToTarget('#artists', { offset: -40 });
              }}
              className="hover:text-white transition-colors block py-1 cursor-pointer"
            >
              Resident Masters
            </a>
          </div>
          <div>
            <a
              href="#standards"
              onClick={(e) => {
                e.preventDefault();
                scrollToTarget('#standards', { offset: -40 });
              }}
              className="hover:text-white transition-colors block py-1 cursor-pointer"
            >
              Sterile Protocol
            </a>
          </div>
          <div>
            <a
              href="#flash-vault"
              onClick={(e) => {
                e.preventDefault();
                scrollToTarget('#flash-vault', { offset: -40 });
              }}
              className="hover:text-white transition-colors block py-1 cursor-pointer"
            >
              Flash Vault
            </a>
          </div>
          <div>
            <a
              href="#testimonials"
              onClick={(e) => {
                e.preventDefault();
                scrollToTarget('#testimonials', { offset: -40 });
              }}
              className="hover:text-white transition-colors block py-1 cursor-pointer"
            >
              Client Stories
            </a>
          </div>
          <div>
            <a
              href="#booking"
              onClick={(e) => {
                e.preventDefault();
                scrollToTarget('#booking', { offset: -40 });
              }}
              className="hover:text-white transition-colors block py-1 text-white font-semibold cursor-pointer"
            >
              Book Consultation
            </a>
          </div>
          <div>
            <button onClick={onOpenAssetLibrary} className="hover:text-white transition-colors text-left py-1 text-gray-400 cursor-pointer">
              Technical 3D Assets
            </button>
          </div>
        </div>

        {/* Flash Drop VIP Newsletter (3 Cols) */}
        <div className="lg:col-span-3 space-y-3">
          <div className="text-xs uppercase tracking-widest text-white font-mono font-semibold">
            Flash Drop VIP Dispatches
          </div>
          <p className="text-xs text-gray-400 font-light leading-relaxed">
            Receive private notifications 1 hour before seasonal 1-of-1 flash collections drop to the public.
          </p>

          {subscribed ? (
            <div className="p-3 bg-white/5 border border-emerald-500/30 rounded-sm text-xs text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>You are on the VIP Flash reservation list.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-[#141414] border border-white/15 px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-white rounded-l-sm font-mono"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-black px-4 py-2 text-xs uppercase font-semibold hover:bg-gray-200 transition-colors rounded-r-sm shrink-0 cursor-pointer"
                >
                  Join
                </button>
              </div>
              <div className="text-[10px] text-gray-500 font-mono">
                No promotional spam. strictly private drop invites.
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
        <div>
          Designed for contemporary collectors worldwide. Class 10,000 Certified Cleanroom.
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Client Consent NDA</a>
          <a href="#" className="hover:text-white transition-colors">Aftercare Protocol</a>
        </div>
      </div>
    </footer>
  );
}
