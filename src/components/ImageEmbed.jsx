import React from 'react';

export default function ImageEmbed({ url, showTitle = false, onClick }) {
  return (
    <figure className="relative group cursor-pointer" onClick={onClick}>
      <div className="relative overflow-hidden rounded-lg bg-slate-800">
        <img
          src={url}
          alt="Gallery image"
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {/* Watermark overlay */}
        <div className="absolute left-3 top-3 pointer-events-none z-20 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
          Artist: Raghuram Shetty IG @rshetty00
        </div>
      </div>
      {showTitle && (
        <figcaption className="mt-2 text-sm text-slate-400 truncate px-1">
          {url.split('/').pop()}
        </figcaption>
      )}
    </figure>
  );
}