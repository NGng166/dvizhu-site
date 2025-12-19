"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function FormatsDvizh() {
  const formats = [
    {
      title: "Dvizh Лагеря",
      description: "Смены, песни до утра и полная перезагрузка",
      slug: "lager",
      media: [
        { type: "image", src: "/formats/lager1.jpg" },
        { type: "image", src: "/formats/lager2.jpg" },
        { type: "image", src: "/formats/lager3.jpg" },
        { type: "image", src: "/formats/lager4.jpg" },
        //{ type: "video", src: "/formats/lager-video.mp4" },
      ],
    },
    {
      title: "Концертные выезды",
      description: "Другие города, большие сцены и дорога вместе",
      slug: "concerts",
      media: [
        { type: "image", src: "/formats/concerts1.jpg" },
        { type: "video", src: "/formats/concerts-video.mp4" },
      ],
    },
    {
      title: "Dvizh Тусы",
      description: "Флэты, вечеринки и ночи без тормозов",
      slug: "tusy",
      media: [
        { type: "image", src: "/formats/tusy1.jpg" },
        { type: "image", src: "/formats/tusy2.jpg" },
      ],
    },
    {
      title: "Dvizh × Артисты",
      description: "Особые события с музыкантами и гостями",
      slug: "artists",
      media: [
        { type: "image", src: "/formats/artists1.jpg" },
        { type: "video", src: "/formats/artists-video.mp4" },
      ],
    },
    {
      title: "Горы и походы",
      description: "Природа, испытания и командный дух",
      slug: "mountains",
      media: [
        { type: "image", src: "/formats/mountains1.jpg" },
        { type: "image", src: "/formats/mountains2.jpg" },
      ],
    },
    {
      title: "Комьюнити-ивенты",
      description: "BeerPong, квартирники и тёплые сборы",
      slug: "community",
      media: [
        { type: "image", src: "/formats/community1.jpg" },
        { type: "video", src: "/formats/community-video.mp4" },
      ],
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-16 md:px-32 bg-gray-800">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
        Чем живёт Dvizh-Ufa
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {formats.map((format, index) => (
          <FormatCard key={index} format={format} />
        ))}
      </div>
    </section>
  );
}

// --- карточка с мини-слайдшоу ---
function FormatCard({ format }: { format: any }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mediaLength = format.media.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mediaLength);
    }, 2500); // смена каждые 2.5 секунды
    return () => clearInterval(interval);
  }, [mediaLength]);

  const currentMedia = format.media[currentIndex];

  return (
    <Link href={`/formats/${format.slug}`}>
      <div className="group relative overflow-hidden rounded-xl cursor-pointer">
        {currentMedia.type === "image" ? (
          <img
            src={currentMedia.src}
            alt={format.title}
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <video
            src={currentMedia.src}
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
            autoPlay
            muted
            loop
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-5">
          <h3 className="text-xl font-bold">{format.title}</h3>
          <p className="text-sm text-gray-200 mt-1">{format.description}</p>
        </div>
      </div>
    </Link>
  );
}
