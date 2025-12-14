"use client";

import { useState } from "react";

type VideoItem = {
  loop: string; // луп-превью
  full: string; // полное видео для модалки
  caption: string;
};

export function VideoMobileSlider({ videos }: { videos: VideoItem[] }) {
  const [index, setIndex] = useState(0);
  const [openVideo, setOpenVideo] = useState<string | null>(null);

  const prev = () =>
    setIndex((i) => (i === 0 ? videos.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === videos.length - 1 ? 0 : i + 1));

  return (
    <>
      {/* МОБИЛЬНЫЙ СЛАЙДЕР */}
      <div className="sm:hidden mb-16">
        <div className="relative max-w-xs mx-auto">
          <div
            className="relative overflow-hidden rounded-xl shadow-lg"
            style={{ aspectRatio: "9 / 16" }}
            onClick={() => setOpenVideo(videos[index].full)}
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
            className="absolute left-[-18px] top-1/2 -translate-y-1/2
              w-10 h-10 rounded-full bg-black/70 text-white text-xl
              flex items-center justify-center"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-[-18px] top-1/2 -translate-y-1/2
              w-10 h-10 rounded-full bg-black/70 text-white text-xl
              flex items-center justify-center"
          >
            ›
          </button>

          {/* Peak */}
          <div className="absolute inset-y-0 left-[-28px] w-6 bg-gradient-to-r from-black/30 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-[-28px] w-6 bg-gradient-to-l from-black/30 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* МОДАЛКА */}
      {openVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
          <button
            onClick={() => setOpenVideo(null)}
            className="fixed top-6 right-6 z-50 w-12 h-12
              bg-black/70 text-white text-3xl rounded-full
              flex items-center justify-center"
          >
            ✕
          </button>

          <div
            className="w-full max-w-md bg-black rounded-xl overflow-hidden"
            style={{ aspectRatio: "9 / 16" }}
          >
            <video
              src={openVideo}
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
