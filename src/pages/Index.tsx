
import HeroSection from '../components/HeroSection';
import ContactCard from '../components/ContactCard';
import BackgroundPattern from '../components/BackgroundPattern';
import ProductsSection from '../components/ProductsSection';
import Navigation from '../components/Navigation';
import { useTheme } from '../contexts/ThemeContext';

const Index = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen relative transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <BackgroundPattern />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <Navigation />
          
          {/* Hero Section */}
          <div className="mb-12">
            <HeroSection />
          </div>
          
          {/* Products Section */}
          <ProductsSection />
          
          {/* Contact Information */}
          <div className="mb-8">
            <h2 className={`text-2xl md:text-3xl font-bold mb-8 text-center ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Get In Touch
            </h2>
            <ContactCard />
          </div>
          
          {/* Footer */}
          <div className={`text-center pt-8 border-t ${
            theme === 'dark' ? 'border-white/20' : 'border-gray-900/20'
          }`}>
            <p className={`text-sm ${
              theme === 'dark' ? 'text-white/60' : 'text-gray-600'
            }`}>
              © 2024 Madhankumar. C - Managing Director
            </p>
            <p className={`text-xs mt-2 ${
              theme === 'dark' ? 'text-white/50' : 'text-gray-500'
            }`}>
              Precision • Trust • Excellence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
