import React from 'react';

export default function EnsembleMemberCard({ photo, name, role, instrument, bio }) {
  return (
    <div className="bg-slate-900 rounded-xl p-4 border border-amber-400/20 hover:border-amber-400/40 transition">
      <div className="flex items-center gap-4">
        <img src={photo} alt={name} className="w-16 h-16 rounded-full object-cover border border-amber-400/40" loading="lazy" />
        <div>
          <div className="text-lg font-semibold text-amber-200">{name}</div>
          <div className="text-slate-300 text-sm">{role}{instrument ? ` • ${instrument}` : ''}</div>
        </div>
      </div>
      {bio && <p className="mt-3 text-slate-400 text-sm">{bio}</p>}
    </div>
  );
}
