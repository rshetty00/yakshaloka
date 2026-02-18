import React, { useEffect, useRef, useState } from 'react';
import SectionHeader from '../../components/SectionHeader';
import YouTubeEmbed from '../../components/YouTubeEmbed';
import OtherArtsSection from '../../components/OtherArtsSection';

// Import hero images
import HeroImg from 'assets/images/yakshagana/Yakshagana_Main_RaghuramShettyAsShumbhaHeadshot.jpg';

const TrainingTeaching = () => {
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

  const curriculumHighlights = [
    {
      title: 'Foundations',
      description: 'Basic footwork patterns, rhythm training, posture and body alignment',
      duration: '12 weeks',
      level: 'Beginner'
    },
    {
      title: 'Intermediate Choreography',
      description: 'Character development, story narration through movement, ensemble coordination',
      duration: '16 weeks',
      level: 'Intermediate'
    },
    {
      title: 'Advanced Performance',
      description: 'Complex characters, full play scenes, live music coordination, stage presence',
      duration: '20 weeks',
      level: 'Advanced'
    },
    {
      title: 'Master Classes',
      description: 'Intensive workshops with visiting maestros, specialized techniques',
      duration: 'Variable',
      level: 'All Levels'
    }
  ];

  const programTypes = [
    {
      type: 'Regular Classes',
      icon: '📅',
      content: 'Weekly ongoing classes for all levels - beginner through advanced. Flexible scheduling with options for weekday evenings and weekend sessions.',
      status: 'Coming Soon'
    },
    {
      type: 'Summer Intensives',
      icon: '☀️',
      content: 'Immersive 2-week programs during summer break. Perfect for students and working professionals looking to deepen their practice.',
      status: 'Coming Soon'
    },
    {
      type: 'Weekend Workshops',
      icon: '🎭',
      content: 'Focused workshops on specific topics - character development, drumming coordination, or repertoire deep-dives.',
      status: 'Coming Soon'
    },
    {
      type: 'Online Sessions',
      icon: '💻',
      content: 'Remote classes for students worldwide. Anatomy, music theory, and beginner footwork adapted for online learning.',
      status: 'Coming Soon'
    }
  ];

  const teachingPhilosophy = [
    {
      principle: 'Authenticity',
      description: 'Teaching classical techniques with respect for traditional forms while allowing contemporary expression and interpretation.'
    },
    {
      principle: 'Accessibility',
      description: 'Making Yakshagana available to diverse students across cultures, abilities, and backgrounds - breaking geographical and social barriers.'
    },
    {
      principle: 'Wholeness',
      description: 'Developing the complete artist - body, mind, and soul - through rigorous training in movement, music, storytelling, and philosophy.'
    },
    {
      principle: 'Community',
      description: 'Creating supportive ensembles where learning happens through collaboration, mentorship, and shared performance experiences.'
    },
    {
      principle: 'Evolution',
      description: 'Honoring the past while embracing creative innovation, allowing Yakshagana to remain vibrant and relevant for new generations.'
    }
  ];

  return (
    <div className="training-teaching">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[65vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
          {/* Background image */}
          <img 
            src={HeroImg} 
            alt="Training and Teaching" 
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
              Training & Teaching
            </h1>
            <div className="text-2xl md:text-3xl font-bold text-amber-200/90 mb-6 tracking-wide animate-fade-in animation-delay-200">
              Pass It Forward
            </div>
            
            <p className="mt-2 max-w-3xl text-slate-100 text-lg md:text-xl leading-relaxed drop-shadow-lg animate-fade-in animation-delay-400">
              Learn the art of Yakshagana - classical technique meets creative expression. Develop as an artist, performer, and cultural ambassador.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-3 justify-center animate-fade-in animation-delay-600">
              <a 
                href="#curriculum" 
                className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold hover:from-amber-400 hover:to-amber-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-amber-500/50"
              >
                Curriculum
              </a>
              <a 
                href="#programs" 
                className="px-6 py-3 rounded-full bg-slate-800/80 backdrop-blur-sm text-slate-100 border border-amber-400/50 hover:bg-slate-700/80 hover:border-amber-400 transition-all transform hover:scale-105 shadow-lg font-semibold"
              >
                Programs
              </a>
              <a 
                href="#philosophy" 
                className="px-6 py-3 rounded-full bg-slate-800/80 backdrop-blur-sm text-slate-100 border border-amber-400/50 hover:bg-slate-700/80 hover:border-amber-400 transition-all transform hover:scale-105 shadow-lg font-semibold"
              >
                Philosophy
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

      {/* Curriculum Section */}
      <section 
        id="curriculum" 
        className="container mx-auto px-4 py-12 opacity-0 translate-y-8 transition-all duration-700"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <SectionHeader
          eyebrow="Learning pathways"
          title="Our Curriculum"
          subtitle="Progressive training from foundations through advanced performance artistry."
          align="left"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {curriculumHighlights.map((course, idx) => (
            <div 
              key={idx}
              className="p-6 bg-gradient-to-br from-slate-900 to-slate-950 rounded-lg border border-slate-700 hover:border-amber-400/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/10"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-amber-300">{course.title}</h3>
                  <p className="text-sm text-slate-400 mt-1">{course.level}</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4">{course.description}</p>
              <div className="text-sm text-slate-400 flex items-center gap-2">
                <span className="text-amber-300">📚</span>
                {course.duration}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Programs Section */}
      <section 
        id="programs"
        className="bg-slate-950 border-y border-slate-800 relative py-12 opacity-0 translate-y-8 transition-all duration-700"
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            eyebrow="Classes and workshops"
            title="Training Programs"
            subtitle="Multiple formats to fit your schedule and learning style."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programTypes.map((program, idx) => (
              <div 
                key={idx}
                className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg border border-slate-700 hover:border-amber-400/40 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{program.icon}</div>
                <h3 className="text-xl font-bold text-amber-300 mb-2">{program.type}</h3>
                <p className="text-slate-300 mb-4">{program.content}</p>
                <div className="inline-block px-4 py-2 bg-amber-400/10 border border-amber-400/30 rounded-full text-sm text-amber-300 font-semibold">
                  {program.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy Section */}
      <section 
        id="philosophy"
        className="container mx-auto px-4 py-12 opacity-0 translate-y-8 transition-all duration-700"
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        <SectionHeader
          eyebrow="Our approach"
          title="Teaching Philosophy"
          subtitle="Five core principles that guide our education and community."
          align="center"
        />
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {teachingPhilosophy.map((item, idx) => (
              <div 
                key={idx}
                className="flex gap-6 p-6 bg-gradient-to-br from-slate-900 to-slate-950 rounded-lg border border-slate-700 hover:border-amber-400/40 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-amber-400/10 border border-amber-400/30">
                    <span className="text-amber-300 font-bold text-lg">{idx + 1}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-amber-300 mb-1">{item.principle}</h3>
                  <p className="text-slate-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Showcases Section */}
      <section 
        id="showcases"
        className="bg-slate-950 border-y border-slate-800 relative py-12 opacity-0 translate-y-8 transition-all duration-700"
        ref={(el) => (sectionsRef.current[3] = el)}
      >
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            eyebrow="Performances"
            title="Student Showcases"
            subtitle="Regular opportunities for students to perform and celebrate their progress."
            align="center"
          />
          <div className="max-w-3xl mx-auto">
            <div className="p-8 bg-gradient-to-r from-amber-600/20 to-amber-500/20 rounded-lg border border-amber-400/30 text-center">
              <h3 className="text-2xl font-bold text-amber-300 mb-3">Winter and Summer Showcases</h3>
              <p className="text-slate-300 mb-4">
                Each year our students perform their learned repertoire before live audiences. These showcases celebrate their progress and their commitment to preserving this beautiful art form.
              </p>
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold hover:from-amber-400 hover:to-amber-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-amber-500/50">
                Learn More (Coming Soon)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section 
        id="video-gallery"
        className="container mx-auto px-4 py-12 opacity-0 translate-y-8 transition-all duration-700"
        ref={(el) => (sectionsRef.current[4] = el)}
      >
        <SectionHeader
          eyebrow="Student & Training Content"
          title="Curated Training Videos"
          subtitle="Techniques, demonstrations, and memorable moments from our training programs."
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
      </section>

      {/* Enrollment CTA */}
      <section 
        id="enrollment"
        className="bg-gradient-to-r from-amber-600/20 to-amber-500/20 border-y border-amber-400/30 py-16 opacity-0 translate-y-8 transition-all duration-700"
        ref={(el) => (sectionsRef.current[5] = el)}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-amber-300 mb-4">Ready to Learn Yakshagana?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're a complete beginner or seasoned artist, we have a program for you. Join our community of Yakshagana enthusiasts.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold hover:from-amber-400 hover:to-amber-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-amber-500/50">
              Express Interest (Coming Soon)
            </button>
            <button className="px-8 py-4 rounded-full bg-slate-800/80 backdrop-blur-sm text-slate-100 border border-amber-400/50 hover:bg-slate-700/80 hover:border-amber-400 transition-all transform hover:scale-105 shadow-lg font-semibold">
              Request Information
            </button>
          </div>
        </div>
      </section>

      {/* Managed Videos Section */}
      <section 
        className="container mx-auto px-4 py-12 opacity-0 translate-y-8 transition-all duration-700"
        ref={(el) => (sectionsRef.current[6] = el)}
      >
        <OtherArtsSection
          title="Training & Teaching: Curated Content"
          subtitle="Admin-managed collection of training videos, student performances, and workshops"
          listId="training-teaching"
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
            <p className="text-slate-300 text-lg">Discover other dimensions of Raghuram's work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="/yakshagana" className="group">
              <div className="p-8 bg-gradient-to-br from-orange-900/40 to-orange-800/20 rounded-lg border border-orange-400/30 hover:border-orange-400/60 transition-all transform group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-orange-500/20">
                <div className="text-5xl mb-4">🎪</div>
                <h3 className="text-xl font-bold text-orange-300 mb-2">Yakshagana</h3>
                <p className="text-slate-300 text-sm">Classical theatre across 6 continents</p>
              </div>
            </a>
            <a href="/beyond-the-stage" className="group">
              <div className="p-8 bg-gradient-to-br from-amber-900/40 to-amber-800/20 rounded-lg border border-amber-400/30 hover:border-amber-400/60 transition-all transform group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-amber-500/20">
                <div className="text-5xl mb-4">🌟</div>
                <h3 className="text-xl font-bold text-amber-300 mb-2">Beyond the Stage</h3>
                <p className="text-slate-300 text-sm">Healing, community, charity & education</p>
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

export default TrainingTeaching;
