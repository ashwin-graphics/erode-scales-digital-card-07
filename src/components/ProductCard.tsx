
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Skeleton } from './ui/skeleton';
import { MessageCircle } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
}

const ProductCard = ({ title, description, image }: ProductCardProps) => {
  const { theme } = useTheme();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleWhatsAppEnquiry = () => {
    const message = `Hello! I have come to enquire about ${title}. Could you please provide more information about pricing, specifications, and availability?`;
    const whatsappUrl = `https://wa.me/918122500800?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={`backdrop-blur-sm rounded-xl border overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#f05423]/20 ${
      theme === 'dark'
        ? 'bg-white/10 border-white/20 hover:bg-white/20'
        : 'bg-gray-900/10 border-gray-900/20 hover:bg-gray-900/20'
    }`}>
      <div className="aspect-video overflow-hidden relative">
        {!imageLoaded && !imageError && (
          <Skeleton className="w-full h-full absolute inset-0" />
        )}
        {!imageError ? (
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className={`w-full h-full flex items-center justify-center ${
            theme === 'dark' ? 'bg-gray-800 text-white/60' : 'bg-gray-200 text-gray-600'
          }`}>
            <span className="text-sm">Image unavailable</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className={`text-lg font-semibold mb-2 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          {title}
        </h3>
        <p className={`text-sm mb-4 ${
          theme === 'dark' ? 'text-white/80' : 'text-gray-700'
        }`}>
          {description}
        </p>
        
        {/* Contact & Enquire Button */}
        <button
          onClick={handleWhatsAppEnquiry}
          className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
            theme === 'dark'
              ? 'bg-green-500 hover:bg-green-600 text-white'
              : 'bg-green-600 hover:bg-green-700 text-white'
          }`}
        >
          <MessageCircle size={16} />
          <span className="text-sm font-medium">Contact & Enquire</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
