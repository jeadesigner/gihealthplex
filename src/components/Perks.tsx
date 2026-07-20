import React from 'react';
import { motion } from 'motion/react';
import { Dumbbell, Building, Users, Key, Sun, Droplets, Sparkles } from 'lucide-react';
import { MEMBERSHIP_PERKS } from '../data';

// Map icon names to Lucide icon components
const iconMap: { [key: string]: any } = {
  Dumbbell: Dumbbell,
  Building: Building,
  Users: Users,
  Key: Key,
  Sun: Sun,
  Droplets: Droplets,
};

export default function Perks() {
  return (
    <section id="perks-section" className="py-24 bg-white text-zinc-950 relative overflow-hidden">
      {/* Decorative light subtle geometric accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-100 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-zinc-100 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={12} className="text-emerald-500" />
            <span>ELITE ADVANTAGES</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black font-sans tracking-tight text-zinc-950">
            Membership <span className="text-emerald-500">Perks</span>
          </h2>

          <p className="text-sm md:text-base text-zinc-500 max-w-2xl mx-auto">
            Experience premium, all-inclusive fitness and luxury recovery spaces designed to boost your daily performance and accelerate complete physical regeneration.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="perks-grid">
          {MEMBERSHIP_PERKS.map((perk, idx) => {
            const IconComponent = iconMap[perk.iconName] || Dumbbell;
            return (
              <motion.div
                key={perk.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative bg-zinc-50 border border-zinc-100 rounded-3xl p-6 md:p-8 hover:bg-white hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-300 group cursor-default"
                id={`perk-card-${idx}`}
              >
                {/* Neon glow effect border on hover */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-emerald-400/20 transition-all duration-300 pointer-events-none" />

                <div className="flex justify-between items-start mb-6">
                  {/* Icon with glowing backdrop */}
                  <div className="w-12 h-12 rounded-2xl bg-zinc-100 group-hover:bg-emerald-400 group-hover:text-black transition-all duration-300 flex items-center justify-center text-zinc-800 shadow-sm">
                    <IconComponent size={24} className="group-hover:rotate-6 transition-transform" />
                  </div>
                  {/* Large Stylized Emoji indicator in subtle background style */}
                  <span className="text-2xl font-mono opacity-80" aria-hidden="true">
                    {perk.emoji}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold font-sans text-zinc-950 mb-3 group-hover:text-emerald-500 transition-colors">
                  {perk.title}
                </h3>

                <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">
                  {perk.description}
                </p>

                {/* Aesthetic slide in accent line */}
                <div className="w-0 group-hover:w-1/3 h-1 bg-emerald-400 mt-6 rounded-full transition-all duration-300 ease-out" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
