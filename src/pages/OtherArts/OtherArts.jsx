import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import YouTubeEmbed from '../../components/YouTubeEmbed';
import AuthModal from '../../components/AuthModal';

export default function OtherArts({
  sectionMode = false,
  customTitle,
  customSubtitle,
  initialHeaderVariant,
  initialViewMode,
  hideBoothaLink = false,
  listId = 'default'
}) {
  const BASE_PREFIX = `otherArts.${listId}`;
  const STORAGE_KEY = `${BASE_PREFIX}.urls`;
  const [urls, setUrls] = useState([]);
  const [titles, setTitles] = useState({});
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editingValue, setEditingValue] = useState('');
  const [showTitles, setShowTitles] = useState(() => {
    try { return localStorage.getItem(`${BASE_PREFIX}.showTitles`) === '1'; } catch { return false; }
  });
  const [headerVariant, setHeaderVariant] = useState(() => {
    if (initialHeaderVariant) return initialHeaderVariant;
    try { return localStorage.getItem(`${BASE_PREFIX}.headerVariant`) || 'voices'; } catch { return 'voices'; }
  });
  const [viewMode, setViewMode] = useState(() => {
    if (initialViewMode) return initialViewMode;
    try { return localStorage.getItem(`${BASE_PREFIX}.viewMode`) || 'optionA'; } catch { return 'optionA'; }
  });
  const headerVariants = [
    { id: 'voices', title: 'Voices & Movements: Other Performances', subtitle: 'A curated collection of plays, dances and ritual arts.' },
    { id: 'heritage', title: 'Heritage Performance Showcase', subtitle: 'Selected theatre, folk and classical performances from our region.' },
    { id: 'stage', title: 'Stage & Dance Highlights', subtitle: 'Spotlight: theatre, dance and ritual recordings.' }
  ];

  const [isAdmin, setIsAdmin] = useState(() => {
    try { return sessionStorage.getItem('otherArts.isAdmin') === '1'; } catch { return false; }
  });
  const [adminAuth, setAdminAuth] = useState(() => {
    try { return sessionStorage.getItem('otherArts.adminAuth') || null; } catch { return null; }
  });
  const [adminPanelOpen, setAdminPanelOpen] = useState(false);
  const [adminAddUrl, setAdminAddUrl] = useState('');
  const [adminAuthLast, setAdminAuthLast] = useState(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [pendingSave, setPendingSave] = useState(null);

  useEffect(() => {
    if (urls.length === 0) { setSelectedIndex(-1); return; }
    setSelectedIndex(prev => (prev < 0 ? 0 : prev >= urls.length ? urls.length - 1 : prev));
  }, [urls]);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(urls)); } catch {}
  }, [urls, STORAGE_KEY]);

  const SERVER_BASE = process.env.REACT_APP_OTHER_ARTS_SERVER || 'http://localhost:4000';
  const [serverAvailable, setServerAvailable] = useState(null);
  useEffect(() => {
    let mounted = true;
    (async () => {
      let localLoaded = false;
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
            if (Array.isArray(parsed) && parsed.length) {
              setUrls(parsed);
              localLoaded = true;
            }
        }
      } catch {}
      try {
        const endpoint = listId === 'default' ? `${SERVER_BASE}/api/other-arts` : `${SERVER_BASE}/api/other-arts/${encodeURIComponent(listId)}`;
        const res = await fetch(endpoint);
        if (res.ok) {
          const json = await res.json();
          if (json && Array.isArray(json.data) && json.data.length) {
            if (mounted) setUrls(json.data);
          }
          setServerAvailable(true);
        } else {
          setServerAvailable(false);
        }
      } catch { setServerAvailable(false); }
      if (!localLoaded && mounted && urls.length === 0) {
        try {
          const staticRes = await fetch((process.env.PUBLIC_URL || '') + '/data/other-arts.json');
          if (staticRes.ok) {
            const arr = await staticRes.json();
            if (Array.isArray(arr) && arr.length) setUrls(arr);
          }
        } catch {}
      }
    })();
    return () => { mounted = false; };
  }, [SERVER_BASE, STORAGE_KEY, listId]);

  const [autoSync, setAutoSync] = useState(false);
  const [autoSyncStatus, setAutoSyncStatus] = useState('idle');
  const [pauseAutoSync, setPauseAutoSync] = useState(false);

  const saveToServer = useCallback(async (list, notify = true) => {
    try {
      if (!notify) setAutoSyncStatus('saving');
      const endpoint = listId === 'default' ? `${SERVER_BASE}/api/other-arts` : `${SERVER_BASE}/api/other-arts/${encodeURIComponent(listId)}`;
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(adminAuth ? { Authorization: adminAuth } : {})
        },
        body: JSON.stringify(list)
      });
      if (res.status === 401) {
        setPendingSave({ list, notify });
        setAuthModalOpen(true);
        if (notify) showToast({ type: 'error', message: 'Auth required', actionLabel: 'Login', action: () => setAuthModalOpen(true), sticky: true });
        if (!notify) setAutoSyncStatus('error');
        return false;
      }
      if (!res.ok) throw new Error('Server rejected save');
      setServerAvailable(true);
      if (notify) showToast({ type: 'success', message: 'Saved to server' });
      if (!notify) setAutoSyncStatus('saved');
      return true;
    } catch (e) {
      setServerAvailable(false);
      if (notify) showToast({ type: 'error', message: 'Save failed', actionLabel: 'Retry', action: () => saveToServer(list, notify), sticky: true });
      if (!notify) setAutoSyncStatus('error');
      return false;
    }
  }, [SERVER_BASE, listId, adminAuth]);

  useEffect(() => {
    if (autoSync && !pauseAutoSync) saveToServer(urls, false);
  }, [urls, autoSync, pauseAutoSync, saveToServer]);

  const [toast, setToast] = useState(null);
  const showToast = useCallback((t) => {
    setToast(t);
    if (t && !t.sticky) setTimeout(() => setToast(null), t.duration || 4000);
  }, []);

  function _normalizeUrl(u) { let s = (u || '').trim(); if (!/^https?:\/\//i.test(s)) s = 'https://' + s; return s; }
  function _looksLikeYouTube(u) { try { const o = new URL(u); return /youtube\.com|youtu\.be/.test(o.hostname); } catch { return /youtube\.com|youtu\.be/.test(u); } }
  async function addUrl() {
    const raw = adminAddUrl.trim();
    if (!raw) { showToast({ type: 'error', message: 'Paste a URL first' }); return; }
    const normalized = _normalizeUrl(raw);
    if (!_looksLikeYouTube(normalized)) { showToast({ type: 'error', message: 'Must be YouTube URL' }); return; }
    if (urls.includes(normalized)) { showToast({ type: 'error', message: 'Already exists' }); return; }
    const newList = [...urls, normalized];
    setUrls(newList); setAdminAddUrl(''); showToast({ type: 'success', message: 'Added' });
    if (autoSync && !pauseAutoSync) saveToServer(newList, false);
  }
  function replaceUrl(idx, newUrl) { setUrls(list => list.map((u, i) => i === idx ? newUrl : u)); setEditingIndex(-1); setEditingValue(''); }
  const [pendingDeletion, setPendingDeletion] = useState(null);
  function deleteUrl(idx) {
    if (!window.confirm('Delete this video?')) return;
    const removed = urls[idx];
    const newList = urls.filter((_, i) => i !== idx);
    setUrls(newList);
    setPendingDeletion({ url: removed, index: idx, timer: setTimeout(() => setPendingDeletion(null), 6000) });
  }
  function undoDelete() {
    if (!pendingDeletion) return;
    clearTimeout(pendingDeletion.timer);
    setUrls(list => {
      const copy = list.slice();
      copy.splice(Math.min(pendingDeletion.index, copy.length), 0, pendingDeletion.url);
      return copy;
    });
    setPendingDeletion(null);
  }

  const fileRef = useRef(null);
  function exportJson() {
    try {
      const blob = new Blob([JSON.stringify(urls, null, 2)], { type: 'application/json' });
      const urlObj = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = urlObj; a.download = `other-arts-${listId}.json`; document.body.appendChild(a); a.click(); a.remove();
      URL.revokeObjectURL(urlObj);
    } catch {}
  }
  function importJson(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      try { const parsed = JSON.parse(e.target.result); if (Array.isArray(parsed)) setUrls(parsed.map(String)); } catch { showToast({ type: 'error', message: 'Import failed' }); }
    };
    reader.readAsText(file);
  }

  async function handleAdminAuth(user, pass) {
    const header = 'Basic ' + btoa(`${user}:${pass}`);
    try {
      const res = await fetch(`${SERVER_BASE}/api/admin-auth`, { method: 'POST', headers: { Authorization: header } });
      if (!res.ok) {
        const txt = await res.text().catch(() => '');
        setAdminAuthLast({ status: res.status, response: txt });
        showToast({ type: 'error', message: 'Auth failed', sticky: true });
        return;
      }
      setAdminAuth(header); setIsAdmin(true); setAdminPanelOpen(true);
      try { sessionStorage.setItem('otherArts.isAdmin', '1'); sessionStorage.setItem('otherArts.adminAuth', header); } catch {}
      showToast({ type: 'success', message: 'Admin mode' });
    } catch (e) {
      setAdminAuthLast({ error: e.message });
      showToast({ type: 'error', message: 'Network error', sticky: true });
    }
  }
  function handleAdminLogout() {
    setIsAdmin(false); setAdminAuth(null); setAdminPanelOpen(false);
    try { sessionStorage.removeItem('otherArts.isAdmin'); sessionStorage.removeItem('otherArts.adminAuth'); } catch {}
    showToast({ type: 'success', message: 'Logged out' });
  }

  function handleDragStart(e, idx) { e.dataTransfer.setData('text/plain', String(idx)); e.dataTransfer.effectAllowed = 'move'; }
  function handleDragOver(e) { e.preventDefault(); }
  function handleDrop(e, destIdx) {
    e.preventDefault();
    const srcIdx = Number(e.dataTransfer.getData('text/plain'));
    if (Number.isNaN(srcIdx) || srcIdx === destIdx) return;
    setUrls(list => {
      const copy = list.slice();
      const [moved] = copy.splice(srcIdx, 1);
      copy.splice(destIdx, 0, moved);
      return copy;
    });
  }

  const hv = headerVariants.find(h => h.id === headerVariant) || headerVariants[0];
  const pageTitle = customTitle || hv.title;
  const pageSubtitle = customSubtitle || hv.subtitle;

  return (
    <div className="other-arts container mx-auto py-8">
      <header className={sectionMode ? 'mb-6' : 'mb-8'}>
        {sectionMode ? (
          <h3 className="text-2xl text-amber-300 font-semibold">{pageTitle}</h3>
        ) : (
          <h1 className="text-4xl text-amber-300 font-semibold">{pageTitle}</h1>
        )}
        <p className="text-slate-300 mt-2">{pageSubtitle}</p>
        {!hideBoothaLink && (
          <p className="text-slate-400 mt-2 text-sm">For ritual media visit <Link to="/bootharituals" className="text-amber-300 underline">Bootha Rituals</Link>.</p>
        )}
      </header>
      <section>
        {urls.length === 0 && (
          <div className="bg-slate-900 rounded p-6 text-slate-300">No videos yet. Add some in the admin panel.</div>
        )}
        {urls.length > 0 && viewMode === 'optionA' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {urls.map((u, i) => (
                  <div key={i} className={`relative bg-slate-900 rounded overflow-hidden border ${selectedIndex === i ? 'border-amber-400' : 'border-transparent'}`} draggable onDragStart={(e) => handleDragStart(e, i)} onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, i)} onClick={() => setSelectedIndex(i)}>
                    <YouTubeEmbed url={u} title={`Video ${i + 1}`} onMeta={m => setTitles(t => ({ ...t, [u]: m.title || '' }))} showTitle={showTitles} />
                    <div className="p-3 bg-slate-800 flex items-center gap-3">
                      <div className="flex-1">
                        {editingIndex === i ? (
                          <input className="w-full bg-slate-700 text-slate-100 rounded p-2" value={editingValue} onChange={(e)=>setEditingValue(e.target.value)} />
                        ) : (
                          !showTitles && <div className="text-slate-300 text-sm truncate" title={u}>{titles[u] || u}</div>
                        )}
                      </div>
                      <div className="absolute top-2 right-2 flex gap-2 z-30">
                        {editingIndex === i ? (
                          <>
                            <button onClick={(e)=>{e.stopPropagation(); replaceUrl(i, editingValue);}} className="bg-amber-400 text-black px-3 py-1 rounded">Save</button>
                            <button onClick={(e)=>{e.stopPropagation(); setEditingIndex(-1); setEditingValue('');}} className="bg-slate-600 text-slate-200 px-3 py-1 rounded">Cancel</button>
                            <button onClick={(e)=>{e.stopPropagation(); deleteUrl(i);}} className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
                          </>
                        ) : (
                          <>
                            <button onClick={(e)=>{e.stopPropagation(); setEditingIndex(i); setEditingValue(u);}} className="bg-slate-700 text-slate-200 px-3 py-1 rounded">Edit</button>
                            <button onClick={(e)=>{e.stopPropagation(); deleteUrl(i);}} className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-20 bg-slate-900 rounded p-4">
                <div className="text-slate-300 text-sm mb-3">Preview</div>
                {selectedIndex >= 0 ? (
                  <div>
                    <YouTubeEmbed url={urls[selectedIndex]} title="Preview" large onMeta={m => setTitles(t => ({ ...t, [urls[selectedIndex]]: m.title || '' }))} showTitle={showTitles} />
                    <div className="mt-3 flex flex-wrap gap-2">
                      <button onClick={() => { navigator.clipboard && navigator.clipboard.writeText(urls[selectedIndex]); showToast({ type: 'success', message: 'Copied URL' }); }} className="bg-slate-700 text-slate-200 px-3 py-1 rounded">Copy</button>
                      <button onClick={() => { setEditingIndex(selectedIndex); setEditingValue(urls[selectedIndex]); }} className="bg-amber-400 text-black px-3 py-1 rounded">Edit</button>
                      <button onClick={() => deleteUrl(selectedIndex)} className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
                      <button onClick={() => saveToServer(urls)} className="bg-emerald-600 text-white px-3 py-1 rounded">Save</button>
                    </div>
                  </div>
                ) : <div className="text-slate-500">Select a video.</div>}
              </div>
            </div>
          </div>
        )}
      </section>
      <section className="mt-8 mb-6">
        <div className={isAdmin ? 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded p-6 shadow-lg' : 'bg-slate-900 rounded px-3 py-2 mt-2 mb-2 text-xs text-slate-500 border border-slate-800 opacity-80'}>
          <h2 className="text-2xl text-amber-300 font-semibold mb-4">Management & Settings</h2>
          <div className={isAdmin ? 'mb-6 pb-6 border-b border-slate-700' : ''}>
            <h3 className={isAdmin ? 'text-lg text-slate-300 font-medium mb-3' : 'text-xs text-slate-500 font-normal mb-1'}>Admin Access</h3>
            <div className="flex items-center gap-3 flex-wrap">
              {!isAdmin ? (
                <>
                  <button onClick={() => setAuthModalOpen(true)} className="bg-amber-400 text-black px-4 py-2 rounded">Admin login</button>
                  <div className="text-slate-400 text-sm">Authorized users can manage the curated list.</div>
                </>
              ) : (
                <>
                  <button onClick={() => setAdminPanelOpen(s => !s)} className="bg-emerald-600 text-black px-3 py-1 rounded">{adminPanelOpen ? 'Hide Panel' : 'Show Panel'}</button>
                  <button onClick={handleAdminLogout} className="bg-red-600 text-white px-3 py-1 rounded">Logout</button>
                  <div className="text-slate-400 text-sm">Admin active.</div>
                </>
              )}
            </div>
            <div className="mt-2 text-xs text-slate-500">Server: {SERVER_BASE}</div>
          </div>
          {isAdmin && adminPanelOpen && (
            <div className="mb-6 pb-6 border-b border-slate-700">
              <h3 className="text-lg text-slate-300 font-medium mb-3">Add YouTube Video</h3>
              <div className="flex items-center gap-2 flex-wrap">
                <input type="text" value={adminAddUrl} onChange={e => setAdminAddUrl(e.target.value)} onKeyDown={e => { if (e.key === 'Enter') addUrl(); }} placeholder="Paste YouTube URL..." className="flex-1 bg-slate-800 text-slate-100 rounded px-3 py-2 border border-slate-600 focus:border-amber-400 focus:outline-none min-w-[250px]" />
                <button onClick={addUrl} className="bg-amber-400 text-black px-4 py-2 rounded font-medium">Add URL</button>
                <button onClick={() => saveToServer(urls)} className="bg-emerald-600 text-white px-4 py-2 rounded">Save to Server</button>
              </div>
              <div className="mt-2 text-xs text-slate-400">Auto-sync: {autoSync ? `${autoSyncStatus}` : 'off'}</div>
            </div>
          )}
        </div>
      </section>
      <AuthModal open={authModalOpen} onClose={() => { setAuthModalOpen(false); setPendingSave(null); }} onSubmit={async (user, pass) => { setAuthModalOpen(false); if (pendingSave) { const header = 'Basic ' + btoa(`${user}:${pass}`); try { const endpoint = listId === 'default' ? `${SERVER_BASE}/api/other-arts` : `${SERVER_BASE}/api/other-arts/${encodeURIComponent(listId)}`; const res = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: header }, body: JSON.stringify(pendingSave.list) }); if (!res.ok) throw new Error('Save failed'); setAdminAuth(header); setIsAdmin(true); try { sessionStorage.setItem('otherArts.isAdmin','1'); sessionStorage.setItem('otherArts.adminAuth', header); } catch {}; showToast({ type: 'success', message: 'Saved to server' }); setPendingSave(null); } catch (e) { showToast({ type: 'error', message: 'Auth/save error', sticky: true }); setPendingSave(null); } } else { await handleAdminAuth(user, pass); } }} />
    </div>
  );
}
