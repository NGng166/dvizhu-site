"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const nextEvent = {
  title: "Новогодний корпоратив",
  date: "2025-12-19T22:00:00",
  image: "/event1.jpg",
};

export default function NextEventBlock() {
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setMounted(true);
    setNow(new Date());

    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted || !now) return null;

  const eventDate = new Date(nextEvent.date);
  const diff = eventDate.getTime() - now.getTime();
  if (diff < -24 * 60 * 60 * 1000) return null;

  let displayText = "Мы на мероприятии!";
  if (diff > 0) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    displayText = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
  }

  const formattedDate =
    eventDate.toLocaleDateString("ru-RU") +
    ", " +
    eventDate.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });

  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-orange-400">
          Ближайшее мероприятие
        </h2>

        <div className="bg-gray-800 rounded-lg p-6 flex flex-col lg:flex-row items-center gap-6">
          <img
            src={nextEvent.image}
            alt={nextEvent.title}
            className="w-full lg:w-1/3 h-56 rounded-lg object-cover"
          />

          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-2xl font-semibold mb-2">{nextEvent.title}</h3>
            <p className="mb-2 text-gray-300">Дата: {formattedDate}</p>
            <p className="mb-4 font-mono text-lg">{displayText}</p>

            <Link href="/events/novogodnij-korporativ">
              <button className="bg-orange-500 px-6 py-2 rounded-lg hover:bg-orange-600 transition">
                Узнать больше
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
