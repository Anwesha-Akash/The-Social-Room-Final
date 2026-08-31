import React from 'react';
import { X, Play, Heart, Eye, Share2, Instagram, ArrowRight, Sparkles } from 'lucide-react';

export default function ReelModal({ reel, onClose, onOpenBooking }) {
  if (!reel) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-7 border border-hairline shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 p-2 rounded-full text-stone hover:text-ink hover:bg-tint transition-colors focus:outline-none z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
          
          {/* Reel Visual Preview (9:16) */}
          <div className="sm:col-span-5 relative rounded-2xl overflow-hidden aspect-[9/16] bg-ink border border-hairline group">
            <img
              src={reel.image}
              alt={reel.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/90 text-crimson flex items-center justify-center shadow-2xl">
                <Play className="w-6 h-6 fill-current ml-0.5" />
              </div>
            </div>

            <div className="absolute bottom-3 inset-x-3 text-white text-[11px] font-mono flex items-center justify-between">
              <span className="flex items-center gap-1"><Eye className="w-3 h-3 text-crimson" /> {reel.views}</span>
              <span className="flex items-center gap-1"><Heart className="w-3 h-3 text-crimson" /> {reel.likes}</span>
            </div>
          </div>

          {/* Reel Breakdown Right */}
          <div className="sm:col-span-7 space-y-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-crimson mb-2">
                <Instagram className="w-3.5 h-3.5" />
                <span>Format: 9:16 · {reel.category}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-ink leading-snug">
                {reel.title}
              </h3>
            </div>

            <div className="p-4 bg-tint rounded-2xl border border-hairline space-y-2">
              <p className="text-[11px] font-mono uppercase text-stone font-bold tracking-wider">
                Narrative Hook & Blueprint
              </p>
              <p className="text-xs sm:text-sm text-ink/90 leading-relaxed italic">
                "{reel.caption}"
              </p>
            </div>

            <div className="space-y-2 text-xs text-stone">
              <p><strong className="text-ink">Editing Style:</strong> Clean editorial cuts, subtitle pacing, crisp sound design.</p>
              <p><strong className="text-ink">Founder Effort:</strong> 4 minutes of prompt response during monthly session.</p>
            </div>

            <div className="pt-3 border-t border-hairline flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="w-full bg-crimson hover:bg-crimson-dark text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>Get reels like this</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
