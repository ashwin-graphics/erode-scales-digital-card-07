
import { useTheme } from '../contexts/ThemeContext';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
}

const ProductCard = ({ title, description, image }: ProductCardProps) => {
  const { theme } = useTheme();

  return (
    <div className={`backdrop-blur-sm rounded-xl border overflow-hidden transition-all duration-300 hover:scale-105 ${
      theme === 'dark'
        ? 'bg-white/10 border-white/20 hover:bg-white/20'
        : 'bg-gray-900/10 border-gray-900/20 hover:bg-gray-900/20'
    }`}>
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className={`text-lg font-semibold mb-2 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          {title}
        </h3>
        <p className={`text-sm ${
          theme === 'dark' ? 'text-white/80' : 'text-gray-700'
        }`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
