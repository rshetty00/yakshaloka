import React, { useState } from 'react';
import FeatureMedia from 'components/FeatureMedia';

const defaultSteps = [
  {
    id: 'prep',
    title: 'Preparation & Altar Setup',
    time: 'Before performance',
    description:
      'Setting up the altar, offerings and arranging the stage; consecration and invocation rituals performed by the caretakers.',
    media: null,
  },
  {
    id: 'costume',
    title: 'Dressing & Masking',
    time: 'Early ceremony',
    description:
      'Artisans and performers don elaborate costumes and masks. This step often involves symbolic dressing rites and anointing.',
    media: null,
  },
  {
    id: 'procession',
    title: 'Procession & Invocation',
    time: 'Main ritual',
    description:
      'Performers enter the performance space, accompanied by drumming and chanting, invoking local deities and spirits.',
    media: null,
  },
  {
    id: 'possession',
    title: 'Possession & Healing',
    time: 'Climax',
    description:
      'Spirit possession scenes and healing acts. These moments are culturally sensitive — observe with respect.',
    media: null,
  },
];

export default function RitualTimeline({ steps = defaultSteps }) {
  const [openId, setOpenId] = useState(null);

  function toggle(id) {
    setOpenId((cur) => (cur === id ? null : id));
  }

  return (
    <section className="ritual-timeline max-w-4xl mx-auto" aria-label="Ritual timeline">
      <h2 className="text-2xl text-amber-300 mb-4">Ritual Timeline</h2>
      <div className="space-y-3">
        {steps.map((step) => (
          <div key={step.id} className="bg-slate-900 rounded overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-4 text-left focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-expanded={openId === step.id}
              aria-controls={`panel-${step.id}`}
              onClick={() => toggle(step.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggle(step.id);
                }
              }}
            >
              <div>
                <div className="font-semibold text-lg text-amber-200">{step.title}</div>
                <div className="text-sm text-slate-400">{step.time}</div>
              </div>
              <div className="text-amber-300 font-bold">{openId === step.id ? '−' : '+'}</div>
            </button>

            <div
              id={`panel-${step.id}`}
              role="region"
              aria-labelledby={`panel-${step.id}-label`}
              className={`p-4 border-t border-slate-800 ${openId === step.id ? 'block' : 'hidden'}`}
            >
              <p className="text-slate-300 mb-3">{step.description}</p>
              {step.media ? (
                <div className="mt-2">
                  <FeatureMedia media={step.media} />
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
