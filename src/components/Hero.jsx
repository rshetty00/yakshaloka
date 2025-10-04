import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('assets/images/hero-background.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl mb-4 font-['Brush_Script_MT',_'Comic_Sans_MS',_cursive] text-yellow-400" style={{ fontWeight: 400, letterSpacing: '0.02em', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            Discover the Mystical World of <span className="text-red-600">Yakshagana & Folk Arts</span>
          </h1>
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
