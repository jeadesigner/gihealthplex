import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  // Auto scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Slide variants for smooth animation
  const slideVariants = {
    enter: (dir: 'left' | 'right') => ({
      opacity: 0,
      x: dir === 'right' ? 60 : -60,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (dir: 'left' | 'right') => ({
      opacity: 0,
      x: dir === 'right' ? -60 : 60,
    }),
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials-section" className="py-24 bg-zinc-50 text-zinc-950 relative overflow-hidden">
      {/* Decorative quotes background graphic */}
      <div className="absolute top-12 left-12 text-zinc-100 opacity-80 pointer-events-none select-none">
        <Quote size={200} className="transform rotate-180" />
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-600 text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={12} className="text-emerald-500" />
            <span>MEMBER EXPERIENCES</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black font-sans tracking-tight text-zinc-950">
            What Members <span className="text-emerald-500">Say</span>
          </h2>
        </div>

        {/* Slider Box Wrapper */}
        <div className="relative bg-white border border-zinc-100 rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-zinc-200/50 min-h-[350px] flex flex-col justify-between" id="testimonial-slider-container">
          
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentTestimonial.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="space-y-6 flex-grow flex flex-col justify-center"
              id={`testimonial-slide-${currentTestimonial.id}`}
            >
              {/* Star Ratings indicators */}
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              {/* Review Statement Quote */}
              <blockquote className="text-base sm:text-lg md:text-xl font-medium text-zinc-800 leading-relaxed font-sans italic">
                "{currentTestimonial.text}"
              </blockquote>

              {/* Author Identity Metadata */}
              <div className="flex items-center gap-3 pt-6 border-t border-zinc-100">
                {currentTestimonial.image && (
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border-2 border-emerald-400"
                  />
                )}
                <div>
                  <h4 className="font-bold text-zinc-900 text-base">{currentTestimonial.name}</h4>
                  <span className="text-xs text-zinc-500 font-medium font-mono uppercase tracking-wider block">
                    {currentTestimonial.role || 'Verified Member'}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controllers Row */}
          <div className="flex items-center justify-between pt-8 border-t border-zinc-100 mt-8" id="slider-controllers">
            {/* Pagination Indicators Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 'right' : 'left');
                    setCurrentIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-6 bg-emerald-400' : 'w-2 bg-zinc-200 hover:bg-zinc-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Nav Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-xl border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 text-zinc-600 transition-colors flex items-center justify-center cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-xl bg-zinc-950 hover:bg-zinc-900 text-white transition-colors flex items-center justify-center cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
