
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Business Card */}
      <div className="relative mb-12">
        <div className={`mx-auto max-w-lg p-8 rounded-2xl shadow-2xl ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-slate-800 via-blue-900 to-purple-900 border border-white/20' 
            : 'bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-gray-200'
        }`}>
          {/* Business Card Content - Horizontal Layout */}
          <div className="flex items-center space-x-6">
            {/* Profile Avatar */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                MC
              </div>
            </div>
            
            {/* Business Info */}
            <div className="flex-1">
              <h3 className={`text-2xl font-bold mb-1 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                MADHANKUMAR. C
              </h3>
              
              <p className={`text-lg font-semibold mb-3 ${
                theme === 'dark' ? 'text-blue-300' : 'text-blue-600'
              }`}>
                MANAGING DIRECTOR
              </p>
              
              <div className={`text-sm space-y-1 ${
                theme === 'dark' ? 'text-white/80' : 'text-gray-700'
              }`}>
                <p>Precision Weighing Solutions</p>
                <p>Trust • Excellence • Innovation</p>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="flex-shrink-0">
              <div className={`w-16 h-16 rounded-lg ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-blue-500/30 to-purple-500/30' 
                  : 'bg-gradient-to-br from-blue-400/20 to-purple-400/20'
              } flex items-center justify-center`}>
                <div className={`text-2xl font-bold ${
                  theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                }`}>
                  ⚖️
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center space-y-6">
        <h1 className={`text-4xl md:text-6xl font-bold leading-tight ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent'
            : 'bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent'
        }`}>
          Precision Weighing
          <br />
          Solutions
        </h1>
        
        <div className={`inline-block px-6 py-3 rounded-full border backdrop-blur-sm ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-white/20'
            : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-gray-900/20'
        }`}>
          <p className={`text-xl md:text-2xl font-semibold ${
            theme === 'dark' ? 'text-white/90' : 'text-gray-800'
          }`}>
            Trust • Excellence • Innovation
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto space-y-3 px-4">
          <p className={`text-lg md:text-xl font-medium italic ${
            theme === 'dark' ? 'text-white/80' : 'text-gray-700'
          }`}>
            "Leading the industry with cutting-edge weighing technology"
          </p>
          <p className={`text-base md:text-lg ${
            theme === 'dark' ? 'text-white/70' : 'text-gray-600'
          }`}>
            Delivering precision instruments and exceptional service since our inception
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
