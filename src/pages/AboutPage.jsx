import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_STORY } from '../data/coffeeData';
import { Compass, Sparkles, Award, HeartHandshake, Coffee, ArrowRight, ShieldCheck, Flame, Mountain } from 'lucide-react';

export default function AboutPage() {
  const craftSteps = [
    {
      step: '01',
      title: 'ETHICAL HIGHLAND SOURCING',
      desc: 'Sourced directly from single-origin volcanic highland farms in Gayo & Toraja at 1600m elevation. We pay premium prices to support sustainable farming communities.',
      icon: Mountain
    },
    {
      step: '02',
      title: 'SMALL-BATCH MICRO ROASTING',
      desc: 'Precision micro-roasted in small batches to highlight intrinsic floral aromas, caramelized sweetness, and clean acidity without bitter over-roasting.',
      icon: Flame
    },
    {
      step: '03',
      title: 'PRECISION EXTRACTION',
      desc: 'Extracted at 9 bar pressure with calibrated 93°C filtered water, measured to exact extraction ratios for perfect body and velvet crema.',
      icon: Coffee
    },
    {
      step: '04',
      title: 'WARM INTENTIONAL HOSPITALITY',
      desc: 'Served in a warm minimalist space designed for slow mornings, quiet deep work, and meaningful face-to-face conversations.',
      icon: HeartHandshake
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      
      {/* PAGE HERO HEADER */}
      <section className="relative py-20 bg-[#1F1813] text-[#FAF7F2] overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#A67844_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#28201A] border border-[#A67844]/40 text-[#A67844] text-xs font-mono font-bold tracking-widest uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>OUR PHILOSOPHY & STORY</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-[#FAF7F2] max-w-3xl mx-auto">
            More Than Just Coffee. Coffee Made With Intention.
          </h1>
          <p className="text-sm sm:text-base text-[#A89A8B] max-w-2xl mx-auto leading-relaxed font-light">
            PureBrew.co was created to bridge Japanese mindfulness with Scandinavian warmth — crafting a cozy sanctuary where specialty coffee becomes a daily ritual.
          </p>
        </div>
      </section>

      {/* BRAND STORY & STATS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* IMAGE GRID */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
              alt="Barista brewing coffee"
              className="rounded-2xl object-cover h-72 sm:h-96 w-full shadow-lg border border-[#E2D9C8]"
            />
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
              alt="Cafe interior ambiance"
              className="rounded-2xl object-cover h-72 sm:h-96 w-full shadow-lg border border-[#E2D9C8] mt-8"
            />
          </div>

          {/* TEXT & VALUES */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE4D8] border border-[#DCD3C3] text-[#5E3E29] text-[11px] font-mono font-bold tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>THE CRAFT STANDARD</span>
            </div>
            
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1F1813]">
              {BRAND_STORY.title}
            </h2>

            {BRAND_STORY.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[#5C4E43] leading-relaxed font-normal">
                {p}
              </p>
            ))}

            {/* STATS CARDS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {BRAND_STORY.stats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#F8F5F0] border border-[#E2D9C8] text-center space-y-1">
                  <span className="font-heading text-xl font-bold text-[#5E3E29] block">{stat.value}</span>
                  <span className="text-[10px] font-mono text-[#8C7B6C] uppercase block">{stat.label}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 4-STEP CRAFT JOURNEY */}
      <section className="bg-[#EAE4D8] py-20 border-y border-[#DCD3C3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold text-[#8C6234] uppercase tracking-widest block">FROM SEED TO CUP</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1F1813]">Our 4-Stage Craft Process</h2>
            <p className="text-xs sm:text-sm text-[#5C4E43]">Every cup served at PureBrew goes through strict quality controls and artisanal care.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {craftSteps.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="p-6 rounded-3xl bg-[#F4F0E8] border border-[#DCD3C3] shadow-md hover:shadow-xl transition-all space-y-4 relative group">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-bold text-[#8C6234] opacity-50">{item.step}</span>
                    <div className="p-3 rounded-2xl bg-[#5E3E29] text-white group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#1F1813]">{item.title}</h3>
                  <p className="text-xs text-[#5C4E43] leading-relaxed font-light">{item.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA BANNER TO MENU */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 rounded-3xl bg-[#1F1813] text-[#FAF7F2] border border-[#3B2F25] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2 text-[#A67844] font-mono text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>EXPERIENCE THE QUALITY</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold">Ready to taste single-origin perfection?</h3>
            <p className="text-xs text-[#A89A8B]">Explore our full menu catalogue or visit our Bandung Coffee Lab today.</p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Link
              to="/menu"
              className="px-6 py-3.5 rounded-full bg-[#A67844] hover:bg-[#8C6234] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg hover:scale-105 transition-all flex items-center gap-2"
            >
              <span>EXPLORE MENU</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/location"
              className="px-6 py-3.5 rounded-full bg-[#28201A] border border-[#3B2F25] hover:border-[#A67844] text-[#FAF7F2] font-mono text-xs font-bold uppercase tracking-wider transition-all"
            >
              <span>VISIT US</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
