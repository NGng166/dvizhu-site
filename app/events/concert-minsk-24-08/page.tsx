"use client";

import Link from "next/link";
import SocialPopup from "../../components/SocialPopup";
import Slider from "../../components/Slider";

const concertPhotos = [
  { src: "/concert-minsk-24-08/1.jpg", alt: "Концерт Макса Коржа, Минск" },
  { src: "/concert-minsk-24-08/2.jpg", alt: "Толпа фанатов" },
  { src: "/concert-minsk-24-08/3.jpg", alt: "Город Минск" },
  { src: "/concert-minsk-24-08/4.jpg", alt: "Наш стикер в Минске" },
  { src: "/concert-minsk-24-08/5.jpg", alt: "Толпа фанатов" },
  { src: "/concert-minsk-24-08/6.jpg", alt: "Бастур, фанаты" },
];

export default function ConcertMinskPage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 sm:px-16 md:px-32 py-16">

      {/* Заголовок */}
      <section className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-4">
          Концерт Макса Коржа | Минск
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed">
          24 августа 2019 · Стадион «Динамо»
        </p>

        <div className="mt-6">
          <img
            src="/concert-minsk-24-08/cover.jpg"
            alt="Концерт Макса Коржа в Минске"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Вступление / о поездке */}
      <section className="mb-12 max-w-3xl mx-auto">
        <p className="text-lg leading-relaxed indent-6 text-justify">
          Наши уфимские малые вернулись из сумасшедшего трипа в Минск! 😱🙈  
          Эта поездка стала первым выездом за границу для нашего движа: дорога, концерты и новые впечатления объединили команду в одну большую семью.
        </p>
        <p className="text-lg leading-relaxed indent-6 text-justify">
          По пути нас ждали великолепные пейзажи России и Беларуси, уютные автобусы с кондиционерами и откидными сиденьями, а в дороге мы успели познакомиться и по-настоящему оторваться на автобусных вечеринках.
        </p>
      </section>

      {/* О концерте */}
      <section className="mb-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Концерт и атмосфера</h2>
        <p className="text-lg leading-relaxed indent-6 text-justify mb-4">
          24 августа Макс Корж дал концерт на стадионе «Динамо» в Минске.  
          Выступление длилось 3 часа 43 минуты и собрало десятки тысяч фанатов.  
          Атмосфера была невероятной: слэм, танцы, эмоции и сотни голосов, поющих хиты вместе с артистом.
        </p>
        <p className="text-lg leading-relaxed indent-6 text-justify mb-4">
          В программе прозвучали такие песни, как «Движ», «Стилево», «Молодость всё прощает», «Где твоя любовь», «Время», «Жить в кайф», «Зелёный чемодан», «Амстердам», «Жги, сын!», «Здоровый сон» и многие другие.
        </p>
        <p className="text-lg leading-relaxed indent-6 text-justify">
          Этот концерт стал настоящим праздником для всех участников выезда: эмоции зашкаливали, а энергетика сцены и толпы держала в напряжении от начала до конца.
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
          Минск стал самым дальним и масштабным выездом для Уфы на тот момент.  
          Дорога, новые города, экскурсия по столице Беларуси, концерт и возвращение домой - всё это оставило незабываемые впечатления.  
          Теперь мы знаем: выезды за границу - это ещё больше эмоций, драйва и единства среди фанатов Макса Коржа.
        </p>
        <p className="text-lg leading-relaxed indent-6 text-justify">
          После этой поездки мы стали настоящей командой, а впечатления Минска и Москвы надолго останутся в памяти каждого участника.
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
