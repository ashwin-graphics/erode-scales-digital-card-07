
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full border backdrop-blur-sm transition-all duration-300 ${
        theme === 'dark'
          ? 'bg-white/10 border-white/20 text-white hover:bg-white/20'
          : 'bg-gray-900/10 border-gray-900/20 text-gray-900 hover:bg-gray-900/20'
      }`}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default ThemeToggle;
