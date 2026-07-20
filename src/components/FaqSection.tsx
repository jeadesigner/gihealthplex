import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Sparkles, MessageSquareCode } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'How do I cancel or freeze my membership?',
      answer: 'We believe in full transparency and zero hassle. You can cancel or freeze your membership with a simple 10-day notice prior to your next billing cycle. No long-term lock-ins, no cancellation penalties, and no stressful phone arguments. Simply speak to Scott or Sam at the front desk, or drop us an email at cancel@healthplexgi.com, and we will process it instantly.',
    },
    {
      id: 'faq-2',
      question: 'Can I bring a guest or get a guest pass?',
      answer: 'Absolutely! Premium and VIP members receive unlimited complimentary guest passes (one guest per visit). Standard members can purchase guest day passes for $10. If you are a prospective member who wants to try out the facility, you can click "Schedule a Tour" to secure a complimentary VIP day pass and experience our 12,000 sq ft space first.',
    },
    {
      id: 'faq-3',
      question: 'Are there any rules or time limits on equipment usage?',
      answer: 'To ensure a premium training experience for everyone, we do not impose restrictive time limits on our 40+ cardio machines or heavy weight stations. Instead, we foster a respectful, high-etiquette athletic environment. We kindly ask all members to wipe down equipment after use (using our premium sanitizing stations) and re-rack weights in their designated spots.',
    },
    {
      id: 'faq-4',
      question: 'How does the 24/7 smart keycard access work?',
      answer: 'Upon registration, you will receive a secure digital or physical keycard connected directly to your active account. The front entrance is equipped with an encrypted smart reader. Simply scan your card at the reader outside the main door at any time—day, night, or holidays—to unlock the facility. The entire space is continuously monitored by a high-definition 24/7 security network to ensure your absolute safety.',
    },
    {
      id: 'faq-5',
      question: 'Do you offer personal training and fitness evaluations?',
      answer: 'Yes! Our certified instructors, including General Manager Sam Murphy and Shari Cole, offer tailored 1-on-1 performance coaching. Every new member is entitled to a complimentary 45-minute fitness assessment and equipment orientation to help you establish safe biomechanics and design a customized roadmap for your goals.',
    }
  ];

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-24 bg-white text-zinc-950 relative overflow-hidden">
      {/* Decorative clean radial background gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-zinc-100 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-50/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle size={12} className="text-emerald-500" />
            <span>COMMON ENQUIRIES</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black font-sans tracking-tight text-zinc-950">
            Frequently Asked <span className="text-emerald-500">Questions</span>
          </h2>

          <p className="text-sm md:text-base text-zinc-500 max-w-xl mx-auto">
            Got questions? We have clear, direct answers regarding memberships, guest rules, and our training facility.
          </p>
        </div>

        {/* Accordion Layout */}
        <div className="space-y-4" id="faq-accordion-container">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-3xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-zinc-50/50 border-emerald-400/40 shadow-lg shadow-emerald-500/5'
                    : 'bg-white border-zinc-100 hover:border-zinc-200'
                }`}
                id={`faq-item-${faq.id}`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => handleToggle(faq.id)}
                  className="w-full text-left px-6 py-5 md:py-6 flex items-center justify-between gap-4 font-sans focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                  id={`faq-trigger-${faq.id}`}
                >
                  <span className={`font-bold text-sm md:text-base transition-colors duration-200 ${
                    isOpen ? 'text-emerald-500' : 'text-zinc-900'
                  }`}>
                    {faq.question}
                  </span>
                  
                  {/* Chevron rotation control */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className={`p-2 rounded-xl border shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-emerald-400 text-black border-emerald-400'
                        : 'bg-zinc-50 text-zinc-500 border-zinc-100'
                    }`}
                  >
                    <ChevronDown size={16} strokeWidth={2.5} />
                  </motion.div>
                </button>

                {/* Collapsible Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 md:pb-7 text-xs md:text-sm text-zinc-600 leading-relaxed max-w-3xl border-t border-zinc-100/50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Support Highlight */}
        <div className="mt-12 text-center p-6 rounded-3xl bg-zinc-50 border border-zinc-100 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4" id="faq-footer-support">
          <div className="text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block font-semibold">Still have questions?</span>
            <span className="text-xs text-zinc-600 mt-0.5 block">We are here to help you design your ultimate fitness lifestyle.</span>
          </div>
          <a
            href="#contact-section"
            className="px-5 py-2.5 bg-zinc-950 hover:bg-zinc-900 text-white font-bold text-xs rounded-xl border border-zinc-900 transition-colors cursor-pointer"
            id="faq-ask-coach-btn"
          >
            Ask a Coach
          </a>
        </div>

      </div>
    </section>
  );
}
