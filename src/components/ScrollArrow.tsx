'use client';

import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ScrollArrow() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsVisible(scrollPosition < windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const sections = document.querySelectorAll('section[class*="scroll-snap"]');
    if (sections.length > 1) {
      sections[1].scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToNext}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 group"
      aria-label="Scroll to next section"
    >
      <div className="w-12 h-12 rounded-full bg-slate-900/50 backdrop-blur-sm border-2 border-red-500/50 flex items-center justify-center group-hover:border-red-500 transition-all group-hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]">
        <ChevronDown className="w-6 h-6 text-red-400 animate-bounce" />
      </div>
      <div className="w-1 h-8 bg-gradient-to-b from-red-500/50 to-transparent rounded-full"></div>
    </button>
  );
}

