"use client";

import Link from "next/link";
import SocialPopup from "../../components/SocialPopup";
import { VideoMobileSlider } from "../../components/VideoMobileSlider";
import { useState, useRef } from "react";
import Slider from "../../components/Slider";

const concertPhotos = [
  { src: "/concert-chel-2-06/1.jpg", alt: "Концерт Макса Коржа, Челябинск" },
  { src: "/concert-chel-2-06/2.jpg", alt: "Слэм в ДС Юность" },
  { src: "/concert-chel-2-06/3.jpg", alt: "Толпа на концерте" },
  { src: "/concert-chel-2-06/4.jpg", alt: "Эмоции ребят" },
];

export default function ConcertChelPage() {
  const [openVideo, setOpenVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 sm:px-16 md:px-32 py-16">
      
      {/* Заголовок */}
      <section className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-4">
          Концерт Макса Коржа | Челябинск
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed">
          2 июня 2018 · ДС «Юность»
        </p>

        <div className="mt-6">
          <img
            src="/concert-chel-2-06/cover.jpg"
            alt="Концерт Макса Коржа в Челябинске"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Вступление */}
      <section className="mb-12">
        <p className="text-lg leading-relaxed">
          2 июня 2018 года мы съездили на концерт Макса Коржа в Челябинск.
          Для нашего движа это был первый бас-тур: выезд из Уфы, ночь в дороге,
          концерт и возвращение обратно одной командой.
        </p>
      </section>

      {/* О концерте */}
      <section className="mb-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">О концерте</h2>
        <p className="text-lg leading-relaxed indent-6 mb-4">
          Концерт прошёл в ДС «Юность» и собрал около 5 тысяч человек.
        </p>
        <p className="text-lg leading-relaxed indent-6">
          Кто-то пришёл ради слэма, кто-то - чтобы просто послушать
          и прожить этот вечер, но в итоге все оказались в одной атмосфере.
        </p>
      </section>

      {/* Видео */}
      <section className="mb-12">
        <div
          className="relative cursor-pointer max-w-3xl mx-auto"
          onClick={() => setOpenVideo(true)}
        >
          <img
            src="/concert-chel-2-06/video-preview.jpg"
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
            src="/concert-chel-2-06/concert.mp4"
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
          Дорога туда и обратно стала отдельной частью поездки.
          Разговоры, знакомство, усталость и ощущение, что рядом - свои.
          Именно с этого выезда стало понятно, что такие поездки -
          это не только концерт, но и люди, которые едут вместе.
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
          Этот бас-тур стал отправной точкой.
          После Челябинска выезды начали становиться регулярными,
          а формат - привычным.
        </p>
      </section>

{/* Навигация */}
<section className="pb-16 px-6 sm:px-16 md:px-32">
  <div className="
    max-w-5xl mx-auto
    flex flex-wrap gap-4
    justify-center
  ">

    {/* К формату Концерты — стрелка */}
    <Link
      href="/formats/concerts#format-events"
      aria-label="К мероприятиям формата Концерты"
      className="
        px-6 py-3
        border border-white rounded-lg
        flex items-center justify-center
        text-2xl font-bold
        leading-none
        hover:bg-white hover:text-black
        transition
      "
    >
      ←
    </Link>

    {/* К форматам */}
    <Link
      href="/#formats"
      className="
        px-6 py-3
        border border-white rounded-lg
        flex items-center justify-center
        leading-none
        hover:bg-white hover:text-black
        transition
      "
    >
      К форматам
    </Link>

    {/* Все мероприятия */}
    <Link
      href="/events"
      className="
        px-6 py-3
        bg-white text-black rounded-lg
        flex items-center justify-center
        leading-none
        hover:bg-gray-200
        transition
      "
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
