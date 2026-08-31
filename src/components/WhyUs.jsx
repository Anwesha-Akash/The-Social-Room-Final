import React from 'react';
import { CheckCircle2, Shield, Sparkles, Clock, Target, Users, Zap } from 'lucide-react';
import { siteContent } from '../data/content';

export default function WhyUs({ onOpenBooking }) {
  const { heading, tagline, reassurances } = siteContent.whyUs;

  return (
    <section 
      id="why-us" 
      className="py-20 sm:py-28 bg-white border-b border-hairline relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 pb-6 border-b border-hairline">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-crimson mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson" />
            <span>09 · Why Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink tracking-tight">
            {heading}
          </h2>

          <div className="mt-4 inline-block bg-tint border border-hairline px-4 py-2 rounded-xl text-sm sm:text-base font-serif italic text-ink font-medium">
            “{tagline}”
          </div>
        </div>

        {/* Reassurance Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reassurances.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-hairline p-7 rounded-2xl hover:border-ink/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Check Icon & Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-tint flex items-center justify-center text-crimson group-hover:bg-crimson group-hover:text-white transition-colors duration-200">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-stone">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-serif font-bold text-ink mb-3 group-hover:text-crimson transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-stone leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-hairline/60 flex items-center gap-2 text-xs font-mono text-stone">
                <span className="w-1.5 h-1.5 rounded-full bg-crimson"></span>
                <span>Founder-First Reassurance</span>
              </div>
            </div>
          ))}

          {/* Sixth Feature Card: Our Guarantee */}
          <div className="bg-ink text-white p-7 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-crimson">
                  <Sparkles className="w-5 h-5 text-crimson fill-crimson" />
                </div>
                <span className="font-mono text-xs text-white/50">PARTNER PROMISE</span>
              </div>
              <h3 className="text-lg font-serif font-bold text-white mb-3">
                No vanity metrics. Just high-trust brand equity.
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                If the content doesn't feel like you or meet our mutual standards, we revise until it's right. Your reputation is our reputation.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                onClick={onOpenBooking}
                className="text-xs font-bold text-white uppercase tracking-wider underline underline-offset-4 decoration-crimson hover:text-white/80"
              >
                Schedule founder alignment →
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
