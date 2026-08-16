import React, { useState } from 'react';
import { LOCATION_DATA } from '../data/coffeeData';
import { Mail, Phone, MessageSquare, Send, CheckCircle2, ChevronDown, HelpCircle, Calendar, Users } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'table-reservation',
    date: '',
    guests: '2',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        type: 'table-reservation',
        date: '',
        guests: '2',
        message: ''
      });
    }, 5000);
  };

  const faqs = [
    {
      q: "Do you offer vegan and non-dairy milk options?",
      a: "Yes! We serve high-quality Oatly Oat Milk, Almond Milk, and Soy Milk. All non-dairy substitutes can be requested for any coffee or matcha beverage."
    },
    {
      q: "Can I reserve a table or private area for group meetings?",
      a: "Absolutely. You can fill out the reservation form above or send a direct WhatsApp message to our coffee lab team to reserve seating."
    },
    {
      q: "Is there parking available on site?",
      a: "Yes, we provide dedicated parking spaces for cars and motorcycles directly in front of our Bandung HQ."
    },
    {
      q: "Do you sell whole bean coffee packages for home brewing?",
      a: "Yes! We offer 250g and 1kg bags of single-origin Gayo & Toraja beans, freshly roasted weekly. You can purchase them directly in-store or ask our baristas."
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      
      {/* PAGE HERO HEADER */}
      <section className="relative py-20 bg-[#1F1813] text-[#FAF7F2] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#28201A] border border-[#A67844]/40 text-[#A67844] text-xs font-mono font-bold tracking-widest uppercase">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>CONNECT WITH PUREBREW</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-[#FAF7F2]">
            Contact & Reservations
          </h1>
          <p className="text-xs sm:text-sm text-[#A89A8B] max-w-xl mx-auto font-light">
            Have a question, event inquiry, or want to reserve a table? Send us a message or connect directly via WhatsApp.
          </p>
        </div>
      </section>

      {/* FORM & DIRECT CONTACT CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: INTERACTIVE FORM */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#F8F5F0] border border-[#E2D9C8] shadow-xl text-left space-y-6">
            <div className="space-y-1">
              <span className="font-mono text-xs text-[#8C6234] uppercase font-bold tracking-wider">SEND TRANSMISSION</span>
              <h2 className="font-heading text-2xl font-bold text-[#1F1813]">Reservation & Inquiry Form</h2>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-[#EAE4D8] border border-[#A67844]/50 text-[#5E3E29] space-y-2 animate-fade-in">
                <div className="flex items-center gap-2 font-mono font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#8C6234]" />
                  <span>Transmission Received!</span>
                </div>
                <p className="text-xs text-[#5C4E43]">
                  Thank you, {formData.name || 'friend'}. Our team will confirm your request shortly via email/WhatsApp.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono font-bold text-[#5C4E43] uppercase">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Johnson"
                      className="w-full px-4 py-3 rounded-xl bg-[#F4F0E8] border border-[#E2D9C8] text-xs text-[#1F1813] focus:outline-none focus:border-[#5E3E29]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono font-bold text-[#5C4E43] uppercase">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#F4F0E8] border border-[#E2D9C8] text-xs text-[#1F1813] focus:outline-none focus:border-[#5E3E29]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono font-bold text-[#5C4E43] uppercase">Inquiry Type</label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F4F0E8] border border-[#E2D9C8] text-xs text-[#1F1813] focus:outline-none focus:border-[#5E3E29] font-mono"
                    >
                      <option value="table-reservation">Table Reservation</option>
                      <option value="private-event">Private Event</option>
                      <option value="general-inquiry">General Question</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono font-bold text-[#5C4E43] uppercase">Preferred Date</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F4F0E8] border border-[#E2D9C8] text-xs text-[#1F1813] focus:outline-none focus:border-[#5E3E29] font-mono"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono font-bold text-[#5C4E43] uppercase">Guests</label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F4F0E8] border border-[#E2D9C8] text-xs text-[#1F1813] focus:outline-none focus:border-[#5E3E29] font-mono"
                    >
                      <option value="1-2">1 – 2 Persons</option>
                      <option value="3-4">3 – 4 Persons</option>
                      <option value="5-8">5 – 8 Persons</option>
                      <option value="9+">9+ Persons (Group)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono font-bold text-[#5C4E43] uppercase">Notes or Special Requests</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us any special seating preference or dietary requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-[#F4F0E8] border border-[#E2D9C8] text-xs text-[#1F1813] focus:outline-none focus:border-[#5E3E29]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-[#5E3E29] hover:bg-[#1F1813] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>SUBMIT TRANSMISSION</span>
                </button>

              </form>
            )}

          </div>

          {/* RIGHT: DIRECT CHAT & FAQ */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* WHATSAPP DIRECT CTA CARD */}
            <div className="p-8 rounded-3xl bg-[#1F1813] text-[#FAF7F2] border border-[#3B2F25] shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-[#8E9B82] font-mono text-xs font-bold">
                <MessageSquare className="w-4 h-4" />
                <span>INSTANT RESPONSE</span>
              </div>
              <h3 className="font-heading text-2xl font-bold">Need Instant Confirmation?</h3>
              <p className="text-xs text-[#A89A8B] leading-relaxed">
                Chat directly with our lead barista on WhatsApp for instant table availability and takeout orders.
              </p>
              <a
                href={LOCATION_DATA.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-2xl bg-[#8E9B82] hover:bg-[#728067] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>

            {/* QUICK FAQ ACCORDION */}
            <div className="p-8 rounded-3xl bg-[#F8F5F0] border border-[#E2D9C8] shadow-lg space-y-4">
              <div className="flex items-center gap-2 text-[#8C6234] font-mono text-xs font-bold">
                <HelpCircle className="w-4 h-4" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="rounded-2xl bg-[#F4F0E8] border border-[#E2D9C8] overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-4 text-left font-heading text-xs font-bold text-[#1F1813] flex items-center justify-between gap-2"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown className={`w-4 h-4 text-[#8C7B6C] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 text-xs text-[#5C4E43] leading-relaxed border-t border-[#E2D9C8]/60 font-light">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
