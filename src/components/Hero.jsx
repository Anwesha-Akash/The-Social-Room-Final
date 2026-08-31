import React from 'react';
import { ArrowUpRight, Sparkles, Play, CheckCircle2 } from 'lucide-react';
import { siteContent } from '../data/content';

export default function Hero({ onOpenBooking, onOpenServices }) {
  return (
    <section 
      id="hero" 
      className="relative bg-hero-backdrop bg-graph-paper pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 overflow-hidden border-b border-hairline"
    >
      {/* Editorial Decorative Grid Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex justify-between border-x border-hairline/50">
          <div className="border-r border-hairline/40 h-full w-1/4 hidden md:block"></div>
          <div className="border-r border-hairline/40 h-full w-1/4 hidden md:block"></div>
          <div className="border-r border-hairline/40 h-full w-1/4 hidden md:block"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow / Positioning Tag */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-hairline/70">
          <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-hairline text-xs font-semibold text-ink shadow-xs">
            <span className="w-2 h-2 rounded-full bg-crimson"></span>
            <span className="text-stone font-medium">Positioning:</span>
            <span className="font-semibold text-ink italic">“We’re not a content agency. We’re your personal branding partner.”</span>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-medium text-stone tracking-wide">
            <span>Strategy</span>
            <span className="text-crimson font-bold">→</span>
            <span>Script</span>
            <span className="text-crimson font-bold">→</span>
            <span>Shoot</span>
            <span className="text-crimson font-bold">→</span>
            <span>Edit</span>
            <span className="text-crimson font-bold">→</span>
            <span className="text-ink font-semibold">Grow</span>
          </div>
        </div>

        {/* Main Grid: Editorial Typography Left, Polaroid & Visual Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Sub-line, CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Sparkle Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-crimson">
              <Sparkles className="w-4 h-4 text-crimson fill-crimson" />
              <span>Instagram-First Personal Branding for Founders</span>
            </div>

            {/* Locked Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-ink tracking-tight leading-[1.08]">
              Your Story, <br />
              <span className="italic font-normal">we help you</span>{" "}
              <span className="text-crimson font-serif underline decoration-crimson/30 underline-offset-8">
                say it.
              </span>
            </h1>

            {/* Locked Sub-line */}
            <p className="text-base sm:text-lg md:text-xl text-stone font-normal leading-relaxed max-w-2xl">
              You focus on building the business. We’ll build your personal brand, so the right people finally know the founder behind it.
            </p>

            {/* CTAs and Reassurance Proof */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="bg-crimson hover:bg-crimson-dark text-white px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2 group"
              >
                <span>Book a call</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenServices}
                className="bg-white hover:bg-tint text-ink border border-hairline px-6 py-4 rounded-full text-sm font-medium transition-colors duration-150 text-center"
              >
                How we work (2 hrs/mo)
              </button>
            </div>

            {/* Value Highlights */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-hairline/80 max-w-lg">
              <div>
                <p className="text-lg sm:text-xl font-bold font-serif text-ink">2 Hours</p>
                <p className="text-xs text-stone">Monthly founder time</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold font-serif text-ink">16 Reels</p>
                <p className="text-xs text-stone">Fully scripted & edited</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold font-serif text-ink">100%</p>
                <p className="text-xs text-stone">Authentic founder voice</p>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Polaroid Photo Treatment with Tilted Crimson CTA */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Background Graphic Accents */}
            <div className="relative w-full max-w-md">
              
              {/* Stacked Underlay Card */}
              <div className="absolute inset-0 bg-ink/5 rounded-2xl transform rotate-3 scale-95 translate-y-3"></div>

              {/* Main Polaroid Frame */}
              <div className="relative bg-white p-4 sm:p-5 pb-6 sm:pb-7 rounded-2xl border border-hairline polaroid-card">
                
                {/* Image Container */}
                <div className="relative rounded-xl overflow-hidden bg-tint aspect-4/3 sm:aspect-4/3 border border-hairline/50">
                  <img
                    src="/images/hero.jpg"
                    alt="The Social Room Founders in studio"
                    className="w-full h-full object-cover grayscale contrast-110 hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Subtle Studio Watermark Badge */}
                  <div className="absolute bottom-3 left-3 bg-ink/80 backdrop-blur-sm text-white/90 px-2.5 py-1 rounded text-[10px] font-mono tracking-wider">
                    STUDIO.01 · FOUNDER RECORDING
                  </div>
                </div>

                {/* Polaroid Bottom Caption */}
                <div className="mt-4 flex items-center justify-between text-xs text-stone px-1">
                  <div className="flex flex-col">
                    <span className="font-serif italic text-ink font-medium text-sm">Strategy → Script → Shoot → Edit → Grow</span>
                    <span className="text-[10px] text-stone mt-0.5">The Social Room · Personal Branding</span>
                  </div>
                  <span className="text-crimson font-serif text-sm">✦</span>
                </div>

                {/* TILTED CRIMSON "BOOK A CALL" CTA OVER THE POLAROID (Exact brief requirement) */}
                <button
                  onClick={onOpenBooking}
                  className="absolute -top-4 -right-3 sm:-top-5 sm:-right-4 bg-crimson hover:bg-crimson-dark text-white px-5 py-3 rounded-xl shadow-xl transform rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-200 text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-white flex items-center gap-2 group z-20"
                >
                  <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                  <span>Book a call</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

              </div>

              {/* Floating Social Proof Pill */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-white border border-hairline shadow-lg px-4 py-2.5 rounded-xl flex items-center gap-3 z-20">
                <div className="flex -space-x-2">
                  <img className="w-7 h-7 rounded-full border-2 border-white object-cover grayscale" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Founder avatar" />
                  <img className="w-7 h-7 rounded-full border-2 border-white object-cover grayscale" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Founder avatar" />
                  <img className="w-7 h-7 rounded-full border-2 border-white object-cover grayscale" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80" alt="Founder avatar" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-ink leading-none">Top 1% Founders</p>
                  <p className="text-[9px] text-stone mt-0.5">Scale with zero friction</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
