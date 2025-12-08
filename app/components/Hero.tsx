"use client";

export default function Hero() {
  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero.webm"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <img src="/logo.png" alt="DVIZHUFA" className="w-32 sm:w-48 mx-auto mb-6" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Походы, концерты, тусовки — мы создаём атмосферу!
        </h1>
      </div>
    </section>
  );
}
