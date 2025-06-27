
const BackgroundPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      
      {/* Professional grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Floating particles with business theme */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-white/5 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Professional geometric accents */}
      <div className="absolute top-20 left-10 w-24 h-24 border border-white/5 rotate-45 animate-spin" style={{ animationDuration: '30s' }}></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 border border-white/5 rotate-12" style={{ animationDuration: '25s' }}></div>
      <div className="absolute top-1/2 left-8 w-6 h-6 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-8 w-8 h-8 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Subtle light rays */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent transform -skew-x-12"></div>
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent transform skew-x-12"></div>
    </div>
  );
};

export default BackgroundPattern;
