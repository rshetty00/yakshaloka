import React, { useState, useEffect } from 'react';

export default function ImpactStats() {
  const [stats, setStats] = useState([
    { number: 300, label: 'Free Shows', icon: '🎭', suffix: '+' },
    { number: 31, label: 'Years of Service', icon: '📅', suffix: '' },
    { number: 21, label: 'Countries Reached', icon: '🌍', suffix: '+' },
    { number: 1994, label: 'Year Mission Started', icon: '✨', suffix: '' }
  ]);

  const [displayNumbers, setDisplayNumbers] = useState(stats.map(s => 0));

  useEffect(() => {
    const intervals = stats.map((stat, idx) => {
      let current = 0;
      const increment = Math.max(1, Math.floor(stat.number / 50));
      
      return setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          current = stat.number;
          clearInterval(intervals[idx]);
        }
        setDisplayNumbers(prev => {
          const newNumbers = [...prev];
          newNumbers[idx] = current;
          return newNumbers;
        });
      }, 30);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  return (
    <div className="py-16 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-amber-400">By The Numbers</h2>
        <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">The magnitude of impact and unwavering commitment to cultural preservation</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-slate-800 bg-opacity-60 backdrop-blur rounded-lg p-8 text-center border border-amber-400 border-opacity-30 hover:border-opacity-100 hover:shadow-lg hover:shadow-amber-400/50 transition-all duration-300 group">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              <div className="text-5xl font-bold text-amber-400 mb-2 font-mono">
                {displayNumbers[idx]}{stat.suffix}
              </div>
              <p className="text-slate-300 font-semibold uppercase tracking-wide text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Additional impact metrics */}
        <div className="mt-16 bg-slate-800 bg-opacity-40 rounded-lg p-8 border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Broader Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">North America</div>
              <p className="text-slate-300">Primary focus with performances across USA and Canada</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400 mb-2">India</div>
              <p className="text-slate-300">Extensive contributions to cultural heritage preservation</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">Global</div>
              <p className="text-slate-300">Presentations and performances in multiple continents</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
