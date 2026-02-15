import React from 'react';
import { Link } from 'react-router-dom';

export default function Raghuram() {
  return (
    <div className="w-full bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Raghuram Shetty: <span className="text-amber-400">The Visionary</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Guru, Scholar, Athlete, Innovator, Philanthropist — One man's extraordinary journey of service and cultural preservation
            </p>
          </div>
        </div>
      </section>

      {/* Placeholder Sections for Future Development */}
      
      {/* Section 1: Early Life */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-amber-400 mb-6">The Early Years</h2>
          <div className="bg-slate-800 border-l-4 border-amber-400 p-8 rounded">
            <p className="text-slate-400 italic mb-4">Content coming soon...</p>
            <p className="text-slate-300 leading-relaxed">
              This section will explore Raghuram's childhood in India, his family background, early influences, and the experiences that shaped his visionary outlook.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Athletic Achievements */}
      <section className="py-16 md:py-24 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-amber-400 mb-6">Athletic Excellence</h2>
          <div className="bg-slate-900 border-l-4 border-amber-400 p-8 rounded">
            <p className="text-slate-400 italic mb-4">Content coming soon...</p>
            <p className="text-slate-300 leading-relaxed">
              Details about his renowned athletic accomplishments, how physical discipline shaped his character, and the energy he brings to his performances.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Spiritual & Scholarly Journey */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-amber-400 mb-6">Spiritual & Scholarly Depth</h2>
          <div className="bg-slate-800 border-l-4 border-amber-400 p-8 rounded">
            <p className="text-slate-400 italic mb-4">Content coming soon...</p>
            <p className="text-slate-300 leading-relaxed">
              Exploration of his expertise in Vedas, Upanishads, tantric philosophy, yoga, meditation, and spiritual practices that inform his teaching and performances.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Classical Arts Mastery */}
      <section className="py-16 md:py-24 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-amber-400 mb-6">Master of Classical Arts</h2>
          <div className="bg-slate-900 border-l-4 border-amber-400 p-8 rounded">
            <p className="text-slate-400 italic mb-4">Content coming soon...</p>
            <p className="text-slate-300 leading-relaxed">
              His deep training, rigorous practice, and mastery of Yakshagana, Bootakola, and other performing traditions. Stories of training and transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Tech Innovation */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-amber-400 mb-6">Tech Innovation & Invention</h2>
          <div className="bg-slate-800 border-l-4 border-amber-400 p-8 rounded">
            <p className="text-slate-400 italic mb-4">Content coming soon...</p>
            <p className="text-slate-300 leading-relaxed">
              His work in hardware and software innovation since engineering college. How technology intersects with tradition in his vision.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Philanthropy & Charity */}
      <section className="py-16 md:py-24 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-amber-400 mb-6">Philanthropy & Community Service</h2>
          <div className="bg-slate-900 border-l-4 border-amber-400 p-8 rounded">
            <p className="text-slate-400 italic mb-4">Content coming soon...</p>
            <p className="text-slate-300 leading-relaxed">
              Decades of charity work, community support, and service without seeking recognition. The heart of his mission and true measure of his impact.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Student Testimonials */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-amber-400 mb-6">What Students Say</h2>
          <p className="text-slate-400 italic mb-8">Testimonials and stories coming soon...</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map(idx => (
              <div key={idx} className="bg-slate-800 p-6 rounded border border-slate-700">
                <p className="text-slate-400 italic">Testimonial #{idx} - Coming soon</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Family & Legacy */}
      <section className="py-16 md:py-24 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-amber-400 mb-6">Family & Legacy</h2>
          <div className="bg-slate-900 border-l-4 border-amber-400 p-8 rounded">
            <p className="text-slate-400 italic mb-4">Content coming soon...</p>
            <p className="text-slate-300 leading-relaxed">
              Stories about his wife as co-founder, his children as tradition carriers, and how family is the core foundation of everything.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Back to Our Story */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Learn the Complete Story</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Want to understand Raghuram's vision, the family's journey, and the global impact? Start with our comprehensive story.
          </p>
          <Link 
            to="/our-story" 
            className="inline-block bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Back to Our Story
          </Link>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-8 bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
          <p>
            📝 <span className="text-slate-400">This page is under development. Content will be added as materials become available and are digitized from archives.</span>
          </p>
        </div>
      </section>
    </div>
  );
}
