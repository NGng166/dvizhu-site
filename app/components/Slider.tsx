"use client";

import { useState, useRef } from "react";

// Тип для одного фото
interface Photo {
  src: string;
  alt: string;
}

// Тип пропсов для Slider
interface SliderProps {
  photos?: Photo[];
  peek?: number; // сколько процентов видно с краёв (по умолчанию 20)
}

export default function Slider({ photos = [], peek = 20 }: SliderProps) {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const slideWidth = 100 - peek; // ширина слайда в %

  // ---- SWIPE LOGIC ----
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const dist = touchStartX - touchEndX;
    if (dist > 50) next();
    if (dist < -50) prev();
  };

  const prev = () =>
    setIndex((i) => (i === 0 ? photos.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === photos.length - 1 ? 0 : i + 1));

  return (
    <div
      className="relative w-full mx-auto overflow-hidden"
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-300"
        style={{
          transform: `translateX(-${index * (slideWidth + peek)}%)`,
        }}
      >
        {photos.map((p, i) => (
          <div
            key={i}
            className="flex-shrink-0"
            style={{
              width: `${slideWidth}%`,
              marginRight: `${peek}%`,
            }}
          >
            <img
              src={p.src}
              alt={p.alt}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* кнопки */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-2 -translate-y-1/2 w-10 h-10 bg-black/60 text-white text-2xl rounded-full flex items-center justify-center"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-2 -translate-y-1/2 w-10 h-10 bg-black/60 text-white text-2xl rounded-full flex items-center justify-center"
      >
        ›
      </button>
    </div>
  );
}
