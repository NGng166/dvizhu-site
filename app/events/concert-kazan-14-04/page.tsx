"use client";

import Link from "next/link";
import SocialPopup from "../../components/SocialPopup";
import { VideoMobileSlider } from "../../components/VideoMobileSlider";
import { useState, useRef } from "react";
import Slider from "../../components/Slider";

const concertPhotos = [
  { src: "/concert-kazan-14-04/1.jpg", alt: "Концерт Макса Коржа, Казань" },
  { src: "/concert-kazan-14-04/2.jpg", alt: "Толпа на концерте" },
  { src: "/concert-kazan-14-04/3.jpg", alt: "Эмоции ребят" },
  { src: "/concert-kazan-14-04/4.jpg", alt: "Afterparty и Dvizh" },
];

export default function ConcertKazanPage() {
  const [openVideo, setOpenVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 sm:px-16 md:px-32 py-16">

      {/* Заголовок */}
      <section className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-4">
          Концерт Макса Коржа | Казань
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed">
          14 апреля 2019 · Татнефть Арена
        </p>

        <div className="mt-6">
          <img
            src="/concert-kazan-14-04/cover.jpg"
            alt="Концерт Макса Коржа в Казани"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Вступление */}
      <section className="mb-12">
        <p className="text-lg leading-relaxed">
          14 апреля 2019 года мы отправились в Казань на очередной выезд из Уфы.  
          Тёплая атмосфера, новые знакомства и безумный концерт Макса Коржа ждали нас на этом масштабном событии.
        </p>
        <p className="text-lg leading-relaxed mt-2">
          Цена поездки - 3300 ₽, в стоимость входили трансфер туда и обратно, билет на концерт и билет на afterparty. Выезд утром 14 апреля, возвращение 15 апреля днём.
        </p>
      </section>

      {/* О концерте */}
      <section className="mb-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">О концерте</h2>
        <p className="text-lg leading-relaxed indent-6 mb-4">
          Концерт прошёл в «Татнефть Арене» и собрал около 10 000 зрителей.  
          Макс Корж объединил всех в одну атмосферу - от первых аккордов до последней песни.
        </p>
        <p className="text-lg leading-relaxed indent-6 mb-4">
          Наш выезд включал около 100 человек из Уфы и несколько десятков автобусов из других городов. Мощный слэм, море эмоций и afterparty сделали этот день незабываемым.
        </p>
        <p className="text-lg leading-relaxed indent-6">
          Казань показала, что большие концерты - это не только музыка, но и люди, которые едут вместе, чтобы создавать атмосферу настоящего движа.
        </p>
      </section>

      {/* Видео */}
      <section className="mb-12">
        <div
          className="relative cursor-pointer max-w-3xl mx-auto"
          onClick={() => setOpenVideo(true)}
        >
          <img
            src="/concert-kazan-14-04/video-preview.jpg"
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
            src="/concert-kazan-14-04/concert.mp4"
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
          Дорога туда и обратно - это отдельная часть поездки: разговоры, новые знакомства, смех и ощущение, что рядом - свои люди.
          Именно это делает наши выезды такими запоминающимися.
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
          Концерт в Казани стал одним из крупнейших выездов из Уфы - 100 участников и незабываемая атмосфера.  
          Дальше ждут новые города и новые впечатления! 🔥
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
