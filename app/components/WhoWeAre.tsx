"use client";

export default function WhoWeAre() {
  return (
    <section className="bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Кто мы</h2>

        <p className="mb-6 text-lg leading-relaxed text-center sm:text-left">
          Движ (Dvizh) — молодежное международное движение, выросшее из фан-сообщества Макса Коржа
          и распространившееся от России и СНГ до городов Европы и Азии. Когда-то всё начиналось 
          с автобусных поездок на концерты, а сегодня Движ — это сообщество друзей, 
          которое живёт намного шире музыки.
        </p>

        <img
          src="/dvizh1.jpg"
          alt="Атмосфера Движа"
          className="w-full max-w-3xl mx-auto rounded-lg mb-8 object-cover"
        />

{/* Большой текст + цитата Коржа */}
<p className="mb-6 text-lg leading-relaxed text-center sm:text-left">
  Мы встречаемся, дружим, путешествуем, устраиваем лагеря, походы, квартирники, 
  бирпонг, пейнтбол, Flat-вечеринки, совместные выезды в горы и поездки на концерты. 
  В любом городе есть ребята, которые рады принять, согреть и показать лучшие места.
</p>

{/* Цитата */}
<div className="bg-gray-700 border-l-4 border-orange-400 p-6 rounded-r-lg mb-8 shadow-md max-w-3xl mx-auto">
  <p className="text-lg italic leading-relaxed text-center sm:text-left">
    Даже потеряв всё, с сумкой пустой тебе устроят хороший приём...»
  </p>
  <p className="text-right mt-2 text-orange-300 font-semibold">
    — Макс Корж
  </p>
</div>

        <img
          src="/dvizh2.jpg"
          alt="Встречи Движа"
          className="w-full max-w-3xl mx-auto rounded-lg mb-8 object-cover"
        />

        <p className="mb-12 text-lg leading-relaxed text-center sm:text-left">
          Движ Уфа — это про тепло и своё. У нас нет формальностей — мы семья, 
          где принимают по сердцу, а не по правилам.
        </p>

        <h3 className="text-2xl font-semibold mb-6 text-center">
          Наша команда
        </h3>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {[
            { name: "Никита Пресняков", role: "Основатель", img: "/nikita.jpg" },
            { name: "Камиль Зарипов", role: "Соорганизатор, DJ", img: "/kamil.jpg" },
            { name: "Иван Киселев", role: "Координация мероприятий", img: "/ivan.jpg" },
          ].map((p) => (
            <div key={p.name} className="bg-gray-700 p-6 rounded-lg text-center">
              <img
                src={p.img}
                alt={p.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h4 className="font-semibold text-lg">{p.name}</h4>
              <p>{p.role}</p>
            </div>
          ))}
        </div>

        <p className="text-lg text-center sm:text-left">
          Мы рады каждому, кто чувствует наш вайб: кто-то остаётся надолго, 
          кто-то заглядывает мимолётом — но Движ меняет каждого к лучшему.
        </p>
      </div>
    </section>
  );
}
