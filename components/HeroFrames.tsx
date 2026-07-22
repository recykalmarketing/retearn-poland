'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface HeroFramesProps {
  frameCount: number;
  fps: number;
}

const framePath = (i: number) => `/videos/frames/frame_${String(i).padStart(4, '0')}.webp`;

export default function HeroFrames({ frameCount = 180, fps = 30 }: HeroFramesProps) {
  const { t, i18n } = useTranslation();
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const animationRef = useRef<number>();
  const lastFrameTimeRef = useRef<number>(0);
  const loadedCountRef = useRef(0);

  const isPolish = i18n.language === 'pl';
  const headline = isPolish ? 'WŁĄCZ ZWROT W CAŁEJ POLSCE.' : 'TURN ON RETURN ACROSS POLAND.';
  const subheading = isPolish
    ? 'Niezawodna infrastruktura automatów kaucyjnych dla rozwijającego się systemu kaucyjnego w Polsce.'
    : 'Reliable reverse vending infrastructure built for Poland\'s growing deposit-return network.';

  // Preload every frame before the loop starts, so playback never stalls waiting on the network.
  useEffect(() => {
    let cancelled = false;
    const READY_THRESHOLD = Math.min(60, frameCount); // ~2s of footage at 30fps is enough to start smoothly

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.onload = img.onerror = () => {
        if (cancelled) return;
        loadedCountRef.current += 1;
        if (!isReady && loadedCountRef.current >= READY_THRESHOLD) {
          setIsReady(true);
        }
      };
      img.src = framePath(i);
    }

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frameCount]);

  useEffect(() => {
    if (!isReady) return;

    const frameDuration = 1000 / fps;

    const animate = (timestamp: number) => {
      if (lastFrameTimeRef.current === 0) {
        lastFrameTimeRef.current = timestamp;
      }

      const elapsed = timestamp - lastFrameTimeRef.current;

      if (elapsed >= frameDuration) {
        // Modulo wraps back to frame 0 automatically — playback loops forever, never stops.
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
  }, [frameCount, fps, isReady]);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark via-slate-800 to-slate-900">
      {/* Frame-based video background */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover transition-opacity duration-700"
        style={{
          backgroundImage: `url(${framePath(currentFrame)})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: isReady ? 1 : 0,
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
          <button onClick={() => handleScroll('book-meeting')} className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all">
            {t('header.bookMeeting')}
          </button>
          <button onClick={() => handleScroll('rvms')} className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary transition-all">
            {t('hero.secondaryCta')}
          </button>
        </div>
      </div>
    </section>
  );
}
