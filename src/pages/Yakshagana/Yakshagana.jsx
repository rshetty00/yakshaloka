import React from 'react';
import Yakshagana1 from 'assets/images/Yakshagana1.jpg';
import Yakshagana2 from 'assets/images/Yakshagana2.jpg';
import OtherArtsSection from '../../components/OtherArtsSection';

const Yakshagana = () => {
  return (
    <div className="yakshagana container mx-auto py-8">
      <h2 className="text-7xl font-bold mb-6 text-center font-easter text-red-500">Yakshagana</h2>
      <p className="mb-6 text-center">
        Yakshagana is a traditional theatre form from Karnataka, combining dance, music, and dialogues.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src={Yakshagana1} alt="Yakshagana Scene 1" className="w-full h-auto rounded shadow" />
        <img src={Yakshagana2} alt="Yakshagana Scene 2" className="w-full h-auto rounded shadow" />
      </div>
      <OtherArtsSection
        title="Yakshagana: Curated Videos"
        subtitle="Selected performances and related videos."
        listId="yakshagana"
        initialHeaderVariant="heritage"
        initialViewMode="optionA"
      />
    </div>
  );
};

export default Yakshagana;
