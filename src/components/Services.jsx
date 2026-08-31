import React from 'react';
import { Compass, PenTool, Film, Mic, ArrowRight, Check } from 'lucide-react';
import { siteContent } from '../data/content';

export default function Services({ onOpenServiceModal }) {
  const icons = {
    strategy: Compass,
    scripting: PenTool,
    editing: Film,
    podcast: Mic,
  };

  return (
    <section 
      id="services" 
      className="py-20 sm:py-28 bg-white border-b border-hairline"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-hairline">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-crimson">
              <span className="w-1.5 h-1.5 rounded-full bg-crimson" />
              <span>04 · What We Do</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink tracking-tight">
              Four pillars of <span className="italic font-normal">founder resonance.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-stone max-w-md">
            Everything you need to turn your expertise into a magnetic personal brand on Instagram without the operational overhead.
          </p>
        </div>

        {/* Four Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteContent.services.map((service, index) => {
            const IconComponent = icons[service.id] || Compass;
            return (
              <div
                key={service.id}
                className="group relative bg-white border border-hairline p-7 rounded-2xl flex flex-col justify-between hover:border-ink/40 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Card Header: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs font-semibold text-stone group-hover:text-crimson transition-colors">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-tint flex items-center justify-center text-ink group-hover:bg-ink group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Short Line */}
                  <h3 className="text-2xl font-serif text-ink mb-3 group-hover:text-crimson transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-stone leading-relaxed">
                    {service.shortLine}
                  </p>
                </div>

                {/* Key Deliverables Bullet Points */}
                <div className="mt-6 pt-6 border-t border-hairline/60 space-y-2">
                  {service.deliverables.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-stone">
                      <Check className="w-3.5 h-3.5 text-crimson shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mandatory Ending CTA Button: "Explore services in detail →" */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenServiceModal()}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-ink hover:text-crimson transition-colors group px-6 py-3 rounded-full hover:bg-tint focus:outline-none"
          >
            <span>Explore services in detail</span>
            <ArrowRight className="w-4 h-4 text-crimson group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
