"use client";

import { useState } from "react";

interface Photo {
  src: string;
  alt: string;
}

interface SliderProps {
  photos?: Photo[];
}

export default function Slider({ photos = [] }: SliderProps) {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? photos.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === photos.length - 1 ? 0 : i + 1));

  // swipe
  let startX = 0;
  const onTouchStart = (e: React.TouchEvent) => {
    startX = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = startX - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {photos.map((p, i) => (
          <div key={i} className="flex-shrink-0 w-full px-2">
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
        className="absolute left-2 top-1/2 -translate-y-1/2
          w-10 h-10 bg-black/60 text-white text-2xl rounded-full
          flex items-center justify-center z-10"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2
          w-10 h-10 bg-black/60 text-white text-2xl rounded-full
          flex items-center justify-center z-10"
      >
        ›
      </button>
    </div>
  );
}
