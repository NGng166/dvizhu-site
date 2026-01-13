"use client";

import Link from "next/link";
import Slider from "../../components/Slider";
import SocialPopup from "../../components/SocialPopup";

const photos = [
  { src: "/bustour-05-10/1.jpg", alt: "Поездка в Казахстан" },
  { src: "/bustour-05-10/2.jpg", alt: "Поездка в Казахстан" },
  { src: "/bustour-05-10/3.jpg", alt: "Поездка в Казахстан" },
  { src: "/bustour-05-10/4.jpg", alt: "Поездка в Казахстан" },
  { src: "/bustour-05-10/5.jpg", alt: "Поездка в Казахстан" },
];

export default function BustourKazakhstanFirstTripPage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">

      {/* Заголовок */}
      <section className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-4">
            BUSTOUR <br />
            Ufa - Kazakstan<br />
        </h1>
        <p className="text-lg text-gray-300 italic">
          1–8 октября 2024
        </p>
      </section>

        {/* Обложка */}
        <img
          src="/bustour-05-10/hero.jpg"
          alt="Первый дальний бастур в Казахстан"
          className="w-full max-w-3xl rounded-lg shadow-lg mb-12 mx-auto"
        />

        {/* Вступление */}
        <section className="mb-10">
          <p className="text-lg leading-relaxed indent-6 mb-4 text-justify">
            Этот бастур стал для нас особенным. Впервые решились на настолько дальнюю поездку и отправились в мини-путешествие по Казахстану. Из-за отмены концерта Макса это был не выезд на концерт, а настоящее приключение, которое навсегда осталось в памяти.
          </p>
          <p className="text-lg leading-relaxed indent-6 mb-4 text-justify">
            За поездку мы увидели сразу две столицы - Астану и Алматы, погрузились в атмосферу городов, познакомились с культурой и почувствовали масштаб путешествия. В Алматы поднялись в горы, любовались видами и ловили моменты, ради которых стоит уезжать так далеко.
          </p>
          <p className="text-lg leading-relaxed indent-6 mb-4 text-justify">
            Ночевали в отелях, а часть пути - прямо в автобусе. Но дорога не утомляла: в перерывах устраивали тусовки внутри баса. Музыка, смех, разговоры - ощущение, что ты не пассажир, а часть команды. Настоящий клуб на колёсах)))
          </p>
{/* Под впечатлением от поездки */}
<p className="text-lg leading-relaxed indent-6 mb-4 text-justify">
  Под впечатлением от поездки наш друг и молодой исполнитель ВАНФИ сразу после возвращения записал трек «Солнца свет».
</p>

{/* Плеер Яндекс.Музыки */}
<div className="mb-8 mx-auto max-w-md">
  <iframe
    frameBorder="0"
    allow="clipboard-write"
    style={{ border: "none", width: "100%", height: "244px" }}
    src="https://music.yandex.ru/iframe/album/36205241/track/138148544"
    title="Солнца свет — ВАНФИ"
  ></iframe>
</div>

{/* Слайдер фото */}
<div className="mt-8">
  <Slider photos={photos} />
</div>
        </section>

        {/* Коротко */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Коротко о главном 🫡
          </h2>

          <p className="text-lg leading-relaxed indent-6 text-justify">
            Выехали 1-го октября, а вернулись - 8-го.
            Неделя, которая пролетела незаметно, но подарила эмоции, впечатления и
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
            первой по-настоящему масштабной и первой, после которой стало понятно -
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
