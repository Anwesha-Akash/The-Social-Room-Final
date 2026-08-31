import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, ArrowUpRight } from 'lucide-react';
import { siteContent } from '../data/content';

export default function FAQ({ onOpenBooking }) {
  const [openIdx, setOpenIdx] = useState(0); // Open first by default

  const toggleFAQ = (index) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="py-20 sm:py-28 bg-tint border-b border-hairline relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-crimson mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson" />
            <span>12 · Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink tracking-tight">
            Clear answers for <br />
            <span className="italic font-normal">busy founders.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-stone">
            Everything you need to know about working with The Social Room.
          </p>
        </div>

        {/* 5 Accordion Items */}
        <div className="space-y-4">
          {siteContent.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-hairline transition-all duration-200 overflow-hidden shadow-xs hover:border-ink/30"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-serif font-medium text-ink flex items-center gap-3">
                    <span className="text-xs font-mono text-crimson font-bold">
                      0{idx + 1}
                    </span>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-crimson text-white' : 'bg-tint text-stone'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div 
                    id={`faq-answer-${idx}`}
                    className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-stone leading-relaxed border-t border-hairline/60 animate-fade-in"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? Callout */}
        <div className="mt-12 text-center p-6 bg-white rounded-2xl border border-hairline flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-serif font-bold text-ink">Have a specific question about your niche?</h4>
            <p className="text-xs text-stone mt-0.5">Let's discuss your brand goals on a quick 20-minute call.</p>
          </div>
          <button
            onClick={onOpenBooking}
            className="whitespace-nowrap bg-ink hover:bg-ink/80 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
          >
            <span>Ask on discovery call</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-crimson" />
          </button>
        </div>

      </div>
    </section>
  );
}
