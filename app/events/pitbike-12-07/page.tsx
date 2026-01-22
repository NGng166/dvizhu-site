"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SocialPopup from "../../components/SocialPopup";
import Link from "next/link";


const loopVideos = [
  { id: 1, srcLoop: "/pitbike-12-07/v1-loop.mp4", srcFull: "/pitbike-12-07/v1-full.mp4" },
  { id: 2, srcLoop: "/pitbike-12-07/v2-loop.mp4", srcFull: "/pitbike-12-07/v2-full.mp4" },
  { id: 3, srcLoop: "/pitbike-12-07/v3-loop.mp4", srcFull: "/pitbike-12-07/v3-full.mp4" },
];

const extraVideo = { 
  id: 4, 
  srcLoop: "/pitbike-12-07/v4-loop.mp4", 
  srcFull: "/pitbike-12-07/v4-full.mp4" 
};

export default function PitbikePage() {
  const router = useRouter();
  const [openVideoId, setOpenVideoId] = useState<number | null>(null);

  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 sm:px-16 md:px-32 py-16">

      {/* Заголовок */}
      <section className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-4">
          Питбайки
        </h1>
        <p className="text-lg text-gray-300">12 июля 2025</p>
      </section>

      {/* Общее фото */}
      <section className="mb-16 max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg">
        <img
          src="/pitbike-12-07/hero.jpg"
          alt="Питбайки"
          className="w-full h-auto object-cover rounded-xl"
        />
      </section>

      {/* Текст */}
      <section className="max-w-4xl mx-auto mb-20 space-y-6 text-lg leading-relaxed text-justify">
        <p className="indent-6">
          В этот день мы снова собрались на питбайки. Маленькая компания, эндуро и питбайки, поля и леса вокруг Уфы - всё как надо для настоящего заряда адреналина.
        </p>
        <p className="indent-6">
          Практически никто раньше не ездил, но ребята из мотопроката быстро ввели всех в курс дела, выдали экипировку и помогли освоиться. Через пару минут уже все летали по полям и лесным тропам, кайф ловился с каждой минутой.
        </p>
        <p className="indent-6">
          Вечером все уехали с отличным настроением и кучей эмоций, которые хватит на всю неделю. Быть может, повторим скоро? 🔥
        </p>
      </section>

      {/* Круговые видео */}
      <section className="mb-20 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {loopVideos.map(video => (
            <div
              key={video.id}
              className="relative flex-1 rounded-full overflow-hidden cursor-pointer group"
              style={{ aspectRatio: "1 / 1" }}
              onClick={() => setOpenVideoId(video.id)}
            >
              <video
                src={video.srcLoop}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-black text-3xl">▶</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Видео без маски внизу */}
      <section className="mb-20 max-w-3xl mx-auto">
        <div
          className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
          style={{ aspectRatio: "16 / 9" }}
          onClick={() => setOpenVideoId(extraVideo.id)}
        >
          <video
            src={extraVideo.srcLoop}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-black text-3xl">▶</div>
          </div>
        </div>
      </section>

      {/* Модальные окна */}
{loopVideos.map(video => (
  openVideoId === video.id && (
    <div key={video.id} className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
      <div className="relative w-full max-w-md sm:max-w-lg">
        <button
          onClick={() => setOpenVideoId(null)}
          className="fixed top-6 right-6 z-50 w-12 h-12
                     bg-black/70 text-white text-3xl
                     rounded-full flex items-center justify-center
                     hover:bg-black/90 transition"
        >✕</button>

        <div className={`bg-black overflow-hidden rounded-xl mx-auto ${
          video.id === extraVideo.id ? "w-full aspect-[9/16]" : "w-80 h-80"
        }`}>
          <video
            src={video.srcFull}
            controls
            autoPlay
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
))}

{/* Отдельно для четвертого видео */}
{openVideoId === extraVideo.id && (
  <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
    <div className="relative w-full max-w-md sm:max-w-lg">
      <button
        onClick={() => setOpenVideoId(null)}
        className="fixed top-6 right-6 z-50 w-12 h-12
                   bg-black/70 text-white text-3xl
                   rounded-full flex items-center justify-center
                   hover:bg-black/90 transition"
      >✕</button>

      <div className="bg-black overflow-hidden rounded-xl w-full aspect-[9/16] mx-auto">
        <video
          src={extraVideo.srcFull}
          controls
          autoPlay
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
)}


      {/* Финальная строка */}
      <section className="text-center mt-8 text-lg text-gray-300">
        Эмоции за вечер, которые не забыть 😉
      </section>

      {/* Навигация */}
      <section className="pb-16 mt-12">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-4 justify-center">
          
          {/* Назад по истории */}
          <button
            onClick={() => router.back()}
            className="px-6 py-3 border border-white rounded-lg text-2xl font-bold hover:bg-white hover:text-black transition"
          >
            ←
          </button>

          <Link
            href="/#formats"
            className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
          >
            К форматам
          </Link>

          <Link
            href="/events"
            className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition"
          >
            Все мероприятия
          </Link>
        </div>
      </section>

      {/* Соцсети */}
      <SocialPopup />
    </main>
  );
}

