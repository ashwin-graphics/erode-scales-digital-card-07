
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

  const handleSaveContact = () => {
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
      color: 'bg-gray-500', 
      link: 'https://maps.app.goo.gl/KUxj8dLZ4FkYaf5i8?g_st=ac',
      label: 'Website'
    },
    { 
      icon: <Facebook size={20} />, 
      color: 'bg-blue-600', 
      link: 'https://www.facebook.com/erode.scaales',
      label: 'Facebook'
    },
    { 
      icon: <Instagram size={20} />, 
      color: 'bg-gradient-to-br from-purple-500 to-pink-500', 
      link: 'https://www.instagram.com/erode_scales?igsh=ZGgxNTV5dmxzeDBm',
      label: 'Instagram'
    },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
        </svg>
      ), 
      color: 'bg-green-500', 
      link: 'https://wa.me/918122500800',
      label: 'WhatsApp'
    },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.369a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
      ), 
      color: 'bg-indigo-600', 
      link: '#',
      label: 'Discord'
    },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.867-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      ), 
      color: 'bg-green-500', 
      link: 'https://wa.me/918122500800',
      label: 'WhatsApp'
    }
  ];

  return (
    <div className={`flex flex-col items-center justify-center px-4 py-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      
      {/* Profile Photo */}
      <div className="mb-6">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#f05423] shadow-xl">
          <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center text-4xl font-bold text-white">
            MC
          </div>
        </div>
      </div>

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
      <div className="grid grid-cols-3 gap-4 mb-8 max-w-xs">
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

      {/* Add to Contact Button */}
      <div className="mb-12">
        <button
          onClick={handleSaveContact}
          className="bg-[#f05423] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#d44419] transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
        >
          <span className="text-2xl">+</span>
          Add to Contact
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
  );
};

export default HeroSection;
