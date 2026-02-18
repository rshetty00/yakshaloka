import React, { useEffect, useRef, useState } from 'react';
import SectionHeader from '../../components/SectionHeader';
import YouTubeEmbed from '../../components/YouTubeEmbed';
import OtherArtsSection from '../../components/OtherArtsSection';

// Import hero images
import HeroImg from 'assets/images/yakshagana/Yakshagana_Main_RaghuramShettyAsShumbhaHeadshot.jpg';

const HollywoodMedia = () => {
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

  const mediaCategories = [
    {
      category: 'Television',
      icon: '📺',
      content: 'Appearances on major TV networks and streaming platforms showcasing Yakshagana and Indian classical arts.',
      items: [
        { title: 'Coming Soon', network: 'Prime Video' },
        { title: 'Coming Soon', network: 'Apple TV+' },
        { title: 'Coming Soon', network: 'Netflix' }
      ]
    },
    {
      category: 'Film & Short Films',
      icon: '🎬',
      content: 'Featured in documentary and narrative films exploring the intersection of classical dance and contemporary storytelling.',
      items: [
        { title: 'Coming Soon', festival: 'Tribeca Film Festival' },
        { title: 'Coming Soon', festival: 'Sundance' },
        { title: 'Coming Soon', festival: 'SXSW' }
      ]
    },
    {
      category: 'Commercials & Brands',
      icon: '📱',
      content: 'Collaborations with major brands bringing classical Indian arts to mainstream advertising and cultural campaigns.',
      status: 'Coming Soon'
    },
    {
      category: 'Press & Media Features',
      icon: '📰',
      content: 'Featured in prominent publications, podcasts, and media discussing arts, culture, heritage, and innovation.',
      status: 'Coming Soon'
    }
  ];

  const documentaryFeatures = [
    {
      title: 'The Art of Yakshagana',
      description: 'Deep dive into the classical Indian theatre form and its evolution across continents.',
      type: 'Documentary',
      status: 'In Development'
    },
    {
      title: 'Between Two Worlds',
      description: 'Exploring how classical arts remain relevant in contemporary American culture.',
      type: 'Documentary',
      status: 'In Development'
    },
    {
      title: 'Stories of the Stage',
      description: 'Personal interviews and behind-the-scenes moments from performances around the world.',
      type: 'Web Series',
      status: 'In Development'
    }
  ];

  const pressContacts = [
    {
      outlet: 'Bay Area Living',
      type: 'Magazine Feature',
      year: 'Featured'
    },
    {
      outlet: 'South Asian Matters Podcast',
      type: 'Interview',
      year: 'Featured'
    },
    {
      outlet: 'Dance Magazine India',
      type: 'Cover Story',
      year: 'Featured'
    },
    {
      outlet: 'Cultural Impact Digest',
      type: 'Profile',
      year: 'Featured'
    }
  ];

  return (
    <div className="hollywood-media">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[65vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
          {/* Background image */}
          <img 
            src={HeroImg} 
            alt="Hollywood and Media" 
            className="w-full h-full object-cover object-center scale-105"
            style={{ objectPosition: '50% 40%' }}
          />
          
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
          
          {/* Vignette effect */}
          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
          
          {/* Content */}
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            style={{
              opacity: 1 - scrollY / 600,
              transform: `translateY(${scrollY * 0.3}px)`
            }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-easter bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent drop-shadow-2xl mb-2 animate-fade-in">
              Hollywood & Media
            </h1>
            <div className="text-2xl md:text-3xl font-bold text-amber-200/90 mb-6 tracking-wide animate-fade-in animation-delay-200">
              Bringing Indian Arts to the Screen
            </div>
            
            <p className="mt-2 max-w-3xl text-slate-100 text-lg md:text-xl leading-relaxed drop-shadow-lg animate-fade-in animation-delay-400">
              From documentary to mainstream media - bringing classical Indian dance and storytelling to diverse global audiences through film, television, and digital platforms.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-3 justify-center animate-fade-in animation-delay-600">
              <a 
                href="#television" 
                className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold hover:from-amber-400 hover:to-amber-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-amber-500/50"
              >
                Featured Work
              </a>
              <a 
                href="#documentaries" 
                className="px-6 py-3 rounded-full bg-slate-800/80 backdrop-blur-sm text-slate-100 border border-amber-400/50 hover:bg-slate-700/80 hover:border-amber-400 transition-all transform hover:scale-105 shadow-lg font-semibold"
              >
                Documentaries
              </a>
              <a 
                href="#press" 
                className="px-6 py-3 rounded-full bg-slate-800/80 backdrop-blur-sm text-slate-100 border border-amber-400/50 hover:bg-slate-700/80 hover:border-amber-400 transition-all transform hover:scale-105 shadow-lg font-semibold"
              >
                Press
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

      {/* Featured Work Section */}
      <section 
        id="television"
        className="container mx-auto px-4 py-12 opacity-0 translate-y-8 transition-all duration-700"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <SectionHeader
          eyebrow="On screen"
          title="Featured Media Work"
          subtitle="Television, film, and streaming appearances bringing classical arts to modern audiences."
          align="left"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mediaCategories.map((category, idx) => (
            <div 
              key={idx}
              className="p-6 bg-gradient-to-br from-slate-900 to-slate-950 rounded-lg border border-slate-700 hover:border-amber-400/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/10"
            >
              <div className="flex items-start gap-4 mb-3">
                <span className="text-4xl">{category.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-amber-300">{category.category}</h3>
                </div>
              </div>
              <p className="text-slate-300 mb-4">{category.content}</p>
              
              {category.items && (
                <div className="space-y-2 mt-4">
                  {category.items.map((item, i) => (
                    <div 
                      key={i}
                      className="p-2 bg-slate-800/50 rounded border border-slate-700"
                    >
                      <div className="text-sm font-semibold text-amber-300">{item.title}</div>
                      <div className="text-xs text-slate-400">{item.network || item.festival}</div>
                    </div>
                  ))}
                </div>
              )}
              
              {category.status && (
                <div className="mt-4 inline-block px-4 py-2 bg-amber-400/10 border border-amber-400/30 rounded-full text-sm text-amber-300 font-semibold">
                  {category.status}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Video Highlights Section */}
      <section 
        id="video-highlights"
        className="bg-slate-950 border-y border-slate-800 relative py-12 opacity-0 translate-y-8 transition-all duration-700"
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            eyebrow="Media Gallery"
            title="Video Highlights"
            subtitle="Curated clips and trailers from featured projects and appearances."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-900 rounded-lg overflow-hidden border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300">
              <YouTubeEmbed url="https://www.youtube.com/watch?v=0mrR3MfIgpU" showTitle />
            </div>
            <div className="bg-slate-900 rounded-lg overflow-hidden border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300">
              <YouTubeEmbed url="https://www.youtube.com/watch?v=0EunnFnmnVs" showTitle />
            </div>
          </div>
        </div>
      </section>

      {/* Documentaries Section */}
      <section 
        id="documentaries"
        className="container mx-auto px-4 py-12 opacity-0 translate-y-8 transition-all duration-700"
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        <SectionHeader
          eyebrow="In development"
          title="Documentary Features"
          subtitle="Upcoming documentary projects exploring the art, culture, and global impact of Yakshagana."
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {documentaryFeatures.map((doc, idx) => (
            <div 
              key={idx}
              className="p-6 bg-gradient-to-br from-slate-900 to-slate-950 rounded-lg border border-slate-700 hover:border-amber-400/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/10"
            >
              <h3 className="text-lg font-bold text-amber-300 mb-2">{doc.title}</h3>
              <p className="text-slate-300 text-sm mb-4">{doc.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-400">{doc.type}</span>
                <span className="px-3 py-1 bg-amber-400/10 border border-amber-400/30 rounded-full text-xs text-amber-300 font-semibold">
                  {doc.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Press Section */}
      <section 
        id="press"
        className="bg-slate-950 border-y border-slate-800 relative py-12 opacity-0 translate-y-8 transition-all duration-700"
        ref={(el) => (sectionsRef.current[3] = el)}
      >
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            eyebrow="Featured in"
            title="Press & Media Features"
            subtitle="Publications and platforms highlighting Raghuram's work in arts, culture, and community."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {pressContacts.map((press, idx) => (
              <div 
                key={idx}
                className="p-4 bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg border border-slate-700 hover:border-amber-400/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/10"
              >
                <h4 className="text-lg font-bold text-amber-300">{press.outlet}</h4>
                <p className="text-sm text-slate-400 mt-1">{press.type}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-xs text-slate-300">
                  {press.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media & Contact */}
      <section 
        id="contact"
        className="bg-gradient-to-r from-amber-600/20 to-amber-500/20 border-y border-amber-400/30 py-16 opacity-0 translate-y-8 transition-all duration-700"
        ref={(el) => (sectionsRef.current[4] = el)}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-amber-300 mb-4">Media Inquiries & Collaboration</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Interested in featuring Yakshagana or Raghuram's work in your project? We're open to collaborations in film, television, advertising, and cultural initiatives.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold hover:from-amber-400 hover:to-amber-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-amber-500/50">
              Request Press Kit
            </button>
            <button className="px-8 py-4 rounded-full bg-slate-800/80 backdrop-blur-sm text-slate-100 border border-amber-400/50 hover:bg-slate-700/80 hover:border-amber-400 transition-all transform hover:scale-105 shadow-lg font-semibold">
              Collaboration Inquiry
            </button>
          </div>
          <div className="mt-8 flex justify-center gap-6">
            <a href="#" className="text-amber-300 hover:text-amber-200 transition-colors">Twitter/X</a>
            <a href="#" className="text-amber-300 hover:text-amber-200 transition-colors">Instagram</a>
            <a href="#" className="text-amber-300 hover:text-amber-200 transition-colors">YouTube</a>
            <a href="#" className="text-amber-300 hover:text-amber-200 transition-colors">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Managed Videos Section */}
      <section 
        className="container mx-auto px-4 py-12 opacity-0 translate-y-8 transition-all duration-700"
        ref={(el) => (sectionsRef.current[5] = el)}
      >
        <OtherArtsSection
          title="Hollywood & Media: Curated Content"
          subtitle="Admin-managed collection of media appearances, clips, and featured work"
          listId="hollywood-media"
          initialHeaderVariant="heritage"
          initialViewMode="optionA"
        />
      </section>
    </div>
  );
};

export default HollywoodMedia;
