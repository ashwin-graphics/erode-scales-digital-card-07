import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import BackgroundPattern from '../components/BackgroundPattern';
import Navigation from '../components/Navigation';
import AnimatedSection from '../components/AnimatedSection';
import { useTheme } from '../contexts/ThemeContext';

const Products = () => {
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
    },
    {
      id: 3,
      title: "Industrial Platform Scales",
      description: "Heavy-duty platform scales for warehouse and industrial weighing applications",
      image: "/lovable-uploads/d4e5f6a7-b8c9-4d3e-9f1a-2b3c4d5e6f7a.png"
    },
    {
      id: 4,
      title: "Precision Analytical Balances",
      description: "Laboratory-grade analytical balances for precise scientific measurements",
      image: "/lovable-uploads/e8f9a0b1-c2d3-4e5f-8a1b-3c4d5e6f7a8b.png"
    },
    {
      id: 5,
      title: "Heavy Duty Crane Scales",
      description: "Robust crane scales designed for heavy-duty industrial lifting and weighing",
      image: "/lovable-uploads/f2a3b4c5-d6e7-4f8a-9b1c-4d5e6f7a8b9c.png"
    },
    {
      id: 6,
      title: "Commercial Shop Scales",
      description: "Retail-friendly scales perfect for shops, markets and commercial establishments",
      image: "/lovable-uploads/a6b7c8d9-e0f1-4a2b-8c3d-5e6f7a8b9c0d.png"
    },
    {
      id: 7,
      title: "Counting Scales",
      description: "Specialized counting scales for inventory management and parts counting applications",
      image: "/lovable-uploads/b0c1d2e3-f4a5-4b6c-9d7e-6f8a9b0c1d2e.png"
    },
    {
      id: 8,
      title: "Portable Table Scales",
      description: "Compact and portable weighing solutions for versatile applications",
      image: "/lovable-uploads/c4d5e6f7-a8b9-4c0d-8e1f-7a9b0c1d2e3f.png"
    },
    {
      id: 9,
      title: "Professional Weighing Systems",
      description: "Advanced professional weighing systems for specialized industrial requirements",
      image: "/lovable-uploads/d8e9f0a1-b2c3-4d4e-9f5a-8b0c1d2e3f4a.png"
    },
    {
      id: 10,
      title: "Multi-Purpose Scales",
      description: "Versatile multi-purpose scales suitable for various weighing applications",
      image: "/lovable-uploads/e2f3a4b5-c6d7-4e8f-8a9b-9c0d1e2f3a4b.png"
    }
  ];

  return (
    <div className={`min-h-screen relative transition-colors duration-300 ${
      theme === 'dark' ? 'bg-slate-900' : 'bg-gray-50'
    }`}>
      <BackgroundPattern />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Navigation */}
          <AnimatedSection>
            <Navigation />
          </AnimatedSection>
          
          {/* Breadcrumb */}
          <AnimatedSection delay={100}>
            <div className="mb-8">
              <Link
                to="/"
                className={`inline-flex items-center space-x-2 transition-colors ${
                  theme === 'dark' ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                <ArrowLeft size={16} />
                <span>Back to Home</span>
              </Link>
            </div>
          </AnimatedSection>
          
          {/* Page Header */}
          <AnimatedSection delay={200}>
            <div className="text-center mb-12">
              <h1 className={`text-4xl md:text-5xl font-bold leading-tight mb-4 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent'
              }`}>
                Our Products
              </h1>
              <p className={`text-xl max-w-2xl mx-auto ${
                theme === 'dark' ? 'text-white/80' : 'text-gray-700'
              }`}>
                Discover our comprehensive range of weighing solutions designed for precision, reliability, and excellence across all industries.
              </p>
            </div>
          </AnimatedSection>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {products.map((product, index) => (
              <AnimatedSection 
                key={product.id}
                delay={300 + (index * 100)}
              >
                <ProductCard
                  title={product.title}
                  description={product.description}
                  image={product.image}
                />
              </AnimatedSection>
            ))}
          </div>
          
          {/* Contact CTA */}
          <AnimatedSection delay={800}>
            <div className={`text-center backdrop-blur-sm rounded-xl border p-8 ${
              theme === 'dark'
                ? 'bg-white/10 border-white/20'
                : 'bg-gray-900/10 border-gray-900/20'
            }`}>
              <h3 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Need a Custom Solution?
              </h3>
              <p className={`mb-6 max-w-2xl mx-auto ${
                theme === 'dark' ? 'text-white/80' : 'text-gray-700'
              }`}>
                Can't find what you're looking for? Contact us for custom weighing solutions tailored to your specific requirements.
              </p>
              <Link
                to="/"
                className={`inline-flex items-center space-x-2 px-8 py-4 rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-white/20 text-white hover:from-blue-500/30 hover:to-purple-500/30'
                    : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-gray-900/20 text-gray-900 hover:from-blue-500/20 hover:to-purple-500/20'
                }`}
              >
                <span className="font-semibold">Contact Us</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Products;
