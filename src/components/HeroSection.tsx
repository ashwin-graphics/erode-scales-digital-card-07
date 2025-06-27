
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Phone, Mail, MapPin, Instagram, Facebook, Globe } from 'lucide-react';
import { generateVCard } from '../utils/vcard';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleContact = () => {
    window.open('tel:+918122500800', '_blank');
  };

  const handleSaveContact = async () => {
    // Try Web Share API first for direct contact saving
    if (navigator.share && navigator.canShare) {
      const vcard = generateVCard();
      const blob = new Blob([vcard], { type: 'text/vcard' });
      const file = new File([blob], 'Madhankumar-C-Contact.vcf', { type: 'text/vcard' });
      
      try {
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: 'Madhankumar C - Contact',
            text: 'Save contact for Madhankumar C, Managing Director',
            files: [file]
          });
          return;
        }
      } catch (error) {
        console.log('Web Share API failed, falling back to download');
      }
    }

    // Fallback to vCard download
    const vcard = generateVCard();
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Madhankumar-C-Contact.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const socialLinks = [
    { 
      icon: <Globe size={20} />, 
      link: 'https://maps.app.goo.gl/KUxj8dLZ4FkYaf5i8?g_st=ac',
      label: 'Website'
    },
    { 
      icon: <Facebook size={20} />, 
      link: 'https://www.facebook.com/erode.scaales',
      label: 'Facebook'
    },
    { 
      icon: <Instagram size={20} />, 
      link: 'https://www.instagram.com/erode_scales?igsh=ZGgxNTV5dmxzeDBm',
      label: 'Instagram'
    },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
        </svg>
      ), 
      link: 'https://wa.me/918122500800',
      label: 'WhatsApp'
    }
  ];

  return (
    <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Background Section with Professional Photo */}
      <div className="relative h-80 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/16b6abab-dc68-4172-9ffb-b997e2cf7663.png')`
          }}
        >
          {/* Overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Animated Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-orange-300/20 rounded-full blur-lg animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-red-300/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
      </div>

      {/* White Content Section */}
      <div className={`relative ${theme === 'dark' ? 'bg-slate-900' : 'bg-white'} pt-20 pb-8 px-4`}>
        
        {/* Profile Photo - Positioned at intersection using the same uploaded image */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white">
            <img 
              src="/lovable-uploads/16b6abab-dc68-4172-9ffb-b997e2cf7663.png" 
              alt="Madhankumar C"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pt-8">
          {/* Name and Title */}
          <div className="text-center mb-8">
            <h1 className={`text-4xl md:text-5xl font-bold mb-2 ${
              theme === 'dark' ? 'text-[#f05423]' : 'text-[#f05423]'
            }`}>
              Madhankumar C
            </h1>
            <p className={`text-xl md:text-2xl ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}>
              Managing Director
            </p>
          </div>

          {/* Social Icons Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8 max-w-xs">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-xl ${
                  theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100 hover:bg-gray-200'
                } flex items-center justify-center ${
                  theme === 'dark' ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                } transition-all duration-300 hover:scale-110`}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Save Contact Button */}
          <div className="mb-12">
            <button
              onClick={handleSaveContact}
              className="bg-[#f05423] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#d44419] transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <span className="text-2xl">+</span>
              Save Contact
            </button>
          </div>

          {/* About Me Section */}
          <div className="w-full max-w-2xl">
            <h2 className={`text-2xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              ABOUT ME
            </h2>
            <div className={`h-1 w-16 bg-[#f05423] mb-6`}></div>
            <p className={`text-base leading-relaxed ${
              theme === 'dark' ? 'text-white/80' : 'text-gray-600'
            }`}>
              I lead as the managing director, mastering the art of precision weighing with excellence in every solution I craft. With years of experience in the weighing industry, I am committed to delivering innovative solutions that meet the highest standards of accuracy and reliability. My passion for precision engineering drives me to continuously improve our products and services, ensuring our customers receive the best weighing solutions available in the market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
