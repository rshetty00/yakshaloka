import React, { useMemo, useEffect, useRef, useState } from 'react';
import SectionHeader from '../../components/SectionHeader';
import RepertoireCard from '../../components/RepertoireCard';
import EnsembleMemberCard from '../../components/EnsembleMemberCard';
import YouTubeEmbed from '../../components/YouTubeEmbed';
import GalleryLightbox from '../../components/GalleryLightbox';
import OtherArtsSection from '../../components/OtherArtsSection';

// Yakshagana-specific images and videos
import HeroImg from 'assets/images/yakshagana/Yakshagana_Main_RaghuramShettyAsShumbhaHeadshot.jpg';
import Yakshagana2 from 'assets/images/yakshagana/Yakshagana2.jpg';
import YakshaganaX from 'assets/images/yakshagana/YakshaganaX.jpg';
import YakshaganaXX1 from 'assets/images/yakshagana/YakshaganaXX1.jpg';
import YakshaganaY from 'assets/images/yakshagana/YakshaganaY.jpg';

// YouTube highlights
const PACIFIC_OCEAN_VIDEO = 'https://youtube.com/shorts/Tnv7y42SpKk?feature=share';

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
      title: '“The Epic Vanquishing of Ravana”',
      origin: 'Ramayana',
      duration: '90-120 min',
      summary: 'A fierce battle of Rama - Ravana, Ravana\'s Ten-Headed Sovereign, Rama\'s heroic talents, and power of Self knowledge',
      cast: ['Raghuram', 'Vedavit', 'Viravara', 'Abhishek', 'Priya'],
      music: ['Bhaagavata', 'Chakra taala', 'Maddale', 'Chende', 'Harmonium']
    },
    {
      cover: HeroImg,
      title: 'Goddess Durga',
      origin: 'Devi Bhagavatam',
      duration: '120-150 min',
      summary: 'A vibrant celebration of women empowerment and divine union of universal powers with grandeur, chilling devotion, and classical choreography.',
      cast: ['Raghuram', 'Prathibha', 'Vedavit', 'Viravara'],
      music: ['Bhagavata', 'Harmonium', 'Maddale', 'Chende', 'Chakra Tala']
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

  // Era timeline data
  const eraTimeline = useMemo(() => ([
    {
      era: 'Indian Era',
      period: 'Upto 1994',
      location: 'Karnataka, India',
      icon: '🇮🇳',
      shows: '50+',
      highlights: 'Training, early performances, temple dedications',
      countries: ['India'],
      image: HeroImg,
      description: 'Foundational training in classical, folk, and spiritual traditions; formative performances across cities, villages, universities, temples and cultural festivals that established deep roots in heritage and ritual.'
    },
    {
      era: 'New England Era',
      period: '1995-2003',
      location: 'New England, USA',
      icon: '🗽',
      shows: '40+',
      highlights: 'US debut, university tours, cultural centers',
      countries: ['USA'],
      image: Yakshagana2,
      description: 'A pivotal introduction of Yakshagana to North American and international audiences via university tours, renowned theaters, and cultural institutions—sparking cross-cultural dialogue and critical acclaim.'
    },
    {
      era: 'Florida Era',
      period: '2004-2006',
      location: 'Florida, USA',
      icon: '🌴',
      shows: '30+',
      highlights: 'Expansion, local community programs, regional recognition',
      countries: ['USA'],
      image: YakshaganaX,
      description: 'Expanding presence across Florida through community events, university engagements, and folk festivals—an era of regional growth and rising international influence through touring.'
    },
    {
      era: 'Bay Area Era',
      period: '2006-2013',
      location: 'San Francisco, USA',
      icon: '🌉',
      shows: '60+',
      highlights: 'Asia Society, Herbst Theatre, touring to international venues',
      countries: ['USA', 'Canada', 'UK'],
      image: YakshaganaXX1,
      description: 'Significant growth with performances at major venues and international touring to multiple countries.'
    },
    {
      era: 'SoCal Era I — Hollywood Debut',
      period: '2013-2022',
      location: 'Southern California, USA',
      icon: '🏖️',
      shows: '75+',
      highlights: 'Frequent performances, Asia Society series, TED talks integration, first Yakshagana appearance in a Hollywood movie',
      countries: ['USA', 'Canada', 'Europe'],
      image: YakshaganaY,
      description: 'LA emerges as a major performance hub; this era includes Yakshagana’s first-ever appearance in a Hollywood film (featuring Viravara Shetty), broadening the art form’s cultural footprint and audience reach.'
    },
    {
      era: 'SoCal Era II — Feature Film & Legacy',
      period: '2023-2026',
      location: 'Southern California, USA',
      icon: '✨',
      shows: '45+',
      highlights: 'Major productions, training academy growth, and a feature-film project inspired by Raghuram’s life',
      countries: ['USA', 'Canada', 'Europe', 'Asia'],
      image: HeroImg,
      description: 'A contemporary era marked by on-screen prominence: Raghuram appears in a major film role, and his life and artistic journey have inspired a Hollywood feature (with his elder son Vivaswan Shetty cast in a principal role). The project is being pitched to investors and aims to complete pre-production in 2026, cementing Yakshagana’s cultural legacy on the global stage.'
    }
  ]), []);

  // Gallery items with all Yakshagana images and videos
  const galleryItems = useMemo(() => ([
    { type: 'youtube', src: PACIFIC_OCEAN_VIDEO, alt: 'Yakshagana Reel Performance', caption: 'Pacific Ocean Performance' },
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

      {/* Era Timeline Section */}
      <section 
        id="era-timeline"
        className="bg-gradient-to-b from-slate-900 to-slate-950 border-y border-slate-800 relative py-16 opacity-0 translate-y-8 transition-all duration-700"
        ref={(el) => (sectionsRef.current[6] = el)}
      >
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            eyebrow="Journey across continents"
            title="Six Eras of Yakshagana USA"
            subtitle="From India to the world: 300+ performances across 6 geographical and temporal eras."
            align="center"
          />

          {/* Stats cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="p-4 bg-slate-800/40 backdrop-blur-sm rounded-lg border border-amber-400/20 text-center hover:bg-slate-800/60 transition-all">
              <div className="text-3xl font-bold text-amber-300">300+</div>
              <div className="text-slate-400 text-sm mt-1">Performances</div>
            </div>
            <div className="p-4 bg-slate-800/40 backdrop-blur-sm rounded-lg border border-amber-400/20 text-center hover:bg-slate-800/60 transition-all">
              <div className="text-3xl font-bold text-amber-300">6</div>
              <div className="text-slate-400 text-sm mt-1">Eras</div>
                <div className="text-3xl font-bold text-amber-300">5</div>
                  <div className="text-slate-400 font-semibold text-sm md:text-base">Continents</div>
              <div className="text-3xl font-bold text-amber-300">30+</div>
              <div className="text-slate-400 text-sm mt-1">Years Active</div>
            </div>
            <div className="p-4 bg-slate-800/40 backdrop-blur-sm rounded-lg border border-amber-400/20 text-center hover:bg-slate-800/60 transition-all">
              <div className="text-3xl font-bold text-amber-300">1000+</div>
              <div className="text-slate-400 text-sm mt-1">Artists-AdditionalStats</div>
            </div>
          </div>

          {/* Timeline cards */}
          <div className="space-y-4">
            {eraTimeline.map((era, idx) => (
              <div 
                key={idx}
                className="group relative overflow-hidden rounded-lg border border-slate-700 hover:border-amber-400/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900 opacity-90 group-hover:opacity-95 transition-all" />
                
                {/* Timeline number on left */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-amber-600" />
                
                {/* Era content */}
                <div className="relative p-6 flex flex-col md:flex-row gap-6">
                  {/* Left: Era info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{era.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-amber-300">{era.era}</h3>
                        <p className="text-sm text-slate-400">{era.period}</p>
                      </div>
                    </div>
                    <p className="text-slate-300 mb-3">{era.description}</p>
                    <div className="flex flex-wrap gap-2 items-start">
                      <div className="flex gap-2">
                        {era.countries.map((country) => (
                          <span 
                            key={country}
                            className="px-3 py-1 bg-amber-400/10 border border-amber-400/30 rounded-full text-xs text-amber-300 font-semibold"
                          >
                            {country}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-xs text-slate-300">
                          {era.shows} shows
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right: Stats */}
                  <div className="md:w-40 flex flex-col justify-start gap-2 text-sm">
                    <div>
                      <div className="text-slate-400 font-semibold">Location</div>
                      <div className="text-slate-200">{era.location}</div>
                    </div>
                    <div>
                      <div className="text-slate-400 font-semibold">Highlights</div>
                      <div className="text-slate-300 text-xs">{era.highlights}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-12 text-center p-8 bg-gradient-to-r from-amber-600/20 to-amber-500/20 rounded-lg border border-amber-400/30">
            <h3 className="text-2xl font-bold text-amber-300 mb-2">Experience the Journey</h3>
            <p className="text-slate-300 mb-4">From India to international stages - a testament to the universal appeal of Yakshagana.</p>
            <a 
              href="#shows"
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold hover:from-amber-400 hover:to-amber-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-amber-500/50"
            >
              View Upcoming Shows
            </a>
          </div>
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

      {/* Related Pages Section */}
      <section className="bg-slate-900 border-t border-slate-800 py-16 opacity-0 translate-y-8 transition-all duration-700"
        ref={(el) => (sectionsRef.current[7] = el)}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-300 mb-4">Explore More</h2>
            <p className="text-slate-300 text-lg">Discover other dimensions of Raghuram's life and work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="/beyond-the-stage" className="group">
              <div className="p-8 bg-gradient-to-br from-amber-900/40 to-amber-800/20 rounded-lg border border-amber-400/30 hover:border-amber-400/60 transition-all transform group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-amber-500/20">
                <div className="text-5xl mb-4">🎭</div>
                <h3 className="text-xl font-bold text-amber-300 mb-2">Beyond the Stage</h3>
                <p className="text-slate-300 text-sm">Healing, community, charity, education & more</p>
              </div>
            </a>
            <a href="/training-teaching" className="group">
              <div className="p-8 bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-lg border border-blue-400/30 hover:border-blue-400/60 transition-all transform group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                <div className="text-5xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-blue-300 mb-2">Training & Teaching</h3>
                <p className="text-slate-300 text-sm">Learn Yakshagana with our curriculum</p>
              </div>
            </a>
            <a href="/hollywood-media" className="group">
              <div className="p-8 bg-gradient-to-br from-rose-900/40 to-rose-800/20 rounded-lg border border-rose-400/30 hover:border-rose-400/60 transition-all transform group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-rose-500/20">
                <div className="text-5xl mb-4">🎬</div>
                <h3 className="text-xl font-bold text-rose-300 mb-2">Hollywood & Media</h3>
                <p className="text-slate-300 text-sm">Featured in TV, film & documentaries</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Yakshagana;