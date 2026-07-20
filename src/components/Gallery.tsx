import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, ZoomIn, X, Sparkles, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Training' | 'Wellness' | 'Classes'>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Categories mapping
  const filters: ('All' | 'Training' | 'Wellness' | 'Classes')[] = ['All', 'Training', 'Wellness', 'Classes'];

  const filterItem = (item: typeof GALLERY_ITEMS[0]) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Training') {
      return ['Weight Room', 'Cardio Area', 'Personal Training', 'Outdoor Training'].includes(item.category);
    }
    if (selectedFilter === 'Wellness') {
      return ['Sauna', 'Whirlpool'].includes(item.category);
    }
    if (selectedFilter === 'Classes') {
      return ['Group Classes'].includes(item.category);
    }
    return false;
  };

  const filteredItems = GALLERY_ITEMS.filter(filterItem);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev! - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev! + 1));
  };

  return (
    <section id="gallery-section" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      {/* Decorative lighting flares */}
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Camera size={12} />
            <span>VISUAL FACILITY SHOWCASE</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black font-sans tracking-tight text-white">
            Health Plex <span className="text-emerald-400">Gallery</span>
          </h2>

          <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto">
            Explore our state-of-the-art facilities. Meticulously clean environments engineered to push you towards athletic perfection.
          </p>
        </div>

        {/* Filter categories tabs row */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 mb-12" id="gallery-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2 text-xs md:text-sm font-semibold rounded-full border transition-all duration-300 cursor-pointer ${
                selectedFilter === filter
                  ? 'bg-emerald-400 border-emerald-400 text-black shadow-lg shadow-emerald-400/10'
                  : 'bg-zinc-900 border-zinc-850 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Filtered Masonry Layout Style Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          id="gallery-masonry-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => {
              // Retrieve original index from GALLERY_ITEMS
              const originalIndex = GALLERY_ITEMS.findIndex(g => g.id === item.id);
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-3xl overflow-hidden group border border-zinc-900 bg-zinc-900 cursor-pointer h-72 md:h-80"
                  onClick={() => setLightboxIndex(idx)}
                  id={`gallery-item-${item.id}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out"
                  />
                  {/* Glass overlay fade effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

                  {/* Icon zoom reveal overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-emerald-400 text-black flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-500">
                      <Eye size={20} />
                    </div>
                  </div>

                  {/* Title labels block at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="px-2 py-0.5 rounded bg-emerald-400 text-black text-[9px] font-bold uppercase tracking-widest">
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold text-white mt-2 drop-shadow">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0"
                onClick={() => setLightboxIndex(null)}
              />

              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors z-10 cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X size={24} />
              </button>

              {/* Carousel Left Button */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 md:left-8 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/50 hover:bg-zinc-800 text-white transition-all z-10 cursor-pointer"
                aria-label="Previous Image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Lightbox Content Container */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: 'spring', duration: 0.4 }}
                className="relative max-w-4xl max-h-[85vh] z-10 flex flex-col items-center"
              >
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-[70vh] object-contain rounded-2xl border border-zinc-900"
                />

                {/* Lightbox details overlay bottom panel */}
                <div className="mt-4 text-center max-w-lg">
                  <span className="px-2 py-0.5 rounded bg-emerald-400 text-black text-[10px] font-bold uppercase tracking-widest">
                    {filteredItems[lightboxIndex].category}
                  </span>
                  <h4 className="text-xl font-bold text-white mt-2">
                    {filteredItems[lightboxIndex].title}
                  </h4>
                  <p className="text-zinc-500 text-xs mt-1 font-mono">
                    Image {lightboxIndex + 1} of {filteredItems.length}
                  </p>
                </div>
              </motion.div>

              {/* Carousel Right Button */}
              <button
                onClick={handleNextImage}
                className="absolute right-4 md:right-8 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/50 hover:bg-zinc-800 text-white transition-all z-10 cursor-pointer"
                aria-label="Next Image"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
