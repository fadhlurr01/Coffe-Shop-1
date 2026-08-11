import React from 'react';
import { Leaf, Award, HeartHandshake } from 'lucide-react';

export default function ShortIntro() {
  const pillars = [
    {
      icon: Leaf,
      title: "Direct Trade Sourcing",
      desc: "We partner directly with highland coffee farmers in Gayo & Toraja. Fairly traded, shade-grown organic Arabica beans cultivated at 1600 meters elevation."
    },
    {
      icon: Award,
      title: "Artisanal Small Batch Roasting",
      desc: "Every batch is slowly micro-roasted in small quantities to preserve delicate jasmine floral notes, dark chocolate undertones, and natural sweetness."
    },
    {
      icon: HeartHandshake,
      title: "Warm Minimalist Sanctuary",
      desc: "Designed as an urban retreat with quiet acoustic balance, warm ambient lighting, and natural wood touches for meaningful connection."
    }
  ];

  return (
    <section id="intro" className="py-24 relative bg-[#F4F0E8] text-[#1F1813] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-flat-sm text-[#5E3E29] text-[10px] font-mono tracking-widest uppercase font-bold">
            <span>OUR PHILOSOPHY</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#1F1813] leading-tight">
            WHERE CRAFT MEETS <br />
            <span className="text-gradient-japandi">JAPANDI INTENTION</span>
          </h2>

          <p className="text-[#3B312A] text-base sm:text-lg font-normal leading-relaxed">
            In a fast-moving world, PureBrew.co reclaims coffee as a deliberate ritual. We merge traditional Japanese mindfulness with Scandinavian warmth.
          </p>
        </div>

        {/* PILLARS GRID */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl neu-flat-solid hover:scale-[1.02] transition-all duration-300 flex flex-col items-start space-y-4 relative group"
              >
                <div className="p-3.5 rounded-2xl neu-flat-sm text-[#5E3E29] group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6 text-[#5E3E29]" />
                </div>

                <h3 className="font-heading text-xl font-bold text-[#1F1813] group-hover:text-[#5E3E29] transition-colors">
                  {item.title}
                </h3>

                <p className="text-[#3B312A] text-sm leading-relaxed font-normal">
                  {item.desc}
                </p>

                <span className="absolute top-6 right-6 font-mono text-xs font-bold text-[#A67844] group-hover:text-[#5E3E29] transition-colors">
                  0{idx + 1}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
