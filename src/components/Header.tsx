import React, { useState, useEffect } from 'react';
import { Menu, X, Award, ShieldCheck, Dumbbell } from 'lucide-react';

interface HeaderProps {
  onOpenModal: (tab: 'membership' | 'tour') => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMember, setActiveMember] = useState<any>(null);

  const fetchActiveMember = () => {
    const data = localStorage.getItem('healthplex_active_member');
    if (data) {
      try {
        setActiveMember(JSON.parse(data));
      } catch (e) {
        setActiveMember(null);
      }
    } else {
      setActiveMember(null);
    }
  };

  useEffect(() => {
    fetchActiveMember();
    // Listen to custom registration updates
    window.addEventListener('healthplex_membership_updated', fetchActiveMember);

    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('healthplex_membership_updated', fetchActiveMember);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('healthplex_active_member');
    window.dispatchEvent(new Event('healthplex_membership_updated'));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-zinc-900 py-4 shadow-lg'
          : 'bg-gradient-to-b from-black/80 to-transparent py-6'
      }`}
      id="main-header"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo Branding */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, 'hero-section')}
          className="flex items-center gap-2 group cursor-pointer"
          id="logo-link"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-400 flex items-center justify-center text-black font-extrabold shadow-md shadow-emerald-400/20 group-hover:scale-105 transition-transform duration-300">
            <Dumbbell size={20} strokeWidth={2.5} />
          </div>
          <div className="text-left leading-none">
            <span className="font-extrabold text-xl tracking-tight text-white block">
              HEALTH<span className="text-emerald-400">PLEX</span>
            </span>
            <span className="text-[9px] text-zinc-400 tracking-widest font-mono uppercase block mt-0.5">
              FITNESS CENTER
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8" id="desktop-nav">
          {[
            { label: 'Home', id: 'hero-section' },
            { label: 'About', id: 'about-section' },
            { label: 'Perks', id: 'perks-section' },
            { label: 'Team', id: 'team-section' },
            { label: 'Testimonials', id: 'testimonials-section' },
            { label: 'Gallery', id: 'gallery-section' },
            { label: 'FAQ', id: 'faq-section' },
            { label: 'Contact', id: 'contact-section' },
          ].map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className="text-sm font-medium text-zinc-300 hover:text-emerald-400 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Callouts / Active Member details */}
        <div className="hidden lg:flex items-center gap-4" id="header-actions">
          {activeMember ? (
            <div className="flex items-center gap-3 bg-zinc-900/90 border border-zinc-800 rounded-2xl p-1.5 pl-3" id="active-member-widget">
              <div className="text-left">
                <span className="text-[10px] text-zinc-500 font-mono block">MEMBER ACTIVE</span>
                <span className="text-xs font-semibold text-white tracking-wide truncate max-w-[110px] block">
                  {activeMember.name}
                </span>
              </div>
              <button
                onClick={handleSignOut}
                className="text-[10px] font-semibold text-zinc-400 hover:text-emerald-400 px-2.5 py-1.5 bg-zinc-850 hover:bg-zinc-800 border border-zinc-800 rounded-xl transition-all duration-200 cursor-pointer"
                id="sign-out-btn"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={() => onOpenModal('tour')}
                className="text-sm font-medium text-white hover:text-emerald-400 transition-colors duration-200 px-4 py-2 cursor-pointer"
                id="header-schedule-tour-btn"
              >
                Schedule Tour
              </button>
              <button
                onClick={() => onOpenModal('membership')}
                className="bg-emerald-400 hover:bg-emerald-300 text-black text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-300 shadow-md shadow-emerald-400/10 hover:shadow-emerald-400/25 cursor-pointer"
                id="header-join-now-btn"
              >
                Join Now
              </button>
            </>
          )}
        </div>

        {/* Mobile Hamburger toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white transition-colors cursor-pointer"
          id="mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer menu */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed top-[73px] left-0 right-0 bg-black/95 border-b border-zinc-900 px-6 py-8 shadow-2xl space-y-6 max-h-[85vh] overflow-y-auto"
          id="mobile-drawer"
        >
          <div className="flex flex-col gap-4">
            {[
              { label: 'Home', id: 'hero-section' },
              { label: 'About', id: 'about-section' },
              { label: 'Perks', id: 'perks-section' },
              { label: 'Team', id: 'team-section' },
              { label: 'Testimonials', id: 'testimonials-section' },
              { label: 'Gallery', id: 'gallery-section' },
              { label: 'FAQ', id: 'faq-section' },
              { label: 'Contact', id: 'contact-section' },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-base font-semibold text-zinc-200 hover:text-emerald-400 transition-colors duration-200 py-2 border-b border-zinc-900/50"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-900 flex flex-col gap-3" id="mobile-drawer-actions">
            {activeMember ? (
              <div className="bg-zinc-900 border border-zinc-850 rounded-2xl p-4 flex justify-between items-center">
                <div>
                  <span className="text-[10px] text-zinc-500 font-mono block">ACTIVE ACCOUNT ID</span>
                  <span className="text-sm font-bold text-white block mt-0.5">{activeMember.name}</span>
                  <span className="text-xs text-emerald-400 font-mono block mt-0.5">{activeMember.id}</span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="bg-zinc-800 hover:bg-zinc-750 text-zinc-200 text-xs font-semibold px-4 py-2 rounded-xl border border-zinc-700 transition-colors cursor-pointer"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenModal('tour');
                  }}
                  className="w-full text-center border border-zinc-800 hover:border-zinc-700 text-white font-semibold py-3 rounded-xl transition-all cursor-pointer"
                >
                  Schedule Tour
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenModal('membership');
                  }}
                  className="w-full text-center bg-emerald-400 hover:bg-emerald-300 text-black font-extrabold py-3 rounded-xl transition-all shadow-lg shadow-emerald-400/20 cursor-pointer"
                >
                  Join Health Plex
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
