import React from 'react';
import { motion } from 'motion/react';
import { Award, Calendar, Sparkles } from 'lucide-react';

interface CallToActionProps {
  onOpenModal: (tab: 'membership' | 'tour') => void;
}

export default function CallToAction({ onOpenModal }: CallToActionProps) {
  return (
    <section id="cta-section" className="py-20 bg-emerald-400 text-black relative overflow-hidden">
      {/* Decorative subtle texture overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-white/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10 text-center space-y-8">
        
        {/* Animated tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/10 border border-black/5 text-black text-[10px] font-extrabold uppercase tracking-widest">
          <Sparkles size={11} fill="currentColor" />
          <span>Start Today</span>
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black font-sans tracking-tight text-zinc-950 max-w-4xl mx-auto leading-none">
          Ready to Start Your Fitness Journey?
        </h2>

        <p className="text-sm md:text-lg font-medium text-zinc-900 max-w-2xl mx-auto">
          Join Health Plex Fitness Center today and transform your lifestyle. Experience premium equipment, unlimited spinning, sauna relaxation, and a welcoming community.
        </p>

        {/* Buttons group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto" id="cta-buttons-container">
          <button
            onClick={() => onOpenModal('membership')}
            className="w-full sm:w-auto bg-zinc-950 hover:bg-zinc-900 text-white font-extrabold px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
          >
            <Award size={18} className="text-emerald-400" />
            <span>Become a Member</span>
          </button>
          
          <button
            onClick={() => onOpenModal('tour')}
            className="w-full sm:w-auto bg-white/35 hover:bg-white/50 text-zinc-950 border border-zinc-950/15 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
          >
            <Calendar size={18} />
            <span>Schedule a Tour</span>
          </button>
        </div>

        {/* Localized offer note */}
        <div className="text-[10px] uppercase font-mono tracking-wider text-zinc-900 pt-4">
          All-access keycard included • No hidden enrollment fees
        </div>

      </div>
    </section>
  );
}
