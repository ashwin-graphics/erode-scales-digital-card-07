
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import BackgroundPattern from '../components/BackgroundPattern';
import Navigation from '../components/Navigation';

const Products = () => {
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
    },
    {
      id: 3,
      title: "Industrial Platform Scales",
      description: "Heavy-duty platform scales for warehouse and industrial applications",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Precision Analytical Balances",
      description: "Laboratory-grade analytical balances for precise measurements",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Heavy Duty Floor Scales",
      description: "Robust floor scales designed for heavy-duty industrial weighing",
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Portable Weighing Systems",
      description: "Compact and portable weighing solutions for field operations",
      image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=300&fit=crop"
    },
    {
      id: 7,
      title: "Laboratory Balances",
      description: "Professional laboratory balances for research and quality control",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop"
    },
    {
      id: 8,
      title: "Commercial Shop Scales",
      description: "Retail-friendly scales perfect for shops and markets",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
    },
    {
      id: 9,
      title: "Truck Weighbridge Systems",
      description: "Large-scale weighbridge systems for vehicle and cargo weighing",
      image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=400&h=300&fit=crop"
    },
    {
      id: 10,
      title: "Counting Scales",
      description: "Specialized counting scales for inventory and parts management",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <BackgroundPattern />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Navigation */}
          <Navigation />
          
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
          </div>
          
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight mb-4">
              Our Products
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Discover our comprehensive range of weighing solutions designed for precision, reliability, and excellence across all industries.
            </p>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
              />
            ))}
          </div>
          
          {/* Contact CTA */}
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Contact us for custom weighing solutions tailored to your specific requirements.
            </p>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-white/20 backdrop-blur-sm text-white hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 hover:scale-105"
            >
              <span className="font-semibold">Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
