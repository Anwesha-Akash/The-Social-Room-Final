import React, { useState } from 'react';
import { Check, Sparkles, ArrowUpRight, ChevronDown, ChevronUp, Sliders } from 'lucide-react';
import { siteContent } from '../data/content';

export default function Pricing({ onOpenBooking }) {
  const [expandedTiers, setExpandedTiers] = useState({});
  const [customVolume, setCustomVolume] = useState(16);

  const toggleExpand = (id) => {
    setExpandedTiers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const { heading, subheading, tiers } = siteContent.pricing;

  return (
    <section 
      id="pricing" 
      className="py-20 sm:py-28 bg-white border-b border-hairline relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-hairline">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-crimson mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-crimson" />
              <span>08 · Investment & Packages</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink tracking-tight">
              {heading}
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-stone max-w-md">
            {subheading} All plans include end-to-end strategy, scripting, editing, and sound design.
          </p>
        </div>

        {/* Four Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {tiers.map((tier) => {
            const isRecommended = tier.recommended;
            const isExpanded = expandedTiers[tier.id];

            return (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  isRecommended
                    ? 'bg-white border-2 border-crimson shadow-xl scale-102 lg:-translate-y-2 z-10 ring-4 ring-crimson/5'
                    : 'bg-tint/60 border border-hairline hover:border-ink/40 hover:bg-white hover:shadow-md'
                }`}
              >
                {/* Recommended Badge for Launch Tier */}
                {isRecommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-crimson text-white px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
                    <Sparkles className="w-3 h-3 fill-white" />
                    <span>RECOMMENDED</span>
                  </div>
                )}

                <div>
                  {/* Tier Title & Price */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-serif font-bold text-ink">
                        {tier.name}
                      </h3>
                      {tier.period === 'One-time' && (
                        <span className="text-[10px] uppercase font-mono tracking-wider bg-white border border-hairline px-2 py-0.5 rounded text-stone">
                          Sprint
                        </span>
                      )}
                    </div>

                    <div className="mt-4 flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-serif font-bold text-ink tracking-tight">
                        {tier.price}
                      </span>
                      <span className="text-xs text-stone font-medium">
                        / {tier.period}
                      </span>
                    </div>

                    <p className="mt-3 text-xs sm:text-sm text-stone leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  {/* Scope Highlight Pill */}
                  <div className={`p-2.5 rounded-xl text-xs font-mono mb-6 border ${
                    isRecommended 
                      ? 'bg-crimson/5 border-crimson/20 text-crimson font-bold' 
                      : 'bg-white border-hairline text-stone font-medium'
                  }`}>
                    <span className="text-[10px] text-stone/80 block uppercase font-mono">Scope Example</span>
                    {tier.scopeSummary}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 pt-2">
                    {tier.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink/90">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isRecommended ? 'text-crimson' : 'text-stone'}`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expandable Scope Interaction */}
                  {isExpanded && (
                    <div className="mt-6 pt-4 border-t border-hairline text-xs text-stone space-y-2 animate-fade-in">
                      <p className="font-semibold text-ink">Customization & Deliverables:</p>
                      <ul className="space-y-1 list-disc pl-4 text-stone">
                        <li>Tailored to your specific founder niche and tone</li>
                        <li>Dedicated Slack channel for real-time approvals</li>
                        <li>Raw footage recording guidelines included</li>
                        <li>High-res vertical (9:16) export ready for Instagram</li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Card Bottom CTA & Expand Button */}
                <div className="mt-8 pt-6 border-t border-hairline space-y-3">
                  <button
                    onClick={() => onOpenBooking(tier.name)}
                    className={`w-full py-3.5 px-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 ${
                      isRecommended
                        ? 'bg-crimson hover:bg-crimson-dark text-white shadow-md hover:shadow-lg active:scale-95'
                        : 'bg-ink hover:bg-ink/80 text-white active:scale-95'
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => toggleExpand(tier.id)}
                    className="w-full text-center text-[11px] text-stone hover:text-ink font-medium transition-colors flex items-center justify-center gap-1 focus:outline-none"
                  >
                    <span>{isExpanded ? 'Less scope details' : 'Expand full scope'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Scope Calculator Banner */}
        <div className="mt-14 bg-tint border border-hairline rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 max-w-xl">
            <div className="w-12 h-12 rounded-2xl bg-white border border-hairline flex items-center justify-center text-ink shrink-0">
              <Sliders className="w-6 h-6 text-crimson" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-serif font-bold text-ink">
                Need a custom volume or multi-platform packaging?
              </h4>
              <p className="text-xs sm:text-sm text-stone mt-1">
                We frequently adapt packages for podcast hosts, YouTube shorts, and LinkedIn executive ghostwriting.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenBooking("Custom Package")}
            className="whitespace-nowrap bg-white hover:bg-tint text-ink border border-hairline px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
          >
            Request custom scope
          </button>
        </div>

      </div>
    </section>
  );
}
