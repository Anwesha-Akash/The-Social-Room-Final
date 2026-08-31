import React from 'react';
import { Play, Instagram as InstagramIcon, Heart, Eye, ArrowUpRight } from 'lucide-react';
import { siteContent } from '../data/content';

export default function Instagram({ onSelectReel }) {
  return (
    <section 
      id="instagram" 
      className="py-20 sm:py-28 bg-white border-b border-hairline relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-hairline">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-crimson mb-3">
              <InstagramIcon className="w-4 h-4" />
              <span>11 · On the Gram</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink tracking-tight">
              Crafted for high retention, <br />
              <span className="italic font-normal">edited for authority.</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink hover:text-crimson transition-colors border border-hairline px-4 py-2 rounded-full hover:bg-tint"
            >
              <span>Follow @thesocialroom</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Five 9:16 Aspect Ratio Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {siteContent.instagram.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onSelectReel(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onSelectReel(item)}
              aria-label={`View reel: ${item.title}`}
              className="group relative cursor-pointer rounded-2xl overflow-hidden bg-tint border border-hairline shadow-xs hover:shadow-xl hover:border-ink/50 transition-all duration-300 transform hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-crimson aspect-[9/16]"
            >
              {/* Image with 9:16 Aspect Ratio */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Top Category Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-white/90 backdrop-blur-sm text-ink px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase border border-hairline">
                  {item.category}
                </span>
              </div>

              {/* Play Button Indicator */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-12 h-12 rounded-full bg-white/90 text-crimson flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-crimson group-hover:text-white transition-all duration-200">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>

              {/* Bottom Reel Details */}
              <div className="absolute bottom-0 inset-x-0 p-4 z-10 space-y-2 text-white">
                <h4 className="text-xs sm:text-sm font-medium font-serif leading-snug line-clamp-2 text-white/95">
                  {item.title}
                </h4>

                <div className="flex items-center justify-between text-[11px] font-mono text-white/80 pt-1 border-t border-white/20">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3 text-crimson" />
                    {item.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3 text-crimson" />
                    {item.likes}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Helper Note */}
        <div className="mt-8 text-center text-xs text-stone font-mono">
          Click any reel card to preview narrative hook & production breakdown · 9:16 High-Retention Format
        </div>

      </div>
    </section>
  );
}
