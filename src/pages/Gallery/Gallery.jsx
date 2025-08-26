import React from 'react';
import Yakshagana1 from 'assets/images/Yakshagana1.jpg';
import Yakshagana2 from 'assets/images/Yakshagana2.jpg';
import BoothaKola1 from 'assets/images/BoothaKola1.jpg';
import DSC3704 from 'assets/images/DSC_3704.jpg';

const galleryItems = [
  { src: Yakshagana1, alt: 'Yakshagana Performance', title: 'Yakshagana Performance', description: 'Traditional Yakshagana performers in elaborate costumes.' },
  { src: Yakshagana2, alt: 'Yakshagana Dance', title: 'Yakshagana Dance', description: 'A vibrant scene from a Yakshagana play.' },
  { src: BoothaKola1, alt: 'Bootha Kola', title: 'Bootha Kola', description: 'Bootha Kola ritual performance.' },
  { src: DSC3704, alt: 'Yakshagana Hero', title: 'Yakshagana Hero', description: 'Yakshagana performer.' }
];

const Gallery = () => {
  return (
    <div className="gallery container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <div key={index} className="gallery-item rounded overflow-hidden shadow-lg">
            <img src={item.src} alt={item.alt} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-700 text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
