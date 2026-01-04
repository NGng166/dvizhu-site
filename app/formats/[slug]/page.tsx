"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import MediaGallery from "../../components/MediaGallery";
import SocialPopup from "../../components/SocialPopup";
import { useState, useRef } from "react";

// Данные форматов
const formatsData: Record<string, any> = {
  lager: {
    title: "Dvizh Лагеря, смены, ежегодные фестивали",
    description:
      "Каждый год мы проводим серию мероприятий, объединённых общим форматом: встречи на природе, летние и зимние фестивали, лагеря и небольшие сборы друзей. Все они дают возможность провести время вместе, активно и интересно, независимо от того, приезжаешь ли ты один или с компанией",
    about: [
      <p key="0">Мероприятия этого формата могут быть разными: от трёхдневных лагерей с кострами, походами и вечерними играми, до летних фестивалей с конкурсами, командными заданиями и активностями на любой вкус - от дегустаций фирменных настоек до пенной вечеринки.</p>,
      <p key="1">Основные направления:</p>,
      <ul key="2" className="list-disc list-inside text-lg text-gray-200 space-y-1 text-left">
      </ul>,
      <p key="3"><span className="font-bold">Dvizh Лагерь</span> - это несколько дней на природе, где днём проходят активности и разговоры, а вечером - дискотека с лучшими диджеями или конкурсы. Люди приезжают из разных городов и стран, и уже в первый день становятся частью команды.</p>,
      <p key="4"><span className="font-bold">Встречай лето</span> - короткие трёхдневные сборы в ожидании лета, с палатками, шашлыками, конкурсами и активностями на свежем воздухе.</p>,
      <p key="5"><span className="font-bold">SummerFest</span> - летний фестиваль с конкурсами, командными играми, активностями и развлечениями: пенная вечеринка, баня, танцы, сценки, стрельба из ружья и многое другое.</p>,
      <p key="6"><span className="font-bold">WinterCamp</span> и другие лагеря продолжают эту идею зимой: три дня, две ночи, костры, музыка, походы, вечерние игры и командные активности.</p>,
      <p key="7">Всё это - часть одного формата: мероприятия, где можно отдохнуть, познакомиться с новыми людьми, участвовать в активностях и просто хорошо провести время.</p>
    ],
    wideMedia: { type: "video", src: "/formats/lager/lager-wide.mp4" },
    heroDesktop: { type: "image", src: "/formats/lager/lager-hero-desktop.webp" },
    heroMobile: { type: "video", src: "/formats/lager/lager-hero-mobile-540.mp4" },
    heroImages: ["/formats/lager/1.jpg","/formats/lager/photo1.jpg","/formats/lager/7.jpg","/formats/lager/photo2.jpg","/formats/lager/2.jpg"],
    heroVideos: ["/formats/lager/video1.mp4","/formats/lager/video2.mp4"],
    events: [
      { title: "Dvizh Лагерь II смена", date: "15–17 августа 2025", slug: "lager-15-08", image: "/lager-15-08/lager-15-08.jpg" },
      { title: "Dvizh Лагерь I смена", date: "27–29 июня 2025", slug: "dvizh-lager-27-06", image: "/dvizh-lager-27-06/dvizh-lager-27-06.jpg" },
      { title: "Winter Camp 2.0", date: "7–9 февраля 2025", slug: "winter-camp-07-02", image: "/winter-camp-2-0-07-02/winter-camp-2-0-07-02.jpg" },
      { title: "Dvizh Лагерь 2024", date: "15-17 ноября г.", slug: "dvizh-lager-15-11", image: "/dvizh-lager-15-11/dvizh-lager-15-11.jpg" },
      { title: "Встречай лето 2022", date: "27-29 мая 2022 г.", slug: "vstrechay-leto-2022", image: "/vstrechay-leto-2022/vstrechay-leto-2022.jpg" },
    ],
  },
  concerts: {
    title: "Концертные выезды",
    description: "Другие города, сцены и дороги вместе - концертные туры ДвижУфы.",
    about: [
      <p key="0">Концертные выезды - это один из самых масштабных и массовых форматов в истории Движа. Именно с них для многих началось знакомство с нашим движением. С 2018 года мы организуем автобусные выезды в другие города и страны на концерты Макса Коржа. Это не просто дорога на концерт - это полноценное путешествие, где всё начинается задолго до сцены и заканчивается далеко после последнего трека.</p>,
      <p key="1">Первый бас-тур Dvizh состоялся в 2018 году - выезд из Уфы в Челябинск. Тогда стало понятно: концерты Коржа - это не «приехать и послушать», это отдельный мир. Слэм, хоровое пение, абсолютная свобода и ощущение, что вокруг - свои. С этого момента выезды стали регулярными. Мы собирали автобусы, объединяли людей из разных городов, знакомили незнакомых между собой и создавали ту самую атмосферу, за которой люди возвращаются снова и снова.</p>,
      <p key="2">За годы мы катались по всей России - Челябинск, Екатеринбург, Казань, Москва, Санкт-Петербург, Пермь, Пенза и другие города, а также за границу - Минск, Алматы, Астана. Мы участвовали в стадионных концертах на десятки тысяч человек и организовывали выезды сразу на несколько городов и стран за одну поездку.</p>,
      <p key="3">Концертный выезд с Движем - это всегда больше, чем просто концерт: совместная дорога и знакомство в автобусе, атмосфера единой команды ещё до приезда, сам концерт - слэм, крики, песни в один голос, afterparty после концертов, прогулки по городам и новые знакомства.</p>,
      <p key="4">Если ты хоть раз был с нами в таком выезде - ты знаешь, о чём речь. Если ещё нет - значит, всё впереди.</p>,
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
    wideMedia: {
      type: "video",
      src: "/formats/concerts/concert-wide.mp4"
    },
    events: [
      { title: "BUSTOUR | UFA - ALMATY", date: "2–9 сентября 2025", slug: "bustour-06-09", image: "/formats/concerts/bustour-06-09.jpg" },
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
  },
  tusy: {
    title: "Dvizh Тусы",
    description:
      "НАПИШИ ПРО ХЛЕБ Флэты, большие вечеринки и ночи без тормозов. Танцы, конкурсы и атмосфера Dvizh.",
    heroImage: "/formats/tusy-hero.jpg",
    events: [
      { title: "FLAT - DvizhUfa", date: "18 октября 2025", slug: "flat-18-10", image: "/flat-18-10/afish.jpg" },
      { title: "FLAT by Samara", date: "29–30 марта 2025", slug: "flat-samara-29-03", image: "/flat-samara-29-03.jpg" },
    ],
  },
  artists: {
    title: "Dvizh × Артисты",
    description:
      "НАПИШИ ПРО ХЛЕБ (11.01.19) Особые события с музыкантами и гостями. Канги, селебы и уникальные тусовки Dvizh.",
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
      { title: "Квартирник", date: "27 апреля 2025", slug: "kvartirnik-27-04", image: "/kvartirnik-27-04.jpg" },
    ],
  },
};

export default function FormatPage() {
  const { slug } = useParams();
  const format = formatsData[slug as string];
  const [openWideVideo, setOpenWideVideo] = useState(false);
  const wideVideoRef = useRef<HTMLVideoElement>(null);

  if (!format) return <div className="min-h-screen flex items-center justify-center text-white">Формат не найден</div>;

  return (
    <main className="bg-gray-900 text-white min-h-screen">

      {/* Hero */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 sm:hidden">
{format.heroMobile?.type === "video" ? (
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    poster="/formats/lager/lager-hero-poster.jpg"
    className="w-full h-full object-cover"
  >
    <source
      src={format.heroMobile.src} // вот это важно — берём динамически из данных формата
      type="video/mp4"
    />
  </video>
) : (
  <img
    src={format.heroMobile?.src}
    alt={format.title}
    className="w-full h-full object-cover"
  />
)}

        </div>
        <div className="absolute inset-0 hidden sm:block">
          {format.heroDesktop?.type === "video" ? (
            <video src={format.heroDesktop.src} autoPlay muted loop playsInline className="w-full h-full object-cover" />
          ) : (
            <img src={format.heroDesktop?.src} alt={format.title} className="w-full h-full object-cover" />
          )}
        </div>
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-center pb-12 sm:pb-16 z-10 text-center">
          <h1 className="text-3xl sm:text-5xl font-semibold leading-snug">{format.title}</h1>
        </div>
      </section>

      {/* Галерея медиа */}
      {(format.heroImages || format.heroVideos) && (
        <section className="py-4 px-6 sm:px-16 md:px-32">
          <div className="max-w-5xl mx-auto">
            <MediaGallery
              media={[
                ...(format.heroImages?.map((src: string) => ({ type: "image", src, loading: "lazy" })) || []),
                ...(format.heroVideos?.map((src: string) => ({ type: "video", src })) || []),
              ]}
            />
          </div>
        </section>
      )}

      {/* Описание формата */}
<section className="mb-6 px-6 sm:px-16 md:px-32">
  <div className="max-w-3xl mx-auto">
    <p className="text-lg leading-relaxed indent-6 text-justify">
      {format.description}
    </p>
  </div>
</section>


      {/* Подробно о формате с видео */}
      {format.about && (
        <section className="py-4 px-6 sm:px-16 md:px-32">
          <div className="max-w-5xl mx-auto flex flex-col items-center space-y-6 text-gray-200 leading-relaxed">

            <h2 className="text-2xl font-bold mb-4 w-full text-center">Что это за формат?</h2>

            {/* Абзацы из about */}
                  {format.about.map((item: React.ReactNode, i: number) => (
        <section key={i} className="mb-2 max-w-3xl w-full text-left">
          {typeof item === "string" ? (
            <p className="text-lg leading-relaxed indent-6 text-gray-200">{item}</p>
          ) : (
            // Если item уже JSX (<p> или <ul>), вставляем напрямую
            <div className="text-lg leading-relaxed indent-6 text-gray-200">{item}</div>
          )}

                {/* Фото после определённых абзацев */}
                {slug === 'concerts' && i === 0 && (
                  <img
                    src="/formats/concerts/concert-line0.jpg"
                    alt="Концертные выезды"
                    className="w-full my-6 rounded-xl object-cover"
                  />
                )}
                {slug === 'concerts' && i === 1 && (
                  <img
                    src="/formats/concerts/concert-line1.jpg"
                    alt="Концертные выезды"
                    className="w-full my-6 rounded-xl object-cover"
                  />
                )}
                {slug === 'concerts' && i === 2 && (
                  <img
                    src="/formats/concerts/concert-line2.webp"
                    alt="Концертные выезды"
                    className="w-full my-6 rounded-xl object-cover"
                  />
                )}
              </section>
            ))}

            {/* Видео широкий блок после первого абзаца */}
            {format.wideMedia && format.wideMedia.type === "video" && (
              <div
                className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
                style={{ aspectRatio: "16/9" }}
                onClick={() => setOpenWideVideo(true)}
              >
                <video src={format.wideMedia.src} autoPlay loop muted playsInline className="w-full h-full object-cover rounded-2xl" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition rounded-2xl">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-black text-3xl">▶</div>
                </div>

                {openWideVideo && (
                  <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
                    <div className="relative w-full max-w-3xl">
                      <button
                        onClick={(e) => { e.stopPropagation(); setOpenWideVideo(false); }}
                        className="fixed top-6 right-6 z-50 w-12 h-12 bg-black/70 text-white text-3xl rounded-full flex items-center justify-center hover:bg-black/90 transition"
                      >
                        ✕
                      </button>
                      <div className="bg-black rounded-xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
                        <video ref={wideVideoRef} src={format.wideMedia.src} controls autoPlay muted={false} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Мероприятия формата */}
      <section id="format-events" className="px-6 sm:px-16 md:px-32 pb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold my-8 text-center">Мероприятия этого формата</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {format.events.map((event: any, index: number) => (
            <Link key={index} href={`/events/${event.slug}`}>
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

