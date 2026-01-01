"use client";

import Link from "next/link";
import SocialPopup from "../../components/SocialPopup";
import { useState, useRef } from "react";
import Slider from "../../components/Slider";

const concertPhotos = [
  { src: "/concert-moscow-31-08/1.jpg", alt: "Концерт Макса Коржа, Москва" },
  { src: "/concert-moscow-31-08/2.jpg", alt: "Толпа на стадионе" },
  { src: "/concert-moscow-31-08/3.jpg", alt: "Эмоции ребят" },
  { src: "/concert-moscow-31-08/4.jpg", alt: "Слэм и атмосфера" },
];

export default function ConcertMoscowPage() {
  const [openVideo, setOpenVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 sm:px-16 md:px-32 py-16">

      {/* Заголовок */}
      <section className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-4">
          Концерт Макса Коржа | Москва
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed">
          31 августа 2019 · Стадион «Динамо»
        </p>

        <div className="mt-6">
          <img
            src="/concert-moscow-31-08/cover.jpg"
            alt="Концерт Макса Коржа в Москве"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Вступление */}
      <section className="mb-12 max-w-3xl mx-auto">
        <p className="text-lg leading-relaxed indent-6">
          Не заставляли долго ждать — наш следующий выезд состоялся в столицу России!  
          Второй по величине стадион в стране, но людей оказалось в два раза больше, чем в Челябинске.  
          Мест в басе было всего 49, поэтому никто не хотел пропустить такой масштабный концерт.
        </p>
      </section>

      {/* О концерте */}
      <section className="mb-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">О концерте</h2>
        <p className="text-lg leading-relaxed indent-6 mb-4">
          Концерт Макса Коржа длился почти два часа. Белорусский музыкант исполнил любимые хиты: «Жить в кайф», «Малиновый закат», «Эндорфин», «Шантаж», «Малый повзрослел», «Слово пацана», «Горы по колено», «Оптимист» и «Два типа людей».
        </p>
        <p className="text-lg leading-relaxed indent-6">
          На стадионе собралось около 30 000 человек, и атмосфера была невероятной. Каждый смог прочувствовать масштаб и энергетику концерта, а для нашей команды было круто принимать Макса у себя в «домашних» условиях столицы.
        </p>
      </section>

<section className="mb-12 max-w-3xl mx-auto">
  <h2 className="text-2xl font-semibold mb-4">Видео с концерта</h2>
  <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
    <iframe
      src="https://vk.com/video_ext.php?oid=-28905875&id=456272657&hash=3a1a2b3c4d5e6f7g&hd=2"
      className="absolute top-0 left-0 w-full h-full"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    ></iframe>
  </div>
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
          Концерт в Москве стал одним из самых масштабных выездов, которые мы организовывали.  
          Энергия, слэм, эмоции и впечатления останутся с нами надолго.
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
