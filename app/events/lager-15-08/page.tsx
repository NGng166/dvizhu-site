"use client";

import Link from "next/link";
import Slider from "../../components/Slider";
import SocialPopup from "../../components/SocialPopup";

const photos = [
  { src: "/lager-15-08/p1.jpg", alt: "Девушки в лагере" },
  { src: "/lager-15-08/p2.jpg", alt: "Дождь не помеха" },
  { src: "/lager-15-08/p3.jpg", alt: "Молодежь в лагере" },
  { src: "/lager-15-08/p4.jpg", alt: "Дружные отряды" },
];

export default function LagerPage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 sm:px-16 md:px-32 py-16">

      {/* Заголовок */}
      <section className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-4">
          Лагерь
        </h1>
        <p className="text-lg text-gray-300">
          15–17 августа 2025
        </p>
      </section>

      {/* Общее фото лагеря */}
      <section className="mb-16 max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg">
        <img
          src="/lager-15-08/hero.jpg"
          alt="Лагерь"
          className="w-full h-auto object-cover rounded-xl"
        />
      </section>

      {/* Основной текст */}
      <section className="max-w-3xl mx-auto mb-20 space-y-6 text-lg leading-relaxed">
        <p className="indent-6">
          Эта смена стала настоящей перезагрузкой лета. Новая площадка, живописный берег реки Белая, корпус или палатка на выбор - всё для того, чтобы уехать от города и полностью погрузиться в атмосферу лагеря.
        </p>

        <p className="indent-6">
          Дни пролетали быстро: спорт, песни, гитары, волейбол, баскетбол и ещё куча всего интересного. Вечером - дискотека с профессиональными диджей-сетами и костюмами, где мы смеялись, танцевали и просто наслаждались моментом. Даже дождь не смог испортить настроение - мы оторвались по полной.
        </p>

        <p className="indent-6">
          Каждый лагерь напоминает нам, что Dvizh - это люди, атмосфера и маленькие моменты счастья. Новые лица, ламповая компания, вечера у костра и общее чувство «как здорово, что мы все здесь» - вот что делает смену незабываемой.
        </p>

        {/* Слайдер фото */}
        <div className="mt-8">
          <Slider photos={photos} />
        </div>
      </section>

      {/* Финальная строка */}
      <section className="text-center mt-8 text-lg text-gray-300">
        Лето, друзья и лагерь - лучшее сочетание 🔥
      </section>

{/* Навигация */}
<section className="pb-16 px-6 sm:px-16 md:px-32">
  <div className="
    max-w-5xl mx-auto
    flex flex-wrap gap-4
    justify-center
  ">

    {/* К формату «Лагерь» — стрелка */}
<Link
  href="/formats/lager#format-events"
  aria-label="К мероприятиям формата"
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