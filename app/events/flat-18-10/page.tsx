"use client";

import { useState } from "react";
import Slider from "../../components/Slider";

const photos = [
  { src: "/flat-18-10/p1.jpg", alt: "Флэт вечеринка 1" },
  { src: "/flat-18-10/p2.jpg", alt: "Флэт вечеринка 2" },
  { src: "/flat-18-10/p3.jpg", alt: "Флэт вечеринка 3" },
];

const reportVideos = [
  { id: 1, srcLoop: "/flat-18-10/hero-loop.mp4", srcFull: "/flat-18-10/hero.mp4" },
  { id: 2, srcLoop: "/flat-18-10/hero2-loop.mp4", srcFull: "/flat-18-10/hero2.mp4" },
];

const progrevs = [
  { id: 3, srcLoop: "/flat-18-10/progrev1-loop.mp4", srcFull: "/flat-18-10/progrev1-full.mp4" },
  { id: 4, srcLoop: "/flat-18-10/progrev2-loop.mp4", srcFull: "/flat-18-10/progrev2-full.mp4" },
  { id: 5, srcLoop: "/flat-18-10/progrev3-loop.mp4", srcFull: "/flat-18-10/progrev3-full.mp4" },
];

export default function FlatPage() {
  const [openVideoId, setOpenVideoId] = useState<number | null>(null);

  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 sm:px-16 md:px-32 py-16">

      {/* Заголовок */}
      <section className="mb-12 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-4">
          FLAT
        </h1>
        <p className="text-lg text-gray-300">
          18 октября 2025
        </p>
      </section>

      {/* Hero фото */}
      <section className="mb-12 max-w-5xl mx-auto overflow-hidden rounded-xl shadow-lg">
        <img
          src="/flat-18-10/hero.jpg"
          alt="FLAT вечеринка"
          className="w-full h-auto object-cover rounded-xl"
        />
      </section>

      {/* Основной текст */}
      <section className="max-w-5xl mx-auto mb-20 space-y-6 text-lg leading-relaxed">
        <p className="indent-6">
          После насыщенного лета мы снова собрались на коттедже, чтобы разнести танцпол и просто хорошо провести вечер. Четырёхэтажный коттедж, диджей-сет всю ночь, фри-бар, конкурсы, турнир по Флипкапу и тематическая вечеринка GTA - всё это делало вечер огненным 🔥
        </p>
        <p className="indent-6">
          Мы танцевали, смеялись, играли и снимали видео, ловили настроение друг друга. Каждый ушёл с подарком, а атмосфера была именно такой, за которой мы любим Флэт - весело, ярко и душевно.
        </p>
        <p className="indent-6">
          Эта тусовка снова напомнила, что Dvizh - это не только мероприятия, а люди, энергия и моменты, которые хочется сохранять.
        </p>
      </section>

      {/* Слайдер с фото */}
      <section className="mb-20 max-w-4xl mx-auto">
        <Slider photos={photos} />
      </section>

      {/* Видео-блок: отчет и интерактив */}
      <section className="mb-20 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reportVideos.map(video => (
            <div
              key={video.id}
              className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
              style={{ aspectRatio: "16 / 9" }}
              onClick={() => setOpenVideoId(video.id)}
            >
              <video
                src={video.srcLoop}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-black text-5xl">
                  ▶
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Модалки для отчетного видео */}
      {[...reportVideos, ...progrevs].map(video => (
        openVideoId === video.id && (
          <div key={video.id} className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
            <div className="relative w-full max-w-5xl">
              <button
                onClick={() => setOpenVideoId(null)}
                className="fixed top-6 right-6 z-50 w-12 h-12
                           bg-black/70 text-white text-5xl
                           rounded-full flex items-center justify-center
                           hover:bg-black/90 transition"
              >
                ✕
              </button>
              <div className="bg-black rounded-xl overflow-hidden w-full">
                <video
                  src={video.srcFull}
                  controls
                  autoPlay
                  className="w-full h-auto" // сохраняет оригинальный формат
                />
              </div>
            </div>
          </div>
        )
      ))}

      {/* Превью видео-прогревов */}
      <section className="max-w-4xl mx-auto mb-8">
        <section className="max-w-5xl mx-auto mb-8 text-lg text-gray-300 space-y-4">
          <p className="font-semibold">
            Подготовка тоже была частью лагеря.
          </p>
          <p>
            Видео-прогревы получились живыми, яркими и смешными - мы решили сохранить их здесь как часть истории.
          </p>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {progrevs.map(video => (
            <div
              key={video.id}
              className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
              style={{ aspectRatio: "16 / 9" }}
              onClick={() => setOpenVideoId(video.id)}
            >
              <video
                src={video.srcLoop}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-black text-5xl">
                  ▶
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Финальная строка */}
      <section className="text-center mt-8 text-lg text-gray-300">
        Флэт начинается ещё до танцпола 😉
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
