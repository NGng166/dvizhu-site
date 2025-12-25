"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import MediaGallery from "../../components/MediaGallery"; // относительный путь к компоненту

// Данные форматов
const formatsData: Record<string, any> = {
  lager: {
    title: "Dvizh Лагеря, смены, ежегодные фестивали",
    description:
      "Лагерь - это место, где взрослые снова становятся собой. Костры, разговоры до утра, музыка и ощущение, что ты на своём месте.",
    
    about: [
      "Dvizh Лагерь — это не турбаза и не детский лагерь. Это несколько дней вне города, где собираются люди, которым важно быть собой.",
      "Сюда приезжают ребята из Уфы, других городов и стран. Кто-то едет один, но уже в первый день становится частью команды.",
      "Днём — активности и разговоры, вечером — костры, музыка и ощущение, что ты в правильном месте."
    ],

  wideMedia: {
    type: "video",
    src: "/formats/lager/lager-wide.mp4"
    // или image
  },
heroDesktop: {
  type: "image",
  src: "/formats/lager-hero-desktop.webp",
},

heroMobile: {
  type: "video", // или "image"
  src: "/formats/lager-hero-mobile.mp4",
},

    heroImages: [
      "/formats/lager/photo1.jpg",
      "/formats/lager/photo2.jpg",
    ],
    heroVideos: [
      "/formats/lager/video1.mp4",
      "/formats/lager/video2.mp4",
    ],
    events: [
      { title: "Dvizh Лагерь I смена", date: "27–29 июня 2025", slug: "dvizh-lager-27-06", image: "/dvizh-lager-27-06/dvizh-lager-27-06.jpg" },
      { title: "Dvizh Лагерь II смена", date: "15–17 августа 2025", slug: "lager-15-08", image: "/lager-15-08/lager-15-08.jpg" },
      { title: "Winter Camp 2.0", date: "7–9 февраля 2025", slug: "winter-camp-07-02", image: "/winter-camp-2-0-07-02/winter-camp-2-0-07-02.jpg" },
    ],
  },

  concerts: {
    title: "Концертные выезды",
    description:
      "Другие города, сцены и дороги вместе - Bustour и концертные туры Dvizh.",
    heroImage: "/formats/concerts-hero.jpg",
    events: [
      { title: "BUSTOUR | UFA - ALMATY", date: "2–9 сентября 2025", slug: "bustour-06-09", image: "/bustour-06-09/bustour-cover.jpg" },
      { title: "Концерт Макса Коржа | Самара", date: "29–30 марта 2025", slug: "concert-samara-29-03", image: "/concert-samara-29-03.jpg" },
    ],
  },

  tusy: {
    title: "Dvizh Тусы",
    description:
      "Флэты, большие вечеринки и ночи без тормозов. Танцы, конкурсы и атмосфера Dvizh.",
    heroImage: "/formats/tusy-hero.jpg",
    events: [
      { title: "FLAT - DvizhUfa", date: "18 октября 2025", slug: "flat-18-10", image: "/flat-18-10/afish.jpg" },
      { title: "FLAT by Samara", date: "29–30 марта 2025", slug: "flat-samara-29-03", image: "/flat-samara-29-03.jpg" },
    ],
  },

  artists: {
    title: "Dvizh × Артисты",
    description:
      "Особые события с музыкантами и гостями. Канги, селебы и уникальные тусовки Dvizh.",
    heroImage: "/formats/artists-hero.jpg",
    events: [
      { title: "Селебриум | Макс Корж", date: "лето 2025", slug: "celebrum-2025", image: "/artists/celebrum.jpg" },
      { title: "Канги Live", date: "2025", slug: "kangi-2025", image: "/artists/kangi.jpg" },
    ],
  },

  mountains: {
    title: "Горы & походы",
    description:
      "Айгир, природа, испытания и командный дух. Походы, снег, баня и шашлыки.",
    heroImage: "/formats/mountains-hero.jpg",
    events: [
      { title: "Айгир", date: "1–2 марта 2025", slug: "aygir-01-03", image: "/aygir-01-03/aygir-01-03.jpg" },
    ],
  },

  community: {
    title: "Комьюнити-ивенты",
    description:
      "BeerPong, квартирники, сборы и просто быть вместе. Игры, встречи и душевная компания.",
    heroImage: "/formats/community-hero.jpg",
    events: [
      { title: "BeerPong", date: "12 апреля 2025", slug: "beerpong-12-04", image: "/beerpong-12-04/beerpong-12-04.jpg" },
      { title: "Квартирник", date: "27 апреля 2025", slug: "kvartirnik-27-04", image: "/kvartirnik-27-04/kvartirnik-27-04.jpg" },
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

      {/* Hero: мобильная и десктопная версии */}
<section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">
  {/* Mobile */}
  <div className="absolute inset-0 sm:hidden">
    {format.heroMobile?.type === "video" ? (
      <video
        src={format.heroMobile.src}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    ) : (
      <img
        src={format.heroMobile?.src}
        alt={format.title}
        className="w-full h-full object-cover"
      />
    )}
  </div>

  {/* Desktop */}
  <div className="absolute inset-0 hidden sm:block">
    {format.heroDesktop?.type === "video" ? (
      <video
        src={format.heroDesktop.src}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    ) : (
      <img
        src={format.heroDesktop?.src}
        alt={format.title}
        className="w-full h-full object-cover"
      />
    )}
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8 sm:p-16 z-10">
    <h1 className="text-3xl sm:text-5xl font-bold">
      {format.title}
    </h1>
  </div>
</section>


      {/* Галерея медиа */}
      {(format.heroImages || format.heroVideos) && (
        <MediaGallery
          media={[
            ...(format.heroImages?.map((src: string) => ({ type: "image", src })) || []),
            ...(format.heroVideos?.map((src: string) => ({ type: "video", src })) || []),
          ]}
        />
      )}

      {/* Описание */}
      <section className="py-16 px-6 sm:px-16 md:px-32">
        <p className="text-lg text-gray-200 max-w-3xl">
          {format.description}
        </p>
      </section>

      {/* Подробно о формате */}
{format.about && (
  <section className="py-16 px-6 sm:px-16 md:px-32 max-w-5xl">
    <h2 className="text-2xl font-bold mb-6">
      Что это за формат
    </h2>

    <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
      {format.about.map((text: string, index: number) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  </section>
)}

{/* Акцентный медиа-блок */}
{format.wideMedia && (
  <section className="py-20 px-0 sm:px-16 md:px-32">
    <div className="relative w-full h-[50vh] rounded-none sm:rounded-2xl overflow-hidden">
      {format.wideMedia.type === "video" ? (
        <video
          src={format.wideMedia.src}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      ) : (
        <img
          src={format.wideMedia.src}
          alt={format.title}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  </section>
)}


      {/* Мероприятия формата */}
      <section className="px-6 sm:px-16 md:px-32 pb-20">
        <h2 className="text-2xl font-bold mb-6">Мероприятия этого формата</h2>
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

      {/* Навигация */}
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
