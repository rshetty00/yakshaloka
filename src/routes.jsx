import Home from './pages/Home/Home';
import Yakshagana from './pages/Yakshagana/Yakshagana';
import BoothaKola from './pages/BoothaKola/BoothaKola';
import Gallery from './pages/Gallery/Gallery';
import Credits from './pages/Credits/Credits';

export const routes = [
  { path: '/', component: Home },
  { path: '/yakshagana', component: Yakshagana },
  { path: '/boothakola', component: BoothaKola },
  { path: '/gallery', component: Gallery },
  { path: '/credits', component: Credits }
];
