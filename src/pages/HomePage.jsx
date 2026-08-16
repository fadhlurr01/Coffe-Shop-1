import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ShortIntro from '../components/ShortIntro';
import { SIGNATURE_ITEM, MENU_ITEMS, GALLERY_ITEMS, LOCATION_DATA } from '../data/coffeeData';
import { ArrowRight, Sparkles, Coffee, MapPin, Compass, Camera, MessageSquare, Clock, ShieldCheck, Heart } from 'lucide-react';

export default function HomePage() {
  // Select top 3 featured menu items for quick home teaser
  const featuredMenuItems = MENU_ITEMS.slice(0, 3);
  // Select top 3 gallery preview photos
  const galleryTeaser = GALLERY_ITEMS.slice(0, 3);

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. HERO BANNER */}
      <Hero />

      {/* 2. SHORT BRAND INTRO */}
      <ShortIntro />

      {/* 3. MULTI-PAGE NAVIGATION PORTAL / FEATURED SECTIONS */}
      
      {/* A. OUR PHILOSOPHY & STORY TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F8F5F0] border border-[#E2D9C8] shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE4D8] border border-[#DCD3C3] text-[#5E3E29] text-xs font-mono font-bold tracking-wider uppercase">
              <Compass className="w-3.5 h-3.5" />
              <span>OUR CRAFT PHILOSOPHY</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1F1813]">
              Coffee Made With Intention & Japanese Mindfulness
            </h2>
            <p className="text-xs sm:text-sm text-[#5C4E43] leading-relaxed font-light">
              PureBrew.co was founded to create a calm sanctuary in Bandung where specialty single-origin Arabica is micro-roasted in small batches and extracted with precision.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5E3E29] hover:bg-[#1F1813] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-md transition-all hover:scale-105"
              >
                <span>BACA CERITA SELENGKAPNYA</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
              alt="Barista brewing"
              className="rounded-2xl object-cover h-64 sm:h-72 w-full shadow-md border border-[#E2D9C8]"
            />
            <div className="absolute -bottom-4 -right-4 p-4 rounded-2xl bg-[#1F1813] text-white font-mono text-xs border border-[#3B2F25] shadow-xl hidden sm:block">
              <span className="text-[#A67844] font-bold block">100% SINGLE ORIGIN</span>
              <span className="text-[10px] text-[#A89A8B]">Gayo & Toraja Highlands</span>
            </div>
          </div>
        </div>
      </section>

      {/* B. SIGNATURE DRINK SPOTLIGHT TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1F1813] text-[#FAF7F2] border border-[#3B2F25] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <img
              src={SIGNATURE_ITEM.image}
              alt={SIGNATURE_ITEM.name}
              className="rounded-2xl object-cover h-72 w-full shadow-lg border border-[#3B2F25]"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#A67844] text-white font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
              <Sparkles className="w-3 h-3" />
              <span>THE SIGNATURE</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#28201A] border border-[#A67844]/40 text-[#A67844] text-xs font-mono font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FLAGSHIP CREATION</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#FAF7F2]">
              {SIGNATURE_ITEM.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#A89A8B] leading-relaxed font-light">
              {SIGNATURE_ITEM.description}
            </p>
            <div className="flex items-center gap-4 font-mono text-xs text-[#A67844] font-bold">
              <span>{SIGNATURE_ITEM.price}</span>
              <span>•</span>
              <span>{SIGNATURE_ITEM.stats.origin}</span>
            </div>
            <div className="pt-2">
              <Link
                to="/signature"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#A67844] hover:bg-[#8C6234] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg transition-all hover:scale-105"
              >
                <span>JELAJAHI MINUMAN SIGNATURE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* C. CURATED MENU HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-left border-b border-[#E2D9C8] pb-4">
          <div>
            <span className="text-xs font-mono text-[#8C6234] font-bold uppercase tracking-widest block">SPECIALTY SELECTION</span>
            <h2 className="font-heading text-3xl font-bold text-[#1F1813]">Favored Brews & Bakery</h2>
          </div>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5E3E29] hover:bg-[#1F1813] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all"
          >
            <span>LIHAT KATALOG MENU LENGKAP</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {featuredMenuItems.map((item) => (
            <div key={item.id} className="p-5 rounded-3xl bg-[#F8F5F0] border border-[#E2D9C8] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="relative h-44 rounded-2xl overflow-hidden bg-[#E2D9C8]">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#1F1813]/80 text-white font-mono text-xs font-bold">
                    {item.price}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-[#1F1813]">{item.name}</h3>
                <p className="text-xs text-[#5C4E43] line-clamp-2">{item.desc}</p>
              </div>
              <Link
                to="/menu"
                className="mt-4 text-xs font-mono text-[#5E3E29] font-bold uppercase hover:underline flex items-center gap-1"
              >
                <span>DETAIL SPEC & ALL MENU</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* D. VISUAL GALLERY TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-left border-b border-[#E2D9C8] pb-4">
          <div>
            <span className="text-xs font-mono text-[#8C6234] font-bold uppercase tracking-widest block">VISUAL JOURNAL</span>
            <h2 className="font-heading text-3xl font-bold text-[#1F1813]">Atmosphere & Aesthetics</h2>
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5E3E29] hover:bg-[#1F1813] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all"
          >
            <span>BUNGAI GALERI FOTO</span>
            <Camera className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryTeaser.map((img) => (
            <div key={img.id} className="relative h-64 rounded-3xl overflow-hidden shadow-md border border-[#E2D9C8] group">
              <img src={img.image} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1813]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left text-white">
                <span className="font-mono text-[10px] text-[#A67844] font-bold uppercase">{img.category}</span>
                <h4 className="font-heading text-base font-bold">{img.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* E. LOCATION & RESERVATION QUICK TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* LOCATION CARD */}
          <div className="p-8 rounded-3xl bg-[#F8F5F0] border border-[#E2D9C8] shadow-md text-left space-y-4">
            <div className="flex items-center gap-2 text-[#8E9B82] font-mono text-xs font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8E9B82] animate-pulse"></span>
              <span>{LOCATION_DATA.status} • BANDUNG</span>
            </div>
            <h3 className="font-heading text-2xl font-bold text-[#1F1813]">Kunjungi Coffee Lab Kami</h3>
            <p className="text-xs text-[#5C4E43] leading-relaxed">
              {LOCATION_DATA.address}
            </p>
            <div className="pt-2">
              <Link
                to="/location"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5E3E29] hover:bg-[#1F1813] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>LOKASI & JAM BUKA</span>
              </Link>
            </div>
          </div>

          {/* RESERVATION CARD */}
          <div className="p-8 rounded-3xl bg-[#1F1813] text-[#FAF7F2] border border-[#3B2F25] shadow-md text-left space-y-4">
            <div className="flex items-center gap-2 text-[#A67844] font-mono text-xs font-bold">
              <MessageSquare className="w-4 h-4" />
              <span>RESERVASI & TRANSMISI</span>
            </div>
            <h3 className="font-heading text-2xl font-bold">Pesan Meja / Pertanyaan</h3>
            <p className="text-xs text-[#A89A8B] leading-relaxed">
              Ingin memesan tempat untuk pertemuan kelompok atau memiliki pertanyaan khusus? Hubungi tim barista kami.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#A67844] hover:bg-[#8C6234] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>HUBUNGI & RESERVASI</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
