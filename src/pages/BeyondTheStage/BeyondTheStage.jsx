import React, { useState, useMemo, useEffect, useRef } from 'react';
import SectionHeader from '../../components/SectionHeader';

const BeyondTheStage = () => {
  const [activeTab, setActiveTab] = useState('story');
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

  // Tab definitions
  const tabs = [
    { id: 'story', label: "Raghuram's Story", icon: '📖' },
    { id: 'healing', label: 'Healing & Wellness', icon: '🧘' },
    { id: 'community', label: 'Community & Culture', icon: '🤝' },
    { id: 'charity', label: 'Charity & Philanthropy', icon: '❤️' },
    { id: 'education', label: 'Education & Institutions', icon: '🎓' },
  ];

  // Tab content data - placeholder structure
  const tabContent = {
    story: {
      title: "Raghuram's Story",
      subtitle: 'A Life Devoted to Transformation',
      description: 'Coming Soon - The complete biography and life philosophy of Raghuram Shetty',
      sections: [
        {
          title: 'Personal Journey & Life Timeline',
          content: 'Content coming soon...',
          isPlaceholder: true,
        },
        {
          title: 'Philosophy: Entertain, Educate, Empower',
          content: 'Content coming soon...',
          isPlaceholder: true,
        },
      ],
      stats: [
        { label: 'Years of Practice', value: '25+' },
        { label: 'Countries Visited', value: '6+' },
        { label: 'Lives Impacted', value: '1000+' },
      ],
    },
    healing: {
      title: 'Therapeutic Healing & Wellness',
      subtitle: 'Transformative Healing Modalities',
      description: 'Coming Soon - Life coaching, hypnotherapy, yoga, and meditation services',
      sections: [
        {
          title: 'Life Coaching Programs',
          content: 'Content coming soon...',
          isPlaceholder: true,
        },
        {
          title: 'Hypnotherapy & Past Life Regression',
          content: 'Content coming soon...',
          isPlaceholder: true,
        },
        {
          title: 'Yoga & Meditation Services',
          content: 'Content coming soon...',
          isPlaceholder: true,
        },
      ],
      stats: [
        { label: 'Clients Served', value: 'TBD' },
        { label: 'Programs Offered', value: 'TBD' },
        { label: 'Transformation Stories', value: 'TBD' },
      ],
      cta: {
        text: 'Book a Session',
        url: '#contact',
      },
    },
    community: {
      title: 'Community & Cultural Programs',
      subtitle: 'Bringing People Together Through Culture',
      description: 'Coming Soon - Community picnics, sports, cultural festivals, and unique demonstrations',
      sections: [
        {
          title: 'All-Day Community Picnics',
          content: 'Content coming soon...',
          isPlaceholder: true,
        },
        {
          title: 'Sports & Recreation Programs',
          content: 'Content coming soon...',
          isPlaceholder: true,
        },
        {
          title: 'Cultural Festivals & Events',
          content: 'Content coming soon...',
          isPlaceholder: true,
        },
        {
          title: '"One-Man Show" Demonstrations',
          content: 'Content coming soon...',
          isPlaceholder: true,
        },
      ],
      stats: [
        { label: 'Events Organized', value: 'TBD' },
        { label: 'Persons Reached', value: 'TBD' },
        { label: 'Communities Served', value: 'TBD' },
      ],
      cta: {
        text: 'Join an Event',
        url: '#contact',
      },
    },
    charity: {
      title: 'Charity & Philanthropy',
      subtitle: 'Serving Humanity Through Compassion',
      description: 'Coming Soon - Disaster relief, community service, and philanthropic initiatives',
      sections: [
        {
          title: 'Disaster Relief Work',
          content: 'Content coming soon...',
          isPlaceholder: true,
          subsections: [
            { subtitle: 'Hurricane Katrina & Harvey Relief', desc: 'Florida/New Orleans response' },
            { subtitle: 'California Wildfire Relief', desc: 'Fire relief and recovery support' },
            { subtitle: 'COVID-19 Relief', desc: 'Vaccination camps and food distribution' },
          ],
        },
        {
          title: 'Ongoing Community Service',
          content: 'Content coming soon...',
          isPlaceholder: true,
        },
        {
          title: 'Partner Organizations',
          content: 'Content coming soon...',
          isPlaceholder: true,
        },
      ],
      stats: [
        { label: 'Persons Assisted', value: 'TBD' },
        { label: 'Communities Impacted', value: 'TBD' },
        { label: 'Partner Organizations', value: 'TBD' },
      ],
      cta: {
        text: 'Support Our Work',
        url: '#contact',
      },
    },
    education: {
      title: 'Education & Institution Building',
      subtitle: 'Building Educational Excellence',
      description: 'Coming Soon - APGET, Ekal Vidyalaya, scholarships, and institutional partnerships',
      sections: [
        {
          title: 'APGET / Jnanasudha Institutions (India)',
          content: 'Content coming soon...',
          isPlaceholder: true,
          subsections: [
            { subtitle: 'Role as Cofounder & Trustee', desc: 'Leadership and governance' },
            { subtitle: 'Mission & Achievements', desc: 'Institutional impact' },
            { subtitle: 'Student Programs', desc: 'Educational initiatives' },
          ],
        },
        {
          title: 'Ekal Vidyalaya Tribal Education',
          content: 'Content coming soon...',
          isPlaceholder: true,
        },
        {
          title: 'Educational Scholarship Programs',
          content: 'Content coming soon...',
          isPlaceholder: true,
        },
        {
          title: 'Institutional Partnerships Worldwide',
          content: 'Content coming soon...',
          isPlaceholder: true,
        },
      ],
      stats: [
        { label: 'Students Impacted', value: 'TBD' },
        { label: 'Educational Institutions', value: 'TBD' },
        { label: 'Years of Service', value: '20+' },
      ],
      cta: {
        text: 'Sponsor a Student',
        url: '#contact',
      },
    },
  };

  const current = tabContent[activeTab];

  return (
    <div className="beyond-the-stage">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[75vh] overflow-hidden bg-gradient-to-br from-slate-900 via-amber-900/30 to-slate-900">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

        {/* Content */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
          style={{
            opacity: 1 - scrollY / 600,
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-easter bg-gradient-to-r from-amber-300 via-amber-200 to-amber-100 bg-clip-text text-transparent drop-shadow-2xl mb-4 animate-fade-in">
            Beyond the Stage
          </h1>
          <p className="text-xl md:text-2xl font-bold text-amber-200/90 mb-6 tracking-wide animate-fade-in animation-delay-200">
            A Life Devoted to Transformation
          </p>
          <p className="max-w-3xl text-slate-100 text-lg md:text-xl leading-relaxed drop-shadow-lg animate-fade-in animation-delay-400">
            Entertain • Educate • Empower
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-amber-300"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 py-12 md:py-16 border-b border-amber-400/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="p-6 md:p-8 bg-gradient-to-br from-amber-600/20 to-amber-500/10 rounded-lg border border-amber-400/30 hover:border-amber-400/60 transition-all text-center transform hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-amber-300 mb-2">30+</div>
              <div className="text-slate-300 font-semibold text-sm md:text-base">Years of Practice</div>
            </div>
            <div className="p-6 md:p-8 bg-gradient-to-br from-amber-600/20 to-amber-500/10 rounded-lg border border-amber-400/30 hover:border-amber-400/60 transition-all text-center transform hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-amber-300 mb-2">21+</div>
              <div className="text-slate-300 font-semibold text-sm md:text-base">Countries</div>
            </div>
            <div className="p-6 md:p-8 bg-gradient-to-br from-amber-600/20 to-amber-500/10 rounded-lg border border-amber-400/30 hover:border-amber-400/60 transition-all text-center transform hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-amber-300 mb-2">6</div>
              <div className="text-slate-300 font-semibold text-sm md:text-base">Continents</div>
            </div>
            <div className="p-6 md:p-8 bg-gradient-to-br from-amber-600/20 to-amber-500/10 rounded-lg border border-amber-400/30 hover:border-amber-400/60 transition-all text-center transform hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-amber-300 mb-2">∞</div>
              <div className="text-slate-300 font-semibold text-sm md:text-base">Lives Transformed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-amber-400/20">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 md:gap-4 py-4 md:py-6 scroll-smooth">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg shadow-amber-500/50'
                    : 'bg-slate-800/60 text-slate-200 border border-amber-400/30 hover:border-amber-400/60'
                }`}
              >
                <span className="text-lg hidden md:inline">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="min-h-screen bg-slate-950">
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container mx-auto px-4 py-12 relative z-10">
          <SectionHeader
            eyebrow={current.subtitle}
            title={current.title}
            subtitle={current.description}
            align="center"
          />

          <div className="mt-12 space-y-12">
            {/* Content Sections */}
            {current.sections.map((section, idx) => (
              <div
                key={idx}
                className="bg-slate-900 rounded-lg border border-amber-400/20 p-8 md:p-12 hover:border-amber-400/40 transition-all duration-300"
              >
                <h3 className="text-2xl md:text-3xl text-amber-400 mb-4 font-semibold">
                  {section.title}
                </h3>

                {section.isPlaceholder ? (
                  <div className="bg-slate-800/50 rounded-lg p-8 text-center border-2 border-dashed border-amber-400/30">
                    <p className="text-slate-400 text-lg mb-4">{section.content}</p>
                    <button className="bg-amber-500/20 border border-amber-400 text-amber-300 px-6 py-2 rounded-full hover:bg-amber-500/30 transition-colors">
                      📧 Sign up for updates
                    </button>
                  </div>
                ) : (
                  <p className="text-slate-300 text-lg leading-relaxed">{section.content}</p>
                )}

                {section.subsections && (
                  <div className="mt-6 space-y-4">
                    {section.subsections.map((subsection, subIdx) => (
                      <div key={subIdx} className="pl-6 border-l-2 border-amber-400/30">
                        <h4 className="text-amber-300 font-semibold mb-2">
                          {subsection.subtitle}
                        </h4>
                        <p className="text-slate-400 text-sm">{subsection.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {current.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 rounded-lg border border-amber-400/30 p-8 text-center hover:border-amber-400/60 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-300 text-sm md:text-base font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            {current.cta && (
              <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/10 rounded-lg border border-amber-400/40 p-8 md:p-12 text-center mt-12">
                <h4 className="text-2xl text-amber-300 mb-6 font-semibold">
                  Ready to get involved?
                </h4>
                <a
                  href={current.cta.url}
                  className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold hover:from-amber-400 hover:to-amber-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-amber-500/50"
                >
                  {current.cta.text}
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Explore Further Section */}
      <section className="bg-slate-900 border-t border-slate-800 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl text-amber-300 mb-6 font-semibold">
            Explore All Dimensions
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Raghuram's work spans performing arts, healing, community service, philanthropy, and education.
            Each aspect represents his commitment to the philosophy: Entertain, Educate, Empower.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/yakshagana"
              className="px-6 py-3 rounded-full bg-slate-800/60 border border-amber-400/30 text-amber-300 hover:border-amber-400 hover:bg-slate-800 transition-all"
            >
              View Yakshagana
            </a>
            <a
              href="/training-teaching"
              className="px-6 py-3 rounded-full bg-slate-800/60 border border-amber-400/30 text-amber-300 hover:border-amber-400 hover:bg-slate-800 transition-all"
            >
              Training & Teaching
            </a>
            <a
              href="/about"
              className="px-6 py-3 rounded-full bg-slate-800/60 border border-amber-400/30 text-amber-300 hover:border-amber-400 hover:bg-slate-800 transition-all"
            >
              About Raghuram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeyondTheStage;
