import React from 'react';
import HeroRitual from 'components/HeroRitual';
import FeatureMedia from 'components/FeatureMedia';
import GalleryLightbox from 'components/GalleryLightbox';
import RitualTimeline from 'components/RitualTimeline';
import RitualBg from 'assets/images/ButaKola_Ritual_BackgroundSetupForProjection_PropertyOfRaghuramShetty_YakshalokaUS.jpg';
import BhutaSthana from 'assets/images/BhutaSthanaMaada_e2_WaterMarked_BhutaGudi_PhotoByRaghuramShetty.jpg';
import BootaMoga from 'assets/images/bootharituals/BootaMogaMoorti_ManemanchaavuGudi_e2_WaterMarked_FacesOfSpirts_ByRaghuramShettyOn01192013_DSC06811.png';

// Kallurti Kola (Fire Ritual) images - all 12
import KallurtiKola1 from 'assets/images/bootharituals/KallurtiKola_BootaOnFire_PropertyOfRaghuramShetty_01192013_DSC06684.JPG';
import KallurtiKola2 from 'assets/images/bootharituals/KallurtiKola_BootaOnFire_PropertyOfRaghuramShetty_01192013_DSC06686.JPG';
import KallurtiKola3 from 'assets/images/bootharituals/KallurtiKola_BootaOnFire_PropertyOfRaghuramShetty_01192013_DSC06687.JPG';
import KallurtiKola4 from 'assets/images/bootharituals/KallurtiKola_BootaOnFire_PropertyOfRaghuramShetty_01192013_DSC06689.JPG';
import KallurtiKola5 from 'assets/images/bootharituals/KallurtiKola_BootaOnFire_PropertyOfRaghuramShetty_01192013_DSC06692.JPG';
import KallurtiKola6 from 'assets/images/bootharituals/KallurtiKola_BootaOnFire_PropertyOfRaghuramShetty_01192013_DSC06694.JPG';
import KallurtiKola7 from 'assets/images/bootharituals/KallurtiKola_BootaOnFire_PropertyOfRaghuramShetty_01192013_DSC06695.JPG';
import KallurtiKola8 from 'assets/images/bootharituals/KallurtiKola_BootaOnFire_PropertyOfRaghuramShetty_01192013_DSC06696.JPG';
import KallurtiKola9 from 'assets/images/bootharituals/KallurtiKola_BootaOnFire_PropertyOfRaghuramShetty_01192013_DSC06699.JPG';
import KallurtiKola10 from 'assets/images/bootharituals/KallurtiKola_BootaOnFire_PropertyOfRaghuramShetty_01192013_DSC06701.JPG';
import KallurtiKola11 from 'assets/images/bootharituals/KallurtiKola_BootaOnFire_PropertyOfRaghuramShetty_01192013_DSC06703.JPG';
import KallurtiKola12 from 'assets/images/bootharituals/KallurtiKola_BootaOnFire_PropertyOfRaghuramShetty_01192013_DSC06704.JPG';

import BoothaKolaKCA from 'assets/images/bootharituals/BoothaKolaByRaghuramShettyYakshalokaUSAt50thAnniversaryKCA_e1__KannadaSangha_DSC_2695-2.jpg';
import IrvinePerformance from 'assets/images/bootharituals/IrvineGlobalVillageFolkFestival_butaBoothaspirit_RaghuramShettyWithAfricanDrummers_StrangersJoinRovingEntertainment.jpg';

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

      {/* Gallery preview */}
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

      {/* Real Rituals Captured by Raghuram */}
      <div className="mt-16 border-t border-slate-700 pt-10">
        <div className="mb-8">
          <h2 className="text-4xl text-amber-300 mb-2">Real Rituals & Performances</h2>
          <p className="text-slate-300 text-lg">Documented performances and real rituals captured and sponsored by Raghuram Shetty / Yakshaloka US</p>
        </div>

        {/* Kalarti (Fire Ritual) Collection */}
        <div className="mb-12">
          <h3 className="text-2xl text-amber-400 mb-4">Kallurti Kola: Fire Rituals</h3>
          <p className="text-slate-400 text-sm mb-6">Historic documentation of Kallurti Kola (fire ritual) performances — a powerful tradition where masked performers enact fire-related narratives. These images represent crucial cultural documentation. All images captured and owned by Raghuram Shetty / Yakshaloka US (01/19/2013).</p>
          <GalleryLightbox
            items={[
              { type: 'image', src: KallurtiKola1, alt: 'Kallurti Kola Fire Ritual 1', caption: 'Boota on Fire - Moment 1' },
              { type: 'image', src: KallurtiKola2, alt: 'Kallurti Kola Fire Ritual 2', caption: 'Boota on Fire - Moment 2' },
              { type: 'image', src: KallurtiKola3, alt: 'Kallurti Kola Fire Ritual 3', caption: 'Boota on Fire - Moment 3' },
              { type: 'image', src: KallurtiKola4, alt: 'Kallurti Kola Fire Ritual 4', caption: 'Boota on Fire - Moment 4' },
              { type: 'image', src: KallurtiKola5, alt: 'Kallurti Kola Fire Ritual 5', caption: 'Boota on Fire - Moment 5' },
              { type: 'image', src: KallurtiKola6, alt: 'Kallurti Kola Fire Ritual 6', caption: 'Boota on Fire - Moment 6' },
              { type: 'image', src: KallurtiKola7, alt: 'Kallurti Kola Fire Ritual 7', caption: 'Boota on Fire - Moment 7' },
              { type: 'image', src: KallurtiKola8, alt: 'Kallurti Kola Fire Ritual 8', caption: 'Boota on Fire - Moment 8' },
              { type: 'image', src: KallurtiKola9, alt: 'Kallurti Kola Fire Ritual 9', caption: 'Boota on Fire - Moment 9' },
              { type: 'image', src: KallurtiKola10, alt: 'Kallurti Kola Fire Ritual 10', caption: 'Boota on Fire - Moment 10' },
              { type: 'image', src: KallurtiKola11, alt: 'Kallurti Kola Fire Ritual 11', caption: 'Boota on Fire - Moment 11' },
              { type: 'image', src: KallurtiKola12, alt: 'Kallurti Kola Fire Ritual 12', caption: 'Boota on Fire - Moment 12' },
            ]}
          />
        </div>

        {/* Sponsored Performances */}
        <div>
          <h3 className="text-2xl text-amber-400 mb-4">Sponsored Performances & Events</h3>
          <p className="text-slate-400 text-sm mb-6">Live performances and ritual demonstrations sponsored by Raghuram Shetty and Yakshaloka US at cultural festivals and events.</p>
          <GalleryLightbox
            items={[
              { type: 'image', src: BoothaKolaKCA, alt: 'KCA 50th Anniversary', caption: 'Bootha Kola Performance at Kannada Sangha 50th Anniversary (KCA)' },
              { type: 'image', src: IrvinePerformance, alt: 'Irvine Global Village Festival', caption: 'Irvine Global Village Folk Festival — Bootha Spirit Performance with International Rhythm Section' },
            ]}
          />
        </div>
      </div>

      {/* Ritual timeline (accessible accordion) */}
      <div className="mt-16 border-t border-slate-700 pt-10">
        <RitualTimeline />
      </div>

      <div className="mt-10">
        <p className="text-center text-slate-400">If you'd like, I can flesh out the timeline, add transcripts, captions and a lightbox gallery next.</p>
      </div>
    </div>
  );
};

export default BoothaRituals;
