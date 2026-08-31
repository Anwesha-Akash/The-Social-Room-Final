import React from 'react';
import { Sparkles, Quote, ShieldCheck } from 'lucide-react';
import { siteContent } from '../data/content';

export default function Clients({ onOpenBooking }) {
  return (
    <section 
      id="clients" 
      className="py-20 sm:py-28 bg-tint border-b border-hairline relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-hairline">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-crimson mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-crimson" />
              <span>06 · Clients</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink tracking-tight">
              Trusted by founders <br />
              <span className="italic font-normal">building in public.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-stone max-w-md">
            From venture-backed tech CEOs to boutique agency founders, we help leaders command attention on Instagram.
          </p>
        </div>

        {/* Client Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteContent.clients.map((client, idx) => (
            <div
              key={client.handle}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-hairline shadow-xs hover:border-ink/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Client Avatar & Handle */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-hairline bg-tint shrink-0">
                    <img 
                      src={client.avatar} 
                      alt={client.name}
                      className="w-full h-full object-cover grayscale contrast-105"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-ink leading-tight font-serif">
                      {client.name}
                    </h4>
                    <p className="text-xs font-mono text-crimson font-medium">
                      {client.handle}
                    </p>
                  </div>
                </div>

                {/* Badge Tag */}
                <div className="inline-block bg-tint text-stone border border-hairline/70 px-2.5 py-0.5 rounded text-[11px] font-medium mb-4">
                  {client.proofTag}
                </div>

                {/* Quote */}
                <p className="text-sm text-stone leading-relaxed italic">
                  "{client.quote}"
                </p>
              </div>

              {/* Verified Pill */}
              <div className="mt-6 pt-4 border-t border-hairline/60 flex items-center justify-between text-xs text-stone">
                <span className="text-[11px] font-mono text-stone/80">{client.role}</span>
                <ShieldCheck className="w-4 h-4 text-crimson shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Social Strip */}
        <div className="mt-12 bg-white border border-hairline rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-crimson/10 flex items-center justify-center text-crimson shrink-0">
              <Sparkles className="w-5 h-5 text-crimson" />
            </div>
            <div>
              <p className="text-base font-semibold font-serif text-ink">Zero Cringe. Maximum Strategic Authority.</p>
              <p className="text-xs sm:text-sm text-stone">Every post is crafted to attract high-value investors, top-tier talent, and paying clients.</p>
            </div>
          </div>
          <button
            onClick={onOpenBooking}
            className="whitespace-nowrap bg-ink hover:bg-ink/80 text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Join our roster
          </button>
        </div>

      </div>
    </section>
  );
}
