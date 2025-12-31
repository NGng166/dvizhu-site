"use client";

import Slider from "../../components/Slider";

const concertPhotos = [
  { src: "/concert-samara-12-10/1.jpg", alt: "Концерт Макса Коржа, Самара" },
  { src: "/concert-samara-12-10/2.jpg", alt: "Концерт в МТЛ Арене" },
  { src: "/concert-samara-12-10/3.jpg", alt: "Зал и сцена" },
  { src: "/concert-samara-12-10/4.jpg", alt: "Эмоции на концерте" },
];

export default function KorzhSamara2018Page() {
  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 sm:px-16 md:px-32 py-16">

      {/* Заголовок */}
      <section className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-4">
          Концерт Макса Коржа
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed">
          Самара · МТЛ Арена · 12 октября 2018
        </p>
      </section>

      {/* Обложка */}
      <div className="mb-12">
        <img
          src="/concert-samara-12-10/cover.jpg"
          alt="Макс Корж - Самара 2018"
          className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Кратко о поездке */}
      <section className="mb-12 max-w-3xl mx-auto">
        <p className="text-lg leading-relaxed indent-6">
          В октябре 2018 года мы съездили в Самару на концерт Макса Коржа.
          Выезд для нас уже не первый - собрались, доехали и хорошо провели вечер
          под любимые треки.
        </p>
      </section>

      {/* О концерте */}
      <section className="mb-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">О концерте</h2>
        <p className="text-lg leading-relaxed indent-6 mb-4">
          Концерт прошёл в «МТЛ Арене». В программе были песни из альбомов
          «Малый Повзрослел», «Жить в кайф», «Животный мир» и «Домашний».
        </p>
        <p className="text-lg leading-relaxed indent-6">
          Зал был полный, люди пели вместе с артистом, атмосфера была простой и живой -
          без лишнего напряжения, просто музыка и эмоции.
        </p>
      </section>

      {/* Фото */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Немного фотографий с концерта
        </h2>
        <div className="max-w-3xl mx-auto">
          <Slider photos={concertPhotos} />
        </div>
      </section>

      {/* Итог */}
      <section className="mb-12 max-w-3xl mx-auto text-center">
        <p className="text-lg">
          Все что было в басе - остается в басе (фото оттуда не ждите)
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
