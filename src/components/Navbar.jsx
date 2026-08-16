import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { MapPin, Volume2, VolumeX, Menu as MenuIcon, X } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Navbar({ soundEnabled, setSoundEnabled }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SIGNATURE', path: '/signature' },
    { name: 'MENU', path: '/menu' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'LOCATION', path: '/location' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-[#F4F0E8]/95 backdrop-blur-md border-b border-[#E2D9C8] shadow-md'
          : 'py-4 bg-[#F4F0E8]/90 backdrop-blur-sm border-b border-[#E2D9C8]/60 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* BRAND LOGO */}
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            <BrandLogo variant="light" size="normal" />
          </Link>

          {/* DESKTOP NAVIGATION LINKS */}
          <div className="hidden lg:flex items-center gap-1 neu-inset px-2.5 py-1.5 rounded-full">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-1.5 text-[11px] tracking-wider uppercase rounded-full font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#5E3E29] text-white shadow-md'
                      : 'text-[#5C4E43] hover:text-[#1F1813] hover:bg-white/60'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* RIGHT ACTIONS */}
          <div className="hidden md:flex items-center gap-3">
            {/* AMBIENT SOUND SCAPE TOGGLE */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              title={soundEnabled ? "Mute Ambient Sound" : "Enable Ambient Sound"}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full neu-button text-[#5E3E29] text-[11px] font-mono font-bold hover:scale-105 transition-all"
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#5E3E29]" />
                  <div className="flex items-end gap-[2px] h-3">
                    <span className="w-[2px] bg-[#5E3E29] animate-wave-1 rounded-full"></span>
                    <span className="w-[2px] bg-[#5E3E29] animate-wave-2 rounded-full"></span>
                    <span className="w-[2px] bg-[#5E3E29] animate-wave-3 rounded-full"></span>
                  </div>
                  <span>AMBIENT</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-[#5C4E43]" />
                  <span className="text-[10px] text-[#5C4E43]">AMBIENT</span>
                </>
              )}
            </button>

            {/* VISIT US CTA */}
            <Link
              to="/location"
              className="px-5 py-2 rounded-full bg-[#8C6234] hover:bg-[#5E3E29] text-white font-bold text-[11px] tracking-wider uppercase shadow-md hover:scale-105 transition-all flex items-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>VISIT US</span>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 rounded-full neu-button text-[#5E3E29]"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-[#5C4E43]" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl neu-button text-[#1F1813] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#5E3E29]" /> : <MenuIcon className="w-6 h-6 text-[#1F1813]" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-4 p-5 rounded-2xl bg-[#F4F0E8] border border-[#E2D9C8] shadow-2xl flex flex-col gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2.5 rounded-xl text-xs tracking-wider uppercase transition-colors font-bold ${
                  isActive
                    ? 'bg-[#5E3E29] text-white shadow-sm'
                    : 'text-[#5C4E43] hover:text-[#1F1813] hover:bg-[#EBE5DA]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/location"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-3 rounded-xl bg-[#8C6234] text-white font-bold text-xs uppercase tracking-wider shadow-md"
          >
            VISIT US
          </Link>
        </div>
      )}
    </nav>
  );
}

