import React from 'react';

export default function BrandLogo({ variant = 'light', size = 'normal', className = '' }) {
  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-3.5 group cursor-pointer select-none ${className}`}>
      {/* EMBLEM BADGE - Soft Rounded Neumorphic Box */}
      <div
        className={`relative flex items-center justify-center transition-all duration-300 transform group-hover:scale-105 ${
          size === 'sm' ? 'w-9 h-9 rounded-xl' : size === 'lg' ? 'w-12 h-12 rounded-2xl' : 'w-11 h-11 rounded-2xl'
        } ${
          isDark
            ? 'bg-[#231C15] border border-[#3B2F25] shadow-inner'
            : 'bg-[#F4F0E8] neu-flat-sm border border-[#ECE5D7]'
        }`}
      >
        {/* Minimalist Coffee Icon with 3 Steam Lines */}
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${size === 'sm' ? 'w-5 h-5' : size === 'lg' ? 'w-7 h-7' : 'w-6 h-6'} relative z-10`}
        >
          {/* 3 Steam Vertical Lines */}
          <line x1="16" y1="10" x2="16" y2="13" stroke={isDark ? '#C19A6B' : '#5E3E29'} strokeWidth="1.8" strokeLinecap="round" />
          <line x1="20" y1="9" x2="20" y2="13" stroke={isDark ? '#C19A6B' : '#5E3E29'} strokeWidth="1.8" strokeLinecap="round" />
          <line x1="24" y1="10" x2="24" y2="13" stroke={isDark ? '#C19A6B' : '#5E3E29'} strokeWidth="1.8" strokeLinecap="round" />

          {/* Coffee Cup Outline */}
          <path
            d="M12 16H28V21C28 24.3137 25.3137 27 22 27H18C14.6863 27 12 24.3137 12 21V16Z"
            stroke={isDark ? '#FAF7F2' : '#1F1813'}
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* Cup Handle */}
          <path
            d="M28 18H30.5C31.8807 18 33 19.1193 33 20.5C33 21.8807 31.8807 23 30.5 23H28"
            stroke={isDark ? '#FAF7F2' : '#1F1813'}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* BRAND NAME & TAGLINE */}
      <div className="flex flex-col text-left">
        <div className="flex items-baseline leading-none">
          <span
            className={`font-heading font-bold tracking-tight ${
              size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
            } ${
              isDark ? 'text-[#FAF7F2]' : 'text-[#1F1813]'
            }`}
          >
            PureBrew
          </span>
          <span
            className={`font-heading font-bold ${
              size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
            } ${
              isDark ? 'text-[#C19A6B]' : 'text-[#A67844]'
            }`}
          >
            .co
          </span>
        </div>

        <span
          className={`font-mono text-[9px] tracking-[0.2em] font-bold uppercase mt-1 ${
            isDark ? 'text-[#C19A6B]' : 'text-[#A67844]'
          }`}
        >
          JAPANDI CRAFT COFFEE
        </span>
      </div>
    </div>
  );
}

