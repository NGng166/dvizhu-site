"use client";

import { useState } from "react";
import SocialPopup from "../../components/SocialPopup";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Kvartirnik2704Page() {
  const [openVideo, setOpenVideo] = useState<number | null>(null);
  const router = useRouter();

  const videos = [
    {
      loop: "/kvartirnik-27-04/v1-loop.mp4",
      full: "/kvartirnik-27-04/v1-full.mp4",
    },
    {
      loop: "/kvartirnik-27-04/v2-loop.mp4",
      full: "/kvartirnik-27-04/v2-full.mp4",
    },
    {
      loop: "/kvartirnik-27-04/v3-loop.mp4",
      full: "/kvartirnik-27-04/v3-full.mp4",
    },
  ];

  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 sm:px-16 md:px-32 py-16">

      {/* ЗАГОЛОВОК */}
      <section className="max-w-5xl mx-auto mb-14 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-4">
          Квартирник
        </h1>
        <p className="text-lg text-gray-300">
          27 апреля 2025
        </p>
      </section>

      {/* ТЕКСТ */}
      <section className="max-w-5xl mx-auto space-y-8 text-lg leading-relaxed mb-20">
        <p className="indent-6">
          В этот вечер мы просто собрались друзьями в уже полюбившемся антикафе
          «Странные дела». Без спешки и без плана - поиграть на гитаре,
          попеть любимые песни и наконец спокойно увидеться.
        </p>

        <p className="indent-6">
          Пели, болтали, смеялись, вспоминали старое и много говорили по душам.
          Кто-то брал гитару, кто-то подпевал, кто-то просто сидел рядом
          с чаем и слушал. Было очень по-домашнему и тепло.
        </p>

      </section>

      {/* ВИДЕО - 3 КРУГЛЫХ */}
      <section className="mb-20">
        <div
          className="
            max-w-5xl mx-auto
            grid grid-cols-1
            sm:grid-cols-3
            gap-10
            justify-items-center
          "
        >
          {videos.map((video, index) => (
            <div key={index} className="w-56">
              <div
                className="relative aspect-square rounded-full overflow-hidden shadow-lg cursor-pointer group"
                onClick={() => setOpenVideo(index)}
              >
                <video
                  src={video.loop}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition">
                  <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center text-black text-2xl">
                    ▶
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* МОДАЛКА */}
      {openVideo !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
          <button
            onClick={() => setOpenVideo(null)}
            className="
              fixed top-6 right-6 z-50
              w-12 h-12
              bg-black/70 text-white text-5xl
              rounded-full flex items-center justify-center
              hover:bg-black/90 transition
            "
          >
            ✕
          </button>

          <div
            className="w-full max-w-sm sm:max-w-md bg-black rounded-xl overflow-hidden"
            style={{ aspectRatio: "1 / 1" }}
          >
            <video
              src={videos[openVideo].full}
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
        <p className="text-center mt-8 text-lg text-gray-300">
          Такие вечера не хочется описывать подробно.
          Их хочется запомнить.
        </p>
        <p className="text-center mt-8 text-lg text-gray-300">
        </p>

      {/* Навигация */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => router.back()} // <-- возвращаем на предыдущую страницу
              className="px-6 py-3 border border-white rounded-lg text-2xl font-bold hover:bg-white hover:text-black transition"
          >
            ←
          </button>

          <Link
            href="/#formats"
            className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
          >
            К форматам
          </Link>

          <Link
            href="/events"
            className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition"
          >
            Все мероприятия
          </Link>
        </div>
      </section>

      <SocialPopup />
    </main>
  );
}
