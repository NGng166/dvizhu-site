"use client";

import { useState } from "react";

type VideoItem = {
  loop: string;
  full: string;
};

export function VideoMobileSlider({ videos }: { videos: VideoItem[] }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const prev = () =>
    setIndex((i) => (i === 0 ? videos.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === videos.length - 1 ? 0 : i + 1));

  return (
    <>
      {/* Мобильная версия */}
      <div className="block sm:hidden mb-12">
        <div className="relative max-w-xs mx-auto">

          {/* Видео */}
          <div
            className="relative overflow-hidden rounded-xl shadow-lg"
            style={{ aspectRatio: "9 / 16" }}
            onClick={() => setOpen(true)}
          >
            <video
              src={videos[index].loop}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Play */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center text-black text-2xl">
                ▶
              </div>
            </div>
          </div>

          {/* Кнопки */}
          <button
            onClick={prev}
            className="absolute left-[-50px] top-1/2 -translate-y-1/2 text-white text-3xl"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-[-50px] top-1/2 -translate-y-1/2 text-white text-3xl"
          >
            ›
          </button>
        </div>
      </div>

      {/* Модалка */}
      {open && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
          <button
            onClick={() => setOpen(false)}
            className="fixed top-6 right-6 w-12 h-12 bg-black/70 text-white text-3xl rounded-full"
          >
            ✕
          </button>

          <div
            className="w-full max-w-sm rounded-xl overflow-hidden"
            style={{ aspectRatio: "9 / 16" }}
          >
            <video
              src={videos[index].full}
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
}
