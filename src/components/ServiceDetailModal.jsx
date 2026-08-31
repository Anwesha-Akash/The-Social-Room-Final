import React from 'react';
import { X, Check, ArrowRight, Sparkles, Compass, PenTool, Film, Mic } from 'lucide-react';
import { siteContent } from '../data/content';

export default function ServiceDetailModal({ isOpen, onClose, onOpenBooking }) {
  if (!isOpen) return null;

  const icons = {
    strategy: Compass,
    scripting: PenTool,
    editing: Film,
    podcast: Mic,
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 border border-hairline shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-full text-stone hover:text-ink hover:bg-tint transition-colors focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-crimson mb-2">
            <Sparkles className="w-3.5 h-3.5 fill-crimson" />
            <span>End-to-End Service Scope</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-ink tracking-tight">
            How we manage your personal brand
          </h3>
          <p className="text-xs sm:text-sm text-stone mt-1">
            Every step is engineered to produce high-retention content with zero founder friction.
          </p>
        </div>

        {/* Service Details Breakdown */}
        <div className="space-y-6">
          {siteContent.services.map((service) => {
            const IconComponent = icons[service.id] || Compass;
            return (
              <div 
                key={service.id}
                className="bg-tint/70 p-5 sm:p-6 rounded-2xl border border-hairline space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-ink text-white flex items-center justify-center text-xs">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="text-lg font-serif font-bold text-ink">
                      {service.number}. {service.title}
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-white border border-hairline px-2 py-0.5 rounded text-stone">
                    Included
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone leading-relaxed">
                  {service.detail}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-ink/90">
                      <Check className="w-3.5 h-3.5 text-crimson shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer CTA */}
        <div className="mt-8 pt-6 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone font-mono">
            Requires only 2 hours of monthly recording time
          </p>
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full sm:w-auto bg-crimson hover:bg-crimson-dark text-white px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
          >
            <span>Book discovery call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
