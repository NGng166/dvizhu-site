"use client";

import Slider from "../../components/Slider";

const photos = [
  { src: "/noviy-god-31-12/p1.jpg", alt: "Новогодняя ночь с Dvizh — атмосфера" },
  { src: "/noviy-god-31-12/p2.jpg", alt: "Новогодняя ночь с Dvizh — друзья" },
  { src: "/noviy-god-31-12/p3.jpg", alt: "Новогодняя ночь с Dvizh — танцы" },
  { src: "/noviy-god-31-12/p4.jpg", alt: "Новогодняя ночь с Dvizh — уют" },
  { src: "/noviy-god-31-12/p5.jpg", alt: "Новогодняя ночь с Dvizh — праздник" },
];

export default function NoviyGodPage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 sm:px-16 md:px-32 py-16">

      {/* Hero-блок */}
<section className="mb-16">
    <div className="text-center mt-8 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-4">
            Новогодняя ночь с Dvizh
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed">
            Впервые мы встретили Новый год вместе ✨<br />
            Мы решили собрать друзей и близких, чтобы проводить уходящий год
            в тёплой, душевной и по-настоящему домашней атмосфере Dvizh.
          </p>
        </div>
        
  <div className="max-w-3xl mx-auto">
        <div
      className="overflow-hidden rounded-xl shadow-lg bg-black"
      style={{ aspectRatio: "9 / 16" }}
    >
          <video
        src="/noviy-god-31-12/hero.mp4"
        controls
        preload="metadata"
        className="w-full h-full object-cover"
          />
        </div>
    </div>
</section>

      {/* Идея встречи */}
      <section className="mb-14 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Идея встречи</h2>
        <p className="text-lg leading-relaxed indent-6 mb-4">
          Это была не просто новогодняя ночь. Нам хотелось создать пространство,
          где каждому будет комфортно — даже если раньше этот праздник было не с кем разделить.
        </p>
        <p className="text-lg leading-relaxed indent-6">
          Новый год — про людей, близость и ощущение
          <span className="italic"> «я на своём месте» </span> 🤍
        </p>
      </section>

      {/* Как это было */}
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

      {/* Слайдер */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto">
          <Slider photos={photos} peek={12} />
        </div>
      </section>

      {/* Атмосфера */}
      <section className="mb-14 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Атмосфера</h2>
        <p className="text-lg leading-relaxed indent-6 mb-4">
          Мы просто были рядом. Пели, говорили тёплые слова,
          делились историями и смеялись до ночи.
        </p>
        <p className="text-lg leading-relaxed indent-6">
          Это был тот самый вечер, который не хочется перематывать —
          только сохранить в памяти.
        </p>
      </section>

      {/* Поздравления */}
      <section className="mb-14 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Поздравления</h2>
        <p className="text-lg leading-relaxed indent-6 mb-4">
          Даже те, кто был далеко, стали частью этой ночи.
        </p>
        <p className="text-lg leading-relaxed indent-6">
          Мы поздравляли друзей через Telegram-канал,
          а в общей беседе ребята записывали видеокружочки
          с новогодними пожеланиями — живые, искренние, семейные 🎥✨
        </p>
      </section>

      {/* Финал */}
      <section className="mb-20 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Финал</h2>
        <p className="text-lg leading-relaxed mb-4">
          Так мы проводили уходящий год —<br />
          в кругу друзей, с теплом и ощущением единства.
        </p>
        <p className="text-lg leading-relaxed">
          Этот вечер ещё раз напомнил нам, что Dvizh — это не формат и не место.
          Это люди и моменты, которые хочется беречь 🤍
        </p>
      </section>

    </main>
  );
}
