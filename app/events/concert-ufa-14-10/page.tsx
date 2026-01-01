"use client";

import Link from "next/link";
import SocialPopup from "../../components/SocialPopup";
import { VideoMobileSlider } from "../../components/VideoMobileSlider";
import { useState, useRef } from "react";
import Slider from "../../components/Slider";

const concertPhotos = [
  { src: "/concert-ufa-14-10/1.jpg", alt: "Концерт Макса Коржа, Уфа" },
  { src: "/concert-ufa-14-10/2.jpg", alt: "Толпа фанатов" },
  { src: "/concert-ufa-14-10/3.jpg", alt: "Эмоции ребят" },
  { src: "/concert-ufa-14-10/4.jpg", alt: "Акустическая часть концерта" },
];

export default function ConcertUfaPage() {
  const [openVideo, setOpenVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 sm:px-16 md:px-32 py-16">

      {/* Заголовок */}
      <section className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-4">
          Концерт Макса Коржа | Уфа
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed">
          14 октября 2018 · Ледовый дворец «Уфа-Арена»
        </p>

        <div className="mt-6">
          <img
            src="/concert-ufa-14-10/cover.jpg"
            alt="Концерт Макса Коржа в Уфе"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

{/* Вступление */}
<section className="mb-12 max-w-3xl mx-auto">
  <p className="text-lg leading-relaxed indent-6">
    14 октября 2018 года мы приняли у себя в Уфе концерт белорусского артиста Макса Коржа.  
    Фанаты начали собираться возле ледового дворца уже с обеда, а атмосфера накалялась с каждым часом.
  </p>
</section>


      {/* О концерте */}
      <section className="mb-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">О концерте</h2>
        <p className="text-lg leading-relaxed indent-6 mb-4">
          На протяжении почти двух часов Корж исполнял свои хиты, а также играл в тихой акустической обстановке.  
          В программе прозвучали не только его песни, но и композиции других исполнителей, например «Руки Вверх».
        </p>
        <p className="text-lg leading-relaxed indent-6">
          Было невероятно круто принять Макса у себя дома: вся Уфа собрала фанатов, которые вместе создали незабываемую атмосферу.
        </p>
      </section>

      {/* Видео */}
      <section className="mb-12">
        <div
          className="relative cursor-pointer max-w-3xl mx-auto"
          onClick={() => setOpenVideo(true)}
        >
          <img
            src="/concert-ufa-14-10/video-preview.jpg"
            alt="Видео с концерта"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/60 px-6 py-3 rounded-lg text-lg">
              Смотреть видео
            </div>
          </div>
        </div>
      </section>

      {/* Модалка видео */}
      {openVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4"
          onClick={() => {
            setOpenVideo(false);
            videoRef.current?.pause();
          }}
        >
          <video
            ref={videoRef}
            src="/concert-ufa-14-10/concert.mp4"
            controls
            autoPlay
            className="max-w-full max-h-full rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Фото */}
      <section className="mb-12">
        <div className="max-w-3xl mx-auto">
          <Slider photos={concertPhotos} />
        </div>
      </section>

      {/* Итог */}
      <section className="mb-12 max-w-3xl mx-auto">
        <p className="text-lg leading-relaxed indent-6">
          Концерт в Уфе стал настоящим праздником для фанатов Коржа.  
          Атмосфера, эмоции и энергия сцены сделали этот день незабываемым.
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
