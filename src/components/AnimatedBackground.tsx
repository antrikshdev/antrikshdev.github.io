import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#020617]">
      {/* Primary atmosphere */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full opacity-20 blur-[120px] animate-pulse"
        style={{ background: 'radial-gradient(circle, #2563eb 0%, transparent 70%)' }}
      />
      
      {/* Secondary atmosphere */}
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] rounded-full opacity-10 blur-[150px]"
        style={{ background: 'radial-gradient(circle, #1e3a8a 0%, transparent 70%)' }}
      />

      {/* Moving accent blob */}
      <div 
        className="absolute top-[30%] right-[10%] w-[40%] h-[40%] rounded-full opacity-15 blur-[100px]"
        style={{ 
          background: 'radial-gradient(circle, #2563eb 0%, transparent 70%)',
          animation: 'float 20s ease-in-out infinite alternate'
        }}
      />

      {/* Noise overlay for texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <style>{`
        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, 100px) scale(1.1); }
          100% { transform: translate(50px, -50px) scale(0.9); }
        }
      `}</style>
    </div>
  );
};
