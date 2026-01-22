"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Slider from "../../components/Slider";
import SocialPopup from "../../components/SocialPopup";
import Link from "next/link";

const loopVideos = [
  { id: 1, srcLoop: "/beerpong-12-04/v1-loop.mp4", srcFull: "/beerpong-12-04/v1-full.mp4" },
  { id: 2, srcLoop: "/beerpong-12-04/v2-loop.mp4", srcFull: "/beerpong-12-04/v2-full.mp4" },
  { id: 3, srcLoop: "/beerpong-12-04/v3-loop.mp4", srcFull: "/beerpong-12-04/v3-full.mp4" },
];

export default function BeerPongPage() {
  const router = useRouter();
  const [openVideoId, setOpenVideoId] = useState<number | null>(null);

  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 sm:px-16 md:px-32 py-16">

      {/* Заголовок */}
      <section className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-4">
          BeerPong
        </h1>
        <p className="text-lg text-gray-300">
          12 апреля 2025 г.
        </p>
      </section>

      {/* Начальное горизонтальное видео */}
      <section className="mb-16 max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg">
        <video
          src="/beerpong-12-04/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-cover rounded-xl"
        />
      </section>

      {/* Текстовые абзацы */}
      <section className="max-w-4xl mx-auto mb-20 space-y-6 text-lg leading-relaxed text-justify">
        <p className="indent-6">
          БирПонг - это шумно, весело и с эмоциями. Две команды, десять стаканов и один бросок,
          после которого либо весь стол орёт, либо все хватаются за голову. Мы стараемся проводить
          такие турниры регулярно, примерно раз в месяц, потому что формат всегда заходит -
          кто-то приходит играть, кто-то просто посмотреть, но в итоге втягиваются все.
        </p>

        <p className="indent-6">
          Здесь нет разделения на профи и новичков. Есть меткость, азарт, промахи и бурная радость,
          когда залетает нужный стакан. Во время турнира бар становится нашим: крики, смех,
          поддержка, подколы - всё как надо. После игр мы никуда не разбегаемся, остаёмся в лаундже,
          сидим, пьём и общаемся. Плюс бар для нас делает staff-ценник, так что вечер получается
          особенно приятным 🍺
        </p>

        <p className="indent-6">
          Один из турниров запомнился особенно - первое место заняла команда «Новоиспечённые» 🔥
          Ребята забрали не только денежный приз, но и алкогольный, причём абсолютно заслуженно.
          Без подарков вообще никто не уходит: фирменные стикеры получили и участники, и болельщики.
        </p>

        <p className="indent-6">
          Можно приходить без напарника - команду найдём на месте. Можно просто зайти поболеть
          и остаться на тусовку. БирПонг у нас - это не только про игру, а про людей,
          атмосферу и хороший вечер в своей компании.
        </p>
      </section>

      {/* Круглые видео внизу */}
      <section className="mb-20 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {loopVideos.map(video => (
            <div key={video.id} className="relative flex-1 rounded-full overflow-hidden cursor-pointer group" style={{ aspectRatio: "1 / 1" }} onClick={() => setOpenVideoId(video.id)}>
              <video
                src={video.srcLoop}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              {/* Кнопка Play overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-black text-3xl">▶</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Модальные окна для полного видео */}
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
              <div className="bg-black rounded-full overflow-hidden w-80 h-80 mx-auto">
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
