"use client";

import Link from "next/link";
import SocialPopup from "../../components/SocialPopup";
import { VideoMobileSlider } from "../../components/VideoMobileSlider";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Slider from "../../components/Slider";

const photosSlider1 = [
  { src: "/bustour-06-09/p1.jpg", alt: "Мерч ДвижУфы для парней" },
  { src: "/bustour-06-09/p2.jpg", alt: "Мерч ДвижУфы в горах" },
  { src: "/bustour-06-09/p3.jpg", alt: "Мерч ДвижУфыв горах 2" },
  { src: "/bustour-06-09/p4.jpg", alt: "Мерч ДвижУфы парень и девушка" },
  { src: "/bustour-06-09/p5.jpg", alt: "Мерч ДвижУфы в городе" },
];

const videos = [
  { src: "/bustour-06-09/vid1.mp4", caption: "Атмосфера бастура ДвижУфы - она такая)))" },
  { src: "/bustour-06-09/vid2.mp4", caption: "В бастуре рождается любовь!.." },
  { src: "/bustour-06-09/vid3.mp4", caption: "Мерч ДвижУфы очень яркий" },
];

export default function BustourPage() {
  const [openVideo, setOpenVideo] = useState<string | null>(null);
  const router = useRouter();

  return (
    <main className="bg-gray-900 text-white min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 leading-tight">
            BUSTOUR <br /> Ufa - Almaty <br />
          </h1>
        <p className="text-lg text-gray-300">
          6 сентября
        </p>
        </div>

        {/* Фото под заголовком */}
        <img
          src="/bustour-06-09/bustour-cover.jpg"
          alt="BUSTOUR UFA-ALMATY"
          className="w-full max-w-3xl rounded-lg shadow-lg mb-12 mx-auto"
        />

        {/* Краткое описание */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed indent-6 text-justify">
            Бастур - это когда толпа фанатов, единомышленников и друзей отправляется в другой город на концерт любимого исполнителя. В сентябре 2025 года мы рванули в Казахстан: два автобуса, битком забитых фанатами, зажигательные тусовки в пути и города по маршруту - Астана и Алматы. Энергетику бастура не передать словами - это свобода, драйв и музыка, объединяющие людей со всего мира.
          </p>
        </section>

        {/* О поездке */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">О поездке</h2>

          <p className="text-lg leading-relaxed indent-6 mb-4 text-justify">
            Бастур - это не обычный «Бла-бла-кар», а настоящая дружеская экспедиция:
          </p>

          <ul className="list-disc list-inside text-lg space-y-1 mb-6 text-justify">
            <li>50 единомышленников в каждом автобусе, мощная колонка, атмосфера праздника;</li>
            <li>За рулем - энергия фанатов, которые готовы отрываться на полную.</li>
          </ul>

          {/* Видео vid0 */}
          <video
            src="/bustour-06-09/vid0.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-3xl rounded-lg shadow-lg mb-12 mx-auto"
          />

          <p className="text-lg leading-relaxed indent-6 font-semibold mb-2 text-justify">
            По маршруту:
          </p>

          <ul className="list-disc list-inside text-lg space-y-1 text-justify">
            <li>2.09 - выезд из Уфы. Торжественное открытие, раздача welcome-подарков, знакомство участников и первые автобусные вечеринки.</li>
            <li>3.09 - Астана. Ночной переход через границу, прибытие в город, остановка в гостинице, отдых и возможность осмотреть город.</li>
            <li>4.09 - Алматы. Дорога сквозь красоты Казахстана, виды на горы, подготовка к концерту.</li>
            <li>5.09 - Алматы. Заселение, изучение города, Заилийский Алатау, шопинг и национальная кухня.</li>
            <li>6.09 - День концерта. Общий марш фанатов, невероятная энергетика танцпола и фанзоны, тысячная толпа под музыку любимого исполнителя.</li>
            <li>7.09 - возвращение домой. Сборы, прощание с друзьями, но энергия концерта остаётся с нами до конца пути.</li>
            <li>9.09 - прибытие в Уфу. Делимся эмоциями, контактами и планируем новые встречи.</li>
          </ul>
        </section>

        {/* Слайдер */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Каждый из фанатов получил свой тематический мерч:
          </h2>

          <div className="max-w-3xl mx-auto">
            <Slider photos={photosSlider1} />
          </div>
        </section>

        {/* Особенности тура */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Особенности тура</h2>

          <ul className="list-disc list-inside text-lg space-y-1 text-justify">
            <li>Трансфер Уфа ↔ Алматы на комфортабельных автобусах;</li>
            <li>Проживание в гостиницах в Астане и Алматы (3* и выше);</li>
            <li>Билет на концерт (танцпол / фанзона);</li>
            <li>Сопровождение организаторов на протяжении всей поездки.</li>
          </ul>
        </section>

        {/* Рилс */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Ну и были запалы, куда без них!
          </h2>

          <div
            className="w-full max-w-xl mx-auto overflow-hidden rounded-lg relative cursor-pointer"
            style={{ aspectRatio: "4 / 3" }}
            onClick={() => setOpenVideo("/bustour-06-09/rils.mp4")}
          >
            <video
              src="/bustour-06-09/rils.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center text-black text-2xl">
                ▶
              </div>
            </div>
          </div>
        </section>

        {/* Видео с поездки */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Видео с поездки
          </h2>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {videos.map((video, index) => (
              <div key={index} className="flex flex-col items-center w-full md:w-1/3">
                <div
                  className="relative w-full cursor-pointer rounded-lg overflow-hidden"
                  style={{ aspectRatio: "9 / 16" }}
                  onClick={() => setOpenVideo(video.src)}
                >
                  <video
                    src={video.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center text-black text-2xl">
                      ▶
                    </div>
                  </div>
                </div>

                <p className="mt-2 text-center text-lg leading-relaxed indent-6 text-justify">
                  {video.caption}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Итоги */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Итоги и впечатления</h2>

          <p className="text-lg leading-relaxed indent-6 text-justify">
            Бастур - это дружба, эмоции, музыка и новые знакомства. Каждая поездка превращается в легенду, которую участники вспоминают долго. Это энергия, драйв и незабываемые моменты, когда каждый день - праздник.
          </p>
        </section>

      {/* Навигация */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => router.back()} // <-- возвращаем на предыдущую страницу
              className="px-6 py-3 border border-white rounded-lg text-2xl font-bold hover:bg-white hover:text-black transition"
          >
            ←
          </button>

          <Link
            href="/#formats"
            className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
          >
            К форматам
          </Link>

          <Link
            href="/events"
            className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition"
          >
            Все мероприятия
          </Link>
        </div>
      </section>
</div>
      <SocialPopup />
    </main>
  );
}
