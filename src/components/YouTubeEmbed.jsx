import React, { useState, useMemo, useEffect } from 'react';

// Lightweight responsive YouTube embed with click-to-load (deferred iframe)
// Now also fetches oEmbed metadata to display the video's title.
// Accepts `large` prop to render a slightly larger preview variant for the preview panel.
export default function YouTubeEmbed({ url, title = 'YouTube video', className = '', showTitle = true, onMeta, large = false }) {
  const [loaded, setLoaded] = useState(false);
  const [metaTitle, setMetaTitle] = useState('');
  const [metaAuthor, setMetaAuthor] = useState('');

  const videoId = useMemo(() => {
    if (!url) return null;
    // common YouTube URL patterns
    const m = url.match(/(?:v=|\/videos\/|embed\/|youtu\.be\/)([a-zA-Z0-9_-]{6,})/);
    return m ? m[1] : null;
  }, [url]);

  useEffect(() => {
    if (!videoId) return;
    let cancelled = false;
    const oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent('https://www.youtube.com/watch?v=' + videoId)}&format=json`;
    fetch(oembedUrl)
      .then((res) => {
        if (!res.ok) throw new Error('oembed fetch failed');
        return res.json();
      })
      .then((json) => {
        if (cancelled) return;
        const t = json.title || '';
        const a = json.author_name || '';
        setMetaTitle(t);
        setMetaAuthor(a);
        if (typeof onMeta === 'function') {
          try { onMeta({ title: t, author: a, videoId }); } catch (e) { /* ignore */ }
        }
      })
      .catch(() => {
        // ignore; we'll fallback to provided title prop
      });

    return () => { cancelled = true; };
  }, [videoId, onMeta]);

  if (!videoId) {
    return (
      <div className={`bg-slate-800 rounded overflow-hidden p-4 text-slate-400 ${className}`} role="region" aria-label="Invalid YouTube URL">
        <div>Invalid or empty YouTube URL</div>
      </div>
    );
  }

  const thumb = `https://i.ytimg.com/vi/${videoId}/${large ? 'maxresdefault' : 'hqdefault'}.jpg`;
  const embedSrc = `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0${large ? '&modestbranding=1' : ''}`;

  const caption = metaTitle || title;

  return (
    <figure className={`youtube-embed relative rounded overflow-hidden bg-black ${className}`}>
      <div
        style={{ paddingTop: '56.25%' }}
        className="relative"
        onContextMenu={(e) => e.preventDefault()}
        draggable={false}
      >
        {!loaded && (
          <button
            type="button"
            aria-label={`Play ${caption}`}
            onClick={() => setLoaded(true)}
            className="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 text-white"
          >
            <img src={thumb} alt={`Thumbnail for ${caption}`} className="absolute inset-0 w-full h-full object-cover" />
            <svg className={`${large ? 'w-20 h-20' : 'w-14 h-14'} drop-shadow-lg z-10`} viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg">
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
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        )}
      </div>

      {showTitle && (
        <figcaption className="mt-2 text-slate-200 text-sm">
          <div className="font-semibold">{caption}</div>
          {metaAuthor && <div className="text-slate-400 text-xs">{metaAuthor}</div>}
        </figcaption>
      )}
    </figure>
  );
}
