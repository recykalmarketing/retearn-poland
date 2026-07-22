'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const [activeItem, setActiveItem] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) {
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

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [items, onItemChange]);

  const handleCTA = () => {
    const element = document.getElementById('book-meeting');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div className="flex h-screen">
        {/* Left: Scrolling content */}
        <div className="w-full lg:w-1/2 overflow-y-auto">
          {items.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className="h-screen flex items-center px-6 sm:px-8 lg:px-12 py-12"
            >
              <div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  {item.eyebrow}
                </span>
                <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {item.title}
                </h2>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-md">
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
                  className="mt-12 px-8 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all"
                >
                  {t(item.cta) || item.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Fixed image */}
        <div className="hidden lg:flex w-1/2 fixed right-0 top-0 h-screen items-center justify-center bg-gray-100">
          <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
            <div
              className="bg-gradient-to-br from-gray-200 to-gray-300 w-3/4 h-3/4 rounded-3xl flex items-center justify-center shadow-2xl transition-opacity duration-300"
              style={{ opacity: imageOpacity }}
            >
              <span className="text-gray-500 font-medium text-xl">{items[activeItem]?.imageText}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
