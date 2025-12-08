"use client";

import { useState } from "react";

export default function SocialPopup() {
  const [open, setOpen] = useState(false);
  const togglePopup = () => setOpen(!open);

  return (
    <>
      <button
        onClick={togglePopup}
        className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-50 transition-transform hover:scale-105"
      >
        <img src="/menu.png" alt="Меню" className="w-6 h-6" />
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 bg-gray-900 text-white p-4 rounded-xl shadow-xl flex flex-col gap-3 z-50 min-w-[200px]">
          <a
            href="https://t.me/dvizhufa102"
            target="_blank"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-700 transition"
          >
            <img src="/telegram.png" alt="Telegram" className="w-6 h-6" />
            <span>Telegram канал</span>
          </a>
          <a
            href="https://www.instagram.com/dvizh.ufa/"
            target="_blank"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-pink-700 transition"
          >
            <img src="/instagram.png" alt="Instagram" className="w-6 h-6" />
            <span>Instagram</span>
          </a>
          <a
            href="https://t.me/+AVIwGqS8k0swMjdi"
            target="_blank"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-700 transition"
          >
            <img src="/chat.png" alt="Chat" className="w-6 h-6" />
            <span>Telegram чат</span>
          </a>
        </div>
      )}
    </>
  );
}
