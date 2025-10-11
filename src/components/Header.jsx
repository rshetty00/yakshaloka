import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png'; // ✅ import logo

export default function Header() {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Yakshagana', path: '/yakshagana' },
    { name: 'Bootha Kola', path: '/boothakola' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Credits', path: '/credits' },
    { name: 'About', path: '/about' }
  ];

  return (
    <header className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo section */}
        <div className="flex items-center mb-4 md:mb-0 cursor-pointer">
          <Link to="/">
            <img 
              src={Logo} 
              alt="Yakshaloka Logo" 
              className="h-12 md:h-14 w-auto object-contain" // ✅ responsive sizing
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-1 md:gap-3">
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className="px-4 py-2 text-sm md:text-base font-medium hover:text-yellow-300 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
