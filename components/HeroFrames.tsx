'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface HeroFramesProps {
  frameCount: number;
  fps: number;
}

export default function HeroFrames({ frameCount = 180, fps = 30 }: HeroFramesProps) {
  const { i18n } = useTranslation();
  const [currentFrame, setCurrentFrame] = useState(0);
  const animationRef = useRef<number>();
  const lastFrameTimeRef = useRef<number>(0);

  const isPolish = i18n.language === 'pl';
  const headline = isPolish ? 'WŁĄCZ ZWROT W CAŁEJ POLSCE.' : 'TURN ON RETURN ACROSS POLAND.';
  const subheading = isPolish
    ? 'Niezawodna infrastruktura automatów kaucyjnych dla rozwijającego się systemu kaucyjnego w Polsce.'
    : 'Reliable reverse vending infrastructure built for Poland\'s growing deposit-return network.';

  useEffect(() => {
    const frameDuration = 1000 / fps; // ms per frame

    const animate = (timestamp: number) => {
      if (lastFrameTimeRef.current === 0) {
        lastFrameTimeRef.current = timestamp;
      }

      const elapsed = timestamp - lastFrameTimeRef.current;

      if (elapsed >= frameDuration) {
        setCurrentFrame((prev) => (prev + 1) % frameCount);
        lastFrameTimeRef.current = timestamp;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [frameCount, fps]);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
      {/* Frame-based video background */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover transition-opacity duration-500"
        style={{
          backgroundImage: `url(/videos/frames/frame_${String(currentFrame).padStart(4, '0')}.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.9,
        }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content - Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 text-white drop-shadow-lg">
          {headline}
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed mb-12 drop-shadow-md">
          {subheading}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-all">
            Book a Meeting
          </button>
          <button className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-primary transition-all">
            Explore Solutions
          </button>
        </div>
      </div>
    </section>
  );
}
