"use client";

import Link from "next/link";
import SocialPopup from "../../components/SocialPopup";

export default function BustourKazakhstanFirstTripPage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">

        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 leading-tight">
            🔥 BUSTOUR <br />
            UFA — KAZAKHSTAN 🔥<br />
            <span className="text-3xl sm:text-4xl font-normal">
              октябрь
            </span>
          </h1>
        </div>

        {/* Обложка */}
        <img
          src="/bustour-kz-first/bustour-cover.jpg"
          alt="Первый дальний бастур в Казахстан"
          className="w-full max-w-3xl rounded-lg shadow-lg mb-12 mx-auto"
        />

        {/* Вступление */}
        <section className="mb-10">
          <p className="text-lg leading-relaxed indent-6 text-justify">
            Этот бастур стал для нас по-настоящему особенным. Годом ранее мы впервые
            решились на такую дальнюю поездку и отправились в мини-путешествие по
            Казахстану. Это был не просто выезд на концерт — это было приключение,
            которое навсегда осталось в памяти.
          </p>
        </section>

        {/* О поездке */}
        <section className="mb-10">
          <p className="text-lg leading-relaxed indent-6 mb-4 text-justify">
            За одну поездку мы увидели сразу две столицы — Астану и Алматы,
            погрузились в атмосферу городов, познакомились с культурой и почувствовали
            масштаб путешествия. В Алматы поднялись в горы, любовались видами и
            ловили моменты, ради которых вообще стоит уезжать так далеко.
          </p>

          <p className="text-lg leading-relaxed indent-6 mb-4 text-justify">
            Ночевали в отелях, а часть дороги — прямо в автобусе. Но дорога не была
            утомительной: в перерывах мы устраивали настоящие тусовки внутри баса.
            Музыка, смех, разговоры и ощущение, что ты не пассажир, а часть команды.
            Настоящий клуб на колёсах.
          </p>
        </section>

        {/* Коротко */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Коротко о главном 🫡
          </h2>

          <p className="text-lg leading-relaxed indent-6 text-justify">
            Выезд — 01.10. Возвращение в Уфу — примерно 08.10. Неделя,
            которая пролетела незаметно, но подарила эмоции, впечатления и
            воспоминания, к которым хочется возвращаться.
          </p>
        </section>

        {/* Итоги */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">
            Итоги и впечатления
          </h2>

          <p className="text-lg leading-relaxed indent-6 text-justify">
            Эта поездка стала отправной точкой. Первой настолько дальней,
            первой по-настоящему масштабной и первой, после которой стало понятно —
            такие бастуры обязательно будут снова. Мы вернулись уставшими,
            счастливыми и очень вдохновлёнными.
          </p>
        </section>

        {/* Навигация */}
        <section className="pb-16">
          <div className="flex flex-wrap gap-4 justify-center">

            <Link
              href="/formats/concerts#format-events"
              className="px-6 py-3 border border-white rounded-lg text-2xl font-bold hover:bg-white hover:text-black transition"
            >
              ←
            </Link>

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
