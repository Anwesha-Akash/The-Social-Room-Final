import React from 'react';
import { ArrowUpRight, Sparkles, Mail, Instagram as InstagramIcon, Linkedin, Heart } from 'lucide-react';
import { siteContent } from '../data/content';

export default function Footer({ onOpenBooking, onOpenCareers }) {
  const { logo, tagline, links, socials, nudge, copyright } = siteContent.footer;

  return (
    <footer 
      id="footer" 
      className="bg-ink text-white pt-16 pb-12 border-t border-ink-700 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Brand Statement & Next Steps Nudge */}
        <div className="pb-12 border-b border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-crimson">
              <span className="w-2 h-2 rounded-full bg-crimson"></span>
              <span>The Social Room · Personal Branding Partner</span>
            </div>
            <p className="text-2xl sm:text-3xl font-serif text-white font-normal italic">
              “{tagline}”
            </p>
          </div>

          <div>
            <button
              onClick={onOpenBooking}
              className="bg-crimson hover:bg-crimson-dark text-white px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 inline-flex items-center gap-2 group"
            >
              <span>{nudge}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Middle Navigation & Contact Grid */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-crimson flex items-center justify-center text-white text-xs font-serif font-bold">
                TSR
              </div>
              <span className="font-serif tracking-tight text-xl font-bold uppercase text-white">
                {logo}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-sm">
              India-based personal branding partner for visionary tech founders, executives, and creators. We handle strategy, scripts, and video editing in 2 hours a month.
            </p>
            <div className="pt-2 text-xs font-mono text-white/50">
              Operating globally · Headquartered in India · ₹ INR Pricing
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-white/50 font-bold">
              Navigation
            </p>
            <ul className="space-y-2 text-sm text-white/80">
              {links.map((link) => (
                <li key={link.name}>
                  {link.name === 'Careers' ? (
                    <button
                      onClick={onOpenCareers}
                      className="hover:text-white hover:underline underline-offset-4 transition-colors flex items-center gap-1.5 focus:outline-none"
                    >
                      <span>Careers</span>
                      <span className="text-[9px] uppercase font-mono bg-crimson px-1.5 py-0.2 rounded text-white font-bold">
                        Hiring
                      </span>
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="hover:text-white hover:underline underline-offset-4 transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-white/50 font-bold">
              Connect Directly
            </p>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <a
                  href="mailto:hello@thesocialroom.co"
                  className="inline-flex items-center gap-2 hover:text-crimson transition-colors"
                >
                  <Mail className="w-4 h-4 text-white/60" />
                  <span>hello@thesocialroom.co</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-crimson transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-white/60" />
                  <span>@thesocialroom.agency</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-crimson transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-white/60" />
                  <span>The Social Room (LinkedIn)</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>{copyright}</p>
          <div className="flex items-center gap-6">
            <span>Built with React & Tailwind CSS</span>
            <span>·</span>
            <span>Vercel Ready</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
