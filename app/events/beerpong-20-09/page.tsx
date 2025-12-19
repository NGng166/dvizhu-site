"use client";

import { useState } from "react";

const loopVideos = [
  { id: 1, srcLoop: "/beerpong-20-09/v1.mp4", srcFull: "/beerpong-20-09/v1.mp4" },
  { id: 2, srcLoop: "/beerpong-20-09/v2.mp4", srcFull: "/beerpong-20-09/v2.mp4" },
];

export default function BeerPongPage() {
  const [openVideoId, setOpenVideoId] = useState<number | null>(null);

  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 sm:px-16 md:px-32 py-16">

      {/* Заголовок */}
      <section className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-4">
          BEERPONG
        </h1>
        <p className="text-lg text-gray-300">
          20 сентября 2025
        </p>
      </section>

      {/* Первое видео под заголовком */}
      <section className="mb-20 max-w-3xl mx-auto">
        <div
          className="relative overflow-hidden rounded-full cursor-pointer group"
          style={{ aspectRatio: "1 / 1" }}
          onClick={() => setOpenVideoId(loopVideos[0].id)}
        >
          <video
            src={loopVideos[0].srcLoop}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-black text-3xl">
              ▶
            </div>
          </div>
        </div>
      </section>

      {/* Основной текст */}
      <section className="max-w-3xl mx-auto mb-20 space-y-6 text-lg leading-relaxed">
        <p className="indent-6">
          Вновь вернулись к любимому формату - БирПонг! Команды по два человека, десять стаканов на столе, пиво, крики, поддержка и меткость - всё, что мы так любим в этих вечерах.
        </p>

        <p className="indent-6">
          За каждой партией - море эмоций: кто-то метит точно, кто-то промахивается, смеётся, подбадривает и злится одновременно. Побеждает команда, которая быстрее выбила все стаканы соперника, а после игр мы остаёмся в лаундже, болтаем, пьем и отдыхаем вместе.
        </p>

        <p className="indent-6">
          Для новичков - это просто, весело и затягивает. За лето к нам пришло много новых лиц, и всем удалось быстро войти в процесс. БирПонг - это не только про игру, а про атмосферу, драйв и людей рядом.
        </p>
      </section>

      {/* Второе видео перед финальной строкой */}
      <section className="mb-16 max-w-3xl mx-auto">
        <div
          className="relative overflow-hidden rounded-full cursor-pointer group"
          style={{ aspectRatio: "1 / 1" }}
          onClick={() => setOpenVideoId(loopVideos[1].id)}
        >
          <video
            src={loopVideos[1].srcLoop}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-black text-3xl">
              ▶
            </div>
          </div>
        </div>
      </section>

      {/* Модальные окна */}
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
              >
                ✕
              </button>
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
        Берёшь друга - и залетаешь 🍻
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
