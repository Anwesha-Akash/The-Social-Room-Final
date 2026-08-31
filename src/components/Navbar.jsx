import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, MoreVertical, Sparkles, ArrowUpRight, Briefcase } from 'lucide-react';
import { siteContent } from '../data/content';

export default function Navbar({ onOpenBooking, onOpenCareers }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [kebabOpen, setKebabOpen] = useState(false);
  const kebabRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (kebabRef.current && !kebabRef.current.contains(event.target)) {
        setKebabOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#founders' },
    { name: 'Contact Us', href: '#book-call' },
  ];

  return (
    <header 
      id="navbar"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-hairline py-3.5' 
          : 'bg-white border-b border-hairline/60 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#hero" 
            className="group flex items-center gap-2 text-ink focus:outline-none"
          >
            <div className="w-8 h-8 rounded bg-ink flex items-center justify-center text-white text-xs font-bold tracking-tighter group-hover:bg-crimson transition-colors duration-200">
              <span className="font-serif italic text-base">TSR</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-tight text-lg sm:text-xl font-bold uppercase leading-none text-ink">
                THE SOCIAL ROOM
              </span>
              <span className="text-[9px] font-sans uppercase tracking-widest text-stone font-semibold mt-0.5">
                Personal Branding
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-ink">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone hover:text-ink transition-colors duration-150 relative py-1 hover:font-semibold"
              >
                {link.name}
              </a>
            ))}

            {/* Kebab (Three-dot) Menu */}
            <div className="relative" ref={kebabRef}>
              <button
                type="button"
                onClick={() => setKebabOpen(!kebabOpen)}
                aria-label="More options"
                aria-expanded={kebabOpen}
                className="p-1.5 rounded-full text-stone hover:text-ink hover:bg-tint transition-colors focus:outline-none"
              >
                <MoreVertical className="w-4 h-4" />
              </button>

              {kebabOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-hairline rounded-lg shadow-lg py-1.5 z-50 animate-fade-in">
                  <button
                    onClick={() => {
                      setKebabOpen(false);
                      onOpenCareers();
                    }}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm font-medium text-ink hover:bg-tint hover:text-crimson transition-colors flex items-center justify-between"
                  >
                    <span className="flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5 text-stone" />
                      Careers
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider bg-tint text-stone px-1.5 py-0.5 rounded">
                      Hiring
                    </span>
                  </button>
                  <a
                    href="#faq"
                    onClick={() => setKebabOpen(false)}
                    className="block px-4 py-2 text-xs sm:text-sm font-medium text-ink hover:bg-tint transition-colors"
                  >
                    FAQ
                  </a>
                  <a
                    href="#why-us"
                    onClick={() => setKebabOpen(false)}
                    className="block px-4 py-2 text-xs sm:text-sm font-medium text-ink hover:bg-tint transition-colors"
                  >
                    Why Us
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="bg-crimson hover:bg-crimson-dark text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow active:scale-95 flex items-center gap-1.5 focus:outline-none"
            >
              <span>Book a call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button & CTA */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="bg-crimson hover:bg-crimson-dark text-white px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors"
            >
              Book a call
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="p-2 text-ink hover:bg-tint rounded-md transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-hairline px-4 pt-3 pb-6 space-y-3 animate-fade-in shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-ink hover:bg-tint transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCareers();
              }}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-ink hover:bg-tint transition-colors flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-stone" />
                Careers
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider bg-tint text-stone px-2 py-0.5 rounded">
                We're Hiring
              </span>
            </button>
          </div>

          <div className="pt-3 border-t border-hairline">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-crimson hover:bg-crimson-dark text-white py-3 rounded-full text-sm font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2"
            >
              <span>Book a discovery call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
