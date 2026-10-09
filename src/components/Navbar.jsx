import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../data/companyData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory/95 backdrop-blur-md shadow-soft py-2.5 border-b border-taupe-light/70'
          : 'bg-ivory py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3.5 group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-golden-amber rounded-md"
            aria-label="Jyotiraj Global Company - Return to top"
          >
            {/* Logo Image */}
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-ivory border border-golden-amber/40 shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img
                src={COMPANY_INFO.logo}
                alt="Jyotiraj Global Company Monogram Logo"
                className="w-full h-full object-contain p-0.5"
                width="48"
                height="48"
                loading="eager"
              />
            </div>

            {/* Typography */}
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.14em] text-sm sm:text-base font-bold text-brand-brown uppercase leading-tight group-hover:text-roasted-brown transition-colors">
                Jyotiraj
              </span>
              <span className="text-[0.68rem] sm:text-[0.72rem] tracking-[0.28em] font-medium text-golden-amber uppercase leading-none mt-0.5">
                Global Company
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-brand-brown/85 hover:text-brand-brown hover:bg-cream/60 rounded-full transition-all duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-ivory bg-brand-brown hover:bg-roasted-brown rounded-full border border-brand-brown hover:border-roasted-brown transition-all duration-200 shadow-soft hover:shadow-elevated active:scale-95"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-golden-amber" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-brand-brown hover:bg-cream/80 transition-colors focus:outline-none focus:ring-2 focus:ring-golden-amber"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ivory border-b border-taupe-light shadow-elevated px-4 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-brand-brown hover:bg-cream rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-taupe-light/70 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-ivory bg-brand-brown rounded-full"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-golden-amber" />
              </a>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-brand-brown bg-cream border border-golden-amber/40 rounded-full"
              >
                <Phone className="w-3.5 h-3.5 text-leaf-green" />
                <span>Quick WhatsApp Inquiry</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
