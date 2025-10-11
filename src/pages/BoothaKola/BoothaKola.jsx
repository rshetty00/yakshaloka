import React from 'react';
import Bootha1 from 'assets/images/RaghuramShetty_Shumbha_HeadshotYakshaganaPhoto_20161229_010652.jpg';
import Bootha2 from 'assets/images/BoothaKola2.jpg';
import Bootha3 from 'assets/images/BoothaKola1.jpg';

const BoothaKola = () => {
  return (
    <div className="bootha-kola container mx-auto py-8">
      <h2 className="text-7xl font-bold mb-6 text-center font-easter text-yellow-500">Bootha Kola Ritual</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src={Bootha1} alt="Bootha Kola Ritual 1" className="w-full h-auto rounded shadow" />
        <img src={Bootha2} alt="Bootha Kola Ritual 2" className="w-full h-auto rounded shadow" />
        <img src={Bootha3} alt="Bootha Kola Ritual 3" className="w-full h-auto rounded shadow" />
      </div>
      <p className="mt-6 text-center">
        Bootha Kola is a traditional ritual from coastal Karnataka, performed to honor local deities.
      </p>
    </div>
  );
};

export default BoothaKola;
