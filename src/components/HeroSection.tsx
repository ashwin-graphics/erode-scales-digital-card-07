
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const colorBlocks = [
    'bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400',
    'bg-purple-400', 'bg-pink-400', 'bg-indigo-400', 'bg-orange-400',
    'bg-teal-400', 'bg-cyan-400', 'bg-lime-400', 'bg-rose-400',
    'bg-violet-400', 'bg-amber-400', 'bg-emerald-400', 'bg-sky-400'
  ];

  return (
    <div className={`relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Decorative Card Background */}
      <div className="relative mb-12">
        <div className={`mx-auto max-w-sm p-6 rounded-3xl shadow-2xl ${
          theme === 'dark' 
            ? 'bg-white/10 backdrop-blur-sm border border-white/20' 
            : 'bg-gray-900/10 backdrop-blur-sm border border-gray-900/20'
        }`}>
          {/* Colorful Grid Pattern */}
          <div className="grid grid-cols-4 gap-2 mb-6">
            {colorBlocks.map((color, index) => (
              <div
                key={index}
                className={`aspect-square rounded-lg ${color} opacity-80 transform hover:scale-110 transition-transform duration-200`}
              />
            ))}
          </div>
          
          {/* Profile Card Content */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg">
              MC
            </div>
            
            <h3 className={`text-lg font-bold mb-2 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              MADHANKUMAR. C
            </h3>
            
            <p className={`text-sm ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}>
              MANAGING DIRECTOR
            </p>
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
