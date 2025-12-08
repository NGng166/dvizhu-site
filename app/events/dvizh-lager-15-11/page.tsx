"use client";

import { useState } from "react";

// Массив фотографий
const photos = [
  { src: "/dvizh-lager-15-11/lager1.jpg", alt: "Дружные отряды" },
  { src: "/dvizh-lager-15-11/lager2.jpg", alt: "Спортивные дружные созтязания" },
  { src: "/dvizh-lager-15-11/lager3.jpg", alt: "Выступления отрядов" },
  { src: "/dvizh-lager-15-11/lager4.jpg", alt: "Игры на сплочение, Бирпонг" },
  { src: "/dvizh-lager-15-11/lager5.jpg", alt: "Песни под гитару" },
  { src: "/dvizh-lager-15-11/lager6.jpg", alt: "Спортивные игры" },
  { src: "/dvizh-lager-15-11/lager7.jpg", alt: "Самая высокая скульптура из людей" },
  { src: "/dvizh-lager-15-11/lager8.jpg", alt: "Костюмы в стиле 90х" },
  { src: "/dvizh-lager-15-11/lager9.jpg", alt: "Спортивные игры" },
  { src: "/dvizh-lager-15-11/lager10.jpg", alt: "Дружные отряды" },
  { src: "/dvizh-lager-15-11/lager11.jpg", alt: "Дружные отряды" },
  { src: "/dvizh-lager-15-11/lager12.jpg", alt: "Выступление отрядов" },
  { src: "/dvizh-lager-15-11/lager13.jpg", alt: "Общее фото" },
  { src: "/dvizh-lager-15-11/lager14.jpg", alt: "Костюмы в стиле 90х" }
];

export default function DvizhLagerPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((i) => (i === 0 ? photos.length - 1 : i - 1));
  const next = () => setCurrentIndex((i) => (i === photos.length - 1 ? 0 : i + 1));

  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 sm:px-16 md:px-32 py-16">
      {/* Заголовок */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-center text-orange-400">
        DVIZH Лагерь
      </h1>
      <p className="text-center text-lg mb-8">15–17 ноября 2024 г.</p>

      {/* Краткое описание */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Краткое описание</h2>
        <p className="text-lg leading-relaxed indent-6">
          Лагерь для взрослых, где «Возраст — не повод взрослеть!» ❤️
          Возвращение легендарного формата: комфортные корпуса, отрядная жизнь, тематическая смена,
          песни у костра, спортивные состязания, творческие номера и многое другое.
        </p>
      </section>

      {/* О мероприятии */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">О мероприятии</h2>
        <p className="text-lg leading-relaxed indent-6">
          Атмосфера детских каникул, но уже по-взрослому: новые знакомства, старые друзья, дискотеки,
          конкурсы, спортивные игры, творческие номера и вкусная еда. Особый момент — дискотека с
          дресс-кодом на второй день, которая станет нашей традицией: <strong>RUSSIAN STYLE </strong> конца 90-х — начала 2000-х.
        </p>
      </section>

{/* Дресс-код */}
<section className="mb-12">
  <h2 className="text-2xl font-semibold mb-2">Дресс-код</h2>
  <ul className="list-disc list-inside text-lg space-y-1">
    <li>Меховые шапки, пальто, кожанки, джинсовки, батины очки и всё такое.</li>
    <li>Для мужчин приветствуются усы (только усы 😎).</li>
  </ul>

  {/* Фото под дресс-кодом */}
  <div className="mt-4 w-full max-w-xl mx-auto">
    <img
      src="/dvizh-lager-15-11/dress-code.jpg"
      alt="Дресс-код"
      className="w-full h-auto rounded-lg"
    />
  </div>
</section>


      {/* Тематика лагеря */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Тематика лагеря</h2>
        <p className="text-lg leading-relaxed indent-6">
          Смена была посвящена культовой игре <strong>«Монополия»</strong>. Отряды соревновались не только в творчестве и спорте, но и в финансовой грамотности:
        </p>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li>Зарабатывали деньги;</li>
          <li>Выкупали улицы, бары и клубы;</li>
          <li>Устраивали аукционы;</li>
          <li>И в финале определяли главного монополиста лагеря.</li>
        </ul>
      </section>

{/* Галерея фото */}
<section className="mb-12">
  <h2 className="text-2xl font-semibold mb-4">Фото</h2>
  <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
    <div
      className="flex transition-transform duration-300"
      style={{ transform: `translateX(-${currentIndex * 80}%)` }}
    >
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo.src}
          alt={photo.alt}
          className="flex-shrink-0 w-4/5 h-auto rounded-lg mr-4"
        />
      ))}
    </div>

    {/* Кнопки переключения */}
    <button
      onClick={prev}
      className="absolute top-1/2 left-2 -translate-y-1/2 w-10 h-10 bg-black/70 text-white text-2xl rounded-full flex items-center justify-center hover:bg-black/90 transition"
    >
      ‹
    </button>
    <button
      onClick={next}
      className="absolute top-1/2 right-2 -translate-y-1/2 w-10 h-10 bg-black/70 text-white text-2xl rounded-full flex items-center justify-center hover:bg-black/90 transition"
    >
      ›
    </button>
  </div>
</section>


      {/* Видео с подписью */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Видео</h2>
        <div className="w-full max-w-2xl mx-auto">
          <video
            src="/dvizh-lager-15-11/lager-video.mp4"
            controls
            className="w-full h-auto rounded-lg"
          />
          <p className="mt-2 text-center text-lg">
            Отдельное спасибо за крутой рилс{" "}
            <a
              href="https://t.me/linalense_life"
              target="_blank"
              className="text-orange-400 underline"
            >
              Полине
            </a>
            .
          </p>
        </div>
      </section>

      {/* Итоги и отзывы */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Итоги и отзывы</h2>
        <p className="text-lg leading-relaxed indent-6">
          Лагерь прошел ярко, с драйвом и теплом. Участники увезли с собой массу впечатлений, творческую энергию и новые знакомства.
        </p>
        <blockquote className="border-l-4 border-orange-500 pl-4 italic mt-4">
          «Это было настоящее возвращение в детство, но с взрослым настроем!» — отзыв одного из участников (имена не выдаем)))
        </blockquote>
      </section>

      {/* Кнопка назад */}
      <div className="text-center mt-8">
        <a
          href="/"
          className="bg-orange-500 px-6 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Назад на главную
        </a>
      </div>
    </main>
  );
}
