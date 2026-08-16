import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SIGNATURE_ITEM, MENU_ITEMS } from '../data/coffeeData';
import { Sparkles, Flame, Droplets, Thermometer, Layers, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function SignaturePage() {
  const [activeLayer, setActiveLayer] = useState(0);

  const signatureDrinks = MENU_ITEMS.filter((i) => i.category === 'signatures');

  return (
    <div className="space-y-16 pb-20">
      
      {/* PAGE HERO HEADER */}
      <section className="relative py-20 bg-[#1F1813] text-[#FAF7F2] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#28201A] border border-[#A67844]/40 text-[#A67844] text-xs font-mono font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE SIGNATURE COLLECTION</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-[#FAF7F2]">
            Crafted Slowly. Served Masterfully.
          </h1>
          <p className="text-xs sm:text-sm text-[#A89A8B] max-w-xl mx-auto font-light">
            Our signature creations represent months of flavor balancing — combining nitrogen-infused sea salt cream with organic brown sugar glaze and double espresso.
          </p>
        </div>
      </section>

      {/* FEATURED SIGNATURE: BROWN SUGAR SEA SALT LATTE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F8F5F0] border border-[#E2D9C8] shadow-xl space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* HERO IMAGE & LAYER HIGHLIGHT */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E2D9C8] h-96">
                <img
                  src={SIGNATURE_ITEM.image}
                  alt={SIGNATURE_ITEM.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1813]/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#1F1813]/90 backdrop-blur-md border border-[#3B2F25] text-white">
                  <span className="font-mono text-[10px] text-[#A67844] uppercase tracking-widest block font-bold">ACTIVE LAYER SPEC</span>
                  <h4 className="font-heading text-lg font-bold">{SIGNATURE_ITEM.layers[activeLayer].title}</h4>
                  <p className="text-xs text-[#A89A8B]">{SIGNATURE_ITEM.layers[activeLayer].text}</p>
                </div>
              </div>
            </div>

            {/* SPECS & INTERACTIVE LAYER SELECTOR */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE4D8] border border-[#DCD3C3] text-[#5E3E29] text-[10px] font-mono font-bold uppercase">
                <Layers className="w-3.5 h-3.5" />
                <span>3-LAYER RECIPE EXPLORER</span>
              </div>

              <div className="space-y-1">
                <h2 className="font-heading text-3xl font-bold text-[#1F1813]">{SIGNATURE_ITEM.name}</h2>
                <p className="text-xs font-mono text-[#8C6234]">{SIGNATURE_ITEM.subtitle} • {SIGNATURE_ITEM.price}</p>
              </div>

              <p className="text-xs text-[#5C4E43] leading-relaxed font-light">
                {SIGNATURE_ITEM.description}
              </p>

              {/* LAYER BUTTONS */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono text-[#8C7B6C] uppercase font-bold block">Click to inspect layer:</span>
                {SIGNATURE_ITEM.layers.map((layer, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveLayer(idx)}
                    className={`w-full p-3.5 rounded-2xl text-left border transition-all flex items-center justify-between ${
                      activeLayer === idx
                        ? 'bg-[#5E3E29] text-white border-[#5E3E29] shadow-md'
                        : 'bg-[#F4F0E8] text-[#5C4E43] border-[#E2D9C8] hover:bg-[#EBE5DA]'
                    }`}
                  >
                    <div>
                      <span className="font-mono text-[10px] block opacity-70">LAYER 0{idx + 1}</span>
                      <span className="font-heading text-sm font-bold">{layer.title}</span>
                    </div>
                    <CheckCircle2 className={`w-4 h-4 ${activeLayer === idx ? 'text-[#C19A6B]' : 'text-transparent'}`} />
                  </button>
                ))}
              </div>

              {/* BREW STATS BADGES */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#F4F0E8] border border-[#E2D9C8] text-xs font-mono text-[#5E3E29]">
                  <span className="text-[#8C7B6C] block text-[10px]">ORIGIN</span>
                  <span className="font-bold">{SIGNATURE_ITEM.stats.origin}</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F4F0E8] border border-[#E2D9C8] text-xs font-mono text-[#5E3E29]">
                  <span className="text-[#8C7B6C] block text-[10px]">TEMP</span>
                  <span className="font-bold">{SIGNATURE_ITEM.stats.temp}</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ALL SIGNATURE DRINKS LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-[#8C6234] font-bold uppercase tracking-widest">SEASONAL SPECIALS</span>
          <h2 className="font-heading text-3xl font-bold text-[#1F1813]">Explore All Signature Drinks</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {signatureDrinks.map((drink) => (
            <div key={drink.id} className="p-6 rounded-3xl bg-[#F8F5F0] border border-[#E2D9C8] shadow-md flex flex-col sm:flex-row gap-6 items-center">
              <img
                src={drink.image}
                alt={drink.name}
                className="w-full sm:w-40 h-40 rounded-2xl object-cover border border-[#E2D9C8] shrink-0"
              />
              <div className="space-y-3 text-left w-full">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-xl font-bold text-[#1F1813]">{drink.name}</h3>
                  <span className="font-mono text-sm font-bold text-[#5E3E29]">{drink.price}</span>
                </div>
                <p className="text-xs text-[#5C4E43] leading-relaxed">{drink.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {drink.details?.flavorNotes?.map((note, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-full bg-[#EAE4D8] text-[10px] font-mono text-[#5E3E29]">
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA TO FULL CATALOGUE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 rounded-3xl bg-[#EAE4D8] border border-[#DCD3C3] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="font-heading text-xl font-bold text-[#1F1813]">Want to see our Classic Coffees & Teas?</h4>
            <p className="text-xs text-[#5C4E43]">Discover Espressos, Lattes, Matcha, and fresh croissants in our catalogue.</p>
          </div>
          <Link
            to="/menu"
            className="px-6 py-3 rounded-full bg-[#5E3E29] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-md hover:bg-[#1F1813] transition-all flex items-center gap-2"
          >
            <span>FULL MENU</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
