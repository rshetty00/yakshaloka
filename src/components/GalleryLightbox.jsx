import React, { useState, useEffect } from 'react';

// items: [{ type: 'image'|'video', src, poster, alt, caption, transcript, captions }]
export default function GalleryLightbox({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    function onKey(e) {
      if (openIndex === null) return;
      if (e.key === 'Escape') setOpenIndex(null);
      if (e.key === 'ArrowLeft') setOpenIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length));
      if (e.key === 'ArrowRight') setOpenIndex((i) => (i === null ? null : (i + 1) % items.length));
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openIndex, items.length]);

  if (!items || items.length === 0) return null;

  const open = (index) => setOpenIndex(index);
  const close = () => setOpenIndex(null);
  const next = () => setOpenIndex((i) => (i === null ? null : (i + 1) % items.length));
  const prev = () => setOpenIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length));

  const current = openIndex !== null ? items[openIndex] : null;

  return (
    <div className="gallery-lightbox">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, idx) => (
          <button
            key={idx}
            onClick={() => open(idx)}
            className="relative w-full h-48 bg-black rounded overflow-hidden focus:outline-none focus:ring-2 focus:ring-amber-400"
            onContextMenu={(e) => e.preventDefault()}
            aria-label={`Open gallery item ${idx + 1}`}
          >
            {it.type === 'video' ? (
              <video
                src={it.src}
                poster={it.poster}
                className="w-full h-full object-cover"
                preload="metadata"
                muted
                playsInline
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
              />
            ) : (
              <img
                src={it.src}
                alt={it.alt || it.caption || `gallery-${idx + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
              />
            )}
            {/* small watermark corner */}
            <div className="absolute bottom-2 right-2 text-xs text-white bg-black bg-opacity-40 px-2 py-1 rounded">R. Shetty</div>
          </button>
        ))}
      </div>

      {openIndex !== null && current && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black bg-opacity-90 p-4"
          role="dialog"
          aria-modal="true"
          onClick={close}
          onContextMenu={(e) => e.preventDefault()}
        >
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* watermark overlay */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <svg className="opacity-20 w-3/4 h-auto" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <defs>
                  <style>{`.wmText{fill:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:48px;opacity:0.18}`}</style>
                </defs>
                <text x="50%" y="50%" textAnchor="middle" className="wmText" transform="rotate(-10 400 100)">Raghuram Shetty</text>
              </svg>
            </div>

            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-3 right-3 z-70 w-10 h-10 rounded bg-black bg-opacity-50 text-white flex items-center justify-center"
            >
              ×
            </button>

            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 z-70 w-10 h-10 rounded bg-black bg-opacity-50 text-white flex items-center justify-center"
            >
              ‹
            </button>

            <button
              onClick={next}
              aria-label="Next"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 z-70 w-10 h-10 rounded bg-black bg-opacity-50 text-white flex items-center justify-center"
            >
              ›
            </button>

            <div className="w-full">
              {current.type === 'video' ? (
                <video
                  src={current.src}
                  poster={current.poster}
                  controls
                  playsInline
                  className="w-full h-auto max-h-[80vh] bg-black rounded"
                  controlsList="nodownload noremoteplayback"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                >
                  {Array.isArray(current.captions) && current.captions.map((t, i) => (
                    <track key={i} kind={t.kind || 'subtitles'} srcLang={t.srclang} label={t.label} src={t.src} default={t.default} />
                  ))}
                </video>
              ) : (
                <img
                  src={current.src}
                  alt={current.alt || current.caption || 'gallery item'}
                  className="w-full h-auto max-h-[80vh] object-contain rounded"
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                />
              )}

              {current.caption && <div className="mt-2 text-sm text-slate-300">{current.caption}</div>}

              {current.transcript && (
                <details className="bg-slate-900 p-3 rounded mt-3 text-slate-300">
                  <summary className="cursor-pointer">View transcript / notes</summary>
                  <div className="mt-2 text-sm whitespace-pre-wrap">
                    {typeof current.transcript === 'string' && current.transcript.startsWith('http') ? (
                      <iframe title="transcript" src={current.transcript} className="w-full h-48" />
                    ) : (
                      <pre className="whitespace-pre-wrap">{current.transcript}</pre>
                    )}
                  </div>
                </details>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
