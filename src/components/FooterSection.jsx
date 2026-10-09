import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, ArrowUp, ExternalLink, Check, Copy } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../data/companyData';

// SVG Brand Icons to avoid third-party dependency quirks
const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const CURRENT_YEAR = new Date().getFullYear();

export default function FooterSection() {
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const copyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(COMPANY_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="bg-roasted-brown text-ivory pt-16 pb-12 relative overflow-hidden">
      {/* Decorative top gold hairline */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-golden-amber/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-ivory/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-ivory border border-golden-amber p-0.5 shrink-0">
                <img
                  src={COMPANY_INFO.logo}
                  alt="Jyotiraj Global Logo"
                  className="w-full h-full object-contain"
                  width="48"
                  height="48"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif tracking-[0.14em] text-base font-bold text-ivory uppercase leading-tight">
                  JYOTIRAJ
                </span>
                <span className="text-[0.7rem] tracking-[0.25em] font-medium text-golden-amber uppercase leading-none mt-1">
                  GLOBAL COMPANY
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-ivory/70 leading-relaxed max-w-sm text-left">
              Nature’s finest dry fruits and prospective bilateral trade partnerships, presented with uncompromising quality and authentic Indian warmth.
            </p>

            {/* Live Social Media Icons (Instagram, Facebook & WhatsApp) */}
            <div className="flex items-center gap-3 mt-6">
              {/* WhatsApp direct chat */}
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ivory/10 hover:bg-golden-amber hover:text-roasted-brown text-ivory flex items-center justify-center transition-all duration-200 border border-ivory/15 shadow-sm hover:scale-105"
                aria-label="Contact Jyotiraj Global on WhatsApp"
                title="Chat with Jyotiraj Global on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              {/* Instagram live link */}
              <a
                href={COMPANY_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ivory/10 hover:bg-golden-amber hover:text-roasted-brown text-ivory flex items-center justify-center transition-all duration-200 border border-ivory/15 shadow-sm hover:scale-105"
                aria-label="Visit Jyotiraj Global on Instagram"
                title="Follow Jyotiraj Global on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              {/* Facebook live link */}
              <a
                href={COMPANY_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ivory/10 hover:bg-golden-amber hover:text-roasted-brown text-ivory flex items-center justify-center transition-all duration-200 border border-ivory/15 shadow-sm hover:scale-105"
                aria-label="Visit Jyotiraj Global on Facebook"
                title="Connect with Jyotiraj Global on Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-golden-amber mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-xs sm:text-sm text-ivory/75 hover:text-golden-amber transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Verified Contact Details */}
          <div className="md:col-span-4 text-left">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-golden-amber mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3.5">
              
              {/* Direct Click-to-Email Link */}
              <div className="flex flex-col gap-1">
                <a
                  href={`mailto:${COMPANY_INFO.email}?subject=Inquiry%20-%20Jyotiraj%20Global%20Company`}
                  className="flex items-center gap-3 text-xs sm:text-sm text-ivory/90 hover:text-golden-amber transition-colors group"
                  title="Click to compose email to Jyotiraj Global"
                >
                  <div className="w-7 h-7 rounded-full bg-ivory/10 flex items-center justify-center text-golden-amber shrink-0 group-hover:bg-golden-amber group-hover:text-roasted-brown transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span className="break-all font-medium">{COMPANY_INFO.email}</span>
                </a>

                {/* Secondary Webmail & Copy Shortcut */}
                <div className="flex items-center gap-3 pl-10 text-[0.7rem] text-ivory/60">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${COMPANY_INFO.email}&su=Inquiry%20-%20Jyotiraj%20Global%20Company`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-golden-amber inline-flex items-center gap-1 transition-colors"
                    title="Open directly in Gmail web"
                  >
                    <span>Open in Gmail</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  <span>•</span>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="hover:text-golden-amber inline-flex items-center gap-1 transition-colors cursor-pointer"
                    title="Copy email address"
                  >
                    {copied ? <Check className="w-2.5 h-2.5 text-leaf-green" /> : <Copy className="w-2.5 h-2.5" />}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Direct Click-to-Call Link */}
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-3 text-xs sm:text-sm text-ivory/85 hover:text-golden-amber transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-ivory/10 flex items-center justify-center text-golden-amber shrink-0 group-hover:bg-golden-amber group-hover:text-roasted-brown transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{COMPANY_INFO.phone}</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 text-xs sm:text-sm text-ivory/70">
                <div className="w-7 h-7 rounded-full bg-ivory/10 flex items-center justify-center text-golden-amber shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>{COMPANY_INFO.location}</span>
              </div>
            </div>

            {/* Direct WhatsApp Callout Button */}
            <div className="mt-5">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-golden-amber hover:bg-golden-amber-dark text-roasted-brown font-semibold text-xs tracking-wider uppercase transition-colors shadow-soft"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/50">
          <p>
            &copy; {CURRENT_YEAR} {COMPANY_INFO.name}. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-golden-amber transition-colors cursor-pointer"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
