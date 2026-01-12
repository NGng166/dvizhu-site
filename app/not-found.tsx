// app/not-found.tsx
"use client";

import Link from "next/link";

export default function NotFoundPage() {
  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      // Если истории нет, просто идём на главную
      window.location.href = "/";
    }
  };
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 text-center">
      <h1 className="text-6xl font-bold mb-4">Упс!</h1>
      <p className="text-xl mb-6">
        Страницу, которую вы ищете, пока не сделали. 😢
      </p>
      <p className="text-xl mb-6">
        Верстальщику нужно больше кофе и времени)
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition"
        >
          На главную
        </Link>
        <button
          onClick={handleGoBack}
          className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
        >
          Назад
        </button>
      </div>
    </main>
  );
}