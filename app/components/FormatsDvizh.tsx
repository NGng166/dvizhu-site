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
        { type: "image", src: "/formats/concerts2.jpg" },
        { type: "image", src: "/formats/concerts3.jpg" },
        { type: "image", src: "/formats/concerts4.jpg" },
        { type: "image", src: "/formats/concerts5.jpg" },
        //{ type: "video", src: "/formats/concerts-video.mp4" },
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
    }, 2500); // скорость перелистывания

    return () => clearInterval(interval);
  }, [mediaLength]);

  return (
    <Link href={`/formats/${format.slug}`}>
      <div className="group relative overflow-hidden rounded-xl cursor-pointer h-56">
        {/* Медиа слои */}
        {format.media.map((item: any, index: number) => {
          const isActive = index === currentIndex;

          return (
            <div
              key={index}
              className={`
                absolute inset-0
                transition-opacity duration-700 ease-in-out
                ${isActive ? "opacity-100" : "opacity-0"}
              `}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={format.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              ) : (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              )}
            </div>
          );
        })}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-5 z-10">
          <h3 className="text-xl font-bold">{format.title}</h3>
          <p className="text-sm text-gray-200 mt-1">
            {format.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

