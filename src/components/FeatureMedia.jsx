import React, { useState, useEffect } from 'react';

const FeatureMedia = ({ media = {}, caption, fullSize = false }) => {
  const [open, setOpen] = useState(false);
  const [thumbLoaded, setThumbLoaded] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && open) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // small helper to fetch transcript text from URL
  const TranscriptFromUrl = ({ url }) => {
    const [text, setText] = useState('Loading transcript...');
    useEffect(() => {
      let mounted = true;
      fetch(url)
        .then((r) => r.text())
        .then((t) => { if (mounted) setText(t); })
        .catch(() => { if (mounted) setText('Transcript unavailable'); });
      return () => { mounted = false; };
    }, [url]);
    return <pre className="whitespace-pre-wrap text-sm mt-2">{text}</pre>;
  };

  // media: { type: 'image'|'video', src, poster, alt }
  if (media.type === 'video') {
    return (
      <figure className="w-full h-full rounded overflow-hidden shadow-lg bg-black">
        <video
          className="w-full h-full object-contain bg-black"
          controls
          poster={media.poster}
          playsInline
          controlsList="nodownload noremoteplayback"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        >
          <source src={media.src} type="video/mp4" />
          {Array.isArray(media.captions) && media.captions.map((t, i) => (
            <track key={i} kind={t.kind || 'subtitles'} srcLang={t.srclang} label={t.label} src={t.src} default={t.default} />
          ))}
          Your browser does not support the video tag.
        </video>
        {caption && <figcaption className="mt-2 text-sm text-slate-300">{caption}</figcaption>}
      </figure>
    );
  }

  // default: image with lightbox
  return (
    <>
      <figure className="w-full h-full rounded overflow-hidden shadow-lg bg-black">
          {fullSize ? (
          <div
            className="relative w-full cursor-zoom-in"
            onClick={() => setOpen(true)}
            onContextMenu={(e) => e.preventDefault()}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') setOpen(true); }}
          >
            <img
              src={media.src}
              alt={media.alt || caption || 'Ritual image'}
              className={`w-full h-auto ${thumbLoaded ? 'object-contain filter-none' : 'object-contain filter blur-sm scale-105'} transition-all duration-700`}
              loading="lazy"
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              onLoad={() => setThumbLoaded(true)}
            />
          </div>
        ) : (
          <div
            className="relative w-full h-64 sm:h-48 lg:h-56 cursor-zoom-in"
            onClick={() => setOpen(true)}
            onContextMenu={(e) => e.preventDefault()}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') setOpen(true); }}
          >
            <img
              src={media.src}
              alt={media.alt || caption || 'Ritual image'}
              className={`w-full h-full ${thumbLoaded ? 'object-cover filter-none' : 'object-cover filter blur-sm scale-105'} transition-all duration-700`}
              loading="lazy"
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              onLoad={() => setThumbLoaded(true)}
            />
          </div>
        )}
        {caption && <figcaption className="mt-2 text-sm text-slate-300">{caption}</figcaption>}
      </figure>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
          onContextMenu={(e) => e.preventDefault()}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* watermark overlay - prominent but semi-transparent */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              {/* Inline SVG watermark for crisper rendering */}
              <svg className="opacity-25 w-3/4 h-auto" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <defs>
                  <style>{`.wmText{fill:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:48px;opacity:0.2}`}</style>
                </defs>
                <text x="50%" y="50%" textAnchor="middle" className="wmText" transform="rotate(-12 400 100)">Artist: Raghuram Shetty</text>
              </svg>
            </div>

            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-3 right-3 z-60 w-10 h-10 rounded bg-black bg-opacity-50 text-white flex items-center justify-center"
            >
              ×
            </button>

            <img
              src={media.src}
              alt={media.alt || caption || 'Ritual image'}
              className="w-full h-auto rounded cursor-zoom-out"
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              onClick={() => setOpen(false)}
            />

            {caption && <div className="mt-2 text-sm text-slate-300">{caption}</div>}

            {/* transcript toggle - show if media.transcript provided (string or URL) */}
            {media.transcript && (
              <div className="mt-3">
                <details className="bg-slate-900 p-3 rounded text-slate-300">
                  <summary className="cursor-pointer">View transcript / notes</summary>
                  <div className="mt-2 text-sm">
                    {typeof media.transcript === 'string' && media.transcript.startsWith('http') ? (
                      <TranscriptFromUrl url={media.transcript} />
                    ) : (
                      <pre className="whitespace-pre-wrap">{media.transcript}</pre>
                    )}
                  </div>
                </details>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FeatureMedia;
