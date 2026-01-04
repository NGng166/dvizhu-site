"use client";

import { useState, useRef, useEffect } from "react";

interface MediaGalleryProps {
  media: { type: "image" | "video"; src: string }[];
}

export default function MediaGallery({ media }: MediaGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Проверяем, можно ли скроллить вправо
  const updateScrollRight = () => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    setCanScrollRight(el.scrollWidth > el.clientWidth + el.scrollLeft + 1);
  };

  useEffect(() => {
    updateScrollRight();
    window.addEventListener("resize", updateScrollRight);
    return () => window.removeEventListener("resize", updateScrollRight);
  }, []);

  const handleScroll = () => updateScrollRight();

  return (
    <div className="my-6 relative">
      {/* Горизонтальная прокрутка с scroll snap */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto px-2 py-2 scroll-smooth snap-x snap-mandatory"
        style={{ paddingRight: "1rem" }} // немного отступа справа
      >
        {media.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 cursor-pointer rounded-lg shadow-lg overflow-hidden w-40 h-40 bg-black snap-start"
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
      {canScrollRight && (
        <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-gray-900 to-transparent" />
      )}

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
