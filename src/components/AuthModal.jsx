import React, { useState, useEffect } from 'react';

export default function AuthModal({ open, onClose, onSubmit, title = 'Admin Login' }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  useEffect(() => {
    if (!open) {
      setUser('');
      setPass('');
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="dialog" aria-modal="true">
      <div className="bg-slate-900 border border-slate-700 rounded p-6 w-full max-w-md shadow-xl">
        <h3 className="text-xl font-semibold text-amber-300 mb-4">{title}</h3>
        <div className="space-y-3">
          <div>
            <label className="block text-sm text-slate-300 mb-1">Username</label>
            <input value={user} onChange={(e) => setUser(e.target.value)} className="w-full bg-slate-800 text-slate-100 rounded px-3 py-2 border border-slate-600 focus:border-amber-400 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Password</label>
            <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} className="w-full bg-slate-800 text-slate-100 rounded px-3 py-2 border border-slate-600 focus:border-amber-400 focus:outline-none" />
          </div>
        </div>
        <div className="mt-5 flex items-center gap-2 justify-end">
          <button onClick={onClose} className="px-3 py-2 rounded bg-slate-700 text-slate-200">Cancel</button>
          <button
            onClick={() => onSubmit && onSubmit(user, pass)}
            className="px-4 py-2 rounded bg-amber-400 text-black font-medium"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
