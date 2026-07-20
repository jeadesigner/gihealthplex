import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Zap } from 'lucide-react';

interface JoinNowFloatProps {
  onClick: () => void;
}

export default function JoinNowFloat({ onClick }: JoinNowFloatProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when user scrolls past 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -30, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -30, scale: 0.9 }}
          className="fixed bottom-6 left-6 z-40"
          id="join-now-float-wrapper"
        >
          <button
            onClick={onClick}
            className="flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-zinc-950/90 hover:bg-zinc-900 text-white border border-zinc-800 hover:border-emerald-400/50 shadow-2xl backdrop-blur-md cursor-pointer transition-all duration-300 group"
          >
            {/* Pulsing neon green status dot */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            
            <span className="text-xs font-bold uppercase tracking-wider font-sans group-hover:text-emerald-400 transition-colors">
              Join Now
            </span>
            
            <div className="w-5 h-5 rounded-full bg-emerald-400/10 text-emerald-400 flex items-center justify-center">
              <Zap size={11} fill="currentColor" />
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
