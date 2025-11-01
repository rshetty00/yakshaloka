import React from 'react';

const HeroRitual = ({ title, subtitle, bgImage, children }) => {
  return (
    <section className="relative w-full overflow-hidden rounded-lg">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter grayscale opacity-90"
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-hidden
      />

      {/* subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" aria-hidden />

      <div className="relative container mx-auto py-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-easter text-amber-300 drop-shadow-md">{title}</h1>
        {subtitle && <p className="mt-4 text-slate-200 max-w-3xl mx-auto">{subtitle}</p>}
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
};

export default HeroRitual;
