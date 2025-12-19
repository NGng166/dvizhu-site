"use client";

import Hero from "./components/Hero";
import NextEventBlock from "./components/NextEventBlock";
import WhoWeAre from "./components/WhoWeAre";
import FormatsDvizh from "./components/FormatsDvizh";
import SocialPopup from "./components/SocialPopup";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen relative">
      <Hero />
      <NextEventBlock />
      <WhoWeAre />

      {/* 👇 Якорь */}
      <section id="formats">
        <FormatsDvizh />
      </section>

      <Footer />
      <SocialPopup />
    </main>
  );
}
