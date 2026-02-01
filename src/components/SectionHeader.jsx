import React from 'react';

export default function SectionHeader({ eyebrow, title, subtitle, align = 'center' }) {
  const alignCls = align === 'left' ? 'items-start text-left' : 'items-center text-center';
  return (
    <div className={`flex flex-col ${alignCls} gap-2 mb-6`}>
      {eyebrow && <div className="text-amber-300/80 tracking-widest uppercase text-xs">{eyebrow}</div>}
      <h2 className="text-4xl md:text-5xl font-bold font-easter bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && <p className="text-slate-300 max-w-3xl">{subtitle}</p>}
    </div>
  );
}
