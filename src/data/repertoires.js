/**
 * Repertoires Configuration
 * 
 * Each repertoire should have:
 * - key: unique identifier (used for folder naming)
 * - title: full display title
 * - shortTitle: brief name (for breadcrumbs)
 * - origin: tradition/origin details
 * - duration: performance duration
 * - summary: short description
 * - details: long description
 * - youtubeUrl: main performance reel URL (YouTube Shorts or full link)
 * - folderPath: relative path to assets folder
 * - accent: color theme (amber|blue)
 */

export const REPERTOIRES = [
  {
    key: 'vaali',
    title: 'Vaali: The Eternal Chronicle of the Unbeaten Emperor',
    shortTitle: 'Vaali',
    origin: 'Ramayana',
    duration: '45 mins',
    summary: 'A fierce retelling of Vaali\'s unmatched might — the warrior who bent gods and demons alike. His power churns oceans, his roar shakes kingdoms, and destiny itself bows before him.',
    details: 'Guru, performer, and storyteller Raghuram Shetty revives this legendary emperor through Yakshagana, blending deep spiritual, historical, psychological, and scientific insight. With intricate face painting, glittering costumes, sharpened dialogue, and high-energy choreography by the YakshalokaUS team, the saga of Vaali unfolds with commanding force for global audiences.',
    youtubeUrl: 'https://youtube.com/shorts/_O246SlBDwo?si=tfUNI9SCWS0R1h6u',
    folderPath: 'assets/images/yakshagana/repertoire/vaali',
    accent: 'amber'
  },
  {
    key: 'ravana',
    title: 'The Epic Vanquishing of Ravana',
    shortTitle: 'Ravana',
    origin: 'Ramayana',
    duration: '90-120 min',
    summary: 'A fierce battle of Rama and Ravana, the ten-headed sovereign; a dramatic journey through valor, strategy, and the power of self-knowledge.',
    details: 'Coming soon',
    youtubeUrl: null,
    folderPath: 'assets/images/yakshagana/repertoire/ravana',
    accent: 'blue',
    cast: ['Raghuram', 'Vedavit', 'Viravara', 'Abhishek', 'Priya'],
    music: ['Bhagavata', 'Chakra Tala', 'Maddale', 'Chende', 'Harmonium']
  },
  {
    key: 'bharata',
    title: 'Bharata: The Devoted King',
    shortTitle: 'Bharata',
    origin: 'Ramayana',
    duration: '40 mins',
    summary: 'Coming soon',
    details: 'Coming soon',
    youtubeUrl: null,
    folderPath: 'assets/images/yakshagana/repertoire/bharata',
    accent: 'amber'
  }
];

/**
 * Asset loading convention:
 * - poster.jpg or poster.png → Hero poster image
 * - reel.mp4 (optional, usually YouTube link is used)
 * - still-01.jpg, still-02.jpg, etc. → Performance stills (auto-loaded in order)
 * 
 * Example folder structure:
 * src/assets/images/yakshagana/repertoire/vaali/
 *   ├── poster.jpg
 *   ├── still-01.jpg
 *   ├── still-02.jpg
 *   └── still-03.jpg
 */

export const getRepertoireByKey = (key) => {
  return REPERTOIRES.find((r) => r.key === key);
};

export const getAllRepertoires = () => {
  return REPERTOIRES;
};
