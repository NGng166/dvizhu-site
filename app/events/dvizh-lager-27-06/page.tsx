"use client";

import Slider from "../../components/Slider";
import { VideoMobileSlider } from "../../components/VideoMobileSlider";

export default function DvizhLagerJunePage() {
  const photos = [
    { src: "/dvizh-lager-27-06/p1.jpg", alt: "Друзья" },
    { src: "/dvizh-lager-27-06/p2.jpg", alt: "Утро - палатка" },
    { src: "/dvizh-lager-27-06/p3.jpg", alt: "Улыбки" },
    { src: "/dvizh-lager-27-06/p4.jpg", alt: "Озеро, плавание" },
    { src: "/dvizh-lager-27-06/p5.jpg", alt: "Мерч" },
    { src: "/dvizh-lager-27-06/p6.jpg", alt: "Друзья, игры" },
  ];

  const v1to3 = [
    { loop: "/dvizh-lager-27-06/v1-loop.mp4", full: "/dvizh-lager-27-06/v1.mp4" },
    { loop: "/dvizh-lager-27-06/v2-loop.mp4", full: "/dvizh-lager-27-06/v2.mp4" },
    { loop: "/dvizh-lager-27-06/v3-loop.mp4", full: "/dvizh-lager-27-06/v3.mp4" },
  ];

  const v4to6 = [
    { loop: "/dvizh-lager-27-06/v4-loop.mp4", full: "/dvizh-lager-27-06/v4.mp4" },
    { loop: "/dvizh-lager-27-06/v5-loop.mp4", full: "/dvizh-lager-27-06/v5.mp4" },
    { loop: "/dvizh-lager-27-06/v6-loop.mp4", full: "/dvizh-lager-27-06/v6.mp4" },
  ];

  const progrevs = [
    { loop: "/dvizh-lager-27-06/progrev1-loop.mp4", full: "/dvizh-lager-27-06/progrev1.mp4" },
    { loop: "/dvizh-lager-27-06/progrev2-loop.mp4", full: "/dvizh-lager-27-06/progrev2.mp4" },
    { loop: "/dvizh-lager-27-06/progrev3-loop.mp4", full: "/dvizh-lager-27-06/progrev3.mp4" },
  ];

  const renderDesktopVideo = (src: string) => (
    <div
      key={src}
      className="relative overflow-hidden rounded-xl shadow-lg"
      style={{ aspectRatio: "9 / 16" }}
    >
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );

  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 sm:px-16 md:px-32 py-16">

      {/* ЗАГОЛОВОК */}
      <section className="max-w-3xl mx-auto mb-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-3">
          DvizhЛагерь
        </h1>
        <p className="text-lg text-gray-300">
          I смена · 27–29 июня 2025
        </p>
      </section>

      {/* ВСТУП */}
      <section className="max-w-3xl mx-auto space-y-8 text-lg leading-relaxed mb-20">
        <p className="indent-6">
          В конце июня мы снова собрались в лагере. Палатки, костёр, озеро, гитара и разговоры
          до утра — всё то, за что мы так любим DvizhЛагерь.
        </p>

        <p className="indent-6">
          Эта смена была тематической — «Встреча выпускников». Днём — активности и купание,
          вечером — костёр, песни и долгие разговоры.
        </p>
      </section>

      {/* ФОТО */}
      <section className="mb-24">
        <div className="max-w-4xl mx-auto">
          <Slider photos={photos} />
        </div>
      </section>

      {/* ТЕКСТ */}
      <section className="max-w-3xl mx-auto space-y-8 text-lg leading-relaxed mb-16">
        <p className="indent-6">
          Лагерь снова напомнил, что Dvizh — это люди, атмосфера и моменты,
          когда всё просто хорошо.
        </p>
      </section>

      {/* ВИДЕО v1–v3 */}
      <VideoMobileSlider videos={v1to3} />

      <div className="hidden sm:grid grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
        {v1to3.map(v => renderDesktopVideo(v.loop))}
      </div>

      {/* ТЕКСТ */}
      <section className="max-w-3xl mx-auto space-y-8 text-lg leading-relaxed mb-16">
        <p className="indent-6">
          Эти видео — про то, как всё было на самом деле.
        </p>
      </section>

      {/* ВИДЕО v4–v6 */}
      <VideoMobileSlider videos={v4to6} />

      <div className="hidden sm:grid grid-cols-3 gap-6 max-w-5xl mx-auto mb-28">
        {v4to6.map(v => renderDesktopVideo(v.loop))}
      </div>

      {/* ПРОГРЕВЫ */}
      <section className="max-w-3xl mx-auto space-y-8 text-lg leading-relaxed mb-16">
        <p className="font-semibold">
          Подготовка тоже была частью лагеря
        </p>

        <p className="indent-6">
          Видео-прогревы получились живыми и смешными — мы решили
          сохранить их здесь как часть истории.
        </p>
      </section>

      <VideoMobileSlider videos={progrevs} />

      <div className="hidden sm:grid grid-cols-3 gap-6 max-w-5xl mx-auto mb-32">
        {progrevs.map(v => renderDesktopVideo(v.loop))}
        <p className="col-span-3 text-center text-gray-400 mt-6">
          Лагерь начинается задолго до первого костра 😉
        </p>
      </div>

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
