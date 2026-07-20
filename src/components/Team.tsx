import React from 'react';
import { motion } from 'motion/react';
import { Facebook, Instagram, Linkedin, Sparkles, Award, ShieldCheck, Dumbbell } from 'lucide-react';
import { TEAM_MEMBERS } from '../data';

export default function Team() {
  return (
    <section id="team-section" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      {/* Decorative ambient lighting elements */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-emerald-400/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={12} />
            <span>ELITE TRAINING CORPS</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black font-sans tracking-tight text-white">
            Our <span className="text-emerald-400">Team</span>
          </h2>

          <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto">
            Train with the most qualified and highly experienced fitness leaders in Grand Island. True professionals committed to your athletic growth.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="team-grid">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-zinc-900/40 backdrop-blur-md border border-zinc-900 rounded-[2.5rem] p-6 text-center hover:bg-zinc-900 hover:border-zinc-800/85 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-300 group flex flex-col items-center"
              id={`team-card-${idx}`}
            >
              {/* Circular Photo with Hover Zoom Frame */}
              <div className="relative w-36 h-36 rounded-full p-1.5 bg-gradient-to-tr from-emerald-400/20 to-teal-400/20 mb-6 group-hover:scale-105 transition-all duration-500">
                <div className="w-full h-full rounded-full overflow-hidden border border-zinc-800 bg-zinc-950">
                  <img
                    src={member.image}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Active Trainer Accent */}
                <span className="absolute bottom-1 right-1 w-5.5 h-5.5 rounded-full bg-emerald-400 border-4 border-zinc-900 flex items-center justify-center text-[8px]" aria-hidden="true">
                  ⚡
                </span>
              </div>

              {/* Title Role Header */}
              <div className="space-y-1 mb-4">
                <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-emerald-400 transition-colors">
                  {member.name}
                </h3>
                <span className="text-xs font-mono font-semibold text-emerald-400/90 uppercase tracking-widest block">
                  {member.role}
                </span>
              </div>

              {/* Bio summary paragraph */}
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6 max-w-xs flex-grow">
                {member.bio}
              </p>

              {/* Certified Highlights/Credentials list */}
              {member.credentials && (
                <div className="w-full text-left space-y-2 mb-6 p-4 rounded-2xl bg-zinc-950/50 border border-zinc-900 group-hover:bg-zinc-950 transition-colors">
                  <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest mb-1 font-semibold flex items-center gap-1.5">
                    <Award size={12} className="text-emerald-400" />
                    <span>Specializations & Rank</span>
                  </div>
                  <div className="flex flex-col gap-1.5" id={`team-credentials-${idx}`}>
                    {member.credentials.map((cred, credIdx) => (
                      <div key={credIdx} className="flex items-start gap-2">
                        <span className="text-[9px] text-emerald-400 mt-1">⚡</span>
                        <span className="text-xs text-zinc-300 font-medium">{cred}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Social Icon links */}
              {member.social && (
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-900/80 w-full justify-center" id={`team-socials-${idx}`}>
                  {member.social.facebook && (
                    <a
                      href={member.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-zinc-950 hover:bg-emerald-400 hover:text-black text-zinc-500 border border-zinc-900 transition-all duration-200 flex items-center justify-center"
                      aria-label={`${member.name} Facebook`}
                    >
                      <Facebook size={14} />
                    </a>
                  )}
                  {member.social.instagram && (
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-zinc-950 hover:bg-emerald-400 hover:text-black text-zinc-500 border border-zinc-900 transition-all duration-200 flex items-center justify-center"
                      aria-label={`${member.name} Instagram`}
                    >
                      <Instagram size={14} />
                    </a>
                  )}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-zinc-950 hover:bg-emerald-400 hover:text-black text-zinc-500 border border-zinc-900 transition-all duration-200 flex items-center justify-center"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin size={14} />
                  </a>
                </div>
              )}

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
