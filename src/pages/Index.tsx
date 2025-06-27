
import ProfileHeader from '../components/ProfileHeader';
import ContactCard from '../components/ContactCard';
import BackgroundPattern from '../components/BackgroundPattern';
import ProductsSection from '../components/ProductsSection';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <BackgroundPattern />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="mb-12">
            <ProfileHeader />
          </div>
          
          {/* Products Section */}
          <ProductsSection />
          
          {/* Contact Information */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Get In Touch
            </h2>
            <ContactCard />
          </div>
          
          {/* Footer */}
          <div className="text-center pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm">
              © 2024 Madhankumar. C - Managing Director
            </p>
            <p className="text-white/50 text-xs mt-2">
              Precision • Trust • Excellence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
