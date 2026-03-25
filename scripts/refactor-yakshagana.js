const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/pages/Yakshagana/Yakshagana.jsx');

let content = fs.readFileSync(filePath, 'utf8');

// Create new repertoire definition that pulls from data file
const newRepertoireDefinition = `  // Repertoire data - pulls from central config
  const repertoire = useMemo(() => {
    const vaaliConfig = getRepertoireByKey('vaali');
    return [
      {
        cover: VaaliPoster,
        title: vaaliConfig.title,
        origin: vaaliConfig.origin,
        duration: vaaliConfig.duration,
        summary: vaaliConfig.summary,
        details: vaaliConfig.details,
        videoUrl: vaaliConfig.youtubeUrl,
        gallery: [
          { type: 'image', src: VaaliPoster, caption: 'Official Vaali poster' },
          { type: 'image', src: VaaliStill, caption: 'Vaali in performance form' }
        ],
        cast: ['Raghuram Shetty', 'YakshalokaUS Ensemble'],
        music: ['Bhagavata', 'Maddale', 'Chende', 'Harmonium', 'Chakra Tala'],
        accent: vaaliConfig.accent
      },
      {
        cover: Yakshagana2,
        title: '"The Epic Vanquishing of Ravana"',
        origin: 'Ramayana',
        duration: '90-120 min',
        summary: 'A fierce battle of Rama - Ravana, Ravana\\'s Ten-Headed Sovereign, Rama\\'s heroic talents, and power of Self knowledge',
        cast: ['Raghuram', 'Vedavit', 'Viravara', 'Abhishek', 'Priya'],
        music: ['Bhaagavata', 'Chakra taala', 'Maddale', 'Chende', 'Harmonium'],
        accent: 'amber'
      },
      {
        cover: HeroImg,
        title: 'Goddess Durga',
        origin: 'Devi Bhagavatam',
        duration: '120-150 min',
        summary: 'A vibrant celebration of women empowerment and divine union of universal powers with grandeur, chilling devotion, and classical choreography.',
        cast: ['Raghuram', 'Prathibha', 'Vedavit', 'Viravara'],
        music: ['Bhagavata', 'Harmonium', 'Maddale', 'Chende', 'Chakra Tala'],
        accent: 'blue'
      }
    ];
  }, []);`;

// Replace the old repertoire useMemo definition
// Match from "// Placeholder data" to the closing ], []);
const repertoireRegex = /\/\/ Placeholder data.*?\], \[\]\);/s;
content = content.replace(repertoireRegex, newRepertoireDefinition);

fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ Yakshagana.jsx refactored successfully!');
console.log('   - Vaali config now pulls from data/repertoires.js');
console.log('   - File structure ready for auto-loading stills from folders');
