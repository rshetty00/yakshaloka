import React, { useMemo } from 'react';
import GalleryLightbox from '../../components/GalleryLightbox';
import SectionHeader from '../../components/SectionHeader';

const importAll = (r) => r.keys().map((key) => {
  const path = key.replace('./', '');
  const parts = path.split('/');
  const name = parts[parts.length - 1];
  const src = r(key);
  return { name, src, path, title: name.replace(/\.(jpe?g|png|gif|webp|bmp|jpeg)$/i, ''), description: '' };
});

const BoothakolaGallery = () => {
  const allBoothakolaImages = useMemo(() => importAll(require.context('../../assets/images/gallery/bootakola', false, /\.(jpe?g|png|gif|webp|bmp|jpeg)$/)), []);
  
  // Deduplicate by filename since webpack loads same files via multiple paths
  const boothakolaImages = useMemo(() => {
    const seen = new Set();
    return allBoothakolaImages.filter(img => {
      if (seen.has(img.name)) return false;
      seen.add(img.name);
      return true;
    });
  }, [allBoothakolaImages]);

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
