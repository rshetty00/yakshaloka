import React from 'react';
import OtherArts from '../pages/OtherArts/OtherArts';

// Reusable section wrapper around the OtherArts page UI, tuned for embedding.
// Accepts optional props to customize the header for each host page.
export default function OtherArtsSection({ title, subtitle }) {
  return (
    <section className="mt-12">
      <OtherArts sectionMode hideBoothaLink customTitle={title} customSubtitle={subtitle} />
    </section>
  );
}
