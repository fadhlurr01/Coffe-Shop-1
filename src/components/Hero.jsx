import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Compass, Coffee } from 'lucide-react';
import { SIGNATURE_ITEM } from '../data/coffeeData';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#F4F0E8]">
      
      {/* ORGANIC SOFT WARM AMBIENT LIGHTING */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#A67844]/15 via-[#485942]/10 to-transparent rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT HERO CONTENT */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* TAGLINE BADGE */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full neu-flat-sm text-[#5E3E29] text-[11px] sm:text-xs font-mono tracking-widest uppercase font-bold">
              <span>☕ JAPANDI ARTISANAL COFFEE</span>
            </div>

            {/* HEADLINE MATCHING IMAGE 1 */}
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-[#1F1813] leading-[1.1] sm:leading-[1.08]">
              COFFEE, CRAFTED <br />
              SLOWLY <span className="text-[#A67844] font-serif italic font-normal">&</span> <br />
              SERENELY.
            </h1>

            {/* SUBTITLE */}
            <p className="text-sm sm:text-xl text-[#3B312A] max-w-xl font-normal leading-relaxed">
              A calm space to slow down, sip & connect. Hand-selected highland Arabica beans, masterfully roasted and brewed with Japanese-Scandinavian intention in Bandung.
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full sm:w-auto">
              <Link
                to="/menu"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#8C6234] hover:bg-[#5E3E29] text-white font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all text-center shadow-lg"
              >
                EXPLORE OUR MENU
              </Link>
              <Link
                to="/location"
                className="w-full sm:w-auto px-8 py-4 rounded-full neu-button text-[#1F1813] font-bold text-xs uppercase tracking-widest hover:text-[#5E3E29] flex items-center justify-center gap-2"
              >
                <Compass className="w-4 h-4 text-[#5E3E29]" />
                VISIT OUR HOUSE
              </Link>
            </div>

            {/* BRAND VALUE METRICS */}
            <div className="pt-6 grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-lg border-t border-[#E2D9C8]">
              <div className="p-3 sm:p-4 rounded-2xl neu-flat-solid text-center sm:text-left">
                <span className="font-mono text-[9px] sm:text-[10px] text-[#5C4E43] uppercase block font-bold truncate">BEAN ORIGIN</span>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#1F1813] truncate block">100% Arabica</span>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl neu-flat-solid text-center sm:text-left">
                <span className="font-mono text-[9px] sm:text-[10px] text-[#5C4E43] uppercase block font-bold truncate">ELEVATION</span>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#1F1813] truncate block">1600m Highland</span>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl neu-flat-solid text-center sm:text-left">
                <span className="font-mono text-[9px] sm:text-[10px] text-[#5C4E43] uppercase block font-bold truncate">ROAST</span>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#8C6234] truncate block">Artisan Batch</span>
              </div>
            </div>

          </div>

          {/* RIGHT CINEMATIC HERO IMAGE */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl neu-flat p-4 group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden img-reveal">
                <img
                  src={SIGNATURE_ITEM.image}
                  alt="PureBrew.co Signature Coffee"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute top-4 left-4 z-20 px-4 py-2 rounded-full bg-[#FAF7F2] border border-[#E2D9C8] text-[10px] font-mono text-[#5E3E29] font-bold tracking-widest uppercase shadow-md">
                  SPECIALTY SELECTION
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E2D9C8] text-[#1F1813] shadow-xl">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] font-mono text-[#A67844] uppercase tracking-wider font-bold">THE SIGNATURE</p>
                      <h4 className="font-heading text-lg sm:text-xl font-bold text-[#1F1813] leading-snug">{SIGNATURE_ITEM.name}</h4>
                    </div>
                    <span className="font-mono font-bold text-white text-xs bg-[#5E3E29] px-3.5 py-1.5 rounded-xl shadow-sm">
                      {SIGNATURE_ITEM.price}
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* SCROLL DOWN INDICATOR */}
        <div className="mt-16 flex justify-center">
          <a
            href="#intro"
            className="flex flex-col items-center gap-2 text-[#5C4E43] hover:text-[#5E3E29] transition-colors group"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase font-bold">DISCOVER RITUAL</span>
            <div className="p-2.5 rounded-full neu-button group-hover:scale-110">
              <ArrowDown className="w-4 h-4 animate-bounce text-[#5E3E29]" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}

