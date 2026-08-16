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
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#485942]"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.92 0-3.692-.516-5.215-1.419l-.373-.222-3.876 1.017 1.035-3.778-.244-.388a10.05 10.05 0 0 1-1.542-5.356c0-5.553 4.518-10.07 10.07-10.07 2.69 0 5.218 1.047 7.121 2.951a10.006 10.006 0 0 1 2.946 7.121c0 5.555-4.517 10.074-10.074 10.074m0-18.147a8.09 8.09 0 0 0-5.74 2.377 8.086 8.086 0 0 0-2.374 5.739c0 1.637.493 3.238 1.427 4.607l-1.517 5.54 5.672-1.487a8.058 8.058 0 0 0 4.532 1.362h.004c4.464 0 8.094-3.63 8.094-8.093s-3.63-8.093-8.098-8.093" />
                </svg>
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
                className="p-4 rounded-2xl neu-flat-solid flex items-center gap-3 text-[#3B312A] hover:text-[#1F1813] transition-all font-bold justify-center group"
              >
                <Instagram className="w-4 h-4 text-[#5E3E29] group-hover:scale-110 transition-transform" />
                <span className="font-mono text-xs">INSTAGRAM</span>
              </a>

              <a
                href={LOCATION_DATA.contact.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl neu-flat-solid flex items-center gap-3 text-[#3B312A] hover:text-[#1F1813] transition-all font-bold justify-center group"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-[#5E3E29] group-hover:scale-110 transition-transform"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2.89-2.89c.28 0 .54.04.79.12V9.41a6.31 6.31 0 0 0-.79-.05 6.34 6.34 0 1 0 6.34 6.34V8.71a8.21 8.21 0 0 0 5.2 1.83V7.08a4.82 4.82 0 0 1-1.43-.39z" />
                </svg>
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

