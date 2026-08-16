import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/coffeeData';
import GalleryLightbox from '../components/GalleryLightbox';
import { Camera, Maximize2, Sparkles } from 'lucide-react';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const categories = ['ALL', 'SHOP', 'COFFEE', 'BARISTA', 'DETAIL', 'INTERIOR'];

  const filteredItems = activeCategory === 'ALL'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-12 pb-20">
      
      {/* PAGE HERO HEADER */}
      <section className="relative py-16 bg-[#1F1813] text-[#FAF7F2] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#28201A] border border-[#A67844]/40 text-[#A67844] text-xs font-mono font-bold tracking-widest uppercase">
            <Camera className="w-3.5 h-3.5" />
            <span>EDITORIAL VISUAL JOURNAL</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-[#FAF7F2]">
            Atmosphere & Moments
          </h1>
          <p className="text-xs sm:text-sm text-[#A89A8B] max-w-xl mx-auto font-light">
            A visual documentation of our space, brewing rituals, handcrafting process, and quiet moments.
          </p>
        </div>
      </section>

      {/* FILTER BUTTONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 overflow-x-auto p-2 rounded-2xl bg-[#F8F5F0] border border-[#E2D9C8] shadow-sm">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-xl font-mono text-xs font-bold uppercase transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#5E3E29] text-white shadow-md'
                    : 'text-[#5C4E43] hover:text-[#1F1813] hover:bg-[#EBE5DA]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* MASONRY / GRID GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(idx)}
              className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-lg border border-[#E2D9C8] bg-[#E2D9C8]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1813]/90 via-[#1F1813]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
              
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#1F1813]/80 backdrop-blur-md text-[#A67844] font-mono text-[10px] font-bold uppercase border border-[#3B2F25]">
                {item.category}
              </div>

              <div className="absolute bottom-6 left-6 right-6 space-y-1 text-left">
                <h3 className="font-heading text-xl font-bold text-white group-hover:text-[#A67844] transition-colors flex items-center justify-between">
                  <span>{item.title}</span>
                  <Maximize2 className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs text-[#A89A8B] font-light">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedImageIndex !== null && (
        <GalleryLightbox
          currentIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
          onPrev={() =>
            setSelectedImageIndex((prev) =>
              prev === 0 ? filteredItems.length - 1 : prev - 1
            )
          }
          onNext={() =>
            setSelectedImageIndex((prev) =>
              prev === filteredItems.length - 1 ? 0 : prev + 1
            )
          }
        />
      )}

    </div>
  );
}
