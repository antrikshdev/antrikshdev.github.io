import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Download } from 'lucide-react';
import { resumeData } from '../resumeData';

export const Hero: React.FC = () => {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center max-w-4xl z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-white/60">
            {resumeData.basics.title}
          </span>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8">
          {resumeData.basics.name}
        </h1>

        <p className="text-lg md:text-xl text-white/60 mb-12 leading-relaxed max-w-2xl mx-auto">
          {resumeData.basics.headline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToExperience}
            className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Experience <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </span>
          </button>

          <button
            onClick={() => window.print()}
            className="px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all flex items-center gap-2"
          >
            <Download size={18} /> Download Resume
          </button>
        </div>
      </motion.div>

      {/* Top 3 Impact Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-0 w-full overflow-hidden py-4 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm"
      >
        <div className="flex justify-around items-center gap-8 px-4 animate-pulse">
          {resumeData.achievements.slice(0, 3).map((ach, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">{ach.metric}</span>
              <span className="text-[10px] uppercase tracking-widest text-white/40">{ach.title}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
