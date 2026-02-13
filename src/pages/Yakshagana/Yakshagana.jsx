import React, { useMemo, useEffect, useRef, useState } from 'react';
import SectionHeader from '../../components/SectionHeader';
import RepertoireCard from '../../components/RepertoireCard';
import EnsembleMemberCard from '../../components/EnsembleMemberCard';
import YouTubeEmbed from '../../components/YouTubeEmbed';
import GalleryLightbox from '../../components/GalleryLightbox';
import OtherArtsSection from '../../components/OtherArtsSection';

// Your existing images
import HeroImg from 'assets/images/Yakshagana1.jpg';
import Yakshagana2 from 'assets/images/Yakshagana2.jpg';
import YakshaganaX from 'assets/images/YakshaganaX.jpg';
import YakshaganaXX1 from 'assets/images/YakshaganaXX1.jpg';
import YakshaganaY from 'assets/images/YakshaganaY.jpg';

const Yakshagana = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionsRef = useRef([]);

  // Parallax effect for hero
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Placeholder data - replace with real content
  const repertoire = useMemo(() => ([
    {
      cover: Yakshagana2,
      title: 'Karna Shapatha',
      origin: 'Mahabharata',
      duration: '90-120 min',
      summary: 'A fierce retelling of Karna oath, fate, and dharma amidst the Kurukshetra storm.',
      cast: ['Raghuram', 'Shreya', 'Arun'],
      music: ['Maddale', 'Chende', 'Harmonium']
    },
    {
      cover: HeroImg,
      title: 'Seetha Kalyana',
      origin: 'Ramayana',
      duration: '120-150 min',
      summary: 'A vibrant celebration of divine union with grandeur, devotion, and classical choreography.',
      cast: ['Raghuram', 'Deepa', 'Kiran'],
      music: ['Bhagavata', 'Harmonium', 'Maddale']
    }
  ]), []);

  const ensemble = useMemo(() => ([
    { photo: HeroImg, name: 'Raghuram Shetty', role: 'Lead Artiste', instrument: '', bio: 'Classical lead with dynamic abhinaya and nrita.' },
    { photo: Yakshagana2, name: 'Bhagavatha Prakash', role: 'Vocal Lead', instrument: 'Bhagavata', bio: 'Vocal anchor guiding narrative and rhythm.' },
    { photo: Yakshagana2, name: 'Anand', role: 'Percussion', instrument: 'Maddale', bio: 'Intricate rhythmic patterns amplifying drama.' },
    { photo: Yakshagana2, name: 'Rohit', role: 'Percussion', instrument: 'Chende', bio: 'Thunderous energy and cadence on stage.' },
  ]), []);

  const videoHighlights = useMemo(() => ([
    'https://www.youtube.com/watch?v=0mrR3MfIgpU',
    'https://www.youtube.com/watch?v=0EunnFnmnVs'
  ]), []);

  // Gallery items with all Yakshagana images
  const galleryItems = useMemo(() => ([
    { type: 'image', src: HeroImg, alt: 'Yakshagana Performance 1', caption: 'Performance moments' },
    { type: 'image', src: Yakshagana2, alt: 'Yakshagana Performance 2', caption: 'Dance scene' },
    { type: 'image', src: YakshaganaX, alt: 'Yakshagana Performance X', caption: 'Stage presence' },
    { type: 'image', src: YakshaganaXX1, alt: 'Yakshagana Performance XX1', caption: 'Ensemble performance' },
    { type: 'image', src: YakshaganaY, alt: 'Yakshagana Performance Y', caption: 'Character portrayal' }
  ]), []);

  return (
    <div className="yakshagana">
            {/* Hero */}
      <section className="relative">
        <div className="relative h-[65vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
          {/* Background image with enhanced positioning */}
          <img 
            src={HeroImg} 
            alt="Yakshagana Performance" 
            className="w-full h-full object-cover object-center scale-105"
            style={{ objectPosition: '50% 40%' }}
          />
          
          {/* Enhanced gradient overlays for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
          
          {/* Subtle vignette effect */}
          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
          
          {/* Content with fade-in animation */}
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            style={{
              opacity: 1 - scrollY / 600,
              transform: `translateY(${scrollY * 0.3}px)`
            }}
          >
            {/* Title with enhanced styling */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-easter bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent drop-shadow-2xl mb-2 animate-fade-in">
              Yakshagana
            </h1>
            <div className="text-2xl md:text-3xl font-bold text-amber-200/90 mb-6 tracking-wide animate-fade-in animation-delay-200">
              YakshalokaUS
            </div>
            
            {/* Description with better contrast */}
            <p className="mt-2 max-w-3xl text-slate-100 text-lg md:text-xl leading-relaxed drop-shadow-lg animate-fade-in animation-delay-400">
              Classical dance drama reimagining ancient epics with live on-stage music and electrifying choreography.
            </p>
            
            {/* Navigation buttons with enhanced styling */}
            <div className="mt-8 flex flex-wrap gap-3 justify-center animate-fade-in animation-delay-600">
              <a 
                href="#repertoire" 
                className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold hover:from-amber-400 hover:to-amber-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-amber-500/50"
              >
                Repertoire
              </a>
              <a 
                href="#highlights" 
                className="px-6 py-3 rounded-full bg-slate-800/80 backdrop-blur-sm text-slate-100 border border-amber-400/50 hover:bg-slate-700/80 hover:border-amber-400 transition-all transform hover:scale-105 shadow-lg font-semibold"
              >
                Highlights
              </a>
              <a 
                href="#ensemble" 
                className="px-6 py-3 rounded-full bg-slate-800/80 backdrop-blur-sm text-slate-100 border border-amber-400/50 hover:bg-slate-700/80 hover:border-amber-400 transition-all transform hover:scale-105 shadow-lg font-semibold"
              >
                Ensemble
              </a>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-amber-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Repertoire */}
      <section 
        id="repertoire" 
        className="container mx-auto px-4 py-12 opacity-0 translate-y-8 transition-all duration-700"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <SectionHeader
          eyebrow="Signature works"
          title="Our Repertoire"
          subtitle="Ancient stories retold with classical rigor and contemporary staging."
          align="left"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repertoire.map((item, idx) => (
            <RepertoireCard key={idx} {...item} />
          ))}
        </div>
      </section>

      {/* Highlights: Video + Photo lightbox grid with texture overlay */}
      <section 
        id="highlights" 
        className="bg-slate-950 border-y border-slate-800 relative opacity-0 translate-y-8 transition-all duration-700"
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="container mx-auto px-4 py-12">
          <SectionHeader
            eyebrow="Performance highlights"
            title="Stage Moments"
            subtitle="Curated videos and stills showcasing the energy and grace of Yakshagana."
            align="left"
          />
          {/* Video strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {videoHighlights.map((url, i) => (
              <div 
                key={i} 
                className="bg-slate-900 rounded-lg overflow-hidden border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10"
              >
                <YouTubeEmbed url={url} showTitle />
              </div>
            ))}
          </div>

          {/* Photo lightbox grid */}
          <div className="mt-8">
            <GalleryLightbox items={galleryItems} />
          </div>
        </div>
      </section>

      {/* Ensemble */}
      <section 
        id="ensemble" 
        className="container mx-auto px-4 py-12 opacity-0 translate-y-8 transition-all duration-700"
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        <SectionHeader
          eyebrow="Live music and Cast"
          title="The Ensemble"
          subtitle="Bhagavata leads the narrative; percussion drives the pulse; artistes bring characters to life."
          align="left"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ensemble.map((m, i) => <EnsembleMemberCard key={i} {...m} />)}
        </div>
      </section>

      {/* Upcoming shows with texture */}
      <section 
        id="shows" 
        className="bg-slate-950 border-t border-slate-800 relative opacity-0 translate-y-8 transition-all duration-700"
        ref={(el) => (sectionsRef.current[3] = el)}
      >
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="container mx-auto px-4 py-12">
          <SectionHeader
            eyebrow="Tour and appearances"
            title="Upcoming Shows"
            subtitle="Catch YakshalokaUS live on stage."
            align="left"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-900 rounded-lg border border-slate-700 hover:border-amber-400/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/10">
              <div className="text-amber-300 font-semibold">Dec 15, 2025 at Seattle, WA</div>
              <div className="text-slate-300 text-sm">Karna Shapatha at Town Hall</div>
              <a href="#" className="inline-block mt-2 text-amber-400 hover:text-amber-300 underline transition-colors">Details</a>
            </div>
            <div className="p-4 bg-slate-900 rounded-lg border border-slate-700 hover:border-amber-400/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/10">
              <div className="text-amber-300 font-semibold">Jan 20, 2026 at San Jose, CA</div>
              <div className="text-slate-300 text-sm">Seetha Kalyana at Civic Center</div>
              <a href="#" className="inline-block mt-2 text-amber-400 hover:text-amber-300 underline transition-colors">Details</a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section 
        id="gallery"
        className="container mx-auto px-4 py-12 opacity-0 translate-y-8 transition-all duration-700"
        ref={(el) => (sectionsRef.current[5] = el)}
      >
        <SectionHeader
          eyebrow="Photo Gallery"
          title="Performance Gallery"
          subtitle="Visual moments capturing the essence of Yakshagana performances."
          align="left"
        />
        <GalleryLightbox items={galleryItems} />
      </section>

      {/* Curated videos (admin-manageable) */}
      <section 
        className="container mx-auto px-4 py-12 opacity-0 translate-y-8 transition-all duration-700"
        ref={(el) => (sectionsRef.current[4] = el)}
      >
        <OtherArtsSection
          title="Yakshagana: Curated Performances"
          subtitle="A living playlist of our performances - managed by the admin panel."
          listId="yakshagana"
          initialHeaderVariant="heritage"
          initialViewMode="optionA"
        />
      </section>
    </div>
  );
};

export default Yakshagana;