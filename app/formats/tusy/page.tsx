"use client";

import Link from "next/link";
import MediaGallery from "../../components/MediaGallery";
import SocialPopup from "../../components/SocialPopup";

export default function TusyPage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">

      {/* HERO */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <video
            src="/formats/tusy/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end items-center pb-12 sm:pb-16 z-20 text-center">
          <h1 className="text-3xl sm:text-5xl font-semibold">
            Dvizh Тусы
          </h1>
        </div>
      </section>

      {/* ГАЛЕРЕЯ */}
      <section className="py-4 px-6 sm:px-16 md:px-32">
        <div className="max-w-5xl mx-auto">
          <MediaGallery
            media={[
              { type: "image", src: "/formats/tusy/tusy1.jpg" },
              { type: "image", src: "/formats/tusy/tusy2.jpg" },
              { type: "image", src: "/formats/tusy/tusy3.jpg" },
              { type: "image", src: "/formats/tusy/tusy5.jpg" },
              { type: "image", src: "/formats/tusy/2.jpg" },
              { type: "image", src: "/formats/tusy/3.jpg" },
            ]}
          />
        </div>
      </section>

      {/* ОПИСАНИЕ */}
      <section className="mb-6 px-6 sm:px-16 md:px-32">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed text-justify">
            - это вечеринки для своих. Клубы, концертные площадки, андеграунд-пространства и коттеджи, где собираются люди на одной волне - ради музыки, эмоций и ночей, которые остаются в памяти.
          </p>
        </div>
      </section>

      {/* ПОДРОБНО */}
      <section className="py-4 px-6 sm:px-16 md:px-32">
        <div className="max-w-5xl mx-auto flex flex-col items-center space-y-6 text-gray-200 leading-relaxed">

          <h2 className="text-2xl font-bold mb-4 w-full text-center">
            Что это за формат?
          </h2>

          <section className="max-w-3xl w-full text-left space-y-4">
            <p className="text-lg text-justify indent-6">
              Мы арендуем площадку и превращаем её в движ - без случайной публики, без формальностей и лишнего пафоса. Здесь приходят не смотреть со стороны, а быть частью происходящего.
            </p>

            <p className="text-lg text-justify indent-6">
              В центре всего - музыка. От локальных диджеев и приглашённых артистов до официальных диджеев известных исполнителей. Сеты строятся так, чтобы не отпускать ни на минуту: хип-хоп, хаус, трэп, r’n’b и плотное клубное звучание смешиваются в единый поток. Здесь танцуют, орут любимые треки, ловят вайб и полностью отдаются моменту.
            </p>

            <img
              src="/formats/tusy/tusy4.jpg"
              alt="Dvizh Тусы"
              className="w-full my-6 rounded-xl object-cover"
            />

            <p className="text-lg text-justify indent-6">
              Но Dvizh - это не только сцена. Это общение, новые знакомства, совместные моменты, ощущение, что ты часть чего-то общего.
            </p>

            <img
              src="/formats/tusy/1.jpg"
              alt="Dvizh Тусы"
              className="w-full my-6 rounded-xl object-cover"
            />

            <p className="text-lg text-justify indent-6">
              Мы ценим стиль и самовыражение. Мерч, образы, свет, визуал, атмосфера андеграунда или большого концертного зала - каждая тусовка имеет свой характер, но всегда с максимальной энергией.
            </p>

            <p className="text-lg text-justify indent-6">
              Наши вечеринки собирают людей, которые ценят живые эмоции, громкий звук и свободу. Это не про статус, это про момент.
            </p>

            <p className="text-lg text-justify indent-6">
              Если тебе близка атмосфера концертов и настоящего движения, если хочется не просто сходить куда-то, а прожить ночь - ты точно с нами. Увидимся на танцполе)
            </p>
          </section>
        </div>
      </section>

      {/* МЕРОПРИЯТИЯ */}
      <section className="px-6 sm:px-16 md:px-32 pb-16">
        <h2 className="text-2xl font-bold my-8 text-center">
          Мероприятия этого формата
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
    { title: "DvizhTusa 1", date: "xx xx 2025", slug: "xx", image: "/xx/afish.jpg" },
    { title: "DvizhTusa 2", date: "xx xx 2025", slug: "xx", image: "/xx/afish.jpg" },
          ].map((event, i) => (
            <Link key={i} href={`/events/${event.slug}`}>
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

      {/* НАВИГАЦИЯ */}
      <section className="pb-16 px-6 sm:px-16 md:px-32">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-4 justify-center md:justify-start">
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
        </div>
      </section>

      <SocialPopup />
    </main>
  );
}
