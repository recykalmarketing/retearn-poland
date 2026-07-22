'use client';

import { useState, useEffect, useRef } from 'react';

interface SectionItem {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  cta: string;
  imageText: string;
}

interface ScrollingSectionProps {
  items: SectionItem[];
  onItemChange?: (itemId: string) => void;
}

export default function ScrollingSection({ items, onItemChange }: ScrollingSectionProps) {
  const [activeItem, setActiveItem] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerTop = container.offsetTop;
      const containerHeight = container.clientHeight;
      const scrollPosition = window.scrollY - containerTop;
      const visibleHeight = window.innerHeight;

      itemRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const itemTop = ref.offsetTop - containerTop;
        const itemHeight = ref.clientHeight;

        // Check if item is roughly in the middle of viewport
        if (scrollPosition + visibleHeight / 2 >= itemTop && scrollPosition + visibleHeight / 2 < itemTop + itemHeight) {
          if (activeItem !== index) {
            setImageOpacity(0);
            setTimeout(() => {
              setActiveItem(index);
              setImageOpacity(1);
            }, 150);
            onItemChange?.(items[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeItem, items, onItemChange]);

  const handleCTA = () => {
    const element = document.getElementById('book-meeting');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="w-full bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen lg:sticky lg:top-0">
        {/* Left: Scrolling content */}
        <div className="relative z-10 bg-white">
          {items.map((item, index) => (
            <div
              key={item.id}
              id={item.id}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className="min-h-screen flex items-center px-6 sm:px-8 lg:px-12 py-12 scroll-mt-20"
            >
              <div className="w-full max-w-xl">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  {item.eyebrow}
                </span>
                <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {item.title}
                </h2>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                <ul className="mt-10 space-y-5">
                  {item.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-primary text-2xl font-light mt-1 flex-shrink-0">→</span>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleCTA}
                  className="mt-12 px-8 py-3 bg-white border-2 border-primary text-black font-semibold rounded-full hover:bg-primary hover:text-white transition-all"
                >
                  {item.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Fixed image */}
        <div className="hidden lg:flex items-center justify-center bg-primary/5 sticky top-0 h-screen">
          <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
            <div
              className="bg-gradient-to-br from-primary to-secondary w-4/5 h-4/5 rounded-3xl flex items-center justify-center shadow-2xl transition-opacity duration-300"
              style={{ opacity: imageOpacity }}
            >
              <span className="text-white font-medium text-xl text-center px-4">{items[activeItem]?.imageText}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
