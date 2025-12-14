"use client";

import { useState } from "react";

const loopVideos = [
  { id: 1, srcLoop: "/obshe-sbor-14-08/v1-loop.mp4", srcFull: "/obshe-sbor-14-08/v1-full.mp4" },
  { id: 2, srcLoop: "/obshe-sbor-14-08/v2-loop.mp4", srcFull: "/obshe-sbor-14-08/v2-full.mp4" },
  { id: 3, srcLoop: "/obshe-sbor-14-08/v3-loop.mp4", srcFull: "/obshe-sbor-14-08/v3-full.mp4" },
];

export default function ObshebSborPage() {
  const [openVideoId, setOpenVideoId] = useState<number | null>(null);

  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 sm:px-16 md:px-32 py-16">

      {/* Заголовок */}
      <section className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-4">
          Общий сбор в Дустаре
        </h1>
        <p className="text-lg text-gray-300">
          14 августа 2025
        </p>
      </section>

      {/* Общее фото */}
      <section className="mb-16 max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg">
        <img
          src="/obshe-sbor-14-08/hero.webp"
          alt="Общий сбор в Дустаре"
          className="w-full h-auto object-cover rounded-xl"
        />
      </section>

      {/* Текстовые абзацы */}
      <section className="max-w-3xl mx-auto mb-20 space-y-6 text-lg leading-relaxed">
        <p className="indent-6">
          Как обычно, перед лагерем мы собираемся вместе. Погулять, поболтать, встретиться, иногда просто пошататься по центру, поиграть в баскетбол или поиграть в настольные игры — всё, чтобы почувствовать атмосферу Dvizh заранее.
        </p>
        <p className="indent-6">
          На этот раз мы встретились в любимом баре «Дустар». Ребята нас уже знают, помнят и приготовили специально для нас две бутылки летней настойки. Было тепло, весело и по-домашнему — как всегда с нашими встречами.
        </p>
        <p className="indent-6">
          Такие вечера напоминают, что Dvizh — это не только лагеря и мероприятия, но и простые моменты вместе, когда можно расслабиться и просто быть собой.
        </p>
      </section>

      {/* Видео с круговой маской */}
      <section className="mb-20 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {loopVideos.map(video => (
            <div
              key={video.id}
              className="relative flex-1 rounded-full overflow-hidden cursor-pointer group"
              style={{ aspectRatio: "1 / 1" }}
              onClick={() => setOpenVideoId(video.id)}
            >
              <video
                src={video.srcLoop}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              {/* Кнопка Play overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-black text-3xl">
                  ▶
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Модальные окна для полного видео */}
      {loopVideos.map(video => (
        openVideoId === video.id && (
          <div key={video.id} className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
            <div className="relative w-full max-w-md sm:max-w-lg">
              <button
                onClick={() => setOpenVideoId(null)}
                className="fixed top-6 right-6 z-50 w-12 h-12
                           bg-black/70 text-white text-3xl
                           rounded-full flex items-center justify-center
                           hover:bg-black/90 transition"
              >✕</button>
              <div className="bg-black rounded-full overflow-hidden w-80 h-80 mx-auto">
                <video
                  src={video.srcFull}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )
      ))}

      {/* Финальная строка */}
      <section className="text-center mt-8 text-lg text-gray-300">
        Встретились, посидели, улыбнулись — и настроение на лагерь готово ✨
      </section>

      {/* Кнопка назад */}
      <div className="text-center mt-8">
        <a
          href="/"
          className="bg-orange-500 px-6 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Назад на главную
        </a>
      </div>
    </main>
  );
}
