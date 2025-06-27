
import { Link, useLocation } from 'react-router-dom';
import { Home, Package } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="mb-8">
      <div className="flex justify-center space-x-6">
        <Link
          to="/"
          className={`flex items-center space-x-2 px-6 py-3 rounded-full border border-white/20 backdrop-blur-sm transition-all duration-300 ${
            location.pathname === '/' 
              ? 'bg-white/20 text-white' 
              : 'bg-white/10 text-white/80 hover:bg-white/15 hover:text-white'
          }`}
        >
          <Home size={18} />
          <span className="font-medium">Home</span>
        </Link>
        
        <Link
          to="/products"
          className={`flex items-center space-x-2 px-6 py-3 rounded-full border border-white/20 backdrop-blur-sm transition-all duration-300 ${
            location.pathname === '/products' 
              ? 'bg-white/20 text-white' 
              : 'bg-white/10 text-white/80 hover:bg-white/15 hover:text-white'
          }`}
        >
          <Package size={18} />
          <span className="font-medium">Products</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
