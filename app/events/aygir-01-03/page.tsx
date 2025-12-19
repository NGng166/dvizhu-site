"use client";

import { useState } from "react";

export default function AygirTripPage() {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 sm:px-16 md:px-32 py-16">

      {/* ЗАГОЛОВОК */}
      <section className="max-w-3xl mx-auto mb-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-4">
          Поездка в горы. Айгир
        </h1>
        <p className="text-lg text-gray-300">
          1–2 марта 2025 г.
        </p>
      </section>

      {/* ТЕКСТ + ФОТО */}
      <section className="max-w-3xl mx-auto mb-16 space-y-8 text-lg leading-relaxed">

        <p className="indent-6">
          В начале марта мы снова сделали то, что любим больше всего - поехали в горы.
          Просто вырваться из города, собраться вместе и прожить пару дней иначе.
        </p>

        {/* ФОТО НА ВЕРШИНЕ */}
        <div className="my-10 flex justify-center">
          <img
            src="/aygir-01-03/summit.jpg"
            alt="Айгир - на вершине"
            className="
              w-full
              sm:w-4/5
              md:w-2/3
              lg:w-1/2
              rounded-xl
              shadow-lg
            "
          />
        </div>

        <p className="indent-6">
          Мы ехали в электричке, с рюкзаками и тёплой одеждой, болтали, шутили и постепенно
          настраивались на горы. Уже в дороге стало спокойно - будто город остался где-то
          далеко позади.
        </p>

        <p className="indent-6">
          На месте мы заселились в уютный домик, немного выдохнули и отправились вверх.
          Зима в горах - это особенное состояние: снег под ногами, холодный воздух и
          ощущение, что ты здесь по-настоящему. Подъём был непростым, но в этом и есть
          весь смысл - идти, поддерживать друг друга и не спешить.
        </p>

        <p className="indent-6">
          Когда мы поднялись на вершину, мы просто постояли. Сделали фото, посмотрели
          по сторонам и запомнили этот момент. Такие вещи не хочется объяснять словами —
          их хочется сохранить.
        </p>
      </section>

{/* ВИДЕО-ЛУП С КРУГЛОЙ МАСКОЙ И КНОПКОЙ */}
<section className="mb-20">
  <div className="max-w-sm sm:max-w-md mx-auto">
    <div
      className="relative overflow-hidden rounded-full shadow-lg cursor-pointer group"
      style={{ aspectRatio: "1 / 1" }}
      onClick={() => setOpenVideo(true)}
    >
      <video
        src="/aygir-01-03/moment-loop.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />

      {/* Play overlay */}
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition">
        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-black text-3xl">
          ▶
        </div>
      </div>
    </div>

    <p className="text-center text-sm text-gray-400 mt-3">
      Нажмите, чтобы посмотреть видео полностью
    </p>
  </div>
</section>

{/* МОДАЛКА С ПОЛНЫМ ВИДЕО (без маски, прямоугольник) */}
{openVideo && (
  <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
    <div className="relative w-full max-w-sm sm:max-w-md">
      <button
        onClick={() => setOpenVideo(false)}
        className="fixed top-6 right-6 z-50 w-12 h-12 bg-black/70 text-white text-3xl rounded-full flex items-center justify-center hover:bg-black/90 transition"
      >
        ✕
      </button>

      <div className="bg-black rounded-xl overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
        <video
          src="/aygir-01-03/moment-full.mp4"
          controls
          autoPlay
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
)}


      {/* ФИНАЛ */}
      <section className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed mb-20">

        <p className="indent-6">
          После спуска нас ждала деревенская баня, горячий пар, шашлыки и долгие душевные
          разговоры. Усталость в теле и редкое чувство внутреннего покоя.
        </p>

        <p className="indent-6">
          Мы ходим в горы круглый год.<br />
          Снег, холод и зима — нам не помеха, а часть пути.
        </p>

        <p className="indent-6">
          И эта поездка в Айгир — ещё одно тёплое воспоминание, которое мы забираем с собой.
        </p>
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
