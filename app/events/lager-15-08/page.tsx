"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Slider from "../../components/Slider";
import SocialPopup from "../../components/SocialPopup";
import Link from "next/link";

const photos = [
  { src: "/lager-15-08/p1.jpg", alt: "Девушки в лагере" },
  { src: "/lager-15-08/p2.jpg", alt: "Дождь не помеха" },
  { src: "/lager-15-08/p3.jpg", alt: "Молодежь в лагере" },
  { src: "/lager-15-08/p4.jpg", alt: "Дружные отряды" },
];

export default function LagerPage() {
  const router = useRouter();
  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 sm:px-16 md:px-32 py-16">

      {/* Заголовок */}
      <section className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-4">
          Взрослый пионерский лагерь
        </h1>
        <p className="text-lg text-gray-300 italic">
          15–17 августа 2025
        </p>
      </section>

      {/* Общее фото лагеря */}
      <section className="mb-8 sm:mb-12 max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg">
        <img
          src="/lager-15-08/hero.jpg"
          alt="Лагерь"
          className="w-full h-auto object-cover rounded-xl"
        />
      </section>

      {/* Основной текст */}
      <section className="max-w-4xl mx-auto mb-12 sm:mb-20 space-y-4 sm:space-y-6 text-lg leading-relaxed text-justify">
        <p className="indent-6">
          Эта смена стала настоящей перезагрузкой лета. Новая площадка, живописный берег реки Белая, корпус или палатка на выбор – всё для того, чтобы уехать от города и полностью погрузиться в атмосферу лагеря.
        </p>

        <p className="indent-6">
          Дни пролетали быстро: спорт, песни, гитары, волейбол, баскетбол и ещё куча всего интересного. Вечером – дискотека с профессиональными диджей-сетами и костюмами, где мы смеялись, танцевали и просто наслаждались моментом. Даже дождь не смог испортить настроение – мы оторвались по полной.
        </p>

        <p className="indent-6">
          Каждый лагерь напоминает нам, что Dvizh – это люди, атмосфера и маленькие моменты счастья. Новые лица, ламповая компания, вечера у костра и общее чувство «как здорово, что мы все здесь» – вот что делает смену незабываемой.
        </p>

        {/* Слайдер фото */}
        <div className="mt-8">
          <Slider photos={photos} />
        </div>
      </section>

      {/* Финальная строка */}
      <section className="text-center mt-8 mb-0 sm:mb-12 text-lg text-gray-300 italic">
        Лето, друзья и лагерь – лучшее сочетание 🔥
      </section>

      {/* Навигация */}
      <section className="pb-16 mt-12">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-4 justify-center">
          
          {/* Назад по истории */}
          <button
            onClick={() => router.back()}
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

      {/* Соцсети */}
      <SocialPopup />
    </main>
  );
}
