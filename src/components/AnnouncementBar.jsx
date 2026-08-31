import React from 'react';
import { siteContent } from '../data/content';

export default function AnnouncementBar({ onOpenBooking }) {
  return (
    <div 
      id="announcement-bar"
      className="bg-ink text-white/90 text-xs sm:text-sm py-2 px-4 text-center font-medium tracking-tight border-b border-ink/40 relative z-50 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-1.5 flex-wrap">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
        <span className="text-white/80 font-normal">
          {siteContent.announcement.text}
        </span>
        <button
          onClick={onOpenBooking}
          className="text-white font-semibold underline underline-offset-4 decoration-crimson hover:text-white/80 transition-colors inline-flex items-center gap-1 focus:outline-none"
        >
          {siteContent.announcement.linkText}
        </button>
      </div>
    </div>
  );
}
