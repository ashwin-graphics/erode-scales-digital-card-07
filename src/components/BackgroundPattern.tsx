
const BackgroundPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Deep gradient background similar to the reference */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
      
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      {/* Floating particles for depth */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full animate-pulse"
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
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-900/10 to-transparent"></div>
      
      {/* Corner accent lights */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-radial from-yellow-400/5 to-transparent rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-radial from-purple-400/5 to-transparent rounded-full blur-xl"></div>
    </div>
  );
};

export default BackgroundPattern;
