import React from "react";

const aboutImages = [
  "assets/images/about1.jpg",
  "assets/images/about2.jpg"
];

const About = () => {
  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold mb-6 text-amber-300">About Yakshaloka</h2>
        <p className="mb-6 text-slate-300">
          Yakshaloka is dedicated to preserving the rich heritage of Yakshagana and Bootha Kola.
          We document performances, rituals, and cultural events to bring traditional art to the world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutImages.map((img, idx) => (
            <img key={idx} src={img} alt={`About ${idx + 1}`} className="rounded-xl shadow-lg" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
