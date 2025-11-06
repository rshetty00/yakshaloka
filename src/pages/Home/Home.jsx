import React from 'react';
import * as RouterDOM from 'react-router-dom';
const { Link } = RouterDOM;
import HeroLeft from '../../assets/images/DSC_3704.jpg';
import HeroRight from '../../assets/images/RaghuramShettyAsPunjurliBootha_0I7A0194.png';

const Home = () => {
  return (
    <div className="home flex flex-col min-h-screen">
      <div className="hero-dual-bg min-h-[60vh] relative">
        {/* Background images */}
        <div
          className="hero-bg-image-left w-1/2 h-full absolute left-0 top-0 z-0"
          style={{ backgroundImage: `url(${HeroLeft})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div
          className="hero-bg-image-right w-1/2 h-full absolute right-0 top-0 z-0"
          style={{ backgroundImage: `url(${HeroRight})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />

        {/* Overlay + Hero Content */}
        <div className="hero-content absolute inset-0 z-10 flex flex-col justify-center items-center bg-black bg-opacity-50 w-full h-full">
          <div className="flex-1 flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl mb-6 font-easter">
                <span className="text-amber-300 block">
                  Discover the Mystical World of
                </span>
                <span className="text-red-500 mr-2">
                  Yakshagana
                </span>
                <span className="text-amber-300">
                  &amp;
                </span>
                <span className="text-red-500 ml-2">
                  Folk Arts
                </span>

              </h1>
              <p className="text-lg md:text-xl text-red-500 mb-10 font-monaco">
                Explore the rich cultural heritage of Karnataka's traditional performing arts
              </p>
              <div className="flex flex-wrap justify-center gap-5">
                <Link
                  to="/yakshagana"
                  className="transform hover:scale-105 transition-transform bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-lg shadow-md"
                >
                  Explore Yakshagana
                </Link>
                <Link
                  to="/kola-performances"
                  className="transform hover:scale-105 transition-transform bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-medium py-3 px-8 rounded-lg shadow-md"
                >
                  Discover Bootha Kola
                </Link>
                <Link
                  to="/other-arts"
                  className="transform hover:scale-105 transition-transform bg-amber-400 hover:bg-amber-500 text-black font-medium py-3 px-8 rounded-lg shadow-md"
                >
                  Other Arts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-slate-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-300">
            Cultural Treasures of Karnataka
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-indigo-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-500">
              <div className="w-16 h-16 bg-indigo-700 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-amber-300">Yakshagana</h3>
              <p className="text-slate-300 text-center">
                A traditional theater form that combines dance, music, dialogue, costume, make-up, and stage techniques with a unique style.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-fuchsia-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-500">
              <div className="w-16 h-16 bg-fuchsia-700 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-cyan-300">Bootha Kola</h3>
              <p className="text-slate-300 text-center">
                A ritual dance form of worship where performers invoke and embody divine spirits, connecting the human and spiritual worlds.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-orange-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-500">
              <div className="w-16 h-16 bg-orange-700 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-lime-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-lime-300">Cultural Heritage</h3>
              <p className="text-slate-300 text-center">
                Preserving centuries-old traditions that showcase Karnataka's rich mythology, folklore, and spiritual practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
