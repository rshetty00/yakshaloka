import React from 'react';
import HeroRitual from 'components/HeroRitual';
import FeatureMedia from 'components/FeatureMedia';
import GalleryLightbox from 'components/GalleryLightbox';
import RitualTimeline from 'components/RitualTimeline';
import RitualBg from 'assets/images/ButaKola_Ritual_BackgroundSetupForProjection_PropertyOfRaghuramShetty_YakshalokaUS.jpg';
import BhutaSthana from 'assets/images/BhutaSthanaMaada_e2_WaterMarked_BhutaGudi_PhotoByRaghuramShetty.jpg';
import BootaMoga from 'assets/images/BootaMogaMoorti_ManemanchaavuGudi_e2_WaterMarked_FacesOfSpirts_ByRaghuramShettyOn01192013_DSC06811.png';

const BoothaRituals = () => {
  const sampleMedia = {
    type: 'image',
    src: RitualBg,
    alt: 'Altar setup for Bootha Kola ritual',
  };

  

  return (
    <div className="bootha-rituals container mx-auto py-8">
      <HeroRitual
        title="Bootha Rituals"
        subtitle="Sacred performances, rituals and contextual histories from the Bootha tradition. Presented with care and attribution."
        bgImage={RitualBg}
      />

      

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Feature media (large) */}
        <div className="lg:col-span-2">
          <FeatureMedia media={sampleMedia} caption="Altar setup for Bootha Kola performance — property of Raghuram Shetty / Yakshaloka US" fullSize />
        </div>

        {/* Right: contextual cards */}
        <div className="flex flex-col gap-4">
          <div className="bg-slate-900 rounded p-6">
            <h3 className="text-2xl text-amber-300 mb-2">Context & Warnings</h3>
            <p className="text-slate-300 text-sm">These rituals are culturally specific and sacred. Please respect the communities and sources. Some content may include spirit possession and intense imagery — viewer discretion advised.</p>
          </div>

          <div className="bg-slate-900 rounded p-6">
            <h3 className="text-2xl text-amber-300 mb-2">Credits</h3>
            <p className="text-slate-300 text-sm">Images and recordings provided by Raghuram Shetty / Yakshaloka US. For licensing or research access contact the owner.</p>
          </div>

          <div className="bg-slate-900 rounded p-6">
            <h3 className="text-2xl text-amber-300 mb-2">Quick Links</h3>
            <ul className="text-slate-300 text-sm list-disc list-inside">
              <li>Transcripts & captions</li>
              <li>Scholarly notes</li>
              <li>Full gallery</li>
            </ul>
          </div>
        </div>
      </div>

      
      {/* Gallery preview for Bootha Rituals */}
      <div className="mt-10">
        <h3 className="text-3xl text-amber-300 mb-4">Gallery</h3>
        <GalleryLightbox
          items={[
            { type: 'image', src: RitualBg, alt: 'Altar setup for Bootha Kola', caption: 'Altar setup — Raghuram Shetty / Yakshaloka US' },
            { type: 'image', src: BhutaSthana, alt: 'Bhuta Sthana / Bhuta Gudi', caption: 'Bhuta Sthana (Bhuta Gudi) — photo by Raghuram Shetty' },
            { type: 'image', src: BootaMoga, alt: 'Boota Moga Moorti', caption: 'Boota Moga Moorti — Faces of Spirits (watermarked) — Raghuram Shetty' },
          ]}
        />
      </div>

      {/* Ritual timeline (accessible accordion) */}
      <div className="mt-10">
        <RitualTimeline />
      </div>

      
    </div>
  );
};

export default BoothaRituals;
