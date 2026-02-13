import React from 'react';
import { Link } from 'react-router-dom';
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
  return { name, src, title: name.replace(/\.(jpe?g|png|gif|webp|bmp|jpeg|mov)$/i, ''), description: '' };
});

// Try loading images from explicit gallery subfolders first (if present). If not, fall back
// to scanning the top-level images directory and grouping by filename heuristics.
let yakImages = [];
let bootaImages = [];
let otherImages = [];

try {
  yakImages = importAll(require.context('../../assets/images/gallery/yakshagana', false, /\.(jpe?g|png|gif|webp|bmp|jpeg|mov)$/));
} catch (e) {
  yakImages = [];
}

try {
  bootaImages = importAll(require.context('../../assets/images/gallery/bootakola', false, /\.(jpe?g|png|gif|webp|bmp|jpeg|mov)$/));
} catch (e) {
  bootaImages = [];
}

try {
  otherImages = importAll(require.context('../../assets/images/gallery/other', false, /\.(jpe?g|png|gif|webp|bmp|jpeg|mov)$/));
} catch (e) {
  otherImages = [];
}

if (yakImages.length === 0 && bootaImages.length === 0 && otherImages.length === 0) {
  const allImages = importAll(require.context('../../assets/images', false, /\.(jpe?g|png|gif|webp|bmp|jpeg|mov)$/));
  yakImages = allImages.filter(img => /yakshagana|vaali|raghuram|bannadavesha|prathibha/i.test(img.name));
  bootaImages = allImages.filter(img => /(bootha|boota|butakola|bootakola|butakola|butakola)/i.test(img.name));
  otherImages = allImages.filter(img => !yakImages.some(y => y.name === img.name) && !bootaImages.some(b => b.name === img.name) && !usedImageNames.has(img.name));
} else {
  // if we found subfolders, include any other top-level images that don't appear in those groups
  try {
    const allTop = importAll(require.context('../../assets/images', false, /\.(jpe?g|png|gif|webp|bmp|jpeg|mov)$/));
    const groupedNames = new Set([...yakImages, ...bootaImages, ...otherImages].map(i => i.name));
    const extras = allTop.filter(img => !groupedNames.has(img.name) && !usedImageNames.has(img.name));
    otherImages = [...otherImages, ...extras];
  } catch (e) {
    // ignore
  }
}

const mapItems = (arr) => arr.map(img => ({ type: 'image', src: img.src, alt: img.title, caption: img.description || '' }));

const yakItems = mapItems(yakImages);
const bootaItems = mapItems(bootaImages);
const otherItems = mapItems(otherImages);

// Combined items for the main gallery view (keeps previous behavior).
const items = [...yakItems, ...bootaItems, ...otherItems];

const Gallery = () => {
  return (
    <div className="gallery container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Gallery</h2>

      {/* Gallery Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <Link 
          to="/gallery/yakshagana" 
          className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold hover:from-amber-400 hover:to-amber-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/50"
        >
          Yakshagana Gallery
        </Link>
        <Link 
          to="/gallery/boothakola" 
          className="px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold hover:from-red-500 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/50"
        >
          Bootha Kola Gallery
        </Link>
      </div>

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
