import React from 'react';

export default function StoryTimeline() {
  const timelineEvents = [
    {
      year: 'Childhood',
      title: 'Foundation of Excellence',
      description: 'Born into farming community. Early exposure to hard work, nature, and resilience. Athletic prowess and cultural curiosity emerge.',
      icon: '🌾'
    },
    {
      year: 'Young Adult',
      title: 'Renaissance Man Emerges',
      description: 'Athletics achievements. Deep dive into spiritual, yogic, and philosophical traditions. Engineering education begins.',
      icon: '💪'
    },
    {
      year: 'Pre-1994',
      title: 'Early Contributions in India',
      description: 'Building expertise in Yakshagana, Bootakola, and classical arts. Research into ancient rituals and texts. (Archive: Hi8mm tapes)',
      icon: '🎭'
    },
    {
      year: '1994',
      title: 'Immigration to USA',
      description: 'Bold move to bring ancient traditions to Western audiences. Beginning of YakshalokaUS mission.',
      icon: '✈️'
    },
    {
      year: '1995-2004',
      title: 'Foundation Building',
      description: 'Establishing first Yakshagana and Bootakola teams outside India. Building diverse, global student base. Early performances.',
      icon: '🏗️'
    },
    {
      year: '2005-2015',
      title: 'Expansion & Innovation',
      description: 'Tech innovation in parallel. Numerous shows across North America. Growing international recognition.',
      icon: '🚀'
    },
    {
      year: '2016-Present',
      title: 'Global Impact',
      description: '300+ free shows across 21+ countries. Major contributions to cultural preservation. Philanthropy and spiritual mentorship.',
      icon: '🌍'
    }
  ];

  return (
    <div className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-amber-400">The 31-Year Journey</h2>
        <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">From a farming village to global stages — Raghuram's relentless pursuit of cultural preservation</p>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-400 to-purple-600"></div>
          
          {/* Timeline events */}
          <div className="space-y-12">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className={`relative flex ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                {/* Content */}
                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <div className="bg-slate-800 p-6 rounded-lg border border-amber-400 border-opacity-30 hover:border-opacity-100 transition-all">
                    <div className="text-sm font-semibold text-amber-400 uppercase tracking-wide">{event.year}</div>
                    <h3 className="text-xl font-bold text-white mt-2">{event.title}</h3>
                    <p className="text-slate-300 mt-3 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>
                
                {/* Center icon/dot */}
                <div className="w-full md:w-0 flex justify-center md:justify-center">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-slate-900 rounded-full border-4 border-amber-400 flex-shrink-0">
                    <span className="text-2xl">{event.icon}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
