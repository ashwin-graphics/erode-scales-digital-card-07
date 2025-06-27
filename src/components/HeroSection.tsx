
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
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
      icon: <Phone size={24} />, 
      color: 'bg-green-500', 
      link: 'tel:+918122500800',
      label: 'Phone'
    },
    { 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
        </svg>
      ), 
      color: 'bg-green-400', 
      link: 'https://wa.me/918122500800',
      label: 'WhatsApp'
    },
    { 
      icon: <Mail size={24} />, 
      color: 'bg-blue-500', 
      link: 'mailto:erodescaales@gmail.com',
      label: 'Email'
    },
    { 
      icon: <Instagram size={24} />, 
      color: 'bg-gradient-to-br from-purple-500 to-pink-500', 
      link: 'https://www.instagram.com/erode_scales?igsh=ZGgxNTV5dmxzeDBm',
      label: 'Instagram'
    },
    { 
      icon: <MapPin size={24} />, 
      color: 'bg-blue-600', 
      link: 'https://maps.app.goo.gl/KUxj8dLZ4FkYaf5i8?g_st=ac',
      label: 'Location'
    },
    { 
      icon: <Facebook size={24} />, 
      color: 'bg-blue-600', 
      link: 'https://www.facebook.com/erode.scaales',
      label: 'Facebook'
    }
  ];

  return (
    <div className={`flex flex-col items-center justify-center px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      
      {/* Main Business Card - Centered */}
      <div className="mb-8 w-full max-w-sm">
        <div className={`p-8 rounded-3xl shadow-2xl backdrop-blur-sm border-2 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 border-yellow-400/30' 
            : 'bg-gradient-to-br from-white/90 via-gray-50/90 to-white/90 border-gray-300/50'
        }`}>
          
          {/* Logo/Brand Section */}
          <div className="text-center mb-6">
            <div className={`inline-block p-4 rounded-2xl mb-4 ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-yellow-400/20 to-orange-400/20 border border-yellow-400/30' 
                : 'bg-gradient-to-br from-blue-400/20 to-purple-400/20 border border-gray-300'
            }`}>
              <div className="text-3xl font-bold">⚖️</div>
            </div>
            <div className={`text-xs font-semibold tracking-wider mb-2 ${
              theme === 'dark' ? 'text-yellow-400' : 'text-blue-600'
            }`}>
              PRECISION WEIGHING SOLUTIONS
            </div>
          </div>

          {/* Profile Section */}
          <div className="text-center mb-6">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
              MC
            </div>
            
            <h2 className={`text-xl font-bold mb-1 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Madhankumar. C
            </h2>
            
            <p className={`text-sm font-semibold mb-3 ${
              theme === 'dark' ? 'text-yellow-400' : 'text-blue-600'
            }`}>
              Managing Director
            </p>
            
            <p className={`text-xs leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I lead as the managing director, mastering the art of precision weighing with excellence in every solution I craft.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-4">
            <button 
              onClick={handleContact}
              className={`flex-1 py-2 px-4 rounded-xl text-xs font-semibold transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Contact
            </button>
            <button 
              onClick={handleSaveContact}
              className={`flex-1 py-2 px-4 rounded-xl text-xs font-semibold border transition-all duration-300 ${
                theme === 'dark'
                  ? 'border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10'
                  : 'border-blue-600/50 text-blue-600 hover:bg-blue-600/10'
              }`}
            >
              Save Contact
            </button>
          </div>
        </div>
      </div>

      {/* Social Media Icons Grid - Centered */}
      <div className="grid grid-cols-3 gap-4 w-full max-w-xs">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-16 h-16 rounded-2xl ${social.color} flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-xl mx-auto`}
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Bottom tagline */}
      <div className="mt-8 text-center">
        <p className={`text-sm italic ${
          theme === 'dark' ? 'text-white/60' : 'text-gray-600'
        }`}>
          "Trust • Excellence • Innovation"
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
