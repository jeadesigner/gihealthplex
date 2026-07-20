import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Award, Sparkles, MapPin, Shield } from 'lucide-react';
import { HERO_STATS } from '../data';

interface HeroProps {
  onOpenModal: (tab: 'membership' | 'tour') => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center bg-zinc-950 overflow-hidden pt-20"
    >
      {/* Parallax Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920"
          alt="Premium Fitness Facility"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-40 scale-105"
        />
        {/* Dark radial and linear overlays for maximum text legibility and elite branding */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-black/80" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-zinc-950/40 to-zinc-950" />
      </div>

      {/* Decorative neon accent blur balls */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-400/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 text-center flex flex-col items-center">
        {/* Top Tagline Label */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-6"
          id="hero-tagline-badge"
        >
          <Sparkles size={12} />
          <span>ESTABLISHED IN 1982 • GRAND ISLAND, NE</span>
        </motion.div>

        {/* Catchy Premium Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-8xl font-black font-sans tracking-tight text-white max-w-5xl leading-none"
          id="hero-headline"
        >
          Transform Your Body.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
            Transform Your Life.
          </span>
        </motion.h1>

        {/* Catchy Description Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-base md:text-xl text-zinc-300 max-w-3xl leading-relaxed"
          id="hero-paragraph"
        >
          For just <strong className="text-emerald-400 font-extrabold">$1 a day</strong>, become part of Grand Island's premier health club and discover a healthier lifestyle with world-class equipment, unlimited classes and 24/7 member access.
        </motion.p>

        {/* Buttons Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          id="hero-cta-group"
        >
          <button
            onClick={() => onOpenModal('membership')}
            className="w-full sm:w-auto bg-emerald-400 hover:bg-emerald-300 text-black font-extrabold px-8 py-4.5 rounded-2xl transition-all duration-300 shadow-xl shadow-emerald-400/25 hover:shadow-emerald-400/40 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 group"
            id="hero-become-member-btn"
          >
            <Award size={18} />
            <span>Become a Member</span>
          </button>
          <button
            onClick={() => onOpenModal('tour')}
            className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-white font-bold px-8 py-4.5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 group"
            id="hero-schedule-tour-btn"
          >
            <Calendar size={18} className="text-zinc-500 group-hover:text-emerald-400 transition-colors" />
            <span>Schedule a Tour</span>
          </button>
        </motion.div>

        {/* Animated Statistics Counter Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 bg-zinc-900/40 backdrop-blur-md border border-zinc-900 p-6 md:p-8 rounded-[32px]"
          id="hero-stats-dashboard"
        >
          {HERO_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-4 rounded-2xl bg-zinc-950/40 border border-zinc-900 hover:border-zinc-800/80 transition-all duration-300 group"
            >
              <div className="text-2xl md:text-4xl font-black font-sans text-emerald-400 tracking-tight group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-zinc-400 text-xs md:text-sm font-medium mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Trusted local indicator */}
        <div className="mt-8 flex items-center gap-2 text-zinc-500 text-xs font-mono" id="hero-trust-indicator">
          <MapPin size={12} className="text-emerald-400" />
          <span>Proudly Serving Hall County Since 1982</span>
          <span className="text-zinc-700">•</span>
          <Shield size={12} className="text-emerald-400" />
          <span>24/7 Smart Key Access</span>
        </div>
      </div>

      {/* Decorative bottom fade out section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
    </section>
  );
}
