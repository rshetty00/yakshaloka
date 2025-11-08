import React, { useState, useEffect, useMemo } from 'react';

/**
 * YouTubeEmbed
 * Lightweight YouTube embed with click-to-load iframe (better performance) + optional metadata fetch.
 * Props:
 *  - url: full YouTube URL (any common form)
 *  - title: fallback title
 *  - onMeta(meta): optional callback with { title, author, videoId }
 *  - large: boolean (bigger preview)
 *  - showTitle: show caption area (uses fetched title if available)
 */
export default function YouTubeEmbed({ url, title = 'YouTube video', onMeta, large = false, showTitle = false, className = '' }) {
  const [loaded, setLoaded] = useState(false);
  const [metaTitle, setMetaTitle] = useState('');
  const [metaAuthor, setMetaAuthor] = useState('');

  const videoId = useMemo(() => {
    if (!url) return null;
    try {
      const u = new URL(url);
      if (u.hostname.includes('youtu.be')) return u.pathname.slice(1);
      if (u.hostname.includes('youtube.com')) {
        const vid = u.searchParams.get('v');
        if (vid) return vid;
      }
    } catch (_) {
      // fall back to regex parse
    }
    const m = url.match(/(?:v=|\/videos\/|embed\/|youtu\.be\/)([a-zA-Z0-9_-]{6,})/);
    return m ? m[1] : null;
  }, [url]);

  // Fetch metadata (oEmbed) once we know videoId
  useEffect(() => {
    if (!videoId) return;
    let cancelled = false;
    const oembed = `https://www.youtube.com/oembed?url=${encodeURIComponent('https://www.youtube.com/watch?v=' + videoId)}&format=json`;
    fetch(oembed)
      .then(r => { if (!r.ok) throw new Error('oembed'); return r.json(); })
      .then(json => {
        if (cancelled) return;
        const t = json.title || '';
        const a = json.author_name || '';
        setMetaTitle(t);
        setMetaAuthor(a);
        if (typeof onMeta === 'function') {
          try { onMeta({ title: t, author: a, videoId }); } catch (_) {}
        }
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, [videoId, onMeta]);

  if (!videoId) {
    return (
      <div className={`bg-slate-800 text-slate-400 p-4 rounded text-sm ${className}`}>
        Invalid or empty YouTube URL
      </div>
    );
  }

  const thumb = `https://i.ytimg.com/vi/${videoId}/${large ? 'maxresdefault' : 'hqdefault'}.jpg`;
  const embedSrc = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
  const caption = metaTitle || title;

  return (
    <figure className={`youtube-embed relative rounded overflow-hidden bg-black ${className}`}>
      <div
        style={{ paddingTop: '56.25%' }}
        className="relative select-none"
        onContextMenu={(e) => e.preventDefault()}
        draggable={false}
      >
        {!loaded && (
          <button
            type="button"
            aria-label={`Play ${caption}`}
            onClick={() => setLoaded(true)}
            className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/60 text-white"
          >
            <img
              src={thumb}
              alt={caption ? `Thumbnail: ${caption}` : 'Video thumbnail'}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <svg className={`${large ? 'w-20 h-20' : 'w-14 h-14'} drop-shadow-lg relative`} viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M66.52 7.06a8.27 8.27 0 0 0-5.82-5.82C55.14 0 34 0 34 0S12.86 0 7.3 1.24A8.27 8.27 0 0 0 1.48 7.06 86.78 86.78 0 0 0 0 24a86.78 86.78 0 0 0 1.48 16.94 8.27 8.27 0 0 0 5.82 5.82C12.86 48 34 48 34 48s21.14 0 26.7-1.24a8.27 8.27 0 0 0 5.82-5.82A86.78 86.78 0 0 0 68 24a86.78 86.78 0 0 0-1.48-16.94z" fill="#f00"/>
              <path d="M45 24 27 14v20z" fill="#fff"/>
            </svg>
          </button>
        )}
        {loaded && (
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={embedSrc}
            title={caption}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      </div>
      {showTitle && (
        <figcaption className="mt-2 text-slate-200 text-xs leading-snug">
          <div className="font-semibold line-clamp-2">{caption}</div>
          {metaAuthor && <div className="text-slate-400 mt-0.5">{metaAuthor}</div>}
        </figcaption>
      )}
    </figure>
  );
}
