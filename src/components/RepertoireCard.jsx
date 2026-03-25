import React, { useEffect, useMemo, useState } from 'react';
import YouTubeEmbed from './YouTubeEmbed';

function MediaThumb({ item, onClick, isActive }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl border bg-slate-950/70 transition-all duration-300 hover:border-amber-300/50 hover:shadow-[0_0_40px_rgba(251,191,36,0.18)] ${isActive ? 'border-amber-300/80 ring-2 ring-amber-300/40' : 'border-white/10'}`}
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        {item.type === 'youtube' ? (
          <img
            src={`https://i.ytimg.com/vi/${item.src}/hqdefault.jpg`}
            alt={item.alt || item.caption || 'Video thumbnail'}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : item.type === 'video' ? (
          <video
            src={item.src}
            poster={item.poster}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            muted
            playsInline
          />
        ) : (
          <img
            src={item.src}
            alt={item.alt || item.caption || 'Gallery item'}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/45 px-2 py-1 text-[10px] uppercase tracking-[0.28em] text-white/80">
        {item.type === 'youtube' ? 'Performance Reel' : item.type === 'video' ? 'Video' : 'Still'}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
        <div className="text-sm font-medium text-white">{item.caption || item.alt || 'Media highlight'}</div>
      </div>
    </button>
  );
}

export default function RepertoireCard({
  cover,
  title,
  origin,
  duration,
  summary,
  details,
  videoUrl,
  gallery = [],
  cast = [],
  music = [],
  accent = 'amber'
}) {
  const [open, setOpen] = useState(false);
  const [activeMedia, setActiveMedia] = useState(0);
  const [imageFocusOpen, setImageFocusOpen] = useState(false);

  const handleThumbClick = (index) => {
    setActiveMedia(index);
    requestAnimationFrame(() => {
      const featured = document.getElementById('repertoire-featured-media');
      if (featured) {
        featured.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  };

  const accentMap = {
    amber: {
      border: 'border-amber-300/30 hover:border-amber-300/60',
      glow: 'shadow-[0_0_60px_rgba(251,191,36,0.18)]',
      chip: 'text-amber-200 border-amber-300/25 bg-amber-300/10',
      title: 'from-amber-200 via-yellow-300 to-orange-400'
    },
    blue: {
      border: 'border-blue-300/30 hover:border-blue-300/60',
      glow: 'shadow-[0_0_60px_rgba(96,165,250,0.18)]',
      chip: 'text-blue-200 border-blue-300/25 bg-blue-300/10',
      title: 'from-blue-200 via-cyan-300 to-indigo-400'
    }
  };

  const theme = accentMap[accent] || accentMap.amber;

  const mediaItems = useMemo(() => {
    const items = [];
    if (videoUrl) {
      let videoId = videoUrl;
      try {
        const u = new URL(videoUrl);
        if (u.hostname.includes('youtu.be')) {
          videoId = u.pathname.slice(1);
        } else if (u.hostname.includes('youtube.com')) {
          const shortsMatch = u.pathname.match(/^\/shorts\/([a-zA-Z0-9_-]{6,})/);
          if (shortsMatch) videoId = shortsMatch[1];
          else videoId = u.searchParams.get('v') || videoUrl;
        }
      } catch (_) {
        const match = videoUrl.match(/(?:v=|\/videos\/|embed\/|shorts\/|youtu\.be\/)([a-zA-Z0-9_-]{6,})/);
        if (match) videoId = match[1];
      }
      items.push({ type: 'youtube', src: videoId, caption: 'Performance reel' });
    }
    gallery.forEach((item) => items.push(item));
    if (items.length === 0 && cover) {
      items.push({ type: 'image', src: cover, caption: title });
    }
    return items;
  }, [videoUrl, gallery, cover, title]);

  const activeItem = mediaItems[activeMedia] || mediaItems[0];

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  useEffect(() => {
    if (!open) setImageFocusOpen(false);
  }, [open]);

  return (
    <>
      <div className={`group relative overflow-hidden rounded-[28px] border bg-slate-950/80 backdrop-blur-xl ${theme.border} ${theme.glow} transition-all duration-500`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.16),transparent_25%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-black/30" />

        <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(280px,420px)_1fr] gap-0">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="relative flex min-h-[520px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_62%),linear-gradient(180deg,rgba(2,6,23,0.55),rgba(2,6,23,0.96))] p-6"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_38%,rgba(251,191,36,0.12))] opacity-80" />
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:36px_36px]" />
            <div className="relative mx-auto w-full max-w-[340px] rounded-[24px] border border-white/15 bg-black/30 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)] transition-transform duration-500 group-hover:scale-[1.02] group-hover:-rotate-1">
              <div className="overflow-hidden rounded-[18px] bg-black/50">
                <img src={cover} alt={title} className="h-full w-full object-contain" loading="lazy" />
              </div>
              <div className="absolute left-6 right-6 top-6 flex items-center justify-between">
                <span className={`rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.3em] ${theme.chip}`}>
                  {origin}
                </span>
                {duration && (
                  <span className="rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white/75">
                    {duration}
                  </span>
                )}
              </div>
              <div className="pointer-events-none absolute inset-x-8 bottom-8 rounded-2xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-md">
                <div className="text-[10px] uppercase tracking-[0.32em] text-white/65">Tap to enter</div>
                <div className="mt-1 text-sm font-medium text-white">Poster • Reel • Stills • Story world</div>
              </div>
            </div>
          </button>

          <div className="relative flex flex-col justify-between p-6 md:p-8 lg:p-10">
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className={`rounded-full border px-3 py-1 text-xs font-medium ${theme.chip}`}>
                  Signature repertoire
                </span>
                {mediaItems.length > 0 && (
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
                    {mediaItems.length} immersive media moments
                  </span>
                )}
              </div>

              <h3 className={`bg-gradient-to-r ${theme.title} bg-clip-text text-3xl font-black leading-tight text-transparent md:text-4xl`}>
                {title}
              </h3>

              {summary && (
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-200">
                  {summary}
                </p>
              )}

              {details && (
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 md:text-base">
                  {details}
                </p>
              )}
            </div>

            <div className="mt-8 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md">
                <div className="mb-3 text-xs uppercase tracking-[0.3em] text-white/50">Why this format works</div>
                <div className="grid gap-3 text-sm text-slate-300 md:grid-cols-3">
                  <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                    <div className="mb-1 text-white">Full poster first</div>
                    <div className="text-slate-400">No crop. The artwork becomes the gateway, not a thumbnail.</div>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                    <div className="mb-1 text-white">Cinematic click-open</div>
                    <div className="text-slate-400">Poster reveals reel, stills, and story in a single immersive layer.</div>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                    <div className="mb-1 text-white">Future-proof system</div>
                    <div className="text-slate-400">The same design can scale beautifully across all six repertoire pieces.</div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/20 p-5 backdrop-blur-md">
                <div className="mb-3 text-xs uppercase tracking-[0.3em] text-white/50">Creative DNA</div>
                <div className="flex flex-wrap gap-2">
                  {cast.length > 0 && (
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                      Cast: {cast.join(', ')}
                    </span>
                  )}
                  {music.length > 0 && (
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                      Music: {music.join(', ')}
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="mt-5 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500 px-5 py-3 text-sm font-bold text-slate-950 transition-transform duration-300 hover:scale-[1.02]"
                >
                  Open immersive experience
                  <span aria-hidden>↗</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[70] overflow-y-auto overscroll-y-contain bg-slate-950/90 backdrop-blur-2xl"
          role="dialog"
          aria-modal="true"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(96,165,250,0.12),transparent_24%)]" />
          <div className="relative min-h-screen px-4 py-6 md:px-8 lg:px-10">
            <div className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-slate-950/70 shadow-[0_30px_120px_rgba(0,0,0,0.5)] backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-8">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.34em] text-white/45">Immersive repertoire experience</div>
                  <div className="mt-1 text-lg font-semibold text-white md:text-2xl">{title}</div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
                >
                  Close
                </button>
              </div>

              <div className="grid gap-8 p-5 md:p-8 xl:grid-cols-[420px_1fr]">
                <div className="xl:sticky xl:top-8 xl:self-start">
                  <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                    <div className="overflow-hidden rounded-[22px] border border-white/10 bg-black/40">
                      <img src={cover} alt={title} className="w-full object-contain" />
                    </div>
                  </div>
                  <div className="mt-5 rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-white/50">Story pulse</div>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{summary}</p>
                    {details && <p className="mt-3 text-sm leading-7 text-slate-400">{details}</p>}
                  </div>
                </div>

                <div className="space-y-6">
                  {mediaItems.length > 1 && (
                    <div className="sticky top-3 z-20 flex justify-end">
                      <a
                        href="#repertoire-stills"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/55 px-4 py-2 text-xs font-medium text-white/90 shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-md transition hover:bg-black/70"
                      >
                        Jump to stills ↓
                      </a>
                    </div>
                  )}

                  <div id="repertoire-featured-media" className="rounded-[28px] border border-white/10 bg-white/[0.03] p-4 md:p-5 scroll-mt-20">
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.32em] text-white/45">Featured media</div>
                        <div className="mt-1 text-xl font-semibold text-white">Poster-led storytelling</div>
                      </div>
                      {activeItem?.type === 'youtube' ? (
                        <div className="rounded-full border border-red-300/40 bg-red-500/20 px-3 py-1 text-xs text-red-100">
                          Performance reel selected • tap play ▶
                        </div>
                      ) : (
                        <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
                          Tap image to view fullscreen
                        </div>
                      )}
                    </div>

                    <div className="overflow-hidden rounded-[24px] border border-white/10 bg-black/40 p-3">
                      {activeItem?.type === 'youtube' ? (
                        <YouTubeEmbed
                          url={`https://www.youtube.com/watch?v=${activeItem.src}`}
                          title={title}
                          large
                          showTitle
                          autoLoad
                          className="rounded-[18px]"
                        />
                      ) : activeItem?.type === 'video' ? (
                        <video
                          src={activeItem.src}
                          poster={activeItem.poster}
                          controls
                          playsInline
                          className="mx-auto max-h-[76vh] w-auto max-w-full rounded-[18px] bg-black"
                        />
                      ) : (
                        <button
                          type="button"
                          onClick={() => setImageFocusOpen(true)}
                          className="flex min-h-[62vh] w-full items-center justify-center rounded-[18px] bg-black/40 p-2 md:min-h-[72vh]"
                        >
                          <img
                            src={activeItem?.src}
                            alt={activeItem?.alt || activeItem?.caption || title}
                            className="mx-auto max-h-[84vh] w-auto max-w-full rounded-[18px] object-contain"
                          />
                        </button>
                      )}
                    </div>
                  </div>

                  {mediaItems.length > 1 && (
                    <div id="repertoire-stills" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 scroll-mt-20">
                      {mediaItems.map((item, index) => (
                        <MediaThumb
                          key={`${item.type}-${index}`}
                          item={item}
                          isActive={index === activeMedia}
                          onClick={() => handleThumbClick(index)}
                        />
                      ))}
                    </div>
                  )}

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                      <div className="text-[10px] uppercase tracking-[0.3em] text-white/50">Creative vision</div>
                      <div className="mt-3 text-sm leading-7 text-slate-300">
                        This format treats each repertoire like a premium streaming-title landing page: the poster is sacred, the reel is immediate, and the story unfolds only when the viewer chooses to enter.
                      </div>
                    </div>
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                      <div className="text-[10px] uppercase tracking-[0.3em] text-white/50">Ready for all six</div>
                      <div className="mt-3 text-sm leading-7 text-slate-300">
                        For the next repertoire pieces, we can add motion posters, character cards, review pull-quotes, and an interactive scene gallery without changing the design language.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {open && imageFocusOpen && activeItem?.type === 'image' && (
        <div
          className="fixed inset-0 z-[80] bg-black/95 p-2 md:p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setImageFocusOpen(false)}
        >
          <div className="h-full w-full flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="mb-2 flex justify-end">
              <button
                type="button"
                onClick={() => setImageFocusOpen(false)}
                className="rounded-full border border-white/15 bg-black/50 px-4 py-2 text-sm text-white"
              >
                Close fullscreen
              </button>
            </div>
            <div className="flex-1 min-h-0 flex items-center justify-center">
              <img
                src={activeItem?.src}
                alt={activeItem?.alt || activeItem?.caption || title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}