import React from 'react';
import { LOCATION_DATA } from '../data/coffeeData';
import { MapPin, Clock, Navigation, Wifi, Zap, Users, Coffee, Shield, CheckCircle2 } from 'lucide-react';

export default function LocationPage() {
  const amenities = [
    { title: 'High-Speed Wi-Fi', desc: 'Dedicated 200Mbps fiber optics for remote work & browsing.', icon: Wifi },
    { title: 'Power Outlets', desc: 'Available at every single seating table & bar stool.', icon: Zap },
    { title: 'Quiet Work Zones', desc: 'Calm noise-controlled atmosphere with ambient lofi acoustics.', icon: Shield },
    { title: 'Outdoor Seating', desc: 'Shaded garden seating for fresh outdoor coffee breaks.', icon: Users },
    { title: 'Specialty Espresso Bar', desc: 'Watch baristas pull manual espresso & pour-over brews.', icon: Coffee }
  ];

  return (
    <div className="space-y-16 pb-20">
      
      {/* PAGE HERO HEADER */}
      <section className="relative py-20 bg-[#1F1813] text-[#FAF7F2] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#28201A] border border-[#A67844]/40 text-[#A67844] text-xs font-mono font-bold tracking-widest uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>VISIT OUR COFFEE LAB</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-[#FAF7F2]">
            Location & Lab Hours
          </h1>
          <p className="text-xs sm:text-sm text-[#A89A8B] max-w-xl mx-auto font-light">
            Located in the calm neighbourhood of Antapani Kulon, Bandung. Designed for slow mornings, afternoon focus, and evening unwind.
          </p>
        </div>
      </section>

      {/* LOCATION & HOURS MAIN CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: DETAILS & HOURS */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-[#F8F5F0] border border-[#E2D9C8] shadow-xl space-y-8 text-left">
            
            {/* LIVE STATUS */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#8E9B82] animate-pulse"></span>
                <span className="font-mono text-xs font-bold text-[#8E9B82] uppercase">{LOCATION_DATA.status}</span>
              </div>
              <span className="font-mono text-xs text-[#8C7B6C]">Bandung, West Java</span>
            </div>

            {/* ADDRESS */}
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#8C6234] uppercase tracking-widest font-bold">ADDRESS</span>
              <h3 className="font-heading text-2xl font-bold text-[#1F1813]">{LOCATION_DATA.name}</h3>
              <p className="text-sm text-[#5C4E43] leading-relaxed">{LOCATION_DATA.address}</p>
            </div>

            {/* HOURS TABLE */}
            <div className="space-y-3 pt-2">
              <span className="font-mono text-xs text-[#8C6234] uppercase tracking-widest font-bold flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#8C6234]" />
                <span>LAB OPERATING HOURS</span>
              </span>
              <div className="space-y-2">
                {LOCATION_DATA.hours.map((h, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-[#F4F0E8] border border-[#E2D9C8] flex justify-between items-center text-sm font-mono">
                    <span className="text-[#5C4E43]">{h.days}</span>
                    <span className="font-bold text-[#1F1813]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* GOOGLE MAPS CTA BUTTON */}
            <a
              href={LOCATION_DATA.contact.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-2xl bg-[#5E3E29] hover:bg-[#1F1813] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4" />
              <span>OPEN IN GOOGLE MAPS</span>
            </a>

          </div>

          {/* RIGHT: MAP VISUAL BOX */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-[#1F1813] text-[#FAF7F2] border border-[#3B2F25] shadow-xl space-y-6 text-left relative overflow-hidden">
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#A67844] uppercase tracking-widest font-bold">SPACE FEATURES</span>
              <h3 className="font-heading text-2xl font-bold text-white">Designed for Comfort & Focus</h3>
              <p className="text-xs text-[#A89A8B] leading-relaxed">
                Whether you need a dedicated workspace with fast Wi-Fi or a cozy corner for coffee with friends, our space is thoughtfully equipped.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {amenities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-4 rounded-2xl bg-[#28201A] border border-[#3B2F25] space-y-2">
                    <Icon className="w-5 h-5 text-[#A67844]" />
                    <h4 className="font-heading text-sm font-bold text-[#FAF7F2]">{item.title}</h4>
                    <p className="text-[11px] text-[#A89A8B] leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
