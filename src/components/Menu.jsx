import React, { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/coffeeData';
import { Eye, Coffee, ChevronRight } from 'lucide-react';

export default function Menu({ onSelectItem }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 relative bg-[#F4F0E8] border-t border-[#E2D9C8] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-flat-sm text-[#5E3E29] text-[10px] font-mono tracking-widest uppercase font-bold">
            <Coffee className="w-3.5 h-3.5 text-[#5E3E29]" />
            <span>SPECIALTY CATALOGUE</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#1F1813]">
            OUR <span className="text-gradient-japandi">MENU</span>
          </h2>

          <p className="text-[#3B312A] text-sm font-normal">
            A curated catalogue of artisanal coffee, specialty cold brews, botanical teas, and fresh pastries.
          </p>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-mono text-xs tracking-wider transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-[#5E3E29] text-white font-bold shadow-md scale-105'
                  : 'neu-button text-[#3B312A] hover:text-[#1F1813]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* CATALOG GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectItem(item)}
              className="p-4 rounded-3xl neu-flat-solid group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* IMAGE HOVER */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden img-reveal border border-[#E2D9C8]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute top-3 right-3 z-20 px-3 py-1 rounded-xl bg-[#FAF7F2] border border-[#E2D9C8] font-mono font-bold text-xs text-[#5E3E29] shadow-md">
                  {item.price}
                </div>

                {/* HOVER TRIGGER */}
                <div className="absolute inset-0 z-20 bg-[#1F1813]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5E3E29] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-3.5 h-3.5" /> VIEW DETAIL
                  </span>
                </div>
              </div>

              {/* DETAILS */}
              <div className="pt-4 px-2 flex-grow flex flex-col justify-between space-y-3">
                <div>
                  <span className="font-mono text-[10px] text-[#A67844] uppercase tracking-widest block font-bold">
                    {item.category}
                  </span>

                  <h3 className="font-heading text-lg font-bold text-[#1F1813] group-hover:text-[#5E3E29] transition-colors mt-1">
                    {item.name}
                  </h3>

                  <p className="text-[#3B312A] text-xs font-normal line-clamp-2 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E2D9C8] flex items-center justify-between text-[11px] font-mono font-bold text-[#5E3E29]">
                  <span>VIEW DETAILS</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
