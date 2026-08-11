import React from 'react';
import { X } from 'lucide-react';

export default function MenuModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1F1813]/70 backdrop-blur-sm animate-fade-in">
      
      <div className="relative w-full max-w-2xl bg-[#FAF7F2] border border-[#E2D9C8] shadow-2xl rounded-3xl overflow-hidden text-[#1F1813] max-h-[90vh] overflow-y-auto">
        
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-[#FAF7F2] border border-[#E2D9C8] text-[#5C4E43] hover:text-[#1F1813] hover:bg-[#EBE5DA] shadow-md transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* IMAGE BANNER */}
        <div className="relative aspect-[16/9] w-full overflow-hidden img-reveal border-b border-[#E2D9C8]">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#E2D9C8] text-xs font-mono font-bold text-[#5E3E29] shadow-md">
            {item.category.toUpperCase()} • {item.price}
          </div>
        </div>

        {/* BODY */}
        <div className="p-6 sm:p-8 space-y-6">
          
          <div>
            <span className="font-mono text-xs text-[#A67844] uppercase tracking-widest block mb-1 font-bold">
              ITEM SPECIFICATION
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#1F1813]">
              {item.name}
            </h3>
            <p className="text-[#3B312A] text-sm font-normal mt-2 leading-relaxed">
              {item.desc}
            </p>
          </div>

          {/* FLAVOR PROFILE */}
          {item.details?.flavorNotes && (
            <div>
              <span className="font-mono text-[10px] text-[#5C4E43] uppercase tracking-wider block mb-2 font-bold">FLAVOR PROFILE</span>
              <div className="flex flex-wrap gap-2">
                {item.details.flavorNotes.map((note, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-full neu-flat-sm text-xs font-mono text-[#5E3E29] font-bold"
                  >
                    ✦ {note}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* DETAILS GRID */}
          {item.details && (
            <div className="grid grid-cols-2 gap-4 p-5 rounded-2xl neu-inset font-mono text-xs">
              {item.details.origin && (
                <div>
                  <span className="text-[#5C4E43] text-[10px] block font-bold">ORIGIN</span>
                  <span className="text-[#1F1813] font-bold">{item.details.origin}</span>
                </div>
              )}
              {item.details.roast && (
                <div>
                  <span className="text-[#5C4E43] text-[10px] block font-bold">ROAST PROFILE</span>
                  <span className="text-[#1F1813] font-bold">{item.details.roast}</span>
                </div>
              )}
              {item.details.extractionTime && (
                <div>
                  <span className="text-[#5C4E43] text-[10px] block font-bold">METHOD / PROCESS</span>
                  <span className="text-[#5E3E29] font-bold">{item.details.extractionTime}</span>
                </div>
              )}
              {item.details.body && (
                <div>
                  <span className="text-[#5C4E43] text-[10px] block font-bold">TEXTURE / BODY</span>
                  <span className="text-[#1F1813] font-bold">{item.details.body}</span>
                </div>
              )}
            </div>
          )}

          {/* FOOTER */}
          <div className="pt-4 border-t border-[#E2D9C8] flex items-center justify-between">
            <span className="font-mono text-xl font-bold text-[#5E3E29]">
              {item.price}
            </span>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#5E3E29] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#4A301F]"
            >
              CLOSE SPEC
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
