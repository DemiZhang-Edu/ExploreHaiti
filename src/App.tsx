/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { TopBar } from './components/TopBar';
import { ShowcasePageView } from './components/ShowcasePageView';
import { SHOWCASE_PAGES } from './data/haitiData';

export default function App() {
  const [currentPageId, setCurrentPageId] = useState<number>(1);

  const currentPageIndex = SHOWCASE_PAGES.findIndex((p) => p.id === currentPageId);
  const activePage = SHOWCASE_PAGES[currentPageIndex] || SHOWCASE_PAGES[0];

  const hasPrev = currentPageIndex > 0;
  const hasNext = currentPageIndex < SHOWCASE_PAGES.length - 1;

  const handleNextPage = () => {
    if (hasNext) {
      setCurrentPageId(SHOWCASE_PAGES[currentPageIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevPage = () => {
    if (hasPrev) {
      setCurrentPageId(SHOWCASE_PAGES[currentPageIndex - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectPage = (id: number) => {
    setCurrentPageId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col font-sans selection:bg-amber-100 selection:text-stone-900">
      {/* 3-Zone Sticky Navigation Header */}
      <TopBar
        currentPageId={currentPageId}
        onSelectPage={handleSelectPage}
        onNextPage={handleNextPage}
        hasNextPage={hasNext}
      />

      {/* Caribbean Sub-header Ribbon with 4 Page Navigation Buttons */}
      <div className="bg-stone-900 text-stone-300 py-6 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block" />
            <span className="text-sm font-serif italic text-stone-200">
              Discover Haiti in 4 Topics
            </span>
          </div>

          {/* Quick page switcher buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {SHOWCASE_PAGES.map((page) => (
              <button
                key={page.id}
                onClick={() => handleSelectPage(page.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                  currentPageId === page.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white'
                }`}
              >
                <span>{page.pageNumberLabel}:</span>
                <span>{page.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Exhibition Page Content with AnimatePresence */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <ShowcasePageView
              page={activePage}
              onNextPage={handleNextPage}
              onPrevPage={handlePrevPage}
              hasPrev={hasPrev}
              hasNext={hasNext}
            />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Archival Footer */}
      <footer className="mt-16 bg-stone-900 text-stone-400 py-10 px-4 sm:px-6 lg:px-8 border-t border-stone-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-stone-200 text-sm">Haiti</span>
            <span aria-hidden="true">·</span>
            <span>4 Showcase Topics</span>
          </div>

          <div className="flex items-center gap-4 text-stone-400">
            <span>Page {activePage.id} of 4</span>
            <span aria-hidden="true">·</span>
            <span>Original Text Animated</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
