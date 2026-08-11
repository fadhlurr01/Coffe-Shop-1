import React from 'react';
import { MapPin, Clock, Compass, ExternalLink } from 'lucide-react';
import { LOCATION_DATA } from '../data/coffeeData';

export default function Location() {
  return (
    <section id="location" className="py-24 relative bg-[#F4F0E8] border-t border-[#E2D9C8] overflow-hidden text-[#1F1813]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-flat-sm text-[#5E3E29] text-[10px] font-mono tracking-widest uppercase font-bold">
            <Compass className="w-3.5 h-3.5" />
            <span>FIND OUR SPACE</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl font-bold text-[#1F1813] tracking-tight">
            COME SAY <span className="text-[#A67844] font-serif italic font-normal">HELLO</span>
          </h2>

          <p className="text-[#3B312A] text-sm sm:text-base font-normal">
            Located in the heart of Bandung. A warm physical sanctuary built for coffee lovers.
          </p>
        </div>

        {/* LOCATION & MAP CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT: ADDRESS & OPENING HOURS */}
          <div className="lg:col-span-5 neu-flat-solid p-8 rounded-3xl space-y-6 shadow-xl border border-[#E8E0D1]">
            
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#A67844] uppercase tracking-widest font-bold">
                  BANDUNG HQ
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBE5DA] text-[10px] font-mono text-[#5E3E29] font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#5E3E29] animate-ping"></span>
                  {LOCATION_DATA.status}
                </span>
              </div>
              <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#1F1813] mt-2">
                PureBrew<span className="text-[#A67844]">.co</span>
              </h3>
            </div>

            {/* ADDRESS */}
            <div className="flex items-start gap-4 p-4 rounded-2xl neu-inset">
              <div className="p-3 rounded-xl bg-[#5E3E29] text-white shadow-sm flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#5C4E43] uppercase tracking-wider block font-bold">ADDRESS</span>
                <p className="text-sm text-[#1F1813] font-bold mt-0.5 leading-snug">
                  {LOCATION_DATA.address}
                </p>
              </div>
            </div>

            {/* OPENING HOURS */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-[#5E3E29] uppercase tracking-wider font-bold">
                <Clock className="w-4 h-4 text-[#5E3E29]" />
                <span>OPENING HOURS</span>
              </div>

              <div className="space-y-2 border-t border-[#E2D9C8] pt-2">
                {LOCATION_DATA.hours.map((h, i) => (
                  <div key={i} className="flex justify-between items-center text-sm font-mono p-3.5 rounded-xl neu-flat-sm">
                    <span className="text-[#5C4E43] font-medium">{h.days}</span>
                    <span className="text-[#1F1813] font-bold">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* GET DIRECTIONS CTA */}
            <a
              href={LOCATION_DATA.contact.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-2xl bg-[#8C6234] hover:bg-[#5E3E29] text-white font-mono font-bold text-xs uppercase tracking-widest shadow-md hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <span>GET DIRECTIONS</span>
              <ExternalLink className="w-4 h-4" />
            </a>

          </div>

          {/* RIGHT: MAP VISUALIZATION / EMBED */}
          <div className="lg:col-span-7 relative h-[480px] rounded-3xl neu-flat-solid p-3 shadow-xl border border-[#E8E0D1]">
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#E2D9C8]">
              
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862243!2d107.5731168!3d-6.9034443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a0a38af932096!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05) saturate(0.95)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <a
                href={LOCATION_DATA.contact.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 z-20 px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E2D9C8] text-xs font-mono text-[#5E3E29] font-bold hover:text-[#1F1813] flex items-center gap-2 shadow-lg"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

