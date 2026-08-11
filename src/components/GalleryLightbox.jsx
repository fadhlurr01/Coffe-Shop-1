import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/coffeeData';

export default function GalleryLightbox({ currentIndex, onClose, onPrev, onNext }) {
  if (currentIndex === null || currentIndex === undefined) return null;

  const currentItem = GALLERY_ITEMS[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#1F1813]/80 backdrop-blur-sm animate-fade-in">
      
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-3.5 rounded-full bg-[#FAF7F2] border border-[#E2D9C8] text-[#5C4E43] hover:text-[#1F1813] shadow-lg"
      >
        <X className="w-6 h-6" />
      </button>

      <button
        onClick={onPrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-[#FAF7F2] border border-[#E2D9C8] text-[#5E3E29] hover:text-[#1F1813] shadow-lg"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-[#FAF7F2] border border-[#E2D9C8] text-[#5E3E29] hover:text-[#1F1813] shadow-lg"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center">
        <div className="relative max-h-[70vh] rounded-3xl bg-[#FAF7F2] p-3 shadow-2xl border border-[#E2D9C8]">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-full h-full object-contain max-h-[65vh] rounded-2xl"
          />
        </div>

        <div className="mt-6 flex flex-col items-center text-center space-y-2 max-w-lg bg-[#FAF7F2] border border-[#E2D9C8] p-5 rounded-2xl shadow-xl">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-[#EBE5DA] text-[10px] font-mono text-[#5E3E29] uppercase tracking-widest font-bold">
              {currentItem.category}
            </span>
            <span className="font-mono text-xs text-[#5C4E43] font-bold">
              0{currentIndex + 1} / 0{GALLERY_ITEMS.length}
            </span>
          </div>

          <h3 className="font-heading text-2xl font-bold text-[#1F1813]">
            {currentItem.title}
          </h3>

          <p className="text-xs text-[#3B312A] font-normal">
            {currentItem.subtitle}
          </p>
        </div>

      </div>

    </div>
  );
}


