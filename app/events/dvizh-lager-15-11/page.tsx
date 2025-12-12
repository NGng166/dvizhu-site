"use client";

import Slider from "../../components/Slider";

export default function DvizhLagerPage() {
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

{/* Галерея фото — НОВЫЙ СЛАЙДЕР */}
<section className="mb-12">
  <h2 className="text-2xl font-semibold mb-4">Фото</h2>
  <Slider photos={photos} />
</section>


      {/* Видео */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Видео</h2>

        <div className="w-full max-w-2xl mx-auto">
          <video
            src="/dvizh-lager-15-11/vid1.mp4"
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
