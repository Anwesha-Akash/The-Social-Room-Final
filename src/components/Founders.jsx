import React from 'react';
import { Sparkles, ArrowUpRight, Quote } from 'lucide-react';
import { siteContent } from '../data/content';

export default function Founders({ onOpenBooking }) {
  return (
    <section 
      id="founders" 
      className="py-20 sm:py-28 bg-white border-b border-hairline relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Eyebrow & Title */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-crimson mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson" />
            <span>05 · Founder Intro</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink tracking-tight">
            The strategists and storytellers <br />
            <span className="italic font-normal">behind your personal brand.</span>
          </h2>
          <p className="mt-4 text-base text-stone leading-relaxed">
            We don't outsource your voice to junior copywriters. You work directly with the founders of The Social Room from strategy through to execution.
          </p>
        </div>

        {/* Two Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {siteContent.founders.map((founder, idx) => (
            <div 
              key={founder.name}
              className="bg-tint rounded-3xl p-6 sm:p-8 border border-hairline flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                {/* Photo & Badge */}
                <div className="relative aspect-4/5 rounded-2xl overflow-hidden mb-6 bg-white border border-hairline/60">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover grayscale contrast-105 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-mono font-medium text-ink border border-hairline">
                    0{idx + 1} · FOUNDER
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-serif text-ink tracking-tight">
                    {founder.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-crimson font-sans">
                    {founder.role}
                  </p>
                  <p className="text-sm text-stone leading-relaxed pt-2">
                    {founder.bio}
                  </p>
                </div>
              </div>

              {/* Founder Focus Pillars */}
              <div className="mt-6 pt-6 border-t border-hairline">
                <p className="text-[11px] uppercase tracking-wider font-mono text-stone font-semibold">
                  Core Focus
                </p>
                <p className="text-xs text-ink font-medium mt-1">
                  {founder.focus}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Founder Story Banner */}
        <div className="mt-12 bg-ink text-white p-8 sm:p-10 rounded-3xl relative overflow-hidden">
          <div className="relative z-10 max-w-4xl space-y-4">
            <div className="flex items-center gap-2 text-crimson text-xs uppercase tracking-widest font-mono">
              <Quote className="w-4 h-4 text-crimson fill-crimson" />
              <span>Why We Started The Social Room</span>
            </div>
            <p className="text-lg sm:text-xl font-serif leading-relaxed text-white/95 italic">
              "{siteContent.founderStory}"
            </p>
            <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-white/30"></span>
                <span className="text-xs text-white/70 tracking-wider uppercase font-mono">Annapurna & Shraddha</span>
              </div>
              <button
                onClick={onOpenBooking}
                className="bg-crimson hover:bg-crimson-dark text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
              >
                <span>Talk to founders</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
