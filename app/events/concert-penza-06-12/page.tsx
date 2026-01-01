"use client";

import Link from "next/link";
import SocialPopup from "../../components/SocialPopup";
import Slider from "../../components/Slider";

const concertPhotos = [
  { src: "/concert-penza-06-12/1.jpg", alt: "Концерт Макса Коржа, Пенза" },
  { src: "/concert-penza-06-12/2.jpg", alt: "Толпа фанатов" },
  { src: "/concert-penza-06-12/3.jpg", alt: "Эмоции с концерта" },
  { src: "/concert-penza-06-12/4.jpg", alt: "Макс Корж на сцене" },
];

export default function ConcertPenzaPage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 sm:px-16 md:px-32 py-16">

      {/* Заголовок */}
      <section className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-4">
          Концерт Макса Коржа | Пенза
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed">
          6 декабря 2019 · СЗК «Дизель-Арена»
        </p>

        <div className="mt-6">
          <img
            src="/concert-penza-06-12/cover.jpg"
            alt="Концерт Макса Коржа в Пензе"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Вступление / о поездке */}
<section className="mb-12 max-w-3xl mx-auto" style={{ textAlign: "justify" }}>
  <p className="text-lg leading-relaxed indent-6">
    Наш бас-тур в Пензу был настоящим приключением! 🚍❄  
     </p>
  <p className="text-lg leading-relaxed indent-6">
   Выезд из Уфы состоялся 5 декабря, поздним вечером, а возвращение домой - 7 декабря ближе к обеду.  
    Несмотря на долгую дорогу, настроение и энергия в автобусе не угасали: песни, знакомство, веселье и дружеская атмосфера сопровождали всю поездку.
  </p>    
</section>

      {/* О концерте */}
<section className="mb-12 max-w-3xl mx-auto" style={{ textAlign: "justify" }}>
  <h2 className="text-2xl font-semibold mb-4">Концерт и атмосфера</h2>
  <p className="text-lg leading-relaxed indent-6 mb-4">
    6 декабря Макс Корж вышел на сцену СЗК «Дизель-Арена» в Пензе.  
    Концерт длился около трёх часов и собрал порядка 6000 человек.  
    Атмосфера была невероятной: танцпол и трибуны были забиты до отказа, слэм, песни, фаер-шоу, катания на розовом фламинго и море эмоций.
  </p>
  <p className="text-lg leading-relaxed indent-6">
    В программе прозвучали хиты «Небо поможет нам», «Жить в кайф», «Мотылёк» и многие другие.  
    Это был настоящий праздник для всех участников выезда: энергия сцены и толпы держала в напряжении от начала до конца.
  </p>
</section>

      {/* Фото */}
      <section className="mb-12">
        <div className="max-w-3xl mx-auto">
          <Slider photos={concertPhotos} />
        </div>
      </section>

      {/* Итоги поездки */}
<section className="mb-12 max-w-3xl mx-auto" style={{ textAlign: "justify" }}>
  <p className="text-lg leading-relaxed indent-6">
    Пенза стала очередным подтверждением того, что бас-тур - это не только концерты, но и дружба, эмоции и совместные впечатления.  
    Каждая поездка объединяет фанатов Макса Коржа в одну команду и оставляет незабываемые воспоминания.
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
