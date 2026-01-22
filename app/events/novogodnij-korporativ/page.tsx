"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Slider from "../../components/Slider";
import SocialPopup from "../../components/SocialPopup";
import Link from "next/link";

const photos = [
  { src: "/novogodnij-korporativ/3.jpg", alt: "Новогодний корпоратив 1" },
  { src: "/novogodnij-korporativ/4.jpg", alt: "Новогодний корпоратив 2" },
  { src: "/novogodnij-korporativ/5.jpg", alt: "Новогодний корпоратив 3" },
  { src: "/novogodnij-korporativ/6.jpg", alt: "Новогодний корпоратив 3" },
  { src: "/novogodnij-korporativ/8.jpg", alt: "Новогодний корпоратив 3" },
];

export default function NewYearCorporatePage() {
  const router = useRouter();
  const [openVideoId, setOpenVideoId] = useState<number | null>(null);

  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 sm:px-16 md:px-32 py-16">

      {/* Заголовок */}
      <section className="mb-12 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-4">
          Новогодний корпоратив 2025 🎄
        </h1>
        <p className="text-lg text-gray-300">
          В прошлом году праздник был ламповым, а в этом - ещё ярче и веселее!
        </p>
      </section>

      {/* Hero фото */}
      <section className="mb-12 max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
        <img
          src="/novogodnij-korporativ/hero.jpg"
          alt="Новогодний корпоратив"
          className="w-full h-auto object-cover rounded-xl"
        />
      </section>

      {/* Основной текст */}
      <section className="max-w-5xl mx-auto mb-20 space-y-6 text-lg leading-relaxed text-justify">
        <p className="indent-6">
          В преддверии Нового Года мы собрались вместе, чтобы провести уходящий год в большой дружной компании. Музыка, танцы, любимая ламповая атмосфера и море друзей на танцполе - всё это создаёт уникальное настроение, за которое мы так любим наши тусовки.
        </p>
        <p className="indent-6">
          Профессиональные диджеи, фри-бар, конкурсы и сюрпризы сделали вечер по-настоящему ярким. Каждый смог поймать настроение друг друга и уйти с эмоциями, которые остаются в памяти.
        </p>
        <p className="indent-6">
          А ещё мы все вместе создали праздничное настроение, пришли в костюмах и с маленькими элементами новогодней тематики, что добавило вечеринке особого шарма.
        </p>
      </section>

      {/* Слайдер с фото */}
      <section className="mb-20 max-w-4xl mx-auto">
        <Slider photos={photos} />
      </section>

      {/* Финальная строка */}
      <section className="text-center mt-8 text-lg text-gray-300">
        Этот Новый Год мы провели вместе с друзьями и любимой ламповой атмосферой DVIZH 🫶🏻
      </section>
      <section className="text-center mt-8 text-lg text-gray-300">
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
