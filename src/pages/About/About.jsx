import React from "react";
import About1 from '../../assets/images/DSC_3704.jpg';
import About2 from '../../assets/images/PrathibhaShetty_DeviDurgaOnLion_Mahishamardini_Yakshagana_20161229_224345.jpg';

const About = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-fuchsia-900 text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{background: 'radial-gradient(circle at 20% 40%, rgba(217,119,6,0.15) 0, transparent 60%), radial-gradient(circle at 80% 60%, rgba(124,58,237,0.12) 0, transparent 70%)'}} />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-amber-300 text-center drop-shadow-lg">About Yakshaloka</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
          <img src={About1} alt="Yakshagana Performance" className="rounded-2xl shadow-2xl border-4 border-amber-300" />
          <img src={About2} alt="Bootha Kola Ritual" className="rounded-2xl shadow-2xl border-4 border-fuchsia-400" />
        </div>
        <div className="max-w-3xl mx-auto text-center text-lg md:text-xl text-slate-200 bg-slate-800 bg-opacity-70 rounded-xl p-8 shadow-xl">
          <p className="mb-6">
            <span className="font-semibold text-amber-300">Yakshaloka</span> is dedicated to preserving and celebrating the vibrant cultural heritage of Karnataka, with a special focus on <span className="text-orange-400">Yakshagana</span> and <span className="text-fuchsia-400">Bootha Kola</span>.
          </p>
          <p className="mb-6">
            Our mission is to document, educate, and share the stories, performances, and rituals that have shaped generations. Through stunning visuals, curated galleries, and insightful articles, we bring the magic of these ancient art forms to a global audience.
          </p>
          <p>
            Join us in exploring the spiritual, artistic, and communal traditions that make Karnataka's folk arts truly unique. Whether you are a cultural enthusiast, performer, or simply curious, Yakshaloka welcomes you to experience the legacy and living spirit of these traditions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
