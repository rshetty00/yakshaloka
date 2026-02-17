import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ShivaratriPerformances() {
  return (
    <div className="w-full bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Shivaratri: <span className="text-blue-400">Sacred Transformation</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              When Yakshagana becomes a vehicle for divine presence. Raghuram's Shivaratri performances across Southern California temples and spiritual centers.
            </p>
            <p className="text-lg text-slate-400 italic">
              "Art transcends entertainment. It becomes doorway to the divine."
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24 bg-slate-900 border-t-2 border-blue-400 border-opacity-30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-8">A Creative Bridge Between Tradition & Modernity</h2>
            
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 mb-8">
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Raghuram Shetty doesn't just preserve Yakshagana — he transforms it into a living spiritual practice. His Shivaratri performances across Los Angeles temples and spiritual centers represent a revolutionary approach to cultural and spiritual transmission in the West.
              </p>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Rather than confining ancient arts to academic settings or cultural shows, Raghuram creatively weaves Yakshagana into sacred spiritual ceremonies. During Shivaratri celebrations, the art form becomes a vehicle for devotion, meditation, and divine connection.
              </p>
              
              <p className="text-slate-300 text-lg leading-relaxed">
                Audiences don't merely watch—they worship. Performers don't merely entertain—they transform. This is the essence of Raghuram's vision: keeping ancient traditions alive by embedding them within the living spiritual practices of contemporary communities.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-1">
              <div className="bg-slate-900 rounded-lg p-8">
                <p className="text-slate-300 text-lg italic text-center">
                  "Through Yakshagana, the divine becomes visible. Through Shivaratri, the audience becomes devotee."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Transformation */}
      <section className="py-16 md:py-24 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-400">The Divine Transformation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: The Preparation */}
            <div className="bg-slate-900 rounded-lg p-8 border border-slate-700 hover:border-blue-400 transition-all">
              <h3 className="text-2xl font-bold text-white mb-6">The Preparation</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-3xl">🧘</span>
                  <div>
                    <p className="font-semibold text-white mb-1">Spiritual Dedication</p>
                    <p className="text-slate-400 text-sm">Hours of meditation and spiritual preparation to embody Shiva's divine consciousness.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl">🎭</span>
                  <div>
                    <p className="font-semibold text-white mb-1">Elaborate Costume & Makeup</p>
                    <p className="text-slate-400 text-sm">Rich Yakshagana costumes, intricate makeup, and sacred flower garlands prepared by Vedanta Society nuns.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl">🌙</span>
                  <div>
                    <p className="font-semibold text-white mb-1">Sacred Timing</p>
                    <p className="text-slate-400 text-sm">Performance after midnight during Shivaratri vigils when spiritual energy is at its peak.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl">🙏</span>
                  <div>
                    <p className="font-semibold text-white mb-1">Holy Intention</p>
                    <p className="text-slate-400 text-sm">Every gesture, every movement infused with intent to embody divine consciousness.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The Performance */}
            <div className="bg-slate-900 rounded-lg p-8 border border-slate-700 hover:border-blue-400 transition-all">
              <h3 className="text-2xl font-bold text-white mb-6">The Performance</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-3xl">💃</span>
                  <div>
                    <p className="font-semibold text-white mb-1">Shiva Tandava Dance</p>
                    <p className="text-slate-400 text-sm">Classical "Shiva Tandava" solo performed in Yakshagana style. Energetic, powerful, divine.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl">✨</span>
                  <div>
                    <p className="font-semibold text-white mb-1">Embodied Divinity</p>
                    <p className="text-slate-400 text-sm">Raghuram transforms himself into Shiva before the eyes of devotees in deep meditation.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl">🧘‍♂️</span>
                  <div>
                    <p className="font-semibold text-white mb-1">Shared Meditation</p>
                    <p className="text-slate-400 text-sm">After performance, Raghuram meditates with devotees who touch his feet as symbol of devotion.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl">🎶</span>
                  <div>
                    <p className="font-semibold text-white mb-1">Devotional Celebration</p>
                    <p className="text-slate-400 text-sm">Devotees dance with Shiva to live bhajans and kirtans sung by monks and devotees.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Audience */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-400">The Sacred Community</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🛕',
                title: 'Hollywood Vedanta Society',
                description: 'Renowned spiritual center in Hollywood hosting Raghuram\'s midnight Shivaratri performances during vigils and meditations.'
              },
              {
                icon: '🌏',
                title: 'Southern California Temples',
                description: 'Multiple temples and spiritual centers across the region featuring Raghuram\'s Shivaratri celebrations throughout the year.'
              },
              {
                icon: '👁️‍🗨️',
                title: 'Diverse Spiritual Seekers',
                description: 'Audiences include devotees, monks of Ramakrishna Mission, Hollywood celebrities, and spiritual practitioners from all backgrounds.'
              },
              {
                icon: '🧠',
                title: 'Advanced Spiritual Scholars',
                description: 'Monks with deep knowledge of Vedanta, Hindu scriptures, and Indian spiritual traditions experiencing transformation through art.'
              },
              {
                icon: '⭐',
                title: 'Hollywood & Entertainment Figures',
                description: 'Celebrities and media personalities drawn to the rare spiritual experience and cultural authenticity of these performances.'
              },
              {
                icon: '💫',
                title: 'Worldwide Digital Audience',
                description: 'Through social media and digital platforms, millions experience and are inspired by these sacred performances globally.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-400 transition-colors">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Impact */}
      <section className="py-16 md:py-24 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-400">The Divine Atmosphere</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900 rounded-lg p-8 border-l-4 border-blue-400">
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                What happens in these Shivaratri performances transcends typical theater or dance performance. The environment transforms into something rare and profoundly spiritual.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-800 p-6 rounded-lg">
                  <p className="font-semibold text-white mb-2">The Atmosphere</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Filled with divine presence. Devotees experience goosebumps — not from spectacle, but from genuine spiritual encounter. The boundary between performer and deity dissolves.
                  </p>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg">
                  <p className="font-semibold text-white mb-2">The Connection</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Raghuram doesn't perform as Shiva—he becomes Shiva. Devotees don't watch—they participate in worship. The ancient and the contemporary merge.
                  </p>
                </div>
              </div>

              <div className="bg-blue-600 bg-opacity-20 border border-blue-400 border-opacity-30 rounded-lg p-6">
                <p className="text-slate-300 italic text-center text-lg">
                  "After the performance, devotees dance with Shiva to the tunes of beautiful bhajans and kirtans sung live by monks and spiritual practitioners. The environment becomes sacred, divine, and highly spiritual — a transformative moment rarely found in contemporary practice."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Archive Section (2017-2026) with upload widgets */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-blue-400">10 Years of Sacred Performances</h2>
          <p className="text-center text-slate-400 mb-12 text-lg">Exclusive archive of Shivaratri performances across Southern California (2017-2026). Select a year to upload photos/videos.</p>

          <ArchiveGrid />

          <div className="mt-12 bg-slate-800 rounded-lg p-8 border border-slate-700 text-center">
            <p className="text-slate-400 mb-4">🎬 Exclusive videos and photos coming soon — upload to add to the archive</p>
            <p className="text-slate-500 text-sm">Select media files (images or videos). Files are kept client-side until you choose to transfer them to an external storage or server.</p>
          </div>
        </div>
      </section>

      {/* Innovation & Inspiration Section */}
      <section className="py-16 md:py-24 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-400">Creative Innovation in Cultural Preservation</h2>
          
          <div className="max-w-3xl mx-auto bg-slate-900 rounded-lg p-8 border border-slate-700">
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Raghuram's Shivaratri performances represent a paradigm shift in how ancient traditions can thrive in modern Western society. Instead of treating Yakshagana as a museum piece or entertainment spectacle, he has:
            </p>

            <ul className="space-y-4 mb-8">
              {[
                'Embedded the art form within living spiritual practices of contemporary communities',
                'Created spaces where ancient and modern, East and West, sacred and artistic merge naturally',
                'Demonstrated that cultural preservation doesn\'t require isolation—it requires creative integration',
                'Shown that performing arts can be vehicles for genuine spiritual transmission and transformation',
                'Leveraged social media and digital platforms to inspire millions globally',
                'Built bridges between Indian spiritual traditions and Western seekers',
                'Kept the arts alive not through academic study alone, but through lived spiritual practice'
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="text-blue-400 font-bold text-lg flex-shrink-0">✓</span>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-1">
              <div className="bg-slate-800 rounded-lg p-6">
                <p className="text-slate-300 italic text-center">
                  "This is how traditions survive and flourish: not in isolation, but by becoming relevant, alive, and transformative in the present moment."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Experience the Sacred</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
            Explore more of Raghuram's diverse contributions to performing arts, spirituality, and cultural preservation.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/our-story" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Our Complete Story
            </Link>
            <Link to="/gallery" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Photo Gallery
            </Link>
            <Link to="/yakshagana" className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Yakshagana Arts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ArchiveGrid() {
  const years = Array.from({ length: 10 }, (_, i) => 2017 + i);
  const [uploads, setUploads] = useState({});
  const [uploading, setUploading] = useState({});
  const [uploadedUrls, setUploadedUrls] = useState({});

  const hostname = window.location.hostname || '';
  const isLocal = hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '';
  const API_BASE = process.env.REACT_APP_API_BASE || (isLocal ? 'http://localhost:4000' : '');

  // Optional: allow basic auth from build-time env for dev/testing only
  const ADMIN_USER = process.env.REACT_APP_ADMIN_USER || null;
  const ADMIN_PASS = process.env.REACT_APP_ADMIN_PASS || null;

  const handleFiles = (year, fileList) => {
    const files = Array.from(fileList);
    setUploads(prev => {
      const next = { ...prev };
      next[year] = [...(next[year] || []), ...files];
      return next;
    });
  };

  const triggerInput = (year) => {
    const el = document.getElementById(`file-input-${year}`);
    if (el) el.click();
  };

  const removeFile = (year, idx) => {
    setUploads(prev => {
      const next = { ...prev };
      next[year] = (next[year] || []).filter((_, i) => i !== idx);
      return next;
    });
  };

  const [uploadError, setUploadError] = useState({});

  const uploadToServer = async (year) => {
    const files = uploads[year] || [];
    if (!files.length) return;
    setUploading(prev => ({ ...prev, [year]: 'uploading' }));

    try {
      const fd = new FormData();
      files.forEach(f => fd.append('files', f));
      const headers = {};
      if (ADMIN_USER && ADMIN_PASS) {
        const b64 = btoa(`${ADMIN_USER}:${ADMIN_PASS}`);
        headers['Authorization'] = `Basic ${b64}`;
      }
      const res = await fetch(`${API_BASE}/api/shivaratri/upload/${year}`, {
        method: 'POST',
        body: fd,
        headers
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        const msg = (data && data.error) ? data.error : `${res.status} ${res.statusText}`;
        throw new Error(msg);
      }
      // store returned URLs
      setUploadedUrls(prev => ({ ...prev, [year]: data.files || [] }));
      // clear local selections for that year
      setUploads(prev => ({ ...prev, [year]: [] }));
      setUploading(prev => ({ ...prev, [year]: 'done' }));
    } catch (err) {
      console.error('Upload error', err);
      setUploading(prev => ({ ...prev, [year]: 'error' }));
      setUploadError(prev => ({ ...prev, [year]: String(err.message || err) }));
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
      {years.map(year => (
        <div key={year} className="bg-slate-800 rounded-lg p-4 border border-slate-700 hover:border-blue-400 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-2xl font-bold text-blue-400">{year}</p>
              <p className="text-sm text-slate-300">Shivaratri Archive</p>
            </div>
            <div className="text-right">
              <button type="button" onClick={() => triggerInput(year)} className="bg-amber-400 text-slate-900 px-3 py-1 rounded text-sm font-semibold">Select</button>
            </div>
          </div>

          <input id={`file-input-${year}`} type="file" accept="image/*,video/*" multiple className="hidden" onChange={(e) => handleFiles(year, e.target.files)} />

          <div className="space-y-2">
            {(uploads[year] || []).length === 0 && (
              <div className="text-sm text-slate-400">No files selected</div>
            )}

            {(uploads[year] || []).map((f, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-slate-900 p-2 rounded">
                {f.type && f.type.startsWith('image') ? (
                  <img src={URL.createObjectURL(f)} alt={f.name} className="w-16 h-10 object-cover rounded" />
                ) : (
                  <video src={URL.createObjectURL(f)} className="w-20 h-12 object-contain rounded" muted />
                )}
                <div className="flex-1 text-left">
                  <div className="text-sm text-slate-200">{f.name}</div>
                  <div className="text-xs text-slate-400">{(f.size/1024/1024).toFixed(2)} MB</div>
                </div>
                <button onClick={() => removeFile(year, idx)} className="text-xs text-rose-400 hover:underline">Remove</button>
              </div>
            ))}

            {(uploadedUrls[year] || []).length > 0 && (
              <div className="text-xs text-slate-400">
                Uploaded: {(uploadedUrls[year] || []).length} files
              </div>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <div className="flex gap-2">
                <button disabled={(uploads[year] || []).length === 0 || uploading[year] === 'uploading'} onClick={() => uploadToServer(year)} className="bg-emerald-500 disabled:opacity-50 text-white px-3 py-1 rounded text-sm">Send to Server</button>
                {uploading[year] === 'uploading' && <div className="text-sm text-slate-300">Uploading...</div>}
                {uploading[year] === 'done' && <div className="text-sm text-green-400">Uploaded</div>}
                {uploading[year] === 'error' && <div className="text-sm text-rose-400">Upload failed</div>}
              </div>
              {uploadError[year] && <div className="text-xs text-rose-400">{uploadError[year]}</div>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
