"use client";

import Slider from "../../components/Slider";
import { useState } from "react";

export default function DvizhLagerPage() {
  const [openVideo, setOpenVideo] = useState(false); // состояние модалки

  const photos = [
    { src: "/dvizh-lager-15-11/photo_1_2025-12-12_11-14-02.jpg", alt: "Дружные отряды" },
    { src: "/dvizh-lager-15-11/photo_2_2025-12-12_11-14-02.jpg", alt: "Спортивные состязания" },
    { src: "/dvizh-lager-15-11/photo_3_2025-12-12_11-14-02.jpg", alt: "Выступления отрядов" },
    { src: "/dvizh-lager-15-11/photo_4_2025-12-12_11-14-02.jpg", alt: "Игры на сплочение, Бирпонг" },
    { src: "/dvizh-lager-15-11/photo_5_2025-12-12_11-14-02.jpg", alt: "Песни под гитару" },
    { src: "/dvizh-lager-15-11/photo_6_2025-12-12_11-14-02.jpg", alt: "Спортивные игры" },
    { src: "/dvizh-lager-15-11/photo_7_2025-12-12_11-14-02.jpg", alt: "Скульптура из людей" },
    { src: "/dvizh-lager-15-11/photo_8_2025-12-12_11-14-02.jpg", alt: "Костюмы 90-х" },
    { src: "/dvizh-lager-15-11/photo_9_2025-12-12_11-14-02.jpg", alt: "Спортивные игры" },
    { src: "/dvizh-lager-15-11/photo_10_2025-12-12_11-14-02.jpg", alt: "Дружные отряды" },
    { src: "/dvizh-lager-15-11/photo_11_2025-12-12_11-14-02.jpg", alt: "Командная работа" },
    { src: "/dvizh-lager-15-11/photo_12_2025-12-12_11-14-02.jpg", alt: "Выступление" },
    { src: "/dvizh-lager-15-11/photo_13_2025-12-12_11-14-02.jpg", alt: "Общее фото" },
    { src: "/dvizh-lager-15-11/photo_14_2025-12-12_11-14-02.jpg", alt: "Костюмы 90-х" },
  ];

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
          Комфортные корпуса, отрядная жизнь, тематическая смена, спортивные состязания,
          песни у костра, творческие номера — и атмосфера настоящего школьного лагеря, но уже по-взрослому.
        </p>
      </section>

      {/* О мероприятии */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">О мероприятии</h2>
        <p className="text-lg leading-relaxed indent-6">
          Атмосфера детских каникул, но уже зрелая: новые знакомства, вечеринки, конкурсы,
          творческие номера и много спорта. Особое событие — дискотека <strong>RUSSIAN STYLE</strong> 
          конца 90-х – начала 2000-х.
        </p>
      </section>

      {/* Дресс-код */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Дресс-код</h2>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li>Меховые шапки, пальто, кожанки, очки — стиль конца 90-х.</li>
          <li>Мужчинам — приветствуются усы 😎.</li>
        </ul>

        <div className="mt-4 w-full max-w-xl mx-auto">
          <img
            src="/dvizh-lager-15-11/dc.jpg"
            alt="Дресс-код"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      {/* Тематика лагеря */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Тематика лагеря</h2>
        <p className="text-lg leading-relaxed indent-6">
          Смена была посвящена культовой игре <strong>«Монополия»</strong>. Участники:
        </p>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li>зарабатывали деньги;</li>
          <li>выкупали улицы, бары и клубы;</li>
          <li>участвовали в аукционах;</li>
          <li>выбирали главного монополиста.</li>
        </ul>
      </section>

      {/* Галерея фото */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Фото</h2>
        <Slider photos={photos} />
      </section>

 {/* Видео-луп с кнопкой полного просмотра */}
<section className="mb-12">
  <h2 className="text-2xl font-semibold mb-4">Видео</h2>

  <div className="w-full max-w-md mx-auto">
    {/* Луп-видео */}
    <div
      className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
      style={{ aspectRatio: "9/16" }} // вертикальный формат
      onClick={() => setOpenVideo(true)}
    >
      <video
        src="/dvizh-lager-15-11/vid1.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover rounded-lg"
      />
      {/* Play overlay */}
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition">
        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-black text-3xl">
          ▶
        </div>
      </div>
    </div>

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

  {/* Модалка с полным видео */}
{openVideo && (
  <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
    <div className="relative w-full max-w-md sm:max-w-lg">
      <button
        onClick={() => setOpenVideo(false)}
        className="fixed top-6 right-6 z-50 w-12 h-12 bg-black/70 text-white text-3xl rounded-full flex items-center justify-center hover:bg-black/90 transition"
      >
        ✕
      </button>
      <div className="bg-black rounded-xl overflow-hidden" style={{ aspectRatio: "9/16" }}>
        <video
          src="/dvizh-lager-15-11/vid1-full.mp4"
          controls
          autoPlay
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
)}

</section>


      {/* Итоги */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Итоги и отзывы</h2>
        <p className="text-lg leading-relaxed indent-6">
          Лагерь прошел ярко, тепло, драйвово. Участники увезли новые знакомства,
          эмоции и творческую энергию.
        </p>
      </section>

      {/* Назад */}
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
