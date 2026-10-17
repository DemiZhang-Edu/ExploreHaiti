import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShowcasePage } from '../data/haitiData';
import { AnimatedWords } from './AnimatedWords';
import { ImageWithFallback } from './ImageWithFallback';

interface ShowcasePageViewProps {
  page: ShowcasePage;
  onNextPage?: () => void;
  onPrevPage?: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export const ShowcasePageView: React.FC<ShowcasePageViewProps> = ({
  page,
  onNextPage,
  onPrevPage,
  hasPrev,
  hasNext,
}) => {
  const [animKey, setAnimKey] = useState(0);

  const handleReplay = () => {
    setAnimKey((prev) => prev + 1);
  };

  return (
    <div className="space-y-10">
      {/* Top Page Header */}
      <motion.div
        key={`header-${page.id}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-5"
      >
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-semibold mb-1">
            <span className="text-blue-900 font-bold">{page.pageNumberLabel}</span>
            <span aria-hidden="true">·</span>
            <span>Haiti</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            {page.title}
          </h1>
        </div>

        {/* Replay Animation Control */}
        <button
          onClick={handleReplay}
          className="self-start sm:self-auto px-3.5 py-1.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0"
          title="Replay animated words"
        >
          <svg className="w-3.5 h-3.5 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>Replay animation</span>
        </button>
      </motion.div>

      {/* Main Feature Display: Picture + Large Animated Words Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Photo Card */}
        <motion.div
          key={`img-box-${page.id}`}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 bg-white p-3 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between"
        >
          <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden bg-stone-900">
            <ImageWithFallback
              src={page.imageUrl}
              alt={page.imageAlt}
              fallbackTheme={page.fallbackTheme}
              title={page.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 z-20 bg-stone-900/80 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-semibold text-stone-200 tracking-wide">
              {page.pageNumberLabel}: {page.title}
            </div>
          </div>

          <div className="p-3 text-center">
            <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold">
              Visual Feature
            </span>
          </div>
        </motion.div>

        {/* Animated Words Box */}
        <motion.div
          key={`words-box-${page.id}`}
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-blue-900 font-semibold mb-4">
              <span>Full Animated Text</span>
              <span aria-hidden="true">·</span>
              <span>{page.title}</span>
            </div>

            {/* Large Animated Words Container */}
            <div className="text-xl sm:text-2xl md:text-3xl font-serif leading-relaxed text-stone-900 min-h-[140px]">
              <AnimatedWords
                text={page.rawText}
                animationKey={`main-${page.id}-${animKey}`}
                staggerDelay={0.07}
                wordClassName="mr-2 mb-2 font-medium"
              />
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
            <span>Educational Presentation</span>
            <span className="font-semibold text-stone-700">{page.pageNumberLabel}</span>
          </div>
        </motion.div>
      </div>


      {/* Clear Bottom Navigation Buttons between pages */}
      <nav 
        aria-label="Page navigation"
        className="pt-8 border-t border-stone-200 flex items-center justify-between gap-4"
      >
        <div>
          {hasPrev && onPrevPage ? (
            <button
              onClick={onPrevPage}
              className="px-5 py-3 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 text-sm font-semibold transition-all shadow-xs flex items-center gap-2 cursor-pointer group"
            >
              <svg className="w-4 h-4 text-stone-500 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Previous Page</span>
            </button>
          ) : (
            <span className="text-xs text-stone-400">First Page</span>
          )}
        </div>

        <div>
          {hasNext && onNextPage ? (
            <button
              onClick={onNextPage}
              className="px-5 py-3 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-sm font-semibold transition-all shadow-sm flex items-center gap-2 cursor-pointer group"
            >
              <span>Next Page</span>
              <svg className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => onPrevPage && onPrevPage()}
              className="px-5 py-3 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 text-sm font-semibold transition-all shadow-xs flex items-center gap-2 cursor-pointer"
            >
              <span>End of Presentation</span>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};
