"use client";

export default function EventPage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 sm:px-16 md:px-32 py-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-orange-400">
        Новогодний корпоратив
      </h1>

      {/* Фото 1 */}
      <img
        src="/nk1.jpg"
        alt="Новогодний корпоратив"
        className="w-full max-w-3xl mx-auto rounded-lg shadow-lg mb-6"
      />

      {/* Описание мероприятия */}
      <section className="mb-12">
        <p className="mb-4 text-lg leading-relaxed indent-6">
          В преддверии Нового Года мы все хотим немного отвлечься от привычной
          суеты и встретиться с друзьями 🫶🏻. Наша движка это понимает как никто
          другой. Именно поэтому мы делаем общий сбор на корпоративе.
        </p>

        <ul className="list-disc list-inside space-y-2 text-lg mb-6">
          <li>Профессиональные диджеи</li>
          <li>Приятные цены на баре</li>
          <li>Море друзей и новых знакомств</li>
          <li>Новогоднее настроение 😉</li>
        </ul>

        <p className="mb-4 text-lg leading-relaxed indent-6">
          Всё это, и не только, ждёт вас 19-го числа 😏
        </p>

        <p className="text-lg leading-relaxed">
          <strong>Начало:</strong> 19.12 | 22:00 <br />
          <strong>Локация:</strong> Soty Lounge Club (проспект Октября 79/1) <br />
          <strong>Первая партия билетов:</strong> 700р <br />
          <strong>Вторая партия билетов:</strong> 800р
        </p>

        <a
          href="https://dvizh-ufa.timepad.ru/event/3689809/#register/"
          target="_blank"
          className="block mt-6 text-orange-400 underline text-lg"
        >
          Купить билеты 🎫
        </a>
      </section>

      {/* Фото 2 */}
      <img
        src="/nk2.jpg"
        alt="Атмосфера мероприятия"
        className="w-full max-w-3xl mx-auto rounded-lg shadow-lg mb-6"
      />

      {/* Ограничения */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Ограничения и правила</h2>

        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Возраст участников: 18+</li>
          <li>FC / DC</li>
        </ul>
      </section>

      {/* Фото 3 */}
      <img
        src="/nk3.jpg"
        alt="Друзья и тусовка"
        className="w-full max-w-3xl mx-auto rounded-lg shadow-lg mb-6"
      />

      {/* Кнопка назад */}
      <div className="text-center mt-8">
        <a
          href="/"
          className="bg-orange-500 px-6 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Назад на главную
        </a>
      </div>
    </main>
  );
}
