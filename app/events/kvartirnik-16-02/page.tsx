"use client";

import { useState } from "react";
import Slider from "../../components/Slider";

const photosWarm = [
  { src: "/kvartirnik-16-02/p1.jpg", alt: "Квартирник — гитара" },
  { src: "/kvartirnik-16-02/p2.jpg", alt: "Квартирник — настольные игры" },
  { src: "/kvartirnik-16-02/p3.jpg", alt: "Квартирник — улыбки" },
];

const photosMemory = [
  { src: "/kvartirnik-16-02/m1.jpg", alt: "Тёплый момент" },
  { src: "/kvartirnik-16-02/m2.jpg", alt: "Душевный вечер" },
  { src: "/kvartirnik-16-02/m3.jpg", alt: "Квартирник Dvizh" },
];

export default function KvartirnikPage() {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 sm:px-16 md:px-32 py-16">

      {/* ЛАМПОВЫЙ ВЕЧЕР */}
      <section className="max-w-3xl mx-auto mb-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-6">
          Квартирник
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-6">
            16 февраля 2025</h1>  
        </h1>

      {/* ВИДЕО-ЛУП В НАЧАЛЕ */}
      <section className="mb-16">
        <div className="max-w-md sm:max-w-lg mx-auto">
          <div
            className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
            style={{ aspectRatio: "9 / 16" }}
            onClick={() => setOpenVideo(true)}
          >
            <video
              src="/kvartirnik-16-02/hero-loop.mp4"
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

          <p className="text-center text-sm text-gray-400 mt-3">
            Нажмите, чтобы посмотреть видео со звуком
          </p>
        </div>
      </section>

      {/* МОДАЛКА */}
      {openVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
          <button
            onClick={() => setOpenVideo(false)}
            className="fixed top-6 right-6 z-50 w-12 h-12
                       bg-black/70 text-white text-3xl
                       rounded-full flex items-center justify-center
                       hover:bg-black/90 transition"
          >
            ✕
          </button>

          <div
            className="bg-black rounded-xl overflow-hidden w-full max-w-md sm:max-w-lg"
            style={{ aspectRatio: "9 / 16" }}
          >
            <video
              src="/kvartirnik-16-02/hero-full.mp4"
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

        <p className="text-lg sm:text-xl leading-relaxed text-gray-200">
          16 февраля мы собрались в кругу друзей на уютный квартирник —
          песни под гитару, настольные игры и душевные разговоры. 🎸
        </p>
      </section>

      {/* МОМЕНТЫ ТЕПЛА */}
      <section className="max-w-3xl mx-auto mb-16">
        <Slider photos={photosWarm} peek={14} />
      </section>

      {/* В ПАМЯТИ */}
      <section className="max-w-3xl mx-auto mb-20">
        <p className="text-lg leading-relaxed indent-6 mb-6">
          Воскресный вечер напомнил, что главное — люди рядом и простые радости.
          Немного фотокарточек в память о том, как тепло мы посидели этим вечером. ❤️
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {photosMemory.map((photo, i) => (
            <img
              key={i}
              src={photo.src}
              alt={photo.alt}
              className="rounded-lg object-cover w-full h-full"
            />
          ))}
        </div>
      </section>

      {/* ФИНАЛЬНОЕ ФОНОВОЕ ВИДЕО */}
      <section className="mt-24">
        <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-xl">
          <video
            src="/kvartirnik-16-02/final-loop.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
          />
        </div>
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
