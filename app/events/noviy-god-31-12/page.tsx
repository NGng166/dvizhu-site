"use client";

import { useState } from "react";
import Slider from "../../components/Slider";

const photos = [
  { src: "/noviy-god-31-12/p5.jpg", alt: "Новогодняя ночь с Dvizh - атмосфера" },
  { src: "/noviy-god-31-12/p2.jpg", alt: "Новогодняя ночь с Dvizh - друзья" },
  { src: "/noviy-god-31-12/p3.jpg", alt: "Новогодняя ночь с Dvizh - танцы" },
  { src: "/noviy-god-31-12/p4.jpg", alt: "Новогодняя ночь с Dvizh - уют" },
  { src: "/noviy-god-31-12/p1.jpg", alt: "Новогодняя ночь с Dvizh - праздник" },
];

export default function NoviyGodPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 sm:px-16 md:px-32 py-16">

      {/* ШАПКА */}
      <section className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-6">
          Новогодняя ночь с Dvizh
        </h1>

        <p className="text-lg sm:text-xl leading-relaxed text-gray-200">
          Мы решили собрать друзей и близких, чтобы проводить уходящий год
          в тёплой, душевной и по-настоящему домашней атмосфере Dvizh.
        </p>
      </section>

      {/* ВИДЕО-ЛУП */}
      <section className="mb-20">
        <div className="max-w-md sm:max-w-lg mx-auto">
          <div
            className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
            style={{ aspectRatio: "9 / 16" }}
            onClick={() => setOpen(true)}
          >
            <video
              src="/noviy-god-31-12/hero-loop.mp4"
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
            Нажмите, чтобы посмотреть видео со звуком
          </p>
        </div>
      </section>

      {/* МОДАЛКА С ПОЛНЫМ ВИДЕО */}
      {open && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
          <div className="relative w-full max-w-md sm:max-w-lg">
<button
  onClick={() => setOpen(false)}
  className="fixed top-6 right-6 z-50 w-12 h-12
             bg-black/70 text-white text-3xl
             rounded-full flex items-center justify-center
             hover:bg-black/90 transition"
>
  ✕
</button>


            <div
              className="bg-black rounded-xl overflow-hidden"
              style={{ aspectRatio: "9 / 16" }}
            >
              <video
                src="/noviy-god-31-12/hero-full.mp4"
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* ИДЕЯ ВСТРЕЧИ */}
      <section className="mb-14 max-w-3xl mx-auto">
        <p className="text-lg leading-relaxed indent-6 mb-4">
          Это была не просто новогодняя ночь. Нам хотелось создать пространство,
          где каждому будет комфортно - даже если раньше этот праздник было не с кем разделить.
        </p>
        <p className="text-lg leading-relaxed indent-6">
          Новый год - про людей, близость и ощущение
          <span className="italic"> «я на своём месте» </span> 🤍
        </p>
      </section>

      {/* КАК ЭТО БЫЛО */}
      <section className="mb-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Как это было</h2>

        <p className="text-lg leading-relaxed mb-6">
          В ту ночь всё сложилось само собой:
        </p>

        <ul className="list-disc list-inside text-lg space-y-2 mb-6">
          <li>новые знакомства 🤝</li>
          <li>танцы и музыка 💃</li>
          <li>песни под гитару 🎸</li>
          <li>игры и смех 🎲</li>
          <li>баня и прыжки в сугробы 🧖‍♀️❄️</li>
          <li>тосты и разговоры по душам 🗣</li>
          <li>салатики и праздничный стол 🥗🍻</li>
        </ul>

        <p className="text-lg leading-relaxed">
          Без спешки.<br />
          Без формальностей.<br />
          По-дружески и очень по-настоящему.
        </p>
      </section>

      {/* СЛАЙДЕР */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto">
          <Slider photos={photos} />
        </div>
      </section>

      {/* АТМОСФЕРА */}
      <section className="mb-14 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Атмосфера</h2>
    {/* Фото под заголовком */}
      <img
        src="/noviy-god-31-12/guitar.jpg"
        alt="atmosfera"
        className="w-full max-w-3xl rounded-lg shadow-lg mb-12 mx-auto"
      />
        <p className="text-lg leading-relaxed indent-6 mb-4">
          Мы просто были рядом. Пели, говорили тёплые слова,
          делились историями и смеялись до ночи.
        </p>
        <p className="text-lg leading-relaxed indent-6">
          Это был тот самый вечер, который не хочется перематывать -
          только сохранить в памяти.
        </p>
      </section>

      {/* ПОЗДРАВЛЕНИЯ */}
      <section className="mb-14 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Поздравления</h2>
        <p className="text-lg leading-relaxed indent-6 mb-4">
          Даже те, кто был далеко, стали частью этой ночи.
        </p>
        <p className="text-lg leading-relaxed indent-6">
          Мы поздравляли друзей через Telegram-канал,
          а в общей беседе ребята записывали видеокружочки
          с новогодними пожеланиями - живые, искренние, семейные 🎥✨
        </p>
      </section>

{/* Атмосферное видео на фоне */}
<section className="mb-16 flex justify-center">
  <div className="w-full max-w-3xl overflow-hidden rounded-xl shadow-lg bg-black">
    <video
      src="/noviy-god-31-12/atmosfera.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-auto object-cover rounded-xl"
    />
  </div>
</section>



      {/* ФИНАЛ */}
      <section className="mb-20 max-w-3xl mx-auto text-center">
        <p className="text-lg leading-relaxed mb-4">
          Так мы проводили уходящий год -<br />
          в кругу друзей, с теплом и ощущением единства.
        </p>
        <p className="text-lg leading-relaxed">
          Этот вечер ещё раз напомнил нам, что Dvizh - это не формат и не место.
          Это люди и моменты, которые хочется беречь 🤍
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
