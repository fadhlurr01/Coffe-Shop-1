import React, { useState } from 'react';
import { BRAND_STORY } from '../data/coffeeData';
import { Sparkles, Coffee } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('beans');

  const tabContents = {
    beans: {
      title: "Ethically Sourced Highland Beans",
      text: "We source exclusively from sustainable highland coffee farmers in Gayo and Toraja at 1600 meters above sea level. Each bean is hand-selected and carefully stored to preserve pure natural terpenes."
    },
    process: {
      title: "Artisanal Slow Roasting & Extraction",
      text: "Our coffee roaster monitors every roast profile in small batches, locking in natural sweetness, vibrant aromatics, and rich body without harsh bitterness."
    },
    values: {
      title: "Warm Minimalist Sanctuary",
      text: "Designed as a modern retreat with balanced acoustics, warm ambient lighting, and natural wood aesthetics. A space to slow down, work, converse, and sip with intention."
    }
  };

  return (
    <section id="about" className="py-24 relative bg-[#F4F0E8] text-[#1F1813] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP TITLE */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-flat-sm text-[#5E3E29] text-[10px] font-mono tracking-widest uppercase font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR STORY</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#1F1813]">
            {BRAND_STORY.title}
          </h2>
          <p className="font-mono text-xs text-[#A67844] tracking-widest uppercase font-bold">
            {BRAND_STORY.subtitle}
          </p>
        </div>

        {/* SIDE BY SIDE SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT PHOTO */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden neu-flat p-4">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden img-reveal">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80"
                  alt="PureBrew.co Barista & Roastery"
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#FAF7F2] border border-[#E2D9C8] text-[#1F1813] shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#5E3E29] text-white flex items-center justify-center shadow-md">
                      <Coffee className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-heading text-base font-bold text-[#1F1813]">OUR BARISTA & ROASTERY</h4>
                      <p className="text-xs text-[#5C4E43] font-medium">Crafting every cup with dedication and precision</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT STORY NARRATIVE */}
          <div className="lg:col-span-6 space-y-8">
            
            <div className="space-y-4">
              {BRAND_STORY.paragraphs.map((p, i) => (
                <p key={i} className="text-[#3B312A] text-base leading-relaxed font-normal">
                  {p}
                </p>
              ))}
            </div>

            {/* INTERACTIVE TABS */}
            <div className="space-y-4 pt-4 border-t border-[#E2D9C8]">
              <div className="flex gap-2.5 pb-2">
                {[
                  { id: 'beans', label: 'THE BEANS' },
                  { id: 'process', label: 'THE PROCESS' },
                  { id: 'values', label: 'THE VALUES' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-xl font-mono text-xs tracking-wider transition-all ${
                      activeTab === tab.id
                        ? 'bg-[#5E3E29] text-white font-bold shadow-md'
                        : 'neu-button text-[#3B312A] hover:text-[#1F1813]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* TAB CONTENT */}
              <div className="p-6 rounded-2xl neu-flat-solid transition-all duration-300">
                <h4 className="font-heading text-lg font-bold text-[#1F1813] mb-2">
                  {tabContents[activeTab].title}
                </h4>
                <p className="text-sm text-[#3B312A] font-normal leading-relaxed">
                  {tabContents[activeTab].text}
                </p>
              </div>
            </div>

            {/* METRICS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {BRAND_STORY.stats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-2xl neu-flat-solid text-center">
                  <span className="font-mono text-xs text-[#5E3E29] font-bold block">{stat.value}</span>
                  <span className="text-[10px] text-[#5C4E43] font-mono uppercase tracking-wider font-bold">{stat.label}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
