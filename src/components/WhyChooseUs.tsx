import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Trophy, ShieldCheck, HeartPulse } from 'lucide-react';
import { WHY_CHOOSE_US_STATS } from '../data';

export default function WhyChooseUs() {
  const highlights = [
    { title: "Legacy & Trust", desc: "Serving Hall County for over four decades as a locally owned, family-run business.", icon: Trophy },
    { title: "Smarter Access", desc: "Secure keycard system allows you to train whenever inspiration strikes—day or night.", icon: ShieldCheck },
    { title: "Aesthetic Space", desc: "Meticulously maintained facilities with sanitized areas and premium spatial planning.", icon: HeartPulse },
  ];

  return (
    <section id="why-choose-us-section" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      {/* Dynamic graphic grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />

      {/* Lighting flare */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Block - Text and highlights list */}
          <div className="lg:col-span-6 space-y-8" id="why-choose-us-text-block">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles size={12} />
                <span>UNRIVALED COMMITMENT</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black font-sans tracking-tight text-white leading-none">
                Why Choose <span className="text-emerald-400">Health Plex?</span>
              </h2>
              <p className="text-sm md:text-base text-zinc-400 max-w-xl">
                We bridge the gap between world-class fitness infrastructure and a warm, supportive atmosphere. We don't just sell gym contracts; we foster real community success stories.
              </p>
            </div>

            {/* List of custom advantages */}
            <div className="space-y-6" id="why-choose-us-advantages">
              {highlights.map((h, idx) => {
                const IconComp = h.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-4 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-900 hover:border-zinc-850 hover:bg-zinc-900 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-400/10 text-emerald-400 flex items-center justify-center shrink-0">
                      <IconComp size={18} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">{h.title}</h3>
                      <p className="text-zinc-400 text-xs md:text-sm leading-normal">{h.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Block - Premium Stats Dashboard with numbers */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 md:gap-6" id="why-choose-us-stats-grid">
            {WHY_CHOOSE_US_STATS.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-zinc-900/40 backdrop-blur-md border border-zinc-900 p-6 md:p-8 rounded-[2rem] text-center flex flex-col justify-center items-center shadow-lg group relative overflow-hidden"
              >
                {/* Accent hover glow block */}
                <div className="absolute inset-0 bg-emerald-400/0 group-hover:bg-emerald-400/5 transition-colors duration-300" />

                <div className="text-3xl sm:text-5xl font-black font-sans text-emerald-400 mb-2 tracking-tighter group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                
                <div className="text-xs sm:text-sm font-semibold text-zinc-300 uppercase tracking-widest mt-1">
                  {stat.label}
                </div>

                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
