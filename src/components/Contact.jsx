import React, { useState } from 'react';
import { Send, Mail, MessageSquare, Instagram, CheckCircle2, Sparkles } from 'lucide-react';
import { LOCATION_DATA } from '../data/coffeeData';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#F4F0E8] text-[#1F1813] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-flat-sm text-[#5E3E29] text-[10px] font-mono tracking-widest uppercase font-bold">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl font-bold text-[#1F1813] tracking-tight">
            HAVE A <span className="text-[#A67844] font-serif italic font-normal">QUESTION?</span>
          </h2>

          <p className="text-[#3B312A] text-sm sm:text-base font-normal">
            Drop us a message, ask about private events, or connect with us on social media.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT CARDS */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* EMAIL */}
            <a
              href={`mailto:${LOCATION_DATA.contact.email}`}
              className="p-6 rounded-3xl neu-flat-solid flex items-center gap-4 block group transition-all"
            >
              <div className="p-4 rounded-2xl neu-flat-sm text-[#5E3E29] group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6 text-[#5E3E29]" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#5C4E43] uppercase tracking-wider block font-bold">EMAIL US</span>
                <p className="font-heading text-xl font-bold text-[#1F1813] group-hover:text-[#5E3E29] transition-colors">
                  {LOCATION_DATA.contact.email}
                </p>
              </div>
            </a>

            {/* WHATSAPP */}
            <a
              href={LOCATION_DATA.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl neu-flat-solid flex items-center gap-4 block group transition-all"
            >
              <div className="p-4 rounded-2xl neu-flat-sm text-[#485942] group-hover:scale-105 transition-transform">
                <MessageSquare className="w-6 h-6 text-[#485942]" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#5C4E43] uppercase tracking-wider block font-bold">WHATSAPP</span>
                <p className="font-heading text-xl font-bold text-[#1F1813] group-hover:text-[#485942] transition-colors">
                  {LOCATION_DATA.contact.phone}
                </p>
              </div>
            </a>

            {/* SOCIALS */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={LOCATION_DATA.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl neu-flat-solid flex items-center gap-3 text-[#3B312A] hover:text-[#1F1813] transition-all font-bold justify-center"
              >
                <Instagram className="w-4 h-4 text-[#5E3E29]" />
                <span className="font-mono text-xs">INSTAGRAM</span>
              </a>

              <a
                href={LOCATION_DATA.contact.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl neu-flat-solid flex items-center gap-3 text-[#3B312A] hover:text-[#1F1813] transition-all font-bold justify-center"
              >
                <Sparkles className="w-4 h-4 text-[#5E3E29]" />
                <span className="font-mono text-xs">TIKTOK</span>
              </a>
            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl neu-flat-solid relative shadow-xl border border-[#E8E0D1]">
            
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-[#5E3E29] text-white flex items-center justify-center shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#1F1813]">MESSAGE SENT</h3>
                <p className="text-sm text-[#3B312A] max-w-md font-normal">
                  Thank you, {formState.name}! We have received your message and will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-mono text-[10px] text-[#5E3E29] uppercase tracking-wider block mb-2 font-bold">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alex West"
                    className="w-full px-5 py-4 rounded-2xl neu-inset text-[#1F1813] font-semibold text-sm focus:outline-none placeholder-[#5C4E43]/60 font-sans"
                  />
                </div>

                <div>
                  <label className="font-mono text-[10px] text-[#5E3E29] uppercase tracking-wider block mb-2 font-bold">
                    EMAIL OR PHONE
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="hello@yourdomain.com or +62..."
                    className="w-full px-5 py-4 rounded-2xl neu-inset text-[#1F1813] font-semibold text-sm focus:outline-none placeholder-[#5C4E43]/60 font-sans"
                  />
                </div>

                <div>
                  <label className="font-mono text-[10px] text-[#5E3E29] uppercase tracking-wider block mb-2 font-bold">
                    YOUR MESSAGE
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-5 py-4 rounded-2xl neu-inset text-[#1F1813] font-semibold text-sm focus:outline-none placeholder-[#5C4E43]/60 font-sans resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-[#8C6234] hover:bg-[#5E3E29] text-white font-mono font-bold text-xs uppercase tracking-widest shadow-md hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND MESSAGE</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

