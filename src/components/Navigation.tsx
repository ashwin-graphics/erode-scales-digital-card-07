
import { Link, useLocation } from 'react-router-dom';
import { Home, Package } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const location = useLocation();
  const { theme } = useTheme();

  const linkBaseClass = `flex items-center space-x-2 px-6 py-3 rounded-full border backdrop-blur-sm transition-all duration-300`;
  
  const getActiveClass = (isActive: boolean) => {
    if (theme === 'dark') {
      return isActive 
        ? 'bg-white/20 text-white border-white/20' 
        : 'bg-white/10 text-white/80 hover:bg-white/15 hover:text-white border-white/20';
    } else {
      return isActive
        ? 'bg-gray-900/20 text-gray-900 border-gray-900/20'
        : 'bg-gray-900/10 text-gray-700 hover:bg-gray-900/15 hover:text-gray-900 border-gray-900/20';
    }
  };

  return (
    <nav className="mb-8">
      <div className="flex justify-center items-center space-x-4">
        <Link
          to="/"
          className={`${linkBaseClass} ${getActiveClass(location.pathname === '/')}`}
        >
          <Home size={18} />
          <span className="font-medium">Home</span>
        </Link>
        
        <Link
          to="/products"
          className={`${linkBaseClass} ${getActiveClass(location.pathname === '/products')}`}
        >
          <Package size={18} />
          <span className="font-medium">Products</span>
        </Link>

        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navigation;
