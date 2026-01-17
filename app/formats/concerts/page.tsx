"use client";

import Link from "next/link";
import MediaGallery from "../../components/MediaGallery";
import SocialPopup from "../../components/SocialPopup";

export default function ConcertsPage() {
  const format = {
    title: "Концертные выезды",
    description: "Другие города, сцены и дороги вместе - концертные туры ДвижУфы.",
    about: [
      "Концертные выезды - это один из самых масштабных форматов Движа. Они дают возможность не просто попасть на концерт, а полностью погрузиться в атмосферу: дорога в автобусе, знакомства, смех и музыка на протяжении всего пути.",
      "Первый тур состоялся в 2018 году - из Уфы в Челябинск. С этого момента стало понятно: концерты Коржа - это целый мир эмоций. Слэм, совместные песни, энергия толпы и настоящая свобода - всё это создаёт неповторимую атмосферу.",
      "Мы объездили десятки городов России и даже за границу: Москва, Санкт-Петербург, Казань, Минск, Алматы и Астана. Каждое путешествие - это новые лица, впечатления и эмоции, которые остаются надолго.",
      "С Движем концерт - это больше, чем музыка: это дорога вместе, общение в автобусе, драйв на сцене и совместные моменты, которые объединяют команду.",
      "Если ты ещё не был на таком выезде - тебя ждёт удивительный опыт, полный эмоций и новых знакомств!",
    ],
    heroDesktop: { type: "video", src: "/formats/concerts/hero.webm" },
    heroMobile: { type: "video", src: "/formats/concerts/concerts-hero-mobile.mp4" },
    heroImages: [
      "/formats/concerts/concerts1.jpg",
      "/formats/concerts/concerts2.jpg",
      "/formats/concerts/concerts3.jpg",
      "/formats/concerts/concerts4.jpg",
      "/formats/concerts/concerts5.jpg",
      "/formats/concerts/concerts6.jpg",
      "/formats/concerts/concerts7.jpg",
    ],
    wideMedia: { type: "video", src: "/formats/concerts/concert-wide.mp4" },
    events: [
      { title: "BUSTOUR | Ufa - Almaty", date: "2–9 сентября 2025", slug: "bustour-06-09", image: "/formats/concerts/bustour-06-09.jpg" },
      { title: "BUSTOUR | Ufa - Kazakstan",  date: "1–8 октября 2024",  slug: "bustour-05-10", image: "/bustour-05-10/1-1.jpg"},
      { title: "Макс Корж | Пермь", date: "13 декабря 2019", slug: "concert-perm-13-12", image: "/concert-perm-13-12/cover.jpg" },
      { title: "Макс Корж | Пенза", date: "6 декабря 2019", slug: "concert-penza-06-12", image: "/concert-penza-06-12/cover.jpg" },
      { title: "Макс Корж | Москва", date: "31 августа 2019", slug: "concert-moscow-31-08", image: "/concert-moscow-31-08/cover.jpg" },
      { title: "Макс Корж | Минск", date: "24 августа 2019", slug: "concert-minsk-24-08", image: "/concert-minsk-24-08/cover.jpg" },
      { title: "Макс Корж | Челябинск", date: "31 апреля 2019", slug: "concert-chel-31-05", image: "/concert-chel-31-05/cover.jpg" },
      { title: "Макс Корж | Казань", date: "14 апреля 2019", slug: "concert-kazan-14-04", image: "/concert-kazan-14-04/cover.jpg" },
      { title: "Макс Корж | Екатеринбург", date: "1 декабря 2018", slug: "concert-ekb-1-12", image: "/concert-ekb-1-12/cover.jpg" },
      { title: "Макс Корж | Уфа", date: "14 октября 2018", slug: "concert-ufa-14-10", image: "/concert-ufa-14-10/cover.jpg" },
      { title: "Макс Корж | Самара", date: "12 октября 2018", slug: "concert-samara-12-10", image: "/concert-samara-12-10/cover.jpg" },
      { title: "Макс Корж | Челябинск", date: "2 июня 2018", slug: "concert-chel-2-06", image: "/concert-chel-2-06/cover.jpg" },
    ],
  };

  return (
    <main className="bg-gray-900 text-white min-h-screen">

      {/* Hero */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 sm:hidden">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src={format.heroMobile.src} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 hidden sm:block">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src={format.heroDesktop.src} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/77 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-end items-center pb-12 sm:pb-16 z-20 text-center">
          <h1 className="text-5xl sm:text-5xl font-semibold leading-snug text-white">{format.title}</h1>
        </div>
      </section>

      {/* Галерея */}
      <section className="py-4 px-6 sm:px-16 md:px-32">
        <div className="max-w-5xl mx-auto">
          <MediaGallery
            media={[
    ...(format.heroImages?.map((src: string) => ({ type: "image" as const, src })) || []),
    // Если есть видео, добавь сюда:
    // ...(format.heroVideos?.map((src: string) => ({ type: "video" as const, src })) || []),
            ]}
          />
        </div>
      </section>

      {/* Описание */}
      <section className="mb-6 px-6 sm:px-16 md:px-32">
        <div className="max-w-5xl mx-auto">
          <p className="text-lg leading-relaxed text-justify indent-6">{format.description}</p>
        </div>
      </section>

      {/* About с фото после каждого абзаца */}
      <section className="py-4 px-6 sm:px-16 md:px-32">
        <div className="max-w-5xl mx-auto flex flex-col items-center space-y-6 text-gray-200 leading-relaxed">
          {format.about.map((text, i) => (
            <section key={i} className="mb-2 max-w-5xl w-full text-left">
              <p className="text-lg leading-relaxed text-gray-200 text-justify indent-6">{text}</p>

              {i === 0 && <img src="/formats/concerts/concert-line0.jpg" alt="Концертные выезды" className="w-full my-6 rounded-xl object-cover" />}
              {i === 1 && <img src="/formats/concerts/concert-line1.jpg" alt="Концертные выезды" className="w-full my-6 rounded-xl object-cover" />}
              {i === 2 && <img src="/formats/concerts/concert-line2.webp" alt="Концертные выезды" className="w-full my-6 rounded-xl object-cover" />}
            </section>
          ))}
        </div>
      </section>

      {/* Прошедшие мероприятия */}
      <section id="format-events" className="px-6 sm:px-16 md:px-32 pb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold my-8 text-center">Прошедшие мероприятия</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {format.events.map((event, idx) => (
            <Link key={idx} href={`/events/${event.slug}`}>
              <div className="rounded-lg overflow-hidden hover:scale-105 transition-transform">
                <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />
                <div className="p-2">
                  <p className="font-bold">{event.title}</p>
                  <p className="text-sm text-gray-400">{event.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Навигация */}
      <section className="pb-16 px-6 sm:px-16 md:px-32">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-4 justify-center md:justify-start">
          <Link href="/#formats" className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition">← К форматам</Link>
          <Link href="/events" className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition">Все мероприятия</Link>
        </div>
      </section>

      <SocialPopup />
    </main>
  );
}
