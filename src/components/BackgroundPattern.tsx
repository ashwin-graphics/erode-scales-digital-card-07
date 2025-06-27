
import { useTheme } from '../contexts/ThemeContext';

const BackgroundPattern = () => {
  const { theme } = useTheme();

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Deep gradient background that changes with theme */}
      <div className={`absolute inset-0 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-black' 
          : 'bg-gradient-to-br from-gray-100 via-gray-50 to-white'
      }`}></div>
      
      {/* Subtle geometric pattern overlay */}
      <div className={`absolute inset-0 ${theme === 'dark' ? 'opacity-5' : 'opacity-10'}`}>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px),
            linear-gradient(-45deg, ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      {/* Floating particles for depth */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-pulse ${
              theme === 'dark' ? 'bg-white/10' : 'bg-black/10'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Subtle light rays from top */}
      <div className={`absolute top-0 left-0 w-full h-64 ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-blue-900/10 to-transparent' 
          : 'bg-gradient-to-b from-blue-100/20 to-transparent'
      }`}></div>
      
      {/* Corner accent lights */}
      <div className={`absolute top-10 right-10 w-32 h-32 rounded-full blur-xl ${
        theme === 'dark' 
          ? 'bg-gradient-radial from-yellow-400/5 to-transparent' 
          : 'bg-gradient-radial from-blue-400/10 to-transparent'
      }`}></div>
      <div className={`absolute bottom-10 left-10 w-24 h-24 rounded-full blur-xl ${
        theme === 'dark' 
          ? 'bg-gradient-radial from-purple-400/5 to-transparent' 
          : 'bg-gradient-radial from-purple-400/10 to-transparent'
      }`}></div>
    </div>
  );
};

export default BackgroundPattern;
