import React, { useRef, useState, useEffect } from 'react';
import BoothaVideo from 'assets/videos/ImportantKolaVideo_SpinningBeforeDance_RaghuramShettyPerformingArtistAsPunjurliBootha_0I7A0169.MP4';
import Bootha2 from 'assets/images/BoothaKola2.jpg';
import Bootha3 from 'assets/images/BoothaKola1.jpg';
import ReelVideo from 'assets/videos/RaghuramShettyBoothakolaReel_24Secs.mp4';
import ReelThumb from 'assets/images/BoothaKolaPerforamnce_WaterMarked_PanjurliWithANi_RaghuramShetty.png';


const BoothaKola = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [, setIsVisible] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [sessionWatermark, setSessionWatermark] = useState('');
  const [reelPlaying, setReelPlaying] = useState(false);
  const reelRef = useRef(null);
  const reelContainerRef = useRef(null);
  const [reelMuted, setReelMuted] = useState(true);
  const [, setReelShouldLoad] = useState(false);
  // WebAudio references for left/main video processing (gain + compressor)
  const audioCtxRef = useRef(null);
  const sourceNodeRef = useRef(null);
  const gainNodeRef = useRef(null);
  const compressorRef = useRef(null);
  const [, setIsAudioRouted] = useState(false);
  const [audioGain, setAudioGain] = useState(1.6); // default boost multiplier

  useEffect(() => {
    // generate or reuse a session ID to use as part of the watermark
    try {
      const key = 'rs_video_session';
      let sid = localStorage.getItem(key);
      if (!sid) {
        sid = Math.random().toString(36).slice(2, 9);
        localStorage.setItem(key, sid);
      }
  // Show only artist credit (no SID/timestamp) per user request
  setSessionWatermark('Artist: Raghuram Shetty IG @rshetty00');
    } catch (e) {
      // localStorage may be unavailable in some contexts
      setSessionWatermark('Artist: Raghuram Shetty IG @rshetty00');
    }

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setShouldLoad(true);
            // try to autoplay when becomes visible
            const vid = videoRef.current;
            if (vid) {
              vid.muted = true; // ensure autoplay works
              const playPromise = vid.play();
              if (playPromise && typeof playPromise.then === 'function') {
                playPromise
                  .then(() => setIsPlaying(true))
                  .catch(() => setIsPlaying(false));
              }
            }
          } else {
            setIsVisible(false);
            // pause when out of view
            const vid = videoRef.current;
            if (vid && !vid.paused) {
              vid.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);

    // fullscreenchange listener
    const onFullChange = () => {
      const fsEl = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      setIsFullscreen(!!fsEl);
    };
    document.addEventListener('fullscreenchange', onFullChange);
    document.addEventListener('webkitfullscreenchange', onFullChange);
    document.addEventListener('msfullscreenchange', onFullChange);

    return () => {
      observer.disconnect();
      document.removeEventListener('fullscreenchange', onFullChange);
      document.removeEventListener('webkitfullscreenchange', onFullChange);
      document.removeEventListener('msfullscreenchange', onFullChange);
    };
  }, []);

  // Autoplay the reel when it scrolls into view (muted). Pause when out of view.
  useEffect(() => {
    const el = reelContainerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const rv = reelRef.current;
          if (entry.isIntersecting) {
            setReelShouldLoad(true);
            if (rv) {
              try { rv.muted = true; } catch (e) {}
              const p = rv.play();
              if (p && typeof p.then === 'function') {
                p.then(() => setReelPlaying(true)).catch(() => setReelPlaying(false));
              }
            }
          } else {
            if (rv && !rv.paused) {
              rv.pause();
              setReelPlaying(false);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      const p = vid.play();
      if (p && typeof p.then === 'function') {
        p.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
      } else {
        setIsPlaying(true);
      }
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const vid = videoRef.current;
    if (!vid) return;
    const next = !isMuted;

    // If we haven't yet routed audio through WebAudio, set it up on first unmute (user gesture)
    const setupAudio = async () => {
      try {
        if (!audioCtxRef.current) {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          const ac = new AudioContext();
          audioCtxRef.current = ac;

          // create media source from the video element
          try {
            sourceNodeRef.current = ac.createMediaElementSource(vid);
          } catch (err) {
            // some browsers may throw if cross-origin – fall back to native audio
            console.warn('Could not create MediaElementSource, falling back to native audio', err);
            setIsAudioRouted(false);
            return;
          }

          // create gain and compressor nodes
          gainNodeRef.current = ac.createGain();
          gainNodeRef.current.gain.value = audioGain; // initial boost

          compressorRef.current = ac.createDynamicsCompressor();
          // gentle compressor settings to reduce dynamic range and help normalization
          compressorRef.current.threshold.setValueAtTime(-24, ac.currentTime);
          compressorRef.current.knee.setValueAtTime(30, ac.currentTime);
          compressorRef.current.ratio.setValueAtTime(8, ac.currentTime);
          compressorRef.current.attack.setValueAtTime(0.003, ac.currentTime);
          compressorRef.current.release.setValueAtTime(0.25, ac.currentTime);

          // connect: source -> gain -> compressor -> destination
          sourceNodeRef.current.connect(gainNodeRef.current);
          gainNodeRef.current.connect(compressorRef.current);
          compressorRef.current.connect(ac.destination);

          // ensure native element output is muted to avoid duplicate sound
          try { vid.muted = true; } catch (e) {}
          setIsAudioRouted(true);
        }

        // resume the audio context (required after user gesture in many browsers)
        if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
          await audioCtxRef.current.resume();
        }
      } catch (err) {
        console.error('Audio setup failed', err);
      }
    };

    if (next === false) {
      // unmute requested -> set up web audio if not already
      setupAudio().then(() => {
        // if routing works, set gain to current audioGain; otherwise unmute element
        if (audioCtxRef.current && gainNodeRef.current) {
          try { gainNodeRef.current.gain.setValueAtTime(audioGain, audioCtxRef.current.currentTime); } catch (e) {}
          setIsMuted(false);
        } else {
          // fall back to native unmute
          try { vid.muted = false; } catch (e) {}
          setIsMuted(false);
        }
        // attempt play in case browser requires it
        const p = vid.play();
        if (p && typeof p.then === 'function') {
          p.then(() => setIsPlaying(true)).catch(() => {});
        }
      });
    } else {
      // mute requested -> if web audio active, set gain to 0; else mute element
      if (audioCtxRef.current && gainNodeRef.current) {
        try { gainNodeRef.current.gain.setValueAtTime(0, audioCtxRef.current.currentTime); } catch (e) {}
        setIsMuted(true);
      } else {
        try { vid.muted = true; } catch (e) {}
        setIsMuted(true);
      }
    }
  };

  // small handler for adjusting the boost multiplier
  const onGainChange = (value) => {
    setAudioGain(value);
    if (gainNodeRef.current && audioCtxRef.current) {
      try { gainNodeRef.current.gain.setValueAtTime(value, audioCtxRef.current.currentTime); } catch (e) {}
    }
  };

  const toggleFullscreen = async () => {
    const el = containerRef.current;
    if (!el) return;
    try {
      if (!isFullscreen) {
        if (el.requestFullscreen) await el.requestFullscreen();
        else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
        else if (el.msRequestFullscreen) el.msRequestFullscreen();
      } else {
        if (document.exitFullscreen) await document.exitFullscreen();
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
        else if (document.msExitFullscreen) document.msExitFullscreen();
      }
    } catch (e) {
      // ignore or you can surface a UI error
      console.error('Fullscreen toggle failed', e);
    }
  };

  return (
    <div className="bootha-kola container mx-auto py-8">
  <h2 className="text-7xl font-bold mb-6 text-center font-easter text-yellow-500">Our BoothaKola Performances</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Responsive aspect-ratio wrapper (Tailwind's aspect-video). If your Tailwind config
            doesn't include aspect-ratio, you can replace with custom CSS. */}
        <div ref={containerRef} onContextMenu={(e) => e.preventDefault()} className="relative w-full rounded overflow-hidden shadow aspect-video">
          {/* Watermark - non-interactive, visible in fullscreen */}
          <div className="absolute left-3 top-3 pointer-events-none z-20 bg-black bg-opacity-30 text-white text-xs px-2 py-1 rounded">
            {sessionWatermark}
          </div>
          <video
            ref={videoRef}
            className="w-full h-full object-contain bg-black"
            poster={Bootha2}
            loop
            muted={isMuted}
            playsInline
            aria-label="Bootha Kola ritual video"
            controlsList="nodownload noremoteplayback"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
          >
            {shouldLoad && <source src={BoothaVideo} type="video/mp4" />}
            Your browser does not support the video tag.
          </video>

          {/* Play/Pause overlay button */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <button
              onClick={togglePlay}
              aria-pressed={isPlaying}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              className="pointer-events-auto w-16 h-16 rounded-full bg-black bg-opacity-40 flex items-center justify-center text-white transition-opacity hover:opacity-100"
            >
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 ml-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mute/Unmute + gain control */}
          <div className="absolute right-3 bottom-3 flex items-center gap-2">
            <button
              onClick={toggleMute}
              aria-pressed={!isMuted}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              className="pointer-events-auto w-10 h-10 rounded bg-black bg-opacity-40 flex items-center justify-center text-white"
            >
              {isMuted ? (
                // muted speaker icon
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.5 12c0-1.77-.77-3.36-1.98-4.46L13.5 9.56v4.88l1.02 2.02C15.73 16.36 16.5 14.77 16.5 12zM3 9v6h4l5 5V4L7 9H3z" />
                </svg>
              ) : (
                // unmuted speaker icon
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.36-1.98-4.46l-1.02 1.02c.57.6.92 1.4.92 2.44s-.35 1.84-.92 2.44l1.02 1.02C15.73 15.36 16.5 13.77 16.5 12z" />
                </svg>
              )}
            </button>

            {/* small gain slider (0.5x - 3x) to adjust normalization/boost */}
            <div className="flex items-center gap-2 px-2 py-1 rounded bg-black bg-opacity-30">
              <label className="text-xs text-white">Vol</label>
              <input
                type="range"
                min="0.5"
                max="3"
                step="0.1"
                value={audioGain}
                onChange={(e) => onGainChange(Number(e.target.value))}
                className="w-24"
                aria-label="Audio gain"
              />
            </div>
          </div>

          {/* Fullscreen button */}
          <button
            onClick={toggleFullscreen}
            aria-pressed={isFullscreen}
            aria-label={isFullscreen ? 'Exit fullscreen' : 'Open fullscreen'}
            className="absolute left-3 bottom-3 pointer-events-auto w-10 h-10 rounded bg-black bg-opacity-40 flex items-center justify-center text-white"
          >
            {isFullscreen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 16h2v2h2v2H6v-4zm10 4h-4v-2h2v-2h2v4zM6 6h4v2H8v2H6V6zm12 0v4h-2V8h-2V6h4z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 14H5v5h5v-2H7v-3zm10-4h2V5h-5v2h3v3zM7 7h3V5H5v5h2V7zm10 10v-3h2v5h-5v-2h3z" />
              </svg>
            )}
          </button>
        </div>

        {/* Reel video tile */}
        <div ref={reelContainerRef} onContextMenu={(e) => e.preventDefault()} className="w-full rounded overflow-hidden shadow aspect-video relative">
          {/* Reel poster image (shows until video plays) */}
          <img
            src={ReelThumb}
            alt="Bootha Kola reel poster"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity ${reelPlaying ? 'opacity-0' : 'opacity-100'}`}
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            onClick={() => {
              const rv = reelRef.current;
              if (!rv) return;
              // if currently muted, treat this as user gesture to unmute + play
              if (reelMuted) {
                try {
                  rv.muted = false;
                } catch (err) {}
                setReelMuted(false);
              }
              const p = rv.play();
              if (p && typeof p.then === 'function') {
                p.then(() => setReelPlaying(true)).catch(() => {});
              } else {
                setReelPlaying(true);
              }
            }}
            style={{ cursor: 'pointer' }}
          />
          {/* Watermark overlay for reel (non-interactive) */}
          <div className="absolute left-3 top-3 pointer-events-none z-20 bg-black bg-opacity-30 text-white text-xs px-2 py-1 rounded">
            {sessionWatermark}
          </div>
          <video
            ref={reelRef}
            className="w-full h-full object-contain bg-black relative"
            poster={ReelThumb}
            controls
            muted={reelMuted}
            playsInline
            controlsList="nodownload noremoteplayback"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            aria-label="Bootha Kola reel video"
            onPlay={() => setReelPlaying(true)}
            onPause={() => setReelPlaying(false)}
            onEnded={() => {
              const rv = reelRef.current;
              if (rv) {
                try {
                  rv.pause();
                  rv.currentTime = 0;
                  // reload to show poster in some browsers
                  rv.load();
                } catch (err) {
                  // ignore
                }
              }
              setReelPlaying(false);
            }}
          >
            <source src={ReelVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Play icon overlay for affordance */}
          {!reelPlaying && (
            <button
              onClick={() => {
                const rv = reelRef.current;
                if (!rv) return;
                if (reelMuted) {
                  try { rv.muted = false; } catch (e) {}
                  setReelMuted(false);
                }
                const p = rv.play();
                if (p && typeof p.then === 'function') {
                  p.then(() => setReelPlaying(true)).catch(() => {});
                } else {
                  setReelPlaying(true);
                }
              }}
              aria-label="Play reel"
              className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-black bg-opacity-40 flex items-center justify-center text-white pointer-events-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          )}
        </div>

        <div className="relative w-full rounded overflow-hidden shadow aspect-video">
          <img src={Bootha2} alt="Bootha Kola Ritual 2" className="w-full h-full object-cover" draggable={false} onDragStart={(e) => e.preventDefault()} />
          <div className="absolute left-3 top-3 pointer-events-none z-20 bg-black bg-opacity-30 text-white text-xs px-2 py-1 rounded">
            {sessionWatermark}
          </div>
        </div>
        <div className="relative w-full rounded overflow-hidden shadow aspect-video">
          <img src={Bootha3} alt="Bootha Kola Ritual 3" className="w-full h-full object-cover" draggable={false} onDragStart={(e) => e.preventDefault()} />
          <div className="absolute left-3 top-3 pointer-events-none z-20 bg-black bg-opacity-30 text-white text-xs px-2 py-1 rounded">
            {sessionWatermark}
          </div>
        </div>
      </div>
      <p className="mt-6 text-center">
        Bootha Kola is a traditional ritual from coastal Karnataka, performed to honor local deities.
      </p>

      
    </div>
  );
};

export default BoothaKola;
