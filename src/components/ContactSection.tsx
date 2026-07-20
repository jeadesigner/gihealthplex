import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { STAFFED_HOURS, GYM_CONTACT_INFO } from '../data';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);

    // Simulate reliable API post
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Save contact submission to local storage history
      const savedMessages = JSON.parse(localStorage.getItem('healthplex_messages') || '[]');
      savedMessages.push({
        ...formState,
        id: 'msg-' + Date.now(),
        date: new Date().toLocaleDateString(),
      });
      localStorage.setItem('healthplex_messages', JSON.stringify(savedMessages));

      // Reset fields
      setFormState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contact-section" className="py-24 bg-white text-zinc-950 relative overflow-hidden">
      {/* Subtle light vector accent lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 text-xs font-semibold uppercase tracking-wider">
            <Mail size={12} className="text-emerald-500" />
            <span>GET IN TOUCH WITH THE PLEX</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black font-sans tracking-tight text-zinc-950">
            Contact <span className="text-emerald-500">Us</span>
          </h2>

          <p className="text-sm md:text-base text-zinc-500 max-w-xl mx-auto">
            Ready to kickstart your wellness journey? Drop us a line, book a tour, or stop by our premium facility today.
          </p>
        </div>

        {/* Info Grid - Hours, Location, and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-content-grid">
          
          {/* Left Block - Contact metadata & Staffed Hours */}
          <div className="lg:col-span-5 space-y-8" id="contact-metadata-block">
            
            {/* Quick stats items */}
            <div className="space-y-6 bg-zinc-50 border border-zinc-100 p-8 rounded-3xl" id="contact-quick-details">
              <h3 className="text-xl font-bold text-zinc-900 border-b border-zinc-200 pb-3">
                Club Information
              </h3>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-400/10 text-emerald-500 flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest font-mono">Location</h4>
                  <p className="text-zinc-800 text-sm font-medium mt-1">{GYM_CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-400/10 text-emerald-500 flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest font-mono">Phone Number</h4>
                  <a href={`tel:${GYM_CONTACT_INFO.phone}`} className="text-zinc-800 hover:text-emerald-500 text-sm font-medium mt-1 transition-colors block">
                    {GYM_CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-400/10 text-emerald-500 flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest font-mono">Email Address</h4>
                  <a href={`mailto:${GYM_CONTACT_INFO.email}`} className="text-zinc-800 hover:text-emerald-500 text-sm font-medium mt-1 transition-colors block">
                    {GYM_CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Staffed Hours table */}
            <div className="bg-zinc-950 text-white p-8 rounded-3xl border border-zinc-900 relative overflow-hidden" id="staffed-hours-widget">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-3 mb-6">
                <Clock size={20} className="text-emerald-400" />
                <h3 className="text-xl font-bold font-sans">Staffed Hours</h3>
              </div>
              
              <div className="space-y-3.5" id="staffed-hours-list">
                {STAFFED_HOURS.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2.5 border-b border-zinc-900 last:border-b-0">
                    <span className="text-zinc-400 font-medium text-xs md:text-sm">{item.days}</span>
                    <span className="text-white font-bold text-xs md:text-sm font-mono">{item.hours}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-zinc-500 font-mono tracking-wider mt-4 text-center">
                *24/7 KEYCARD ENTRY REMAINS ACTIVE FOR ALL MEMBERS
              </p>
            </div>

          </div>

          {/* Right Block - Interactive Form & Map Container */}
          <div className="lg:col-span-7 space-y-6" id="contact-forms-container">
            
            {/* Form */}
            <div className="bg-zinc-50 border border-zinc-100 rounded-3xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-zinc-950 mb-6">Send us a Message</h3>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFormSubmit}
                    className="space-y-4"
                    id="gym-contact-form"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-zinc-850 placeholder-zinc-400 text-sm focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 focus:outline-none transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-zinc-850 placeholder-zinc-400 text-sm focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 focus:outline-none transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleInputChange}
                        placeholder="(308) 384-5111"
                        className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-zinc-850 placeholder-zinc-400 text-sm focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 focus:outline-none transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Your Message</label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formState.message}
                        onChange={handleInputChange}
                        placeholder="What are your fitness goals or questions?"
                        className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-zinc-850 placeholder-zinc-400 text-sm focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 focus:outline-none transition-all duration-200 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-zinc-950 hover:bg-zinc-900 text-white font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 group"
                      id="submit-contact-form-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
                          <span>Delivering...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} className="text-emerald-400 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="form-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 space-y-4"
                    id="form-success-banner"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-500">
                      <CheckCircle2 size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-zinc-950">Thank You!</h4>
                    <p className="text-zinc-500 text-sm max-w-sm mx-auto">
                      Your message has been safely received. A Health Plex coach will reach out to you via email or phone shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-semibold text-emerald-500 hover:text-emerald-600 underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Embedded Iframe Map */}
            <div className="rounded-3xl overflow-hidden border border-zinc-200 bg-zinc-100 shadow-inner h-80 relative group" id="maps-iframe-wrapper">
              <iframe
                title="Health Plex Grand Island Location Map"
                src={GYM_CONTACT_INFO.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700 pointer-events-auto"
              />
              <div className="absolute top-4 left-4 p-3 bg-zinc-950/90 text-white text-xs font-medium rounded-xl border border-zinc-800 backdrop-blur shadow-lg flex items-center gap-2 select-none">
                <MapPin size={12} className="text-emerald-400" />
                <span>2909 W US-HWY 30, Grand Island</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
