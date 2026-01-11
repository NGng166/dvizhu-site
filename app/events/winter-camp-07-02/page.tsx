"use client";

import Link from "next/link";
import Slider from "../../components/Slider";
import { useState } from "react";
import SocialPopup from "../../components/SocialPopup";

const photos = [
  { src: "/winter-camp-2-0-07-02/p1.jpg", alt: "Winter Camp 2.0 - костёр" },
  { src: "/winter-camp-2-0-07-02/p2.jpg", alt: "Winter Camp 2.0 - игры на снегу" },
  { src: "/winter-camp-2-0-07-02/p3.jpg", alt: "Winter Camp 2.0 - вечерние посиделки" },
  { src: "/winter-camp-2-0-07-02/p4.jpg", alt: "Winter Camp 2.0 - отрядная жизнь" },
  { src: "/winter-camp-2-0-07-02/p5.jpg", alt: "Winter Camp 2.0 - дружеская атмосфера" },
];

export default function WinterCampPage() {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 sm:px-16 md:px-32 py-16">

      {/* ШАПКА / Hero-блок */}
      <section className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-4">
          Winter Camp 2.0
        </h1>
        <p className="mb-6 text-lg text-gray-300 italic">
          7–9 февраля 2025
        </p>
        <p className="text-lg sm:text-xl leading-relaxed text-gray-200 text-justify indent-6 mb-2">
          Winter Camp 2.0 - лагерь, где взрослые могли выдохнуть,
          перезагрузиться и почувствовать себя легко, как в детстве. 😍
        </p>
      </section>

      {/* ВИДЕО-ЛУП */}
      <section className="mb-16">
        <div className="max-w-md sm:max-w-lg mx-auto">
          <div
            className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
            style={{ aspectRatio: "9 / 16" }}
            onClick={() => setOpenVideo(true)}
          >
            <video
              src="/winter-camp-2-0-07-02/hero-loop.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Play overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-black text-3xl">
                ▶
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-400 mt-2">
            Нажмите, чтобы посмотреть видео со звуком
          </p>
        </div>
      </section>

      {/* МОДАЛКА С ПОЛНЫМ ВИДЕО */}
      {openVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
          <div className="relative w-full max-w-md sm:max-w-lg">

            {/* Кнопка закрытия */}
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
              className="bg-black rounded-xl overflow-hidden"
              style={{ aspectRatio: "9 / 16" }}
            >
              <video
                src="/winter-camp-2-0-07-02/hero-full.mp4"
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* Идея лагеря */}
      <section className="mb-8 max-w-3xl mx-auto text-justify">
        <p className="text-lg leading-relaxed indent-6 mb-2">
          Этот лагерь - маленький остров детства для взрослых.  
          Отрядная жизнь, зимние забавы, тематическая смена, вечеринки и уютные моменты  
          создавали пространство, где можно было быть собой и наслаждаться простыми радостями.
        </p>
        <p className="text-lg leading-relaxed indent-6 mb-2">
          Мы пели, играли, смеялись, устраивали препати перед лагерем в баре,  
          делились историями и просто были рядом друг с другом.  
        </p>
        <p className="text-lg leading-relaxed indent-6 mb-2">
          Те мгновения, когда время как будто останавливается - вот что делало лагерь особенным.
        </p>
        <p className="text-lg leading-relaxed indent-6 mb-2">
          Winter Camp 2.0 стал настоящим перезагрузочным островком: тёплая атмосфера,  
          душевное общение и ощущение свободы, как в детстве.
        </p>
        <p className="text-lg leading-relaxed indent-6 mb-2">
          Эта смена напомнила нам, что Dvizh - это люди, моменты и тепло,  
          которые хочется хранить в памяти ❄️💛
        </p>
        <p className="text-lg leading-relaxed indent-6 italic mb-6 text-center text-gray-400">
          Лагерь начинается задолго до первого костра 😉
        </p>
      </section>

      {/* Навигация */}
      <section className="pb-16 px-6 sm:px-16 md:px-32">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-4 justify-center">
          <Link
            href="/formats/lager#format-events"
            aria-label="К мероприятиям формата"
            className="px-6 py-3 border border-white rounded-lg flex items-center justify-center text-2xl font-bold leading-none hover:bg-white hover:text-black transition"
          >
            ←
          </Link>
          <Link
            href="/#formats"
            className="px-6 py-3 border border-white rounded-lg flex items-center justify-center leading-none hover:bg-white hover:text-black transition"
          >
            К форматам
          </Link>
          <Link
            href="/events"
            className="px-6 py-3 bg-white text-black rounded-lg flex items-center justify-center leading-none hover:bg-gray-200 transition"
          >
            Все мероприятия
          </Link>
        </div>
      </section>

      {/* Попап социальных сетей */}
      <SocialPopup />

    </main>
  );
}
