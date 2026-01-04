"use client";

import { useState, useRef, useEffect } from "react";

interface MediaGalleryProps {
  media: { type: "image" | "video"; src: string }[];
}

export default function MediaGallery({ media }: MediaGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const CARD_WIDTH = 160 + 16; // ширина карточки + gap (tailwind w-40 + gap-4)

  // Обновляем scrollIndex при скролле
  const onScroll = () => {
    if (!scrollRef.current) return;
    const index = Math.round(scrollRef.current.scrollLeft / CARD_WIDTH);
    setScrollIndex(index);
  };

  // Скролл по клику на рельсу
  const scrollToIndex = (i: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({ left: i * CARD_WIDTH, behavior: "smooth" });
  };

  // Кол-во «страниц» для рельс
  const pages = Math.ceil(media.length);

  return (
    <div className="my-6 relative">
      {/* Горизонтальная прокрутка */}
      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="flex gap-4 overflow-x-auto px-2 py-2 scroll-smooth"
      >
        {media.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 cursor-pointer rounded-lg shadow-lg overflow-hidden w-40 h-40 bg-black"
            onClick={() => setActiveIndex(index)}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`media-${index}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <video
                src={item.src}
                className="w-full h-full object-cover"
                preload="metadata"
                muted
                loop
                playsInline
              />
            )}
          </div>
        ))}
      </div>

      {/* Градиент справа */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-gray-900/90 to-transparent z-10" />

      {/* Рельсы под слайдером */}
      <div className="flex justify-center mt-2 gap-2">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            className={`w-8 h-2 rounded-full transition-colors ${
              i === scrollIndex ? "bg-white" : "bg-gray-500/50"
            }`}
            onClick={() => scrollToIndex(i)}
          />
        ))}
      </div>

      {/* Лайтбокс */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setActiveIndex(null)}
        >
          {media[activeIndex].type === "image" ? (
            <img
              src={media[activeIndex].src}
              className="max-h-full max-w-full"
              loading="eager"
            />
          ) : (
            <video
              src={media[activeIndex].src}
              className="max-h-full max-w-full"
              controls
              autoPlay
            />
          )}
        </div>
      )}
    </div>
  );
}
