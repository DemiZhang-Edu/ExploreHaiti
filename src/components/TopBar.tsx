import React from 'react';
import { SHOWCASE_PAGES } from '../data/haitiData';

interface TopBarProps {
  currentPageId: number;
  onSelectPage: (id: number) => void;
  onNextPage: () => void;
  hasNextPage: boolean;
}

export const TopBar: React.FC<TopBarProps> = ({
  currentPageId,
  onSelectPage,
  onNextPage,
  hasNextPage
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-50/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Wordmark */}
        <button
          onClick={() => onSelectPage(1)}
          className="text-left cursor-pointer focus:outline-none whitespace-nowrap shrink-0 group"
        >
          <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-stone-900 group-hover:text-blue-900 transition-colors">
            HAITI <span className="text-xs font-sans tracking-widest uppercase font-medium text-red-600 ml-1">Discovery</span>
          </span>
        </button>

        {/* Zone 2: 4 single-line navigation buttons */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {SHOWCASE_PAGES.map((page) => (
            <button
              key={page.id}
              onClick={() => onSelectPage(page.id)}
              className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 text-sm cursor-pointer ${
                currentPageId === page.id
                  ? 'border-blue-700 text-blue-900 font-semibold'
                  : 'border-transparent text-stone-600 hover:text-stone-900'
              }`}
            >
              {page.pageNumberLabel}: {page.title}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          {hasNextPage ? (
            <button
              onClick={onNextPage}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Next Page</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => onSelectPage(1)}
              className="px-4 py-2 text-xs font-semibold text-stone-800 bg-stone-200 hover:bg-stone-300 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Back to Start</span>
            </button>
          )}
        </div>
      </div>

      {/* Mobile navigation tab strip */}
      <div className="flex md:hidden border-t border-stone-200 overflow-x-auto px-4 py-2 bg-stone-100 gap-2 scrollbar-none">
        {SHOWCASE_PAGES.map((page) => (
          <button
            key={page.id}
            onClick={() => onSelectPage(page.id)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
              currentPageId === page.id ? 'bg-white text-blue-900 shadow-xs font-semibold' : 'text-stone-600'
            }`}
          >
            {page.pageNumberLabel}
          </button>
        ))}
      </div>
    </header>
  );
};
