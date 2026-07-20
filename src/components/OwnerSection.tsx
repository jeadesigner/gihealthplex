import React from 'react';
import { motion } from 'motion/react';
import { Quote, Sparkles, Award } from 'lucide-react';
import { OWNER_DETAILS } from '../data';

export default function OwnerSection() {
  return (
    <section id="owner-section" className="py-24 bg-zinc-50 text-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block - Elegant Owner Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex justify-center"
            id="owner-portrait-wrapper"
          >
            {/* Glowing background ring */}
            <div className="absolute inset-0 bg-emerald-400/10 rounded-[3rem] blur-xl scale-95 pointer-events-none" />

            <div className="relative rounded-[2.5rem] overflow-hidden border border-zinc-200 bg-white p-3 shadow-2xl">
              <img
                src={OWNER_DETAILS.image}
                alt="Scott Norton - Owner & CEO"
                referrerPolicy="no-referrer"
                className="w-full max-w-[360px] h-[400px] object-cover rounded-[2rem] filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-2xl p-4 text-white">
                <span className="text-[9px] text-emerald-400 font-mono tracking-widest uppercase block mb-1">FOUNDING PROPRIETOR</span>
                <span className="text-base font-extrabold block">{OWNER_DETAILS.name}</span>
                <span className="text-xs text-zinc-400 block mt-0.5">{OWNER_DETAILS.role}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Block - Description & Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
            id="owner-narrative-block"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-600 text-xs font-semibold uppercase tracking-wider">
              <Award size={12} className="text-emerald-500" />
              <span>LEADERSHIP SPOTLIGHT</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black font-sans tracking-tight text-zinc-950 leading-none">
              Meet the Owner
            </h2>

            {/* Quote decoration */}
            <div className="relative text-emerald-500 opacity-20 -mb-2">
              <Quote size={48} className="transform rotate-180" />
            </div>

            <div className="space-y-4 text-zinc-600 text-sm md:text-base leading-relaxed pl-4 border-l-2 border-emerald-400">
              {OWNER_DETAILS.bio.map((paragraph, index) => (
                <p key={index} className={index === 0 ? "text-lg md:text-xl font-medium text-zinc-800" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="pt-6 border-t border-zinc-200 flex items-center gap-4">
              <div className="font-serif italic text-2xl text-zinc-800 tracking-wider">
                Scott Norton
              </div>
              <span className="text-zinc-300">|</span>
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                Owner, Health Plex Fitness Center
              </div>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4" id="owner-trust-stats">
              <div>
                <span className="text-lg md:text-2xl font-black text-emerald-500 block font-sans">1982</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-wide">Acquisition Year</span>
              </div>
              <div>
                <span className="text-lg md:text-2xl font-black text-emerald-500 block font-sans">15 yrs</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-wide">Passion Began</span>
              </div>
              <div>
                <span className="text-lg md:text-2xl font-black text-emerald-500 block font-sans">100%</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-wide">Local Pride</span>
              </div>
            </div>

          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
