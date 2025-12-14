"use client";

import { useState } from "react";
import Slider from "../../components/Slider";
import { VideoMobileSlider } from "../../components/VideoMobileSlider";

type VideoItem = {
  loop: string;
  full: string;
};

export default function DvizhLagerJunePage() {
  const [openVideo, setOpenVideo] = useState<string | null>(null);

  const photos = [
    { src: "/dvizh-lager-27-06/p1.jpg", alt: "Друзья" },
    { src: "/dvizh-lager-27-06/p2.jpg", alt: "Утро - палатка" },
    { src: "/dvizh-lager-27-06/p3.jpg", alt: "Улыбки" },
    { src: "/dvizh-lager-27-06/p4.jpg", alt: "Озеро, плавание" },
    { src: "/dvizh-lager-27-06/p5.jpg", alt: "Мерч" },
    { src: "/dvizh-lager-27-06/p6.jpg", alt: "Друзья, игры" },
  ];

  const v1to3: VideoItem[] = [
    { loop: "/dvizh-lager-27-06/v1-loop.mp4", full: "/dvizh-lager-27-06/v1.mp4" },
    { loop: "/dvizh-lager-27-06/v2-loop.mp4", full: "/dvizh-lager-27-06/v2.mp4" },
    { loop: "/dvizh-lager-27-06/v3-loop.mp4", full: "/dvizh-lager-27-06/v3.mp4" },
  ];

  const v4to6: VideoItem[] = [
    { loop: "/dvizh-lager-27-06/v4-loop.mp4", full: "/dvizh-lager-27-06/v4.mp4" },
    { loop: "/dvizh-lager-27-06/v5-loop.mp4", full: "/dvizh-lager-27-06/v5.mp4" },
    { loop: "/dvizh-lager-27-06/v6-loop.mp4", full: "/dvizh-lager-27-06/v6.mp4" },
  ];

  const progrevs: VideoItem[] = [
    { loop: "/dvizh-lager-27-06/progrev1-loop.mp4", full: "/dvizh-lager-27-06/progrev1.mp4" },
    { loop: "/dvizh-lager-27-06/progrev2-loop.mp4", full: "/dvizh-lager-27-06/progrev2.mp4" },
    { loop: "/dvizh-lager-27-06/progrev3-loop.mp4", full: "/dvizh-lager-27-06/progrev3.mp4" },
  ];

  const renderDesktopGrid = (videos: VideoItem[]) => (
    <div className="hidden sm:grid grid-cols-3 gap-6 max-w-5xl mx-auto mb-28">
      {videos.map((v, i) => (
        <div key={i} className="relative overflow-hidden rounded-xl shadow-lg" style={{ aspectRatio: "9 / 16" }}>
          <video
            src={v.loop}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => setOpenVideo(v.full)}
            className="absolute inset-0 flex items-center justify-center bg-black/20 text-white text-3xl rounded-xl"
          >
            ▶
          </button>
        </div>
      ))}
    </div>
  );

  const renderDesktopVideo = (videos: VideoItem[]) =>
    videos.map((v) => (
      <div
        key={v.full}
        className="relative overflow-hidden rounded-xl shadow-lg"
        style={{ aspectRatio: "9 / 16" }}
      >
        <video src={v.loop} autoPlay loop muted playsInline className="w-full h-full object-cover" />
      </div>
    ));

  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 sm:px-16 md:px-32 py-16">

      {/* ЗАГОЛОВОК */}
      <section className="max-w-3xl mx-auto mb-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-3">DvizhЛагерь</h1>
        <p className="text-lg text-gray-300">I смена · 27–29 июня 2025</p>
      </section>

      {/* ВСТУП */}
      <section className="max-w-3xl mx-auto space-y-8 text-lg leading-relaxed mb-20">
        <p className="indent-6">
          В конце июня мы снова собрались в лагере. Палатки, костёр, озеро, гитара и разговоры до утра — всё то, за что мы так любим DvizhЛагерь.
        </p>
        <p className="indent-6">
          Эта смена была тематической — «Встреча выпускников». Днём — активности и купание, вечером — костёр, песни и долгие разговоры.
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
          Лагерь снова напомнил, что Dvizh — это люди, атмосфера и моменты, когда всё просто хорошо.
        </p>
      </section>

      {/* ВИДЕО v1–v3 */}
      <VideoMobileSlider videos={v1to3} />
      {renderDesktopGrid(v1to3)}

      <section className="max-w-3xl mx-auto space-y-8 text-lg leading-relaxed mb-16">
        <p className="indent-6">
          Эти видео — про то, как всё было на самом деле.
        </p>
      </section>

      {/* ВИДЕО v4–v6 */}
      <VideoMobileSlider videos={v4to6} />
      {renderDesktopGrid(v4to6)}

      {/* ПРОГРЕВЫ */}
      <section className="max-w-3xl mx-auto space-y-8 text-lg leading-relaxed mb-16">
        <p className="font-semibold">Подготовка тоже была частью лагеря</p>
        <p className="indent-6">
          Видео-прогревы получились живыми и смешными — мы решили сохранить их здесь как часть истории.
        </p>
      </section>

      <VideoMobileSlider videos={progrevs} />
      {renderDesktopGrid(progrevs)}

      <p className="col-span-3 text-center text-gray-400 mt-6">
        Лагерь начинается задолго до первого костра 😉
      </p>

      {/* МОДАЛКА */}
      {openVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
          <button
            onClick={() => setOpenVideo(null)}
            className="fixed top-6 right-6 z-50 w-12 h-12 bg-black/70 text-white text-3xl rounded-full flex items-center justify-center"
          >
            ✕
          </button>
          <div className="w-full max-w-md bg-black rounded-xl overflow-hidden" style={{ aspectRatio: "9 / 16" }}>
            <video src={openVideo} controls autoPlay className="w-full h-full object-cover" />
          </div>
        </div>
      )}

      {/* Кнопка назад */}
      <div className="text-center mt-8">
        <a href="/" className="bg-orange-500 px-6 py-2 rounded-lg hover:bg-orange-600 transition">
          Назад на главную
        </a>
      </div>
    </main>
  );
}
