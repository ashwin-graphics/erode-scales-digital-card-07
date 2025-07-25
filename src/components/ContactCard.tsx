
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
  className?: string;
}

const ContactItem = ({ icon, title, content, link, className = "" }: ContactCardProps) => {
  const Element = link ? 'a' : 'div';
  const { theme } = useTheme();
  
  return (
    <Element
      href={link}
      target={link ? "_blank" : undefined}
      rel={link ? "noopener noreferrer" : undefined}
      className={`flex items-start space-x-4 p-4 backdrop-blur-sm rounded-xl border transition-all duration-300 hover:scale-105 cursor-pointer ${
        theme === 'dark'
          ? 'bg-white/10 border-white/20 hover:bg-white/20'
          : 'bg-gray-900/10 border-gray-900/20 hover:bg-gray-900/20'
      } ${className}`}
    >
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#f05423] to-orange-600 rounded-full flex items-center justify-center text-white">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className={`text-sm font-medium mb-1 ${
          theme === 'dark' ? 'text-white/90' : 'text-gray-900'
        }`}>{title}</h3>
        <p className={`text-sm break-words ${
          theme === 'dark' ? 'text-white/80' : 'text-gray-700'
        }`}>{content}</p>
      </div>
    </Element>
  );
};

const ContactCard = () => {
  return (
    <div className="space-y-4">
      <ContactItem
        icon={<Phone size={20} />}
        title="Phone"
        content="+91 81225 00800"
        link="tel:+918122500800"
      />
      
      <ContactItem
        icon={<Mail size={20} />}
        title="Email"
        content="erodescaales@gmail.com"
        link="mailto:erodescaales@gmail.com"
      />
      
      <ContactItem
        icon={<Phone size={20} />}
        title="WhatsApp"
        content="+91 81225 00800"
        link="https://wa.me/918122500800"
      />
      
      <div className="space-y-3">
        <ContactItem
          icon={<MapPin size={20} />}
          title="Erode Office"
          content="39, New masjid street, S.k.building, Erode-638003"
          link="https://maps.app.goo.gl/KUxj8dLZ4FkYaf5i8?g_st=ac"
        />
        
        <ContactItem
          icon={<MapPin size={20} />}
          title="Kumarapalayam Office"
          content="49, Near Gowri Theater, New Pallipalayam road, Kumarapalayam-638813"
          link="https://maps.app.goo.gl/BtQY4M9JATKCQjaf7?g_st=ac"
        />
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <ContactItem
          icon={<Instagram size={20} />}
          title="Instagram"
          content="@erode_scales"
          link="https://www.instagram.com/erode_scales?igsh=ZGgxNTV5dmxzeDBm"
          className="flex-1 min-w-0"
        />
        
        <ContactItem
          icon={<Facebook size={20} />}
          title="Facebook"
          content="Erode Scales"
          link="https://www.facebook.com/erode.scaales"
          className="flex-1 min-w-0"
        />
      </div>
    </div>
  );
};

export default ContactCard;
