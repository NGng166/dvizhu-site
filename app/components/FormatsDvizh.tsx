"use client";

import Link from "next/link";

export default function FormatsDvizh() {
  const formats = [
    {
      title: "Dvizh Лагеря",
      description: "Смены, костры, река и полная перезагрузка",
      slug: "lager",
      image: "/formats/lager.jpg",
    },
    {
      title: "Концертные выезды",
      description: "Другие города, большие сцены и дорога вместе",
      slug: "concerts",
      image: "/formats/concerts.jpg",
    },
    {
      title: "Dvizh Тусы",
      description: "Флэты, вечеринки и ночи без тормозов",
      slug: "tusy",
      image: "/formats/tusy.jpg",
    },
    {
      title: "Dvizh × Артисты",
      description: "Особые события с музыкантами и гостями",
      slug: "artists",
      image: "/formats/artists.jpg",
    },
    {
      title: "Горы и походы",
      description: "Природа, испытания и командный дух",
      slug: "mountains",
      image: "/formats/mountains.jpg",
    },
    {
      title: "Комьюнити-ивенты",
      description: "BeerPong, квартирники и тёплые сборы",
      slug: "community",
      image: "/formats/community.jpg",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-16 md:px-32 bg-gray-800">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
        Чем живёт Dvizh-Ufa
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {formats.map((format, index) => (
          <Link key={index} href={`/formats/${format.slug}`}>
            <div className="group relative overflow-hidden rounded-xl cursor-pointer">
              <img
                src={format.image}
                alt={format.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-5">
                <h3 className="text-xl font-bold">{format.title}</h3>
                <p className="text-sm text-gray-200 mt-1">
                  {format.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
