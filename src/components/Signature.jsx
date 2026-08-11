import React, { useState } from 'react';
import { Star, ChevronRight } from 'lucide-react';
import { SIGNATURE_ITEM } from '../data/coffeeData';

export default function Signature() {
  const [activeLayer, setActiveLayer] = useState(0);

  return (
    <section id="signature" className="py-24 relative bg-[#F4F0E8] border-t border-[#E2D9C8] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-flat-sm text-[#5E3E29] text-[10px] font-mono tracking-widest uppercase font-bold">
              <Star className="w-3.5 h-3.5 fill-[#5E3E29] text-[#5E3E29]" />
              <span>THE SIGNATURE CREATION</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl font-bold text-[#1F1813] mt-3">
              THE <span className="text-gradient-japandi">SIGNATURE</span>
            </h2>
          </div>
          <p className="text-[#3B312A] text-sm max-w-md font-normal">
            Designed for those who appreciate distinction. A masterclass in espresso extraction, layered textures, and subtle sea salt contrast.
          </p>
        </div>

        {/* SHOWCASE NEUMORPHIC CARD */}
        <div className="p-6 sm:p-10 rounded-3xl neu-flat-solid relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* LEFT IMAGE */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] sm:aspect-square rounded-2xl overflow-hidden img-reveal group shadow-xl border border-[#E2D9C8]">
                <img
                  src={SIGNATURE_ITEM.image}
                  alt={SIGNATURE_ITEM.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute top-4 left-4 z-20 px-4 py-2 rounded-full bg-[#FAF7F2] border border-[#E2D9C8] text-xs font-mono font-bold text-[#5E3E29] shadow-md">
                  SIGNATURE • {SIGNATURE_ITEM.price}
                </div>
              </div>
            </div>

            {/* RIGHT DETAILS */}
            <div className="lg:col-span-6 space-y-8">
              
              <div>
                <span className="font-mono text-xs text-[#A67844] tracking-widest uppercase block mb-1 font-bold">
                  {SIGNATURE_ITEM.subtitle}
                </span>
                <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#1F1813]">
                  {SIGNATURE_ITEM.name}
                </h3>
                <p className="text-[#3B312A] text-base font-normal mt-4 leading-relaxed">
                  {SIGNATURE_ITEM.description}
                </p>
              </div>

              {/* FLAVOR PROFILE TAGS */}
              <div>
                <span className="font-mono text-[10px] text-[#5C4E43] uppercase tracking-wider block mb-2 font-bold">FLAVOR PROFILE</span>
                <div className="flex flex-wrap gap-2">
                  {SIGNATURE_ITEM.stats.notes.map((note, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 rounded-full neu-flat-sm text-[#5E3E29] text-xs font-mono font-bold"
                    >
                      ✦ {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* CRAFT LAYER BREAKDOWN */}
              <div className="space-y-3 pt-4 border-t border-[#E2D9C8]">
                <span className="font-mono text-[10px] text-[#5C4E43] uppercase tracking-wider block font-bold">CRAFT LAYER BREAKDOWN</span>
                <div className="grid grid-cols-1 gap-2.5">
                  {SIGNATURE_ITEM.layers.map((layer, index) => {
                    const isSelected = activeLayer === index;
                    return (
                      <button
                        key={index}
                        onClick={() => setActiveLayer(index)}
                        className={`w-full p-4 rounded-2xl text-left transition-all flex items-center justify-between ${
                          isSelected
                            ? 'neu-inset text-[#1F1813]'
                            : 'neu-button text-[#3B312A] hover:text-[#1F1813]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs font-bold ${
                            isSelected ? 'bg-[#5E3E29] text-white shadow-sm' : 'bg-[#EBE5DA] text-[#5E3E29]'
                          }`}>
                            {index + 1}
                          </span>
                          <div>
                            <p className="text-xs font-mono font-bold uppercase text-[#5E3E29]">{layer.title}</p>
                            <p className="text-sm font-normal text-[#1F1813]">{layer.text}</p>
                          </div>
                        </div>
                        <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#5E3E29] translate-x-1' : 'text-[#5C4E43]/40'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#menu"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full neu-button text-[#5E3E29] font-mono text-xs font-bold uppercase tracking-wider hover:text-[#1F1813]"
                >
                  <span>VIEW FULL MENU</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
