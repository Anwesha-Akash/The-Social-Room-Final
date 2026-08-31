import React from 'react';
import { ArrowRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { siteContent } from '../data/content';

export default function Process({ onOpenBooking }) {
  const { heading, subheading, steps } = siteContent.process;

  return (
    <section 
      id="process" 
      className="py-20 sm:py-28 bg-ink text-white relative overflow-hidden"
    >
      {/* Background Decorative Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 border-x border-white/20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 pb-6 border-b border-white/10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-crimson mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson" />
            <span>07 · How It Works</span>
          </div>

          {/* Locked Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight">
            Five steps. <br className="hidden sm:inline" />
            <span className="italic font-normal text-white/90">Two hours of your month.</span>
          </h2>

          <p className="mt-4 text-base text-white/70 max-w-xl">
            {subheading} We do all the heavy lifting—from scriptwriting to post-production—so you only invest 120 minutes every 30 days.
          </p>
        </div>

        {/* Stepped Process Cards (Desktop Horizontal Stepped Composition / Mobile Stacked) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-5">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className={`relative bg-ink-700/80 backdrop-blur-sm border border-white/15 p-6 sm:p-7 rounded-2xl flex flex-col justify-between hover:border-crimson hover:bg-ink-700 transition-all duration-300 group ${
                // Stepped vertical offset on larger screens to mirror wireframe stepped-card layout
                idx === 1 ? 'md:translate-y-2' : ''
              } ${
                idx === 2 ? 'md:translate-y-4' : ''
              } ${
                idx === 3 ? 'md:translate-y-6' : ''
              } ${
                idx === 4 ? 'md:translate-y-8' : ''
              }`}
            >
              <div>
                {/* Step Number & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-white/50 group-hover:text-crimson transition-colors">
                    STEP {step.number}
                  </span>
                  {idx === 2 && (
                    <span className="bg-crimson text-white text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full">
                      2h Recording
                    </span>
                  )}
                </div>

                {/* Step Title */}
                <h3 className="text-xl sm:text-2xl font-serif text-white mb-3 group-hover:text-white transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step Detail Footer */}
              <div className="mt-8 pt-4 border-t border-white/10">
                <p className="text-[11px] text-white/50 leading-normal">
                  {step.detail}
                </p>
              </div>

              {/* Connecting arrow indicator for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-white/30 group-hover:text-crimson transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Process Reassurance Note */}
        <div className="mt-16 sm:mt-24 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-crimson shrink-0" />
            <p className="text-sm sm:text-base text-white/90">
              <strong className="text-white">Total Founder Commitment:</strong> Exactly one 2-hour remote session per month.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="bg-crimson hover:bg-crimson-dark text-white px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
          >
            <span>Book discovery call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
