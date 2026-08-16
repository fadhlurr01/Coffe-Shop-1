import React from 'react';

export default function BrandLogo({ variant = 'light', size = 'normal', className = '' }) {
  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-3.5 group cursor-pointer select-none ${className}`}>
      {/* ARTISANAL EMBLEM BADGE - Minimalist Japandi Soft Squircle */}
      <div
        className={`relative flex items-center justify-center transition-all duration-300 transform group-hover:scale-105 ${
          size === 'sm' ? 'w-9 h-9 rounded-xl' : size === 'lg' ? 'w-12 h-12 rounded-2xl' : 'w-11 h-11 rounded-2xl'
        } ${
          isDark
            ? 'bg-gradient-to-br from-[#231C15] via-[#1A140E] to-[#120D08] border border-[#3B2F25] shadow-[0_4px_16px_rgba(0,0,0,0.4)]'
            : 'bg-gradient-to-br from-[#FAF7F2] via-[#F4F0E8] to-[#EAE3D2] border border-[#E4DBCB] shadow-[4px_6px_16px_rgba(184,170,150,0.35)]'
        }`}
      >
        {/* Subtle Ambient Glow Accent */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#A67844]/15 via-transparent to-[#485942]/10 opacity-70 group-hover:opacity-100 transition-opacity"></div>

        {/* ULTRA-MINIMALIST JAPANDI SVG EMBLEM MARK */}
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${size === 'sm' ? 'w-5 h-5' : size === 'lg' ? 'w-7 h-7' : 'w-6 h-6'} relative z-10`}
        >
          {/* Zen Aesthetic Circle Ring */}
          <circle
            cx="20"
            cy="20"
            r="16"
            stroke={isDark ? '#C19A6B' : '#A67844'}
            strokeWidth="1.2"
            strokeDasharray="68 20"
            className="opacity-60 group-hover:rotate-90 transition-transform duration-700 ease-out"
          />

          {/* Minimalist Coffee Cup Geometry */}
          <path
            d="M13 16C13 14.8954 13.8954 14 15 14H25C26.1046 14 27 14.8954 27 16V20.5C27 24.0899 24.0899 27 20.5 27H19.5C15.9101 27 13 24.0899 13 20.5V16Z"
            stroke={isDark ? '#FAF7F2' : '#1F1813'}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Sleek Curved Cup Handle */}
          <path
            d="M27 17.5H28.5C29.8807 17.5 31 18.6193 31 20C31 21.3807 29.8807 22.5 28.5 22.5H27"
            stroke={isDark ? '#C19A6B' : '#A67844'}
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Elegant Minimalist Steam Arcs */}
          <path
            d="M17 11C17 11 17.8 9.8 17.8 8.8"
            stroke={isDark ? '#C19A6B' : '#5E3E29'}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M20 10.5C20 10.5 20.8 9.3 20.8 8.3"
            stroke={isDark ? '#E5C9A5' : '#A67844'}
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M23 11C23 11 23.8 9.8 23.8 8.8"
            stroke={isDark ? '#C19A6B' : '#5E3E29'}
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Coffee Bean Inner Seal Dot */}
          <circle cx="20" cy="20.5" r="1.5" fill={isDark ? '#C19A6B' : '#A67844'} />
        </svg>

        {/* Small Golden Accent Dot */}
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#A67844] border border-[#F4F0E8] shadow-sm"></span>
      </div>

      {/* BRAND NAME & LUXURY TYPOGRAPHY */}
      <div className="flex flex-col text-left">
        <div className="flex items-baseline leading-none">
          <span
            className={`font-heading font-bold tracking-tight ${
              size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
            } ${
              isDark ? 'text-[#FAF7F2] group-hover:text-[#C19A6B]' : 'text-[#1F1813] group-hover:text-[#5E3E29]'
            } transition-colors duration-200`}
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

        <div className="flex items-center gap-1.5 mt-1">
          <span
            className={`font-mono text-[9px] tracking-[0.22em] font-bold uppercase ${
              isDark ? 'text-[#C19A6B]' : 'text-[#A67844]'
            }`}
          >
            JAPANDI CRAFT COFFEE
          </span>
          <span className={`text-[8px] ${isDark ? 'text-[#8C7B6C]' : 'text-[#A67844]'}`}>✦</span>
        </div>
      </div>
    </div>
  );
}


