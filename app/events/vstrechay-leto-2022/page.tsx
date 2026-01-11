"use client";

import Link from "next/link";
import Slider from "../../components/Slider";
import SocialPopup from "../../components/SocialPopup";

const photos = [
  { src: "/vstrechay-leto-2022/3.jpg", alt: "Молодежь у таблички" },
  { src: "/vstrechay-leto-2022/2.jpg", alt: "Тусовка" },
  { src: "/vstrechay-leto-2022/2-1.jpg", alt: "Никольская пещера" },
  { src: "/vstrechay-leto-2022/4.jpg", alt: "Никольский мост" },
  { src: "/vstrechay-leto-2022/5.jpg", alt: "Высота, горы" },
  { src: "/vstrechay-leto-2022/6.jpg", alt: "Скала Никольская, Миньяр" },
  { src: "/vstrechay-leto-2022/7.jpg", alt: "Молодежь горы" },
];

export default function LagerPage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 sm:px-16 md:px-32 py-16">

      {/* Заголовок */}
      <section className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-4">
          Встречай лето · 2022
        </h1>
        <p className="text-lg text-gray-300 italic">
          27–29 мая 2022
        </p>
      </section>

      {/* Основное фото лагеря */}
      <section className="mb-12 max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg">
        <img
          src="/vstrechay-leto-2022/vstrechay-leto-2022.jpg"
          alt="Горы, красивый вид"
          className="w-full h-auto object-cover rounded-xl"
        />
      </section>

      {/* Основной текст */}
      <section className="max-w-3xl mx-auto mb-16 text-lg leading-relaxed space-y-4 text-justify">
        <p className="indent-6">
          Это мероприятие родилось случайно, когда уфимский движ решил собраться где-нибудь в классном месте и вместе встретить наступающее лето. Место было выбрано не случайно, давно планировали туда поехать - поляна близ г. Миньяр, ж/д ст. Снежинка (1753 км) известная знаменитым Никольким мостом и одноименной пещерой.
        </p>

        {/* Второе фото */}
        <div className="mb-4 overflow-hidden rounded-xl shadow-lg">
          <img
            src="/vstrechay-leto-2022/most+peshera.webp"
            alt="Горы, красивый вид"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        <p className="indent-6">
          Тогда то и появилось полюбившееся нам название - "Встречай лето". Мероприятие, открывающее сезон летних, самых ярких ивентов и сборов в кругу друзей и близких.
        </p>

        <p className="indent-6">
          В этом выезде мы успели многое - приехать до станции, разложить палатки, подняться на вершину и спуститься в пещеру. Хоть погода и не порадовала, дожди не помешали приготовить вкусную походную пищу на костре и посидеть с гитарой.
        </p>
      </section>

      {/* Слайдер фото */}
      <section className="mb-16">
        <Slider photos={photos} />
      </section>

      {/* Финальная строка */}
      <section className="text-center mt-8 text-lg text-gray-300 italic">
        Встречайте лето вместе с нами! 🔥
      </section>

      {/* Навигация */}
      <section className="pb-16 px-6 sm:px-16 md:px-32">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-4 justify-center">

          <Link
            href="/formats/lager#format-events"
            aria-label="К мероприятиям формата"
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
