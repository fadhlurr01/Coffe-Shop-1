import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ShortIntro from './components/ShortIntro';
import Signature from './components/Signature';
import About from './components/About';
import Menu from './components/Menu';
import MenuModal from './components/MenuModal';
import Gallery from './components/Gallery';
import GalleryLightbox from './components/GalleryLightbox';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { GALLERY_ITEMS } from './data/coffeeData';

export default function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioRef = useRef(null);

  // Handle ambient soundscape toggle
  useEffect(() => {
    if (audioRef.current) {
      if (soundEnabled) {
        audioRef.current.play().catch((err) => console.log('Audio playback prevented:', err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [soundEnabled]);

  return (
    <div className="relative min-h-screen bg-[#F4F0E8] text-[#1F1813] font-sans selection:bg-[#A67844] selection:text-white">
      
      {/* HIDDEN AMBIENT SOUND GENERATOR */}
      <audio
        ref={audioRef}
        loop
        src="https://cdn.freesound.org/previews/568/568160_11861866-lq.mp3"
      />

      {/* NAVBAR */}
      <Navbar soundEnabled={soundEnabled} setSoundEnabled={setSoundEnabled} />

      {/* MAIN SECTIONS FLOW */}
      <main>
        {/* 1. HERO */}
        <Hero />

        {/* 2. SHORT INTRODUCTION */}
        <ShortIntro />

        {/* 3. THE SIGNATURE */}
        <Signature />

        {/* 4. ABOUT US (MORE THAN JUST COFFEE) */}
        <About />

        {/* 5. OUR MENU CATALOGUE */}
        <Menu onSelectItem={(item) => setSelectedMenuItem(item)} />

        {/* 6. EDITORIAL GALLERY */}
        <Gallery onSelectImage={(index) => setSelectedImageIndex(index)} />

        {/* 7. LOCATION & LAB HOURS */}
        <Location />

        {/* 8. CONTACT & TRANSMISSION */}
        <Contact />
      </main>

      {/* 9. MINIMALIST FOOTER */}
      <Footer />

      {/* ITEM DETAIL SPEC MODAL */}
      {selectedMenuItem && (
        <MenuModal
          item={selectedMenuItem}
          onClose={() => setSelectedMenuItem(null)}
        />
      )}

      {/* EDITORIAL GALLERY LIGHTBOX MODAL */}
      {selectedImageIndex !== null && (
        <GalleryLightbox
          currentIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
          onPrev={() =>
            setSelectedImageIndex((prev) =>
              prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1
            )
          }
          onNext={() =>
            setSelectedImageIndex((prev) =>
              prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1
            )
          }
        />
      )}

    </div>
  );
}
