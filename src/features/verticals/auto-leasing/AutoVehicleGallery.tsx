'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import type { AutoGallerySlideMeta } from './autoLeasingPortalData';

interface AutoVehicleGalleryProps {
  slides: readonly AutoGallerySlideMeta[];
  fallbackTitle: string;
  fallbackCity: string;
}

/**
 * Interactive 3-angle Porsche Taycan gallery with visual thumbnail switcher.
 */
export const AutoVehicleGallery: React.FC<AutoVehicleGalleryProps> = ({
  slides,
  fallbackTitle,
  fallbackCity,
}) => {
  const [activeSlideId, setActiveSlideId] = useState<AutoGallerySlideMeta['id']>('exterior');

  const fallbackSlide: AutoGallerySlideMeta = {
    id: 'exterior',
    imageSrc: '/images/auto/taycan-exterior-stuttgart.jpg',
    label: fallbackTitle,
    caption: fallbackCity,
  };

  const activeSlide =
    slides.find((slide) => slide.id === activeSlideId) ?? slides[0] ?? fallbackSlide;

  return (
    <div className="space-y-3">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-sky-500/25 bg-zinc-950">
        <Image
          src={activeSlide.imageSrc}
          alt={activeSlide.label}
          fill
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 via-black/45 to-transparent p-4">
          <p className="text-sm font-bold text-zinc-50">{activeSlide.label}</p>
          <p className="text-xs text-zinc-300">{activeSlide.caption}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
        {slides.map((slide) => {
          const isSelected = slide.id === activeSlide.id;
          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveSlideId(slide.id)}
              aria-label={slide.label}
              aria-pressed={isSelected}
              className={`group flex items-center gap-2.5 rounded-xl border p-1.5 text-left transition ${
                isSelected
                  ? 'border-sky-400/70 bg-sky-400/15 text-sky-100 shadow-sm'
                  : 'border-zinc-800 bg-zinc-950/85 text-zinc-300 hover:border-zinc-700'
              }`}
            >
              <div className="relative h-12 w-20 shrink-0 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
                <Image
                  src={slide.imageSrc}
                  alt={slide.label}
                  fill
                  sizes="80px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="line-clamp-2 text-xs font-semibold leading-snug">{slide.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
