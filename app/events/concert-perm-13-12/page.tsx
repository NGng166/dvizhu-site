"use client";

import Link from "next/link";
import SocialPopup from "../../components/SocialPopup";
import Slider from "../../components/Slider";

const concertPhotos = [
  { src: "/concert-perm-13-12/1.jpg", alt: "Концерт Макса Коржа, Пермь" },
  { src: "/concert-perm-13-12/2.jpg", alt: "Толпа фанатов" },
  { src: "/concert-perm-13-12/3.jpg", alt: "Эмоции с концерта" },
  { src: "/concert-perm-13-12/4.jpg", alt: "Сцена и световое шоу" },
];

export default function ConcertPermPage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 sm:px-16 md:px-32 py-16">

      {/* Заголовок */}
      <section className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-4">
          Концерт Макса Коржа | Пермь
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed">
          13 декабря 2019 · УДС «Молот»
        </p>

        <div className="mt-6">
          <img
            src="/concert-perm-13-12/cover.jpg"
            alt="Концерт Макса Коржа в Перми"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Вступление / о поездке */}
      <section className="mb-6 max-w-3xl mx-auto">
        <p className="text-lg leading-relaxed indent-6 text-justify">
          В декабре мы снова отправились в тур, чтобы отрываться, орать песни, слэмиться почти на каждой остановке и знакомиться с новыми ребятками.  
          Выезд состоялся ранним утром 13 декабря, а возвращение домой - 14 декабря примерно в обед.  
          Стоимость тура составила 4100₽, и все участники получили максимум эмоций и драйва!
        </p>
      </section>

      {/* О концерте */}
      <section className="mb-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Концерт и атмосфера</h2>
        <p className="text-lg leading-relaxed indent-6 text-justify mb-4">
          13 декабря Макс Корж выступил в Перми в Универсальном Дворце спорта «Молот».  
          Концерт собрал сотни фанатов, которые разделяли каждую эмоцию вместе с артистом.  
          Сцена, световое шоу, песни и энергия публики создали незабываемую атмосферу.
        </p>
        <p className="text-lg leading-relaxed indent-6 text-justify">
          Этот концерт стал настоящим праздником для всех участников выезда: эмоции зашкаливали, а драйв и музыка держали каждого в тонусе с самого начала и до финальных аккордов.
        </p>
      </section>

      {/* Фото */}
      <section className="mb-12">
        <div className="max-w-3xl mx-auto">
          <Slider photos={concertPhotos} />
        </div>
      </section>

      {/* Итоги поездки */}
      <section className="mb-12 max-w-3xl mx-auto">
        <p className="text-lg leading-relaxed indent-6 text-justify">
          Пермь стала ярким и атмосферным выездом для нашей команды.  
          Дорога, встречи с новыми людьми, концерт и возвращение домой - всё оставило море впечатлений.  
          Каждый участник увёз с собой эмоции, драйв и ощущение единства с фанатами Макса Коржа.
        </p>
        <p className="text-lg leading-relaxed indent-6 text-justify">
          Эта поездка доказала: предновогодние туры - это отличный способ оторваться, зарядиться энергией и встретить новый год с самыми крутыми впечатлениями.
        </p>
      </section>

      {/* Навигация */}
      <section className="pb-16 px-6 sm:px-16 md:px-32">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-4 justify-center">
          <Link
            href="/formats/concerts#format-events"
            aria-label="К мероприятиям формата Концерты"
            className="px-6 py-3 border border-white rounded-lg flex items-center justify-center text-2xl font-bold leading-none hover:bg-white hover:text-black transition"
          >
            ←
          </Link>
          <Link
            href="/#formats"
            className="px-6 py-3 border border-white rounded-lg flex items-center justify-center leading-none hover:bg-white hover:text-black transition"
          >
            К форматам
          </Link>
          <Link
            href="/events"
            className="px-6 py-3 bg-white text-black rounded-lg flex items-center justify-center leading-none hover:bg-gray-200 transition"
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
