import React from 'react';

export default function RepertoireCard({ cover, title, origin, duration, summary, cast = [], music = [] }) {
  return (
    <div className="group bg-slate-900 rounded-xl overflow-hidden border border-amber-400/20 hover:border-amber-400/40 transition-all shadow-lg hover:shadow-amber-400/10">
      <div className="relative">
        <img src={cover} alt={title} className="w-full h-48 object-cover" loading="lazy" />
        <div className="absolute left-3 top-3 bg-black/60 text-amber-200 text-xs px-2 py-1 rounded">{origin}</div>
        {duration && <div className="absolute right-3 bottom-3 bg-black/60 text-slate-100 text-xs px-2 py-1 rounded">{duration}</div>}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-amber-200">{title}</h3>
        {summary && <p className="mt-2 text-slate-300 text-sm">{summary}</p>}
        {(cast.length > 0 || music.length > 0) && (
          <div className="mt-3 flex flex-wrap gap-2">
            {cast.length > 0 && (
              <span className="text-xs bg-slate-800 text-slate-200 px-2 py-1 rounded border border-slate-700">
                Cast: {cast.join(', ')}
              </span>
            )}
            {music.length > 0 && (
              <span className="text-xs bg-slate-800 text-slate-200 px-2 py-1 rounded border border-slate-700">
                Music: {music.join(', ')}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
