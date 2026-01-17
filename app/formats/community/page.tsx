"use client";

import Link from "next/link";
import MediaGallery from "../../components/MediaGallery";
import SocialPopup from "../../components/SocialPopup";
import Slider from "../../components/Slider";

export default function CommunityPage() {
  const format = {
    title: "Комьюнити-ивенты",
    content: [
      {
        type: "text",
        text: "Комьюнити-ивенты - это теплые и живые встречи разных мероприятий. Мы собираемся на квартирники, FLAT-вечеринки, прогулки, пейнтбол, BeerPong и настольные игры."
      },
      {
        type: "text",
        text: "Здесь можно познакомиться с новыми людьми, провести время активно или спокойно, разделить общие интересы, посмеяться и отдохнуть от повседневной рутины."
      },
      {
        type: "slider",
        photos: [
          { src: "/formats/community/slider3.jpg", alt: "Сбор друзей с гитарой" },
          { src: "/formats/community/community-wide.jpg", alt: "Уфимцы в Самаре" },
          { src: "/formats/community/slider1.jpg", alt: "Покорители вершин" },
          { src: "/formats/community/slider2.jpg", alt: "Уфимцы в Оренбурге" },
          { src: "/formats/community/slider4.jpg", alt: "Фото на закате" },
        ]
      },      
      {
        type: "text",
        text: "Это про свободу, дружескую энергетику и настоящую движуху: вечеринки без лишнего пафоса, уютные посиделки, совместные прогулки и небольшие приключения, которые остаются в памяти."
      },
      {
        type: "text",
        text: "Главное в этом формате - быть вместе, создавать атмосферу, делиться эмоциями и наслаждаться моментом."
      },
    ],
    events: [
  { title: "Новогодний корпоратив", date: "19 декабря 2025", slug: "novogodnij-korporativ", image: "/novogodnij-korporativ/hero.jpg" },
  { title: "FLAT - DvizhUfa", date: "18 октября 2025", slug: "flat-18-10", image: "/flat-18-10/afish.jpg" },
  { title: "BEERPONG", date: "20 сентября 2025", slug: "beerpong-20-09", image: "/beerpong-20-09/beerpong-20-09.jpg" },
  { title: "Общий сбор в Дустаре", date: "14 августа 2025", slug: "obshe-sbor-14-08", image: "/obshe-sbor-14-08/obshe-sbor-14-08.webp" },
  { title: "Dvizh Ufa x Dvizh Samara | Тур на Флэт", date: "29-30 марта 2025", slug: "dvizh-ufa-samara-flat", image: "/formats/community/flat-ufa-samara.jpg" },
  { title: "Питбайки", date: "12 июля 2025", slug: "pitbike-12-07", image: "/pitbike-12-07/pitbike-12-07.jpg" },
  { title: "Квартирник | 27 апреля", date: "27 апреля 2025", slug: "kvartirnik-27-04", image: "/kvartirnik-27-04/kvartirnik-27-04.jpg" },
  { title: "BeerPong", date: "12 апреля 2025", slug: "beerpong-12-04", image: "/beerpong-12-04/beerpong-12-04.jpg" },
  { title: "Квартирник", date: "16 февраля 2025", slug: "kvartirnik-16-02", image: "/kvartirnik-16-02/kvartirnik-16-02.jpg" },
  { title: "Встреча Нового года с ДвижУфой", date: "31.12.24 - 04.01.25", slug: "noviy-god-31-12", image: "/noviy-god-31-12/noviy-god-31-12.jpg" },
  { title: "Анонс мерча", date: "7 ноября 2024", slug: "den-h-07-11", image: "/den-h-07-11/den-h-07-11.jpg" },
  { title: "Сбор перед концертом Макса Коржа", date: "31 августа 2024", slug: "max-korzh-gathering-31-08", image: "/formats/community/max-korzh.jpg" },
  { title: "Пейнтбол", date: "27 июля 2024", slug: "paintball-27-07", image: "/formats/community/paintball.jpg" },
]
  };

  return (
    <main className="bg-gray-900 text-white min-h-screen">

      {/* Название формата обычным блоком */}
      <section className="py-12 px-6 sm:px-16 md:px-32 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">{format.title}</h1>
      </section>

      {/* Контент */}
      <section className="py-6 px-6 sm:px-16 md:px-32 space-y-6">
        {format.content.map((block, i) => {
          if (block.type === "text") {
            return (
              <div key={i} className="my-6 w-full max-w-5xl mx-auto">
                <p className="text-lg leading-relaxed text-justify indent-6 text-gray-200">
                  {block.text}
                </p>
              </div>
            );
          } else if (block.type === "slider") {
            return (
              <div key={i} className="my-6 w-full max-w-4xl mx-auto">
                <Slider photos={block.photos} />
              </div>
            );
          }
          return null;
        })}
      </section>

      {/* Мероприятия */}
      <section className="px-6 sm:px-16 md:px-32 pb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold my-8 text-center">Мероприятия этого формата</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {format.events.map((event, index) => (
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
          <Link href="/#formats" className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition">
            ← К форматам
          </Link>
          <Link href="/events" className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition">
            Все мероприятия
          </Link>
        </div>
      </section>

      <SocialPopup />
    </main>
  );
}
