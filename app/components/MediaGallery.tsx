"use client";

import { useState } from "react";

interface MediaGalleryProps {
  media: { type: "image" | "video"; src: string }[];
}

export default function MediaGallery({ media }: MediaGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="my-6">
      {/* Горизонтальная прокрутка */}
      <div className="flex gap-4 overflow-x-auto px-2 py-2">
        {media.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 cursor-pointer rounded-lg shadow-lg overflow-hidden w-40 h-40 bg-black"
            onClick={() => setActiveIndex(index)}
          >
            {item.type === "image" ? (
              <img src={item.src} alt={`media-${index}`} className="w-full h-full object-cover" />
            ) : (
              <video src={item.src} className="w-full h-full object-cover" />
            )}
          </div>
        ))}
      </div>

      {/* Лайтбокс */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setActiveIndex(null)}
        >
          {media[activeIndex].type === "image" ? (
            <img src={media[activeIndex].src} className="max-h-full max-w-full" />
          ) : (
            <video src={media[activeIndex].src} className="max-h-full max-w-full" controls autoPlay />
          )}
        </div>
      )}
    </div>
  );
}
