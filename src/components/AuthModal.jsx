import React, { useState } from 'react';

export default function AuthModal({ open, onClose, onSubmit }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-slate-800 text-black dark:text-slate-200 rounded p-6 w-96">
        <h3 className="text-lg font-semibold mb-3">Server authentication required</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">Enter credentials to save the curated list.</p>
        <div className="mb-3">
          <label className="block text-sm mb-1">User</label>
          <input className="w-full rounded border p-2" value={user} onChange={(e) => setUser(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">Password</label>
          <input type="password" className="w-full rounded border p-2" value={pass} onChange={(e) => setPass(e.target.value)} />
        </div>
        <div className="flex justify-end gap-2">
          <button onClick={() => onClose()} className="px-3 py-1 rounded bg-slate-200">Cancel</button>
          <button onClick={() => onSubmit(user, pass)} className="px-3 py-1 rounded bg-amber-400 text-black">Submit</button>
        </div>
      </div>
    </div>
  );
}
