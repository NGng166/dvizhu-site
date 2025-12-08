"use client";

export default function WhoWeAre() {
  return (
    <section className="bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Кто мы</h2>

        <p className="mb-6 text-lg leading-relaxed text-center sm:text-left">
          Движ (Dvizh) — это больше, чем просто молодёжное движение. Мы уже во
          многих городах мира: Европа, Азия, СНГ и зарубежье.
        </p>

        <img
          src="/dvizh1.jpg"
          alt="Атмосфера Движа"
          className="w-full max-w-3xl mx-auto rounded-lg mb-8 object-cover"
        />

        <p className="mb-6 text-lg leading-relaxed text-center sm:text-left">
          Движ зародился как фан-группа единомышленников, путешествующих на
          концерты. Со временем это стало настоящей семьей.
        </p>

        <img
          src="/dvizh2.jpg"
          alt="Встречи Движа"
          className="w-full max-w-3xl mx-auto rounded-lg mb-8 object-cover"
        />

        <p className="mb-12 text-lg leading-relaxed text-center sm:text-left">
          Мы организуем походы, квартирники, лагеря для взрослых, вечеринки и
          путешествия. Каждый найдёт здесь своё место.
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
          Мы ждём всех, кому близок наш вайб ❤️
        </p>
      </div>
    </section>
  );
}
