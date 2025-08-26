import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('assets/images/hero-background.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Yakshaloka</h1>
          <p className="text-lg md:text-2xl mb-6">
            Preserving the traditional art of Yakshagana and Bootha Kola
          </p>
          <a
            href="#gallery"
            className="bg-amber-400 text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-amber-300 transition"
          >
            Explore Gallery
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
