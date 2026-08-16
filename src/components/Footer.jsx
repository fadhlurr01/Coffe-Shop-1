import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/">
              <BrandLogo variant="dark" size="normal" />
            </Link>

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
              <li><Link to="/" className="hover:text-[#FAF7F2] transition-colors">01. Home</Link></li>
              <li><Link to="/about" className="hover:text-[#FAF7F2] transition-colors">02. Philosophy</Link></li>
              <li><Link to="/signature" className="hover:text-[#FAF7F2] transition-colors">03. Signature</Link></li>
              <li><Link to="/menu" className="hover:text-[#FAF7F2] transition-colors">04. Menu Catalogue</Link></li>
              <li><Link to="/gallery" className="hover:text-[#FAF7F2] transition-colors">05. Visual Journal</Link></li>
              <li><Link to="/location" className="hover:text-[#FAF7F2] transition-colors">06. Location & Hours</Link></li>
              <li><Link to="/contact" className="hover:text-[#FAF7F2] transition-colors">07. Contact Us</Link></li>
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
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2.89-2.89c.28 0 .54.04.79.12V9.41a6.31 6.31 0 0 0-.79-.05 6.34 6.34 0 1 0 6.34 6.34V8.71a8.21 8.21 0 0 0 5.2 1.83V7.08a4.82 4.82 0 0 1-1.43-.39z" />
                </svg>
              </a>
              <a
                href={LOCATION_DATA.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#231C15] border border-[#3B2F25] text-[#8E9B82] hover:text-white hover:bg-[#8E9B82] transition-all"
                aria-label="WhatsApp"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.92 0-3.692-.516-5.215-1.419l-.373-.222-3.876 1.017 1.035-3.778-.244-.388a10.05 10.05 0 0 1-1.542-5.356c0-5.553 4.518-10.07 10.07-10.07 2.69 0 5.218 1.047 7.121 2.951a10.006 10.006 0 0 1 2.946 7.121c0 5.555-4.517 10.074-10.074 10.074m0-18.147a8.09 8.09 0 0 0-5.74 2.377 8.086 8.086 0 0 0-2.374 5.739c0 1.637.493 3.238 1.427 4.607l-1.517 5.54 5.672-1.487a8.058 8.058 0 0 0 4.532 1.362h.004c4.464 0 8.094-3.63 8.094-8.093s-3.63-8.093-8.098-8.093" />
                </svg>
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

