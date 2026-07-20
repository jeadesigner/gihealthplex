import React from 'react';
import { Facebook, Instagram, Youtube, Dumbbell, ArrowUp, ArrowRight } from 'lucide-react';

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
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

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-white pt-20 pb-8 relative overflow-hidden" id="main-footer">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16" id="footer-layout-grid">
          
          {/* Column 1 - Brand Identity block */}
          <div className="md:col-span-5 space-y-6">
            <a
              href="#hero-section"
              onClick={(e) => handleNavClick(e, 'hero-section')}
              className="flex items-center gap-2 group cursor-pointer w-fit"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-400 flex items-center justify-center text-black font-extrabold shadow-md shadow-emerald-400/20">
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
            
            <p className="text-zinc-400 text-xs md:text-sm max-w-sm leading-relaxed">
              Grand Island’s premier health and fitness destination. Founded in 1982, we provide elite equipment, 24/7 access, and private recovery zones in a welcoming, family-oriented atmosphere.
            </p>

            {/* Social media icons */}
            <div className="flex items-center gap-3 pt-2" id="footer-social-row">
              {[
                { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-emerald-400 hover:text-black hover:border-emerald-400 text-zinc-400 transition-all duration-300 flex items-center justify-center cursor-pointer"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 font-mono">
              Quick Links
            </h3>
            
            <ul className="grid grid-cols-1 gap-3 text-sm" id="footer-links-list">
              {[
                { label: 'Home', id: 'hero-section' },
                { label: 'About', id: 'about-section' },
                { label: 'Membership Perks', id: 'perks-section' },
                { label: 'Our Team', id: 'team-section' },
                { label: 'Testimonials', id: 'testimonials-section' },
                { label: 'Gallery', id: 'gallery-section' },
                { label: 'FAQ', id: 'faq-section' },
                { label: 'Contact', id: 'contact-section' },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className="text-zinc-400 hover:text-emerald-400 transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all text-emerald-400 font-bold">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Newsletter Callout */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 font-mono">
              Join Our Newsletter
            </h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Subscribe to receive training schedules, nutrition tips, and special member events directly in your inbox.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing to the Health Plex Newsletter!');
                (e.target as HTMLFormElement).reset();
              }}
              className="relative flex"
              id="footer-newsletter-form"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-500 text-xs focus:border-emerald-400 focus:outline-none pr-12"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-3 bg-emerald-400 hover:bg-emerald-300 text-black font-bold rounded-lg transition-colors flex items-center justify-center cursor-pointer"
                aria-label="Subscribe"
              >
                <ArrowRight size={14} />
              </button>
            </form>
          </div>

        </div>

        {/* Divider and Legal block */}
        <div className="pt-8 border-t border-zinc-900 text-center flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-zinc-500 text-xs">
          <p>© 2026 Health Plex Fitness Center. All Rights Reserved.</p>
          
          {/* Creator WhatsApp Link / Portfolio Badge */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-2 md:mt-0">
            <span className="font-mono text-[10px] tracking-widest text-zinc-600">
              DESIGNED FOR THE ATHLETIC ELITE
            </span>
            <span className="hidden sm:inline text-zinc-800">|</span>
            <a 
              href="https://wa.me/5531971667389?text=Ol%C3%A1%21%20Gostaria%20de%20criar%20um%20site%20profissional%20como%20o%20da%20Health%20Plex."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-all duration-300 group hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]"
              id="whatsapp-creator-signature"
              title="Fale direto pelo WhatsApp"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-bold tracking-wide">
                Estou Online! Vamos criar seu site?
              </span>
              <svg 
                className="w-3.5 h-3.5 fill-current text-emerald-400 group-hover:scale-115 transition-transform" 
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
