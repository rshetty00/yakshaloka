import React from 'react';

export default function TeamProfiles() {
  const teamMembers = [
    {
      name: 'Raghuram Shetty',
      title: 'Founder & Guru',
      roles: ['🎭 Classical Arts Master', '💪 Athlete & Performer', '🧠 Scholar & Researcher', '⚡ Tech Innovator', '🙏 Spiritual Guide', '❤️ Philanthropist'],
      description: 'The visionary founder who brought Yakshagana and Bootakola to the Western world. A multi-talented renaissance man with 31 years of dedicated service to preserving and promoting these ancient arts.',
      color: 'from-amber-500 to-orange-600'
    },
    {
      name: 'Raghuram\'s Wife',
      title: 'Co-Founder & Pillar',
      roles: ['🤝 Co-Founder', '👨‍👩‍👧‍👦 Family Leader', '🎯 Operations', '💝 Community Support'],
      description: 'The steadfast pillar of the family and organization. Essential partner in building YakshalokaUS, supporting the mission through sacrifices and unwavering dedication.',
      color: 'from-rose-500 to-pink-600'
    },
    {
      name: 'Shetty Family Children',
      title: 'Next Generation Leaders',
      roles: ['🎭 Performers & Practitioners', '👨‍🎓 Educators', '🌱 Tradition Carriers', '🌍 Global Ambassadors'],
      description: 'Growing up in the shadow of a profound mission, the next generation carries forward the legacy while blending traditional wisdom with contemporary innovation.',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      name: 'Global Student Community',
      title: 'Movement Carriers',
      roles: ['🌍 Diverse Backgrounds', '🎓 Dedicated Learners', '🎭 Performers', '🤝 Family'],
      description: 'Students from around the world who have dedicated themselves to learning these complex arts, becoming ambassadors of cultural preservation and cross-cultural understanding.',
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  return (
    <div className="py-16 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-amber-400">The Family & Community</h2>
        <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">One family's sacrifice. A global movement of preservation and cultural bridge-building.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="bg-slate-900 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-slate-700 hover:border-amber-400">
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${member.color} h-32 relative`}>
                <div className="absolute inset-0 opacity-20 bg-pattern"></div>
              </div>
              
              {/* Content */}
              <div className="p-6 relative -mt-12">
                {/* Name & Title */}
                <div className="bg-slate-800 rounded-lg p-4 mb-4 border border-slate-700">
                  <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                  <p className="text-amber-400 font-semibold text-sm uppercase tracking-wide">{member.title}</p>
                </div>
                
                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-4">{member.description}</p>
                
                {/* Roles/Tags */}
                <div className="flex flex-wrap gap-2">
                  {member.roles.map((role, roleIdx) => (
                    <span key={roleIdx} className="inline-block bg-slate-700 text-slate-100 px-3 py-1 rounded-full text-xs font-medium hover:bg-amber-500 hover:text-slate-900 transition-colors">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
