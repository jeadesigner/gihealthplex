import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Perks from './components/Perks';
import WhyChooseUs from './components/WhyChooseUs';
import OwnerSection from './components/OwnerSection';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import FaqSection from './components/FaqSection';
import CallToAction from './components/CallToAction';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import JoinNowFloat from './components/JoinNowFloat';
import MemberModal from './components/MemberModal';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<'membership' | 'tour'>('membership');

  const handleOpenModal = (tab: 'membership' | 'tour') => {
    setModalTab(tab);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-emerald-400 selection:text-black overflow-x-hidden" id="app-root">
      
      {/* Sticky Main Navigation */}
      <Header onOpenModal={handleOpenModal} />

      {/* Main Sections flow */}
      <main id="main-content">
        
        {/* Fullscreen Hero Section */}
        <Hero onOpenModal={handleOpenModal} />

        {/* Informative About Section */}
        <About />

        {/* Premium Membership Perks Grid */}
        <Perks />

        {/* Interactive Stats Dashboard section */}
        <WhyChooseUs />

        {/* Human connection & Owner profile */}
        <OwnerSection />

        {/* Professional Coaches Showcase */}
        <Team />

        {/* Interactive Slider reviews */}
        <Testimonials />

        {/* Full Filterable masonry Media Gallery */}
        <Gallery />

        {/* Accordion FAQ for membership policies, cancellations and guest passes */}
        <FaqSection />

        {/* Eye catching Accent Green CTA Banner */}
        <CallToAction onOpenModal={handleOpenModal} />

        {/* Contact info, staffed hours & interactive Map */}
        <ContactSection />

      </main>

      {/* Structured brand and newsletter footer */}
      <Footer />

      {/* Sticky Floating conversion pills */}
      <JoinNowFloat onClick={() => handleOpenModal('membership')} />

      {/* Back to Top scrolling anchor */}
      <BackToTop />

      {/* Floating WhatsApp contact button */}
      <WhatsAppFloat />

      {/* Single-Instance Member registration and Tour Booking modal */}
      <MemberModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialTab={modalTab}
      />

    </div>
  );
}
