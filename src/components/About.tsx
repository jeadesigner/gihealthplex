import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Dumbbell, Award, Landmark } from 'lucide-react';

export default function About() {
  return (
    <section id="about-section" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      {/* Decorative lighting background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
            id="about-text-content"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Landmark size={12} strokeWidth={2.5} />
              <span>THE PREMIER HEALTH CLUB</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black font-sans tracking-tight text-white leading-none">
              About <span className="text-emerald-400">Health Plex</span>
            </h2>

            <p className="text-lg md:text-xl text-zinc-300 font-medium leading-relaxed">
              At Health Plex, we believe everyone deserves the opportunity to achieve a fit and healthy lifestyle.
            </p>

            <div className="space-y-4 text-zinc-400 text-sm md:text-base leading-relaxed">
              <p>
                Our <strong>12,000-square-foot</strong> facility features over <strong>40 pieces of cardio equipment</strong>, a spacious weight room, a functional training area and an outdoor training facility.
              </p>
              <p>
                Whether you're just beginning your fitness journey or you're an experienced athlete, our team is here to help you reach your goals. We build a premium space that maintains a supportive, family-friendly vibe where you're always supported and welcomed.
              </p>
            </div>

            {/* Bullets with icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-zinc-900" id="about-highlights-grid">
              {[
                { text: 'World-Class Technogym Equipment', icon: Dumbbell },
                { text: 'Comprehensive Indoor & Outdoor spaces', icon: Landmark },
                { text: 'Welcoming Family Atmosphere', icon: ShieldCheck },
                { text: 'Expert AAAI/ISMA Coaches', icon: Award },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-400/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <item.icon size={16} />
                  </div>
                  <span className="text-zinc-200 text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Showcase Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
            id="about-visual-showcase"
          >
            {/* Elegant glowing frame background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-teal-400 rounded-3xl blur-md opacity-25 scale-95 pointer-events-none" />

            <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 group">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1200"
                alt="Health Plex State of the art Facility"
                referrerPolicy="no-referrer"
                className="w-full h-[350px] md:h-[450px] object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
              
              {/* Floating micro stats label */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-zinc-900/90 backdrop-blur-md border border-zinc-800 flex items-center justify-between shadow-2xl">
                <div>
                  <span className="text-[10px] text-zinc-500 font-mono block">ESTABLISHED</span>
                  <span className="text-sm font-extrabold text-white">44+ Years of Service</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-400/15 text-emerald-400 font-bold text-xs font-mono">
                  #1 IN HALL COUNTY
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
