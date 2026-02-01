import React from 'react';
import OtherArtsSection from '../../components/OtherArtsSection';
import GalleryLightbox from '../../components/GalleryLightbox';

/*
  Images referenced elsewhere — keep this list in sync when you add/remove page-specific images.
*/
const usedImageNames = new Set([
  'RaghuramShetty_Shumbha_HeadshotYakshaganaPhoto_20161229_010652.jpg',
  'Yakshagana_BayareaSiliconValley_Independenceday_RaghuramShetty.jpg',
  'BoothaKola1.jpg',
  'BoothaKola2.jpg',
  'BoothaKolaPerforamnce_WaterMarked_PanjurliWithANi_RaghuramShetty.png',
  'DSC_3704.jpg',
  'RaghuramShettyAsPunjurliBootha_0I7A0194.png',
  'ButaKola_Ritual_BackgroundSetupForProjection_PropertyOfRaghuramShetty_YakshalokaUS.jpg',
  'BhutaSthanaMaada_e2_WaterMarked_BhutaGudi_PhotoByRaghuramShetty.jpg',
  'BootaMogaMoorti_ManemanchaavuGudi_e2_WaterMarked_FacesOfSpirts_ByRaghuramShettyOn01192013_DSC06811.png',
  'PrathibhaShetty_DeviDurgaOnLion_Mahishamardini_Yakshagana_20161229_224345.jpg',
  'hero-background.jpg',
  'Logo.png'
]);

const importAll = (r) => r.keys().map((key) => {
  const name = key.replace('./', '');
  const src = r(key);
  return { name, src, title: name.replace(/\.(jpe?g|png|gif|webp)$/i, ''), description: '' };
});

const allImages = importAll(require.context('../../assets/images', false, /\.(jpe?g|png|gif|webp)$/));
const galleryImages = allImages.filter(img => !usedImageNames.has(img.name));

// map to the format expected by GalleryLightbox
const items = galleryImages.map(img => ({
  type: 'image',
  src: img.src,
  alt: img.title,
  caption: img.description || ''
}));

const Gallery = () => {
  return (
    <div className="gallery container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Gallery</h2>

      {/* Grid + lightbox */}
      <GalleryLightbox items={items} />

      <OtherArtsSection
        title="Gallery Videos"
        subtitle="Curated clips that complement the photo gallery."
        listId="gallery"
        initialViewMode="masonry"
        initialHeaderVariant="voices"
      />
    </div>
  );
};

export default Gallery;
