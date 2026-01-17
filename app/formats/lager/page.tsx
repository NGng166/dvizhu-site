"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import MediaGallery from "../../components/MediaGallery";
import SocialPopup from "../../components/SocialPopup";

export default function LagerPage() {
  const [openWideVideo, setOpenWideVideo] = useState(false);
  const wideVideoRef = useRef<HTMLVideoElement>(null);

  return (
    <main className="bg-gray-900 text-white min-h-screen">

      {/* HERO */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">
        {/* mobile */}
        <div className="absolute inset-0 sm:hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            src="/formats/lager/lager-hero-mobile-540.mp4"
            className="w-full h-full object-cover"
          />
        </div>

        {/* desktop */}
        <div className="absolute inset-0 hidden sm:block">
          <img
            src="/formats/lager/lager-hero-desktop.webp"
            alt="Dvizh Лагеря"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end items-center pb-12 sm:pb-16 z-20 text-center">
          <h1 className="text-5xl sm:text-5xl font-semibold">
            Dvizh Лагеря, смены, ежегодные фестивали
          </h1>
        </div>
      </section>

      {/* ГАЛЕРЕЯ */}
      <section className="py-4 px-6 sm:px-16 md:px-32">
        <div className="max-w-5xl mx-auto">
          <MediaGallery
            media={[
              { type: "image", src: "/formats/lager/1.jpg" },
              { type: "image", src: "/formats/lager/photo1.jpg" },
              { type: "image", src: "/formats/lager/7.jpg" },
              { type: "image", src: "/formats/lager/photo2.jpg" },
              { type: "image", src: "/formats/lager/2.jpg" },
              { type: "video", src: "/formats/lager/video1.mp4" },
              { type: "video", src: "/formats/lager/video2.mp4" },
            ]}
          />
        </div>
      </section>

      {/* ОПИСАНИЕ */}
      <section className="mb-6 px-6 sm:px-16 md:px-32">
        <div className="max-w-5xl mx-auto">
          <p className="text-lg leading-relaxed text-justify indent-6">
            Каждый год мы проводим серию мероприятий, объединённых общим форматом: встречи на природе, летние и зимние фестивали, лагеря и небольшие сборы друзей. Все они дают возможность провести время вместе, активно и интересно, независимо от того, приезжаешь ли ты один или с компанией
          </p>
        </div>
      </section>

      {/* ПОДРОБНО */}
      <section className="py-4 px-6 sm:px-16 md:px-32">
  <div className="max-w-5xl mx-auto flex flex-col items-center space-y-6 text-gray-200 leading-relaxed">
    <h2 className="text-2xl font-bold mb-4 w-full text-center">

            Что это за формат?
          </h2>

    <section className="max-w-5xl w-full text-left space-y-4">
      <p
        className="text-lg indent-6"
        style={{ textAlign: "justify", textJustify: "inter-word" }}
      >
              Мероприятия этого формата могут быть разными: от трёхдневных лагерей с кострами, походами и вечерними играми, до летних фестивалей с конкурсами, командными заданиями и активностями на любой вкус - от дегустаций фирменных настоек до пенной вечеринки.
            </p>

      <p className="font-bold text-lg">
              Основные направления:
            </p>

      <p
        className="text-lg indent-6"
        style={{ textAlign: "justify", textJustify: "inter-word" }}
      >
              <strong>Dvizh Лагерь</strong> - это несколько дней на природе, где днём проходят активности и разговоры, а вечером - дискотека с лучшими диджеями или конкурсы. Люди приезжают из разных городов и стран, и уже в первый день становятся частью команды.
            </p>

      <p
        className="text-lg indent-6"
        style={{ textAlign: "justify", textJustify: "inter-word" }}
      >
              <strong>Встречай лето</strong> - короткие трёхдневные сборы в ожидании лета, с палатками, шашлыками, конкурсами и активностями на свежем воздухе.

            </p>

      <p
        className="text-lg indent-6"
        style={{ textAlign: "justify", textJustify: "inter-word" }}
      >              <strong>SummerFest</strong> - летний фестиваль с конкурсами, командными играми, активностями и развлечениями: пенная вечеринка, баня, танцы, сценки, стрельба из ружья и многое другое.
            </p>

      <p
        className="text-lg indent-6"
        style={{ textAlign: "justify", textJustify: "inter-word" }}
      >              <strong>WinterCamp</strong> и другие лагеря продолжают эту идею зимой: три дня, две ночи, костры, музыка, походы, вечерние игры и командные активности.
            </p>

      <p
        className="text-lg indent-6"
        style={{ textAlign: "justify", textJustify: "inter-word" }}
      >              Всё это - часть одного формата: мероприятия, где можно отдохнуть, познакомиться с новыми людьми, участвовать в активностях и просто хорошо провести время.
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
      { title: "Dvizh Лагерь II смена", date: "15–17 августа 2025", slug: "lager-15-08", image: "/lager-15-08/lager-15-08.jpg" },
      { title: "Dvizh Лагерь I смена", date: "27–29 июня 2025", slug: "dvizh-lager-27-06", image: "/dvizh-lager-27-06/dvizh-lager-27-06.jpg" },
      { title: "Winter Camp 2.0", date: "7–9 февраля 2025", slug: "winter-camp-07-02", image: "/winter-camp-2-0-07-02/winter-camp-2-0-07-02.jpg" },
      { title: "Dvizh Лагерь 2024", date: "15-17 ноября 2024 г.", slug: "dvizh-lager-15-11", image: "/dvizh-lager-15-11/dvizh-lager-15-11.jpg" },
      { title: "Встречай лето 2022", date: "27-29 мая 2022 г.", slug: "vstrechay-leto-2022", image: "/vstrechay-leto-2022/vstrechay-leto-2022.jpg" },
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
