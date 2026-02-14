// Simple curated tours configuration.
// Each tour targets a gallery group (`yakshagana` | `bootakola` | `other`) and
// provides a list of keyword selectors (matched against image filename/title).
const tours = [
  {
    id: 'yakshagana-costumes',
    group: 'yakshagana',
    title: 'Yakshagana: Costumes & Characters',
    description: 'A curated tour focusing on colorful costumes, makeup and characters from Yakshagana.',
    selectors: ['BannadaVesha', 'RaghuramShetty', 'PrathibhaShetty', 'Vaali', 'Shumbha']
  },
  {
    id: 'boota-rituals',
    group: 'bootakola',
    title: 'Bootha Kola: Ritual Moments',
    description: 'Key ritual moments and performances from Bootha/Bootha Kola.',
    selectors: ['Bootha', 'Boota', 'Buta', 'Panjurli']
  }
];

export default tours;
