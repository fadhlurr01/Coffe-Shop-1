import React from 'react';
import { GALLERY_ITEMS } from '../data/coffeeData';
import { Maximize2, Camera } from 'lucide-react';

export default function Gallery({ onSelectImage }) {
  return (
    <section id="gallery" className="py-24 relative bg-[#F4F0E8] text-[#1F1813] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-flat-sm text-[#5E3E29] text-[10px] font-mono tracking-widest uppercase font-bold">
            <Camera className="w-3.5 h-3.5" />
            <span>VISUAL JOURNAL</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#1F1813]">
            JAPANDI <span className="text-gradient-japandi">GALLERY</span>
          </h2>

          <p className="text-[#3B312A] text-sm font-normal">
            An editorial glimpse into our calm shop ambiance, barista craft, and coffee details.
          </p>
        </div>

        {/* EDITORIAL MASONRY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[260px]">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onSelectImage(index)}
              className={`relative rounded-3xl overflow-hidden neu-flat p-3 group cursor-pointer ${item.span}`}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden img-reveal border border-[#E2D9C8]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#E2D9C8] text-[10px] font-mono text-[#5E3E29] font-bold uppercase tracking-widest shadow-md">
                  {item.category}
                </div>

                <div className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#FAF7F2] border border-[#E2D9C8] text-[#5E3E29] shadow-md opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all">
                  <Maximize2 className="w-4 h-4 text-[#5E3E29]" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E2D9C8] text-[#1F1813] shadow-xl">
                  <h3 className="font-heading text-lg font-bold text-[#1F1813] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5C4E43] font-medium mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
