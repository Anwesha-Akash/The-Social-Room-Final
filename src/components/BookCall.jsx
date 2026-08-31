import React from 'react';
import { ArrowUpRight, Sparkles, Calendar, Clock, CheckCircle2 } from 'lucide-react';
import { siteContent } from '../data/content';

export default function BookCall({ onOpenBooking }) {
  return (
    <section 
      id="book-call" 
      className="py-20 sm:py-28 bg-crimson text-white relative overflow-hidden"
    >
      {/* Subtle Geometric Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex justify-between border-x border-white/30">
          <div className="w-1/3 border-r border-white/20 h-full"></div>
          <div className="w-1/3 border-r border-white/20 h-full"></div>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-6 border border-white/20">
          <Sparkles className="w-3.5 h-3.5 fill-white" />
          <span>10 · Free 20-Minute Discovery Call</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-tight mb-6">
          Ready to build your <br className="hidden sm:inline" />
          <span className="italic font-normal">personal brand?</span>
        </h2>

        {/* Sub-line */}
        <p className="text-base sm:text-xl text-white/90 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
          Let’s talk about your story. We’ll break down your founder narrative, pinpoint your content pillars, and show you exactly what two hours a month looks like.
        </p>

        {/* Action Button & Value Props */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto bg-white hover:bg-tint text-ink hover:text-crimson px-10 py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-xl hover:shadow-2xl active:scale-95 flex items-center justify-center gap-2 group"
          >
            <span>Book a call</span>
            <ArrowUpRight className="w-4 h-4 text-crimson group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Reassurance Badges */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-white/80 font-medium">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>20 Minutes · Zero Pressure</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Direct with Founders</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>Custom Narrative Blueprint</span>
          </div>
        </div>

      </div>
    </section>
  );
}
