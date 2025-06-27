
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ProductsSection = () => {
  const { theme } = useTheme();
  
  const products = [
    {
      id: 1,
      title: "Digital Weighing Scales",
      description: "High-precision digital scales for industrial and commercial use",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Electronic Balance Systems",
      description: "Advanced electronic balance solutions for accurate measurements",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="mb-12">
      <h2 className={`text-2xl md:text-3xl font-bold mb-8 text-center ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        Our Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
      
      {/* View All Products Button */}
      <div className="text-center">
        <Link
          to="/products"
          className={`inline-flex items-center space-x-2 px-8 py-4 rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-white/20 text-white hover:from-blue-500/30 hover:to-purple-500/30'
              : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-gray-900/20 text-gray-900 hover:from-blue-500/20 hover:to-purple-500/20'
          }`}
        >
          <span className="font-semibold">View All Products</span>
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default ProductsSection;
