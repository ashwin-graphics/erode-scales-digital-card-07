
import { useState, useEffect } from 'react';

const ProfileHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  const texts = ['Madhankumar C', 'Managing Director'];
  const typingSpeed = 100;
  const erasingSpeed = 50;
  const delayBetweenTexts = 2000;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, delayBetweenTexts);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, erasingSpeed);
      } else {
        setTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, textIndex, texts]);

  return (
    <div className={`text-center space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="relative">
        <div className="w-32 h-32 mx-auto mb-6 relative">
          <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
            MC
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full animate-pulse opacity-30"></div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight min-h-[3.5rem] flex items-center justify-center">
          {displayText}
          <span className="animate-pulse ml-1 text-white/70">|</span>
        </h1>
        
        <div className="max-w-2xl mx-auto space-y-3 px-4">
          <p className="text-lg md:text-xl text-white/80 font-medium italic">
            "Visionary leader driving innovation in weighing solutions."
          </p>
          <p className="text-base md:text-lg text-white/70">
            Committed to precision, trust, and long-term service excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
