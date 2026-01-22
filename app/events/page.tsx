"use client";

import Link from "next/link";
import SocialPopup from "../components/SocialPopup";

export default function AllEventsPage() {
  const pastEvents = [
  { title: "Новогодний корпоратив", date: "19 декабря 2025", slug: "novogodnij-korporativ", image: "/novogodnij-korporativ/hero.jpg" },
  { title: "FLAT - DvizhUfa", date: "18 октября 2025", slug: "flat-18-10", image: "/flat-18-10/afish.jpg" },
  { title: "BEERPONG", date: "20 сентября 2025", slug: "beerpong-20-09", image: "/beerpong-20-09/beerpong-20-09.jpg" },
  { title: "BUSTOUR | Ufa - Almaty", date: "2-9 сентября 2025", slug: "bustour-06-09", image: "/bustour-06-09/bustour-cover.jpg" },
  { title: "Dvizh Лагерь II смена", date: "15-17 августа 2025", slug: "lager-15-08", image: "/lager-15-08/lager-15-08.jpg" },
  { title: "Общий сбор в Дустаре", date: "14 августа 2025", slug: "obshe-sbor-14-08", image: "/obshe-sbor-14-08/obshe-sbor-14-08.webp" },
  { title: "Питбайки", date: "12 июля 2025", slug: "pitbike-12-07", image: "/pitbike-12-07/pitbike-12-07.jpg" },
  { title: "Dvizh Лагерь Iсмена", date: "27-29 июня 2025", slug: "dvizh-lager-27-06", image: "/dvizh-lager-27-06/dvizh-lager-27-06.jpg" },
  { title: "АТЛ | 30 апреля / 1 мая 2025", date: "30 апреля - 1 мая 2025", slug: "atl-excursion", image: "/formats/artists/atl1.jpg" },
  { title: "Квартирник", date: "27 апреля 2025", slug: "kvartirnik-27-04", image: "/kvartirnik-27-04/kvartirnik-27-04.jpg" },
  { title: "BeerPong", date: "12 апреля 2025", slug: "beerpong-12-04", image: "/beerpong-12-04/beerpong-12-04.jpg" },
  { title: "Dvizh Ufa x Dvizh Samara | Тур на Флэт", date: "29-30 марта 2025", slug: "dvizh-ufa-samara-flat", image: "/formats/community/flat-ufa-samara.jpg" },
  { title: "Айгир", date: "1-2 марта 2025", slug: "aygir-01-03", image: "/aygir-01-03/aygir-01-03.jpg" },
  { title: "Квартирник", date: "16 февраля 2025", slug: "kvartirnik-16-02", image: "/kvartirnik-16-02/kvartirnik-16-02.jpg" },
  { title: "Winter Camp 2.0", date: "7-9 февраля 2025", slug: "winter-camp-07-02", image: "/winter-camp-2-0-07-02/winter-camp-2-0-07-02.jpg" },

  { title: "Встреча Нового года с ДвижУфой", date: "31 декабря 2024 - 4 января 2025", slug: "noviy-god-31-12", image: "/noviy-god-31-12/noviy-god-31-12.jpg" },
  { title: "Dvizh Лагерь 2024", date: "15-17 ноября 2024", slug: "dvizh-lager-15-11", image: "/dvizh-lager-15-11/dvizh-lager-15-11.jpg" },
  { title: "Анонс мерча", date: "7 ноября 2024", slug: "den-h-07-11", image: "/den-h-07-11/den-h-07-11.jpg" },
  { title: "BeerPong | ИСТИНА", date: "29 октября 2023", slug: "beerpong-29-10", image: "/formats/community/beerpong-29-10.jpg" },
  { title: "BUSTOUR | Ufa - Kazakstan", date: "1–8 октября 2024", slug: "bustour-05-10", image: "/bustour-05-10/1-1.jpg" },
  { title: "BeerPong | ИСТИНА", date: "28 сентября 2023", slug: "beerpong-28-09", image: "/formats/community/beerpong-28-09.jpg" },
  { title: "FLAT | 27.09", date: "27 сентября 2024", slug: "flat-27-09", image: "/formats/community/flat-27-09.jpg" },
  { title: "Сбор перед концертом Макса Коржа", date: "31 августа 2024", slug: "max-korzh-gathering-31-08", image: "/formats/community/max-korzh.jpg" },
  { title: "Зюраткуль", date: "10-11 августа 2024", slug: "zura-10-08", image: "/zura-10-08/zura-10-08.jpg" },
  { title: "Пейнтбол", date: "27 июля 2024", slug: "paintball-27-07", image: "/formats/community/paintball.jpg" },
  { title: "Summer Fest", date: "21 июня 2024", slug: "summer-fest-21-06", image: "/formats/community/summer-fest-21-06.jpg" },
  { title: "Встречай лето | 2024", date: "31 мая - 2 июня 2024", slug: "vstrechay-leto-2024", image: "/formats/community/vstrechay-leto-2024.jpg" },
  { title: "Шашлыки", date: "20 апреля 2024", slug: "shashly-20-04", image: "/formats/community/shashly-20-04.jpg" },
  { title: "Малиновая", date: "23-24 марта 2024", slug: "malinovaya-23-03", image: "/malinovaya-23-03/malinovaya-23-03.jpg" },
  { title: "BeerPong | ИСТИНА", date: "25 января 2024", slug: "beerpong-25-01", image: "/formats/community/beerpong-29-10.jpg" },

  { title: "Зюраткуль", date: "7-8 октября 2023", slug: "zura-7-10", image: "/zura-7-10/zura-7-10.jpg" },
  { title: "КАНГИ | 6 октября 2023 | КЛУБ ДОМ ПЕЧАТИ", date: "6 октября 2023", slug: "kangi-ufa-06-10", image: "/formats/artists/kangi3.webp" },
  { title: "FLAT | 23.09", date: "23 сентября 2023", slug: "flat-23-09", image: "/formats/community/flat-23-09.jpg" },
  { title: "Summer Camp | part. 2", date: "18-20 августа 2023", slug: "summer-camp-18-08", image: "/summer-camp-18-08/summer-camp-18-08.jpg" },
  { title: "Summer Camp | part. 1", date: "16-18 июня 2023", slug: "summer-camp-16-06", image: "/summer-camp-16-06/summer-camp-16-06.jpg" },
  { title: "Встречай лето | 2023", date: "26-28 мая 2023", slug: "vstrechay-leto-2023", image: "/formats/community/vstrechay-leto-2023.jpg" },
  { title: "Майские шашлыки", date: "20 мая 2023", slug: "shashly-20-05", image: "/formats/community/shashly-20-05.jpg" },
  { title: "FLAT | 14.04", date: "14 апреля 2023", slug: "flat-14-04", image: "/formats/community/flat-14-04.jpg" },
  { title: "BEERPONG | S.L.O.N.", date: "17 марта 2023", slug: "beerpong-17-03", image: "/formats/community/beerpong-17-03.jpg" },

  { title: "Dvizh Лагерь | II смена", date: "26-28 августа 2022", slug: "dvizh-lager-2022-2", image: "/dvizh-lager-2022-2/dvizh-lager-2022-2.jpg" },
  { title: "Dvizh Лагерь | I смена", date: "8-10 июля 2022", slug: "dvizh-lager-2022", image: "/dvizh-lager-2022/dvizh-lager-2022.jpg" },
  { title: "г. Малиновая 3", date: "18-19 июня 2022", slug: "malinovaya-18-06", image: "/malinovaya-18-06/malinovaya-18-06.jpg" },
  { title: "Встречай лето 2022", date: "27 мая 2022", slug: "vstrechay-leto-2022", image: "/vstrechay-leto-2022/vstrechay-leto-2022.jpg" },
  { title: "Майские шашлыки", date: "8 мая 2022", slug: "shashly-8-05", image: "/formats/community/shashly-8-05.jpg" },
  { title: "Общий сбор | Арт-квадрат", date: "1 мая 2022", slug: "sbor-1-05", image: "/formats/community/sbor-1-05.webp" },
  { title: "КАНГИ | 3 апреля 2022 | MusicHall27", date: "3 апреля 2022", slug: "kangi-ufa-03-04", image: "/formats/artists/kangi1.jpg" },
  { title: "Квартирник | 19 марта", date: "19 марта 2022", slug: "kvartirnik-19-03", image: "/formats/community/kvartirnik-19-03.jpg" },
  { title: "DVIZH.ТУСА | 29 января | G-ROOM", date: "29 января 2022", slug: "xx", image: "/formats/tusy/29.01.jpg" },

  { title: "Квартирник | 25 декабря", date: "25 декабря 2021", slug: "kvartirnik-25-12", image: "/formats/community/kvartirnik-25-12.jpg" },
  { title: "КАНГИ | 2 декабря 2021 | MusicHall27", date: "2 декабря 2021", slug: "kangi-ufa-02-12", image: "/formats/artists/kangi2.webp" },
      {
        title: "г. Зюраткуль",
        date: "6-7 ноября 2021",
        slug: "zura-6-11",
        image: "/zura-6-11/zura-6-11.jpg",
      },
      {
        title: "г. Иремель",
        date: "16-17 октября 2021",
        slug: "malinovaya-18-06",
        image: "/iremel-16-10/iremel-16-10.jpg",
      },
  { title: "Летний лагерь (II смена)", date: "6-8 августа 2021", slug: "letniy-lager-6-08", image: "/letniy-lager-6-08/letniy-lager-6-08.jpg" },
  { title: "Летний лагерь (I смена)", date: "25-27 июня 2021", slug: "letniy-lager-25-06", image: "/letniy-lager-25-06/letniy-lager-25-06.jpg" },
  { title: "DVIZH.ТУСА | 8 мая | ТИНЬКОФФ ХОЛЛ", date: "8 мая 2021", slug: "xx", image: "/formats/tusy/8.05.jpg" },
  { title: "DVIZH.ТУСА | 6 марта | LABIRINT.UNDER", date: "6 марта 2021", slug: "xx", image: "/formats/tusy/7.10.jpg" },

  { title: "Летний лагерь (II смена)", date: "7-9 августа 2020", slug: "letniy-lager-7-08", image: "/letniy-lager-7-08/letniy-lager-7-08.jpg" },
  { title: "Летний лагерь (I смена)", date: "10-12 июля 2020", slug: "letniy-lager-10-07", image: "/letniy-lager-10-07/letniy-lager-10-07.jpg" },
  { title: "DJ Selebrium | DVIZH.ТУСА", date: "6 марта 2020", slug: "dj-selebrium-06-03", image: "/formats/artists/selebr3.jpg" },

  { title: "Концерт Макса Коржа | Пермь", date: "13 декабря 2019", slug: "concert-perm-13-12", image: "/concert-perm-13-12/cover.jpg" },
  { title: "Концерт Макса Коржа | Пенза", date: "6 декабря 2019", slug: "concert-penza-06-12", image: "/concert-penza-06-12/cover.jpg" },
  { title: "Концерт Макса Коржа | Москва", date: "31 августа 2019", slug: "concert-moscow-31-08", image: "/concert-moscow-31-08/cover.jpg" },
  { title: "Концерт Макса Коржа | Минск", date: "24 августа 2019", slug: "concert-minsk-24-08", image: "/concert-minsk-24-08/cover.jpg" },
  { title: "Концерт Макса Коржа | Челябинск", date: "31 апреля 2019", slug: "concert-chel-31-05", image: "/concert-chel-31-05/cover.jpg" },
  { title: "Концерт Макса Коржа | Казань", date: "14 апреля 2019", slug: "concert-kazan-14-04", image: "/concert-kazan-14-04/cover.jpg" },

  { title: "Концерт Макса Коржа | Екатеринбург", date: "1 декабря 2018", slug: "concert-ekb-1-12", image: "/concert-ekb-1-12/cover.jpg" },
  { title: "DJ Selebrium | Афтепати", date: "1 декабря 2018", slug: "dj-selebrium-01-12", image: "/formats/artists/selebr1.jpg" },
  { title: "Концерт Макса Коржа | Уфа", date: "14 октября 2018", slug: "concert-ufa-14-10", image: "/concert-ufa-14-10/cover.jpg" },
  { title: "Концерт Макса Коржа | Самара", date: "12 октября 2018", slug: "concert-samara-12-10", image: "/concert-samara-12-10/cover.jpg" },
  { title: "Концерт Макса Коржа | Челябинск", date: "2 июня 2018", slug: "concert-chel-2-06", image: "/concert-chel-2-06/cover.jpg" },
  ];

  return (
    <main className="bg-gray-900 text-white min-h-screen relative">
      <section className="py-16 px-6 sm:px-16 md:px-32">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Архив наших прошедших мероприятий
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
  {pastEvents.map((event, index) => (
    <Link key={index} href={`/events/${event.slug}`}>
      <div className="overflow-hidden rounded-lg cursor-pointer hover:scale-105 transition-transform">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-40 sm:h-48 md:h-52 object-cover"
        />
        <div className="p-2">
          <p className="font-bold text-white text-base sm:text-lg">{event.title}</p>
          <p className="text-gray-400 text-sm sm:text-base">{event.date}</p>
        </div>
      </div>
    </Link>
  ))}

  {/* Курсивная карточка */}
  <div className="overflow-hidden rounded-lg flex items-center justify-center border border-gray-600 p-4">
    <p className="text-gray-400 text-base sm:text-lg italic text-center">
      и многие другие, на которые не хватило сил автору сайта...
    </p>
  </div>
</div>

{/* Блок навигационных кнопок */}
<div className="mt-12 flex flex-col items-center gap-4">
  <Link
    href="/#formats"
    className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition w-fit"
  >
    ← К форматам
  </Link>

  <Link
    href="/"
    className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition w-fit"
  >
    Назад на главную
  </Link>
</div>

</section>   {/* ← ВОТ ЭТОГО ТЕГА НЕ ХВАТАЛО */}

{/* Попап социальных сетей */}
<SocialPopup />

    </main>
  );
}
