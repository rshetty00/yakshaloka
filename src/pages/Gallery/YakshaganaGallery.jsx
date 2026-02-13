import React, { useMemo } from 'react';
import GalleryLightbox from '../../components/GalleryLightbox';
import SectionHeader from '../../components/SectionHeader';

const importAll = (r) => r.keys().map((key) => {
  const name = key.replace('./', '');
  const src = r(key);
  return { name, src, title: name.replace(/\.(jpe?g|png|gif|webp)$/i, ''), description: '' };
});

const YakshaganaGallery = () => {
  const allImages = useMemo(() => importAll(require.context('../../assets/images', false, /\.(jpe?g|png|gif|webp)$/)), []);

  // Filter for Yakshagana-related images, excluding Bootha Kola
  const yakshaganaImages = useMemo(() => allImages.filter(img => {
    const name = img.name.toLowerCase();
    // Include if it has yakshagana or raghuram keywords
    const isYakshagana = name.includes('yakshagana') || name.includes('raghuram') || name.includes('shumbha') || name.includes('durga') || name.includes('lion') || name.includes('mahishamardini');
    // Exclude if it has bootha/kola keywords
    const isNotBootha = !name.includes('bootha') && !name.includes('kola') && !name.includes('bhuta') && !name.includes('panjurli') && !name.includes('maada') && !name.includes('moorti');
    return isYakshagana && isNotBootha;
  }), [allImages]);

  const items = useMemo(() => yakshaganaImages.map(img => ({
    type: 'image',
    src: img.src,
    alt: img.title,
    caption: img.description || ''
  })), [yakshaganaImages]);
  return (
    <div className="yakshagana-gallery container mx-auto py-12">
      <SectionHeader
        eyebrow="Photo Gallery"
        title="Yakshagana Gallery"
        subtitle="Visual moments from our Yakshagana performances and rehearsals."
        align="center"
      />
      
      {items.length > 0 ? (
        <GalleryLightbox items={items} />
      ) : (
        <div className="text-center text-gray-500 py-8">
          <p>No Yakshagana images found. Check back soon!</p>
        </div>
      )}
    </div>
  );
};

export default YakshaganaGallery;
