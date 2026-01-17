"use client";

import Link from "next/link";
import MediaGallery from "../../components/MediaGallery";
import SocialPopup from "../../components/SocialPopup";

export default function ArtistsPage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">

{/* HERO */}
<section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">
  {/* мобильный */}
  <div className="absolute inset-0 sm:hidden">
    <video
      src="/formats/artists/artists-herom-optimized.webm"
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
    />
  </div>

  {/* десктоп */}
  <div className="absolute inset-0 hidden sm:block">
    <video
      src="/formats/artists/artists-hero-optimized.webm"
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
    />
  </div>

  {/* затемнение */}
  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

  {/* текст */}
  <div className="absolute inset-0 flex flex-col justify-end items-center pb-12 sm:pb-16 z-20 text-center">
    <h1 className="text-3xl sm:text-5xl font-semibold">
      Dvizh × Артисты
    </h1>
  </div>
</section>

      {/* ГАЛЕРЕЯ */}
      <section className="py-4 px-6 sm:px-16 md:px-32">
        <div className="max-w-5xl mx-auto">
          <MediaGallery
            media={[
              { type: "image", src: "/formats/artists/kangi1.jpg" },
              { type: "image", src: "/formats/artists/selebr2.jpg" },
              { type: "image", src: "/formats/artists/hleb2.webp" },
              { type: "image", src: "/formats/artists/kangi2.webp" },
              { type: "image", src: "/formats/artists/selebr1.jpg" },
              { type: "image", src: "/formats/artists/hleb3.jpg" },
              { type: "image", src: "/formats/artists/kangi3.webp" },
              { type: "image", src: "/formats/artists/selebr3.jpg" },
              { type: "image", src: "/formats/artists/vanfi2.webp" },
              { type: "image", src: "/formats/artists/hleb1.jpg" },
            ]}
          />
        </div>
      </section>

      {/* ОПИСАНИЕ */}
      <section className="mb-6 px-6 sm:px-16 md:px-32">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed text-justify">
            Особые события с музыкантами и гостями. Да, мы - фанаты Макса Коржа, но дружим и с другими артистами - Канги, DJ Selebrium, группой Хлеб и многими другими. Здесь мы собираемся всей командой на концерты, афтепати и поддерживаем локальных талантливых музыкантов из Уфы.
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
              Главный наш любимый исполнитель - Макс Корж. Мы ездим на его концерты толпой, создавая неповторимую атмосферу: смех, песни, совместные моменты и эмоции, которые остаются надолго.
            </p>

            <p className="text-lg text-justify indent-6">
              Но Dvizh - это не только Корж. Мы дружим с Канги, посещаем его концерты всей командой, обсуждаем и договариваемся заранее через общие чаты. Канги - душа современной молодежи, его творчество о любви, жизни и мечтах трогает каждого.
            </p>

            <img
              src="/formats/artists/artists1.jpg"
              alt="Dvizh × Артисты"
              className="w-full my-6 rounded-xl object-cover"
            />

            <p className="text-lg text-justify indent-6">
              На наших афтепати и выездах выступали официальные диджеи артистов, например, DJ Selebrium от Макса Коржа, а также тайные гости и локальные музыканты. Атмосфера всегда дружелюбная, но энергичная - как и должно быть на настоящем движении.
            </p>

            <p className="text-lg text-justify indent-6">
              Мы даже съездили на концерт группы Хлеб в Екатеринбург с афтепати и живыми сетами DJ Badbasyaaa. Всегда собираемся всей командой, чтобы вместе веселиться и поддерживать артистов.
            </p>

            <img
              src="/formats/artists/vanfi1.webp"
              loading="lazy"
              fetchPriority="low"
              decoding="async"
              alt="Dvizh × Артисты"
              className="w-full max-w-4xl mx-auto my-6 rounded-xl object-cover"
            />

            <p className="text-lg text-justify indent-6">
              У нас в движке много творческих ребят: кто-то пишет песни, кто-то уже устраивал концерты - привет, ВАНФИ!)). Они уже звучат у нас в наушниках, но скоро и вы о них услышите!
            </p>

            <p className="text-lg text-justify indent-6">
              Формат Dvizh × Артисты - это возможность быть частью музыкальной семьи, увидеть любимых артистов, поддержать локальные таланты и создать вместе незабываемые воспоминания.
            </p>
          </section>
        </div>
      </section>

      {/* Мероприятия */}
      <section id="format-events" className="px-6 sm:px-16 md:px-32 pb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold my-8 text-center">Мероприятия этого формата</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            { title: "Выезд на Хлеб | Екатеринбург", date: "xx.xx.2025", slug: "hleb-ekb", image: "/formats/artists/hleb.jpg" },
            { title: "Концерт Канги | Ufa", date: "02.12.2025", slug: "kangi-ufa-02-12", image: "/formats/artists/kangi.jpg" },
            { title: "АТЛ | Выезд всей командой", date: "xx.xx.2025", slug: "atl-excursion", image: "/formats/artists/atl.jpg" },
            { title: "DJ Selebrium | Афтепати", date: "xx.xx.2025", slug: "dj-selebrium", image: "/formats/artists/selebrium.jpg" }
          ].map((event, index) => (
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