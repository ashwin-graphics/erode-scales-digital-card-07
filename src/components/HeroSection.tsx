
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    { 
      icon: <Phone size={24} />, 
      color: 'bg-green-500', 
      link: 'tel:+918122500800',
      label: 'Phone'
    },
    { 
      icon: <Phone size={24} />, 
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
    <div className={`relative overflow-hidden min-h-screen flex flex-col items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      
      {/* Main Business Card */}
      <div className="relative mb-8 max-w-sm w-full mx-4">
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
            <button className={`flex-1 py-2 px-4 rounded-xl text-xs font-semibold transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}>
              Contact
            </button>
            <button className={`flex-1 py-2 px-4 rounded-xl text-xs font-semibold border transition-all duration-300 ${
              theme === 'dark'
                ? 'border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10'
                : 'border-blue-600/50 text-blue-600 hover:bg-blue-600/10'
            }`}>
              Save Contact
            </button>
          </div>
        </div>
      </div>

      {/* Social Media Icons Grid */}
      <div className="grid grid-cols-3 gap-4 max-w-xs w-full mx-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-16 h-16 rounded-2xl ${social.color} flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-xl`}
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Bottom tagline */}
      <div className="mt-8 text-center px-4">
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
