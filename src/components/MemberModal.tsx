import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Award, Calendar, Sparkles, User, Mail, Phone, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

interface MemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'membership' | 'tour';
}

export default function MemberModal({ isOpen, onClose, initialTab = 'membership' }: MemberModalProps) {
  const [activeTab, setActiveTab] = useState<'membership' | 'tour'>(initialTab);
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'premium' | 'vip'>('basic');
  const [guide, setGuide] = useState<string>('Any Available');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '10:00 AM',
    terms: false,
  });
  const [memberId, setMemberId] = useState('');

  // Sync active tab when initialTab change is triggered
  React.useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const plans = {
    basic: { name: 'Standard Access', price: '$30', interval: 'month', desc: '$1 a day. World-class equipment, unlimited classes, 24/7 access.' },
    premium: { name: 'Premium Recovery', price: '$45', interval: 'month', desc: 'Adds free tanning, custom dry sauna, and deep-heat whirlpool access.' },
    vip: { name: 'VIP Performance', price: '$75', interval: 'month', desc: 'Adds 2 monthly private personal training sessions and athletic evaluation.' },
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    // Generate member id
    const randomId = 'HP-' + Math.floor(100000 + Math.random() * 900000);
    setMemberId(randomId);

    // Save registration to local storage
    const registration = {
      id: randomId,
      type: activeTab,
      plan: activeTab === 'membership' ? plans[selectedPlan].name : null,
      price: activeTab === 'membership' ? plans[selectedPlan].price : null,
      date: formData.date || new Date().toISOString().split('T')[0],
      time: activeTab === 'tour' ? formData.time : null,
      guide: activeTab === 'tour' ? guide : null,
      name: formData.name,
      email: formData.email,
    };

    localStorage.setItem('healthplex_active_member', JSON.stringify(registration));
    // Trigger custom event to notify App component
    window.dispatchEvent(new Event('healthplex_membership_updated'));

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '10:00 AM',
      terms: false,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
          id="modal-backdrop"
        />

        {/* Modal Content Wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-3xl p-6 md:p-8 shadow-2xl shadow-emerald-500/10 z-10 text-white"
          id="modal-container"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors duration-200"
            id="close-modal-btn"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {!submitted ? (
            <>
              {/* Tabs selector */}
              <div className="flex border-b border-zinc-800 mb-6 pb-2" id="modal-tabs">
                <button
                  onClick={() => { setActiveTab('membership'); }}
                  className={`relative pb-3 text-lg font-semibold px-4 transition-colors duration-200 ${
                    activeTab === 'membership' ? 'text-emerald-400' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                  id="tab-become-member"
                >
                  Become a Member
                  {activeTab === 'membership' && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400"
                    />
                  )}
                </button>
                <button
                  onClick={() => { setActiveTab('tour'); }}
                  className={`relative pb-3 text-lg font-semibold px-4 transition-colors duration-200 ${
                    activeTab === 'tour' ? 'text-emerald-400' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                  id="tab-schedule-tour"
                >
                  Schedule a Tour
                  {activeTab === 'tour' && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400"
                    />
                  )}
                </button>
              </div>

              {/* Form title */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold font-sans text-white">
                  {activeTab === 'membership' ? 'Select Your Membership Tier' : 'Book a Premium Facility Tour'}
                </h3>
                <p className="text-zinc-400 text-sm mt-1">
                  {activeTab === 'membership'
                    ? 'Start your journey today at Grand Island’s premier health club.'
                    : 'Experience our 12,000 sq ft space, meet our trainers and get a complimentary day pass.'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {activeTab === 'membership' ? (
                  /* Membership Selection Grid */
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3" id="plan-selection-grid">
                    {(['basic', 'premium', 'vip'] as const).map(planKey => {
                      const plan = plans[planKey];
                      const isSelected = selectedPlan === planKey;
                      return (
                        <div
                          key={planKey}
                          onClick={() => setSelectedPlan(planKey)}
                          className={`relative cursor-pointer p-4 rounded-2xl border transition-all duration-300 ${
                            isSelected
                              ? 'bg-emerald-950/40 border-emerald-400 shadow-lg shadow-emerald-500/10'
                              : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
                          }`}
                          id={`plan-card-${planKey}`}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <span className={`text-xs font-semibold uppercase tracking-wider ${
                              isSelected ? 'text-emerald-400' : 'text-zinc-500'
                            }`}>
                              {planKey}
                            </span>
                            {isSelected && (
                              <span className="p-0.5 rounded-full bg-emerald-400 text-black">
                                <Check size={12} strokeWidth={3} />
                              </span>
                            )}
                          </div>
                          <h4 className="font-bold text-base text-white">{plan.name}</h4>
                          <div className="my-2 flex items-baseline">
                            <span className="text-2xl font-extrabold text-white">{plan.price}</span>
                            <span className="text-zinc-500 text-xs ml-1">/{plan.interval}</span>
                          </div>
                          <p className="text-[11px] leading-relaxed text-zinc-400">{plan.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  /* Tour Selection Fields */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="tour-details-grid">
                    <div>
                      <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Preferred Guide</label>
                      <select
                        name="guide"
                        value={guide}
                        onChange={(e) => setGuide(e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white text-sm focus:border-emerald-400 focus:outline-none transition-colors duration-200"
                        id="guide-select"
                      >
                        <option value="Any Available">Any Available Guide</option>
                        <option value="Scott Norton (Owner & CEO)">Scott Norton (Owner)</option>
                        <option value="Sam Murphy (General Manager)">Sam Murphy (General Manager)</option>
                        <option value="Shari Cole (Trainer)">Shari Cole (Trainer)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Tour Time Slot</label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white text-sm focus:border-emerald-400 focus:outline-none transition-colors duration-200"
                        id="tour-time-select"
                      >
                        <option value="09:00 AM">09:00 AM (Morning)</option>
                        <option value="11:00 AM">11:00 AM (Morning)</option>
                        <option value="02:00 PM">02:00 PM (Afternoon)</option>
                        <option value="04:00 PM">04:00 PM (Afternoon)</option>
                        <option value="06:30 PM">06:30 PM (Evening)</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Common Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="modal-common-fields">
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
                      <User size={16} />
                    </span>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-11 pr-4 py-3 text-white placeholder-zinc-500 text-sm focus:border-emerald-400 focus:outline-none transition-all duration-200"
                      id="modal-input-name"
                    />
                  </div>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
                      <Mail size={16} />
                    </span>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Your Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-11 pr-4 py-3 text-white placeholder-zinc-500 text-sm focus:border-emerald-400 focus:outline-none transition-all duration-200"
                      id="modal-input-email"
                    />
                  </div>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
                      <Phone size={16} />
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-11 pr-4 py-3 text-white placeholder-zinc-500 text-sm focus:border-emerald-400 focus:outline-none transition-all duration-200"
                      id="modal-input-phone"
                    />
                  </div>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
                      <Calendar size={16} />
                    </span>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-11 pr-4 py-3 text-white placeholder-zinc-500 text-sm focus:border-emerald-400 focus:outline-none transition-all duration-200"
                      id="modal-input-date"
                    />
                  </div>
                </div>

                {/* Terms and conditions */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="terms"
                    id="modal-terms-checkbox"
                    required
                    checked={formData.terms}
                    onChange={handleInputChange}
                    className="mt-1 rounded border-zinc-800 text-emerald-500 focus:ring-emerald-500 bg-zinc-900"
                  />
                  <label htmlFor="modal-terms-checkbox" className="text-xs text-zinc-400 leading-normal cursor-pointer select-none">
                    I agree to the Health Plex terms of service, consent to receive communications regarding my fitness registration, and acknowledge that membership cards can be retrieved at any time.
                  </label>
                </div>

                {/* CTA Action button */}
                <button
                  type="submit"
                  className="w-full bg-emerald-400 hover:bg-emerald-300 text-black font-semibold rounded-xl py-4 transition-all duration-300 shadow-lg shadow-emerald-400/20 hover:shadow-emerald-400/30 flex items-center justify-center gap-2 cursor-pointer group"
                  id="modal-submit-btn"
                >
                  <span>
                    {activeTab === 'membership' ? `Activate ${plans[selectedPlan].name}` : 'Confirm Tour Booking'}
                  </span>
                  <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </>
          ) : (
            /* Successful Registration Screen */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6"
              id="modal-success-screen"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-400/10 text-emerald-400 mb-6">
                <Award size={36} />
              </div>

              <h3 className="text-3xl font-extrabold text-white mb-2 tracking-tight">
                {activeTab === 'membership' ? 'Welcome to the Plex!' : 'Tour Scheduled Successfully!'}
              </h3>
              <p className="text-zinc-400 text-sm max-w-md mx-auto mb-8">
                {activeTab === 'membership'
                  ? 'Your digital membership credentials have been successfully activated. Present this card at the front desk upon arrival.'
                  : `Your complimentary facility tour with ${guide} has been confirmed. A guest pass has been generated below.`}
              </p>

              {/* Membership Card Visual */}
              <div
                className="max-w-sm mx-auto bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-6 shadow-xl relative overflow-hidden text-left mb-8"
                id="digital-member-card"
              >
                {/* Accent glow corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-emerald-400 font-bold tracking-widest text-xs uppercase">Health Plex</h4>
                    <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-mono">Fitness Center</span>
                  </div>
                  <div className="px-2.5 py-1 bg-emerald-400/10 rounded-full text-emerald-400 text-[10px] font-mono font-medium flex items-center gap-1">
                    <ShieldCheck size={12} />
                    {activeTab === 'membership' ? 'ACTIVE MEMBER' : 'VIP GUEST'}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-[9px] text-zinc-500 uppercase font-mono block">CARD HOLDER</span>
                    <span className="text-base font-bold text-white tracking-wide">{formData.name}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[9px] text-zinc-500 uppercase font-mono block">MEMBER ID</span>
                      <span className="text-sm font-bold font-mono text-zinc-200">{memberId}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-zinc-500 uppercase font-mono block">START DATE</span>
                      <span className="text-sm font-bold font-mono text-zinc-200">
                        {formData.date || new Date().toISOString().split('T')[0]}
                      </span>
                    </div>
                  </div>

                  {activeTab === 'tour' && (
                    <div className="grid grid-cols-2 gap-4 pt-1 border-t border-zinc-800/50">
                      <div>
                        <span className="text-[9px] text-zinc-500 uppercase font-mono block">TIME SLOT</span>
                        <span className="text-xs font-semibold text-emerald-400">{formData.time}</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-zinc-500 uppercase font-mono block">ASSIGNED GUIDE</span>
                        <span className="text-xs font-semibold text-zinc-200 truncate block">{guide.split(' ')[0]}</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'membership' && (
                    <div>
                      <span className="text-[9px] text-zinc-500 uppercase font-mono block">TIER PLAN</span>
                      <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                        <Sparkles size={12} />
                        {plans[selectedPlan].name} ({plans[selectedPlan].price}/mo)
                      </span>
                    </div>
                  )}
                </div>

                {/* Code Scanner Simulation */}
                <div className="flex items-center justify-between pt-4 border-t border-zinc-800/80">
                  <div className="text-[8px] text-zinc-600 font-mono tracking-wider">
                    SCAN AT ENTRANCE GATE • 24/7 ACCESS
                  </div>
                  {/* Mock barcode lines */}
                  <div className="flex gap-0.5 h-6 opacity-80 bg-white p-1 rounded-sm" id="mock-barcode">
                    {[1, 3, 1, 2, 4, 1, 3, 2, 1, 2, 1, 4, 1].map((w, idx) => (
                      <div
                        key={idx}
                        className="bg-black h-full"
                        style={{ width: `${w}px` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Reset / close */}
              <button
                onClick={handleReset}
                className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white font-medium rounded-xl px-8 py-3.5 transition-colors duration-200 inline-flex items-center gap-2 cursor-pointer"
                id="modal-done-btn"
              >
                <span>Done, close screen</span>
                <Check size={16} />
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
