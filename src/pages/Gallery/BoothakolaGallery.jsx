import React, { useMemo } from 'react';
import GalleryLightbox from '../../components/GalleryLightbox';
import SectionHeader from '../../components/SectionHeader';

const importAll = (r) => r.keys().map((key) => {
  const name = key.replace('./', '');
  const src = r(key);
  return { name, src, title: name.replace(/\.(jpe?g|png|gif|webp)$/i, ''), description: '' };
});

const BoothakolaGallery = () => {
  const allImages = useMemo(() => importAll(require.context('../../assets/images', false, /\.(jpe?g|png|gif|webp)$/)), []);

  // Filter for BoothaKola-related images, excluding Yakshagana
  const boothakolaImages = useMemo(() => allImages.filter(img => {
    const name = img.name.toLowerCase();
    // Include if it has bootha/kola keywords
    const isBootha = name.includes('bootha') || name.includes('kola') || name.includes('bhuta') || name.includes('panjurli') || name.includes('maada') || name.includes('moorti');
    // Exclude if it has yakshagana-specific keywords
    const isNotYakshagana = !name.includes('yakshagana') && !name.includes('shumbha') && !name.includes('durga') && !name.includes('mahishamardini');
    return isBootha && isNotYakshagana;
  }), [allImages]);

  const items = useMemo(() => boothakolaImages.map(img => ({
    type: 'image',
    src: img.src,
    alt: img.title,
    caption: img.description || ''
  })), [boothakolaImages]);
  return (
    <div className="boothakola-gallery container mx-auto py-12">
      <SectionHeader
        eyebrow="Photo Gallery"
        title="Bootha Kola Gallery"
        subtitle="Sacred ritual moments and spiritual performances of Bootha Kola."
        align="center"
      />
      
      {items.length > 0 ? (
        <GalleryLightbox items={items} />
      ) : (
        <div className="text-center text-gray-500 py-8">
          <p>No Bootha Kola images found. Check back soon!</p>
        </div>
      )}
    </div>
  );
};

export default BoothakolaGallery;
