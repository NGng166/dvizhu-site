"use client";

import Link from "next/link";
import MediaGallery from "../../components/MediaGallery";
import SocialPopup from "../../components/SocialPopup";

export default function MountainsPage() {
  const format = {
  title: "Походы и горы",
  description:
    "Походы в горы - это формат про природу, вызов и настоящее чувство команды. Восхождения, пещеры, уютные домики, баня, костёр и вечерние посиделки - здесь каждый выезд становится маленьким приключением и остаётся в памяти надолго.",
  about: [
  "Этот формат про наши выезды на природу, где главные роли играют свежий воздух, красивые виды и живое общение. Мы собираемся командой, грузимся в автобус или минивэны и уезжаем из города, чтобы на время выпасть из привычного ритма и прожить что-то настоящее.",
  "Мы поднимаемся на вершины Урала - Айгир, Малиновая, Зюраткуль, Иремель - или отправляемся исследовать пещеры и заповедные места. Бывают лёгкие маршруты для открытия сезона и более серьёзные подъёмы, где нужно собраться, поддержать друг друга и дойти до конца.",
  "Каждый выезд - это не только подъём. Это дорога с музыкой и смехом, уютные домики, горячая еда после маршрута, шашлыки, баня и долгие вечерние разговоры. Часто после восхождения начинается тот самый чилл, ради которого многие и возвращаются снова.",
  "Иногда наши поездки превращаются в настоящее приключение: мараловые фермы, заповедники, неожиданные встречи с животными, челленджи и небольшие соревнования внутри команды. Мы любим добавлять детали, которые делают каждый выезд особенным.",
  "В походы с нами едут самые разные люди: кто-то впервые пробует горы, а кто-то уже опытный турист. Здесь не важно, с кем ты приехал - один или с друзьями. Уже в дороге ты становишься частью общей команды.",
  ],
    heroDesktop: { type: "video", src: "/formats/mountains/hero-mobile.mp4" },
    heroMobile: { type: "video", src: "/formats/mountains/hero-mobile.mp4" },
    heroImages: [
    "/formats/mountains/1.jpg",
    "/formats/mountains/2.jpg",
    "/formats/mountains/3.jpg",
    "/formats/mountains/4.jpg",
    "/formats/mountains/5.jpg",
    "/formats/mountains/6.jpg",
    "/formats/mountains/7.jpg",
    "/formats/mountains/8.jpg",
    "/formats/mountains/9.jpg",
    "/formats/mountains/10.jpg",
    "/formats/mountains/11.jpg",
    ],
    verticalVideo: {
      type: "video",
      src: "/formats/mountains/mountains3.mp4",
    },
    events: [
      {
        title: "г. Айгир",
        date: "1–2 марта 2025",
        slug: "aygir-01-03",
        image: "/aygir-01-03/aygir-01-03.jpg",
      },
      {
        title: "г. Зюраткуль",
        date: "10-11 августа 2024",
        slug: "zura-10-08",
        image: "/zura-10-08/zura-10-08.jpg",
      },
      {
        title: "г. Малиновая",
        date: "23-24 марта 2024",
        slug: "malinovaya-23-03",
        image: "/malinovaya-23-03/malinovaya-23-03.jpg",
      },
      {
        title: "г. Зюраткуль",
        date: "7-8 октября 2023",
        slug: "zura-7-10",
        image: "/zura-7-10/zura-7-10.jpg",
      },
      {
        title: "г. Малиновая 3",
        date: "18-19 июня 2022",
        slug: "malinovaya-18-06",
        image: "/malinovaya-18-06/malinovaya-18-06.jpg",
      },
      {
        title: "г. Зигальга",
        date: "26-27 февраля 2022",
        slug: "zigal-26-02",
        image: "/zigal-26-02/zigal-26-02.jpg",
      },
      {
        title: "г. Зюраткуль",
        date: "6-7 ноября 2021",
        slug: "zura-6-11",
        image: "/zura-6-11/zura-6-11.jpg",
      },
      {
        title: "г. Иремель",
        date: "16-17 октября 2021",
        slug: "malinovaya-18-06",
        image: "/iremel-16-10/iremel-16-10.jpg",
      },
    ],
  };

  return (
    <main className="bg-gray-900 text-white min-h-screen">

      {/* HERO */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">
        {/* Мобильное видео */}
        <div className="absolute inset-0 sm:hidden">
          <video
            src={format.heroMobile.src}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        {/* Десктопное видео */}
        <div className="absolute inset-0 hidden sm:block">
          <video
            src={format.heroDesktop.src}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end items-center pb-12 sm:pb-16 z-20 text-center">
          <h1 className="text-5xl sm:text-5xl font-semibold">{format.title}</h1>
        </div>
      </section>

      {/* ГАЛЕРЕЯ */}
      <section className="py-4 px-6 sm:px-16 md:px-32">
        <div className="max-w-5xl mx-auto">
          <MediaGallery
            media={format.heroImages.map((src) => ({ type: "image" as const, src }))}
          />
        </div>
      </section>

      {/* ОПИСАНИЕ */}
      <section className="mb-6 px-6 sm:px-16 md:px-32">
        <div className="max-w-5xl mx-auto">
          <p className="text-lg leading-relaxed text-justify">{format.description}</p>
        </div>
      </section>

      {/* ПОДРОБНО */}
      <section className="py-4 px-6 sm:px-16 md:px-32">
        <div className="max-w-5xl mx-auto flex flex-col items-center space-y-6 text-gray-200 leading-relaxed">
          <h2 className="text-2xl font-bold mb-4 w-full text-center">Что это за формат?</h2>

          {format.about.map((text, i) => (
            <div key={i} className="mb-4 max-w-5xl w-full text-left">
              <p className="text-lg leading-relaxed text-gray-200 text-justify indent-6">{text}</p>

              {/* Вставляем вертикальное видео после первого абзаца */}
              {i === 0 && format.verticalVideo && (
                <div className="my-6 w-full max-w-xs mx-auto aspect-[9/16] rounded-xl overflow-hidden shadow-lg">
                  <video src={format.verticalVideo.src} controls autoPlay muted loop className="w-full h-full object-cover" />
                </div>
              )}

              {/* Вставляем ссылку на VK после второго абзаца */}
              {i === 2 && (
                <div className="my-6 max-w-5xl mx-auto text-center">
                  <a
                    href="https://vk.com/video-160591040_456239065"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    А тут один видео-отчет из наших походов))
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Мероприятия */}
      <section id="format-events" className="px-6 sm:px-16 md:px-32 pb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold my-8 text-center">Мероприятия этого формата</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {format.events.map((event, index) => (
            <Link key={index} href={`/events/${event.slug}`}>
              <div className="rounded-lg overflow-hidden hover:scale-105 transition-transform">
                <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />
                <div className="p-2">
                  <p className="font-bold">{event.title}</p>
                  <p className="text-sm text-gray-400">{event.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Навигация */}
      <section className="pb-16 px-6 sm:px-16 md:px-32">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-4 justify-center md:justify-start">
          <Link href="/#formats" className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition">
            ← К форматам
          </Link>
          <Link href="/events" className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition">
            Все мероприятия
          </Link>
        </div>
      </section>

      <SocialPopup />
    </main>
  );
}
