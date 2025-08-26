import React from 'react';
import Yakshagana1 from 'assets/images/Yakshagana1.jpg';
import Yakshagana2 from 'assets/images/Yakshagana2.jpg';

const Yakshagana = () => {
  return (
    <div className="yakshagana container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Yakshagana</h2>
      <p className="mb-6 text-center">
        Yakshagana is a traditional theatre form from Karnataka, combining dance, music, and dialogues.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src={Yakshagana1} alt="Yakshagana Scene 1" className="w-full h-auto rounded shadow" />
        <img src={Yakshagana2} alt="Yakshagana Scene 2" className="w-full h-auto rounded shadow" />
      </div>
    </div>
  );
};

export default Yakshagana;
