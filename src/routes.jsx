import Home from './pages/Home/Home';
import Yakshagana from './pages/Yakshagana/Yakshagana';
import BoothaKola from './pages/BoothaKola/BoothaKola';
import Gallery from './pages/Gallery/Gallery';
import Credits from './pages/Credits/Credits';
import About from 'pages/About/About';
import BoothaRituals from './pages/BoothaRituals/BoothaRituals';

export const routes = [
  { path: '/', component: Home },
  { path: '/yakshagana', component: Yakshagana },
  { path: '/kola-performances', component: BoothaKola },
  { path: '/bootharituals', component: BoothaRituals },
  { path: '/gallery', component: Gallery },
  { path: '/credits', component: Credits },
  { path: '/about', component: About }
];
