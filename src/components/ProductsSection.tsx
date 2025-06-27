
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { ArrowRight } from 'lucide-react';

const ProductsSection = () => {
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
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
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
          className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-white/20 backdrop-blur-sm text-white hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 hover:scale-105"
        >
          <span className="font-semibold">View All Products</span>
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default ProductsSection;
