"use client";

import Link from "next/link";

export default function PastEventsGallery() {
  const pastEvents = [
{ title: "FLAT - DvizhUfa", date: "18 октября 2025 г.", slug: "flat-18-10", image: "/flat-18-10/afish.jpg" },
{ title: "BEERPONG", date: "20 сентября 2025 г.", slug: "beerpong-20-09", image: "/beerpong-20-09/beerpong-20-09.jpg" },
{ title: "BUSTOUR | UFA - ALMATY", date: "2-9 сентября 2025 г.", slug: "bustour-06-09", image: "/bustour-06-09/bustour-cover.jpg" },
{ title: "DVIZH ЛАГЕРЬ II смена", date: "15-17 августа 2025 г.", slug: "lager-15-08", image: "/lager-15-08/lager-15-08.jpg" },
{ title: "Общий сбор в Дустаре", date: "14 августа 2025 г.", slug: "obshe-sbor-14-08", image: "/obshe-sbor-14-08/obshe-sbor-14-08.webp" },
{ title: "Питбайки", date: "12 июля 2025 г.", slug: "pitbike-12-07", image: "/pitbike-12-07/pitbike-12-07.jpg" },
{ title: "DVIZH ЛАГЕРЬ Iсмена", date: "27-29 июня 2025 г.", slug: "dvizh-lager-27-06", image: "/dvizh-lager-27-06/dvizh-lager-27-06.jpg" },
//{ title: "Встречай лето", date: "30 мая - 1 июня 2025 г.", slug: "vstrechay-leto-30-05", image: "/vstrechay-leto-30-05/vstrechay-leto-30-05.jpg" },
//{ title: "гора Малиновая", date: "17-18 мая 2025 г.", slug: "gora-malinovaya-17-05", image: "/gora-malinovaya-17-05/gora-malinovaya-17-05.jpg" },
{ title: "Квартирник", date: "27 апреля 2025 г.", slug: "kvartirnik-27-04", image: "/kvartirnik-27-04/kvartirnik-27-04.jpg" },
{ title: "BeerPong", date: "12 апреля 2025 г.", slug: "beerpong-12-04", image: "/beerpong-12-04/beerpong-12-04.jpg" },
//{ title: "FLAT by Samara", date: "29.03-30.03", slug: "flat-samara-29-03", image: "/flat-samara-29-03.jpg" },
{ title: "Айгир", date: "1-2 марта 2025 г.", slug: "aygir-01-03", image: "/aygir-01-03/aygir-01-03.jpg" },
{ title: "Квартирник", date: "16 февраля 2025 г.", slug: "kvartirnik-16-02", image: "/kvartirnik-16-02/kvartirnik-16-02.jpg" },
{ title: "Winter Camp 2.0", date: "7-9 февраля 2025 г.", slug: "winter-camp-07-02", image: "/winter-camp-2-0-07-02/winter-camp-2-0-07-02.jpg" },
{ title: "Встреча Нового года с ДвижУфой", date: "31.12.24 - 04.01.25", slug: "noviy-god-31-12", image: "/noviy-god-31-12/noviy-god-31-12.jpg" },
{ title: "DVIZH Лагерь", date: "15-17 ноября 2024 г.", slug: "dvizh-lager-15-11", image: "/dvizh-lager-15-11/dvizh-lager-15-11.jpg" },
{ title: "Анонс мерча", date: "7 ноября 2024 г.", slug: "den-h-07-11", image: "/den-h-07-11/den-h-07-11.jpg" },
  ];

  return (
    <section className="py-16 px-6 sm:px-16 md:px-32 bg-gray-700">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-white">
        Прошедшие мероприятия
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {pastEvents.map((event, index) => (
          <Link key={index} href={`/events/${event.slug}`}>
            <div className="overflow-hidden rounded-lg cursor-pointer hover:scale-105 transition-transform">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-32 sm:h-40 md:h-48 object-cover"
              />
              <p className="text-center mt-2">
                <span className="font-bold text-white text-base sm:text-lg">{event.title}</span>
                <br />
                <span className="text-white text-sm sm:text-base">{event.date}</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
