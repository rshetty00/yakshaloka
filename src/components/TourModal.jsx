import React, { useEffect } from 'react';

const TourModal = ({ open, items = [], initialIndex = 0, onClose }) => {
  const [index, setIndex] = React.useState(initialIndex);

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex, open]);

  useEffect(() => {
    const onKey = (e) => {
      if (!open) return;
      if (e.key === 'ArrowLeft') setIndex(i => Math.max(0, i - 1));
      if (e.key === 'ArrowRight') setIndex(i => Math.min(items.length - 1, i + 1));
      if (e.key === 'Escape') onClose && onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, items.length, onClose]);

  if (!open) return null;

  const cur = items[index] || {};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-white rounded-lg max-w-4xl w-full mx-4 overflow-hidden">
        <div className="p-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">{cur.alt || 'Tour image'}</h3>
            <p className="text-sm text-gray-600">{cur.caption}</p>
          </div>
          <div>
            <button onClick={onClose} className="px-3 py-1 rounded bg-gray-200">Close</button>
          </div>
        </div>
        <div className="bg-black flex items-center justify-center" style={{ minHeight: 420 }}>
          {cur.src ? (
            <img src={cur.src} alt={cur.alt} className="max-h-[70vh] object-contain" />
          ) : (
            <div className="text-white p-8">No image</div>
          )}
        </div>
        <div className="p-4 flex items-center justify-between">
          <div>
            <button onClick={() => setIndex(i => Math.max(0, i - 1))} className="px-3 py-1 mr-2 bg-gray-100 rounded">Prev</button>
            <button onClick={() => setIndex(i => Math.min(items.length - 1, i + 1))} className="px-3 py-1 bg-gray-100 rounded">Next</button>
          </div>
          <div className="text-sm text-gray-600">{index + 1} / {items.length}</div>
        </div>
      </div>
    </div>
  );
};

export default TourModal;
