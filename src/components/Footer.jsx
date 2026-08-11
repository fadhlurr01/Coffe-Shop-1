import React, { useState } from 'react';
import { Instagram, MessageSquare, Sparkles, MapPin, ArrowUp, Send, CheckCircle2, Heart } from 'lucide-react';
import { LOCATION_DATA } from '../data/coffeeData';
import BrandLogo from './BrandLogo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#18130E] text-[#FAF7F2] relative overflow-hidden pt-20 pb-12 border-t border-[#3B2F25]">
      
      {/* AMBIENT WARM LIGHTING BLUR */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-[#A67844]/10 via-[#5E3E29]/5 to-transparent rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP NEWSLETTER RITUAL BANNER MATCHING IMAGE 3 */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#231C15] border border-[#3B2F25] mb-20 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-3 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2E251C] border border-[#4A3B2E] text-[#C19A6B] text-[10px] font-mono font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>JOIN THE PUREBREW RITUAL</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-4xl font-bold text-[#FAF7F2]">
                Curated Roast Notes & Seasonal Releases
              </h3>
              <p className="text-xs sm:text-sm text-[#B8AA9A] font-light max-w-lg leading-relaxed">
                Receive quiet stories of coffee origin, Japanese-Scandinavian brew guides, and exclusive small-batch roasts in your inbox.
              </p>
            </div>

            <div className="lg:col-span-6">
              {subscribed ? (
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#2E251C] border border-[#C19A6B]/50 text-[#C19A6B] font-mono text-xs font-bold animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 text-[#C19A6B]" />
                  <span>Welcome to the ritual! Check your inbox soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="flex-grow px-5 py-3.5 rounded-2xl bg-[#18130E] border border-[#4A3B2E] text-sm text-[#FAF7F2] placeholder-[#8C7B6C] focus:outline-none focus:border-[#C19A6B] font-sans"
                  />
                  <button
                    type="submit"
                    className="px-7 py-3.5 rounded-2xl bg-[#8C6234] hover:bg-[#A67844] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>SUBSCRIBE</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* 4-COLUMN MAIN FOOTER CONTENT MATCHING IMAGE 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#3B2F25]">
          
          {/* COL 1: BRAND VISION */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <a href="#home">
              <BrandLogo variant="dark" size="normal" />
            </a>

            <p className="text-xs text-[#B8AA9A] leading-relaxed font-light">
              Merging Japanese mindfulness with Scandinavian warmth. Specialty Arabica beans ethically sourced from highland farmers and micro-roasted slowly with care in Bandung.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-3 py-1 rounded-full bg-[#231C15] border border-[#3B2F25] text-[10px] font-mono text-[#C19A6B]">+ 100% ARABICA</span>
              <span className="px-3 py-1 rounded-full bg-[#231C15] border border-[#3B2F25] text-[10px] font-mono text-[#C19A6B]">+ DIRECT TRADE</span>
              <span className="px-3 py-1 rounded-full bg-[#231C15] border border-[#3B2F25] text-[10px] font-mono text-[#C19A6B]">+ SMALL BATCH</span>
            </div>
          </div>

          {/* COL 2: QUICK NAVIGATION */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="font-mono text-xs text-[#C19A6B] uppercase tracking-widest font-bold">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-[#B8AA9A]">
              <li><a href="#home" className="hover:text-[#FAF7F2] transition-colors">01. Home</a></li>
              <li><a href="#about" className="hover:text-[#FAF7F2] transition-colors">02. Philosophy</a></li>
              <li><a href="#signature" className="hover:text-[#FAF7F2] transition-colors">03. Signature</a></li>
              <li><a href="#menu" className="hover:text-[#FAF7F2] transition-colors">04. Menu Catalogue</a></li>
              <li><a href="#gallery" className="hover:text-[#FAF7F2] transition-colors">05. Visual Journal</a></li>
              <li><a href="#location" className="hover:text-[#FAF7F2] transition-colors">06. Location & Hours</a></li>
              <li><a href="#contact" className="hover:text-[#FAF7F2] transition-colors">07. Contact Us</a></li>
            </ul>
          </div>

          {/* COL 3: HOUSE HOURS & SPECS */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="font-mono text-xs text-[#C19A6B] uppercase tracking-widest font-bold">
              HOUSE HOURS & SPECS
            </h4>

            <div className="space-y-2 text-xs font-mono">
              <div className="p-3 rounded-xl bg-[#231C15] border border-[#3B2F25] flex justify-between">
                <span className="text-[#8C7B6C]">Mon – Fri</span>
                <span className="text-[#FAF7F2] font-bold">08:00 — 22:00</span>
              </div>
              <div className="p-3 rounded-xl bg-[#231C15] border border-[#3B2F25] flex justify-between">
                <span className="text-[#8C7B6C]">Sat – Sun</span>
                <span className="text-[#FAF7F2] font-bold">07:00 — 23:00</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8E9B82] animate-pulse"></span>
              <span className="font-mono text-[11px] text-[#8E9B82] font-bold uppercase">OPEN TODAY • BANDUNG HQ</span>
            </div>
          </div>

          {/* COL 4: CONNECT & TRANSMISSION */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="font-mono text-xs text-[#C19A6B] uppercase tracking-widest font-bold">
              CONNECT WITH US
            </h4>

            <div className="space-y-2.5 text-xs text-[#B8AA9A]">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C19A6B]" />
                <span>{LOCATION_DATA.address}</span>
              </p>
              <p className="flex items-center gap-2 font-mono">
                <span className="text-[#C19A6B]">Email:</span> {LOCATION_DATA.contact.email}
              </p>
              <p className="flex items-center gap-2 font-mono">
                <span className="text-[#C19A6B]">WhatsApp:</span> {LOCATION_DATA.contact.phone}
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={LOCATION_DATA.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#231C15] border border-[#3B2F25] text-[#C19A6B] hover:text-white hover:bg-[#C19A6B] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={LOCATION_DATA.contact.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#231C15] border border-[#3B2F25] text-[#C19A6B] hover:text-white hover:bg-[#C19A6B] transition-all"
                aria-label="TikTok"
              >
                <Sparkles className="w-4 h-4" />
              </a>
              <a
                href={LOCATION_DATA.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#231C15] border border-[#3B2F25] text-[#8E9B82] hover:text-white hover:bg-[#8E9B82] transition-all"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR & COPYRIGHT MATCHING IMAGE 3 */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#8C7B6C]">
          
          <div className="flex items-center gap-1.5">
            <span>© 2026 PureBrew.co. Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#C19A6B] fill-[#C19A6B]" />
            <span>in Bandung.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-[#FAF7F2] transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#FAF7F2] transition-colors cursor-pointer">Terms of Ritual</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#231C15] border border-[#3B2F25] text-[#C19A6B] hover:text-white hover:border-[#C19A6B] transition-all"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}

