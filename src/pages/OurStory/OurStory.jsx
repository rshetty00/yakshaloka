import React from 'react';
import { Link } from 'react-router-dom';
import StoryTimeline from '../../components/StoryTimeline';
import TeamProfiles from '../../components/TeamProfiles';
import ImpactStats from '../../components/ImpactStats';

export default function OurStory() {
  return (
    <div className="w-full bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Our Story: One Family's <span className="text-amber-400">Mission</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              When a visionary Guru made an audacious decision to preserve and promote Yakshagana and Bootakola — ancient, complex performing arts from India — in the Western world. What followed was 31 years of relentless dedication, sacrifice, and the creation of a global movement.
            </p>
            <p className="text-lg text-slate-400 italic">
              "Not for fame. Not for recognition. But for the soul of a tradition and the betterment of humanity."
            </p>
          </div>
        </div>
      </section>

      {/* The Vision Section */}
      <section className="py-16 md:py-24 bg-slate-900 border-t-2 border-amber-400 border-opacity-30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-6">The Vision</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Yakshagana and Bootakola are not merely art forms — they are gateways to ancient wisdom, spiritual practice, and cultural identity. Yet, like many treasures of the East, they faced the risk of fading into obscurity as the world modernized.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Raghuram Shetty envisioned something radical: bring these complex, demanding arts to the West. Not as museum pieces, but as living, breathing traditions that could inspire, heal, and unite people across cultures.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                In 1994, with his family as his anchor and his unwavering faith as his compass, he took the leap. The mission: to prove that the East's richest cultural offerings could find fertile ground in the West.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-amber-600 rounded-lg p-1">
              <div className="bg-slate-900 rounded-lg p-8 text-center">
                <div className="text-6xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold text-white mb-4">Cultural Bridge</h3>
                <p className="text-slate-300">
                  Connecting the wisdom of ancient India with modern, global audiences through the transformative power of performing arts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Raghuram's Background */}
      <section className="py-16 md:py-24 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-amber-400">Raghuram: The Renaissance Man</h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">A multi-dimensional visionary shaped by diverse life experiences</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌾',
                title: 'Child of the Land',
                description: 'Born into a farming family. Understanding of hard work, patience, resilience, and harmony with nature shaped his entire worldview.'
              },
              {
                icon: '💪',
                title: 'Athlete & Performer',
                description: 'Renowned athletic background instilled discipline, endurance, and the ability to command energy and presence on any stage.'
              },
              {
                icon: '🎭',
                title: 'Master of Classical Arts',
                description: 'Highly skilled in Yakshagana, Bootakola, and 12+ ancient folk and classical dance forms. Visionary performer and choreographer.'
              },
              {
                icon: '🎬',
                title: 'Actor & Media Performer',
                description: 'Accomplished in movies, TV series, commercials, PSAs, and both Indian and Western theatrical dramas. Cross-cultural performer.'
              },
              {
                icon: '🎪',
                title: 'Director & Choreographer',
                description: 'Creative director of vibrant dance-drama independent theater productions. Innovative fusion of ancient and contemporary styles.'
              },
              {
                icon: '📱',
                title: 'Social Media Influencer',
                description: 'Leverages modern media to reach global audiences. Spreads ancient arts and spiritual wisdom through digital platforms.'
              },
              {
                icon: '🧠',
                title: 'Scholar & Researcher',
                description: 'Deep expertise in Vedas, Upanishads, epics (Ramayana, Mahabharata, Puranas), tantric philosophy, and ancient spiritual sciences.'
              },
              {
                icon: '✍️',
                title: 'Writer & Chronicler',
                description: 'Documents and preserves knowledge of performing arts traditions. Bridges ancient wisdom with contemporary understanding.'
              },
              {
                icon: '🙏',
                title: 'Spiritual Guide',
                description: 'Expert in yoga, meditation, hypnotherapy (including past life regression), and spiritual counseling. Genuine spiritual depth.'
              },
              {
                icon: '⚡',
                title: 'Tech Innovator',
                description: 'Advanced knowledge and research in hardware/software. Engineering background enables bridging ancient arts with modern technology.'
              },
              {
                icon: '❤️',
                title: 'Philanthropist',
                description: 'Decades of charity work and community service without seeking recognition or awards. Genuine compassion drives his mission.'
              },
              {
                icon: '🌱',
                title: 'Family Man',
                description: 'Foundation of his mission is his family — wife, children. Everything done with family as core, not as hindrance.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-900 rounded-lg p-6 border border-slate-700 hover:border-amber-400 transition-colors">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-amber-600 to-purple-600 rounded-lg p-1">
            <div className="bg-slate-900 rounded-lg p-8">
              <p className="text-slate-300 text-center italic text-lg">
                "These are not separate talents. They are facets of one integrated consciousness — a life dedicated to truth, beauty, and the elevation of human potential."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Component */}
      <StoryTimeline />

      {/* The Sacrifices */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-amber-400">The Sacrifices</h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">What it truly cost to build this movement</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Time & Energy',
                description: 'Decades of relentless work — teaching, performing, researching, mentoring. 31 years without pause. Time away from personal pursuits.',
                impact: 'Immeasurable personal cost'
              },
              {
                title: 'Financial Investment',
                description: 'Funding performances, travel, training centers, student support — much of it free. Building infrastructure from personal resources.',
                impact: 'Substantial financial sacrifice'
              },
              {
                title: 'Emotional Toll',
                description: 'Family separation during tours. Kids growing up in the shadow of a mission. Spouse managing home while partner pursues larger calling.',
                impact: 'Deep family commitment'
              },
              {
                title: 'Physical Toll',
                description: 'Aging warrior body pushed to limits. Decades of intense physical performance. Health challenges born from relentless dedication.',
                impact: 'Health as collateral'
              },
              {
                title: 'Societal Recognition Gap',
                description: 'Rarely recognized by mainstream. Never chased publicity. Most work unrecorded, especially early years (Hi8mm tapes lost to time).',
                impact: 'Legacy documented poorly'
              },
              {
                title: 'Personal Dreams Deferred',
                description: 'Could have pursued wealth in tech. Could have lived comfortably. Chose mission over comfort, service over success.',
                impact: 'Life entirely redirected'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800 rounded-lg p-6 border-l-4 border-amber-400">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300 mb-3">{item.description}</p>
                <div className="text-sm text-amber-400 font-semibold">→ {item.impact}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-slate-800 rounded-lg p-8 border border-slate-700">
            <p className="text-slate-300 text-center text-lg leading-relaxed">
              Yet the family never wavered. In their sacrifice lies the true story — a living example of what becomes possible when service transcends self-interest.
            </p>
          </div>
        </div>
      </section>

      {/* Team Profiles Component */}
      <TeamProfiles />

      {/* Impact Stats Component */}
      <ImpactStats />

      {/* The Arts Section */}
      <section className="py-16 md:py-24 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-amber-400">What We Preserve & Promote</h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">Ancient traditions kept alive for current and future generations</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/yakshagana" className="group">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg p-1 h-full hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                <div className="bg-slate-900 rounded-lg p-8 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">Yakshagana</h3>
                    <p className="text-slate-300 mb-4">Ancient masked theatre tradition from Karnataka. Complex, demanding art form requiring years of training.</p>
                  </div>
                  <div className="text-amber-400 font-semibold text-sm">Learn More →</div>
                </div>
              </div>
            </Link>

            <Link to="/kola-performances" className="group">
              <div className="bg-gradient-to-br from-rose-600 to-pink-600 rounded-lg p-1 h-full hover:shadow-lg hover:shadow-pink-500/50 transition-all">
                <div className="bg-slate-900 rounded-lg p-8 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">Bootakola</h3>
                    <p className="text-slate-300 mb-4">Ritual performance art rich with spiritual significance. Combines dance, music, and deep cultural ceremony.</p>
                  </div>
                  <div className="text-amber-400 font-semibold text-sm">Learn More →</div>
                </div>
              </div>
            </Link>

            <Link to="/other-arts" className="group">
              <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg p-1 h-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                <div className="bg-slate-900 rounded-lg p-8 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">Other Arts</h3>
                    <p className="text-slate-300 mb-4">Diverse classical and contemporary art forms. Celebrations of human creativity across cultures.</p>
                  </div>
                  <div className="text-amber-400 font-semibold text-sm">Learn More →</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Be Part of This Movement</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Whether you're interested in learning, volunteering, or simply supporting cultural preservation, there's a place for you in YakshalokaUS.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/gallery" className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-3 px-8 rounded-lg transition-colors">
              Explore Our Gallery
            </Link>
            <Link to="/yakshagana" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Learn About the Arts
            </Link>
            <a href="#contact" className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
