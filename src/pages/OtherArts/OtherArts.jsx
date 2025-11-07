import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as RouterDOM from 'react-router-dom';
import YouTubeEmbed from '../../components/YouTubeEmbed';
import AuthModal from '../../components/AuthModal';

const { Link } = RouterDOM;

export default function OtherArts() {
  const [urls, setUrls] = useState([]);

  // singleInput was removed (not used) — keep fileRef for import button
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editingValue, setEditingValue] = useState('');
  const [titles, setTitles] = useState({});

  const STORAGE_KEY = 'otherArts.urls';
  const fileRef = useRef(null);
  // loadSource was used during development to indicate where initial data came from;
  // we keep the behavior but don't store it in state since it's not used elsewhere.
  const [showTitles, setShowTitles] = useState(() => {
    try { return localStorage.getItem('otherArts.showTitles') === '1'; } catch(e){return false}
  });
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const headerVariants = [
    { id: 'voices', title: 'Voices & Movements: Other Performances', subtitle: 'A curated collection of plays, dances and ritual arts.' },
    { id: 'heritage', title: 'Heritage Performance Showcase', subtitle: 'Selected theatre, folk and classical performances from our region.' },
    { id: 'stage', title: 'Stage & Dance Highlights', subtitle: 'Spotlight: theatre, dance and ritual recordings.' },
  ];
  const [headerVariant, setHeaderVariant] = useState(() => {
    try { return localStorage.getItem('otherArts.headerVariant') || 'voices'; } catch(e){return 'voices'}
  });
  const [viewMode, setViewMode] = useState(() => {
    try { return localStorage.getItem('otherArts.viewMode') || 'optionA'; } catch (e) { return 'optionA'; }
  });
  const [isAdmin, setIsAdmin] = useState(() => {
    try {
      // if an admin auth header is present in sessionStorage, consider admin session active
      const a = sessionStorage.getItem('otherArts.adminAuth');
      if (a) return true;
      return sessionStorage.getItem('otherArts.isAdmin') === '1';
    } catch (e) { return false; }
  });
  const [adminPanelOpen, setAdminPanelOpen] = useState(false);
  const [adminAuth, setAdminAuth] = useState(() => {
    try { return sessionStorage.getItem('otherArts.adminAuth') || null; } catch (e) { return null; }
  }); // Basic auth header when provided
  const [adminAddUrl, setAdminAddUrl] = useState(''); // single-URL add box (admin only)
  const [adminAuthLast, setAdminAuthLast] = useState(null); // debug: last admin auth attempt details
  const SERVER_BASE = process.env.REACT_APP_OTHER_ARTS_SERVER || 'http://localhost:4000';

  // Load persisted URLs from localStorage on mount
  useEffect(() => {
    let mounted = true;

    (async function tryLoad() {
      // Load local copy first so a vacant/empty server copy doesn't erase the user's saved list.
      let hasLocal = false;
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && mounted) {
            setUrls(parsed);
            hasLocal = parsed.length > 0;
          }
        }
      } catch (err) {
        // ignore malformed storage
      }

      // Then attempt to fetch a server copy — only replace local if the server returns a non-empty list.
      try {
        const res = await fetch(`${SERVER_BASE}/api/other-arts`);
        if (res.ok) {
          const json = await res.json();
            if (json && Array.isArray(json.data) && json.data.length > 0) {
            if (!mounted) return;
            setUrls(json.data);
            setServerAvailable(true);
            return;
          }
          // server returned OK but empty; keep local copy (if any)
          setServerAvailable(true);
        }
      } catch (err) {
        // server not available — keep whatever is in localStorage
        setServerAvailable(false);
      }

      // If nothing loaded from server/local, try a static baked-in fallback (public/data/other-arts.json)
      try {
        if (mounted) {
          if (!hasLocal) {
            const staticRes = await fetch((process.env.PUBLIC_URL || '') + '/data/other-arts.json');
            if (staticRes.ok) {
              const staticJson = await staticRes.json();
              if (Array.isArray(staticJson) && staticJson.length > 0) {
                setUrls(staticJson);
              }
            }
          }
        }
      } catch (err) {
        // ignore static fallback errors
      }
    })();

    return () => { mounted = false; };
  }, [SERVER_BASE]);

  // Persist whenever urls changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(urls));
    } catch (err) {
      // storage full or disabled — ignore
    }
  }, [urls]);

  // loadFromText / addUrlSingle removed (not used)

  function finalizePendingDeletion() {
    if (!pendingDeletion) return;
    if (pendingDeletion.timer) clearTimeout(pendingDeletion.timer);
    setPendingDeletion(null);
    setPauseAutoSync(false);
    // If autoSync is enabled, push the current state to server now that deletion is finalized
    if (autoSync) saveToServer(urls);
  }

  function deleteUrl(idx) {
    if (!window.confirm('Delete this URL from the curated list?')) return;
    // If there's already a pending deletion, finalize it immediately
    if (pendingDeletion) finalizePendingDeletion();

    const urlToDelete = urls[idx];
    const newList = urls.filter((_, i) => i !== idx);
    setUrls(newList);
    setSelectedIndex((prev) => {
      if (newList.length === 0) return -1;
      if (prev === idx) return Math.min(idx, newList.length - 1);
      if (prev > idx) return prev - 1;
      return prev;
    });
    setPauseAutoSync(true);

    const t = setTimeout(() => {
      // finalize after delay
      setPendingDeletion((prev) => {
        if (!prev) return null;
        return null;
      });
      setPauseAutoSync(false);
    }, 6000);

    setPendingDeletion({ url: urlToDelete, index: idx, timer: t });
  }

  function undoDelete() {
    if (!pendingDeletion) return;
    const { url, index, timer } = pendingDeletion;
    if (timer) clearTimeout(timer);
    setUrls((s) => {
      const copy = s.slice();
      const insertAt = Math.min(index, copy.length);
      copy.splice(insertAt, 0, url);
      return copy;
    });
    setSelectedIndex((prev) => {
      // If nothing was previously selected, move selection to restored item
      if (prev === -1) return Math.min(index, urls.length);
      return prev;
    });
    setPendingDeletion(null);
    setPauseAutoSync(false);
  }

  function replaceUrl(idx, newUrl) {
    setUrls((s) => s.map((it, i) => (i === idx ? newUrl : it)));
  }

  function exportJson() {
    try {
      const blob = new Blob([JSON.stringify(urls, null, 2)], { type: 'application/json' });
      const urlObj = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = urlObj;
      a.download = 'other-arts-urls.json';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(urlObj);
    } catch (err) {
      // nothing
    }
  }

  function importJson(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target.result);
        if (Array.isArray(parsed)) setUrls(parsed.map(String));
      } catch (err) {
        // ignore parse errors
      }
    };
    reader.readAsText(file);
  }

  // Basic helpers for admin Add URL
  function _normalizeUrl(u) {
    let s = (u || '').trim();
    if (!/^https?:\/\//i.test(s)) s = 'https://' + s;
    return s;
  }

  function _looksLikeYouTube(u) {
    try {
      const o = new URL(u);
      return /youtube\.com|youtu\.be/.test(o.hostname) || /youtube\.com/.test(o.href) || /youtu\.be/.test(o.href);
    } catch (e) {
      return /youtube\.com|youtu\.be/.test(u);
    }
  }

  async function addUrl() {
    const raw = (adminAddUrl || '').trim();
    if (!raw) {
      showToast({ type: 'error', message: 'Please paste a YouTube URL' });
      return;
    }
    const normalized = _normalizeUrl(raw);
    if (!_looksLikeYouTube(normalized)) {
      showToast({ type: 'error', message: 'Please enter a YouTube URL (youtube.com or youtu.be)' });
      return;
    }
    if (urls.includes(normalized)) {
      showToast({ type: 'error', message: 'This URL is already in the curated list' });
      return;
    }

    const newList = urls.concat([normalized]);
    setUrls(newList);
    setAdminAddUrl('');
    showToast({ type: 'success', message: 'URL added to list' });

    // If autoSync is enabled, attempt to save immediately
    if (autoSync && !pauseAutoSync) {
      setAutoSyncStatus('saving');
      const ok = await saveToServer(newList);
      if (ok) setAutoSyncStatus('saved'); else setAutoSyncStatus('error');
    }
  }


  // Server sync helpers (local server at http://localhost:4000)
  const [serverAvailable, setServerAvailable] = useState(null);
  const [autoSync, setAutoSync] = useState(false);
  const [pauseAutoSync, setPauseAutoSync] = useState(false);
  const [pendingDeletion, setPendingDeletion] = useState(null); // { url, index, timer }
  const [toast, setToast] = useState(null); // { type: 'success'|'error', message: string, actionLabel?: string, action?: fn }

  // keep a sensible selection when list changes
  useEffect(() => {
    if (urls.length === 0) {
      setSelectedIndex(-1);
      return;
    }
    setSelectedIndex((prev) => {
      if (prev === -1) return 0;
      if (prev >= urls.length) return urls.length - 1;
      return prev;
    });
  }, [urls]);

  const showToast = useCallback((t) => {
    setToast(t);
    if (t && !t.sticky) {
      setTimeout(() => setToast(null), t.duration || 5000);
    }
  }, []);

  // Auth modal state for Basic Auth flows
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [pendingSave, setPendingSave] = useState(null); // list to save after providing creds
  const [autoSyncStatus, setAutoSyncStatus] = useState('idle'); // 'idle'|'saving'|'saved'|'error'

  const loadFromServer = useCallback(async () => {
    try {
      const res = await fetch(`${SERVER_BASE}/api/other-arts`);
      if (!res.ok) throw new Error('server error');
      const json = await res.json();
      if (json && Array.isArray(json.data)) {
        setUrls(json.data);
        setServerAvailable(true);
      }
    } catch (err) {
      setServerAvailable(false);
    }
  }, [SERVER_BASE]);

  const saveToServer = useCallback(async (list, opts = { notify: true }) => {
    try {
      if (opts.notify === false) setAutoSyncStatus('saving');
      const res = await fetch(`${SERVER_BASE}/api/other-arts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...(adminAuth ? { Authorization: adminAuth } : {}) },
        body: JSON.stringify(list)
      });

      // If server requires Basic auth (401), open modal and queue pending save
      if (res.status === 401) {
        setPendingSave({ list, opts });
        setAuthModalOpen(true);
        setServerAvailable(false);
        if (opts.notify) showToast({ type: 'error', message: 'Authentication required', actionLabel: 'Enter credentials', action: () => setAuthModalOpen(true), sticky: true });
        if (opts.notify === false) setAutoSyncStatus('error');
        return false;
      }

      if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(text || res.statusText || 'save failed');
      }
      setServerAvailable(true);
      if (opts.notify) showToast({ type: 'success', message: 'Saved to server' });
      if (opts.notify === false) setAutoSyncStatus('saved');
      return true;
    } catch (err) {
      console.error('saveToServer error', err);
      setServerAvailable(false);
      if (opts.notify) showToast({ type: 'error', message: 'Failed to save to server: ' + (err && err.message ? err.message : 'network error'), actionLabel: 'Retry', action: () => saveToServer(list, opts), sticky: true });
      if (opts.notify === false) setAutoSyncStatus('error');
      return false;
    }
  }, [SERVER_BASE, adminAuth, showToast]);

  // wrapper used by UI to confirm explicit save
  async function handleSaveToServer() {
    if (!window.confirm('Save current curated list to server? This will overwrite the server copy.')) return;
    await saveToServer(urls, { notify: true });
  }

  // Admin auth flow: open modal and set session flag if credentials provided
  async function handleAdminAuth(user, pass) {
    // validate credentials with server-side admin endpoint
    const header = 'Basic ' + btoa(`${user}:${pass}`);
    console.log('[Admin Auth] Attempting login with user:', user);
    console.log('[Admin Auth] Server base:', SERVER_BASE);
    try {
      const startedAt = new Date().toISOString();
      const res = await fetch(`${SERVER_BASE}/api/admin-auth`, {
        method: 'POST',
        headers: { Authorization: header }
      });
      console.log('[Admin Auth] Response status:', res.status, res.statusText);
      if (!res.ok) {
        const txt = await res.text().catch(() => '');
        console.error('[Admin Auth] Login failed:', txt || res.statusText);
        setAdminAuthLast({
          ts: startedAt,
          server: SERVER_BASE,
          user,
          status: res.status,
          statusText: res.statusText,
          response: (txt || null)
        });
        showToast({ type: 'error', message: 'Admin authentication failed: ' + (txt || res.statusText || res.status), sticky: true });
        return;
      }
      // success
      console.log('[Admin Auth] Login successful!');
      setAdminAuthLast({ ts: startedAt, server: SERVER_BASE, user, status: res.status, ok: true });
      setAdminAuth(header);
      setIsAdmin(true);
      try { sessionStorage.setItem('otherArts.isAdmin', '1'); sessionStorage.setItem('otherArts.adminAuth', header); } catch (e) {}
      showToast({ type: 'success', message: 'Admin access granted (session)' });
      setAuthModalOpen(false);
      setAdminPanelOpen(true);
    } catch (e) {
      console.error('[Admin Auth] Network error:', e);
      setAdminAuthLast({ ts: new Date().toISOString(), server: SERVER_BASE, user, error: e && e.message ? e.message : String(e) });
      showToast({ type: 'error', message: 'Network error: ' + (e && e.message ? e.message : 'network'), sticky: true });
    }
  }

  function handleAdminLogout() {
    setIsAdmin(false);
    setAdminAuth(null);
    setAdminPanelOpen(false);
    try {
      sessionStorage.removeItem('otherArts.isAdmin');
      sessionStorage.removeItem('otherArts.adminAuth');
    } catch (e) {}
    showToast({ type: 'success', message: 'Admin session cleared' });
  }

  // Drag & drop reordering handlers
  function handleDragStart(e, idx) {
    e.dataTransfer.setData('text/plain', String(idx));
    e.dataTransfer.effectAllowed = 'move';
  }

  function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }

  function handleDrop(e, destIdx) {
    e.preventDefault();
    const src = Number(e.dataTransfer.getData('text/plain'));
    if (Number.isNaN(src)) return;
    if (src === destIdx) return;
    setUrls((s) => {
      const copy = s.slice();
      const [moved] = copy.splice(src, 1);
      copy.splice(destIdx, 0, moved);
      return copy;
    });
  }

  // If autoSync enabled, push updates to server when urls change
  useEffect(() => {
    if (!autoSync || pauseAutoSync) return;
    saveToServer(urls, { notify: false });
  }, [urls, autoSync, pauseAutoSync, saveToServer]);

  return (
    <div className="other-arts container mx-auto py-8">
      <header className="mb-8">
        {/* dynamic header title/subtitle from variants */}
        <h1 className="text-4xl text-amber-300 font-semibold">{(headerVariants.find(h=>h.id===headerVariant)||headerVariants[0]).title}</h1>
        <p className="text-slate-300 mt-2">{(headerVariants.find(h=>h.id===headerVariant)||headerVariants[0]).subtitle}</p>
        <p className="text-slate-400 mt-2 text-sm">For the ritual media please visit the <Link to="/bootharituals" className="text-amber-300 underline">Bootha Rituals</Link> page.</p>
      </header>

      <section>
        {urls.length === 0 ? (
          <div className="bg-slate-900 rounded p-6 text-slate-300">No videos loaded yet — paste YouTube URLs above and click Load.</div>
        ) : (
          viewMode === 'optionA' ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left: list */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {urls.map((u, i) => (
                    <div
                      key={i}
                      className={`relative bg-slate-900 rounded overflow-hidden border ${selectedIndex === i ? 'border-amber-400' : 'border-transparent'}`}
                      aria-label={titles[u] || u}
                      draggable
                      onDragStart={(e) => handleDragStart(e, i)}
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleDrop(e, i)}
                      onClick={() => setSelectedIndex(i)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedIndex(i); }}
                    >
                      <YouTubeEmbed url={u} title={`Other Arts video ${i + 1}`} onMeta={(m) => setTitles(prev => ({ ...prev, [u]: m.title || '' }))} showTitle={showTitles} />

                      <div className="p-3 bg-slate-800 flex items-center gap-3">
                        <div className="flex-1">
                          {editingIndex === i ? (
                            <input className="w-full bg-slate-700 text-slate-100 rounded p-2 min-w-0" value={editingValue} onChange={(e) => setEditingValue(e.target.value)} />
                          ) : (
                            <>
                              <span className="sr-only">{titles[u] || (() => {
                                const short = (() => {
                                  try {
                                    const urlObj = new URL(u);
                                    return urlObj.hostname + urlObj.pathname.replace(/\/\/ .*/, '/…');
                                  } catch (e) { return u.slice(0, 40) + (u.length > 40 ? '…' : ''); }
                                })();
                                return titles[u] ? titles[u] : short;
                              })()}</span>

                              {!showTitles && (
                                <div className="text-slate-300 text-sm truncate mr-3 min-w-0" title={u}>{(titles[u] || (() => {
                                  const short = (() => {
                                    try {
                                      const urlObj = new URL(u);
                                      return urlObj.hostname + urlObj.pathname.replace(/\/\/ .*/, '/…');
                                    } catch (e) { return u.slice(0, 40) + (u.length > 40 ? '…' : ''); }
                                  })();
                                  return titles[u] ? titles[u] : short;
                                })())}</div>
                              )}
                            </>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <button onClick={(e) => { e.stopPropagation(); navigator.clipboard && navigator.clipboard.writeText(u); }} className="text-slate-400 text-sm ml-2 px-2">📋</button>
                        </div>

                        <div className="absolute top-2 right-2 flex gap-2 z-30">
                          {editingIndex === i ? (
                            <>
                              <button onClick={(e) => { e.stopPropagation(); replaceUrl(i, editingValue); setEditingIndex(-1); setEditingValue(''); }} className="bg-amber-400 text-black px-3 py-1 rounded">Save</button>
                              <button onClick={(e) => { e.stopPropagation(); setEditingIndex(-1); setEditingValue(''); }} className="bg-slate-600 text-slate-200 px-3 py-1 rounded">Cancel</button>
                              <button onClick={(e) => { e.stopPropagation(); deleteUrl(i); }} className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
                            </>
                          ) : (
                            <>
                              <button onClick={(e) => { e.stopPropagation(); setEditingIndex(i); setEditingValue(u); }} className="bg-slate-700 text-slate-200 px-3 py-1 rounded">Edit</button>
                              <button onClick={(e) => { e.stopPropagation(); deleteUrl(i); }} className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: preview */}
              <div className="lg:col-span-1">
                <div className="sticky top-20 bg-slate-900 rounded p-4">
                  <div className="text-slate-300 text-sm mb-3">Preview</div>
                  {selectedIndex >= 0 && urls[selectedIndex] ? (
                    <div>
                      <YouTubeEmbed url={urls[selectedIndex]} title={`Preview`} onMeta={(m) => setTitles(prev => ({ ...prev, [urls[selectedIndex]]: m.title || '' }))} large showTitle={showTitles} />
                      <div className="mt-3 flex gap-2">
                        <button onClick={() => { navigator.clipboard && navigator.clipboard.writeText(urls[selectedIndex]); showToast({ type: 'success', message: 'Copied URL' }); }} className="bg-slate-700 text-slate-200 px-3 py-1 rounded">Copy</button>
                        <button onClick={() => { setEditingIndex(selectedIndex); setEditingValue(urls[selectedIndex]); }} className="bg-amber-400 text-black px-3 py-1 rounded">Edit</button>
                        <button onClick={() => deleteUrl(selectedIndex)} className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
                        <button onClick={() => handleSaveToServer()} className="bg-emerald-600 text-white px-3 py-1 rounded">Save</button>
                      </div>
                      {!showTitles && (
                        <div className="mt-2 text-xs text-slate-400">Title: {titles[urls[selectedIndex]] || '—'}</div>
                      )}
                    </div>
                  ) : (
                    <div className="text-slate-500">Select a video from the list to preview it here.</div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* Masonry view */
            <div className="space-y-6">
              {/* stacked preview for masonry mode */}
              <div className="bg-slate-900 rounded p-4">
                <div className="text-slate-300 text-sm mb-2">Preview (Masonry)</div>
                {selectedIndex >= 0 && urls[selectedIndex] ? (
                  <div>
                    <YouTubeEmbed url={urls[selectedIndex]} title={`Preview`} onMeta={(m) => setTitles(prev => ({ ...prev, [urls[selectedIndex]]: m.title || '' }))} large showTitle={showTitles} />
                    <div className="mt-2 flex gap-2">
                      <button onClick={() => { navigator.clipboard && navigator.clipboard.writeText(urls[selectedIndex]); showToast({ type: 'success', message: 'Copied URL' }); }} className="bg-slate-700 text-slate-200 px-3 py-1 rounded">Copy</button>
                      <button onClick={() => { setEditingIndex(selectedIndex); setEditingValue(urls[selectedIndex]); }} className="bg-amber-400 text-black px-3 py-1 rounded">Edit</button>
                      <button onClick={() => deleteUrl(selectedIndex)} className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
                    </div>
                    {!showTitles && (
                      <div className="mt-2 text-xs text-slate-400">Title: {titles[urls[selectedIndex]] || '—'}</div>
                    )}
                  </div>
                ) : (
                  <div className="text-slate-500">Tap a tile below to preview it here.</div>
                )}
              </div>

              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
                {urls.map((u, i) => (
                  <div key={i} className="break-inside-avoid mb-6 relative bg-slate-900 rounded overflow-hidden" onClick={() => setSelectedIndex(i)} role="button" tabIndex={0} onKeyDown={(e)=>{ if(e.key==='Enter'||e.key===' ') setSelectedIndex(i); }}>
                    <YouTubeEmbed url={u} title={`Other Arts video ${i + 1}`} onMeta={(m) => setTitles(prev => ({ ...prev, [u]: m.title || '' }))} showTitle={showTitles} />
                    <div className="p-3 bg-slate-800 flex items-center gap-3">
                      <div className="flex-1">
                        {!showTitles && (
                          <div className="text-slate-300 text-sm truncate" title={u}>{titles[u] || u}</div>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={(e) => { e.stopPropagation(); navigator.clipboard && navigator.clipboard.writeText(u); }} className="text-slate-400 text-sm ml-2 px-2">📋</button>
                        <button onClick={(e) => { e.stopPropagation(); setEditingIndex(i); setEditingValue(u); }} className="bg-slate-700 text-slate-200 px-2 py-1 rounded">Edit</button>
                        <button onClick={(e) => { e.stopPropagation(); deleteUrl(i); }} className="bg-red-600 text-white px-2 py-1 rounded">Delete</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </section>

      {/* Admin and preview controls section - moved below videos */}
      <section className="mt-8 mb-6">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded p-6 shadow-lg">
          <h2 className="text-2xl text-amber-300 font-semibold mb-4">Management & Settings</h2>
          
          {/* Admin login/logout section */}
          <div className="mb-6 pb-6 border-b border-slate-700">
            <h3 className="text-lg text-slate-300 font-medium mb-3">Admin Access</h3>
            <div className="flex items-center gap-3">
              {!isAdmin ? (
                <>
                  <button onClick={() => setAuthModalOpen(true)} className="bg-amber-400 text-black px-4 py-2 rounded">Admin login</button>
                  <div className="text-slate-400 text-sm">Authorized users can manage the curated list.</div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <button onClick={() => { setAdminPanelOpen(s => !s); }} className="bg-emerald-600 text-black px-3 py-1 rounded">{adminPanelOpen ? 'Hide Admin Panel' : 'Show Admin Panel'}</button>
                    <button onClick={() => handleAdminLogout()} className="bg-red-600 text-white px-3 py-1 rounded">Logout</button>
                  </div>
                  <div className="text-slate-400 text-sm">Admin mode active (session).</div>
                </>
              )}
            </div>
            <div className="mt-2 text-xs text-slate-500">Auth server: {SERVER_BASE}</div>

            {adminAuthLast && (
              <div className="mt-3 bg-slate-900 border border-slate-700 rounded p-3">
                <div className="text-slate-300 text-sm mb-2">Last admin auth attempt</div>
                <pre className="text-[11px] leading-snug text-slate-300 whitespace-pre-wrap break-words max-h-48 overflow-auto">{JSON.stringify(adminAuthLast, null, 2)}</pre>
                <div className="mt-2 flex gap-2">
                  <button onClick={() => { try { navigator.clipboard && navigator.clipboard.writeText(JSON.stringify(adminAuthLast, null, 2)); showToast({ type: 'success', message: 'Copied details' }); } catch(e){} }} className="bg-slate-700 text-slate-200 px-2 py-1 rounded text-xs">Copy</button>
                  <button onClick={() => setAdminAuthLast(null)} className="bg-slate-700 text-slate-200 px-2 py-1 rounded text-xs">Clear</button>
                </div>
              </div>
            )}
          </div>

          {/* Admin panel: Add URL */}
          {adminPanelOpen && (
            <div className="mb-6 pb-6 border-b border-slate-700">
              <h3 className="text-lg text-slate-300 font-medium mb-3">Add YouTube Video</h3>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={adminAddUrl}
                  onChange={(e) => setAdminAddUrl(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') addUrl(); }}
                  placeholder="Paste YouTube URL here..."
                  className="flex-1 bg-slate-800 text-slate-100 rounded px-3 py-2 border border-slate-600 focus:border-amber-400 focus:outline-none"
                />
                <button onClick={addUrl} className="bg-amber-400 text-black px-4 py-2 rounded font-medium">Add URL</button>
              </div>
              <div className="mt-2 text-xs text-slate-400">Enter a YouTube URL (youtube.com or youtu.be) to add it to the curated list.</div>
              
              {/* Save to server button */}
              <div className="mt-4 flex items-center gap-2">
                <button onClick={handleSaveToServer} className="bg-emerald-600 text-white px-4 py-2 rounded">Save to Server</button>
                <div className="text-xs text-slate-400">Manually save the current list to the server</div>
              </div>
            </div>
          )}

          {/* Data management tools */}
          <div className="mb-6 pb-6 border-b border-slate-700">
            <h3 className="text-lg text-slate-300 font-medium mb-3">Data Management</h3>
            <div className="text-slate-400 text-sm mb-3">
              Data stored in <strong>localStorage</strong> (key <code className="bg-slate-800 px-1 rounded">otherArts.urls</code>). 
              Server status: <span className={serverAvailable === null ? 'text-slate-400' : serverAvailable ? 'text-emerald-400' : 'text-red-400'}>
                {serverAvailable === null ? 'unknown' : serverAvailable ? 'available' : 'unavailable'}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button onClick={loadFromServer} className="bg-sky-600 text-white px-3 py-2 rounded">Load from server</button>
              <button onClick={async () => {
                try {
                  const res = await fetch((process.env.PUBLIC_URL || '') + '/data/other-arts.json');
                  if (!res.ok) throw new Error('static not found');
                  const json = await res.json();
                  if (Array.isArray(json)) { setUrls(json); showToast({ type: 'success', message: 'Loaded baked-in list' }); }
                } catch (e) { showToast({ type: 'error', message: 'Failed to load static fallback' }); }
              }} className="bg-slate-700 text-slate-200 px-3 py-2 rounded">Load baked-in list</button>
              <button onClick={exportJson} className="bg-indigo-600 text-white px-3 py-2 rounded">Export JSON</button>
              <button onClick={() => fileRef.current && fileRef.current.click()} className="bg-slate-600 text-slate-200 px-3 py-2 rounded">Import JSON</button>
              <input ref={fileRef} type="file" accept="application/json" className="hidden" onChange={(e) => importJson(e.target.files && e.target.files[0])} />
            </div>
            <div className="mt-3 text-xs text-slate-400">Tip: use Import/Export JSON to move curated lists between devices or back up your selections.</div>
          </div>

          {/* Display & layout options */}
          <div className="mb-6 pb-6 border-b border-slate-700">
            <h3 className="text-lg text-slate-300 font-medium mb-3">Display & Layout Options</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={showTitles} onChange={(e) => { setShowTitles(e.target.checked); try { localStorage.setItem('otherArts.showTitles', e.target.checked ? '1' : '0') } catch(e){} }} className="rounded" />
                <span className="text-slate-300">Always show video titles</span>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={autoSync} onChange={(e) => { setAutoSync(e.target.checked); }} className="rounded" />
                <span className="text-slate-300">Auto-save to server on changes</span>
                <span className="ml-2 text-xs text-slate-400">(Status: {autoSyncStatus})</span>
              </label>
              
              <div className="mt-4">
                <div className="text-sm text-slate-300 mb-2">Layout mode:</div>
                <div className="flex items-center gap-2">
                  <button onClick={() => { setViewMode('optionA'); try{ localStorage.setItem('otherArts.viewMode','optionA') }catch(e){} }} className={`px-3 py-2 rounded ${viewMode==='optionA'? 'bg-amber-400 text-black':'bg-slate-700 text-slate-200'}`}>Two-column with preview</button>
                  <button onClick={() => { setViewMode('masonry'); try{ localStorage.setItem('otherArts.viewMode','masonry') }catch(e){} }} className={`px-3 py-2 rounded ${viewMode==='masonry'? 'bg-amber-400 text-black':'bg-slate-700 text-slate-200'}`}>Masonry grid</button>
                </div>
              </div>
            </div>
          </div>

          {/* Header customization */}
          <div>
            <h3 className="text-lg text-slate-300 font-medium mb-3">Header Customization</h3>
            <div className="text-sm text-slate-400 mb-2">Choose a header variant for this page:</div>
            <div className="flex flex-wrap items-center gap-2">
              {headerVariants.map(v => (
                <button key={v.id} onClick={() => setHeaderVariant(v.id)} className={`px-3 py-2 rounded ${headerVariant===v.id? 'bg-amber-400 text-black':'bg-slate-700 text-slate-200'}`}>
                  {v.id}
                </button>
              ))}
              <button onClick={() => { try { localStorage.setItem('otherArts.headerVariant', headerVariant); showToast({ type: 'success', message: 'Header preference saved' }); } catch(e){}}} className="ml-2 bg-emerald-600 text-white px-3 py-2 rounded">Save preference</button>
            </div>
            <div className="mt-2 text-xs text-slate-400">
              Current: <strong>{(headerVariants.find(h=>h.id===headerVariant)||headerVariants[0]).title}</strong> — {(headerVariants.find(h=>h.id===headerVariant)||headerVariants[0]).subtitle}
            </div>
          </div>
        </div>
      </section>

      {/* Undo snackbar for deletions */}
      {pendingDeletion && (
        <div className="fixed right-6 bottom-6 z-50">
          <div className="bg-slate-800 text-slate-200 px-4 py-2 rounded shadow-lg flex items-center gap-4">
            <div className="text-sm">Deleted&nbsp;<strong>{pendingDeletion.url.length > 60 ? pendingDeletion.url.slice(0, 60) + '…' : pendingDeletion.url}</strong></div>
            <div className="flex items-center gap-2">
              <button onClick={undoDelete} className="bg-amber-400 text-black px-3 py-1 rounded">Undo</button>
              <button onClick={finalizePendingDeletion} className="bg-slate-700 text-slate-200 px-3 py-1 rounded">Dismiss</button>
            </div>
          </div>
        </div>
      )}
      {/* Toast notifications */}
      {toast && (
        <div className="fixed right-6 top-6 z-50">
          <div className={`px-4 py-2 rounded shadow-lg ${toast.type === 'error' ? 'bg-red-600 text-white' : 'bg-emerald-600 text-black'}`}>
            <div className="flex items-center gap-4">
              <div className="text-sm">{toast.message}</div>
              {toast.actionLabel && (
                <button onClick={() => { try { toast.action && toast.action(); } catch(e){} setToast(null); }} className="bg-black/10 text-sm px-3 py-1 rounded">{toast.actionLabel}</button>
              )}
            </div>
          </div>
        </div>
      )}
      {/* Auth modal */}
      <AuthModal
        open={authModalOpen}
        onClose={() => { setAuthModalOpen(false); setPendingSave(null); }}
        onSubmit={async (user, pass) => {
          setAuthModalOpen(false);
          // If there's a pending save, use these credentials to complete the save
          if (pendingSave) {
            const auth = 'Basic ' + btoa(`${user}:${pass}`);
            try {
              const res = await fetch(`${SERVER_BASE}/api/other-arts`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': auth },
                body: JSON.stringify(pendingSave.list)
              });
              if (!res.ok) {
                const text = await res.text().catch(() => '');
                showToast({ type: 'error', message: 'Save failed: ' + (text || res.statusText || res.status), actionLabel: 'Retry', action: () => setAuthModalOpen(true), sticky: true });
                setPendingSave(null);
                setServerAvailable(false);
                return;
              }
              setServerAvailable(true);
              showToast({ type: 'success', message: 'Saved to server' });
              setPendingSave(null);
            } catch (e) {
              showToast({ type: 'error', message: 'Network error: ' + e.message, actionLabel: 'Retry', action: () => setAuthModalOpen(true), sticky: true });
              setPendingSave(null);
              setServerAvailable(false);
            }
            return;
          }

          // Otherwise treat this as an Admin login attempt
          await handleAdminAuth(user, pass);
        }}
      />
    </div>
  );
}
