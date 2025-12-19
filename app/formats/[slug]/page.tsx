"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const formatsData: Record<string, any> = {
  lager: {
    title: "Dvizh Лагеря",
    description:
      "Лагерь — это место, где взрослые снова становятся собой. Костры, разговоры до утра, река, музыка и ощущение, что ты на своём месте.",
    heroImage: "/formats/lager-hero.jpg",
    events: [
      {
        title: "Dvizh Лагерь I смена",
        date: "27–29 июня 2025",
        slug: "dvizh-lager-27-06",
        image: "/dvizh-lager-27-06/dvizh-lager-27-06.jpg",
      },
      {
        title: "Dvizh Лагерь II смена",
        date: "15–17 августа 2025",
        slug: "lager-15-08",
        image: "/lager-15-08/lager-15-08.jpg",
      },
      {
        title: "Winter Camp 2.0",
        date: "7–9 февраля 2025",
        slug: "winter-camp-07-02",
        image: "/winter-camp-2-0-07-02/winter-camp-2-0-07-02.jpg",
      },
    ],
  },
};

export default function FormatPage() {
  const { slug } = useParams();
  const format = formatsData[slug as string];

  if (!format) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Формат не найден
      </div>
    );
  }

  return (
    <main className="bg-gray-900 text-white min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh]">
        <img
          src={format.heroImage}
          alt={format.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-end p-8 sm:p-16">
          <h1 className="text-3xl sm:text-5xl font-bold">
            {format.title}
          </h1>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 px-6 sm:px-16 md:px-32">
        <p className="text-lg text-gray-200 max-w-3xl">
          {format.description}
        </p>
      </section>

      {/* Events */}
      <section className="px-6 sm:px-16 md:px-32 pb-20">
        <h2 className="text-2xl font-bold mb-6">
          Мероприятия этого формата
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {format.events.map((event: any, index: number) => (
            <Link key={index} href={`/events/${event.slug}`}>
              <div className="rounded-lg overflow-hidden hover:scale-105 transition-transform">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-2">
                  <p className="font-bold">{event.title}</p>
                  <p className="text-sm text-gray-400">{event.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <section className="pb-20 px-6 sm:px-16 md:px-32 flex gap-4">
        <Link
          href="/#formats"
          className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
        >
          ← К форматам
        </Link>

        <Link
          href="/events"
          className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition"
        >
          Все мероприятия
        </Link>
      </section>
    </main>
  );
}
