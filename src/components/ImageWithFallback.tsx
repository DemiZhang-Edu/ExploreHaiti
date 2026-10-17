import React, { useState } from 'react';

interface ImageWithFallbackProps {
  src?: string;
  alt: string;
  className?: string;
  fallbackTheme?: 'fortress' | 'portrait' | 'food' | 'art' | 'nature' | 'market';
  title?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = "w-full h-full object-cover",
  fallbackTheme = 'nature',
  title
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Gradient themes matching Caribbean palette
  const themeGradients = {
    fortress: "from-stone-900 via-stone-800 to-amber-950",
    portrait: "from-blue-950 via-slate-900 to-red-950",
    food: "from-amber-900 via-orange-950 to-stone-900",
    art: "from-zinc-900 via-slate-900 to-stone-800",
    nature: "from-emerald-950 via-teal-950 to-slate-900",
    market: "from-red-950 via-amber-950 to-stone-900",
  };

  const getThematicIcon = () => {
    switch (fallbackTheme) {
      case 'fortress':
        return (
          <svg className="w-12 h-12 text-amber-300/60 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case 'portrait':
        return (
          <svg className="w-12 h-12 text-blue-300/60 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      case 'food':
        return (
          <svg className="w-12 h-12 text-amber-400/60 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
          </svg>
        );
      case 'art':
        return (
          <svg className="w-12 h-12 text-stone-300/60 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        );
      default:
        return (
          <svg className="w-12 h-12 text-emerald-300/60 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-stone-900 flex items-center justify-center">
      {/* Fallback artwork container */}
      <div className={`absolute inset-0 bg-gradient-to-br ${themeGradients[fallbackTheme]} flex flex-col items-center justify-center p-4 text-center select-none`}>
        {getThematicIcon()}
        {title && (
          <span className="text-xs uppercase tracking-widest text-stone-300 font-medium max-w-[80%] line-clamp-1">
            {title}
          </span>
        )}
        <span className="text-[10px] tracking-wider text-stone-400 mt-1 uppercase">
          Haiti Heritage Archive
        </span>
      </div>

      {/* Real image if valid */}
      {src && !hasError && (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          className={`${className} transition-opacity duration-500 relative z-10 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
};
