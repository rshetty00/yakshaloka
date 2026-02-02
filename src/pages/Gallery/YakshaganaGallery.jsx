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

  // Filter for Yakshagana-related images
  const yakshaganaImages = useMemo(() => allImages.filter(img => 
    img.name.toLowerCase().includes('yakshagana') || 
    img.name.toLowerCase().includes('raghuram')
  ), [allImages]);

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
