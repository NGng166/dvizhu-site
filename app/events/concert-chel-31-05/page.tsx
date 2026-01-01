"use client";

import Link from "next/link";
import SocialPopup from "../../components/SocialPopup";
import { useState, useRef } from "react";
import Slider from "../../components/Slider";

const concertPhotos = [
  { src: "/concert-chel-31-05/1.jpg", alt: "Концерт Макса Коржа, Челябинск" },
  { src: "/concert-chel-31-05/2.jpg", alt: "Слэм на танцполе" },
  { src: "/concert-chel-31-05/3.jpg", alt: "Эмоции ребят" },
  { src: "/concert-chel-31-05/4.jpg", alt: "Толпа на концерте" },
];

export default function ConcertChel2Page() {
  const [openVideo, setOpenVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 sm:px-16 md:px-32 py-16">

      {/* Заголовок */}
      <section className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-4">
          Второй бас-тур | Челябинск
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed">
          31 мая - 1 июня 2018 · Челябинск
        </p>

        <div className="mt-6">
          <img
            src="/concert-chel-31-05/cover.jpg"
            alt="Второй бас-тур в Челябинске"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Вступление */}
      <section className="mb-12 max-w-3xl mx-auto">
        <p className="text-lg leading-relaxed indent-6">
          Второй раз мы отправились покорять Челябинск, и на этот раз было ещё жарче!  
          Больше площадка, больше народа и море эмоций. Как всегда, отложили все дела, взяли выходной и поехали толпой угореть на концерт Макса Коржа.
        </p>
      </section>

       {/* Фото */}
      <section className="mb-12">
        <div className="max-w-3xl mx-auto">
          <Slider photos={concertPhotos} />
        </div>
      </section>

      {/* Итог */}
      <section className="mb-12 max-w-3xl mx-auto">
        <p className="text-lg leading-relaxed indent-6">
          Второй бас-тур в Челябинск стал ещё более ярким и насыщенным, с большим количеством эмоций и впечатлений.  
          Каждый смог погрузиться в атмосферу концерта и тусовки вместе с командой.
        </p>
      </section>

      {/* Навигация */}
      <section className="pb-16 px-6 sm:px-16 md:px-32">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-4 justify-center">

          <Link
            href="/formats/concerts#format-events"
            aria-label="К мероприятиям формата Концерты"
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
