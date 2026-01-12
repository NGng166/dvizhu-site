"use client";

import { useState, useRef, useEffect } from "react";

interface MediaGalleryProps {
  media: { type: "image" | "video"; src: string }[];
}

export default function MediaGallery({ media }: MediaGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [pages, setPages] = useState(1);

  const scrollRef = useRef<HTMLDivElement>(null);

  // drag
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const CARD_WIDTH = 160 + 16; // w-40 + gap-4

  // ===== считаем количество страниц =====
  const recalcPages = () => {
    if (!scrollRef.current) return;

    const containerWidth = scrollRef.current.offsetWidth;
    const totalWidth = media.length * CARD_WIDTH;

    const pagesCount = Math.max(
      1,
      Math.ceil((totalWidth - containerWidth) / CARD_WIDTH) + 1
    );

    setPages(pagesCount);
  };

  useEffect(() => {
    recalcPages();
    window.addEventListener("resize", recalcPages);
    return () => window.removeEventListener("resize", recalcPages);
  }, [media.length]);

  // ===== ОБНОВЛЁННАЯ логика активной точки =====
  const onScroll = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScrollLeft = scrollWidth - clientWidth;

    // если почти в конце — последняя точка
    if (scrollLeft >= maxScrollLeft - 1) {
      setScrollIndex(pages - 1);
      return;
    }

    const index = Math.round(scrollLeft / CARD_WIDTH);
    setScrollIndex(index);
  };

  // ===== клик по точке =====
  const scrollToIndex = (i: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      left: i * CARD_WIDTH,
      behavior: "smooth",
    });
  };

  // ===== drag мышкой =====
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!scrollRef.current) return;

    isDragging.current = true;
    startX.current = e.pageX;
    scrollStart.current = scrollRef.current.scrollLeft;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;

    const delta = e.pageX - startX.current;
    scrollRef.current.scrollLeft = scrollStart.current - delta;
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  return (
    <div className="my-6 relative">
      {/* ГАЛЕРЕЯ */}
      <div
        ref={scrollRef}
        onScroll={onScroll}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        className="
          flex gap-4 overflow-x-auto px-2 py-2
          scroll-smooth scrollbar-none
          cursor-grab active:cursor-grabbing
          select-none
        "
      >
        {media.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-40 h-40 rounded-lg overflow-hidden shadow-lg bg-black cursor-pointer"
            onClick={() => setActiveIndex(index)}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`media-${index}`}
                className="w-full h-full object-cover"
                loading="lazy"
                draggable={false}
              />
            ) : (
              <video
                src={item.src}
                className="w-full h-full object-cover"
                preload="metadata"
                muted
                loop
                playsInline
                draggable={false}
              />
            )}
          </div>
        ))}
      </div>

      {/* ГРАДИЕНТ */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-gray-900/90 to-transparent z-10" />

      {/* РЕЛЬСЫ */}
      <div className="flex justify-center mt-2 gap-2">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`w-8 h-2 rounded-full transition-colors ${
              i === scrollIndex ? "bg-white" : "bg-gray-500/50"
            }`}
          />
        ))}
      </div>

      {/* ЛАЙТБОКС */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setActiveIndex(null)}
        >
          {media[activeIndex].type === "image" ? (
            <img
              src={media[activeIndex].src}
              className="max-h-full max-w-full"
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
