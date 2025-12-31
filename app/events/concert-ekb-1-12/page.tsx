"use client";

import Link from "next/link";
import SocialPopup from "../../components/SocialPopup";
import { VideoMobileSlider } from "../../components/VideoMobileSlider";
import { useState, useRef } from "react";
import Slider from "../../components/Slider";

const concertPhotos = [
  { src: "/concert-ekb-1-12/1.jpg", alt: "Концерт Макса Коржа, Екатеринбург" },
  { src: "/concert-ekb-1-12/2.jpg", alt: "Afterparty Dvizh в Ельцин Центре" },
  { src: "/concert-ekb-1-12/3.jpg", alt: "Толпа на концерте" },
  { src: "/concert-ekb-1-12/4.jpg", alt: "Эмоции ребят" },
];

export default function ConcertEkbPage() {
  const [openVideo, setOpenVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 sm:px-16 md:px-32 py-16">

      {/* Заголовок */}
      <section className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-4">
          Концерт Макса Коржа | Екатеринбург
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed">
          КРК «Уралец» + afterparty
        </p>

        <div className="mt-6">
          <img
            src="/concert-ekb-1-12/cover.jpg"
            alt="Концерт Макса Коржа в Екатеринбурге"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Вступление */}
      <section className="mb-12">
        <p className="text-lg leading-relaxed">
          1 декабря 2018 года мы отправились в Екатеринбург на третий официальный выезд из Уфы.
          Долгая поездка, крутая компания и море эмоций ждали нас на концерте Макса Коржа
          и на afterparty от наших друзей из ДвижЕкб с диджеем Selebrium!
        </p>
      </section>

      {/* О концерте */}
      <section className="mb-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">О концерте</h2>
        <p className="text-lg leading-relaxed indent-6 mb-4">
          Концерт прошёл в КРК «Уралец» и собрал множество людей не только из Екатеринбурга, но и из Самары, Саратова, Оренбурга - даже с Казахстана призжали фанаты!
        </p>
        <p className="text-lg leading-relaxed indent-6 mb-4">
          Сразу после концерта всех собрал Ельцин Центр, где состоялась Dvizh.туса.
          Там всех раскачал dj "Selebrium" - море эмоций и крутой движ!
        </p>
        <p className="text-lg leading-relaxed indent-6">
          Этот выезд показал, что Корж объединяет - независимо от города, мы все оказались одной командой.
        </p>
      </section>

      {/* Видео */}
      <section className="mb-12">
        <div
          className="relative cursor-pointer max-w-3xl mx-auto"
          onClick={() => setOpenVideo(true)}
        >
          <img
            src="/concert-ekb-1-12/video-preview.jpg"
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
            src="/concert-ekb-1-12/concert.mp4"
            controls
            autoPlay
            className="max-w-full max-h-full rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Про дорогу */}
      <section className="mb-12">
        <p className="text-lg leading-relaxed">
          Дорога туда и обратно - это отдельная часть поездки. Разговоры, знакомство,
          смех, усталость и ощущение, что рядом - свои. Именно такие выезды делают нас
          настоящей командой.
        </p>
      </section>

      {/* Фото */}
      <section className="mb-12">
        <div className="max-w-3xl mx-auto">
          <Slider photos={concertPhotos} />
        </div>
      </section>

      {/* Итог */}
      <section className="mb-12">
        <p className="text-lg leading-relaxed text-center">
          Третий выезд из Уфы в Екатеринбург показал: большие поездки и концерты - это
          эмоции, впечатления и новые друзья. Дальше будет ещё больше! 🔥
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
