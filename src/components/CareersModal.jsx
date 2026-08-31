import React from 'react';
import { X, Briefcase, Mail, ArrowRight, Sparkles } from 'lucide-react';

export default function CareersModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const positions = [
    {
      title: "Senior Short-Form Video Editor",
      type: "Full-Time · Remote (India)",
      description: "Looking for an exceptional video editor with deep mastery of Premiere Pro, After Effects, kinetic typography, and narrative retention on Instagram Reels.",
    },
    {
      title: "Founder Narrative Strategist & Scriptwriter",
      type: "Part-Time / Full-Time · Remote",
      description: "Passionate about business models, tech startups, and storytelling. You will interview founders and extract sharp, high-retention hooks and scripts.",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-hairline shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-full text-stone hover:text-ink hover:bg-tint transition-colors focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-crimson mb-2">
            <Sparkles className="w-3.5 h-3.5 fill-crimson" />
            <span>Careers at The Social Room</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-ink tracking-tight">
            Build personal brands with us
          </h3>
          <p className="text-xs sm:text-sm text-stone mt-1">
            We are always looking for visionary video editors, scriptwriters, and strategists.
          </p>
        </div>

        <div className="space-y-4 mb-6">
          {positions.map((pos, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-tint border border-hairline space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-serif font-bold text-ink">{pos.title}</h4>
                <span className="text-[10px] font-mono uppercase bg-white px-2 py-0.5 rounded border border-hairline text-stone">
                  Open
                </span>
              </div>
              <p className="text-xs font-mono text-crimson">{pos.type}</p>
              <p className="text-xs text-stone leading-relaxed">{pos.description}</p>
            </div>
          ))}
        </div>

        <div className="p-4 bg-white border border-hairline rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="text-xs font-bold text-ink">Send your portfolio:</p>
            <a href="mailto:careers@thesocialroom.co" className="text-xs font-mono text-crimson hover:underline">
              careers@thesocialroom.co
            </a>
          </div>
          <a
            href="mailto:careers@thesocialroom.co?subject=Application%20for%20The%20Social%20Room"
            className="w-full sm:w-auto bg-ink hover:bg-ink/80 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-1.5"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
