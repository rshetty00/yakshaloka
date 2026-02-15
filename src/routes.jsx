import Home from './pages/Home/Home';
import OurStory from './pages/OurStory/OurStory';
import Raghuram from './pages/Raghuram/Raghuram';
import ShivaratriPerformances from './pages/ShivaratriPerformances/ShivaratriPerformances';
import Yakshagana from './pages/Yakshagana/Yakshagana';
import BoothaKola from './pages/BoothaKola/BoothaKola';
import Gallery from './pages/Gallery/Gallery';
import YakshaganaGallery from './pages/Gallery/YakshaganaGallery';
import BoothakolaGallery from './pages/Gallery/BoothakolaGallery';
import Credits from './pages/Credits/Credits';
import About from 'pages/About/About';
import BoothaRituals from './pages/BoothaRituals/BoothaRituals';
import OtherArts from './pages/OtherArts/OtherArts';

export const routes = [
  { path: '/', component: Home },
  { path: '/our-story', component: OurStory },
  { path: '/raghuram', component: Raghuram },
  { path: '/shivaratri-performances', component: ShivaratriPerformances },
  { path: '/yakshagana', component: Yakshagana },
  { path: '/kola-performances', component: BoothaKola },
  { path: '/other-arts', component: OtherArts },
  { path: '/bootharituals', component: BoothaRituals },
  { path: '/gallery', component: Gallery },
  { path: '/gallery/yakshagana', component: YakshaganaGallery },
  { path: '/gallery/boothakola', component: BoothakolaGallery },
  { path: '/credits', component: Credits },
  { path: '/about', component: About }
];
