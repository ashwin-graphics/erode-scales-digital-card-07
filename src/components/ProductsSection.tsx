
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
      description: "High-precision digital POS scales for retail and commercial use with clear display",
      image: "/lovable-uploads/0b1bb6e9-8b22-4e8d-9fac-8a2b7a7d9c3e.png"
    },
    {
      id: 2,
      title: "Electronic Balance Systems",
      description: "Advanced electronic balance solutions for accurate measurements in laboratory settings",
      image: "/lovable-uploads/93c95979-9c4b-4b5e-a7a7-8b3d2c1e4f5a.png"
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
              ? 'bg-gradient-to-r from-[#f05423]/20 to-orange-500/20 border-white/20 text-white hover:from-[#f05423]/30 hover:to-orange-500/30'
              : 'bg-gradient-to-r from-[#f05423]/10 to-orange-500/10 border-gray-900/20 text-gray-900 hover:from-[#f05423]/20 hover:to-orange-500/20'
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
